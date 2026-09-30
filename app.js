'use strict';

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const caseData = {
  homemind: {
    title: 'HomeMind', subtitle: '让家，有一点懂你。', label: '01 / AI × EVERYDAY LIFE', bg: '#19392d', accent: '#d8efa2',
    intro: '日常的需要，往往藏在不经意的一句话里。HomeMind 围绕家庭助手展开：用对话接住生活中的变化，把清洁安排、习惯形成与家庭信息连接为一个温和的移动体验。',
    form: 'AI 产品概念 / 移动交互原型', role: '产品构思、交互设计与 AI 协同实现',
    heading: '从被听见，<br>到被理解。',
    features: [['一个轻松的入口', '打开就是今日计划和对话入口，让下一次安排自然发生。'], ['把重复变成习惯', '在“成长”里区分正在形成与已经学会的安排，把确认的权利留给人。'], ['给变化留下位置', '一次清洁、一段时间、长期习惯，分别对应不同的使用情境。']],
    note: '这里展示提供的 HomeMind 交互原型界面，体现产品及交互设计；不代表已连接实际清洁设备。', next: 'workbench'
  },
  workbench: {
    title: 'A little workspace.', subtitle: '桌面，长成自己的样子。', label: '02 / A SPACE OF YOUR OWN', bg: '#142f3b', accent: '#a0e4df',
    intro: '待办、时间、日记和正在做的事，常常需要同时出现在眼前。阿琳工作台把它们变成可以移动、缩放和组合的部件，让布局适应当下的自己。',
    form: '个人桌面工具 / Electron 原型', role: '使用场景、交互构思与 AI 协同实现',
    heading: '给秩序一个位置，<br>也给自己一点自由。',
    features: [['自由安排', '部件可以移动与组合，常用的内容留在手边。'], ['日常与工作在一起', '待办、日历、日记、便签和主题共同构成个人空间。'], ['看见正在做的事', '通过工作树与项目时间线整理任务和进展，为继续行动留下入口。']],
    note: '首页提供一个简化的交互片段；案例内三张实际截图分别呈现日常布局、运行面板与自定义壁纸。', next: 'digest'
  },
  digest: {
    title: 'Digest.', subtitle: '让想法，一步步落地。', label: '03 / THOUGHTS INTO MOTION', bg: '#30283f', accent: '#d2b9f2',
    intro: '一件事从出现到完成，中间有许多值得看见的状态。Digest 把这个过程展开为消化、执行与沉淀，让零散的任务拥有清楚的位置，也让进展更容易被理解。',
    form: '工作看板 / 界面与交互探索', role: '需求与体验构思、视觉迭代',
    heading: '从一张草图，<br>长出可操作的秩序。',
    features: [['用空间表达进展', '三段清晰的区域，让一件事的状态能够被直观看见。'], ['信息各有层次', '项目与任务在左侧，行动在中间，分类和进度在右侧。'], ['从构思到界面', '保留早期草图与实际画面的对应关系，让设计取舍有迹可循。']],
    note: '本案例依据提供的 Digest 看板素材呈现设计过程。', next: 'starity'
  },
  starity: {
    title: 'Starity', subtitle: '和小纪，把日常留成微光。', label: '04 / A LITTLE CONTINUITY', bg: '#244b43', accent: '#e2e9b7',
    intro: 'Starity 是我和 AI 伙伴小纪一起构思、打磨的个人空间。时间线接住发生过的事，任务保留下一步，会话检索找回曾经聊过的想法；背景与小猫贴纸，让这个入口也像自己的日常。',
    form: '个人伴侣看板 / 移动网页与 PWA', role: '需求与体验构思、审美方向、与小纪协同实现',
    heading: '让事情有线索，<br>也让空间有自己的样子。',
    note: '五张手机实拍由阿琳提供，保留原始页面与浏览器边框。', next: 'homemind'
  }
};

function phoneImage(file, caption) {
  return `<button data-zoom="assets/${file}" data-caption="${escapeHTML(caption)}" aria-label="放大${escapeHTML(caption)}"><img src="assets/${file}" alt="${escapeHTML(caption)}" loading="lazy"></button>`;
}

function comparisonMarkup() {
  return `<div class="comparison" style="--split:48%"><img class="comparison-image" src="assets/digest-draft.png" alt="Digest 早期界面草图"><img class="comparison-image comparison-after" src="assets/digest-interface.png" alt="Digest 实际界面"><span class="compare-label before-label">草图</span><span class="compare-label after-label">实现</span><span class="compare-line" aria-hidden="true"><span>↔</span></span><input class="compare-range" type="range" min="0" max="100" value="48" aria-label="项目详情中对比 Digest 草图与实现"></div>`;
}

function caseVisual(id) {
  if (id === 'starity') return `<div class="case-visual case-phones starity-case-phones">${phoneImage('starity-timeline.jpg', 'Starity · 手机实拍：时间线')}${phoneImage('starity-tasks.jpg', 'Starity · 手机实拍：任务与快速新增')}${phoneImage('starity-workshop.jpg', 'Starity · 手机实拍：谷子框装扮工坊')}</div>`;
  if (id === 'homemind') return `<div class="case-visual case-phones">${phoneImage('home-front.png', 'HomeMind 首页')}${phoneImage('home-growth.png', 'HomeMind 成长页面')}${phoneImage('home-family.png', 'HomeMind 我的家庭页面')}</div>`;
  if (id === 'workbench') return `<div class="case-visual"><button data-zoom="assets/workbench-desktop.png" data-caption="阿琳工作台 · 日常桌面：壁纸、时钟、日志库、待办与 keep running 并置。" aria-label="放大工作台实际桌面截图"><img class="case-image-full" src="assets/workbench-desktop.png" alt="阿琳工作台实际桌面，包含壁纸、时钟、日志库、待办、运行入口与底部组件栏" loading="lazy"></button><p class="case-caption">日常桌面 / 阿琳提供的实际截图，点击查看细节</p></div>`;
  return `<div class="case-visual">${comparisonMarkup()}<p class="case-caption">拉动分界线 / 从早期草图，到真实界面</p></div>`;
}

function renderCase(id) {
  const item = caseData[id];
  const study = window.PORTFOLIO_STUDIES[id];
  const textList = values => `<ul>${values.map(value => `<li>${escapeHTML(value)}</li>`).join('')}</ul>`;
  const figures = (id === 'workbench' ? study.figures.slice(1) : study.figures).map(figure => `<figure class="evidence-figure"><button data-zoom="assets/${figure.file}" data-caption="${escapeHTML(figure.caption)}" aria-label="放大：${escapeHTML(figure.caption)}"><img src="assets/${figure.file}" alt="${escapeHTML(figure.caption)}" loading="lazy"></button><figcaption>${escapeHTML(figure.caption)}</figcaption></figure>`).join('');
  $('#case-content').innerHTML = `
    <section class="case-hero"><p class="eyebrow">${item.label}</p><h2 id="case-title">${item.title}</h2><h3>${item.subtitle}</h3><div class="case-intro"><p>${item.intro}</p><dl class="case-facts"><div><dt>作品形态</dt><dd>${item.form}</dd></div><div><dt>我的参与</dt><dd>${item.role}</dd></div><div><dt>阅读时间</dt><dd>${study.reading}</dd></div></dl></div><p class="case-summary">${escapeHTML(study.question)}</p></section>
    <nav class="case-toc" aria-label="案例章节"><button data-section="case-context">01 设计起点</button><button data-section="case-process">02 体验路径</button><button data-section="case-decisions">03 关键取舍</button><button data-section="case-outcome">04 成果与下一步</button></nav>
    ${caseVisual(id)}
    <section class="case-chapter" id="case-context" tabindex="-1"><div class="chapter-heading"><p class="eyebrow">01 / THE STARTING POINT</p><h3>${escapeHTML(study.contextTitle)}</h3><p>${escapeHTML(study.context)}</p></div><div class="case-columns"><div><h4>需要处理的矛盾</h4><p>${escapeHTML(study.tension)}</p></div><div><h4>这次的设计回应</h4><p>${escapeHTML(study.response)}</p></div></div></section>
    <section class="case-chapter" id="case-process" tabindex="-1"><div class="chapter-heading"><p class="eyebrow">02 / THE EXPERIENCE</p><h3>${escapeHTML(study.processTitle)}</h3><p>${escapeHTML(study.processIntro)}</p></div><ol class="experience-flow">${study.flow.map((step, index) => `<li><span>${String(index+1).padStart(2,'0')}</span><h4>${escapeHTML(step.title)}</h4><p>${escapeHTML(step.body)}</p></li>`).join('')}</ol><div class="evidence-gallery ${['homemind', 'starity'].includes(id) ? 'evidence-phones' : ''}">${figures}</div>${id === 'workbench' ? '<button class="case-film-button" data-demo>返回首页，试试工作台 ↗</button>' : ''}</section>
    <section class="case-chapter" id="case-decisions" tabindex="-1"><div class="chapter-heading"><p class="eyebrow">03 / DESIGN DECISIONS</p><h3>关键选择，以及它们带来的取舍。</h3><p>从现有界面中梳理设计逻辑：每个选择解决了什么，也增加了什么需要继续考虑的问题。</p></div><div class="decision-list">${study.decisions.map((decision,index) => `<article><span class="decision-number">${String(index+1).padStart(2,'0')}</span><div><h4>${escapeHTML(decision.title)}</h4><p>${escapeHTML(decision.body)}</p><p class="tradeoff"><strong>取舍</strong> ${escapeHTML(decision.tradeoff)}</p></div></article>`).join('')}</div></section>
    <section class="case-chapter" id="case-outcome" tabindex="-1"><div class="chapter-heading"><p class="eyebrow">04 / WHERE IT IS NOW</p><h3>${escapeHTML(study.outcomeTitle)}</h3></div><div class="outcome-grid"><div><h4>现在已经有的</h4>${textList(study.outcomes)}</div><div><h4>下一步想验证的</h4>${textList(study.next)}</div></div><p class="case-footnote">${escapeHTML(study.boundary)}</p><div class="case-download"><a href="downloads/ALIN-Portfolio.pdf" download="ALIN-作品集.pdf">下载完整作品集 PDF <span aria-hidden="true">↓</span></a><button data-contact>聊聊合作 <span aria-hidden="true">↗</span></button></div></section>
    <button class="case-next" data-case="${item.next}"><div><small>NEXT WORLD</small><strong>${caseData[item.next].title}</strong></div><span>↗</span></button>`;
  const dialog = $('#case-dialog');
  dialog.style.setProperty('--case-bg', item.bg);
  dialog.style.setProperty('--accent', item.accent);
  dialog.dataset.project = id;
  dialog.scrollTop = 0;
}

const caseDialog = $('#case-dialog');
let closeTimer;
function openCase(id, addHistory = true) {
  if (!caseData[id]) return;
  clearTimeout(closeTimer);
  const wasOpen = caseDialog.open;
  if (addHistory) {
    const historyData = wasOpen && history.state?.portfolioCase ? history.state : {portfolioCase:true, returnHash:location.hash || '#homemind'};
    history[wasOpen ? 'replaceState' : 'pushState'](historyData, '', `#project/${id}`);
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
    else history.replaceState(null, '', `#${caseDialog.dataset.project || 'homemind'}`);
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

// Use original pet assets. Motion starts only after choosing an action.
const petData = {
  naituan: {
    title: '奶团', cover: 'pet-naituan.png',
    intro: '一只手绘风格的小猫。摸摸脑袋会回应，喂点饼干就开心，也会钻进纸箱，或在没有互动时自己睡着。',
    actions: [
      {label:'挥挥手', frames:['pet-naituan-wave.webp']},
      {label:'吃饼干', frames:['pet-naituan-cookie.webp']},
      {label:'钻纸箱', frames:['pet-naituan-box.webp']}
    ]
  },
  pixel: {
    title: '像素小白猫', cover: 'pet-pixel.png',
    intro: '从像素动作到桌面上的陪伴：偶尔散步、舔爪，安静久了就打盹。点击会回应，也可以拖到自己喜欢的位置。',
    actions: [
      {label:'求抱抱', frames:['pet-pixel-hug.png']},
      {label:'舔舔爪', frames:Array.from({length:6}, (_,i) => `pet-pixel-lick-0${i+1}.png`), step:1000/3.5},
      {label:'打个盹', frames:Array.from({length:3}, (_,i) => `pet-pixel-sleep-${i+1}.png`), step:900}
    ]
  }
};
const petDialog = $('#pet-dialog');
let petPlayback = 0, petStop = 0, petRequest = 0;
function restPet() {
  ++petRequest;
  clearInterval(petPlayback);
  clearTimeout(petStop);
  const pet = petData[petDialog.dataset.pet];
  if (pet) { $('#pet-image').src = `assets/${pet.cover}`; $('#pet-image').alt = pet.title; }
  $$('button', $('#pet-actions')).forEach(button => button.setAttribute('aria-pressed','false'));
  $('#pet-status').textContent = '选一个动作，看看它的回应。';
}
function openPet(id) {
  const pet = petData[id];
  petDialog.dataset.pet = id;
  $('#pet-title').textContent = pet.title;
  $('#pet-intro').textContent = pet.intro;
  $('#pet-actions').innerHTML = pet.actions.map((action, index) => `<button type="button" data-pet-action="${index}" aria-pressed="false">${action.label}</button>`).join('');
  restPet();
  petDialog.showModal();
}
$$('[data-pet]').filter(button => button !== petDialog).forEach(button => button.addEventListener('click', () => openPet(button.dataset.pet)));
$('#pet-actions').addEventListener('click', async event => {
  const button = event.target.closest('[data-pet-action]');
  if (!button) return;
  restPet();
  const version = petRequest;
  const pet = petData[petDialog.dataset.pet];
  const action = pet.actions[Number(button.dataset.petAction)];
  button.setAttribute('aria-pressed','true');
  $('#pet-status').textContent = `准备${action.label}…`;
  try {
    await Promise.all(action.frames.map(file => {
      const img = new Image(); img.src = `assets/${file}`; return img.decode();
    }));
    if (version !== petRequest || !petDialog.open) return;
    let index = 0;
    const draw = () => { $('#pet-image').src = `assets/${action.frames[index++ % action.frames.length]}`; };
    $('#pet-image').alt = `${pet.title} · ${action.label}`;
    $('#pet-status').textContent = `${action.label}，一会儿就回来。`;
    draw();
    if (action.frames.length > 1) petPlayback = setInterval(draw, action.step);
    petStop = setTimeout(restPet, 4200);
  } catch {
    if (version === petRequest) { restPet(); $('#pet-status').textContent = '动作暂时没加载好，可以再试一次。'; }
  }
});
$('.pet-close').addEventListener('click', () => petDialog.close());
petDialog.addEventListener('click', event => { if (event.target === petDialog) petDialog.close(); });
petDialog.addEventListener('close', restPet);
document.addEventListener('visibilitychange', () => { if (document.hidden) restPet(); });

function showImage(source, caption) {
  const img = $('#lightbox-image');
  img.src = source;
  img.alt = caption || '作品界面';
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
    history.replaceState(null, '', destination);
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
  $('#live-clock').textContent = now.toLocaleTimeString('zh-CN', {hour:'2-digit',minute:'2-digit',hour12:false});
  $('#live-date').textContent = now.toLocaleDateString('zh-CN', {month:'long',day:'numeric',weekday:'short'});
}
updateClock();
setInterval(updateClock, 30000);

const labData = {
  starity: {symbol:'✧', type:'A PLACE FOR YOUR THOUGHTS', title:'让一闪而过的念头，<br>有一个可以回来的地方。', description:'把思绪整理、对话检索和计划放在同一个 PWA 入口。为自己，也为长期相处的 AI 伙伴，留下连续的线索。', chips:['时间线','计划','对话检索'], status:'个人项目 · 本地原型'},
  stone: {symbol:'◈', type:'AN AI WITH CONTINUITY', title:'每次重新开始，<br>也能接住过去的自己。', description:'围绕对话消化、记忆召回与上下文组织持续探索。基于开源项目定制，从 Reasonix 到 DSH，寻找更贴近个人需要的实现方式。', chips:['对话消化','记忆召回','开源定制'], status:'个人系统 · 持续迭代，部分插件仍在验证'},
  xiaopi: {symbol:'✳', type:'A COMPANION WITH CONNECTIONS', title:'从手机上的一句话，<br>连接手边的工具。', description:'用移动聊天界面连接本地助手，把时间线、约定和工具能力逐步带进日常。游戏与设备感知等方向，仍在继续探索。', chips:['移动入口','本地网关','MCP 工具'], status:'个人项目 · 移动界面与本地桥接'}
};
function selectLab(button, focus = false) {
  const data = labData[button.dataset.lab];
  $$('.lab-item').forEach(item => {
    item.setAttribute('aria-selected', String(item === button));
    item.tabIndex = item === button ? 0 : -1;
    item.classList.toggle('is-selected', item === button);
  });
  $('#lab-detail').setAttribute('aria-labelledby', button.id);
  $('.lab-symbol').textContent = data.symbol;
  $('#lab-type').textContent = data.type;
  $('#lab-detail-title').innerHTML = data.title;
  $('#lab-description').textContent = data.description;
  $('#lab-chips').innerHTML = data.chips.map(chip => `<span>${chip}</span>`).join('');
  $('#lab-status').textContent = data.status;
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
  try { await navigator.clipboard.writeText('1394960816@qq.com'); $('#copy-status').textContent = '已复制，期待你的来信。'; }
  catch { $('#copy-status').textContent = '邮箱：1394960816@qq.com'; }
});

// Native scrolling stays in charge; motion only affects the presentation.
const worlds = $$('.world');
const navLinks = $$('.world-switcher a');
let activeIndex = -1;
let frame = 0;
let pointer = {x:0,y:0,currentX:0,currentY:0};
function updateScene() {
  frame = 0;
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

