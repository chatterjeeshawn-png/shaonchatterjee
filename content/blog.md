<style>
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,500;6..72,600&display=swap");

  .blog-hero {
    min-height: 430px;
    background-image:
      linear-gradient(96deg, rgba(7, 21, 48, 0.94) 0%, rgba(7, 21, 48, 0.78) 40%, rgba(7, 21, 48, 0.3) 78%),
      url('/static/images/blog-image-one.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .blog-hero .hero-inner {
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding: 118px 28px 42px;
  }

  .blog-hero-content {
    max-width: 760px;
    color: #edf4ff;
    font-family: "DM Sans", Inter, ui-sans-serif, system-ui;
  }

  .blog-kicker {
    margin: 0 0 12px;
    color: #f4bd52;
    font-size: 0.79rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .blog-hero h1 {
    margin: 0;
    color: #ffffff;
    font-family: "Newsreader", Georgia, serif;
    font-size: clamp(2.6rem, 6.8vw, 5.6rem);
    line-height: 0.92;
    letter-spacing: -0.036em;
  }

  .blog-hero .blog-dek {
    margin: 1rem 0 0;
    color: #e6eefc;
    font-size: clamp(1.04rem, 2.2vw, 1.22rem);
    line-height: 1.56;
  }

  .blog-hero .blog-meta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: 14px;
    color: #f0f5ff;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .blog-hero .blog-meta-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #f4bd52;
  }

  .blog-container {
    max-width: 1380px;
    margin: 0 auto;
    padding: 0 24px 42px;
  }

  .blog-shell {
    margin-top: -78px;
    background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
    border-radius: 16px;
    border: 1px solid rgba(37, 99, 235, 0.14);
    box-shadow: 0 16px 34px rgba(10, 30, 66, 0.14);
    padding: 24px;
  }

  .blog-intro {
    margin: 0 0 16px;
    color: #3d5271;
    font-family: "DM Sans", Inter, ui-sans-serif, system-ui;
    font-size: 1rem;
    line-height: 1.62;
  }

  .blog-list {
    display: grid;
    gap: 16px;
  }

  .blog-entry {
    border: 1px solid rgba(37, 99, 235, 0.16);
    border-radius: 14px;
    background: #ffffff;
    overflow: hidden;
    transition: box-shadow 160ms ease, border-color 160ms ease;
  }

  .blog-entry[open] {
    border-color: rgba(37, 99, 235, 0.34);
    box-shadow: 0 10px 24px rgba(18, 55, 102, 0.1);
  }

  .blog-entry summary {
    list-style: none;
    cursor: pointer;
    padding: 18px 20px;
    background: linear-gradient(180deg, rgba(37, 99, 235, 0.06), rgba(37, 99, 235, 0.02));
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 12px;
    align-items: center;
  }

  .blog-entry summary::-webkit-details-marker {
    display: none;
  }

  .entry-title {
    margin: 0;
    color: #0f2850;
    font-family: "Newsreader", Georgia, serif;
    font-size: clamp(1.45rem, 2.3vw, 2rem);
    line-height: 1.12;
    letter-spacing: -0.018em;
  }

  .entry-meta {
    margin-top: 4px;
    color: #385274;
    font-family: "DM Sans", Inter, ui-sans-serif, system-ui;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .entry-toggle {
    color: #174078;
    font-family: "DM Sans", Inter, ui-sans-serif, system-ui;
    font-size: 0.88rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .blog-entry:not([open]) .entry-toggle-open,
  .blog-entry[open] .entry-toggle-close {
    display: none;
  }

  .blog-entry-content {
    padding: 20px 22px 24px;
    color: #17273d;
    font-family: "DM Sans", Inter, ui-sans-serif, system-ui;
    font-size: 1.03rem;
    line-height: 1.82;
  }

  .blog-entry-footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: 24px;
    padding-top: 16px;
    border-top: 1px solid rgba(37, 99, 235, 0.12);
  }

  .blog-engagement {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .blog-like-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid rgba(37, 99, 235, 0.18);
    background: linear-gradient(180deg, rgba(37, 99, 235, 0.06), rgba(37, 99, 235, 0.02));
    color: #174078;
    padding: 10px 14px;
    border-radius: 999px;
    font: 700 0.9rem/1 "DM Sans", Inter, ui-sans-serif, system-ui;
    cursor: pointer;
    transition: transform 150ms ease, box-shadow 150ms ease, background 150ms ease, color 150ms ease;
  }

  .blog-like-button:hover,
  .blog-like-button:focus {
    transform: translateY(-1px);
    box-shadow: 0 8px 18px rgba(18, 55, 102, 0.08);
    outline: none;
  }

  .blog-like-button.is-liked {
    background: linear-gradient(180deg, rgba(220, 38, 38, 0.12), rgba(220, 38, 38, 0.06));
    border-color: rgba(220, 38, 38, 0.2);
    color: #a21627;
  }

  .blog-stat {
    color: #355171;
    font: 600 0.9rem/1.2 "DM Sans", Inter, ui-sans-serif, system-ui;
  }

  .blog-stat strong {
    color: #0f2850;
  }

  .blog-entry-content p {
    margin: 0 0 1rem;
  }

  .blog-entry-content .lead {
    color: #1f3451;
    font-family: "Newsreader", Georgia, serif;
    font-size: clamp(1.34rem, 2.6vw, 1.84rem);
    line-height: 1.5;
    margin-bottom: 1.15rem;
  }

  .blog-entry-content h3 {
    margin: 2rem 0 0.65rem;
    color: #0f2850;
    font-family: "Newsreader", Georgia, serif;
    font-size: clamp(1.64rem, 2.8vw, 2.2rem);
    line-height: 1.1;
    letter-spacing: -0.018em;
  }

  .blog-entry-content blockquote {
    margin: 1.75rem 0;
    border-left: 4px solid #f4bd52;
    padding: 0.3rem 0 0.35rem 1.3rem;
  }

  .blog-entry-content blockquote p {
    margin: 0;
    color: #102d52;
    font-family: "Newsreader", Georgia, serif;
    font-size: clamp(1.3rem, 3.2vw, 2.05rem);
    line-height: 1.42;
  }

  .blog-entry-content .closing-note {
    margin-top: 1.9rem;
    padding: 1.2rem 1.3rem;
    border-radius: 12px;
    border: 1px solid rgba(37, 99, 235, 0.2);
    background: linear-gradient(180deg, rgba(37, 99, 235, 0.07), rgba(37, 99, 235, 0.03));
  }

  .blog-entry-content .closing-note p {
    margin: 0;
    color: #0f2850;
    font-family: "Newsreader", Georgia, serif;
    font-size: clamp(1.15rem, 2.4vw, 1.62rem);
    line-height: 1.32;
  }

  .blog-entry-content .coming-soon {
    margin: 0;
    color: #203852;
    font-size: 1rem;
  }

  .blog-entry-content ul {
    margin: 0.5rem 0 0;
    padding-left: 1.2rem;
    color: #223b58;
  }

  @media (max-width: 900px) {
    .blog-hero {
      min-height: 360px;
      background-position: 58% center;
    }

    .blog-hero .hero-inner {
      padding: 104px 18px 26px;
    }

    .blog-container {
      padding: 0 14px 28px;
    }

    .blog-shell {
      margin-top: -56px;
      padding: 14px;
      border-radius: 12px;
    }

    .blog-entry summary {
      padding: 14px;
      grid-template-columns: 1fr;
      gap: 8px;
    }

    .blog-entry-content {
      padding: 16px 14px 18px;
    }

    .blog-entry-footer {
      align-items: flex-start;
    }
  }
</style>

<div class="page-hero blog-hero" role="img" aria-label="Blog hero image showing coding and product-building visuals">
  <div class="hero-inner">
    <div class="blog-hero-content">
      <p class="blog-kicker">Building in Public · The Beginning</p>
      <h1>Blog</h1>
      <p class="blog-dek">Notes from building projects at the intersection of cloud, product thinking, and practical automation.</p>
      <div class="blog-meta">
        <span>Long-form entries</span>
        <span class="blog-meta-dot" aria-hidden="true"></span>
        <span>Expandable cards</span>
      </div>
    </div>
  </div>
</div>

<div class="container blog-container">
  <article class="blog-shell">
    <p class="blog-intro">Open each card to read the full post. The most recent entry is expanded by default.</p>

    <section class="blog-list" aria-label="Blog posts">
      <details class="blog-entry" open data-post-key="first-post-first-site" data-read-count="128" data-like-count="34">
        <summary>
          <div>
            <h2 class="entry-title">First Post. First Site.</h2>
            <p class="entry-meta">Portfolio Journey · 7 min read · September 2026</p>
          </div>
          <div class="entry-toggle">
            <span class="entry-toggle-open">Collapse</span>
            <span class="entry-toggle-close">Expand</span>
          </div>
        </summary>
        <div class="blog-entry-content">
          <p class="lead">A year ago, I wasn't planning to build a portfolio website. I was simply looking for practical ways to apply the Python skills I had developed while reading <a href="https://automatetheboringstuff.com/" target="_blank" rel="noopener noreferrer"><em>Automate the Boring Stuff with Python</em></a>.</p>

          <p>I began with small programs designed to solve everyday problems: scheduling yard work around the weather forecast, modeling amortization scenarios, and automating tasks that would otherwise consume unnecessary time.</p>
          <p>Then the experiment grew.</p>
          <p>After more than a decade in the technology industry, I had seen major shifts reshape the way we work. Cloud computing transformed the industry in the 2010s, and artificial intelligence was beginning to feel like the next defining change.</p>

          <blockquote>
            <p>I realized that keeping pace would require more than reading about emerging technologies. I needed to build something with them.</p>
          </blockquote>

          <p>That realization became the starting point for this website.</p>

          <h3>Turning an Idea into a Product</h3>
          <p>Having spent much of my career managing products and projects, I approached the website as I would any new initiative. I created a Notion dashboard, mapped its major components, and began defining acceptance criteria for each one.</p>
          <p>What initially sounded like a simple personal project quickly revealed itself to be something much larger.</p>
          <p>A meaningful portfolio needed more than an attractive interface. It required a clear audience, thoughtful content, sound architecture, reliable infrastructure, and a compelling explanation of who I am and how I work.</p>

          <h3>Finding the Cloud Resume Challenge</h3>
          <p>While researching how others had approached similar projects, I discovered the <a href="https://cloudresumechallenge.dev/" target="_blank" rel="noopener noreferrer"><em>Cloud Resume Challenge</em></a>.</p>
          <p>The concept immediately appealed to me. It combined a personal website with hands-on exposure to cloud infrastructure, software development, automation, security, and deployment.</p>
          <p>I read stories and watched videos from people who had completed the challenge. Their experiences were intimidating and inspiring in equal measure.</p>

          <h3>The Hardest Part Wasn't the Technology</h3>
          <p>Before building, I had to decide what the site should communicate.</p>
          <p>In today's environment, simply listing responsibilities is not enough. I needed to communicate the right experience to the right audience at the right moment.</p>
          <p>That made curating the content for my interactive resume one of the most demanding parts of the project.</p>

          <h3>Upgrading the Toolbox</h3>
          <p>My bare-bones Mu editor had served me well for household Python projects, but this project required a more capable toolkit.</p>
          <p>I moved to Visual Studio Code and began using ChatGPT to support brainstorming and content development. I added GitHub Copilot Pro for in-editor assistance, used GitHub for version control, and created an AWS account to explore cloud architecture and deployment strategies.</p>
          <p>Progress was rarely linear, and the website evolved through many small decisions, experiments, mistakes, and revisions.</p>

          <h3>More Than a Portfolio</h3>
          <p>This site showcases my professional experience, but it also represents something more personal: a commitment to staying curious, adaptable, and willing to build beyond the boundaries of my day-to-day role.</p>
          <p>The finished product matters, but the journey behind it matters just as much.</p>

          <div class="closing-note">
            <p>This is my first website and my first blog post.<br/>It will not be my last.</p>
          </div>

          <div class="blog-entry-footer">
            <div class="blog-engagement">
              <button class="blog-like-button" type="button" aria-pressed="false">
                <span class="blog-like-icon" aria-hidden="true">♡</span>
                <span class="blog-like-label">Like</span>
                <span class="blog-like-count">34</span>
              </button>
            </div>
            <div class="blog-stat">Read <strong class="blog-read-count">128</strong> times</div>
          </div>
        </div>
      </details>

      <details class="blog-entry" data-post-key="personal-tooling-production-thinking" data-read-count="42" data-like-count="11">
        <summary>
          <div>
            <h2 class="entry-title">From Personal Tooling to Production Thinking</h2>
            <p class="entry-meta">Cloud + Process · Draft</p>
          </div>
          <div class="entry-toggle">
            <span class="entry-toggle-open">Collapse</span>
            <span class="entry-toggle-close">Expand</span>
          </div>
        </summary>
        <div class="blog-entry-content">
          <p class="coming-soon">This post is in progress and will cover how lightweight automation habits can evolve into structured product and cloud delivery practices.</p>
          <ul>
            <li>Designing practical acceptance criteria for personal projects</li>
            <li>Balancing speed, maintainability, and deployment choices</li>
            <li>What changed once infrastructure entered the picture</li>
          </ul>

          <div class="blog-entry-footer">
            <div class="blog-engagement">
              <button class="blog-like-button" type="button" aria-pressed="false">
                <span class="blog-like-icon" aria-hidden="true">♡</span>
                <span class="blog-like-label">Like</span>
                <span class="blog-like-count">11</span>
              </button>
            </div>
            <div class="blog-stat">Read <strong class="blog-read-count">42</strong> times</div>
          </div>
        </div>
      </details>

      <details class="blog-entry" data-post-key="ai-workflow-help-hype-habits" data-read-count="27" data-like-count="9">
        <summary>
          <div>
            <h2 class="entry-title">AI in the Workflow: Help, Hype, and Habits</h2>
            <p class="entry-meta">AI + Delivery · Draft</p>
          </div>
          <div class="entry-toggle">
            <span class="entry-toggle-open">Collapse</span>
            <span class="entry-toggle-close">Expand</span>
          </div>
        </summary>
        <div class="blog-entry-content">
          <p class="coming-soon">This post will focus on practical AI usage patterns that improve quality and velocity without losing ownership of architecture, content, and decision-making.</p>
          <ul>
            <li>Where AI accelerates and where human judgment still dominates</li>
            <li>Reducing rework through better prompting and review loops</li>
            <li>Maintaining authenticity while building in public</li>
          </ul>

          <div class="blog-entry-footer">
            <div class="blog-engagement">
              <button class="blog-like-button" type="button" aria-pressed="false">
                <span class="blog-like-icon" aria-hidden="true">♡</span>
                <span class="blog-like-label">Like</span>
                <span class="blog-like-count">9</span>
              </button>
            </div>
            <div class="blog-stat">Read <strong class="blog-read-count">27</strong> times</div>
          </div>
        </div>
      </details>
    </section>
  </article>
</div>

<script>
  (function () {
    function safeKey(postKey, suffix) {
      return 'blog:' + postKey + ':' + suffix;
    }

    function parseCount(value, fallback) {
      var parsed = parseInt(value, 10);
      return Number.isFinite(parsed) ? parsed : fallback;
    }

    document.querySelectorAll('.blog-entry').forEach(function (entry) {
      var postKey = entry.getAttribute('data-post-key');
      if (!postKey) return;

      var likeButton = entry.querySelector('.blog-like-button');
      var likeCountEl = entry.querySelector('.blog-like-count');
      var readCountEl = entry.querySelector('.blog-read-count');
      var liked = false;
      var baseLikes = parseCount(entry.getAttribute('data-like-count'), 0);
      var baseReads = parseCount(entry.getAttribute('data-read-count'), 0);
      var storedLikes = localStorage.getItem(safeKey(postKey, 'likes'));
      var storedReads = localStorage.getItem(safeKey(postKey, 'reads'));
      var storedLiked = localStorage.getItem(safeKey(postKey, 'liked'));

      var likes = storedLikes !== null ? parseCount(storedLikes, baseLikes) : baseLikes;
      var reads = storedReads !== null ? parseCount(storedReads, baseReads) : baseReads;

      if (storedLiked === 'true') {
        liked = true;
      }

      function renderLikeState() {
        if (!likeButton || !likeCountEl) return;
        likeButton.classList.toggle('is-liked', liked);
        likeButton.setAttribute('aria-pressed', liked ? 'true' : 'false');
        likeButton.querySelector('.blog-like-icon').textContent = liked ? '♥' : '♡';
        likeButton.querySelector('.blog-like-label').textContent = liked ? 'Liked' : 'Like';
        likeCountEl.textContent = String(likes);
      }

      function renderReadCount() {
        if (readCountEl) readCountEl.textContent = String(reads);
      }

      renderLikeState();
      renderReadCount();

      if (likeButton) {
        likeButton.addEventListener('click', function (event) {
          event.preventDefault();
          event.stopPropagation();
          liked = !liked;
          likes = liked ? likes + 1 : Math.max(baseLikes, likes - 1);
          localStorage.setItem(safeKey(postKey, 'liked'), String(liked));
          localStorage.setItem(safeKey(postKey, 'likes'), String(likes));
          renderLikeState();
        });
      }

      entry.addEventListener('toggle', function () {
        if (!entry.open) return;
        reads += 1;
        localStorage.setItem(safeKey(postKey, 'reads'), String(reads));
        renderReadCount();
      });

      if (entry.open && !sessionStorage.getItem(safeKey(postKey, 'opened-this-load'))) {
        sessionStorage.setItem(safeKey(postKey, 'opened-this-load'), 'true');
        reads += 1;
        localStorage.setItem(safeKey(postKey, 'reads'), String(reads));
        renderReadCount();
      }
    });
  })();
</script>