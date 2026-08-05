(function () {
  'use strict';

  var docModal, docModalContainer, docModalBody, docModalClose, docModalTitle;

  // Create modal DOM if missing (no JS in .md)
  function ensureModalDom() {
    var existing = document.getElementById('doc-modal');
    if (existing) return existing;
    var wrap = document.createElement('div');
    wrap.id = 'doc-modal';
    wrap.className = 'doc-modal';
    wrap.setAttribute('aria-hidden', 'true');
    wrap.innerHTML = `
      <div class="doc-modal-container" role="dialog" aria-modal="true" aria-labelledby="doc-modal-title" tabindex="-1">
        <div class="doc-modal-header">
          <h3 id="doc-modal-title">Viewer</h3>
          <button id="doc-modal-close" class="close" aria-label="Close">Ã¢Å“â€¢</button>
        </div>
        <div id="doc-modal-body" class="doc-modal-body"></div>
      </div>`;
    document.body.appendChild(wrap);
    return wrap;
  }

  function initModalElements() {
    docModal = document.getElementById('doc-modal') || ensureModalDom();
    docModalContainer = docModal.querySelector('.doc-modal-container');
    docModalBody = docModal.querySelector('#doc-modal-body');
    docModalClose = docModal.querySelector('#doc-modal-close');
    docModalTitle = docModal.querySelector('#doc-modal-title');

    if (docModalClose && !docModalClose._bound) {
      docModalClose._bound = true;
      docModalClose.addEventListener('click', closeDocModal);
    }
    if (!docModal._bound) {
      docModal._bound = true;
      docModal.addEventListener('click', function (e) { if (e.target === docModal) closeDocModal(); });
      window.addEventListener('keydown', function (e) { if (e.key === 'Escape' && docModal.getAttribute('aria-hidden') === 'false') closeDocModal(); });
    }
  }

  function openDocModal(src, title) {
    initModalElements();
    if (!docModalBody) return;

    docModalBody.innerHTML = '';

    var url = (src || '').trim();
    var isHttp = /^https?:\/\//i.test(url);
    var isPdf = /\.pdf(\?|#|$)/i.test(url);
    var isImage = /\.(png|jpg|jpeg|gif|svg)(\?|#|$)/i.test(url);
    var isVideoMp4 = /\.(mp4)(\?|#|$)/i.test(url);

    // Build fallback link (for blocked web pages or errors)
    var fallback = document.createElement('div');
    fallback.className = 'viewer-fallback';
    fallback.style.display = 'none';
    fallback.innerHTML = `
      <p class="muted">Unable to display here. Open in a new tab:</p>
      <p><a href="${url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Open ${(title || 'Link')}</a></p>
    `;

    if (isImage) {
      var img = document.createElement('img');
      img.src = url;
      img.alt = title || '';
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
      docModalBody.appendChild(img);

    } else if (isVideoMp4) {
      // HTML5 video player for MP4
      var video = document.createElement('video');
      video.controls = true;
      video.playsInline = true;
      video.preload = 'metadata';
      video.style.width = '100%';
      video.style.maxHeight = '80vh';

      var source = document.createElement('source');
      source.src = url;
      source.type = 'video/mp4';
      video.appendChild(source);

      // Optional: basic error fallback
      video.addEventListener('error', function () {
        // show fallback link if video fails to load (CORS or missing file)
        if (!fallback.parentNode) docModalBody.appendChild(fallback);
        fallback.style.display = 'block';
      });

      docModalBody.appendChild(video);

    } else if (isPdf) {
      var iframe = document.createElement('iframe');
      iframe.src = url;
      iframe.style.width = '100%';
      iframe.style.height = '80vh';
      iframe.setAttribute('aria-label', title || 'Document');
      iframe.setAttribute('loading', 'lazy');
      docModalBody.appendChild(iframe);

    } else if (isHttp) {
      // Many sites block embedding via CSP/XFO; go straight to fallback link
      docModalBody.appendChild(fallback);
      fallback.style.display = 'block';

    } else {
      // Plain link fallback
      var a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = title || url;
      docModalBody.appendChild(a);
    }

    if (docModalTitle) docModalTitle.textContent = title || 'Viewer';
    docModal.setAttribute('aria-hidden', 'false');
    if (docModalContainer) docModalContainer.focus();
  }

  function closeDocModal() {
    if (!docModal) return;
    docModal.setAttribute('aria-hidden', 'true');
    if (docModalBody) docModalBody.innerHTML = '';
  }

  // Expose for resource buttons
  window.openDocModal = openDocModal;

  // Initialize on load (ensures modal exists without .md markup)
  window.addEventListener('load', initModalElements);

  // Modal handling
  const modal = document.getElementById('myModal');
  const btn = document.getElementById('myBtn');
  const span = document.getElementsByClassName('close')[0];

  btn.onclick = function () {
    modal.style.display = 'block';
  };

  span.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };

  // Resource handling
  const resources = document.getElementById('resources');
  const resourceBtn = document.getElementById('resourceBtn');

  resourceBtn.onclick = function () {
    resources.classList.toggle('hidden');
  };

  // Toggles
  const toggles = document.querySelectorAll('.toggle');

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  });

  // Skill alignment
  const skills = document.getElementById('skills');
  const skillItems = skills.getElementsByClassName('skill-item');

  Array.from(skillItems).forEach((item) => {
    item.addEventListener('click', function () {
      this.classList.toggle('aligned');
    });
  });

  function openExternalOrModal(url, title){
    // Try iframe in modal for PDFs/images only; web pages go to new tab if blocked
    var isPdf = /\.pdf(\?|#|$)/i.test(url);
    var isImage = /\.(png|jpg|jpeg|gif|svg)(\?|#|$)/i.test(url);

    if (isPdf || isImage) {
      // use existing openDocModal for embeddables
      if (modalBody) {
        var src = url;
        modalBody.innerHTML = '<iframe src="'+src+'" style="width:100%;height:80vh;border:0" aria-label="'+(title||'Document')+'"></iframe>';
      }
      window.openDocModal(null, url, title);
    } else {
      // non-embeddable web pages Ã¢â€ â€™ open new tab
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  // In resource buttons handler, replace fetch+blob usage for http(s) pages:
  // inside initResourceButtons -> click handler:
  // ...
  var src = btn.getAttribute('data-src');
  var title = btn.getAttribute('data-title') || btn.textContent.trim() || 'Document';
  if (!src) return;
  if (/^https?:\/\//i.test(src)) {        // external web page
    openExternalOrModal(src, title);
    return;
  }
  // keep existing logic for same-origin PDFs/images
  // ...

  var divElement = document.getElementById('viz1774308625533');
  var vizElement = divElement.getElementsByTagName('object')[0];
  if (divElement.offsetWidth > 800) {
    vizElement.style.width='1000px';vizElement.style.height='827px';
  } else if (divElement.offsetWidth > 500) {
    vizElement.style.width='1000px';vizElement.style.height='827px';
  } else {
    vizElement.style.width='100%';vizElement.style.height='727px';
  }
  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
  // Project card GAO/STAR toggle functionality
  function setupProjectCardToggles() {
    var projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(function(card) {
      var toggleSwitch = card.querySelector('.toggle-project .switch');
      if (toggleSwitch && !toggleSwitch._toggleBound) {
        toggleSwitch._toggleBound = true;
        toggleSwitch.addEventListener('click', function(e) {
          e.stopPropagation();
          e.preventDefault();
          card.classList.toggle('view-star');
          var isNowStar = card.classList.contains('view-star');
          toggleSwitch.setAttribute('aria-checked', isNowStar ? 'true' : 'false');
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupProjectCardToggles);
  } else {
    setupProjectCardToggles();
  }
  window.addEventListener('load', setupProjectCardToggles);
})();