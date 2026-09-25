# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Confirmed (2026-09-25): migrate to plain static HTML/CSS with minimal vanilla JS, served directly by GitHub Pages with no build step. It replaces the Create React App/jQuery setup at the next redesign. Why: react-scripts 3.4.1 is end-of-life and won't build on current Node without the `--openssl-legacy-provider` workaround. The jQuery plugins are dead weight, and a one-page CV site needs neither React nor a runtime JSON fetch. Content stays in one editable place, so the "content is data" rule survives in simpler form. Migrated on 2026-09-25.

## Users

Primary (confirmed general, not tailored to one employer): recruiters, hiring managers, and interviewing engineers evaluating Mohammad Hossein Golestan for AI / agentic-AI engineering roles. They arrive from a CV link, LinkedIn, or GitHub, usually skimming in minutes, and need to answer: can this person build production AI systems, and how do I reach them?
Secondary: technical peers who want to see real work (GitHub, live demos).

## Product Purpose

The personal portfolio and CV site of Mohammad Hossein Golestan, at https://mhgolestan.github.io/. It exists to back up the PDF CV with links and a readable career story. Success means a visitor leaves convinced of his production-AI credibility and either contacts him or opens LinkedIn/GitHub.

## Positioning

He is an AI automation engineer who builds production agentic AI systems, and he gets them to production with QA/CI discipline. Three things together set him apart from a generic "AI engineer" portfolio:
- **Agentic AI in production at Verisk (2026–present):** LangGraph/LangChain workflows with human-in-the-loop on AWS Bedrock (Claude), RAG over vector stores (Docling), Langfuse observability, LLM-as-a-judge evaluation gating model/prompt changes, custom MCP servers, and Claude Code skills/agents built through spec-driven development.
- **Quality-gate discipline from 2.5 years as a QA Engineer at SLB:** Azure DevOps CI/CD with security scans and quality gates; Playwright/Pytest/XUnit suites; ISTQB certified.
- **Scientific rigor from a PhD:** petroleum engineering at NTNU (2018–2021), a C++ pore-scale simulation toolkit, uncertainty quantification, and validation against experimental data.
Headline: seven years across software, data, and research engineering.

## Operating Context

- Visitors reach the site from the CV's "Portfolio" link and from LinkedIn/GitHub. Many compare it directly against the PDF CV.
- Hosted on GitHub Pages, served straight from `main` with no build step.

## Capabilities and Constraints

- Stack: static HTML/CSS/JS on GitHub Pages (see ## Stack). There is no backend, so any contact has to happen through mailto or external links.
- Canonical content source: the CV supplied on 2026-09-25 (moderncv LaTeX). Site copy lives in `index.html` and must match the CV. The old `public/resumeData.json` was retired along with the Create React App build.
- Current facts (from the CV):
  - Location, shown as the city only: Málaga, Spain. Email: golestan1369@gmail.com.
  - **The phone number is never shown on the site.** No street address either.
  - Social links on the site: LinkedIn (linkedin.com/in/mhgolestan) and GitHub (github.com/mhgolestan) only. Facebook, Twitter, Google+, Skype, and Instagram are removed.
  - No skill-percentage bars. Skills are shown as the CV's named competencies.
  - Experience:
    - AI Automation Analyst, Verisk (Málaga, 2026–present)
    - Quality Assurance Engineer, SLB (Oslo, 2022–2025)
    - Data Scientist, Sannsyn AS (Oslo, 2021–2022)
    - PhD Research Fellow, NTNU (Trondheim, 2018–2021)
    - Research Assistant, Research Institute of Petroleum Industry (Tehran, 2015–2017)
  - Education:
    - PhD in Petroleum Engineering, NTNU (2018–2021)
    - MSc in Reservoir Engineering, Shahid Bahonar University of Kerman (2012–2014)
    - BSc in Production Engineering, Petroleum University of Technology (2008–2012)
  - Languages: Persian (native), English (C1), Norwegian (B1), Spanish (A2).
  - Certifications:
    - NVIDIA DLI Fundamentals of Deep Learning
    - Agentic AI: Build Your First Agentic AI System
    - Creating Advanced AI Applications with Python, APIs, and GitHub Models
    - Mastering AI-Assisted Development
    - ISTQB Certified Tester Foundation Level
    - Full-Stack Development with Containers
    - OWASP Overview
    - API Security Fundamentals
    - CI/CD with GitHub Actions and Jenkins
- The site is general-purpose. It is never tailored to a single employer or application.
- Instagram is removed (confirmed).
- Removed from the site at the owner's request (2026-09-25): the Research Assistant role (2015–2017), the whole Education section, and the "References available upon request" line. Certifications is its own section. These facts stay in this record as CV truth but are not shown on the site.

## Brand Commitments

- Name: Mohammad Hossein Golestan. The domain is mhgolestan.github.io.
- Voice (from the CV): concrete, evidence-first engineering language. Name the tool, the pattern, and the outcome (for example, "LLM-as-a-judge evaluation gating every model and prompt change"). Avoid hype adjectives.

## Evidence on Hand

- The CV text above (summary, competencies, experience bullets).
- Old 2020 React learning builds (Face Recognition, Weather App, List of Countries) were removed from the site at the owner's request on 2026-09-25. Do not re-add a projects section unless asked.
- Profile photo: the 2020 photo was retired with the old site; it is still in git history. No current photo is on hand.
- **Absent, so future work must not invent them:**
  - testimonials (the Testimonials section is empty and disabled)
  - public demos or code of the Verisk/SLB work, which is internal
  - metrics or impact numbers
  - client logos
  - a downloadable CV file (`resumedownload` is empty)
- References: "Available upon request."

## Product Principles

1. **The CV is the source of truth.** The site never contradicts it, and it goes further only with linked evidence.
2. **Lead with current AI work.** QA, data, and PhD history support the production-AI story; they don't compete with it.
3. **Show, don't claim.** Wherever possible, back a claim with a link, a demo, or a concrete tool/pattern name.
4. **Contact is one step away,** from any point on the page.
5. **Nothing fabricated.** No invented metrics, testimonials, or employer artifacts.
