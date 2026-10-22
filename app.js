'use strict';

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const i18n = () => window.PORTFOLIO_I18N;
const ui = key => i18n().ui(key);
const studiesFor = () => window.PORTFOLIO_STUDIES[i18n().lang] || window.PORTFOLIO_STUDIES.zh;
const casesFor = () => window.PORTFOLIO_CASES[i18n().lang] || window.PORTFOLIO_CASES.zh;
const labsFor = () => window.PORTFOLIO_LAB[i18n().lang] || window.PORTFOLIO_LAB.zh;

function phoneImage(file, caption) {
  return `<button data-zoom="assets/${file}" data-caption="${escapeHTML(caption)}" aria-label="${escapeHTML(ui('zoom.prefix') + caption)}"><img src="assets/${file}" alt="${escapeHTML(caption)}" loading="lazy"></button>`;
}

function comparisonMarkup() {
  return `<div class="comparison" style="--split:48%"><img class="comparison-image" src="assets/digest-draft.png" alt="${escapeHTML(ui('visual.dg.sketchAlt'))}"><img class="comparison-image comparison-after" src="assets/digest-interface.png" alt="${escapeHTML(ui('visual.dg.builtAlt'))}"><span class="compare-label before-label">${escapeHTML(ui('visual.dg.sketch'))}</span><span class="compare-label after-label">${escapeHTML(ui('visual.dg.built'))}</span><span class="compare-line" aria-hidden="true"><span>↔</span></span><input class="compare-range" type="range" min="0" max="100" value="48" aria-label="${escapeHTML(ui('visual.dg.aria'))}"></div>`;
}

function caseVisual(id) {
  if (id === 'starity') return `<div class="case-visual case-phones starity-case-phones">${phoneImage('starity-timeline.jpg', ui('visual.st.timeline'))}${phoneImage('starity-tasks.jpg', ui('visual.st.tasks'))}${phoneImage('starity-workshop.jpg', ui('visual.st.workshop'))}</div>`;
  if (id === 'homemind') return `<div class="case-visual case-phones">${phoneImage('home-front.png', ui('visual.hm.home'))}${phoneImage('home-growth.png', ui('visual.hm.growth'))}${phoneImage('home-family.png', ui('visual.hm.family'))}</div>`;
  if (id === 'workbench') return `<div class="case-visual"><button data-zoom="assets/workbench-desktop.png" data-caption="${escapeHTML(ui('visual.wb.caption'))}" aria-label="${escapeHTML(ui('visual.wb.aria'))}"><img class="case-image-full" src="assets/workbench-desktop.png" alt="${escapeHTML(ui('visual.wb.alt'))}" loading="lazy"></button><p class="case-caption">${escapeHTML(ui('visual.wb.note'))}</p></div>`;
  return `<div class="case-visual">${comparisonMarkup()}<p class="case-caption">${escapeHTML(ui('visual.dg.note'))}</p></div>`;
}

function renderCase(id) {
  const item = casesFor()[id];
  const study = studiesFor()[id];
  const file = i18n().pdf();
  const textList = values => `<ul>${values.map(value => `<li>${escapeHTML(value)}</li>`).join('')}</ul>`;
  const figures = (id === 'workbench' ? study.figures.slice(1) : study.figures).map(figure => `<figure class="evidence-figure"><button data-zoom="assets/${figure.file}" data-caption="${escapeHTML(figure.caption)}" aria-label="${escapeHTML(ui('zoom.captionPrefix') + figure.caption)}"><img src="assets/${figure.file}" alt="${escapeHTML(figure.caption)}" loading="lazy"></button><figcaption>${escapeHTML(figure.caption)}</figcaption></figure>`).join('');
  $('#case-content').innerHTML = `
    <section class="case-hero"><p class="eyebrow">${item.label}</p><h2 id="case-title">${item.title}</h2><h3>${item.subtitle}</h3><div class="case-intro"><p>${item.intro}</p><dl class="case-facts"><div><dt>${ui('case.form')}</dt><dd>${item.form}</dd></div><div><dt>${ui('case.role')}</dt><dd>${item.role}</dd></div><div><dt>${ui('case.reading')}</dt><dd>${study.reading}</dd></div></dl></div><p class="case-summary">${escapeHTML(study.question)}</p></section>
    <nav class="case-toc" aria-label="${escapeHTML(ui('case.toc'))}"><button data-section="case-context">${ui('case.toc1')}</button><button data-section="case-process">${ui('case.toc2')}</button><button data-section="case-decisions">${ui('case.toc3')}</button><button data-section="case-outcome">${ui('case.toc4')}</button></nav>
    ${caseVisual(id)}
    <section class="case-chapter" id="case-context" tabindex="-1"><div class="chapter-heading"><p class="eyebrow">01 / THE STARTING POINT</p><h3>${escapeHTML(study.contextTitle)}</h3><p>${escapeHTML(study.context)}</p></div><div class="case-columns"><div><h4>${ui('case.tension')}</h4><p>${escapeHTML(study.tension)}</p></div><div><h4>${ui('case.response')}</h4><p>${escapeHTML(study.response)}</p></div></div></section>
    <section class="case-chapter" id="case-process" tabindex="-1"><div class="chapter-heading"><p class="eyebrow">02 / THE EXPERIENCE</p><h3>${escapeHTML(study.processTitle)}</h3><p>${escapeHTML(study.processIntro)}</p></div><ol class="experience-flow">${study.flow.map((step, index) => `<li><span>${String(index+1).padStart(2,'0')}</span><h4>${escapeHTML(step.title)}</h4><p>${escapeHTML(step.body)}</p></li>`).join('')}</ol><div class="evidence-gallery ${['homemind', 'starity'].includes(id) ? 'evidence-phones' : ''}">${figures}</div>${id === 'workbench' ? `<button class="case-film-button" data-demo>${ui('case.demo')}</button>` : ''}</section>
    <section class="case-chapter" id="case-decisions" tabindex="-1"><div class="chapter-heading"><p class="eyebrow">03 / DESIGN DECISIONS</p><h3>${ui('case.decisionsTitle')}</h3><p>${ui('case.decisionsIntro')}</p></div><div class="decision-list">${study.decisions.map((decision,index) => `<article><span class="decision-number">${String(index+1).padStart(2,'0')}</span><div><h4>${escapeHTML(decision.title)}</h4><p>${escapeHTML(decision.body)}</p><p class="tradeoff"><strong>${ui('case.tradeoff')}</strong> ${escapeHTML(decision.tradeoff)}</p></div></article>`).join('')}</div></section>
    <section class="case-chapter" id="case-outcome" tabindex="-1"><div class="chapter-heading"><p class="eyebrow">04 / WHERE IT IS NOW</p><h3>${escapeHTML(study.outcomeTitle)}</h3></div><div class="outcome-grid"><div><h4>${ui('case.have')}</h4>${textList(study.outcomes)}</div><div><h4>${ui('case.next')}</h4>${textList(study.next)}</div></div><p class="case-footnote">${escapeHTML(study.boundary)}</p><div class="case-download"><a data-pdf-link href="${file.href}" download="${file.download}">${ui('case.download')} <span aria-hidden="true">↓</span></a><button data-contact>${ui('case.contact')} <span aria-hidden="true">↗</span></button></div></section>
    <button class="case-next" data-case="${item.next}"><div><small>NEXT WORLD</small><strong>${casesFor()[item.next].title}</strong></div><span>↗</span></button>`;
  const dialog = $('#case-dialog');
  dialog.style.setProperty('--case-bg', item.bg);
  dialog.style.setProperty('--accent', item.accent);
  dialog.dataset.project = id;
  dialog.scrollTop = 0;
}

const caseDialog = $('#case-dialog');
let closeTimer;
function openCase(id, addHistory = true) {
  if (!casesFor()[id]) return;
  clearTimeout(closeTimer);
  const wasOpen = caseDialog.open;
  if (addHistory) {
    const historyData = wasOpen && history.state?.portfolioCase ? history.state : {portfolioCase:true, returnHash:location.hash || '#homemind'};
    history[wasOpen ? 'replaceState' : 'pushState'](historyData, '', `${location.pathname}${location.search}#project/${id}`);
  }
  renderCase(id);
  if (!wasOpen) caseDialog.showModal();
  requestAnimationFrame(() => caseDialog.classList.add('is-open'));
  $('.close-button', caseDialog).focus({preventScroll:true});
}
function closeCase(updateHistory = true) {
  if (!caseDialog.open) return;
  if (updateHistory && location.hash.startsWith('#project/')) {
    if (history.state?.portfolioCase) history.back();
    else history.replaceState(null, '', `${location.pathname}${location.search}#${caseDialog.dataset.project || 'homemind'}`);
  }
  caseDialog.classList.remove('is-open');
  clearTimeout(closeTimer);
  closeTimer = setTimeout(() => { caseDialog.close(); scheduleScene(); }, reducedMotion.matches ? 0 : 280);
}
function routeCase() {
  const match = location.hash.match(/^#project\/(homemind|workbench|digest|starity)$/);
  if (match) openCase(match[1], false);
  else closeCase(false);
}
addEventListener('popstate', routeCase);
caseDialog.addEventListener('cancel', event => { event.preventDefault(); closeCase(); });
caseDialog.addEventListener('scroll', () => {
  const chapters = $$('.case-chapter', caseDialog);
  const threshold = parseFloat(getComputedStyle(caseDialog).getPropertyValue('--case-topbar-height')) + 130;
  const current = chapters.filter(chapter => chapter.getBoundingClientRect().top <= threshold).pop();
  $$('[data-section]', caseDialog).forEach(button => {
    if (current && button.dataset.section === current.id) button.setAttribute('aria-current', 'location');
    else button.removeAttribute('aria-current');
  });
}, {passive:true});

const lightbox = $('#lightbox');

// Naituan exploded view: opens once on arrival, then the visitor can fold it back.
const explode = $('[data-explode]');
if (explode) {
  const toggle = $('.explode-toggle', explode);
  const setAssembled = assembled => {
    explode.classList.toggle('is-assembled', assembled);
    toggle.textContent = assembled ? ui('explode.apart') : ui('explode.together');
    toggle.setAttribute('aria-pressed', String(assembled));
  };
  toggle.addEventListener('click', () => setAssembled(!explode.classList.contains('is-assembled')));
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setAssembled(true);
    const watcher = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      watcher.disconnect();
      setTimeout(() => setAssembled(false), 350);
    }, {threshold: .45});
    watcher.observe(explode);
  }
}

function showImage(source, caption) {
  const img = $('#lightbox-image');
  img.src = source;
  img.alt = caption || ui('lightbox.fallback');
  $('#lightbox-caption').textContent = caption || '';
  lightbox.showModal();
}
$('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });

document.addEventListener('click', event => {
  const caseButton = event.target.closest('[data-case]');
  const imageButton = event.target.closest('[data-zoom]');
  if (caseButton) openCase(caseButton.dataset.case);
  if (imageButton) showImage(imageButton.dataset.zoom, imageButton.dataset.caption);
  if (event.target.closest('[data-close]')) { event.preventDefault(); closeCase(); }
  const sectionButton = event.target.closest('[data-section]');
  if (sectionButton) {
    const section = document.getElementById(sectionButton.dataset.section);
    section.focus({preventScroll:true});
    section.scrollIntoView({behavior:reducedMotion.matches ? 'instant' : 'smooth',block:'start'});
  }
  if (event.target.closest('[data-contact], [data-demo]')) {
    const destination = event.target.closest('[data-demo]') ? '#workbench' : '#about';
    history.replaceState(null, '', `${location.pathname}${location.search}${destination}`);
    clearTimeout(closeTimer);
    caseDialog.classList.remove('is-open');
    caseDialog.close();
    const heading = document.querySelector(`${destination} h2`);
    heading.tabIndex = -1;
    heading.focus({preventScroll:true});
    document.querySelector(destination).scrollIntoView({behavior:'instant'});
    scheduleScene();
  }
});
document.addEventListener('input', event => {
  if (event.target.matches('.compare-range')) event.target.closest('.comparison').style.setProperty('--split', `${event.target.value}%`);
});

const desk = $('#desktop-demo');
let topLayer = 1;
$$('[data-drag]', desk).forEach(widget => {
  const handle = $('.drag-handle', widget);
  let drag = null;
  const moveWidget = (x, y) => {
    widget.style.left = `${clamp(x, 0, desk.clientWidth - widget.offsetWidth)}px`;
    widget.style.top = `${clamp(y, 0, desk.clientHeight - widget.offsetHeight - 26)}px`;
  };
  handle.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    event.preventDefault();
    handle.focus({preventScroll:true});
    const bounds = desk.getBoundingClientRect();
    drag = {pointer:event.pointerId, x:event.clientX, y:event.clientY, left:widget.offsetLeft, top:widget.offsetTop, scale:desk.clientWidth / bounds.width};
    widget.style.zIndex = String(++topLayer);
    widget.classList.add('is-dragging');
    handle.setPointerCapture(event.pointerId);
  });
  handle.addEventListener('pointermove', event => {
    if (!drag || event.pointerId !== drag.pointer) return;
    moveWidget(drag.left + (event.clientX - drag.x) * drag.scale, drag.top + (event.clientY - drag.y) * drag.scale);
  });
  const end = () => { drag = null; widget.classList.remove('is-dragging'); };
  handle.addEventListener('pointerup', end);
  handle.addEventListener('pointercancel', end);
  handle.addEventListener('lostpointercapture', end);
  handle.addEventListener('keydown', event => {
    if (!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const step = event.shiftKey ? 24 : 10;
    const dx = event.key === 'ArrowLeft' ? -step : event.key === 'ArrowRight' ? step : 0;
    const dy = event.key === 'ArrowUp' ? -step : event.key === 'ArrowDown' ? step : 0;
    moveWidget(widget.offsetLeft + dx, widget.offsetTop + dy);
  });
});
$$('[data-theme]', desk).forEach(button => button.addEventListener('click', () => {
  desk.dataset.deskTheme = button.dataset.theme;
  $$('[data-theme]', desk).forEach(item => item.setAttribute('aria-pressed', String(item === button)));
}));
$('.desk-reset').addEventListener('click', () => $$('[data-drag]', desk).forEach(widget => {
  widget.style.removeProperty('left'); widget.style.removeProperty('top'); widget.style.removeProperty('z-index');
}));
function updateClock() {
  const now = new Date();
  const locale = ui('clock.locale');
  $('#live-clock').textContent = now.toLocaleTimeString(locale, {hour:'2-digit',minute:'2-digit',hour12:false});
  $('#live-date').textContent = now.toLocaleDateString(locale, {month:'long',day:'numeric',weekday:'short'});
}
updateClock();
setInterval(updateClock, 30000);

function selectLab(button, focus = false) {
  const data = labsFor()[button.dataset.lab];
  $$('.lab-item').forEach(item => {
    item.setAttribute('aria-selected', String(item === button));
    item.tabIndex = item === button ? 0 : -1;
    item.classList.toggle('is-selected', item === button);
  });
  $('#lab-detail').setAttribute('aria-labelledby', button.id);
  $('#lab-type').textContent = data.type;
  $('#lab-detail-title').innerHTML = data.title;
  $('#lab-description').textContent = data.description;
  $('#lab-detail').classList.remove('is-changing');
  requestAnimationFrame(() => $('#lab-detail').classList.add('is-changing'));
  if (focus) button.focus();
}
const labButtons = $$('.lab-item');
labButtons.forEach((button, index) => {
  button.addEventListener('click', () => selectLab(button));
  button.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % labButtons.length;
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index + labButtons.length - 1) % labButtons.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = labButtons.length - 1;
    if (next !== undefined) { event.preventDefault(); selectLab(labButtons[next], true); }
  });
});
$('#copy-email').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText('limeilin839@gmail.com'); $('#copy-status').textContent = ui('copy.ok'); }
  catch { $('#copy-status').textContent = ui('copy.fallback'); }
});

// Light sections ease in once, the same way each work does when it becomes active.
const revealItems = $$('[data-reveal]');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  document.documentElement.classList.add('can-reveal');
  const revealer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-in');
    revealer.unobserve(entry.target);
  }), {threshold: .18, rootMargin: '0px 0px -8% 0px'});
  revealItems.forEach(item => revealer.observe(item));
}

// Big titles drift a little with scroll progress: 0 as they enter, 1 as they leave.
const driftTitles = $$('[data-drift]');
function updateDrift() {
  if (reducedMotion.matches) return;
  driftTitles.forEach(title => {
    const rect = title.getBoundingClientRect();
    if (rect.bottom < -200 || rect.top > innerHeight + 200) return;
    const progress = clamp((innerHeight - rect.top) / (innerHeight + rect.height), 0, 1);
    title.style.setProperty('--drift', progress.toFixed(3));
  });
}

// Native scrolling stays in charge; motion only affects the presentation.
const worlds = $$('.world');
const navLinks = $$('.world-switcher a');
let activeIndex = -1;
let frame = 0;
let pointer = {x:0,y:0,currentX:0,currentY:0};
function updateScene() {
  frame = 0;
  updateDrift();
  const center = innerHeight * .5;
  let closest = 0;
  let distance = Infinity;
  worlds.forEach((world, index) => {
    const rect = world.getBoundingClientRect();
    const current = Math.abs(rect.top + rect.height / 2 - center);
    if (current < distance) { distance = current; closest = index; }
    if (!reducedMotion.matches && innerWidth > 760) world.style.setProperty('--scroll-shift', `${clamp(rect.top * -.05, -35, 35)}px`);
  });
  if (activeIndex !== closest) {
    activeIndex = closest;
    worlds[closest].classList.add('is-active');
    navLinks.forEach((link, index) => {
      link.classList.toggle('is-current', index === closest);
      if (index === closest) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current');
    });
    $('.switcher-progress i').style.transform = `translateX(${closest * 100}%)`;
  }
  const lightArea = $('#little-things').getBoundingClientRect().top < innerHeight * .35;
  $('.site-header').classList.toggle('on-light', lightArea);
  $('.world-switcher').classList.toggle('is-hidden', lightArea);
  if (!reducedMotion.matches && innerWidth > 760 && !caseDialog.open) {
    pointer.currentX += (pointer.x - pointer.currentX) * .075;
    pointer.currentY += (pointer.y - pointer.currentY) * .075;
    worlds[closest].style.setProperty('--rx', pointer.currentX.toFixed(3));
    worlds[closest].style.setProperty('--ry', pointer.currentY.toFixed(3));
    if (Math.abs(pointer.x - pointer.currentX) + Math.abs(pointer.y - pointer.currentY) > .01) scheduleScene();
  }
}
function scheduleScene() { if (!frame) frame = requestAnimationFrame(updateScene); }
addEventListener('scroll', scheduleScene, {passive:true});
addEventListener('resize', scheduleScene, {passive:true});
const pointerLabel = $('.pointer-label');
addEventListener('pointermove', event => {
  if (event.pointerType !== 'mouse') return;
  pointer.x = (event.clientX / innerWidth - .5) * 2;
  pointer.y = (event.clientY / innerHeight - .5) * 2;
  scheduleScene();
  pointerLabel.style.left = `${event.clientX}px`;
  pointerLabel.style.top = `${event.clientY}px`;
  pointerLabel.style.transform = 'translate(-50%,-50%)';
  pointerLabel.classList.toggle('is-visible', Boolean(event.target.closest('[data-zoom]')) && !document.querySelector('dialog[open]'));
}, {passive:true});
document.addEventListener('pointerleave', () => { pointerLabel.classList.remove('is-visible'); pointer.x = pointer.y = 0; scheduleScene(); });
reducedMotion.addEventListener('change', scheduleScene);
scheduleScene();
routeCase();

i18n().onChange(() => {
  if (caseDialog.open && casesFor()[caseDialog.dataset.project]) {
    const top = caseDialog.scrollTop;
    renderCase(caseDialog.dataset.project);
    caseDialog.scrollTop = top;
  }
  const selectedLab = $('.lab-item[aria-selected="true"]');
  if (selectedLab) selectLab(selectedLab);
  if (explode) {
    const toggle = $('.explode-toggle', explode);
    const assembled = explode.classList.contains('is-assembled');
    toggle.textContent = assembled ? ui('explode.apart') : ui('explode.together');
    toggle.setAttribute('aria-pressed', String(assembled));
  }
  updateClock();
  const status = $('#copy-status');
  if (status) status.textContent = '';
});

