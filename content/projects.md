---
title: Projects
---
<div class="container">
  <article class="resume-card page-card projects-page">

    <header class="projects-page-hero">
      <h1 class="projects-page-title">Projects</h1>
      <p class="projects-page-subtitle">Cloud, AI, and data experiments — click any card to explore.</p>
    </header>

    <div class="proj-grid" role="list">

      <!-- ── Project 1 ── -->
      <article
        class="proj-card"
        role="listitem"
        aria-expanded="false"
        tabindex="0"
        data-proj="portfolio-site"
      >
        <div class="proj-teaser">
          <div class="proj-icon" aria-hidden="true">🌐</div>
          <div class="proj-meta">
            <div class="proj-chips">
              <span class="proj-chip chip-blue">Python</span>
              <span class="proj-chip chip-violet">Static Site</span>
              <span class="proj-chip chip-emerald">AWS</span>
            </div>
            <h2 class="proj-title">Portfolio &amp; Blog Site - A Personal Engineering Lab</h2>
            <p class="proj-summary">A custom static site generator built from scratch with Python, Jinja2, and vanilla JS — deployed on AWS S3 + CloudFront.</p>
          </div>
          <button class="proj-toggle" aria-label="Expand project details" tabindex="-1">
            <svg class="proj-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div class="proj-detail" hidden>
          <div class="proj-detail-inner">
            <h3>Overview</h3>
            <p>I built this website as a personal space for experimenting, learning, and documenting ideas outside the boundaries of my day-to-day professional roles. After spending years leading products, programs, vendors, and large technology initiatives, I wanted to remain connected to the process of building things myself. The site gives me a place to explore cloud engineering, applied AI, data, automation, personal finance tools, and the relationship between technology, policy, government, and operational processes.</p>

            <p>Rather than starting with an off-the-shelf website builder or content-management system, I developed a lightweight <strong>static-site generator in Python</strong>. The build process reads Markdown and HTML content, parses page metadata with Python Frontmatter, converts Markdown into HTML, renders shared layouts through Jinja2, copies static assets, and generates a deployment-ready <code>dist</code> directory.</p>

            <p>The frontend is built with <strong>semantic HTML, custom CSS, and vanilla JavaScript</strong>. Although the site is statically generated, it includes richer application-like behavior: expandable project descriptions, responsive navigation, interactive résumé tiles, collapsible resource collections, modal previews for professional artifacts, active-page navigation, and dynamically aligned skills sections.</p>

            <p><strong>Accessibility</strong> was part of the implementation rather than an afterthought. Interactive cards support keyboard input and expose state through <code>aria-expanded</code>, <code>aria-pressed</code>, <code>aria-checked</code>, and <code>aria-hidden</code>. I also created <strong>Jest tests</strong> using a simulated browser environment to validate toggle behavior and confirm that mouse and keyboard interactions update both visual state and accessibility metadata correctly.</p>

            <p>The résumé presented a particularly interesting interface challenge. It combines a long professional timeline, responsive two-column layouts, skill groupings, quantified impact summaries, expandable artifacts, and project stories that must remain readable on desktop, mobile, and <strong>printed PDF output</strong>. This required extensive responsive CSS, JavaScript-assisted layout behavior, and dedicated print styling.</p>

            <h3>Tools and How I Used Them</h3>
            <p>I used <strong>Microsoft Visual Studio Code</strong> as the primary development environment for writing, organizing, running, and debugging the project. Its integrated terminal allowed me to build and serve the site locally, while its <strong>GitHub integration</strong> supported source control, change tracking, and recovery points throughout development.</p>

            <p><strong>Git and GitHub</strong> provide the project’s version history and a safe workflow for incremental changes. I used commits as checkpoints so that visual experiments, layout changes, and new interactive features could be tested without losing a stable version of the site.</p>

            <p>I incorporated <strong>GitHub Copilot</strong> as an in-editor development assistant for code completion, implementation suggestions, and exploring alternative approaches. <strong>ChatGPT and other AI-assisted workflows</strong> helped me brainstorm features, break down technical problems, troubleshoot errors, and refine content. I treated AI as a collaborative development tool: proposed solutions still had to be understood, adapted, tested locally, and validated against the intended user experience.</p>

            <p>I use <strong>Notion</strong> as the product-management layer for the project. My <a class="proj-inline-link" href="https://www.notion.so/2b1919b54eda80caa082ed007d729f4f?v=2b1919b54eda8032b921000c4ec5893d" target="_blank" rel="noopener noreferrer">Notion Kanban backlog</a> breaks the website into smaller stories covering content, design, functionality, testing, defects, infrastructure, and future experiments. Kanban helps me visualize progress, manage competing ideas, and develop the site incrementally.</p>

            <p>I use <strong>Tableau</strong> to explore data visualization and dashboard concepts that may become future projects or supporting portfolio content. It gives me a way to experiment with visual storytelling before deciding whether an idea belongs in an embedded dashboard, a static visualization, or a custom browser-based tool.</p>

            <h3>Technical Stack</h3>
            <p>The supporting toolkit includes <strong>Python, Jinja2, Python-Markdown, Python Frontmatter, HTML5, CSS3, and vanilla JavaScript</strong> for generation and interface development; <strong>Jest and jsdom</strong> for interaction testing; and <strong>Amazon S3 and CloudFront</strong> for fast, low-maintenance static hosting and content delivery.</p>

            <h3>Goals and Roadmap</h3>
            <p>My goal is not to declare the website “finished.” It is intended to grow alongside my interests. The roadmap includes publishing practical industry stories, expanding cloud and data projects, creating interactive personal-finance tools, improving automated testing and deployment, incorporating data visualizations, and experimenting with responsible uses of AI.</p>

            <p>The website is therefore both a <strong>publishing platform</strong> and an <strong>ongoing engineering project</strong>. It documents what I have learned while giving me a practical environment in which to keep building, testing, and improving.</p>

            <h3>Technical Highlights</h3>
            <ul>
              <li>Jinja2 templating with frontmatter-aware page rendering</li>
              <li>Vanilla JavaScript IIFE module — no npm, no bundler</li>
              <li>CSS Grid two-column resume layout with JavaScript-driven skill alignment</li>
              <li>Print-optimised <code>@media print</code> stylesheet for PDF export</li>
              <li>AWS S3 static hosting + CloudFront CDN distribution</li>
            </ul>

                        <div class="proj-links">
              <a class="btn btn-primary proj-link" href="https://github.com/chatterjeeshawn-png/shaonchatterjee" target="_blank" rel="noopener noreferrer">View on GitHub</a>
              <a class="btn btn-secondary proj-link" href="/">Live Site</a>
            </div>
          </div>
        </div>
      </article>

      <!-- ── Project 2 ── -->
      <article
        class="proj-card"
        role="listitem"
        aria-expanded="false"
        tabindex="0"
        data-proj="data-pipeline"
      >
        <div class="proj-teaser">
          <div class="proj-icon" aria-hidden="true">📊</div>
          <div class="proj-meta">
            <div class="proj-chips">
              <span class="proj-chip chip-amber">Python</span>
              <span class="proj-chip chip-blue">AWS Lambda</span>
              <span class="proj-chip chip-emerald">S3</span>
            </div>
            <h2 class="proj-title">Automated Reporting Pipeline</h2>
            <p class="proj-summary">A serverless ETL pipeline that ingests raw CSV exports, transforms them, and delivers formatted summary reports on a schedule.</p>
          </div>
          <button class="proj-toggle" aria-label="Expand project details" tabindex="-1">
            <svg class="proj-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div class="proj-detail" hidden>
          <div class="proj-detail-inner">
            <h3>Overview</h3>
            <p>
              The pipeline runs nightly via AWS EventBridge, triggering a Lambda function that pulls raw data from an S3 bucket, runs pandas transformations, and writes a formatted Excel/CSV report back to a destination bucket.
            </p>
            <h3>Technical Highlights</h3>
            <ul>
              <li>AWS Lambda + EventBridge for fully serverless scheduling</li>
              <li>pandas data transformation and outlier flagging</li>
              <li>S3 event-driven architecture with IAM least-privilege roles</li>
              <li>CloudWatch logging and error alerting via SNS</li>
              <li>Parameterised report templates — same pipeline serves multiple data sources</li>
            </ul>
            <h3>What I Learned</h3>
            <p>
              Serverless functions are deceptively simple to start but require careful attention to cold start times, memory limits, and error handling at scale. Infrastructure-as-code (Terraform) made the setup reproducible and portable.
            </p>
            <div class="proj-links">
              <a class="btn btn-primary proj-link" href="https://github.com/chatterjeeshawn-png/shaonchatterjee" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          </div>
        </div>
      </article>

      <!-- ── Project 3 ── -->
      <article
        class="proj-card"
        role="listitem"
        aria-expanded="false"
        tabindex="0"
        data-proj="finance-tools"
      >
        <div class="proj-teaser">
          <div class="proj-icon" aria-hidden="true">💰</div>
          <div class="proj-meta">
            <div class="proj-chips">
              <span class="proj-chip chip-emerald">JavaScript</span>
              <span class="proj-chip chip-violet">CSS</span>
              <span class="proj-chip chip-blue">Finance</span>
            </div>
            <h2 class="proj-title">Personal Finance Toolkit</h2>
            <p class="proj-summary">Browser-based calculators for net-worth tracking, retirement projections, and mortgage analysis — no data leaves the browser.</p>
          </div>
          <button class="proj-toggle" aria-label="Expand project details" tabindex="-1">
            <svg class="proj-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div class="proj-detail" hidden>
          <div class="proj-detail-inner">
            <h3>Overview</h3>
            <p>
              A collection of self-contained financial calculators built as pure HTML/CSS/JS — no frameworks, no data sent to any server. Users can model net worth growth, loan amortisation, and retirement savings projections interactively.
            </p>
            <h3>Technical Highlights</h3>
            <ul>
              <li>Compound interest &amp; retirement projection engine with adjustable inflation rate</li>
              <li>Mortgage amortisation table with extra-payment scenario modelling</li>
              <li>Net worth tracker using <code>localStorage</code> for persistence across sessions</li>
              <li>Accessible form controls with live ARIA announcements on recalculation</li>
              <li>Fully offline-capable — works without internet after first load</li>
            </ul>
            <h3>What I Learned</h3>
            <p>
              Financial modelling in the browser taught me how to balance precision (floating-point edge cases in currency math) with usability — and reinforced the value of privacy-first design where no backend is ever needed.
            </p>
            <div class="proj-links">
              <a class="btn btn-primary proj-link" href="/finance-tools/">Try the Tools</a>
              <a class="btn btn-secondary proj-link" href="https://github.com/chatterjeeshawn-png/shaonchatterjee" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          </div>
        </div>
      </article>

    </div><!-- /proj-grid -->
  </article>
</div>
