// EXPLORER NAVIGATION
let history = [], histIdx = -1, currentView = '';

function navTo(view, pushHistory=true) {
  if (pushHistory) {
    if (histIdx < history.length - 1) history = history.slice(0, histIdx+1);
    history.push(view); histIdx++;
  }
  currentView = view;
  renderView(view);
  updateNav();
  bringWin('win-explorer');
}

function navBack() { if(histIdx>0){ histIdx--; navTo(history[histIdx],false); } }
function navFwd()  { if(histIdx<history.length-1){ histIdx++; navTo(history[histIdx],false); } }

function updateNav() {
  document.getElementById('btn-back').disabled = histIdx<=0;
  document.getElementById('btn-fwd').disabled  = histIdx>=history.length-1;
}

function renderView(view) {
  const pane = document.getElementById('exp-pane');
  const sb   = document.getElementById('exp-sb');
  sb.querySelectorAll('.sb-item').forEach(i => i.classList.toggle('active', i.dataset.view===view));
  if (view === 'home')                { pane.innerHTML = viewHome();           setTitle('Eight28 Records','📁'); }
  else if (view === 'folder-artists') { pane.innerHTML = viewFolderArtists();  setTitle('Artists','📂'); }
  else if (view === 'folder-releases'){ pane.innerHTML = viewFolderReleases(); setTitle('Releases','💿'); }
  else if (view.startsWith('artist-')){ pane.innerHTML = viewArtist(view.replace('artist-','')); setTitle(ARTISTS[view.replace('artist-','')]?.name||'','🎵'); initArtistTabs(); }
  else if (view.startsWith('release-')){ pane.innerHTML = viewRelease(view.replace('release-','')); setTitle(RELEASES[view.replace('release-','')]?.name||'','💿'); }
  renderCrumb(view);
  renderSidebar();
  pane.scrollTop = 0;
}

function setTitle(t, ico) {
  document.getElementById('exp-ttl').textContent = t;
  document.getElementById('exp-ico').textContent = ico;
}

function renderCrumb(view) {
  const parts = [];
  parts.push({label:'Eight28 Records', view:'home'});
  if (view==='folder-artists') parts.push({label:'Artists',view:'folder-artists'});
  else if (view==='folder-releases') parts.push({label:'Releases',view:'folder-releases'});
  else if (view.startsWith('artist-')) {
    parts.push({label:'Artists',view:'folder-artists'});
    const a = ARTISTS[view.replace('artist-','')];
    if(a) parts.push({label:a.name, view});
  } else if (view.startsWith('release-')) {
    const r = RELEASES[view.replace('release-','')];
    if(r){
      parts.push({label:'Artists',view:'folder-artists'});
      const a = ARTISTS[r.artistId];
      if(a) parts.push({label:a.name, view:'artist-'+r.artistId});
      parts.push({label:r.name, view});
    }
  }
  document.getElementById('exp-crumb').innerHTML = parts.map((p,i) =>
    `<span class="exp-crumb-part" onclick="navTo('${p.view}')">${p.label}</span>${i<parts.length-1?'<span class="exp-crumb-sep">›</span>':''}`
  ).join('');
}

function renderSidebar() {
  document.getElementById('exp-sb').innerHTML = `
    <div class="sb-group">LABEL</div>
    <div class="sb-item ${currentView==='home'?'active':''}" data-view="home" onclick="navTo('home')"><span>🏠</span>Eight28 Records</div>
    <div class="sb-group">DIRECTORIES</div>
    <div class="sb-item ${currentView==='folder-artists'?'active':''}" data-view="folder-artists" onclick="navTo('folder-artists')"><span>📂</span>Artists</div>
    <div class="sb-item ${currentView==='folder-releases'?'active':''}" data-view="folder-releases" onclick="navTo('folder-releases')"><span>💿</span>Releases</div>
    <div class="sb-group">ARTISTS</div>
    <div class="sb-item ${currentView==='artist-lsd'?'active':''}" data-view="artist-lsd" onclick="navTo('artist-lsd')"><span>🎵</span>LilSaintDenzel</div>
    <div class="sb-group">RELEASES</div>
    <div class="sb-item ${currentView==='release-concordia'?'active':''}" data-view="release-concordia" onclick="navTo('release-concordia')"><span>𝄞</span>Concordia Sonorum</div>
    <div class="sb-item ${currentView==='release-rescued'?'active':''}" data-view="release-rescued" onclick="navTo('release-rescued')"><span>💯</span>Rescued: The Hundred</div>
    <div class="sb-item ${currentView==='release-thereturn'?'active':''}" data-view="release-thereturn" onclick="navTo('release-thereturn')"><span>↩</span>The Return</div>
    <div class="sb-item ${currentView==='release-solas'?'active':''}" data-view="release-solas" onclick="navTo('release-solas')"><span>✠</span>SOLAS</div>
    <div class="sb-item ${currentView==='release-est1995'?'active':''}" data-view="release-est1995" onclick="navTo('release-est1995')"><span>9̶5</span>EST. 1995</div>
    <div class="sb-item ${currentView==='release-heartware'?'active':''}" data-view="release-heartware" onclick="navTo('release-heartware')"><img src="artists/lilsaintdenzel/artwork/heartware.jpg" style="width:16px;height:16px;object-fit:cover;border-radius:3px;flex-shrink:0;">HeartWare</div>
    <div class="sb-item ${currentView==='release-goodfriday'?'active':''}" data-view="release-goodfriday" onclick="navTo('release-goodfriday')"><span>✝</span>Good Friday EP</div>
    <div class="sb-item ${currentView==='release-darkclouds'?'active':''}" data-view="release-darkclouds" onclick="navTo('release-darkclouds')"><span>☁</span>Dark Clouds Deep Mercy</div>
    <div class="sb-item ${currentView==='release-imagodei'?'active':''}" data-view="release-imagodei" onclick="navTo('release-imagodei')"><img src="artists/lilsaintdenzel/artwork/imagodei.jpg" style="width:16px;height:16px;object-fit:cover;border-radius:3px;flex-shrink:0;">Imago Dei</div>
    <div class="sb-item ${currentView==='release-euangelion'?'active':''}" data-view="release-euangelion" onclick="navTo('release-euangelion')"><img src="artists/lilsaintdenzel/artwork/euangelion.jpg" style="width:16px;height:16px;object-fit:cover;border-radius:3px;flex-shrink:0;">Euangelion</div>
    <div class="sb-item ${currentView==='release-pantasynergy'?'active':''}" data-view="release-pantasynergy" onclick="navTo('release-pantasynergy')"><img src="artists/lilsaintdenzel/artwork/pantasynergy.jpg" style="width:16px;height:16px;object-fit:cover;border-radius:3px;flex-shrink:0;">PantaSynergy</div>
  `;
}

// VIEW RENDERERS
function viewHome() {
  return `<div class="view-home">
  <div class="home-banner">
    <div class="home-logo-row">
      <div class="home-logo">8</div>
      <div><div class="home-name">Eight28 Records</div><div class="home-tag">INDEPENDENT LABEL · ENGLAND, UK · ATWT828</div></div>
    </div>
    <div class="home-title"><strong>Faith.</strong> Sound. Art.<br><em>All Things Working Together.</em></div>
    <div class="home-desc">An independent label rooted in Romans 8:28. Click a folder to explore artists, releases, and more.</div>
    <div class="home-pills"><span class="hpill g">ATWT828</span><span class="hpill">Music</span><span class="hpill">England, UK</span></div>
  </div>
  <div class="home-stats">
    <div class="hstat"><div class="hstat-n">11</div><div class="hstat-l">Releases</div></div>
    <div class="hstat"><div class="hstat-n">1</div><div class="hstat-l">Artist</div></div>
    <div class="hstat"><div class="hstat-n">∞</div><div class="hstat-l">ATWT828</div></div>
  </div>
  <div class="folder-section">
    <div class="folder-section-lbl">Folders</div>
    <div class="folder-grid">
      ${folderItem('folder-artists','📂','#0060c0','#003d8a','Artists','1 Artist')}
      ${folderItem('folder-releases','💿','#1a3a6a','#0a1e3a','Releases','11 Releases')}
    </div>
    <div class="folder-section-lbl">Artists</div>
    <div class="folder-grid">
      ${folderItem('artist-lsd','🎵','#1a3a6a','#0a1e3a','LilSaintDenzel','Music · Producer')}
    </div>
  </div>
</div>`;
}

function folderItem(view, ico, c1, c2, name, meta) {
  return `<div class="folder-item" onclick="navTo('${view}')" ondblclick="navTo('${view}')">
    <div class="fi-folder-art">
      <div class="fi-folder-back" style="background:linear-gradient(145deg,${c1},${c2});"></div>
      <div class="fi-folder-tab" style="background:${c1};filter:brightness(1.3);"></div>
      <div class="fi-folder-inner" style="background:rgba(255,255,255,0.08);">${ico}</div>
    </div>
    <div class="fi-name">${name}</div>
    <div class="fi-meta">${meta}</div>
  </div>`;
}

function viewFolderArtists() {
  return `<div class="view-folder">
  <div class="folder-header">
    <div class="fh-ico">📂</div>
    <div><div class="fh-name">Artists</div><div class="fh-meta">1 item</div></div>
  </div>
  <div class="folder-contents">
    <div class="folder-grid">
      ${folderItem('artist-lsd','🎵','#1a3a6a','#0a1e3a','LilSaintDenzel','Music · Producer')}
    </div>
  </div>
</div>`;
}

function viewFolderReleases() {
  return `<div class="view-folder">
  <div class="folder-header">
    <div class="fh-ico">💿</div>
    <div><div class="fh-name">Releases</div><div class="fh-meta">11 items</div></div>
  </div>
  <div class="folder-contents">
    <div class="folder-grid">
      ${folderItem('release-concordia','𝄞','#0d0a06','#1a1408','Concordia Sonorum','Album · 2026 · 11 Tracks')}
      ${folderItem('release-rescued','💯','#1a1206','#2a1e08','Rescued: The Hundred','EP · 2026 · 5 Tracks')}
      ${folderItem('release-thereturn','↩','#0e0e0e','#1a1a1a','The Return','EP · 2025 · 6 Tracks')}
      ${folderItem('release-solas','✠','#1a0e06','#2a1808','SOLAS','EP · 2025 · 5 Tracks')}
      ${folderItem('release-est1995','9̶5','#0a0a12','#1a1428','EST. 1995','Album · 2025')}
      ${folderItem('release-heartware','<img src="artists/lilsaintdenzel/artwork/heartware.jpg" style="width:36px;height:36px;object-fit:cover;border-radius:3px;">','#0e0a14','#1e0a1a','HeartWare','Album · 2025 · 13 Tracks')}
      ${folderItem('release-goodfriday','✝','#120808','#0a0408','Good Friday EP','EP · 2024 · 5 Tracks')}
      ${folderItem('release-darkclouds','☁','#080c14','#0a1020','Dark Clouds Deep Mercy','Album · 2024')}
      ${folderItem('release-imagodei','✦','#0a0a08','#1a1a10','Imago Dei','Album · 2024')}
      ${folderItem('release-euangelion','<img src="artists/lilsaintdenzel/artwork/euangelion.jpg" style="width:36px;height:36px;object-fit:cover;border-radius:3px;">','#080a10','#10141e','Euangelion','Album · 2024')}
      ${folderItem('release-pantasynergy','<img src="artists/lilsaintdenzel/artwork/pantasynergy.jpg" style="width:36px;height:36px;object-fit:cover;border-radius:3px;">','#060e08','#0e1e10','PantaSynergy','Album · 2023')}
    </div>
  </div>
</div>`;
}

function viewArtist(id) {
  const a = ARTISTS[id]; if(!a) return '<div style="padding:40px;color:#999;font-family:DM Mono">Artist not found</div>';
  const discHTML = a.releases.map(rid => {
    const r = RELEASES[rid]; if(!r) return '';
    return `<div class="disc-row" onclick="navTo('release-${rid}')">
      <div class="dr-cover" style="background:${r.coverBg};">${r.coverImg?`<img src="${r.coverImg}" style="width:100%;height:100%;object-fit:cover;border-radius:7px;">`:r.icon}</div>
      <div class="dr-info">
        <div class="dr-title">${r.name}</div>
        <div class="dr-meta">${r.meta}</div>
        <div class="dr-tracks">${r.tracks.map(t=>t.n).join(' · ')}</div>
      </div>
      <div class="dr-badge">
        <span class="dr-type">${r.type}</span>
        <span class="dr-story" onclick="event.stopPropagation();openStory('${rid}')">📖 Story</span>
      </div>
    </div>`;
  }).join('');

  const seriesHTML = (a.series||[]).map(s=>`
    <div class="disc-row">
      <div class="dr-cover" style="background:linear-gradient(135deg,#0a0818,#14102a);font-size:18px;">${s.ico}</div>
      <div class="dr-info"><div class="dr-title">${s.name}</div><div class="dr-meta">${s.meta}</div></div>
      <div class="dr-badge"><span class="dr-type">${s.type}</span></div>
    </div>`).join('');

  const allTracks = a.releases.flatMap(rid=>(RELEASES[rid]?.tracks||[]).map((t,i)=>({...t,num:i+1})));
  const tracksHTML = allTracks.map(t=>`
    <div class="tr">
      <span class="tr-n">${String(t.num).padStart(2,'0')}</span>
      <div class="tr-play">▶</div>
      <span class="tr-name">${t.n}</span>
      <span class="tr-album">${t.album}</span>
      <span class="tr-dur">${t.dur}</span>
    </div>`).join('');

  const linksHTML = a.links.map(l=>{
    const href = l.u.startsWith('@') ? `https://instagram.com/${l.u.slice(1)}` : `https://${l.u}`;
    return `<a class="lnk" href="${href}" target="_blank" rel="noopener" style="text-decoration:none;display:flex;align-items:center;gap:12px;">
      <div class="lnk-ico">${l.i}</div>
      <div class="lnk-t"><div class="lnk-name">${l.n}</div><div class="lnk-url">${l.u}</div></div>
      <span class="lnk-arr">›</span>
    </a>`;
  }).join('');

  const bioHTML = a.bio.map(p=>`<div class="av-bio-txt">${p}</div>`).join('');
  const detailsHTML = a.details.map(d=>`<div class="av-detail"><span class="avd-ico">${d.i}</span><span class="avd-txt">${d.t}</span></div>`).join('');
  const statsHTML = a.stats.map(s=>`<div class="avs"><div class="avs-n">${s.n}</div><div class="avs-l">${s.l}</div></div>`).join('');

  const discTab = a.releases.length > 0
    ? `<div class="av-tab" data-panel="${id}-disc" onclick="switchArtistTab(this,'${id}','disc')">Discography</div>`
    : (a.series ? `<div class="av-tab" data-panel="${id}-disc" onclick="switchArtistTab(this,'${id}','disc')">Series</div>` : '');

  const tracksTab = allTracks.length > 0
    ? `<div class="av-tab" data-panel="${id}-tracks" onclick="switchArtistTab(this,'${id}','tracks')">All Tracks</div>` : '';

  return `<div class="artist-view">
  <div class="av-hero">
    <div class="av-hero-bg" style="background:${a.heroBg};"></div>
    <div class="av-hero-glow" style="background:${a.heroGlow};"></div>
    <div class="av-hero-info">
      <div class="av-badge">${a.badge}</div>
      <div class="av-name">${a.name}</div>
      <div class="av-role">${a.role}</div>
    </div>
  </div>
  <div class="av-stats">${statsHTML}</div>
  <div class="av-tabs" id="tabs-${id}">
    <div class="av-tab on" data-panel="${id}-bio" onclick="switchArtistTab(this,'${id}','bio')">Bio</div>
    ${discTab}
    ${tracksTab}
    <div class="av-tab" data-panel="${id}-links" onclick="switchArtistTab(this,'${id}','links')">Links</div>
  </div>
  <div class="av-panel on" id="${id}-bio">
    <div class="av-bio">${bioHTML}<div class="av-details">${detailsHTML}</div></div>
  </div>
  <div class="av-panel" id="${id}-disc">
    <div class="av-disc">${discHTML}${seriesHTML}</div>
  </div>
  ${allTracks.length>0?`<div class="av-panel" id="${id}-tracks"><div class="av-tracks">${tracksHTML}</div></div>`:''}
  <div class="av-panel" id="${id}-links">
    <div class="av-links">${linksHTML}</div>
  </div>
</div>`;
}

function viewRelease(id) {
  const r = RELEASES[id]; if(!r) return '';
  const tracksHTML = r.tracks.map((t,i)=>`
    <div class="tr">
      <span class="tr-n">${String(i+1).padStart(2,'0')}</span>
      <div class="tr-play">▶</div>
      <span class="tr-name">${t.n}</span>
      <span class="tr-dur">${t.dur}</span>
    </div>`).join('');
  const a = ARTISTS[r.artistId];
  const embedHTML = r.spotifyId ? `
  <div style="padding:16px 18px;border-bottom:1px solid var(--div);">
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/${r.spotifyId}?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>` : '';
  const heroBgStyle = r.coverImg
    ? `background:${r.coverBg};`
    : `background:${r.coverBg};`;
  const coverImgHTML = r.coverImg
    ? `<div class="av-hero-img" style="position:absolute;inset:0;overflow:hidden;"><img src="${r.coverImg}" alt="${r.name}" style="width:100%;height:100%;object-fit:cover;opacity:0.55;"></div>`
    : '';
  return `<div>
  <div class="av-hero">
    <div class="av-hero-bg" style="${heroBgStyle}"></div>
    ${coverImgHTML}
    <div class="av-hero-glow" style="background:radial-gradient(ellipse 60% 70% at 50% 50%,rgba(200,164,74,0.2),transparent 65%);"></div>
    <div class="av-hero-info">
      <div class="av-badge">${r.type} · EIGHT28 RECORDS</div>
      <div class="av-name">${r.name}</div>
      <div class="av-role">${r.meta}${a?' · '+a.name:''}</div>
    </div>
  </div>
  <div style="display:flex;gap:8px;padding:14px 18px;border-bottom:1px solid var(--div);flex-wrap:wrap;">
    <button onclick="openStory('${id}')" style="display:flex;align-items:center;gap:6px;padding:8px 16px;background:var(--sel);border:1px solid var(--sel-br);border-radius:6px;font-family:'Syne',sans-serif;font-size:12px;font-weight:700;color:var(--accent);cursor:pointer;transition:background .13s;" onmouseover="this.style.background='rgba(0,120,212,0.15)'" onmouseout="this.style.background='var(--sel)'">📖 Read Album Story</button>
    ${a?`<button onclick="navTo('artist-${r.artistId}')" style="display:flex;align-items:center;gap:6px;padding:8px 16px;background:rgba(0,0,0,0.04);border:1px solid var(--div);border-radius:6px;font-family:'Syne',sans-serif;font-size:12px;font-weight:700;color:var(--t2);cursor:pointer;">Back to ${a.name}</button>`:''}
    ${r.spotifyId?`<a href="https://open.spotify.com/album/${r.spotifyId}" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:6px;padding:8px 16px;background:#1DB954;border:none;border-radius:6px;font-family:'Syne',sans-serif;font-size:12px;font-weight:700;color:#000;cursor:pointer;text-decoration:none;">Play on Spotify</a>`:''}
  </div>
  ${embedHTML}
  ${r.tracks.length>0?`<div class="av-tracks">${tracksHTML}</div>`:''}
</div>`;
}

// Artist tab switching
function switchArtistTab(btn, artistId, panel) {
  const tabsEl = document.getElementById('tabs-'+artistId);
  if(!tabsEl) return;
  tabsEl.querySelectorAll('.av-tab').forEach(t=>t.classList.remove('on'));
  btn.classList.add('on');
  const pane = document.getElementById('exp-pane');
  pane.querySelectorAll('.av-panel').forEach(p=>p.classList.remove('on'));
  const target = document.getElementById(artistId+'-'+panel);
  if(target) target.classList.add('on');
}

function initArtistTabs() {}

// Search
function expSearch(q) {
  if(!q.trim()) return;
  q = q.toLowerCase();
  if('lilsaintdenzel'.includes(q)||'lsd'.includes(q)) navTo('artist-lsd');
  else if('concordia'.includes(q)) navTo('release-concordia');
  else if('good friday'.includes(q)||'goodfriday'.includes(q)) navTo('release-goodfriday');
  else if('est 1995'.includes(q)||'est1995'.includes(q)) navTo('release-est1995');
  else if('heartware'.includes(q)) navTo('release-heartware');
  else if('dark clouds'.includes(q)||'darkclouds'.includes(q)) navTo('release-darkclouds');
  else if('imago dei'.includes(q)||'imagodei'.includes(q)) navTo('release-imagodei');
  else if('euangelion'.includes(q)) navTo('release-euangelion');
  else if('pantasynergy'.includes(q)||'panta synergy'.includes(q)) navTo('release-pantasynergy');
  else if('the return'.includes(q)||'thereturn'.includes(q)) navTo('release-thereturn');
  else if('solas'.includes(q)) navTo('release-solas');
  else if('rescued'.includes(q)||'the hundred'.includes(q)) navTo('release-rescued');
}

// STORY MODAL
function openStory(id) {
  const s = STORIES[id]; if(!s) return;
  document.getElementById('story-bar-ttl').textContent = s.title;
  const tracks = s.tracks.map(t=>`
    <div class="st">
      <div class="st-num">${t.num}</div>
      <div class="st-info">
        <div class="st-name">${t.name}<span class="st-dur">${t.dur}</span></div>
        <div class="st-meaning">${t.meaning}</div>
        <div class="st-story">${t.story}</div>
      </div>
    </div>`).join('');
  const credits = s.credits.map(c=>`
    <div class="sc-chip"><div class="sc-role">${c.role}</div><div class="sc-name">${c.name}</div></div>`).join('');
  document.getElementById('story-body').innerHTML = `
    <div class="sh-hero">
      <div class="sh-bg" style="background:${s.heroBg};"></div>
      ${s.heroImg?`<div style="position:absolute;inset:0;overflow:hidden;"><img src="${s.heroImg}" alt="${s.title}" style="width:100%;height:100%;object-fit:cover;opacity:0.45;"></div>`:''}
      <div class="sh-glow" style="background:${s.heroGlow};"></div>
      <div class="sh-art">${s.heroArt}</div>
      <div class="sh-info">
        <div class="sh-badge">${s.type}</div>
        <div class="sh-title">${s.title}</div>
        <div class="sh-meta">${s.meta}</div>
      </div>
    </div>
    <div class="ss">
      <div class="ss-lbl">The Story</div>
      <div class="ss-narr">${s.narrative}</div>
      <div class="ss-body">${s.body}</div>
      <div class="ss-verse"><div class="ss-verse-t">${s.verse.text}</div><div class="ss-verse-r">${s.verse.ref}</div></div>
    </div>
    <div class="ss">
      <div class="ss-lbl">Track by Track</div>
      <div class="st-list">${tracks}</div>
    </div>
    <div class="ss">
      <div class="ss-lbl">Credits</div>
      <div class="sc">${credits}</div>
    </div>`;
  document.getElementById('story-ov').classList.add('on');
  document.getElementById('story-body').scrollTop = 0;
}
function closeStoryOv(e){ if(e.target===document.getElementById('story-ov')) closeStory(); }
function closeStory(){ document.getElementById('story-ov').classList.remove('on'); }

// WINDOW MANAGEMENT
let zTop=200;
const mob=()=>window.innerWidth<=768;

function focusWin(el){ document.querySelectorAll('.win').forEach(w=>w.classList.remove('focused')); el.classList.add('focused'); el.style.zIndex=++zTop; }

function openWin(id){
  const w=document.getElementById(id);
  if(mob()){ document.querySelectorAll('.win.open').forEach(o=>{if(o.id!==id){o.classList.remove('open');}}); w.style.display='flex'; requestAnimationFrame(()=>w.classList.add('open')); document.getElementById('backdrop').classList.add('on'); }
  else{ w.style.display='flex'; w.classList.add('open'); }
  focusWin(w);
}

function bringWin(id){
  const w=document.getElementById(id);
  if(!w.classList.contains('open')||w.style.display==='none') openWin(id);
  else focusWin(w);
}

function closeWin(id){
  const w=document.getElementById(id);
  if(mob()){ w.classList.remove('open'); setTimeout(()=>{if(!w.classList.contains('open'))w.style.display='none';},300); if(!document.querySelector('.win.open'))document.getElementById('backdrop').classList.remove('on'); }
  else{ w.classList.remove('open'); w.style.opacity='0'; w.style.transform='scale(0.95)'; setTimeout(()=>{w.style.display='none';w.style.opacity='';w.style.transform='';},180); }
}

function minWin(id){
  if(mob()){closeWin(id);return;}
  const w=document.getElementById(id); w.classList.remove('open'); w.style.display='none';
}

function closeMobile(){ document.querySelectorAll('.win.open').forEach(w=>{w.classList.remove('open');setTimeout(()=>{w.style.display='none';},300);}); document.getElementById('backdrop').classList.remove('on'); }

// Drag
let dragEl=null,ox=0,oy=0;
document.querySelectorAll('.wbar').forEach(bar=>{
  bar.addEventListener('mousedown',e=>{
    if(mob()||e.target.closest('.wbtns')) return;
    dragEl=bar.closest('.win'); const r=dragEl.getBoundingClientRect();
    ox=e.clientX-r.left; oy=e.clientY-r.top; focusWin(dragEl); e.preventDefault();
  });
});
document.addEventListener('mousemove',e=>{ if(!dragEl) return; let x=Math.max(0,Math.min(window.innerWidth-dragEl.offsetWidth,e.clientX-ox)); let y=Math.max(0,Math.min(window.innerHeight-50-dragEl.offsetHeight,e.clientY-oy)); dragEl.style.left=x+'px'; dragEl.style.top=y+'px'; });
document.addEventListener('mouseup',()=>dragEl=null);

// Swipe to close (mobile)
document.querySelectorAll('.wbar').forEach(bar=>{
  let sy=0,act=false;
  bar.addEventListener('touchstart',e=>{sy=e.touches[0].clientY;act=true;},{passive:true});
  bar.addEventListener('touchmove',e=>{ if(!act) return; const dy=e.touches[0].clientY-sy; if(dy>0) bar.closest('.win').style.transform=`translateY(${dy}px)`; },{passive:true});
  bar.addEventListener('touchend',e=>{ if(!act) return; act=false; const w=bar.closest('.win'); const dy=e.changedTouches[0].clientY-sy; w.style.transform=''; if(dy>70) closeWin(w.id); },{passive:true});
});

// Desktop icons
document.querySelectorAll('.di').forEach(icon=>{
  icon.addEventListener('click',e=>{ const wid=icon.dataset.win; if(!wid) return; if(mob()){bringWin(wid);}else{if(icon.classList.contains('sel')){bringWin(wid);icon.classList.remove('sel');}else{document.querySelectorAll('.di').forEach(i=>i.classList.remove('sel'));icon.classList.add('sel');}} e.stopPropagation(); });
  icon.addEventListener('dblclick',e=>{ if(!mob()) bringWin(icon.dataset.win); });
});
document.getElementById('desktop').addEventListener('click',()=>document.querySelectorAll('.di').forEach(i=>i.classList.remove('sel')));

// Start menu
function toggleStart(){ const sm=document.getElementById('smenu'),btn=document.getElementById('smBtn'); sm.classList.toggle('on'); btn.classList.toggle('on'); }
document.addEventListener('click',e=>{ const sm=document.getElementById('smenu'),btn=document.getElementById('smBtn'); if(!sm.contains(e.target)&&!btn.contains(e.target)){sm.classList.remove('on');btn.classList.remove('on');} });

// Context menu
const ctxEl=document.getElementById('ctxmenu');
document.getElementById('desktop').addEventListener('contextmenu',e=>{ if(mob()||e.target.closest('.win')||e.target.closest('#taskbar')) return; e.preventDefault(); ctxEl.style.left=Math.min(e.clientX,window.innerWidth-200)+'px'; ctxEl.style.top=Math.min(e.clientY,window.innerHeight-130)+'px'; ctxEl.classList.add('on'); });
document.addEventListener('click',()=>closeCtx());
function closeCtx(){ ctxEl.classList.remove('on'); }

// Clock
function tick(){ const d=new Date(); const h=String(d.getHours()).padStart(2,'0'); const m=String(d.getMinutes()).padStart(2,'0'); const days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']; const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']; document.getElementById('tbTime').textContent=`${h}:${m}`; document.getElementById('tbDate').textContent=`${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`; }
tick(); setInterval(tick,1000);

// Wallpaper canvas
const cvs=document.getElementById('bg'); const cx=cvs.getContext('2d');
function rsz(){ cvs.width=window.innerWidth; cvs.height=window.innerHeight; }
rsz(); window.addEventListener('resize',rsz);
let t=0;
const waves=[{amp:90,freq:.0018,spd:.0025,a:.05,col:'rgba(80,160,255,'},{amp:60,freq:.0028,spd:.004,a:.04,col:'rgba(140,200,255,'},{amp:110,freq:.0012,spd:.002,a:.035,col:'rgba(50,120,220,'},{amp:50,freq:.004,spd:.006,a:.03,col:'rgba(180,220,255,'}];
function draw(){ cx.clearRect(0,0,cvs.width,cvs.height); t+=.5; waves.forEach((w,i)=>{ cx.beginPath(); for(let x=0;x<=cvs.width;x+=3){ const y=cvs.height*.5+Math.sin(x*w.freq+t*w.spd+i*1.2)*w.amp+Math.sin(x*w.freq*.6+t*w.spd*.8)*w.amp*.35; x===0?cx.moveTo(x,y):cx.lineTo(x,y); } cx.strokeStyle=w.col+w.a+')'; cx.lineWidth=1.5; cx.stroke(); }); requestAnimationFrame(draw); }
draw();

// INIT
navTo('home');
if(mob()) setTimeout(()=>bringWin('win-explorer'),300);
