// Consolidated JS for resume page: modal, resource handling, toggles, skill alignment.

(function () {
  'use strict';

  // Utility: debounce
  function debounce(fn, wait) {
    var t;
    return function () {
      clearTimeout(t);
      t = setTimeout(fn, wait);
    };
  }

  // Elements (look up when DOM ready)
  var modal, modalBody, modalTitle, closeBtn;

  function initModalElements() {
    modal = document.getElementById('doc-modal');
    modalBody = document.getElementById('doc-modal-body');
    modalTitle = document.getElementById('doc-modal-title');
    closeBtn = document.getElementById('doc-modal-close');
  }

  // Open modal. content is injected by caller (iframe/blob url)
  window.openDocModal = function openDocModal(evt, url, title) {
    if (evt && typeof evt.preventDefault === 'function') evt.preventDefault();
    if (!modal || !modalBody) return;
    // ensure modal is direct child of body to avoid ancestor filters
    if (modal.parentNode !== document.body) document.body.appendChild(modal);
    modalTitle.textContent = title || 'Document';
    // show overlay and lock page
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    // focus container after layout settles
    setTimeout(function () {
      var container = modal.querySelector('.doc-modal-container');
      if (container && typeof container.focus === 'function') container.focus({ preventScroll: true });
      modal.scrollTop = 0;
      if (container && typeof container.scrollIntoView === 'function') {
        container.scrollIntoView({ block: 'center', inline: 'center', behavior: 'auto' });
      }
    }, 10);
  };

  window.closeDocModal = function closeDocModal() {
    if (!modal) return;
    try {
      if (modal._currentBlob) {
        URL.revokeObjectURL(modal._currentBlob);
        modal._currentBlob = null;
      }
    } catch (err) { /* ignore */ }
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    if (modalBody) modalBody.innerHTML = '';
    document.body.classList.remove('modal-open');
  };

  // Initialize resource buttons (strict in-modal enforcement)
  function initResourceButtons() {
    // Buttons with data-src
    document.querySelectorAll('.resource-btn').forEach(function (btn) {
      if (btn._handled) return;
      btn._handled = true;
      btn.addEventListener('click', function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        var src = btn.getAttribute('data-src');
        var title = btn.getAttribute('data-title') || btn.textContent.trim() || 'Document';
        if (!src) return;

        // fetch resource and open as blob URL to prevent direct navigation
        fetch(src, { credentials: 'same-origin' }).then(function (res) {
          if (!res.ok) throw new Error('Failed to fetch resource');
          return res.blob();
        }).then(function (blob) {
          var blobUrl = URL.createObjectURL(blob);
          if (modalBody) modalBody.innerHTML = '<iframe src="' + blobUrl + '" style="width:100%;height:100%;border:0;" aria-label="' + (title || 'Document') + '"></iframe>';
          modal._currentBlob = blobUrl;
          window.openDocModal(null, blobUrl, title);
        }).catch(function () {
          // fallback: open inline with original URL if fetch fails
          if (modalBody) modalBody.innerHTML = '<iframe src="' + src + '" style="width:100%;height:100%;border:0;" aria-label="' + (title || 'Document') + '"></iframe>';
          window.openDocModal(null, src, title);
        });
      }, { passive: false });
    });

    // Legacy anchors inside resource panels � enforce in-modal behavior and prevent navigation
    document.querySelectorAll('.resources-panel a').forEach(function (a) {
      if (a._handled) return;
      a._handled = true;
      // remove target if present to avoid races
      if (a.getAttribute('target')) a.removeAttribute('target');
      a.addEventListener('click', function (ev) {
        // always enforce modal only � prevent new tab / middle-click behavior
        ev.preventDefault();
        ev.stopImmediatePropagation();
        var src = a.getAttribute('data-src') || a.getAttribute('href');
        var title = a.getAttribute('data-title') || a.textContent.trim() || 'Document';
        if (!src) return;
        // open directly in iframe (no fetch) as fallback for anchors (static URLs)
        // To enforce 100% modal viewing for anchors you can instead fetch & blob like buttons
        fetch(src, { credentials: 'same-origin' }).then(function (res) {
          if (!res.ok) throw new Error('Failed to fetch resource');
          return res.blob();
        }).then(function (blob) {
          var blobUrl = URL.createObjectURL(blob);
          if (modalBody) modalBody.innerHTML = '<iframe src="' + blobUrl + '" style="width:100%;height:100%;border:0;" aria-label="' + (title || 'Document') + '"></iframe>';
          modal._currentBlob = blobUrl;
          window.openDocModal(null, blobUrl, title);
        }).catch(function () {
          if (modalBody) modalBody.innerHTML = '<iframe src="' + src + '" style="width:100%;height:100%;border:0;" aria-label="' + (title || 'Document') + '"></iframe>';
          window.openDocModal(null, src, title);
        });
      }, { passive: false });
    });
  }

  // Toggle resources panels and header click
  function initResourceToggles() {
    document.querySelectorAll('.toggle-resources').forEach(function (btn) {
      if (btn._initialized) return;
      btn._initialized = true;

      btn.addEventListener('click', function () {
        var header = btn.closest('.resources');
        if (!header) return;
        var panel = header.querySelector('.resources-panel');
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        if (panel) panel.hidden = expanded;
        btn.textContent = expanded ? 'Expand' : 'Collapse';
        alignSkillBlocks();
      });

      // make entire header clickable (ignore clicks on links/buttons)
      var headerEl = btn.closest('.resources') && btn.closest('.resources').querySelector('.resources-header');
      if (headerEl && !headerEl._clickAttached) {
        headerEl._clickAttached = true;
        headerEl.addEventListener('click', function (evt) {
          if (evt.target.closest('a') || evt.target.closest('button')) return;
          btn.click();
        });
      }
    });
  }

  // Align skill blocks to job bullet start (absolute positioning) - simplified & robust
  function alignSkillBlocks() {
    var main = document.querySelector('.main-column');
    var skillsColumn = document.querySelector('.skills-column');
    if (!main || !skillsColumn) return;

    // ensure skills column can host absolutely positioned blocks
    skillsColumn.style.position = 'relative';
    skillsColumn.style.paddingTop = '12px';
    skillsColumn.style.minHeight = main.offsetHeight + 'px';

    var jobs = Array.from(main.querySelectorAll('.job'));
    var skillBlocks = Array.from(skillsColumn.querySelectorAll('.skill-block'));

    var mainRect = main.getBoundingClientRect();

    var perBlockVerticalNudge = 6; // small vertical offset so block aligns slightly below the title

    skillBlocks.forEach(function (sb, idx) {
      var job = jobs[idx];
      if (!job) {
        // no matching job � hide extra skill blocks to avoid orphaned items
        sb.style.display = 'none';
        sb.style.position = '';
        sb.style.top = '';
        sb.style.left = '';
        sb.style.width = '';
        return;
      }

      // ensure block is visible
      sb.style.display = '';
      // pick bullets as preferred anchor, fallback to header or the job container
      var bullets = job.querySelector('.job-bullets, .bullets, ul, ol');
      var anchorEl = bullets || job.querySelector('.job-header') || job;

      var anchorRect = anchorEl.getBoundingClientRect();
      var topOffset = Math.round(anchorRect.top - mainRect.top + perBlockVerticalNudge);

      // position the skill block anchored to the skills column's left edge
      sb.style.position = 'absolute';
      sb.style.top = Math.max(0, topOffset) + 'px';
      sb.style.left = '0';
      sb.style.width = '100%';
      sb.style.boxSizing = 'border-box';
      sb.style.margin = '0';
    });
  }

  // --- Project tiles: toggle behavior + equal-height measurement -----------------
  // Measure tallest tile per .projects-grid and set CSS variable so GAO/STAR toggles
  // don't change tile height.
  function setProjectRowHeight() {
    var grids = Array.from(document.querySelectorAll('.projects-grid'));
    if (!grids.length) return;

    grids.forEach(function (grid) {
      // offscreen measurement container to avoid reflow in-place
      var meas = document.createElement('div');
      meas.style.position = 'absolute';
      meas.style.left = '-9999px';
      meas.style.top = '0';
      meas.style.visibility = 'hidden';
      // constrain clone width to the actual grid width so wrapping matches
      var gridWidth = grid.clientWidth || grid.offsetWidth || grid.getBoundingClientRect().width;
      meas.style.width = gridWidth + 'px';
      document.body.appendChild(meas);

      var max = 0;
      var cards = Array.from(grid.querySelectorAll('.project-card'));
      cards.forEach(function (card) {
        var clone = card.cloneNode(true);

        // Ensure the clone's internal GAO/STAR sections are forcibly visible
        // (use inline !important so stylesheet rules with !important don't block measurement).
        clone.querySelectorAll('.project-gao, .project-star, .project-star .star-full').forEach(function (n) {
          n.style.setProperty('display', 'block', 'important');
          n.style.setProperty('overflow', 'visible', 'important');
          n.style.setProperty('max-height', 'none', 'important');
        });

        // Prevent stylesheet rules (including !important) from constraining the clone's height.
        clone.style.setProperty('height', 'auto', 'important');
        clone.style.setProperty('min-height', '0', 'important');
        clone.style.setProperty('box-sizing', 'border-box', 'important');

        // Append and measure
        meas.appendChild(clone);
        // Force layout/read offsetHeight
        var h = clone.offsetHeight;
        if (h > max) max = h;
        meas.removeChild(clone);
      });

      document.body.removeChild(meas);
      if (max) {
        grid.style.setProperty('--projects-row-height', max + 'px');
      }
    });
  }

  // Toggle a single card between GAO <-> STAR view
  function toggleCardView(card) {
    if (!card) return;

    var willBeStar = !card.classList.contains('view-star');

    if (willBeStar) {
      card.classList.remove('view-gao');
      card.classList.add('view-star');
      card.setAttribute('aria-pressed', 'true');
      card.querySelectorAll('.project-gao').forEach(function (n) { n.setAttribute('aria-hidden', 'true'); });
      card.querySelectorAll('.project-star').forEach(function (n) { n.setAttribute('aria-hidden', 'false'); });
    } else {
      card.classList.remove('view-star');
      card.classList.add('view-gao');
      card.setAttribute('aria-pressed', 'false');
      card.querySelectorAll('.project-gao').forEach(function (n) { n.setAttribute('aria-hidden', 'false'); });
      card.querySelectorAll('.project-star').forEach(function (n) { n.setAttribute('aria-hidden', 'true'); });
    }

    // Sync any switch role element inside the card (aria-checked) and wrapper class
    var switchEl = card.querySelector('.switch[role="switch"]');
    var wrapper = card.querySelector('.toggle-project');
    if (switchEl) {
      switchEl.setAttribute('aria-checked', card.classList.contains('view-star') ? 'true' : 'false');
    }
    if (wrapper) {
      wrapper.classList.toggle('is-star', card.classList.contains('view-star'));
    }

    // recompute heights so all tiles remain equal to the tallest
    setProjectRowHeight();
  }

  // Initialize project tiles: click/keyboard handlers + inject Toggle control
  function initProjectTiles() {
    document.querySelectorAll('.project-card').forEach(function (card) {
      // skip if already initialized
      if (card._projInit) return;
      card._projInit = true;

      // ensure aria state for assistive tech
      if (!card.hasAttribute('aria-pressed')) card.setAttribute('aria-pressed', card.classList.contains('view-star') ? 'true' : 'false');
      card.querySelectorAll('.project-gao').forEach(function (n) { if (!n.hasAttribute('aria-hidden')) n.setAttribute('aria-hidden', card.classList.contains('view-star') ? 'true' : 'false'); });
      card.querySelectorAll('.project-star').forEach(function (n) { if (!n.hasAttribute('aria-hidden')) n.setAttribute('aria-hidden', card.classList.contains('view-star') ? 'false' : 'true'); });

      // keyboard: Enter / Space toggles
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleCardView(card);
        }
      });

      // click (ignore clicks on inner interactive elements like links/buttons)
      card.addEventListener('click', function (e) {
        if (e.target.closest('a, button')) return;
        toggleCardView(card);
      });

      // inject GAO/STAR labeled switch control (role="switch") � no checkbox input
      if (!card.querySelector('.toggle-project')) {
        var wrapper = document.createElement('div');
        wrapper.className = 'toggle-project';

        var lblGao = document.createElement('span');
        lblGao.className = 'label-gao';
        lblGao.textContent = 'GAO';
        lblGao.setAttribute('aria-hidden', 'true');

        // focusable switch element (role="switch") � clicking it toggles the card
        var switchEl = document.createElement('div');
        switchEl.className = 'switch';
        switchEl.setAttribute('role', 'switch');
        switchEl.setAttribute('tabindex', '0');
        switchEl.setAttribute('aria-checked', card.classList.contains('view-star') ? 'true' : 'false');
        // slider element visually inside
        var slider = document.createElement('span');
        slider.className = 'slider';
        switchEl.appendChild(slider);

        var lblStar = document.createElement('span');
        lblStar.className = 'label-star';
        lblStar.textContent = 'STAR';
        lblStar.setAttribute('aria-hidden', 'true');

        // assemble: GAO | switch | STAR
        wrapper.appendChild(lblGao);
        wrapper.appendChild(switchEl);
        wrapper.appendChild(lblStar);

        // reflect initial state on wrapper for CSS hook
        if (card.classList.contains('view-star')) wrapper.classList.add('is-star');

        // clicking the wrapper should not bubble to card itself (avoid double toggle)
        wrapper.addEventListener('click', function (ev) { ev.stopPropagation(); });

        // when user activates switch (click or keyboard), toggle the card view
        function activateSwitch(ev) {
          ev && ev.stopPropagation();
          toggleCardView(card);
          // sync aria-checked on switch element to reflect resulting state
          var isStar = card.classList.contains('view-star');
          switchEl.setAttribute('aria-checked', isStar ? 'true' : 'false');
          // mirror state on wrapper for CSS fallback
          wrapper.classList.toggle('is-star', isStar);
        }

        switchEl.addEventListener('click', activateSwitch);
        switchEl.addEventListener('keydown', function (ev) {
          if (ev.key === 'Enter' || ev.key === ' ') {
            ev.preventDefault();
            activateSwitch(ev);
          }
        });

        card.appendChild(wrapper);
      }
    });
    // once tiles are initialized, ensure equal heights are computed
    setProjectRowHeight();
  }

  // Modal close wiring (overlay click, ESC)
  function initModalClosers() {
    if (!modal) return;
    // close via close button
    if (closeBtn) closeBtn.addEventListener('click', window.closeDocModal);
    // overlay click closes only when clicking overlay itself
    modal.addEventListener('click', function (e) {
      if (e.target === modal) window.closeDocModal();
    });
    // global click outside container closes modal (defensive)
    document.addEventListener('click', function (e) {
      if (!modal || modal.style.display !== 'flex') return;
      try {
        var container = modal.querySelector('.doc-modal-container');
        if (!container) return;
        if (!container.contains(e.target) && e.target !== container) window.closeDocModal();
      } catch (err) { /* silent */ }
    }, true);
    // Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') window.closeDocModal();
    });
  }

  // Initialize everything on DOM ready
  function initAll() {
    initModalElements();
    initResourceToggles();
    initResourceButtons();
    initModalClosers();
    alignSkillBlocks();
    initProjectTiles();        // <-- ensure project tiles are wired up
    setProjectRowHeight();     // <- set initial row height
    setActiveNav(); // mark current page in nav
    startHomeTitleRotation(); // rotate "Welcome" on home page
    // dynamic years of experience
    var yrsEl = document.getElementById('years-exp');
    if (yrsEl) { yrsEl.textContent = (new Date().getFullYear() - 2011) + '+'; }
    initProjCards();           // expandable project cards on projects page
  }

  // Expandable project cards (.proj-card) on the projects page
  function initProjCards() {
    document.querySelectorAll('.proj-card').forEach(function (card) {
      if (card._projCardInit) return;
      card._projCardInit = true;

      var detail = card.querySelector('.proj-detail');
      if (!detail) return;

      function toggle(ev) {
        // don't intercept clicks on links inside the expanded panel
        if (ev && ev.target && ev.target.closest('a, button.proj-toggle') === null && ev.target.closest('.proj-detail') !== null) return;
        var expanded = card.getAttribute('aria-expanded') === 'true';
        card.setAttribute('aria-expanded', String(!expanded));
        if (expanded) {
          detail.setAttribute('hidden', '');
        } else {
          detail.removeAttribute('hidden');
        }
      }

      card.addEventListener('click', toggle);
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(e); }
      });

      // toggle button (chevron) — handled by card click already, just prevent double-fire
      var btn = card.querySelector('.proj-toggle');
      if (btn) btn.addEventListener('click', function (e) { e.stopPropagation(); toggle(e); });
    });
  }

  // mark matching nav link as active (adds .active and aria-current="page")
  function setActiveNav(){
    try {
      var links = Array.from(document.querySelectorAll('.nav-list a'));
      if (!links.length) return;
      var path = (location.pathname || '/').replace(/\/+$/, '') || '/';
      links.forEach(function(a){
        var href = a.getAttribute('href') || '';
        var linkPath = href.replace(location.origin, '').replace(/\/+$/, '') || '/';
        if (linkPath === path || (path !== '/' && path.indexOf(linkPath) === 0 && linkPath !== '/')) {
          a.classList.add('active');
          a.setAttribute('aria-current','page');
        } else {
          a.classList.remove('active');
          a.removeAttribute('aria-current');
        }
      });
    } catch (err) { /* silent */ }
  }

  // rotate the "Welcome" word in the home page title (updates header text + document.title)
  function startHomeTitleRotation(){
    var welcomes = ['Welcome','Bienvenido','Bienvenue','Willkommen','स्वागत']; // rotate these
    // no base text � leave empty
    var base = '';
    var idx = 0;
    // ensure brand element is announcable to assistive tech
    var brandName = document.querySelector('.brand-name');
    if (brandName) brandName.setAttribute('aria-live', 'polite');

    // stop any prior interval
    if (window._homeTitleInterval) {
      clearInterval(window._homeTitleInterval);
      window._homeTitleInterval = null;
    }

    function updateTitle(){
      var w = welcomes[idx % welcomes.length];
      var combined = w +  base;
      try { document.title = combined; } catch(e) {}
      if (brandName) brandName.textContent = combined;
      idx++;
    }

    // only run on the site root
    var path = (location.pathname || '/').replace(/\/+$/, '') || '/';
    if (path === '/' || path === '/index.html') {
      updateTitle(); // initial
      window._homeTitleInterval = setInterval(updateTitle, 2500); // every 2.5s
    } else {
      // ensure non-home pages have original static title/brand
      if (brandName) brandName.textContent = document.title || base;
    }
  }

  // run on load and attach resize handler
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initAll();
      // small delay allow images to settle
      setTimeout(alignSkillBlocks, 200);
    });
  } else {
    initAll();
    setTimeout(alignSkillBlocks, 200);
  }

  window.addEventListener('resize', debounce(function () {
    alignSkillBlocks();
    setProjectRowHeight(); // recompute on resize
  }, 120));

  // Re-run alignment / measurement occasionally while page finishes loading fonts/images
  var checkTimer = setInterval(function () {
    alignSkillBlocks();
    setProjectRowHeight();
  }, 800);
  setTimeout(function () { clearInterval(checkTimer); }, 6000);

  // expose for debugging if needed
  window.setProjectRowHeight = setProjectRowHeight;
  window.initProjectTiles = initProjectTiles;

})();
