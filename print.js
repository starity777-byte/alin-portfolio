'use strict';
// Builds the PDF pages from the live site: index.html (in a hidden iframe, already translated by i18n.js)
// plus the shared editorial data in case-studies.js. Run through build-pdf.mjs.
(() => {
  const lang = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'zh';
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
  const L = {
    zh: {docTitle:'ALIN · 一些念头，几个世界。', portfolio:'产品与交互作品集', date:'2026.10', form:'作品形态', role:'我的参与', tradeoff:'取舍', now:'现在已经有的', next:'下一步想验证的', index:'FOUR PLACES TO BEGIN', more:'另有一间小屋：奶团小屋 / 14，以及仍在继续的探索 / 15', play:'去小屋看看', repo:'开源仓库', explore:'更多项目', sketch:'早期草图', screen:'现有界面', pages:'页'},
    en: {docTitle:'ALIN · A few thoughts, a few worlds.', portfolio:'Product & interaction portfolio', date:'2026.10', form:'Format', role:'My role', tradeoff:'Trade-off', now:'What exists now', next:'What I want to test next', index:'FOUR PLACES TO BEGIN', more:'Also: Naituan\'s Little House / 14, and ongoing explorations / 15', play:'Visit the house', repo:'Open-source repo', explore:'More projects', sketch:'Early sketch', screen:'Current interface', pages:'pp.'}
  }[lang];
  const TOTAL = 16;
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const frame = document.getElementById('source');
  frame.src = `index.html?lang=${lang}`;
  frame.addEventListener('load', () => {
    const win = frame.contentWindow, doc = frame.contentDocument;
    const wait = () => (doc.documentElement.lang || '').startsWith(lang === 'en' ? 'en' : 'zh') && win.PORTFOLIO_STUDIES ? build(win, doc) : setTimeout(wait, 50);
    wait();
  });

  function build(win, doc) {
    const $ = s => doc.querySelector(s);
    const t = s => ($(s)?.textContent || '').replace(/\s+/g, ' ').trim();
    const h = s => ($(s)?.innerHTML || '').trim();
    const pick = obj => obj && (obj[lang] || obj);
    const S = pick(win.PORTFOLIO_STUDIES), C = pick(win.PORTFOLIO_CASES), LAB = pick(win.PORTFOLIO_LAB);
    document.title = L.docTitle;
    let n = 0;
    const page = (inner, {dark = false, bg, acc, note = '', cls = ''} = {}) => {
      n += 1;
      return `<section class="page ${dark ? 'dark' : ''} ${cls}" style="${bg ? `--bg:${bg};` : ''}${acc ? `--acc:${acc};` : ''}"><header><span>ALIN / SELECTED WORK</span><span>${L.date}</span></header>${inner}<footer><span>${note}</span><b>${String(n).padStart(2,'0')} / ${TOTAL}</b></footer></section>`;
    };
    const img = (file, cls = 'shot', alt = '') => `<img class="${cls}" src="assets/${file}" alt="${esc(alt)}">`;
    const fig = (file, caption, cls = 'shot', style = '') => `<figure style="${style}">${img(file, cls, caption)}${caption ? `<figcaption>${esc(caption)}</figcaption>` : ''}</figure>`;
    const decision = d => `<div class="decision"><h4>${esc(d.title)}</h4><p>${esc(d.body)}</p><p class="tradeoff">${L.tradeoff} / ${esc(d.tradeoff)}</p></div>`;
    const steps = (list, from = 0) => `<ol class="steps">${list.map((s, i) => `<li><span>${String(i + 1 + from).padStart(2,'0')}</span><h4>${esc(s.title)}</h4><p>${esc(s.body)}</p></li>`).join('')}</ol>`;
    const list = items => `<ul class="list">${items.map(v => `<li>${esc(v)}</li>`).join('')}</ul>`;
    const facts = c => `<div class="facts"><div>${L.form} · <span>${esc(c.form)}</span></div><div>${L.role} · <span>${esc(c.role)}</span></div></div>`;
    const figCap = (id, file) => (S[id].figures.find(f => f.file === file) || {}).caption || '';
    const pages = [];

    // 01 Cover
    pages.push(page(`<div class="body" style="grid-template-columns:1fr 470px;align-items:stretch">
      <div style="display:flex;flex-direction:column;justify-content:space-between;padding:12px 0 6px">
        <div><h1 style="font-size:46px;letter-spacing:.06em">ALIN</h1><p style="margin-top:6px;font-size:15px">阿琳 · Lynix / ${L.portfolio}</p></div>
        <div><h2 class="big">${esc(t('footer span:nth-child(2)'))}</h2></div>
        <p class="small" style="letter-spacing:.06em">HomeMind / ${esc(C.workbench.title)} / Digest / Starity / ${esc(t('#little-things h3'))}</p>
      </div>
      <div class="phones" style="height:100%;padding:10px 0 0">${img('home-front.png','phone')}${img('home-growth.png','phone')}</div>
    </div>`, {dark:true, note:`${esc(t('#homemind .project-copy h2'))}`}));

    // 02 About + index
    const approach = [...doc.querySelectorAll('#approach article')].map(a => ({title:a.querySelector('h3').textContent, body:a.querySelector('p').textContent}));
    const idx = [['homemind', '03 – 05'], ['workbench', '06 – 08'], ['digest', '09 – 10'], ['starity', '11 – 13']];
    pages.push(page(`<div class="body" style="grid-template-columns:1fr 520px">
      <div><p class="eyebrow">${esc(t('#about .about-top .eyebrow'))}</p><h2 class="title" style="font-size:36px">${h('#about-title')}</h2>
        <p class="strong" style="font-size:17px;margin-bottom:34px">${esc(t('.about-content > div > p'))}</p>
        <p class="eyebrow">${esc(t('#approach .eyebrow'))}</p><h3 style="font-size:19px;line-height:1.5;margin-bottom:20px">${h('#approach-title')}</h3>
        ${steps(approach)}</div>
      <div class="panel"><p class="eyebrow">${L.index}</p><ol class="index-list">${idx.map(([id, range], i) => `<li><span>0${i + 1}</span><div><strong>${esc(S[id].shortTitle)}</strong><p>${esc(S[id].pdfInsight)}</p></div><em>${range}</em></li>`).join('')}</ol>
        <p class="small" style="margin-top:14px">${L.more}</p></div>
    </div>`, {note: esc(t('#about .contact-block .availability'))}));

    // Project hero
    const hero = (id, opts) => {
      const c = C[id], s = S[id];
      return page(`<div class="body" style="grid-template-columns:${opts.cols}">
        <div><p class="eyebrow">${esc(c.label)}</p><h2 class="big">${esc(c.title)}</h2><p class="sub">${esc(c.subtitle)}</p>
          <p class="lead">${esc(opts.lead)}</p><p>${esc(opts.text)}</p>${facts(c)}</div>
        ${opts.visual}</div>`, {dark:true, bg:c.bg, acc:c.accent, note:esc(opts.note)});
    };

    // 03–05 HomeMind
    const hm = S.homemind;
    pages.push(hero('homemind', {cols:'1fr 520px', lead:hm.question, text:hm.context, note:hm.figures[0].caption.split(/[。.]/)[0] ? `HomeMind / ${C.homemind.form}` : '',
      visual:`<div class="phones" style="height:100%">${img('home-front.png','phone')}${img('home-growth.png','phone')}</div>`}));
    pages.push(page(`<div class="body" style="grid-template-columns:270px 1fr 360px;gap:40px">
      ${fig('home-chat.png', '', 'phone', 'height:100%;align-items:center')}
      <div><p class="eyebrow">HOMEMIND / EXPLAIN, THEN CONFIRM</p><h2 class="title" style="font-size:30px">${esc(hm.processTitle)}</h2>${decision(hm.decisions[0])}${decision(hm.decisions[1])}</div>
      <div class="rule-v">${steps(hm.flow)}</div></div>`, {note:esc(hm.figures[0].caption)}));
    pages.push(page(`<div class="body" style="grid-template-columns:1fr 520px">
      <div><p class="eyebrow">HOMEMIND / ${esc(C.homemind.label.split('/').pop().trim())}</p><h2 class="title" style="font-size:30px">${esc(hm.outcomeTitle)}</h2>${decision(hm.decisions[2])}
        <p class="tag">${L.now}</p>${list(hm.outcomes)}<p class="tag" style="margin-top:22px">${L.next}</p>${list(hm.next)}</div>
      <div class="phones" style="height:100%">${fig('home-growth.png', '', 'phone', 'height:100%')}${fig('home-family.png', '', 'phone', 'height:100%')}</div></div>`, {note:esc(hm.boundary)}));

    // 06–08 Workbench
    const wb = S.workbench;
    pages.push(hero('workbench', {cols:'400px 1fr', lead:wb.contextTitle, text:wb.response, note:figCap('workbench','workbench-desktop.png'),
      visual:`<div style="display:flex;align-items:center;min-height:0">${img('workbench-desktop.png')}</div>`}));
    pages.push(page(`<div class="body" style="grid-template-columns:1fr 340px">
      <div style="display:flex;flex-direction:column;min-height:0"><p class="eyebrow">WORKSPACE / KEEP RUNNING</p><h2 class="title" style="font-size:30px">${esc(wb.processTitle)}</h2>
        ${fig('workbench-runtime.png', '', 'shot', 'flex:1;min-height:0')}</div>
      <div class="rule-v" style="padding-top:8px">${decision(wb.decisions[2])}${steps(wb.flow)}</div></div>`, {note:esc(figCap('workbench','workbench-runtime.png'))}));
    pages.push(page(`<div class="body" style="grid-template-columns:1fr 1fr;grid-template-rows:auto 1fr;gap:28px 48px">
      <div style="grid-column:1/-1"><p class="eyebrow">WORKSPACE / A PLACE THAT FEELS LIKE YOU</p><h2 class="title" style="font-size:30px;margin-bottom:0">${esc(wb.outcomeTitle)}</h2></div>
      <div style="min-height:0;display:flex;flex-direction:column;gap:20px">${fig('workbench-personal.png', '', 'shot', 'min-height:0;flex:0 1 auto')}<div><p class="tag">${L.now}</p>${list(wb.outcomes)}</div></div>
      <div>${decision(wb.decisions[0])}${decision(wb.decisions[1])}<p class="tag">${L.next}</p>${list(wb.next.slice(0,2))}</div></div>`, {note:esc(wb.boundary)}));

    // 09–10 Digest
    const dg = S.digest;
    pages.push(hero('digest', {cols:'400px 1fr', lead:dg.contextTitle, text:dg.response, note:dg.figures[1].caption,
      visual:`<div style="display:flex;align-items:center;min-height:0">${img('digest-interface.png')}</div>`}));
    pages.push(page(`<div class="body" style="grid-template-rows:auto 1fr auto;gap:24px">
      <div><p class="eyebrow">DIGEST / FROM SKETCH TO SCREEN</p><h2 class="title" style="font-size:30px;margin-bottom:0">${esc(dg.processTitle)}</h2></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:36px;min-height:0">${fig('digest-draft.png', `01 / ${L.sketch}`, 'shot', 'min-height:0')}${fig('digest-interface.png', `02 / ${L.screen}`, 'shot', 'min-height:0')}</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:36px">${dg.flow.map(s => `<div class="card"><h4 style="font-size:16px;margin-bottom:6px">${esc(s.title)}</h4><p style="font-size:13px;line-height:1.7">${esc(s.body)}</p></div>`).join('')}</div></div>`, {note:esc(dg.boundary)}));

    // 11–13 Starity
    const st = S.starity;
    pages.push(hero('starity', {cols:'1fr 470px', lead:st.pdfInsight, text:st.context, note:st.boundary.split(/[；;]/)[0],
      visual:`<div class="phones" style="height:100%">${img('starity-timeline.jpg','phone')}${img('starity-timeline-focus.jpg','phone')}</div>`}));
    pages.push(page(`<div class="body" style="grid-template-columns:500px 1fr">
      <div class="phones" style="height:100%">${fig('starity-tasks.jpg', '', 'phone', 'height:100%')}${fig('starity-workshop.jpg', '', 'phone', 'height:100%')}</div>
      <div><p class="eyebrow">STARITY / ACTION AND PERSONAL SPACE</p><h2 class="title" style="font-size:30px">${esc(st.processTitle)}</h2>${steps([st.flow[1], st.flow[3]].map(x => x), 0)}<div style="height:22px"></div>${decision(st.decisions[1])}</div></div>`, {note:esc(st.figures[1].caption)}));
    pages.push(page(`<div class="body" style="grid-template-columns:1fr 300px">
      <div><p class="eyebrow">STARITY / FIND THE THREAD AGAIN</p><h2 class="title" style="font-size:30px">${esc(st.outcomeTitle)}</h2>${decision(st.decisions[2])}${decision(st.decisions[0])}
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px"><div><p class="tag">${L.now}</p>${list(st.outcomes)}</div><div><p class="tag">${L.next}</p>${list(st.next)}</div></div></div>
      ${fig('starity-search.jpg', '', 'phone', 'height:100%;align-items:center')}</div>`, {note:esc(st.boundary)}));

    // 14 奶团小屋
    const stats = [...doc.querySelectorAll('.naituan-stats > div')].map(d => `<div><dt>${esc(d.querySelector('dt').textContent)}</dt><dd>${d.querySelector('dd').innerHTML}</dd></div>`).join('');
    const layers = [...doc.querySelectorAll('.explode-labels li')].map(li => ({title:li.querySelector('b').textContent, body:li.querySelector('span').textContent}));
    pages.push(page(`<div class="body" style="grid-template-columns:1fr 300px 300px;gap:44px">
      <div><p class="eyebrow">${esc(t('.naituan-copy .eyebrow'))}</p><h2 class="title" style="font-size:36px">${h('#little-title')}</h2><p class="sub" style="color:var(--accent)">${esc(t('.naituan-copy h3'))}</p>
        <p class="strong" style="font-size:16px">${h('.naituan-description')}</p><dl class="stats">${stats}</dl><p class="small">${esc(t('.naituan-source'))}</p>
        <p class="small" style="margin-top:22px">${L.play} · starity777-byte.github.io/naituan<br>${L.repo} · github.com/starity777-byte/naituan</p></div>
      <div style="padding-top:8px">${steps(layers)}</div>
      ${fig('naituan-home.jpg', '', 'phone', 'height:100%;align-items:center')}</div>`, {note:esc($('.explode-shot')?.dataset.caption || '')}));

    // 15 Explorations
    const labIds = [...doc.querySelectorAll('.lab-item')].map(b => b.dataset.lab).filter(id => LAB[id]);
    pages.push(page(`<div class="body" style="grid-template-rows:auto 1fr">
      <div><p class="eyebrow">${esc(t('.lab-heading .eyebrow'))}</p><h2 class="title" style="font-size:36px;margin-bottom:10px">${h('#lab-title')}</h2><p>${esc(t('.lab-heading > p:last-child'))}</p></div>
      <div style="display:grid;grid-template-columns:repeat(${labIds.length},1fr);gap:48px">${labIds.map((id, i) => {
        const d = LAB[id], name = doc.querySelector(`[data-lab="${id}"] strong`);
        return `<div class="card"><p class="tag">0${i + 1} / ${esc(d.type)}</p><h3 style="font-size:28px;margin-bottom:14px">${name ? name.innerHTML.replace(/<small>/,' <small style="font-size:15px;font-weight:400;color:var(--muted)">') : id}</h3><h4 style="font-size:19px;line-height:1.5;margin-bottom:12px">${d.title}</h4><p>${esc(d.description)}</p><div class="chips">${(d.chips || []).map(c => `<i>${esc(c)}</i>`).join('')}</div>${d.status ? `<p class="small" style="margin-top:14px">${esc(d.status)}</p>` : ''}</div>`;
      }).join('')}</div></div>`, {note:esc(L.explore)}));

    // 16 Contact
    pages.push(page(`<div class="body" style="grid-template-columns:1fr 1fr;align-items:center">
      <div><p class="eyebrow"><span class="dot"></span>${esc(t('.availability'))}</p><h2 class="big">${h('.contact-block h3').replace(/<em>/, '<br><em style="font-style:normal;color:var(--accent)">')}</h2></div>
      <div><p class="tag">${esc(t('#about .about-top .eyebrow'))}</p><p class="strong" style="font-size:18px;margin-bottom:40px">${esc(t('.about-content > div > p'))}</p><p class="mail">${esc(t('.email-link').replace('↗','').trim())}</p><p class="small" style="margin-top:12px">portfolio.lynix.cc</p></div></div>`, {dark:true, note:`ALIN / 阿琳 · ${esc(t('footer span:nth-child(2)'))}`}));

    if (n !== TOTAL) console.warn('page count', n);
    document.getElementById('pages').innerHTML = pages.join('');
    Promise.all([...document.images].map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; }))).then(() => document.fonts.ready).then(() => {
      frame.remove();
      document.body.dataset.ready = 'true';
    });
  }
})();
