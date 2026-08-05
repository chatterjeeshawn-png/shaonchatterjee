---
title: Contact
---
<div class="container">
  <article class="resume-card page-card contact-page">

    <header class="contact-hero">
      <h1 class="contact-title">Get In Touch</h1>
      <p class="contact-subtitle">Have a question, opportunity, or just want to connect? Send a message and I'll get back to you.</p>
    </header>

    <div class="contact-layout">

      <!-- Contact form -->
      <!-- SETUP: Sign up free at https://formspree.io → New Form → copy your form ID below -->
      <!-- Replace YOUR_FORM_ID with the ID from Formspree (looks like "xpwzgkqb") -->
      <form
        class="contact-form"
        action="https://formspree.io/f/xpqverqy"
        method="POST"
        novalidate
      >
        <!-- Redirect back to site after submission -->
        <input type="hidden" name="_next" value="/contact/thanks">

        <div class="form-row">
          <div class="form-group">
            <label for="contact-name">Name <span class="required" aria-hidden="true">*</span></label>
            <input
              type="text"
              id="contact-name"
              name="name"
              placeholder="Your full name"
              required
              autocomplete="name"
            >
          </div>
          <div class="form-group">
            <label for="contact-email">Email <span class="required" aria-hidden="true">*</span></label>
            <input
              type="email"
              id="contact-email"
              name="email"
              placeholder="you@example.com"
              required
              autocomplete="email"
            >
          </div>
        </div>

        <div class="form-group">
          <label for="contact-subject">Subject</label>
          <input
            type="text"
            id="contact-subject"
            name="subject"
            placeholder="What's this about?"
            autocomplete="off"
          >
        </div>

        <div class="form-group">
          <label for="contact-message">Message <span class="required" aria-hidden="true">*</span></label>
          <textarea
            id="contact-message"
            name="message"
            rows="6"
            placeholder="Tell me what's on your mind..."
            required
          ></textarea>
        </div>

        <!-- honeypot anti-spam field (hidden from real users) -->
        <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">

        <div class="form-actions">
          <button type="submit" class="btn btn-primary contact-submit">
            Send Message
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" style="margin-left:6px">
              <path d="M22 2L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </form>

      <!-- Info panel -->
      <aside class="contact-info">
        <div class="contact-info-card">
          <h3>Let's Connect</h3>
          <p>I'm open to conversations about:</p>
          <ul class="contact-topics">
            <li>☁️ Cloud &amp; AI roles</li>
            <li>🏥 Healthcare-focused products</li>
            <li>🤝 Technical collaborations</li>
            <li>✍️ Content &amp; writing projects</li>
          </ul>
        </div>

        <div class="contact-info-card">
          <h3>Other Ways to Reach Me</h3>
          <div class="contact-links">
            <a class="contact-link" href="mailto:shaonchatterjee@outlook.com" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M3 6.5C3 5.6716 3.6716 5 4.5 5h15c.8284 0 1.5.6716 1.5 1.5v11c0 .8284-.6716 1.5-1.5 1.5h-15C3.6716 19 3 18.3284 3 17.5v-11z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 7.2l-9 6-9-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              shaonchatterjee@outlook.com
            </a>
            <a class="contact-link" href="https://www.linkedin.com/in/shaonc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="2.5" stroke="currentColor" stroke-width="1.5"/>
                <path d="M7.5 10.5V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <circle cx="7.5" cy="7.5" r="1" fill="currentColor"/>
                <path d="M11.5 17V12.5c0-.966.784-1.5 1.75-1.5s1.75.534 1.75 1.5V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              linkedin.com/in/shaonc
            </a>
          </div>
        </div>
      </aside>

    </div>
  </article>
</div>
