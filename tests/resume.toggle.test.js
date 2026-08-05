/**
 * Tests for resume.js toggle behavior (project cards).
 * These tests load the page DOM fixture, require the static/resume.js bundle,
 * call initProjectTiles() and assert that clicking the card and clicking
 * the injected switch produce the same state changes.
 */

describe('project-card GAO/STAR toggle behavior', () => {
  beforeEach(() => {
    // clear document
    document.documentElement.innerHTML = '<!doctype html><html><head></head><body></body></html>';
    // minimal fixture: one project-card with GAO and STAR nodes
    const grid = document.createElement('div');
    grid.className = 'projects-grid';
    const card = document.createElement('article');
    card.className = 'project-card view-gao';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-pressed', 'false');

    const gao = document.createElement('div');
    gao.className = 'project-gao';
    const gtag = document.createElement('div');
    gtag.className = 'project-tag';
    gtag.textContent = 'TEST';
    const gtitle = document.createElement('h5');
    gtitle.className = 'project-title';
    gtitle.textContent = 'Test Project';
    const gdl = document.createElement('dl');
    gdl.className = 'project-gao-dl';
    const gdiv = document.createElement('div');
    const dt = document.createElement('dt');
    dt.textContent = 'Goal';
    const dd = document.createElement('dd');
    dd.textContent = 'Do the thing.';
    gdiv.appendChild(dt);
    gdiv.appendChild(dd);
    gdl.appendChild(gdiv);
    gao.appendChild(gtag);
    gao.appendChild(gtitle);
    gao.appendChild(gdl);

    const star = document.createElement('div');
    star.className = 'project-star';
    star.setAttribute('aria-hidden', 'true');
    const stag = document.createElement('div');
    stag.className = 'project-tag';
    stag.textContent = 'TEST';
    const stitle = document.createElement('h5');
    stitle.className = 'project-title';
    stitle.textContent = 'Test Project';
    const starFull = document.createElement('div');
    starFull.className = 'star-full';
    starFull.textContent = 'STAR full content.';
    star.appendChild(stag);
    star.appendChild(stitle);
    star.appendChild(starFull);

    card.appendChild(gao);
    card.appendChild(star);
    grid.appendChild(card);
    document.body.appendChild(grid);

    // require the script under test. The script should attach window.initProjectTiles / toggleCardView
    // Use require relative to project root (static/resume.js).
    jest.resetModules();
    // eslint-disable-next-line global-require
    require('../static/resume.js');
  });

  test('initProjectTiles injects switch and clicking card toggles to STAR and updates aria', () => {
    // initProjectTiles should be exposed on window
    expect(typeof window.initProjectTiles).toBe('function');
    // initialize tiles
    window.initProjectTiles();

    const card = document.querySelector('.project-card');
    expect(card).toBeTruthy();
    // ensure switch injected
    const wrapper = card.querySelector('.toggle-project');
    expect(wrapper).toBeTruthy();

    // initial state
    expect(card.classList.contains('view-gao')).toBe(true);
    expect(card.getAttribute('aria-pressed')).toBe('false');
    expect(card.querySelector('.project-star').getAttribute('aria-hidden')).toBe('true');

    // simulate click on card (should toggle)
    card.click();

    // after click: STAR visible
    expect(card.classList.contains('view-star')).toBe(true);
    expect(card.getAttribute('aria-pressed')).toBe('true');
    expect(card.querySelector('.project-star').getAttribute('aria-hidden')).toBe('false');

    // switch representation should reflect state (wrapper class / aria)
    const switchEl = wrapper.querySelector('.switch[role="switch"]');
    if (switchEl) {
      expect(switchEl.getAttribute('aria-checked')).toBe('true');
    } else {
      // older variants used wrapper.is-star class
      expect(wrapper.classList.contains('is-star')).toBe(true);
    }
  });

  test('clicking switch toggles card to GAO/STAR appropriately', () => {
    window.initProjectTiles();
    const card = document.querySelector('.project-card');
    const wrapper = card.querySelector('.toggle-project');
    const switchEl = wrapper.querySelector('.switch[role="switch"]');

    // make sure starting GAO
    expect(card.classList.contains('view-gao')).toBe(true);

    // click switch element
    if (switchEl) {
      switchEl.click();
    } else {
      wrapper.click();
    }

    // card should now be STAR
    expect(card.classList.contains('view-star')).toBe(true);

    // clicking again should return to GAO
    if (switchEl) {
      switchEl.click();
    } else {
      wrapper.click();
    }
    expect(card.classList.contains('view-gao')).toBe(true);
  });
});

// brew update
// brew install node
// cd "/Users/shaonchatterjee/Documents/Career Dev/Portfolio/portfolio-blog-local/site"
// npm install
// npm test