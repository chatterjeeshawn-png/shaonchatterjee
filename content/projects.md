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
            <h2 class="proj-title">Portfolio &amp; Blog Site</h2>
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
            <p>
              This site is itself the project. Rather than using an off-the-shelf CMS or framework, I built a lightweight Python-based static site generator that converts Markdown + HTML content files into fully deployed pages.
            </p>
            <h3>Technical Highlights</h3>
            <ul>
              <li>Jinja2 templating with frontmatter-aware page rendering</li>
              <li>Vanilla JavaScript IIFE module — no npm, no bundler</li>
              <li>CSS Grid two-column resume layout with JavaScript-driven skill alignment</li>
              <li>Print-optimised <code>@media print</code> stylesheet for PDF export</li>
              <li>AWS S3 static hosting + CloudFront CDN distribution</li>
            </ul>
            <h3>What I Learned</h3>
            <p>
              Building without a framework forces deliberate decisions at every layer. I gained a much deeper understanding of how browsers render HTML/CSS and how static hosting pipelines work end-to-end.
            </p>
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
