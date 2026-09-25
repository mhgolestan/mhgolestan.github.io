// Thin Section: polarizer theme toggle, section nav highlight, and the Fig. 1 agentic-pipeline animation.
(function () {
  'use strict';
  var root = document.documentElement;
  var darkMq = window.matchMedia('(prefers-color-scheme: dark)');
  var reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)');

  function isCrossed() {
    return root.dataset.theme ? root.dataset.theme === 'dark' : darkMq.matches;
  }

  // ---------- polarizer (theme) ----------
  var polar = document.querySelector('.polar');
  var polarLabel = document.querySelector('.polar__label');
  var listeners = [];
  function syncPolar() {
    var x = isCrossed();
    polar.setAttribute('aria-pressed', String(x));
    polarLabel.textContent = x ? 'XPL' : 'PPL';
    listeners.forEach(function (fn) { fn(x); });
  }
  polar.addEventListener('click', function () {
    var next = isCrossed() ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('polars', next); } catch (e) {}
    syncPolar();
  });
  darkMq.addEventListener('change', function () { if (!root.dataset.theme) syncPolar(); });

  // ---------- nav: highlight the section in view ----------
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.addr a'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.setAttribute('aria-current', a.getAttribute('href') === '#' + en.target.id ? 'true' : 'false');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    navLinks.forEach(function (a) { var s = document.querySelector(a.getAttribute('href')); if (s) io.observe(s); });
  }


  // ---------- Fig. 1: an agentic pipeline under the microscope ----------
  var canvas = document.querySelector('.field__canvas');
  if (!canvas || !canvas.getContext) { syncPolar(); return; }
  var ctx = canvas.getContext('2d');
  var relEl = document.querySelector('[data-count="released"]');
  var retEl = document.querySelector('[data-count="retried"]');
  var pauseLabel = document.querySelector('.field__again-l');
  var pauseBtn = document.querySelector('.field__again');

  // Thin-section material: faint grains behind the diagram, mineral colours for the nodes under crossed polars.
  var GRAIN_XPL = ['#ecece8', '#c3c3bf', '#94948f', '#e6d27c', '#e38a3a', '#c23a86', '#4a73e0', '#2bb3a2', '#b9d64c'];
  var NODE_XPL = ['#ecece8', '#e6d27c', '#2bb3a2', '#c3c3bf', '#e38a3a', '#b9d64c', '#e6d27c', '#ecece8'];

  // The pipeline, in normalised eyepiece coordinates.
  var NODES = [
    { x: .50, y: .13, t: 'Documents', s: 'PDF in' },
    { x: .27, y: .28, t: 'Docling', s: 'parse · chunk' },
    { x: .73, y: .28, t: 'Embeddings', s: 'vector store' },
    { x: .50, y: .43, t: 'Retrieve', s: 'RAG' },
    { x: .27, y: .59, t: 'Claude agent', s: 'LangGraph · Bedrock' },
    { x: .73, y: .59, t: 'LLM-as-a-judge', s: 'eval gate' },
    { x: .50, y: .74, t: 'Human review', s: 'in the loop' },
    { x: .50, y: .88, t: 'Release', s: 'production' }
  ];
  var EDGES = [
    { a: 0, b: 1 }, { a: 1, b: 2 }, { a: 2, b: 3 }, { a: 3, b: 4 },
    { a: 4, b: 5, bend: -.05 },
    { a: 5, b: 4, bend: -.08, label: 'retry' },
    { a: 5, b: 6, label: 'pass' },
    { a: 6, b: 7 }
  ];
  var OUT = {}; // node -> outgoing edge indices
  EDGES.forEach(function (e, i) {
    var dx = NODES[e.b].x - NODES[e.a].x, dy = NODES[e.b].y - NODES[e.a].y, len = Math.hypot(dx, dy), k = e.bend || 0;
    e.cx = (NODES[e.a].x + NODES[e.b].x) / 2 - dy / len * k;
    e.cy = (NODES[e.a].y + NODES[e.b].y) / 2 + dx / len * k;
    e.len = len * (1 + Math.abs(k) * 2);
    (OUT[e.a] = OUT[e.a] || []).push(i);
  });

  function mulberry32(a) {
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  // smooth closed "grain" around (x, y) with radii rx, ry
  function blob(c, x, y, rx, ry, jit) {
    var n = jit.length;
    var px = function (k) { var a = k / n * Math.PI * 2; return x + Math.cos(a) * rx * jit[k % n]; };
    var py = function (k) { var a = k / n * Math.PI * 2; return y + Math.sin(a) * ry * jit[k % n]; };
    c.beginPath();
    c.moveTo((px(0) + px(1)) / 2, (py(0) + py(1)) / 2);
    for (var k = 1; k <= n; k++) c.quadraticCurveTo(px(k), py(k), (px(k) + px(k + 1)) / 2, (py(k) + py(k + 1)) / 2);
    c.closePath();
  }
  function at(e, t) {
    var A = NODES[e.a], B = NODES[e.b], u = 1 - t;
    return [u * u * A.x + 2 * u * t * e.cx + t * t * B.x, u * u * A.y + 2 * u * t * e.cy + t * t * B.y];
  }

  var rand = mulberry32(1369);
  var GRAINS = [];
  for (var g = 0; g < 900 && GRAINS.length < 260; g++) {
    var gx = rand(), gy = rand(), ok = true;
    for (var q = 0; q < GRAINS.length && ok; q++) if (Math.hypot(GRAINS[q].x - gx, GRAINS[q].y - gy) < .052) ok = false;
    if (!ok) continue;
    var jit = []; for (var v = 0; v < 9; v++) jit.push(.78 + rand() * .34);
    GRAINS.push({ x: gx, y: gy, r: .021 + rand() * .01, j: jit, c: GRAIN_XPL[(rand() * GRAIN_XPL.length) | 0] });
  }
  NODES.forEach(function (n) { n.j = []; for (var v = 0; v < 11; v++) n.j.push(.93 + rand() * .14); });

  var S, texture, nodesLayer, shown, fade = null, col = {};
  function readColours(crossed) {
    var cs = getComputedStyle(root);
    col.pore = cs.getPropertyValue('--pore').trim();
    col.oil = cs.getPropertyValue('--oil').trim();
    col.crossed = crossed;
    col.edge = crossed ? 'rgba(236,238,233,.5)' : 'rgba(255,255,255,.7)';
    col.fail = cs.getPropertyValue('--retry').trim();
  }

  // static layer: epoxy ground, faint grains, reticle, edges, labelled nodes
  function paintTexture() {
    texture = document.createElement('canvas');
    texture.width = texture.height = S;
    var c = texture.getContext('2d');
    c.fillStyle = col.pore; c.fillRect(0, 0, S, S);
    GRAINS.forEach(function (gr) {
      blob(c, gr.x * S, gr.y * S, gr.r * S, gr.r * S, gr.j);
      c.fillStyle = col.crossed ? gr.c : '#ffffff';
      c.globalAlpha = col.crossed ? .14 : .12;
      c.fill();
    });
    c.globalAlpha = 1;

    c.strokeStyle = col.crossed ? 'rgba(236,238,233,.28)' : 'rgba(255,255,255,.4)';
    c.lineWidth = Math.max(1, S / 700);
    c.beginPath();
    c.moveTo(S / 2, 0); c.lineTo(S / 2, S); c.moveTo(0, S / 2); c.lineTo(S, S / 2);
    for (var t = -4; t <= 4; t++) {
      if (!t) continue;
      var h = S * (t % 2 ? .01 : .016), x = S / 2 + t * S * .05;
      c.moveTo(x, S / 2 - h); c.lineTo(x, S / 2 + h);
    }
    c.stroke();

    c.strokeStyle = col.edge; c.fillStyle = col.edge;
    c.lineWidth = Math.max(1.5, S / 420);
    EDGES.forEach(function (e) {
      var A = NODES[e.a], B = NODES[e.b];
      c.beginPath(); c.moveTo(A.x * S, A.y * S); c.quadraticCurveTo(e.cx * S, e.cy * S, B.x * S, B.y * S); c.stroke();
      var p = at(e, .5), p2 = at(e, .53), ang = Math.atan2(p2[1] - p[1], p2[0] - p[0]), a = S * .012;
      c.beginPath();
      c.moveTo(p[0] * S + Math.cos(ang) * a, p[1] * S + Math.sin(ang) * a);
      c.lineTo(p[0] * S + Math.cos(ang + 2.5) * a, p[1] * S + Math.sin(ang + 2.5) * a);
      c.lineTo(p[0] * S + Math.cos(ang - 2.5) * a, p[1] * S + Math.sin(ang - 2.5) * a);
      c.fill();
      if (e.label) {
        c.font = '500 ' + Math.round(S * .019) + 'px Archivo, sans-serif';
        c.textAlign = 'center'; c.textBaseline = 'middle';
        var off = e.label === 'retry' ? .035 : 0, side = e.label === 'pass' ? .045 : 0;
        c.fillText(e.label, (p[0] + side) * S, (p[1] + off) * S);
      }
    });

    // nodes live on their own layer so packets pass beneath the labels
    nodesLayer = document.createElement('canvas');
    nodesLayer.width = nodesLayer.height = S;
    c = nodesLayer.getContext('2d');
    var fs = S * .028;
    NODES.forEach(function (n, i) {
      c.font = '650 ' + fs + 'px Archivo, sans-serif';
      var w1 = c.measureText(n.t).width;
      c.font = '400 ' + fs * .72 + 'px Archivo, sans-serif';
      var w2 = c.measureText(n.s).width;
      n.rx = (Math.max(w1, w2) / 2 + fs * 1.1) / S; n.ry = fs * 1.55 / S;
      blob(c, n.x * S, n.y * S, n.rx * S, n.ry * S, n.j);
      c.fillStyle = col.crossed ? NODE_XPL[i] : '#f5f6f2';
      c.shadowColor = 'rgba(0,0,0,.28)'; c.shadowBlur = S * .012; c.shadowOffsetY = S * .004;
      c.fill();
      c.shadowColor = 'transparent';
      c.textAlign = 'center'; c.textBaseline = 'middle';
      c.fillStyle = '#14161b';
      c.font = '650 ' + fs + 'px Archivo, sans-serif';
      c.fillText(n.t, n.x * S, n.y * S - fs * .42);
      c.fillStyle = col.crossed ? 'rgba(11,12,15,.75)' : '#454b55';
      c.font = '400 ' + fs * .72 + 'px Archivo, sans-serif';
      c.fillText(n.s, n.x * S, n.y * S + fs * .55);
    });
  }

  // ---------- simulation: requests flow through, the judge sends some back ----------
  var packets = [], flashes = [], released = 0, retried = 0, spawnAt = 0, last = 0;
  var paused = false, visible = true, raf = 0;
  var srand = mulberry32(2026);

  function arrive(p) {
    var node = EDGES[p.e].b;
    flashes.push({ n: node, t0: performance.now(), fail: p.fail });
    if (node === 7) { released++; report(); return false; }
    var outs = OUT[node];
    if (node === 5) {
      var pass = srand() < .72;
      p.e = outs.filter(function (i) { return EDGES[i].label === (pass ? 'pass' : 'retry'); })[0];
      p.fail = !pass;
      if (!pass) { retried++; report(); }
    } else {
      p.e = outs[0];
      if (node === 4) p.fail = false;
    }
    p.t = 0;
    return true;
  }
  function step(dt) {
    var now = performance.now();
    if (now > spawnAt && packets.length < 12) { packets.push({ e: 0, t: 0, fail: false }); spawnAt = now + 1100 + srand() * 500; }
    packets = packets.filter(function (p) {
      p.t += dt * .24 / EDGES[p.e].len;
      return p.t < 1 || arrive(p);
    });
  }
  function report() {
    relEl.textContent = released;
    retEl.textContent = retried;
  }

  function compose() {
    if (!texture) return;
    ctx.drawImage(texture, 0, 0);
    var now = performance.now();
    packets.forEach(function (p) {
      var pt = at(EDGES[p.e], p.t);
      ctx.beginPath();
      ctx.arc(pt[0] * S, pt[1] * S, S * .0105, 0, Math.PI * 2);
      ctx.fillStyle = p.fail ? col.fail : col.oil;
      ctx.fill();
      ctx.lineWidth = S * .003; ctx.strokeStyle = 'rgba(0,0,0,.35)'; ctx.stroke();
    });
    ctx.drawImage(nodesLayer, 0, 0);
    flashes = flashes.filter(function (f) {
      var k = (now - f.t0) / 700;
      if (k >= 1) return false;
      var n = NODES[f.n];
      blob(ctx, n.x * S, n.y * S, (n.rx + .012 + k * .02) * S, (n.ry + .012 + k * .02) * S, n.j);
      ctx.strokeStyle = f.fail ? col.fail : col.oil;
      ctx.globalAlpha = 1 - k;
      ctx.lineWidth = S * .005;
      ctx.stroke();
      ctx.globalAlpha = 1;
      return true;
    });
    if (fade) {
      var f = Math.min(1, (now - fade.t0) / 700);
      ctx.globalAlpha = Math.pow(1 - f, 3); // the old polarizer state dissolves out
      ctx.drawImage(fade.img, 0, 0);
      ctx.globalAlpha = 1;
      if (f >= 1) fade = null;
    }
  }

  function frame(ts) {
    raf = 0;
    var dt = last ? Math.min(.25, (ts - last) / 1000) : 0;
    last = ts;
    step(dt);
    compose();
    loop();
  }
  function loop() {
    if (raf || !texture) return;
    if (!paused && visible && !reduceMq.matches) raf = requestAnimationFrame(frame);
    else if (fade) raf = requestAnimationFrame(function () { raf = 0; compose(); loop(); });
  }
  function halt() { if (raf) cancelAnimationFrame(raf); raf = 0; last = 0; }

  function layout() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    S = Math.max(200, Math.round(canvas.getBoundingClientRect().width * dpr));
    canvas.width = canvas.height = S;
    shown = isCrossed();
    readColours(shown);
    paintTexture();
  }

  listeners.push(function (crossed) {
    if (!texture || crossed === shown) return;
    if (!reduceMq.matches) {
      var snap = document.createElement('canvas');
      snap.width = snap.height = S;
      snap.getContext('2d').drawImage(canvas, 0, 0);
      fade = { img: snap, t0: performance.now() };
    }
    shown = crossed;
    readColours(crossed);
    paintTexture();
    compose();
    loop();
  });

  pauseBtn.addEventListener('click', function () {
    paused = !paused;
    pauseBtn.setAttribute('aria-pressed', String(paused));
    pauseLabel.textContent = paused ? 'Play' : 'Pause';
    if (paused) halt(); else loop();
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (en) {
      visible = en[0].isIntersecting;
      if (visible) loop(); else halt();
    }).observe(canvas);
  }
  document.addEventListener('visibilitychange', function () { if (document.hidden) halt(); else loop(); });

  var lastW = 0, rt;
  window.addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () {
      var w = canvas.getBoundingClientRect().width;
      if (Math.abs(w - lastW) < 24) return;
      lastW = w; layout(); compose();
    }, 150);
  });

  function start() {
    lastW = canvas.getBoundingClientRect().width;
    layout();
    if (reduceMq.matches) {
      // a still of the pipeline mid-run
      packets = [{ e: 1, t: .5 }, { e: 3, t: .4 }, { e: 4, t: .55 }, { e: 5, t: .5, fail: true }, { e: 6, t: .5 }];
      released = 9; retried = 3;
      pauseBtn.hidden = true;
    }
    report();
    compose();
    syncPolar();
    loop();
  }
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(start, start);
})();
