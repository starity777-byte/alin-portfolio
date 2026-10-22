'use strict';

// English copy for index.html. Chinese is not stored here: the first apply
// keeps each marked element's original text, HTML, or attribute, and restores it.
const EN = {
  'meta.title': 'ALIN · A few thoughts, a few worlds.',
  'meta.description': "Alin's product and interaction portfolio. Explore HomeMind, a workspace of your own, Digest, Starity, and everyday tools made together with AI.",
  'skip': 'Skip to work',
  'brand.aria': "Alin's portfolio home",
  'nav.aria': 'Primary',
  'nav.work': 'Work <sup>04</sup>',
  'nav.explore': 'Explore',
  'nav.about': 'About & contact <span>↗</span>',
  'nav.pdf': "Download Alin's portfolio PDF",
  'home.subtitle': 'Let home understand you, a little.',
  'home.description': 'From an everyday conversation, to an arrangement that fits.<br>Let a home assistant, in daily life, slowly learn to be considerate.',
  'case.enter': 'Enter this work <span class="round-arrow" aria-hidden="true">↗</span>',
  'home.stage': 'HomeMind real interface preview',
  'home.growth.caption': 'HomeMind · Growth: turn needs that keep coming back into habits you can confirm.',
  'home.growth.zoom': 'Enlarge the HomeMind growth screen',
  'home.growth.alt': 'HomeMind growth page, showing cleaning habits that are forming and already learned',
  'home.front.caption': "HomeMind · Home: starting from a conversation and today's plan.",
  'home.front.zoom': 'Enlarge the HomeMind home screen',
  'home.front.alt': "HomeMind home, with today's plan and a way in to talk with Rocky",
  'home.next': 'Down, another world <span>↓</span>',
  'workbench.subtitle': 'A desktop, grown into its own shape.',
  'workbench.description': 'Ideas, a diary, and to-dos, each with a comfortable place.<br>Hand the decisions about this workspace back to yourself.',
  'workbench.stage': 'A workspace fragment: drag the widgets and switch the wallpaper',
  'desk.clock.aria': 'Move the clock widget; arrow keys adjust the position',
  'desk.clock': '◷ Clock',
  'desk.start': 'Start at your own pace.',
  'desk.note.aria': 'Move the note widget; arrow keys adjust the position',
  'desk.note.label': '↗ A small thought',
  'desk.note': 'Today, leave curiosity<br>a place too.',
  'desk.todo.aria': 'Move the to-do widget; arrow keys adjust the position',
  'desk.todo.label': '☷ Small things today',
  'desk.todo1': 'Catch a new idea',
  'desk.todo2': 'Make a small change',
  'desk.todo3': 'Leave a little time to drift',
  'desk.mood': 'Change the mood',
  'desk.theme.dusk': 'Blue-green wallpaper',
  'desk.theme.plum': 'Dusk-purple wallpaper',
  'desk.theme.forest': 'Forest wallpaper',
  'desk.reset': 'Reset the desktop widgets',
  'workbench.shot.caption': "Alin's Workspace · a real screenshot of the everyday desktop.",
  'workbench.shot.aria': 'View the real workspace desktop screenshot',
  'workbench.shot.alt': "Real screenshot of Alin's Workspace everyday desktop",
  'workbench.shot.label': 'View the shot <b>↗</b>',
  'workbench.next': 'Next, see how an idea lands <span>↓</span>',
  'digest.subtitle': 'Let an idea land, step by step.',
  'digest.description': 'Digest, execute, settle.<br>Let a thing\'s origin, its progress, and its result all be visible.',
  'digest.sketch.alt': 'Early sketch of the Digest board',
  'digest.built.alt': 'The Digest interface, showing the digest, execute, and settle areas',
  'digest.sketch': 'Sketch',
  'digest.built': 'Built',
  'digest.compare': 'Compare the sketch and the built version; drag left or right',
  'digest.next': 'Next, leave a little glow with Xiaoji <span>↓</span>',
  'starity.subtitle': 'With Xiaoji, leave the everyday as a little glow.',
  'starity.description': 'Look back at what happened, leave a next step, find a conversation from before.<br>And let this entry grow into a look you like.',
  'starity.stage': 'Starity real phone screens',
  'starity.workshop.caption': 'Starity · merch frame dress-up workshop, a phone photo from Alin.',
  'starity.workshop.zoom': 'Enlarge the Starity dress-up workshop',
  'starity.workshop.alt': 'Phone photo of the Starity merch frame dress-up workshop',
  'starity.timeline.caption': 'Starity · everyday timeline, a phone photo from Alin.',
  'starity.timeline.zoom': 'Enlarge the Starity timeline',
  'starity.timeline.alt': 'Phone photo of the Starity timeline',
  'starity.next': 'Then sit a while in a little house <span>↓</span>',
  'naituan.title': 'A little house, <em>many have visited.</em>',
  'naituan.name': "Naituan's Little House · 奶团小屋",
  'naituan.description': 'With a white red panda, arrange the house and play a few small games.<br>No tutorial, and no urging — just to be gently caught when you come back.',
  'naituan.stat1.label': 'players',
  'naituan.stat1.value': '32<small>K</small>',
  'naituan.stat2.label': 'views',
  'naituan.stat2.value': '38<small>K</small>',
  'naituan.stat3.label': 'likes & saves',
  'naituan.stat3.value': '4,400<small>+</small>',
  'naituan.source': 'Xiaohongshu post and mini-tool data · Oct 2026',
  'naituan.play': 'Visit the house <span class="round-arrow" aria-hidden="true">↗</span>',
  'naituan.repo': 'Source repo ↗',
  'naituan.bubble': 'Good Naituan today!',
  'naituan.fish': 'Fish 3991',
  'naituan.gem': 'Gem 5',
  'naituan.nav.den': 'Den',
  'naituan.nav.life': 'Life',
  'naituan.nav.me': 'Me',
  'naituan.layer.ui': 'Interface',
  'naituan.layer.ui.note': 'Mostly put away',
  'naituan.layer.cat': 'Naituan',
  'naituan.layer.cat.note': 'Motion and reply',
  'naituan.layer.furniture': 'Furniture',
  'naituan.layer.furniture.note': 'Free to arrange',
  'naituan.layer.room': 'Room',
  'naituan.layer.room.note': 'Hand-drawn base',
  'naituan.toggle': 'See it together',
  'naituan.shot': 'Live screenshot <span aria-hidden="true">↗</span>',
  'naituan.shot.caption': 'Naituan\'s Little House · the den, Naituan on a cushion saying hello.',
  'lab.title': 'Curiosity, <em>still going.</em>',
  'lab.intro': 'A few AI and tool experiments that grew from close by.',
  'lab.list': 'More projects',
  'lab.stone.gloss': '',
  'lab.xiaopi.gloss': '',
  'lab.detail.title': 'Each time you start again,<br>you can still catch your earlier self.',
  'lab.detail.description': 'Still exploring conversation digest, memory recall, and how context is organized. Customized from open-source projects, from Reasonix to DSH, looking for an implementation closer to a personal need.',
  'process.title': 'Start from a problem close by,<br>and make an idea into something you can try.',
  'process.1.title': 'First, find the specific snag',
  'process.1.body': 'First say which moment feels awkward, then decide what kind of tool it needs.',
  'process.2.title': 'Turn the relationship into a visible experience',
  'process.2.body': 'I set the need and the direction, and with AI turn the idea into a prototype you can try.',
  'process.3.title': 'Keep adjusting while trying it',
  'process.3.body': 'Find the burden in real use, keep what is useful, and let the work keep growing.',
  'about.title': 'Between ideas and reality,<br>I like to <span>make a little something.</span>',
  'about.body': "I'm Alin, also known as Lynix. A good idea shouldn't live only in the mind. What do you think?",
  'about.pdf': 'Take a portfolio PDF <span aria-hidden="true">↓</span>',
  'contact.availability': '<i></i> Open to AI product and technical collaboration',
  'contact.title': 'The next idea, <em>make it together?</em>',
  'contact.copy': 'Copy email <span>⧉</span>',
  'footer.tagline': 'A few thoughts, a few worlds.',
  'footer.back': 'Back to the first world ↑',
  'switcher.aria': 'Switch works',
  'switcher.workbench': 'Workspace',
  'case.close': 'Back to the work <span>×</span>',
  'case.close.aria': 'Close the project detail',
  'lightbox.aria': 'Large image of a work',
  'lightbox.close': 'Close ×',
  'lightbox.close.aria': 'Close the large image'
};

const UI = {
  zh: {
    'case.form': '作品形态',
    'case.role': '我的参与',
    'case.reading': '阅读时间',
    'case.toc': '案例章节',
    'case.toc1': '01 设计起点',
    'case.toc2': '02 体验路径',
    'case.toc3': '03 关键取舍',
    'case.toc4': '04 成果与下一步',
    'case.tension': '需要处理的矛盾',
    'case.response': '这次的设计回应',
    'case.decisionsTitle': '关键选择，以及它们带来的取舍。',
    'case.decisionsIntro': '从现有界面中梳理设计逻辑：每个选择解决了什么，也增加了什么需要继续考虑的问题。',
    'case.tradeoff': '取舍',
    'case.have': '现在已经有的',
    'case.next': '下一步想验证的',
    'case.download': '下载完整作品集 PDF',
    'case.contact': '聊聊合作',
    'case.demo': '返回首页，试试工作台 ↗',
    'zoom.prefix': '放大',
    'zoom.captionPrefix': '放大：',
    'lightbox.fallback': '作品界面',
    'explode.apart': '拆开看看',
    'explode.together': '合起来看',
    'copy.ok': '已复制，期待你的来信。',
    'copy.fallback': '邮箱：limeilin839@gmail.com',
    'clock.locale': 'zh-CN',
    'visual.hm.home': 'HomeMind 首页',
    'visual.hm.growth': 'HomeMind 成长页面',
    'visual.hm.family': 'HomeMind 我的家庭页面',
    'visual.st.timeline': 'Starity · 手机实拍：时间线',
    'visual.st.tasks': 'Starity · 手机实拍：任务与快速新增',
    'visual.st.workshop': 'Starity · 手机实拍：谷子框装扮工坊',
    'visual.wb.caption': '阿琳工作台 · 日常桌面：壁纸、时钟、日志库、待办与 keep running 并置。',
    'visual.wb.aria': '放大工作台实际桌面截图',
    'visual.wb.alt': '阿琳工作台实际桌面，包含壁纸、时钟、日志库、待办、运行入口与底部组件栏',
    'visual.wb.note': '日常桌面 / 阿琳提供的实际截图，点击查看细节',
    'visual.dg.sketchAlt': 'Digest 早期界面草图',
    'visual.dg.builtAlt': 'Digest 实际界面',
    'visual.dg.sketch': '草图',
    'visual.dg.built': '实现',
    'visual.dg.aria': '项目详情中对比 Digest 草图与实现',
    'visual.dg.note': '拉动分界线 / 从早期草图，到真实界面'
  },
  en: {
    'case.form': 'Form',
    'case.role': 'My part',
    'case.reading': 'Reading time',
    'case.toc': 'Case sections',
    'case.toc1': '01 Starting point',
    'case.toc2': '02 Experience path',
    'case.toc3': '03 Key tradeoffs',
    'case.toc4': '04 Results and next',
    'case.tension': 'The contradiction to handle',
    'case.response': 'The design response this time',
    'case.decisionsTitle': 'Key choices, and the tradeoffs they bring.',
    'case.decisionsIntro': 'Design logic sorted out from the existing interface: what each choice solved, and what it added that still needs thinking about.',
    'case.tradeoff': 'Tradeoff',
    'case.have': 'What is already here',
    'case.next': 'What to verify next',
    'case.download': 'Download the full portfolio PDF',
    'case.contact': 'Talk about collaboration',
    'case.demo': 'Back home, try the workspace ↗',
    'zoom.prefix': 'Enlarge ',
    'zoom.captionPrefix': 'Enlarge: ',
    'lightbox.fallback': 'Work interface',
    'explode.apart': 'See it apart',
    'explode.together': 'See it together',
    'copy.ok': 'Copied. Looking forward to your letter.',
    'copy.fallback': 'Email: limeilin839@gmail.com',
    'clock.locale': 'en-US',
    'visual.hm.home': 'HomeMind home',
    'visual.hm.growth': 'HomeMind growth page',
    'visual.hm.family': 'HomeMind family page',
    'visual.st.timeline': 'Starity · phone photo: timeline',
    'visual.st.tasks': 'Starity · phone photo: tasks and quick add',
    'visual.st.workshop': 'Starity · phone photo: merch frame dress-up workshop',
    'visual.wb.caption': "Alin's Workspace · everyday desktop: wallpaper, clock, log library, to-dos, and keep running together.",
    'visual.wb.aria': 'Enlarge the real workspace desktop screenshot',
    'visual.wb.alt': "Alin's Workspace real desktop, with wallpaper, clock, log library, to-dos, the running entry, and the component bar at the bottom",
    'visual.wb.note': 'Everyday desktop / a real screenshot from Alin; click to see the detail',
    'visual.dg.sketchAlt': 'Early sketch of the Digest interface',
    'visual.dg.builtAlt': 'The Digest interface as built',
    'visual.dg.sketch': 'Sketch',
    'visual.dg.built': 'Built',
    'visual.dg.aria': 'In the project detail, compare the Digest sketch with the built interface',
    'visual.dg.note': 'Drag the divider / from an early sketch to the real interface'
  }
};

const originals = new WeakMap();
const zhByKey = new Map();
const listeners = new Set();

function readStored() {
  try {
    const value = localStorage.getItem('alin-lang');
    if (value === 'en' || value === 'zh') return value;
  } catch (error) { /* private mode or blocked storage */ }
  return '';
}

function writeStored(value) {
  try { localStorage.setItem('alin-lang', value); } catch (error) { /* ignore */ }
}

function initialLang() {
  try {
    const query = new URLSearchParams(location.search).get('lang');
    if (query === 'en' || query === 'zh') {
      writeStored(query);
      return query;
    }
  } catch (error) { /* ignore a broken query string */ }
  return readStored() || 'zh';
}

let lang = initialLang();

function t(key) {
  if (lang === 'en') return Object.prototype.hasOwnProperty.call(EN, key) ? EN[key] : '';
  return zhByKey.has(key) ? zhByKey.get(key) : '';
}

function uiString(key) {
  const pack = UI[lang] || UI.zh;
  if (Object.prototype.hasOwnProperty.call(pack, key)) return pack[key];
  return Object.prototype.hasOwnProperty.call(UI.zh, key) ? UI.zh[key] : '';
}

function pdf() {
  if (lang === 'en') return {href: 'downloads/ALIN-Portfolio-EN.pdf', download: 'ALIN-Portfolio-EN.pdf'};
  return {href: 'downloads/ALIN-Portfolio.pdf', download: 'ALIN-作品集.pdf'};
}

function parseAttrSpec(spec) {
  const pairs = [];
  String(spec || '').split(';').forEach(part => {
    const index = part.indexOf(':');
    if (index <= 0) return;
    const attr = part.slice(0, index).trim();
    const key = part.slice(index + 1).trim();
    if (attr && key) pairs.push([attr, key]);
  });
  return pairs;
}

function remember(el) {
  let record = originals.get(el);
  if (record) return record;
  record = {text: null, html: null, attrs: null};
  originals.set(el, record);
  if (el.hasAttribute('data-i18n')) {
    record.text = el.textContent;
    const key = el.getAttribute('data-i18n');
    if (key && !zhByKey.has(key)) zhByKey.set(key, record.text);
  }
  if (el.hasAttribute('data-i18n-html')) {
    record.html = el.innerHTML;
    const key = el.getAttribute('data-i18n-html');
    if (key && !zhByKey.has(key)) zhByKey.set(key, record.html);
  }
  if (el.hasAttribute('data-i18n-attr')) {
    record.attrs = {};
    parseAttrSpec(el.getAttribute('data-i18n-attr')).forEach(([attr, key]) => {
      record.attrs[attr] = el.getAttribute(attr);
      if (!zhByKey.has(key)) zhByKey.set(key, record.attrs[attr]);
    });
  }
  return record;
}

function textFor(key, original) {
  if (lang !== 'en') return original;
  return Object.prototype.hasOwnProperty.call(EN, key) ? EN[key] : original;
}

function applyMarkers() {
  document.querySelectorAll('[data-i18n], [data-i18n-html], [data-i18n-attr]').forEach(el => {
    const record = remember(el);
    if (el.hasAttribute('data-i18n')) el.textContent = textFor(el.getAttribute('data-i18n'), record.text);
    if (el.hasAttribute('data-i18n-html')) el.innerHTML = textFor(el.getAttribute('data-i18n-html'), record.html);
    if (record.attrs) {
      parseAttrSpec(el.getAttribute('data-i18n-attr')).forEach(([attr, key]) => {
        const value = textFor(key, record.attrs[attr]);
        if (value == null) el.removeAttribute(attr);
        else el.setAttribute(attr, value);
      });
    }
  });
}

function applyPdf() {
  const file = pdf();
  document.querySelectorAll('[data-pdf-link]').forEach(anchor => {
    anchor.setAttribute('href', file.href);
    anchor.setAttribute('download', file.download);
  });
}

function applyToggle() {
  document.querySelectorAll('.lang-switch [data-lang]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
  });
}

function apply() {
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
  applyMarkers();
  const titleEl = document.querySelector('title');
  if (titleEl) document.title = titleEl.textContent;
  const description = document.querySelector('meta[name="description"]');
  if (description && lang === 'en' && EN['meta.description']) description.setAttribute('content', EN['meta.description']);
  applyToggle();
  applyPdf();
  listeners.forEach(fn => { fn(lang); });
}

function setLang(next) {
  if ((next !== 'en' && next !== 'zh') || next === lang) return;
  lang = next;
  writeStored(next);
  const url = new URL(location.href);
  if (next === 'en') url.searchParams.set('lang', 'en');
  else url.searchParams.delete('lang');
  const nextUrl = `${url.pathname}${url.search}${url.hash}`;
  if (nextUrl !== `${location.pathname}${location.search}${location.hash}`) {
    history.replaceState(history.state, '', nextUrl);
  }
  apply();
}

function onChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

document.querySelectorAll('.lang-switch [data-lang]').forEach(button => {
  button.addEventListener('click', () => setLang(button.dataset.lang));
});

apply();

window.PORTFOLIO_I18N = {
  get lang() { return lang; },
  t,
  ui: uiString,
  setLang,
  onChange,
  pdf,
  EN
};
