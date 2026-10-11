/* ==========================================================================
   MAGNIFIQUE SEU CHAMADO — FASE 2
   Design "estilo Liahona". Navegação SPA por estado em memória.
   Estrutura de dados pronta para receber o conteúdo de TODOS os chamados.
   Conteúdo fundamentado no Manual Geral (PT-BR). Nunca nominal (só o cargo).
   ========================================================================== */

"use strict";

const VERSAO = "1.9.0";
const DATA_STR = "11/10/2026";

// Remove acentos (NFD + faixa de marcas combinantes U+0300–U+036F) — base p/ slug e busca.
const semAcento = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const slug = s => semAcento(s.toLowerCase()).replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/* ==========================================================================
   PREFERÊNCIAS (localStorage com try/catch — só tema e tamanho de fonte)
   ========================================================================== */
const ZOOMS = [0.9, 1.0, 1.12, 1.28];
// Tema padrão = preferência do sistema (só no 1º acesso, sem nada salvo).
const temaSistema = (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches)
  ? "escuro" : "claro";
let prefs = { tema:temaSistema, zoomIdx:1, favs:[] };
try{
  const raw = localStorage.getItem("mag_prefs");
  if(raw){ const p=JSON.parse(raw);
    if(p.tema) prefs.tema=p.tema;
    if(Number.isInteger(p.zoomIdx)) prefs.zoomIdx=p.zoomIdx;
    if(Array.isArray(p.favs)) prefs.favs=p.favs;
  }
}catch(e){}
function savePrefs(){ try{ localStorage.setItem("mag_prefs", JSON.stringify(prefs)); }catch(e){} }
// Alguns navegadores antigos (iOS < 16.4) ignoram CSS `zoom`; usamos transform como reserva.
const ZOOM_OK = (()=>{ const d=document.createElement("div"); d.style.zoom="2"; return !!d.style.zoom; })();
function applyPrefs(){
  document.documentElement.setAttribute("data-theme", prefs.tema);
  const s = ZOOMS[prefs.zoomIdx];
  if(ZOOM_OK){ document.body.style.zoom = s; }
  else{
    const app = document.querySelector(".app");
    if(app){ app.style.transformOrigin="top center"; app.style.transform = s===1 ? "" : "scale("+s+")"; }
  }
  el.themeBtn.textContent = prefs.tema==="escuro" ? "☀" : "☾";
  document.querySelector('meta[name=theme-color]').setAttribute("content",
    prefs.tema==="escuro" ? "#201C15" : "#8B6B3D");
}

/* Favoritos --------------------------------------------------------------- */
const isFav = id => prefs.favs.includes(id);
function toggleFav(id){
  const i = prefs.favs.indexOf(id);
  if(i>=0) prefs.favs.splice(i,1); else prefs.favs.unshift(id);
  savePrefs();
}

/* ==========================================================================
   NAVEGAÇÃO (estado em memória — sem reload)
   ========================================================================== */
let state = { view:"home", orgId:null, chamadoId:null, q:"" };

/* ---- Roteamento por hash (deep links + botão voltar do navegador/celular) ----
   #/                → Home
   #/o/<orgId>       → Organização
   #/c/<chamadoId>   → Detalhe (compartilhável)
   #/b/<termo>       → Busca                                                   */
function stateToHash(s){
  if(s.view==="org")      return "#/o/"+s.orgId;
  if(s.view==="detalhe")  return "#/c/"+s.chamadoId;
  if(s.view==="busca")    return "#/b/"+encodeURIComponent(s.q||"");
  return "#/";
}
function hashToState(){
  const h = location.hash.replace(/^#\/?/,"");
  const seg = h.split("/")[0];
  const arg = h.slice(seg.length+1);
  if(seg==="o" && findOrg(arg))        return { view:"org", orgId:arg };
  if(seg==="c" && findChamado(arg))    return { view:"detalhe", chamadoId:arg };
  if(seg==="b")                        return { view:"busca", q:decodeURIComponent(arg||"") };
  return { view:"home" };
}
/* ==========================================================================
   LINKS PARA O SITE OFICIAL (Manual Geral e escrituras) — churchofjesuschrist.org
   URLs validadas (retornam 200). Numeração de seções liga ao capítulo.
   ========================================================================== */
const norm = s => semAcento(s.toLowerCase());

const MANUAL_CH = {
  7:"7", 8:"8-elders-quorum", 9:"9-relief-society", 10:"10-aaronic-priesthood",
  11:"11-young-women", 12:"12-primary", 13:"13-sunday-school", 14:"14-single-members",
  16:"16-living-the-gospel", 17:"17-teaching-the-gospel", 18:"18-priesthood-ordinances-and-blessings",
  19:"19-music", 20:"20-activities", 21:"21-ministering", 22:"22-providing-for-temporal-needs",
  23:"23", 25:"25-temple-and-family-history-work", 26:"26-temple-recommends",
  29:"29-meetings-in-the-church", 30:"30-callings-in-the-church",
  32:"32-repentance-and-membership-councils", 33:"33-records-and-reports",
  34:"34-finances-and-audits", 35:"35", 38:"38-church-policies-and-guidelines",
};
function manualUrl(ch){
  return "https://www.churchofjesuschrist.org/study/manual/general-handbook/"
    + (MANUAL_CH[ch] || String(ch)) + "?lang=por";
}
const manualLink = (label,ch)=>`<a class="ext" href="${manualUrl(ch)}" target="_blank" rel="noopener">${label}</a>`;
// Para o campo de referência (só contém números do Manual): liga todos os tokens.
function linkManualRef(text){
  return text.replace(/\d+(?:\.\d+)*/g, tok=>{
    const ch = parseInt(tok,10);
    return (ch>=1 && ch<=38) ? manualLink(tok,ch) : tok;
  });
}
// Para texto corrido (responsabilidades): liga só seções com ponto (7.1.4) e "cap. N",
// evitando idades ("8 anos") e escrituras ("D&C 20:46").
function linkManualInline(text){
  text = text.replace(/\b\d+\.\d+(?:\.\d+)*\b/g, tok=>{
    const ch = parseInt(tok,10);
    return (ch>=1 && ch<=38) ? manualLink(tok,ch) : tok;
  });
  text = text.replace(/cap\.\s*(\d+)/g, (m,n)=>{
    const ch = parseInt(n,10);
    return (ch>=1 && ch<=38) ? "cap. "+manualLink(n,ch) : m;
  });
  return text;
}

const LIVROS = {
  "1 pedro":["nt","1-pet"], "eclesiastes":["ot","eccl"], "mosias":["bofm","mosiah"],
  "1 corintios":["nt","1-cor"], "moroni":["bofm","moro"], "alma":["bofm","alma"],
  "1 timoteo":["nt","1-tim"], "hebreus":["nt","heb"], "marcos":["nt","mark"],
  "malaquias":["ot","mal"], "jeremias":["ot","jer"], "proverbios":["ot","prov"],
  "3 nefi":["bofm","3-ne"], "doutrina e convenios":["dc-testament","dc"],
};
function escrituraUrl(ref){
  const m = ref.match(/^(.+?)\s+(\d+):(\d+)/);
  if(!m) return null;
  const map = LIVROS[norm(m[1]).trim()];
  if(!map) return null;
  return `https://www.churchofjesuschrist.org/study/scriptures/${map[0]}/${map[1]}/${m[2]}?lang=por&id=p${m[3]}#p${m[3]}`;
}
function linkEscrituraRef(ref){
  const u = escrituraUrl(ref);
  return u ? `<a class="ext" href="${u}" target="_blank" rel="noopener">${ref}</a>` : ref;
}

const el = {
  view: document.getElementById("view"),
  back: document.getElementById("btnBack"),
  hT: document.querySelector("#hTitle .t"),
  hS: document.querySelector("#hTitle .s"),
  search: document.getElementById("search"),
  footer: document.getElementById("footer"),
  themeBtn: document.getElementById("themeBtn"),
  fPlus: document.getElementById("fPlus"),
  fMinus: document.getElementById("fMinus"),
};
function go(next, replace){
  state = { ...state, ...next };
  const hash = stateToHash(state);
  if(replace) history.replaceState(null,"",hash);
  else        history.pushState(null,"",hash);
  render();
  if(!replace) window.scrollTo(0,0);
}
window.addEventListener("popstate", ()=>{
  state = { ...state, ...hashToState() };
  render(); window.scrollTo(0,0);
});
function setHeader(t2, s2){ el.hT.textContent=t2; el.hS.textContent=s2||""; }
function setOrgColor(cor){ document.documentElement.style.setProperty("--org", cor || "var(--accent)"); }

function render(){
  el.footer.textContent = `v${VERSAO} · ${DATA_STR} · © 2026 Léo Lucas · Todos os direitos reservados`;
  // Mantém o campo de busca em sincronia com o estado (importante ao voltar/deep-link).
  const focado = document.activeElement===el.search;
  if(state.view==="busca"){
    if(!focado && el.search.value.trim()!==state.q) el.search.value = state.q;
    el.back.style.display="none"; setOrgColor(null);
    return renderBusca(state.q);
  }
  if(!focado && el.search.value) el.search.value="";
  if(state.view==="org") return renderOrg();
  if(state.view==="detalhe") return renderDetalhe();
  return renderHome();
}

/* NÍVEL 1 — HOME */
function renderHome(){
  el.back.style.display="none"; setOrgColor(null);
  setHeader("Magnifique seu Chamado","Guia de chamados da Ala");
  el.view.innerHTML="";
  el.view.appendChild(node(`<div class="hero">
      <div class="mark">✦</div>
      <h1>Magnifique seu Chamado</h1>
      <div class="sub">Guia dos chamados da Ala, fundamentado no Manual Geral</div>
      <div class="orn"><span class="d">✦</span></div>
    </div>`));

  // Favoritos fixados no topo (ignora ids que não existem mais).
  const favs = prefs.favs.map(findChamado).filter(Boolean);
  if(favs.length){
    const h=document.createElement("div"); h.className="subhead"; h.textContent="★ Meus favoritos";
    el.view.appendChild(h);
    el.view.appendChild(listWrap(favs.map(c=>cardChamado(c))));
    const h2=document.createElement("div"); h2.className="subhead"; h2.textContent="Organizações";
    el.view.appendChild(h2);
  }

  const list=document.createElement("div"); list.className="list";
  ORGS.forEach((org,i)=>{
    const n = org.chamados ? org.chamados.length : org.grupos.reduce((a,g)=>a+g.chamados.length,0);
    const b=document.createElement("button"); b.type="button"; b.className="card"; b.style.setProperty("--org",org.cor);
    b.innerHTML=`<span class="ico">${org.icone}</span>
      <span class="txt"><span class="t"></span>
        <span class="s2"><span class="count">${n} chamado${n!==1?"s":""}</span></span></span>
      <span class="chev">›</span>`;
    b.querySelector(".t").textContent = `${i+1}. ${org.nome}`;
    b.onclick=()=>go({view:"org",orgId:org.id});
    list.appendChild(b);
  });
  el.view.appendChild(list);
}

/* NÍVEL 2 — SUBMENU DA ORGANIZAÇÃO */
function renderOrg(){
  const org = findOrg(state.orgId);
  setOrgColor(org.cor);
  el.back.style.display="flex"; el.back.onclick=()=>history.back();
  setHeader(org.nome,"Escolha um chamado");
  el.view.innerHTML="";
  const mk = c => card("›", c.titulo, c.c? null : "conteúdo em preparação", org.cor,
    ()=>go({view:"detalhe",orgId:org.id,chamadoId:c.id}), true);
  if(org.chamados){
    el.view.appendChild(listWrap(org.chamados.map(mk)));
  } else {
    org.grupos.forEach(g=>{
      const h=document.createElement("div"); h.className="subhead"; h.textContent=g.nome;
      el.view.appendChild(h);
      el.view.appendChild(listWrap(g.chamados.map(mk)));
    });
  }
}

/* NÍVEL 3 — DETALHE */
function renderDetalhe(){
  const c = findChamado(state.chamadoId);
  const org = findOrg(c.orgId);
  setOrgColor(org.cor);
  el.back.style.display="flex";
  el.back.onclick = ()=>history.back();
  setHeader(c.titulo, subChamado(c));
  el.view.innerHTML="";

  const wrap=document.createElement("div"); wrap.className="detail";

  // Capa (tipográfica ou foto)
  const cover=document.createElement("div"); cover.className="cover";
  const kicker = subChamado(c);
  const escrHtml = c.c && c.c.escritura
    ? `<div class="escr"><span class="qm">“</span>${c.c.escritura.t}”<span class="ref">— ${linkEscrituraRef(c.c.escritura.r)}</span></div>` : "";
  if(c.foto){
    cover.classList.add("hasimg");
    cover.innerHTML=`<img src="${c.foto}" alt="">
      <div class="capbar"><span class="kicker">${kicker}</span>
      <h2>${c.titulo}</h2>${escrHtml}</div>`;
  } else {
    cover.innerHTML=`<span class="kicker">${kicker}</span>
      <h2>${c.titulo}</h2>${escrHtml}`;
  }
  wrap.appendChild(cover);
  wrap.appendChild(buildActbar(c));

  if(!c.c){
    wrap.appendChild(node(`<div class="prep"><b>Conteúdo em preparação.</b><br>
      A estrutura deste chamado já está pronta e será preenchida em breve,
      com base no <i>Manual Geral</i>.</div>`));
    el.view.appendChild(wrap); return;
  }

  const d = c.c;
  // Propósito
  const sp = section("Propósito","◈","proposito");
  sp.appendChild(node(`<p>${d.proposito}</p>`));
  if(d.ref) sp.appendChild(node(`<span class="ref-tag"><span class="ic">📖</span><span>${linkManualRef(d.ref)}</span></span>`));
  wrap.appendChild(sp);

  // Responsabilidades
  const sr = section("Responsabilidades","❖");
  const ul=document.createElement("ul"); ul.className="resp";
  d.resp.forEach(r=>{ const li=document.createElement("li"); li.innerHTML=linkManualInline(r); ul.appendChild(li); });
  sr.appendChild(ul); wrap.appendChild(sr);

  // Como magnificar (5 áreas)
  const sm = section("Como magnificar seu chamado","✦");
  d.areas.forEach((a,i)=>{
    const box=document.createElement("div"); box.className="area";
    const head=document.createElement("div"); head.className="atit";
    head.innerHTML=`<span class="num">${i+1}</span><span class="atxt"></span>`;
    head.querySelector(".atxt").textContent=a.t;
    box.appendChild(head);
    const uli=document.createElement("ul");
    a.i.forEach(x=>{ const li=document.createElement("li"); li.textContent=x; uli.appendChild(li); });
    box.appendChild(uli); sm.appendChild(box);
  });
  wrap.appendChild(sm);

  // Fechamento
  const sf=section("Fechamento","❧");
  sf.appendChild(node(`<div class="fecho"><p>${d.fecho.t}</p><span class="fonte">Fonte: ${linkManualRef(d.fecho.f)}</span></div>`));
  wrap.appendChild(sf);

  el.view.appendChild(wrap);
}

/* BUSCA — leva direto ao Nível 3 */
function renderBusca(q){
  q = (q||"").trim();
  setHeader("Resultados da busca", q ? "“"+q+"”" : "");
  el.view.innerHTML="";
  const nq = slug(q);
  if(!nq){ el.view.appendChild(hint("Digite para buscar em todas as organizações.")); return; }
  const res = INDEX.filter(c=>slug(c.titulo).includes(nq) || slug(c.orgNome).includes(nq));
  if(!res.length){
    // textContent evita injeção de HTML pelo termo digitado.
    const d=document.createElement("div"); d.className="empty";
    d.textContent="Nenhum chamado encontrado para “"+q+"”.";
    el.view.appendChild(d); return;
  }
  el.view.appendChild(hint(`${res.length} resultado${res.length!==1?"s":""}.`));
  el.view.appendChild(listWrap(res.map(c=>cardChamado(c, q))));
}

/* ---- Helpers de UI ---- */
function card(ico, titulo, sub, cor, onClick, plainIco, hlQuery){
  const b=document.createElement("button"); b.type="button"; b.className="card";
  if(cor) b.style.setProperty("--org", cor);
  b.innerHTML=`<span class="ico">${ico}</span>
    <span class="txt"><span class="t"></span>${sub?'<span class="s"></span>':''}</span>
    <span class="chev">›</span>`;
  const tEl=b.querySelector(".t");
  if(hlQuery) highlightInto(tEl, titulo, hlQuery); else tEl.textContent=titulo;
  if(sub) b.querySelector(".s").textContent=sub;
  if(plainIco){ const ic=b.querySelector(".ico"); ic.style.background="transparent"; ic.style.border="none"; ic.style.color="var(--accent-soft)"; }
  b.onclick=onClick; return b;
}
// Card de um chamado — usado nos favoritos (Home) e nos resultados de busca.
function cardChamado(c, hlQuery){
  const org = findOrg(c.orgId);
  return card(c.orgIcone, c.titulo, subChamado(c), org.cor,
    ()=>go({view:"detalhe", orgId:c.orgId, chamadoId:c.id}), false, hlQuery);
}
// Destaca o termo no texto (sem acento/caixa), montando nós de texto + <mark> com segurança.
function foldArr(s){ return Array.from(s).map(c=>(c.normalize("NFD")[0]||c).toLowerCase()); }
function highlightInto(elm, text, q){
  elm.textContent="";
  const raw=Array.from(text), hay=foldArr(text).join(""), needle=foldArr((q||"").trim()).join("");
  if(!needle){ elm.textContent=text; return; }
  let from=0, idx;
  while((idx=hay.indexOf(needle, from))!==-1){
    if(idx>from) elm.appendChild(document.createTextNode(raw.slice(from,idx).join("")));
    const m=document.createElement("mark"); m.textContent=raw.slice(idx, idx+needle.length).join("");
    elm.appendChild(m);
    from=idx+needle.length;
  }
  if(from<raw.length) elm.appendChild(document.createTextNode(raw.slice(from).join("")));
}

/* ---- Barra de ações do detalhe: Favoritar / Compartilhar / Imprimir ---- */
function buildActbar(c){
  const bar=document.createElement("div"); bar.className="actbar";
  const favBtn=document.createElement("button"); favBtn.type="button";
  const paintFav=()=>{
    const on=isFav(c.id);
    favBtn.className = on ? "on" : "";
    favBtn.innerHTML = `<span class="ai">${on?"★":"☆"}</span><span>${on?"Favorito":"Favoritar"}</span>`;
  };
  paintFav();
  favBtn.onclick=()=>{ toggleFav(c.id); paintFav(); toast(isFav(c.id)?"Adicionado aos favoritos.":"Removido dos favoritos."); };

  const shBtn=document.createElement("button"); shBtn.type="button";
  shBtn.innerHTML=`<span class="ai">↗</span><span>Compartilhar</span>`;
  shBtn.onclick=()=>shareChamado(c);

  const prBtn=document.createElement("button"); prBtn.type="button";
  prBtn.innerHTML=`<span class="ai">🖨</span><span>Imprimir</span>`;
  prBtn.onclick=()=>window.print();

  bar.append(favBtn, shBtn, prBtn);
  return bar;
}
function chamadoUrl(c){ return location.origin+location.pathname+"#/c/"+c.id; }
// Mensagem comemorativa para enviar ao membro junto com o chamado (ex.: no WhatsApp).
function mensagemChamado(c){
  const ctx = subChamado(c);
  return [
    "🎉 Parabéns pelo seu chamado como *" + c.titulo + "*!",
    "_" + ctx + "_",
    "",
    "Que o Senhor te abençoe e magnifique nesse serviço a Ele e aos filhos Dele. 🙏",
    "",
    "Preparei este guia para te ajudar a entender e magnificar seu chamado. Ele é um apoio: use junto com o estudo do *Manual Geral* e das fontes oficiais da Igreja, não no lugar deles.",
    "",
    "Dê uma olhada 👇",
  ].join("\n");
}
function shareChamado(c){
  const url = chamadoUrl(c);
  const text = mensagemChamado(c);
  const data = { title:"Magnifique seu Chamado — "+c.titulo, text, url };
  if(navigator.share){ navigator.share(data).catch(()=>{}); return; }
  // Sem Web Share (ex.: desktop): copia a mensagem completa + link.
  const completo = text + "\n\n" + url;
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(completo).then(()=>toast("Mensagem copiada!"), ()=>toast(url));
  } else { toast(url); }
}
let toastTimer;
function toast(msg){
  let t=document.getElementById("toast");
  if(!t){ t=document.createElement("div"); t.id="toast"; t.className="toast"; document.body.appendChild(t); }
  t.textContent=msg;
  requestAnimationFrame(()=>t.classList.add("show"));
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>t.classList.remove("show"), 2600);
}
function listWrap(cards){ const d=document.createElement("div"); d.className="list"; cards.forEach(c=>d.appendChild(c)); return d; }
function section(titulo, icon, cls){
  const s=document.createElement("div"); s.className="sec"+(cls?" "+cls:"");
  const h=document.createElement("h3");
  h.innerHTML=(icon?`<span class="ic">${icon}</span>`:"")+`<span class="lbl"></span>`;
  h.querySelector(".lbl").textContent=titulo;
  s.appendChild(h); return s;
}
function hint(txt){ const p=document.createElement("p"); p.className="hint"; p.textContent=txt; return p; }
function node(html){ const d=document.createElement("div"); d.innerHTML=html.trim(); return d.firstElementChild; }

/* ---- Eventos ---- */
el.search.addEventListener("input", ()=>{
  const q=el.search.value.trim();
  // Empurra 1 entrada no histórico ao iniciar a busca; digitar depois só substitui.
  if(q) go({view:"busca", q}, state.view==="busca");
  else if(state.view==="busca") go({view:"home"}, true);
});
el.themeBtn.onclick=()=>{ prefs.tema = prefs.tema==="escuro"?"claro":"escuro"; applyPrefs(); savePrefs(); };
el.fPlus.onclick=()=>{ if(prefs.zoomIdx<ZOOMS.length-1){ prefs.zoomIdx++; applyPrefs(); savePrefs(); } };
el.fMinus.onclick=()=>{ if(prefs.zoomIdx>0){ prefs.zoomIdx--; applyPrefs(); savePrefs(); } };

/* ---- Banner "Atualizar" quando há nova versão ---- */
function showUpdateBanner(reg){
  if(document.getElementById("updBanner")) return;
  const b=document.createElement("div"); b.id="updBanner"; b.className="updbar";
  b.innerHTML=`<span>Nova versão disponível.</span><button type="button">Atualizar</button>`;
  b.querySelector("button").onclick=()=>{
    if(reg.waiting) reg.waiting.postMessage({type:"SKIP_WAITING"});
  };
  document.body.appendChild(b);
  requestAnimationFrame(()=>b.classList.add("show"));
}

/* ---- Service Worker ---- */
if("serviceWorker" in navigator){
  window.addEventListener("load", ()=>{
    navigator.serviceWorker.register("sw.js").then(reg=>{
      if(reg.waiting) showUpdateBanner(reg);
      reg.addEventListener("updatefound", ()=>{
        const nw=reg.installing; if(!nw) return;
        nw.addEventListener("statechange", ()=>{
          if(nw.state==="installed" && navigator.serviceWorker.controller) showUpdateBanner(reg);
        });
      });
    }).catch(()=>{});
    let recarregando=false;
    navigator.serviceWorker.addEventListener("controllerchange", ()=>{
      if(recarregando) return; recarregando=true; location.reload();
    });
  });
}

/* ---- Inicialização do roteador (semeia a Home como base p/ deep links) ---- */
(function initRouter(){
  const inicial = hashToState();
  history.replaceState(null,"","#/");
  if(inicial.view!=="home") history.pushState(null,"", stateToHash(inicial));
  state = { ...state, ...inicial };
  if(inicial.view==="busca") el.search.value = inicial.q;
})();

applyPrefs();
render();
