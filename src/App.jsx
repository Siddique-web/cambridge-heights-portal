import React,{useState,useRef,useEffect,useLayoutEffect} from "react";
import logoFull from "./assets/logo-full.jpg";
import logoMark from "./assets/logo-mark.jpg";
const SL=["Building Strong Foundations For Lifelong Learning","The Future Of The World Is In This School","Learners Today, Leaders Tomorrow"];
const TI={diario:"📒",fotos:"🖼️",perfil:"👤",boletim:"📊",pag:"💳"};
function useReveal(){useLayoutEffect(()=>{if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12,rootMargin:"0px 0px -6% 0px"});
 const tag=()=>document.querySelectorAll("section > :not(.grid), .grid>.card, .grid>a, .grid>figure, .grid>div, .space-y-3>*, .space-y-2>*").forEach(el=>{if(el.closest(".pop"))return;if(!el.dataset.rv){el.dataset.rv=1;el.style.setProperty("--d",Math.min([...el.parentElement.children].indexOf(el),6)*80+"ms");el.classList.add("rv")}if(!el.classList.contains("in"))io.observe(el)});
 tag();const mo=new MutationObserver(tag);mo.observe(document.body,{childList:true,subtree:true});return()=>{io.disconnect();mo.disconnect()}},[])}
function Nav({view,go,dark,setDark}){
 const it=[["site","Início","M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"],["portal","Área do Pai","M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 4-6 8-6s8 2 8 6"],["admin","Administração","M4 20V10M10 20V4M16 20v-8M22 20H2"]];
 return (<nav aria-label="Áreas" className="fixed left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 p-1.5 rounded-full" style={{bottom:"calc(12px + env(safe-area-inset-bottom,0px))",background:"color-mix(in srgb,var(--card) 78%,transparent)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",border:"1px solid var(--line)",boxShadow:"0 10px 30px rgba(122,28,28,.25)"}}>
 {it.map(([k,t,d])=><button key={k} onClick={()=>go(k)} aria-label={t} aria-current={view===k?"page":undefined} className="flex items-center gap-2 rounded-full px-3.5 py-2.5 font-bold text-sm transition-all duration-500" style={view===k?{background:"var(--wine)",color:"#fff"}:{color:"var(--ink)"}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={view===k?"var(--gold)":"currentColor"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d}/></svg>{view===k&&<span>{t}</span>}</button>)}
 <button aria-label="Alternar tema claro/escuro" onClick={()=>setDark(!dark)} className="rounded-full px-3 py-2.5">{dark?"☀️":"🌙"}</button></nav>);
}
const MT=n=>n.toLocaleString("pt-PT")+" MT";
const LOGO_FULL=logoFull,LOGO_MARK=logoMark;
const Shield=({s=44})=>(<img src={LOGO_MARK} width={s} height={s} alt="" style={{borderRadius:"50%",objectFit:"cover"}}/>);

const STUDENTS=[
{id:1,nome:"Mariana Chuquela",idade:"3 anos",turma:"Pré-escolar A",turno:"Integral",emoji:"🎨",alergias:"Sem alergias conhecidas",prof:"Prof.ª Helena",
 diario:[{d:"Hoje",humor:"Alegre",comida:"Comeu tudo",sesta:"1h30",atv:"Pintura de mãos e expressão plástica; cantou a música do alfabeto."},
 {d:"Ontem",humor:"Tranquila",comida:"Comeu parte",sesta:"1h",atv:"Leitura de histórias e jogo de encaixes."},
 {d:"Segunda",humor:"Alegre",comida:"Comeu tudo",sesta:"1h45",atv:"Contagem com blocos coloridos e brincadeira no pátio."}],
 fotos:[["🎨","Paint & Print","#f8d9c9"],["📚","Hora da leitura","#f3e3b5"],["🧩","Jogo de encaixes","#d9e6f3"],["⚽","Pátio","#d8efd9"]],
 notas:[["Linguagem e leitura",82],["Raciocínio lógico",74],["Coordenação motora fina",90],["Socialização",88]]},
{id:2,nome:"Tiago Chuquela",idade:"6 anos",turma:"1.ª Classe",turno:"Meio período",emoji:"🔢",alergias:"Usa óculos para ler",prof:"Prof. Rui",
 diario:[{d:"Hoje",humor:"Alegre",comida:"Comeu tudo",sesta:"—",atv:"Estimativa de números no quadro branco e cálculo prático."},
 {d:"Ontem",humor:"Tranquilo",comida:"Comeu tudo",sesta:"—",atv:"Leitura bilingue em voz alta; ditado de palavras."}],
 fotos:[["🔢","Mathematics & Estimation","#f3e3b5"],["📖","Reading & Language","#d9e6f3"],["✏️","Escrita","#f8d9c9"]],
 notas:[["Linguagem e leitura",78],["Raciocínio lógico",91],["Coordenação motora fina",80],["Socialização",85]]}];

const L=({t,children})=>(<label className="block mb-3"><span className="text-sm font-bold">{t}</span>{children}</label>);
const Kid=({x=0,y=0,skin="#8d5a3b",hair="#2b1a12",cap=0,l=0,r=0})=>(<g transform={`translate(${x} ${y})`}>
 <rect x="-14" y="52" width="9" height="26" rx="4" fill="#d9c3a0"/><rect x="5" y="52" width="9" height="26" rx="4" fill="#d9c3a0"/>
 <rect x="-24" y="26" width="8" height="26" rx="4" fill={skin} transform={`rotate(${l} -20 28)`}/><rect x="16" y="26" width="8" height="26" rx="4" fill={skin} transform={`rotate(${r} 20 28)`}/>
 <rect x="-19" y="22" width="38" height="38" rx="10" fill="#b3202a"/><path d="M-7 22l7 9 7-9z" fill="#fff"/>
 <circle cy="8" r="17" fill={skin}/>{cap?<path d="M-18 5a18 15 0 0 1 36 0z" fill="#b3202a"/>:<path d="M-17 4a17 15 0 0 1 34 0c-6-6-28-6-34 0z" fill={hair}/>}
 <circle cx="-6" cy="10" r="2" fill="#222"/><circle cx="6" cy="10" r="2" fill="#222"/><path d="M-5 16q5 5 10 0" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round"/></g>);
const SC=[
{t:"Paint & Print",s:"Pintura de mãos e expressão plástica",bg:"#fde7d6",el:<><rect y="190" width="320" height="50" fill="#e8c9a8"/>{[[40,60,"#e0443a"],[78,44,"#f2a900"],[255,48,"#2f9e6e"],[290,84,"#3a78d0"]].map(([x,y,c])=><circle key={x} cx={x} cy={y} r="16" fill={c} opacity=".85"/>)}<path d="M190 192l18-110M252 192l-18-110" stroke="#7a4a2a" strokeWidth="5"/><rect x="178" y="68" width="84" height="64" rx="4" fill="#fff" stroke="#7a4a2a" strokeWidth="4"/><path d="M188 118q15-42 30-10t34-32" stroke="#b3202a" strokeWidth="6" fill="none" strokeLinecap="round"/><circle cx="206" cy="90" r="6" fill="#f2a900"/><circle cx="240" cy="104" r="7" fill="#3a78d0"/><Kid x={110} y={112} r={-150}/></>},
{t:"Mathematics & Estimation",s:"Estimativa e cálculo no quadro",bg:"#f6ecd9",el:<><rect y="190" width="320" height="50" fill="#d9bf92"/><rect x="125" y="36" width="180" height="112" rx="6" fill="#fff" stroke="#7a1c1c" strokeWidth="5"/><text x="215" y="88" textAnchor="middle" fontSize="26" fontWeight="700" fill="#7a1c1c" fontFamily="Poppins,sans-serif">12 + 8 = ?</text><text x="215" y="130" textAnchor="middle" fontSize="22" fill="#b88a00" fontFamily="Poppins,sans-serif">≈ 20</text><Kid x={72} y={112} skin="#c68642" hair="#3a2417" r={-115}/></>},
{t:"Reading & Language",s:"Leitura bilingue com livros pedagógicos",bg:"#e3edf6",el:<><rect y="190" width="320" height="50" fill="#c9b79a"/><rect x="20" y="78" width="280" height="7" fill="#7a4a2a"/>{[["#b3202a",30],["#2f6fb5",48],["#D4AF37",66],["#2f9e6e",84],["#7a1c1c",216],["#3a78d0",234],["#e0a030",252],["#b3202a",270]].map(([c,x])=><rect key={x} x={x} y="46" width="14" height="32" fill={c}/>)}<Kid x={96} y={112} skin="#7a4b2e" hair="#1d1109" l={25} r={-25}/><Kid x={214} y={112} skin="#f1c9a5" hair="#7a4a1e" cap l={25} r={-25}/><path d="M128 166l24-8 24 8v22l-24-8-24 8z" fill="#fff" stroke="#7a1c1c" strokeWidth="3"/></>},
{t:"Recreio e brincadeira",s:"Jogos e coordenação no pátio",bg:"#cfe8f7",el:<><circle cx="270" cy="46" r="22" fill="#f5c542"/><rect y="182" width="320" height="58" fill="#7bbf6a"/><circle cx="160" cy="168" r="14" fill="#fff" stroke="#7a1c1c" strokeWidth="3"/><Kid x={84} y={96} l={140} r={-140}/><Kid x={236} y={106} skin="#f1c9a5" hair="#7a4a1e" cap l={30} r={-30}/></>},
{t:"Blocos e letras",s:"Descoberta do alfabeto com jogos",bg:"#fbe4e4",el:<><rect y="190" width="320" height="50" fill="#e8c9a8"/>{[["A",178,146,"#2f6fb5"],["B",224,146,"#f2a900"],["C",201,102,"#2f9e6e"]].map(([t,x,y,c])=><g key={t}><rect x={x} y={y} width="44" height="44" rx="6" fill={c}/><text x={x+22} y={y+33} textAnchor="middle" fontSize="24" fontWeight="700" fill="#fff" fontFamily="Poppins,sans-serif">{t}</text></g>)}<Kid x={96} y={112} skin="#a8693f" hair="#2b1a12" l={140}/></>}];
function Coverflow(){
 const [i,setI]=useState(0),tx=useRef(0),n=SC.length;
 useEffect(()=>{const t=setTimeout(()=>setI(x=>(x+1)%n),6000);return()=>clearTimeout(t)},[i,n]);
 const mv=d=>setI(x=>(x+d+n)%n),rel=k=>{let o=(k-i+n)%n;if(o>n/2)o-=n;return o};
 const ar={background:"var(--card)",color:"var(--wine)",boxShadow:"0 4px 12px rgba(0,0,0,.25)"};
 return (<div className="relative w-full h-80 md:h-96 select-none" role="region" aria-roledescription="carrossel" aria-label="Crianças em atividades na escola" tabIndex={0}
  onKeyDown={e=>{if(e.key==="ArrowLeft")mv(-1);if(e.key==="ArrowRight")mv(1)}}
  onTouchStart={e=>{tx.current=e.touches[0].clientX}} onTouchEnd={e=>{const d=e.changedTouches[0].clientX-tx.current;if(Math.abs(d)>40)mv(d<0?1:-1)}}>
  <div className="absolute inset-0" style={{perspective:"1100px"}}>{SC.map((c,k)=>{const o=rel(k),a=Math.abs(o);return (
   <figure key={c.t} onClick={()=>o&&mv(o)} aria-hidden={o!==0} className="absolute top-3 left-1/2 w-[56%] max-w-[300px] bg-white p-2 pb-3 rounded-sm" style={{transform:`translateX(${-50+o*58}%) scale(${1-a*.16}) rotateY(${-o*14}deg)`,zIndex:10-a,opacity:a>2?0:1-a*.18,pointerEvents:a>2?"none":"auto",cursor:o?"pointer":"default",transition:"transform .9s cubic-bezier(.22,1,.36,1),opacity .9s ease,filter .9s",boxShadow:"0 14px 30px rgba(0,0,0,.3)",filter:o?"brightness(.88)":"none",color:"#2a1414"}}>
    <svg viewBox="0 0 320 240" className="w-full block" role="img" aria-label={c.s}><rect width="320" height="240" fill={c.bg}/>{c.el}</svg>
    <figcaption className="disp text-center text-xl mt-2" style={{color:"#7A1C1C"}}>{c.t}</figcaption></figure>)})}</div>
  <button aria-label="Slide anterior" onClick={()=>mv(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full text-2xl font-bold" style={ar}>‹</button>
  <button aria-label="Slide seguinte" onClick={()=>mv(1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full text-2xl font-bold" style={ar}>›</button>
  <div className="absolute bottom-0 inset-x-0 flex items-center justify-center gap-2 z-20">{SC.map((c,k)=><button key={k} aria-label={"Ver "+c.t} onClick={()=>setI(k)} className={"dot"+(k===i?" on":"")}/>)}</div>
  <p className="sr-only" aria-live="off">{SC[i].t}: {SC[i].s}</p></div>);
}
const NAVL=[["inicio","Início"],["sobre","Sobre nós"],["programas","Programas"],["galeria","Galeria"],["testemunhos","Testemunhos"],["contactos","Contactos"]];
function Site({onGo,addEnroll}){
 const [sl,setSl]=useState(0),[nls,setNls]=useState(false),[act,setAct]=useState("inicio"),[mn,setMn]=useState(false),tr=useRef(null);
 useEffect(()=>{const t=setInterval(()=>setSl(x=>(x+1)%3),5200);return()=>clearInterval(t)},[]);
 useEffect(()=>{const ids=NAVL.map(x=>x[0]);const f=()=>{let a=ids[0];ids.forEach(id=>{const e=document.getElementById(id);if(e&&e.getBoundingClientRect().top<=150)a=id});setAct(a)};f();addEventListener("scroll",f,{passive:true});return()=>removeEventListener("scroll",f)},[]);
 const [step,setStep]=useState(1),[done,setDone]=useState(false),[f,setF]=useState({enc:"",tel:"",mail:"",morada:"",crianca:"",nasc:"",alergias:"",turno:"Integral"});
 const set=k=>e=>setF({...f,[k]:e.target.value});
 const ok=step===1?f.enc&&/^\+?\d{9,13}$/.test(f.tel.replace(/\s/g,"")):step===2?f.crianca&&f.nasc:true;
 const send=()=>{addEnroll(f);setDone(true)};
 const progs=[["🎨","Arte e criatividade","Pintura de mãos, expressão plástica e coordenação motora fina.","Paint & Print"],["🔢","Raciocínio lógico","Quadros brancos, estimativa de números e cálculo prático.","Mathematics & Estimation"],["📖","Leitura bilingue","Crianças a ler ativamente, com livros pedagógicos.","Reading & Language"]];
 return (<div>
 <header className="sticky top-0 z-30 px-3" style={{paddingTop:"calc(env(safe-area-inset-top,0px) + 12px)"}}>
  <nav className="max-w-6xl mx-auto flex items-center gap-3 rounded-2xl px-4 py-2.5" style={{background:"var(--card)",border:"1px solid var(--line)",boxShadow:"0 8px 28px rgba(122,28,28,.14)"}} aria-label="Principal">
   <a href="#inicio" className="flex items-center gap-2.5 shrink-0"><Shield s={40}/><span className="disp font-bold leading-tight text-[15px]">Cambridge Heights<br/><span className="text-xs font-semibold" style={{color:"var(--wine)"}}>School, E.I.</span></span></a>
   <div className="hidden lg:flex items-center gap-1 mx-auto">{NAVL.map(([h,t])=><a key={h} href={"#"+h} aria-current={act===h?"true":undefined} className="rounded-xl px-3.5 py-2 text-sm font-semibold transition-colors duration-300" style={act===h?{background:"color-mix(in srgb,var(--wine) 11%,transparent)",color:"var(--wine)"}:{color:"var(--ink)"}}>{t}</a>)}</div>
   <div className="ml-auto flex items-center gap-2">
    <button onClick={()=>onGo("portal")} className="hidden sm:block rounded-xl px-4 py-2 text-sm font-semibold" style={{border:"1.5px solid var(--line)",color:"var(--ink)"}}>Entrar</button>
    <a href="#matricula" className="btn text-sm" style={{padding:".55rem 1.1rem",borderRadius:12}}>Matricular</a>
    <button className="lg:hidden w-10 h-10 rounded-xl text-lg font-bold" aria-label="Menu" aria-expanded={mn} onClick={()=>setMn(!mn)} style={{border:"1.5px solid var(--line)"}}>{mn?"✕":"☰"}</button></div>
  </nav>
  {mn&&<div className="lg:hidden max-w-6xl mx-auto mt-2 card p-2 grid gap-1">{NAVL.map(([h,t])=><a key={h} href={"#"+h} onClick={()=>setMn(false)} className="rounded-xl px-4 py-3 font-semibold" style={act===h?{background:"color-mix(in srgb,var(--wine) 11%,transparent)",color:"var(--wine)"}:{}}>{t}</a>)}<button onClick={()=>onGo("portal")} className="rounded-xl px-4 py-3 font-semibold text-left">Entrar (Área do Pai)</button></div>}
 </header>

 <section id="inicio" className="relative overflow-hidden" style={{background:"var(--soft)"}}>
  <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-8 items-center">
   <div>
    <p className="font-bold" style={{color:"var(--wine)"}}>Creche, Berçário, Ensino Primário e Secundário · a partir dos 2 anos</p>
    <h1 className="text-4xl md:text-5xl font-extrabold mt-3 leading-[1.1]" style={{color:"var(--wine)"}}>Carinho de <span className="hl">casa</span>, rigor de uma <span className="hl">grande escola</span>.</h1>
    <div className="mt-4 max-w-md"><p key={sl} className="pop disp text-xl font-semibold" style={{color:"var(--wine)",minHeight:"3.4rem"}} aria-live="polite">“{SL[sl]}”</p><div className="flex gap-2 mt-2">{SL.map((_,i)=><button key={i} aria-label={"Lema "+(i+1)} onClick={()=>setSl(i)} className={"dot"+(i===sl?" on":"")}/>)}</div><p className="mt-3 text-lg mut">Aqui, cada criança é <b>acolhida</b>, <b>ouvida</b> e <b>desafiada</b> a crescer.</p></div>
    <p className="mt-3 font-bold">Horário: 7h–12:30 (meio período) · 7h–17h (integral)</p>
    <div className="flex flex-wrap gap-3 mt-6"><a href="#matricula" className="btn">Matricular online</a><a href="#contactos" className="btn2">Agendar visita</a></div>
   </div>
   <div className="relative"><div className="absolute inset-x-2 inset-y-8 rounded-[40%_60%_55%_45%/50%_45%_55%_50%]" style={{background:"var(--wine)"}}/><Coverflow/></div>
  </div></section>

 <div className="py-3 px-4 text-center text-sm font-bold" style={{background:"var(--gold)",color:"#2a1414"}}>Learn · Connect · Transform — The Future Of The World Is In This School</div>
 <section className="max-w-6xl mx-auto px-4 pt-8"><div className="card p-2 grid grid-cols-5 gap-1 text-center text-xs font-bold">
  {[["📞","Ligar","tel:+258875755102"],["💬","WhatsApp","https://wa.me/message/PCVCW5NJOFFVO1"],["📍","Direções","https://www.google.com/maps/search/?api=1&query="+encodeURIComponent("Cambridge Heights School Ponta-Gêa Beira")],["📷","Instagram","https://instagram.com/cambridge_heightsschool"]].map(([e,t,h])=><a key={t} href={h} className="rounded-2xl py-3 hover:bg-[var(--soft)]"><div className="text-xl">{e}</div>{t}</a>)}
  <button className="rounded-2xl py-3 font-bold hover:bg-[var(--soft)]" onClick={()=>{const d={title:"Cambridge Heights School, E.I.",url:location.href};try{(navigator.share?navigator.share(d):navigator.clipboard.writeText(d.url)).catch(()=>{})}catch(e){}}}><div className="text-xl">🔗</div>Partilhar</button></div></section>
 <section id="sobre" className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
  <div className="relative rounded-3xl p-8 grid place-items-center" style={{background:"linear-gradient(150deg,var(--wine),#4d1111)"}}><img src={LOGO_FULL} alt="Cambridge Heights School, E.I." className="w-48 rounded-3xl bg-white p-3 shadow-xl"/><span className="absolute -bottom-4 right-6 rounded-2xl px-4 py-2 text-center font-extrabold shadow-lg" style={{background:"var(--gold)",color:"#2a1414"}}><span className="disp text-xl">100%</span><br/><span className="text-xs">acompanhamento diário</span></span></div>
  <div><p className="text-xs font-extrabold tracking-widest" style={{color:"var(--gold)"}}>PORQUE NOS ESCOLHER</p><h2 className="text-3xl font-extrabold mt-1" style={{color:"var(--wine)"}}>Não ensinamos apenas, construímos futuros</h2>
   <p className="mt-3 mut"><b>Ensino Fundamental e Médio</b> e <b>creche</b> em período integral ou meio período, num espaço <b>seguro e acolhedor</b> para o desenvolvimento cognitivo e social.</p>
   <ul className="mt-4 space-y-2 font-semibold">{["Professores qualificados e aulas extra","Diário digital diário e fotos das atividades","Pagamento e-Mola com recibo instantâneo","Ambiente seguro, acolhedor e bilingue"].map(x=><li key={x} className="flex gap-3"><span className="w-6 h-6 rounded-full grid place-items-center text-xs shrink-0" style={{background:"var(--wine)",color:"var(--gold)"}}>✓</span>{x}</li>)}</ul>
   <a href="#matricula" className="btn inline-block mt-5">Saber mais e matricular</a></div>
 </section>
 <section className="max-w-6xl mx-auto px-4"><div className="grid grid-cols-2 md:grid-cols-4 gap-3">{[["2+","anos: idade mínima"],["7h–17h","horário integral"],["3","níveis: creche, primário, secundário"],["Diário","digital para os pais"]].map(([n,t])=><div key={t} className="card p-4 text-center"><p className="disp text-2xl font-extrabold" style={{color:"var(--wine)"}}>{n}</p><p className="mut text-xs">{t}</p></div>)}</div></section>

 <section id="programas" className="max-w-6xl mx-auto px-4 py-6">
  <h2 className="text-3xl font-extrabold" style={{color:"var(--wine)"}}>Um caminho para cada idade</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 mb-12">{[["🍼","Berçário","2 a 3 anos"],["🎨","Creche","Integral ou meio período"],["📖","Ensino Primário","Base sólida e bilingue"],["🎓","Ensino Secundário","Líderes de amanhã"]].map(([e,t,d])=><a key={t} href="#matricula" className="card p-5 text-center block"><div className="text-4xl">{e}</div><h3 className="font-extrabold mt-2">{t}</h3><p className="mut text-sm">{d}</p></a>)}</div>
  <h2 className="text-3xl font-extrabold" style={{color:"var(--wine)"}}>Como as crianças aprendem</h2>
  <div className="grid md:grid-cols-3 gap-4 mt-5">{progs.map(([e,t,d,en])=><div key={t} className="card p-6"><div className="text-4xl">{e}</div><h3 className="text-xl font-extrabold mt-3">{t}</h3><p className="text-sm mut" style={{color:"var(--gold)"}}>{en}</p><p className="mt-2 mut">{d}</p></div>)}</div>
 </section>

 <section id="galeria" className="max-w-6xl mx-auto px-4 py-12">
  <h2 className="text-3xl font-extrabold" style={{color:"var(--wine)"}}>O dia a dia na escola</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">{[["🎨","Pintura de mãos","#f8d9c9"],["🧮","Quadro e estimativa","#f3e3b5"],["📚","Leitura ativa","#d9e6f3"],["🏃","Recreio","#d8efd9"]].map(([e,t,c])=><div key={t} className="rounded-3xl p-6 pt-16 text-left text-white relative overflow-hidden" style={{background:"linear-gradient(160deg,var(--wine),#4d1111)"}}><div className="text-5xl absolute top-4 right-5">{e}</div><p className="disp font-extrabold text-lg">{t}</p><span className="block h-1 w-10 rounded mt-2" style={{background:"var(--gold)"}}/></div>)}</div>
 </section>

 <section className="max-w-6xl mx-auto px-4 py-6">
  <h2 className="text-3xl font-extrabold" style={{color:"var(--wine)"}}>Conheça o novo espaço</h2>
  <p className="mut mt-1">Estamos no <b>novo espaço</b> da Ponta-Gêa, pensado para as crianças.</p>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">{[["❄️","Salas climatizadas"],["🔒","Ambiente seguro"],["🌳","Pátio e recreio"],["📖","Cantinho de leitura"]].map(([e,t])=><div key={t} className="card p-5 text-center"><div className="text-3xl">{e}</div><b className="text-sm">{t}</b></div>)}</div>
 </section>

 <section id="propinas" className="max-w-6xl mx-auto px-4 py-10">
  <h2 className="text-3xl font-extrabold" style={{color:"var(--wine)"}}>Planos e propinas</h2><p className="mut mt-1">Valores ilustrativos. Confirme na secretaria.</p>
  <div className="grid md:grid-cols-3 gap-4 mt-8">{[["Meio período","3.200 MT","por mês","7h–12:30",["Aulas da manhã","Diário digital","Pagamento e-Mola"],0],["Integral","4.500 MT","por mês","7h–17h",["Dia completo","Diário e fotos diárias","Aulas extra","Pagamento e-Mola"],1],["Trimestral integral","12.150 MT","3 meses · poupe 10%","7h–17h",["Tudo do plano Integral","Um só pagamento","Recibo digital"],0]].map(([t,pr,per,h,l,hot])=><div key={t} className="card p-6 relative" style={hot?{borderColor:"var(--gold)",borderWidth:2}:{}}>{hot?<span className="absolute -top-3 left-6 text-xs font-extrabold px-3 py-1 rounded-full" style={{background:"var(--gold)",color:"#2a1414"}}>Mais popular</span>:null}<h3 className="font-extrabold text-lg">{t}</h3><p className="mut text-sm">{h}</p><p className="disp text-3xl font-extrabold mt-3" style={{color:"var(--wine)"}}>{pr}</p><p className="mut text-sm">{per}</p><ul className="mt-4 space-y-2 text-sm">{l.map(x=><li key={x}>✓ {x}</li>)}</ul>
   <button className={hot?"btn w-full mt-5":"w-full mt-5 font-bold rounded-full py-3 border-2"} style={hot?{}:{borderColor:"var(--wine)",color:"var(--wine)"}} onClick={()=>{setF({...f,turno:t==="Meio período"?"Meio período":"Integral"});document.getElementById("matricula").scrollIntoView({behavior:"smooth"})}}>Escolher plano</button></div>)}</div></section>

 <section id="matricula" className="max-w-xl mx-auto px-4 py-10">
  <div className="card p-6">
   <h2 className="text-2xl font-extrabold" style={{color:"var(--wine)"}}>Pré-matrícula online</h2>
   {done?<div className="text-center py-8 pop"><div className="text-6xl">🎉</div><h3 className="text-xl font-extrabold mt-3">Pedido enviado!</h3><p className="mut mt-2">Obrigado, {f.enc.split(" ")[0]}. A secretaria vai ligar para {f.tel} para confirmar a matrícula de {f.crianca}.</p><button className="btn mt-5" onClick={()=>onGo("admin")}>Ver na secretaria</button></div>:<>
   <p className="mut text-sm mt-1" aria-live="polite">Passo {step} de 3 — {["Dados do encarregado","Dados da criança","Escolha do turno"][step-1]}</p>
   <ol className="flex items-center my-4" aria-hidden="true">{[1,2,3].map(n=><React.Fragment key={n}><li className="w-8 h-8 rounded-full grid place-items-center text-sm font-extrabold transition-all duration-500" style={{background:n<=step?"var(--wine)":"var(--line)",color:n<=step?"#fff":"var(--mut)"}}>{n<step?"✓":n}</li>{n<3&&<li className="flex-1 h-1 mx-2 rounded transition-all duration-500" style={{background:n<step?"var(--wine)":"var(--line)"}}/>}</React.Fragment>)}</ol>
   {step===1&&<><L t="Nome completo"><input className="inp" value={f.enc} onChange={set("enc")}/></L><L t="Telemóvel"><input className="inp" inputMode="tel" placeholder="+258 87 575 5102" value={f.tel} onChange={set("tel")}/></L><L t="E-mail (opcional)"><input className="inp" type="email" value={f.mail} onChange={set("mail")}/></L><L t="Morada (opcional)"><input className="inp" value={f.morada} onChange={set("morada")}/></L></>}
   {step===2&&<><L t="Nome da criança"><input className="inp" value={f.crianca} onChange={set("crianca")}/></L><L t="Data de nascimento"><input className="inp" type="date" value={f.nasc} onChange={set("nasc")}/></L><L t="Alergias ou cuidados especiais"><textarea className="inp" rows="2" value={f.alergias} onChange={set("alergias")}/></L></>}
   {step===3&&<div className="grid grid-cols-2 gap-3">{[["Meio período","7h–12:30"],["Integral","7h–17h"]].map(([t,h])=><button key={t} onClick={()=>setF({...f,turno:t})} className="card p-4 text-left" style={f.turno===t?{borderColor:"var(--wine)",borderWidth:3}:{}} aria-pressed={f.turno===t}><b>{t}</b><br/><span className="mut text-sm">{h}</span></button>)}</div>}
   <div className="flex justify-between mt-5">{step>1?<button className="font-bold underline" onClick={()=>setStep(step-1)}>Voltar</button>:<span/>}
    {step<3?<button className="btn" disabled={!ok} onClick={()=>setStep(step+1)}>Continuar</button>:<button className="btn" onClick={send}>Enviar pré-matrícula</button>}</div><p className="text-xs mut mt-4 text-center">🔒 Os seus dados estão seguros e só são vistos pela secretaria.</p></>}
  </div></section>

 <section id="testemunhos" className="max-w-6xl mx-auto px-4 py-8">
  <h2 className="text-3xl font-extrabold" style={{color:"var(--wine)"}}>O que dizem os encarregados</h2>
  <div ref={tr} className="snap mt-5">{[["A Mariana chega a casa a cantar. O diário diário dá-nos tranquilidade no trabalho.","Encarregada, Ponta-Gêa"],["O Tiago ganhou confiança na matemática em poucas semanas.","Encarregado, Macuti"],["Ver as fotos das atividades logo à tarde é o melhor do dia.","Encarregada, Munhava"],["Pagar pelo e-Mola e receber o recibo na hora poupou-me filas.","Encarregado, Esturro"],["Sinto que a escola e a família trabalham juntas.","Encarregada, Chaimite"]].map(([q,a])=><figure key={a} className="card p-5"><p style={{color:"var(--gold)"}} aria-label="5 estrelas">★★★★★</p><blockquote className="mt-1">“{q}”</blockquote><figcaption className="mut text-sm mt-3">{a}</figcaption></figure>)}</div>
  <div className="flex items-center justify-between mt-3"><p className="mut text-xs">Testemunhos de demonstração.</p><div className="flex gap-2">{[["‹",-1],["›",1]].map(([a,d])=><button key={a} aria-label={d<0?"Anterior":"Seguinte"} className="card w-10 h-10 text-xl font-bold" onClick={()=>tr.current&&tr.current.scrollBy({left:d*340,behavior:"smooth"})}>{a}</button>)}</div></div>
 </section>

 <section className="max-w-6xl mx-auto px-4 pb-12"><div className="rounded-3xl p-8 flex flex-wrap items-center justify-between gap-4 text-white" style={{background:"linear-gradient(120deg,var(--wine),#4d1111)"}}><div><h2 className="disp text-2xl font-extrabold">Inscrições abertas para 2026</h2><p style={{color:"var(--gold)"}}>Venham visitar! Bases fortes para a aprendizagem ao longo da vida.</p></div><div className="flex gap-3 flex-wrap"><a href="#matricula" className="btn2">Matricular online</a><a href="https://wa.me/message/PCVCW5NJOFFVO1" className="rounded-full px-5 py-3 font-bold border-2 border-white/70">Agendar visita</a></div></div></section>
 <footer id="contactos" className="text-white" style={{background:"#4d1111"}}>
  <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
   <div><img src={LOGO_FULL} alt="Cambridge Heights School, E.I." className="w-28 rounded-2xl bg-white p-2"/><p className="mt-3 opacity-80">Learners Today, Leaders Tomorrow.</p></div>
   <div><h3 className="font-extrabold mb-2" style={{color:"var(--gold)"}}>Links rápidos</h3><ul className="space-y-1">{[["sobre","Sobre nós"],["programas","Programas"],["galeria","Galeria"],["propinas","Propinas"],["matricula","Pré-matrícula"],["testemunhos","Testemunhos"]].map(([h,t])=><li key={h}><a href={"#"+h} className="hover:underline">{t}</a></li>)}</ul></div>
   <div><h3 className="font-extrabold mb-2" style={{color:"var(--gold)"}}>Contactos</h3><p>📍 Ponta-Gêa, Av. Eduardo Mondlane, Beira. Próximo à UCM e à Ordem dos Advogados.</p><p className="mt-2">📞 <a className="underline" href="tel:+258875755102">+258 875755102</a></p><p>📷 <a className="underline" href="https://instagram.com/cambridge_heightsschool">@cambridge_heightsschool</a></p><p>🕖 7h–12:30 e 7h–17h</p></div>
   <div><h3 className="font-extrabold mb-2" style={{color:"var(--gold)"}}>Newsletter</h3>{nls?<p aria-live="polite">✅ Obrigado! Vamos enviar as novidades.</p>:<form onSubmit={e=>{e.preventDefault();setNls(true)}}><p className="opacity-80 mb-2">Novidades e avisos da escola.</p><input required type="email" aria-label="E-mail" placeholder="O seu e-mail" className="inp" style={{color:"#2a1414",background:"#fff"}}/><button className="btn2 w-full mt-2">Subscrever</button></form>}</div>
  </div>
  <p className="border-t border-white/20 text-center text-xs px-4 py-4">© 2026 Cambridge Heights School, E.I. · Quality Education · Holistic Development · Values That Transform</p></footer>
 </div>);
}

function Portal({invoices,pay,diarios}){
 const [sid,setSid]=useState(1),[tab,setTab]=useState("diario"),[inv,setInv]=useState(null),[tel,setTel]=useState(""),[st,setSt]=useState("idle"),[rec,setRec]=useState(null);
 const s=STUDENTS.find(x=>x.id===sid),mine=invoices.filter(i=>i.aluno===sid);
 const valid=/^8[67]\d{7}$/.test(tel);
 const go=()=>{setSt("pending");setTimeout(()=>{const r=pay(inv,tel);setRec(r);setSt("done")},2800)};
 const dl=()=>{try{const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([`RECIBO ${rec.ref}\nCambridge Heights School, E.I.\n${rec.desc}\nAluno: ${s.nome}\nValor: ${MT(rec.valor)}\ne-Mola: ${rec.tel}\nEstado: ${rec.status}\n`],{type:"text/plain;charset=utf-8"}));a.download=rec.ref+".txt";a.click()}catch(e){}};
 const close=()=>{setInv(null);setSt("idle");setRec(null);setTel("")};
 const copy=()=>{try{navigator.clipboard.writeText(`RECIBO ${rec.ref}\nCambridge Heights School, E.I.\n${rec.desc}\nAluno: ${s.nome}\nValor: ${MT(rec.valor)}\ne-Mola: ${rec.tel}\nEstado: ${rec.status}`)}catch(e){}};
 return (<div className="max-w-3xl mx-auto px-4 py-6">
  <h1 className="text-2xl font-extrabold" style={{color:"var(--wine)"}}>Olá, família Chuquela</h1>
  <div className="flex gap-2 mt-3">{STUDENTS.map(x=><button key={x.id} onClick={()=>setSid(x.id)} aria-pressed={x.id===sid} className="card px-4 py-2 font-bold" style={x.id===sid?{background:"var(--wine)",color:"#fff"}:{}}>{x.emoji} {x.nome.split(" ")[0]}</button>)}</div>
  <p className="mut text-sm mt-2">{s.nome} · {s.idade} · {s.turma} · {s.turno}</p>
  <div className="flex gap-1 mt-4 overflow-x-auto border-b" style={{borderColor:"var(--line)"}} role="tablist">{[["diario","Diário"],["fotos","Fotos"],["perfil","Perfil"],["boletim","Boletim"],["pag","Pagamentos"]].map(([k,t])=><button key={k} role="tab" aria-label={t} aria-selected={tab===k} onClick={()=>setTab(k)} className="rounded-full px-4 py-2.5 font-bold whitespace-nowrap transition-all duration-500" style={tab===k?{background:"var(--wine)",color:"#fff"}:{}}>{TI[k]}{tab===k&&<span className="ml-2">{t}</span>}</button>)}</div>
  <div className="mt-4 space-y-3">
  {tab==="diario"&&[...(diarios[sid]||[]),...s.diario].map((d,i)=><div key={i} className="card p-4"><div className="flex justify-between"><b>{d.d}</b><span className="mut text-sm">Sesta: {d.sesta}</span></div><p className="mt-1 text-sm">😊 {d.humor} · 🍽️ {d.comida}</p><p className="mt-2 mut">{d.atv}</p></div>)}
  {tab==="fotos"&&<div className="grid grid-cols-2 gap-3">{s.fotos.map(([e,t,c])=><div key={t} className="rounded-2xl p-6 text-center" style={{background:c,color:"#2a1414"}}><div className="text-5xl">{e}</div><p className="font-bold text-sm mt-2">{t}</p></div>)}</div>}
  {tab==="boletim"&&<div className="card p-5 space-y-4">{s.notas.map(([t,v])=><div key={t}><div className="flex justify-between text-sm font-bold"><span>{t}</span><span>{v}%</span></div><div className="h-3 rounded-full mt-1" style={{background:"var(--line)"}} role="img" aria-label={t+" "+v+"%"}><div className="h-3 rounded-full" style={{width:v+"%",background:"linear-gradient(90deg,var(--wine),var(--gold))"}}/></div></div>)}</div>}
  {tab==="perfil"&&<div className="card p-5 grid grid-cols-2 gap-4 text-sm">{[["Nome",s.nome],["Idade",s.idade],["Turma",s.turma],["Professor(a)",s.prof],["Turno",s.turno],["Alergias e cuidados",s.alergias]].map(([k,v])=><div key={k}><p className="mut">{k}</p><b>{v}</b></div>)}</div>}
  {tab==="pag"&&mine.map(i=><div key={i.id} className="card p-4 flex items-center justify-between gap-3"><div><b>{i.desc}</b><p className="mut text-sm">{MT(i.valor)} · vence {i.venc}</p></div>
   {i.status==="Pago"?<button className="font-bold underline" onClick={()=>{setInv(i);setRec(i.rec);setSt("done")}}>✅ Pago · Recibo</button>:<button className="btn" onClick={()=>setInv(i)}>Pagar</button>}</div>)}
  </div>
  {inv&&<div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4" style={{background:"rgba(0,0,0,.5)"}} role="dialog" aria-modal="true">
   <div className="card p-6 w-full max-w-sm pop">
    {st==="idle"&&<><h2 className="text-xl font-extrabold">Pagar com e-Mola</h2><p className="mut text-sm mt-1">{inv.desc} — <b>{MT(inv.valor)}</b></p>
     <label className="block mt-4"><span className="text-sm font-bold">Número e-Mola</span><input className="inp" inputMode="numeric" placeholder="86xxxxxxx ou 87xxxxxxx" value={tel} onChange={e=>setTel(e.target.value.replace(/\D/g,"").slice(0,9))}/></label>
     {tel&&!valid&&<p className="text-sm mt-1" style={{color:"#c0392b"}}>Use 9 dígitos a começar por 86 ou 87.</p>}
     <div className="flex gap-3 mt-5"><button className="btn flex-1" disabled={!valid} onClick={go}>Pagar com e-Mola</button><button className="font-bold underline" onClick={close}>Cancelar</button></div><p className="text-xs mut mt-3 text-center">🔒 Pagamento seguro e encriptado</p></>}
    {st==="pending"&&<div className="text-center py-6" aria-live="polite"><div className="text-5xl">📱</div><p className="font-extrabold mt-3">Confirme no seu telemóvel</p><p className="mut text-sm mt-1">Enviámos um pedido USSD para {tel}. Introduza o PIN e-Mola para concluir.</p></div>}
    {st==="done"&&rec&&<div aria-live="polite"><div className="text-center"><div className="text-5xl">✅</div><h2 className="text-xl font-extrabold mt-2">TX_SUCCESS</h2><p className="mut text-sm">Pagamento confirmado</p></div>
     <div className="mt-4 rounded-xl p-4 text-sm" style={{background:"var(--soft)"}}><b>Recibo {rec.ref}</b><br/>{rec.desc}<br/>Aluno: {s.nome}<br/>Valor: {MT(rec.valor)}<br/>e-Mola: {rec.tel}</div>
     <div className="flex gap-3 mt-4"><button className="btn2 flex-1" onClick={copy}>Copiar</button><button className="btn2 flex-1" onClick={dl}>Descarregar</button><button className="btn" onClick={close}>Fechar</button></div></div>}
   </div></div>}
 </div>);
}

function Admin({enrolls,approve,txs,invoices,addDiario,baixa}){
 const [q,setQ]=useState(""),[df,setDf]=useState({aluno:1,humor:"Alegre",comida:"Comeu tudo",sesta:"1h",atv:""}),[sent,setSent]=useState(false);
 const sd=k=>e=>setDf({...df,[k]:k==="aluno"?+e.target.value:e.target.value});
 const pagos=invoices.filter(i=>i.status==="Pago"),pend=invoices.filter(i=>i.status!=="Pago");
 const pct=Math.round(100*pagos.length/invoices.length),rec=pagos.reduce((a,i)=>a+i.valor,0)+txs.filter(t=>t.extra).reduce((a,t)=>a+t.valor,0);
 const total=142+enrolls.filter(e=>e.ok).length;
 const M=({t,v})=><div className="card p-4"><p className="mut text-sm">{t}</p><p className="disp text-2xl font-extrabold" style={{color:"var(--wine)"}}>{v}</p></div>;
 return (<div className="max-w-4xl mx-auto px-4 py-6">
  <h1 className="text-2xl font-extrabold" style={{color:"var(--wine)"}}>Administração</h1>
  <div className="grid grid-cols-3 gap-3 mt-4"><M t="Alunos" v={total}/><M t="Receita do mês" v={MT(rec+312000)}/><M t="Pendentes" v={MT(pend.reduce((a,i)=>a+i.valor,0))}/></div>
  <div className="grid md:grid-cols-3 gap-3 mt-4"><div className="card p-4 md:col-span-2"><p className="font-bold text-sm">Receita por mês (milhares de MT)</p><div className="flex items-end gap-3 h-36 mt-3" role="img" aria-label="Receita mensal">{[["Jun",268],["Jul",281],["Ago",295],["Set",301],["Out",Math.round((rec+312000)/1000)]].map(([m,v])=><div key={m} className="flex-1 h-full flex flex-col justify-end text-center text-xs"><span className="mut">{v}</span><div className="rounded-t-lg mx-auto w-full" style={{height:Math.round(v/340*78)+"%",maxWidth:48,background:"linear-gradient(var(--gold),var(--wine))"}}/><span className="mut mt-1">{m}</span></div>)}</div></div>
  <div className="card p-4 flex items-center gap-4"><div className="w-24 h-24 rounded-full grid place-items-center shrink-0" style={{background:"conic-gradient(var(--wine) "+pct+"%,var(--gold) 0)"}}><div className="w-16 h-16 rounded-full grid place-items-center text-sm font-extrabold" style={{background:"var(--card)"}}>{pct}%</div></div><div className="text-sm"><b>Cobrado</b><br/><span className="mut">Faturas pagas vs pendentes</span></div></div></div>
  <h2 className="text-lg font-extrabold mt-6">Pré-matrículas</h2>
  <div className="space-y-3 mt-2">{enrolls.map(e=><div key={e.id} className="card p-4 flex flex-wrap items-center justify-between gap-3"><div><b>{e.crianca}</b> <span className="mut text-sm">· {e.turno}</span><p className="mut text-sm">Encarregado: {e.enc} · {e.tel}</p>{e.ok&&<p className="text-sm mt-1">🔑 Acesso: <b>{e.user}</b> / <b>{e.pass}</b></p>}</div>
   {e.ok?<span className="font-bold" style={{color:"#2e7d32"}}>Aprovada</span>:<button className="btn" onClick={()=>approve(e.id)}>Aprovar</button>}</div>)}</div>
  <h2 className="text-lg font-extrabold mt-6">Matriculados</h2>
  <div className="card p-4 mt-2"><input className="inp" placeholder="Filtrar por nome…" value={q} onChange={e=>setQ(e.target.value)}/>
   {[...STUDENTS.map(x=>({n:x.nome,i:x.emoji,m:x.turma+" · "+x.turno})),...enrolls.filter(e=>e.ok).map(e=>({n:e.crianca,i:"🆕",m:"Nova matrícula · "+e.turno}))].filter(x=>x.n.toLowerCase().includes(q.toLowerCase())).map(x=><div key={x.n} className="flex justify-between gap-3 py-2 border-t mt-2 text-sm" style={{borderColor:"var(--line)"}}><b>{x.i} {x.n}</b><span className="mut text-right">{x.m}</span></div>)}</div>
  <h2 className="text-lg font-extrabold mt-6">Lançar diário pedagógico</h2>
  <div className="card p-4 mt-2 grid grid-cols-2 gap-3">
   <select className="inp col-span-2" value={df.aluno} onChange={sd("aluno")} aria-label="Aluno">{STUDENTS.map(x=><option key={x.id} value={x.id}>{x.nome}</option>)}</select>
   <select className="inp" value={df.humor} onChange={sd("humor")} aria-label="Humor">{["Alegre","Tranquilo","Cansado"].map(x=><option key={x}>{x}</option>)}</select>
   <select className="inp" value={df.comida} onChange={sd("comida")} aria-label="Alimentação">{["Comeu tudo","Comeu parte","Recusou"].map(x=><option key={x}>{x}</option>)}</select>
   <input className="inp col-span-2" placeholder="Sesta (ex.: 1h30)" value={df.sesta} onChange={sd("sesta")}/>
   <input className="inp col-span-2" placeholder="Atividades do dia" value={df.atv} onChange={sd("atv")}/>
   <button className="btn col-span-2" disabled={!df.atv} onClick={()=>{addDiario(df);setDf({...df,atv:""});setSent(true)}}>Publicar diário</button>
   {sent&&<p className="col-span-2 text-sm" aria-live="polite">✅ Diário publicado. Já aparece no portal do encarregado.</p>}
  </div>
  <h2 className="text-lg font-extrabold mt-6">Baixa manual de pagamentos</h2>
  <div className="space-y-2 mt-2">{pend.length===0?<p className="mut text-sm">Sem faturas pendentes.</p>:pend.map(i=><div key={i.id} className="card p-3 flex items-center justify-between gap-3 text-sm"><span><b>{i.desc}</b> · {STUDENTS.find(x=>x.id===i.aluno).nome} · {MT(i.valor)}</span><button className="btn" style={{padding:".4rem 1rem"}} onClick={()=>baixa(i)}>Dar baixa</button></div>)}</div>
  <h2 className="text-lg font-extrabold mt-6">Transações e-Mola (tempo real)</h2>
  <div className="card mt-2 overflow-x-auto"><table className="w-full text-sm"><thead><tr className="text-left mut"><th className="p-3">Ref.</th><th className="p-3">Encarregado</th><th className="p-3">Telemóvel</th><th className="p-3">Descrição</th><th className="p-3">Valor</th><th className="p-3">Data</th><th className="p-3">Estado</th></tr></thead><tbody>{txs.map(t=><tr key={t.ref} className="border-t" style={{borderColor:"var(--line)"}}><td className="p-3">{t.ref}</td><td className="p-3">{t.enc}</td><td className="p-3">{t.tel}</td><td className="p-3">{t.desc}</td><td className="p-3">{MT(t.valor)}</td><td className="p-3">{t.data}</td><td className="p-3">{t.status}</td></tr>)}</tbody></table></div>
 </div>);
}

function Login({role,onOk}){
 const pai=role==="pai",[u,setU]=useState(pai?"marta":"secretaria"),[p,setP]=useState(pai?"1234":"admin"),[bad,setBad]=useState(false);
 const submit=e=>{e.preventDefault();(u===(pai?"marta":"secretaria")&&p===(pai?"1234":"admin"))?onOk():setBad(true)};
 return (<div className="max-w-sm mx-auto px-4 py-12"><form onSubmit={submit} className="card p-6"><div className="flex justify-center"><Shield s={72}/></div>
  <h1 className="text-2xl font-extrabold text-center mt-2" style={{color:"var(--wine)"}}>{pai?"Área do Encarregado":"Administração"}</h1>
  <p className="mut text-sm text-center mt-1">Credenciais de demonstração já preenchidas.</p>
  <label className="block mt-4"><span className="text-sm font-bold">Utilizador</span><input className="inp" value={u} onChange={e=>setU(e.target.value)}/></label>
  <label className="block mt-3"><span className="text-sm font-bold">Palavra-passe</span><input className="inp" type="password" value={p} onChange={e=>setP(e.target.value)}/></label>
  {bad&&<p className="text-sm mt-2" style={{color:"#c0392b"}} role="alert">Utilizador ou palavra-passe incorretos.</p>}
  <button className="btn w-full mt-5">Entrar</button></form></div>);
}

function App(){
 const [dark,setDark]=useState(()=>matchMedia("(prefers-color-scheme: dark)").matches);
 useEffect(()=>{document.documentElement.setAttribute("data-theme",dark?"dark":"light")},[dark]);useReveal();
 const [view,setView]=useState("site"),[diarios,setDiarios]=useState({}),[auth,setAuth]=useState({pai:false,admin:false});
 const [invoices,setInv]=useState([
  {id:"F1",aluno:1,desc:"Mensalidade outubro",valor:4500,venc:"05/10",status:"Pago",rec:{ref:"REC-0912",desc:"Mensalidade outubro",valor:4500,tel:"841234567",status:"TX_SUCCESS"}},
  {id:"F2",aluno:1,desc:"Mensalidade novembro",valor:4500,venc:"05/11",status:"Pendente"},
  {id:"F3",aluno:2,desc:"Mensalidade outubro",valor:3200,venc:"05/10",status:"Pendente"},
  {id:"F4",aluno:2,desc:"Plano trimestral",valor:9000,venc:"15/11",status:"Pendente"}]);
 const [txs,setTxs]=useState([{ref:"TX-77120",enc:"Marta Chuquela",tel:"841234567",desc:"Mensalidade outubro",valor:4500,data:"02/10 09:14",status:"TX_SUCCESS"},{ref:"TX-77098",enc:"Carlos Sitoe",tel:"879876543",desc:"Mensalidade outubro",valor:3200,data:"01/10 16:40",status:"TX_SUCCESS"},{ref:"TX-77041",enc:"Fatima Mussa",tel:"862223344",desc:"Mensalidade setembro",valor:4500,data:"29/09 11:02",status:"TX_SUCCESS"}]);
 const [enrolls,setEn]=useState([{id:1,crianca:"Aisha Mussa",enc:"Fatima Mussa",tel:"+258 84 111 2233",turno:"Meio período"},{id:2,crianca:"Daniel Sitoe",enc:"Carlos Sitoe",tel:"+258 87 555 0101",turno:"Integral"}]);
 const pay=(i,tel)=>{const n=Math.floor(10000+Math.random()*89999);const r={ref:"REC-"+n,desc:i.desc,valor:i.valor,tel,status:"TX_SUCCESS"};
  setInv(v=>v.map(x=>x.id===i.id?{...x,status:"Pago",rec:r}:x));setTxs(v=>[{ref:"TX-"+n,enc:"Família Chuquela",tel,desc:i.desc,valor:i.valor,data:new Date().toLocaleDateString("pt-PT"),status:"TX_SUCCESS",extra:1},...v]);return r};
 const addEnroll=f=>setEn(v=>[{...f,id:Date.now()},...v]);
 const addDiario=f=>setDiarios(v=>({...v,[f.aluno]:[{d:"Agora",humor:f.humor,comida:f.comida,sesta:f.sesta||"—",atv:f.atv},...(v[f.aluno]||[])]}));
 const baixa=i=>{const n=Math.floor(10000+Math.random()*89999);const r={ref:"REC-"+n,desc:i.desc,valor:i.valor,tel:"Balcão",status:"Baixa manual"};setInv(v=>v.map(x=>x.id===i.id?{...x,status:"Pago",rec:r}:x));setTxs(v=>[{ref:"BM-"+n,enc:"Balcão",tel:"—",desc:i.desc,valor:i.valor,data:new Date().toLocaleDateString("pt-PT"),status:"Baixa manual",extra:1},...v])};
 const approve=id=>setEn(v=>v.map(e=>e.id===id?{...e,ok:1,user:e.enc.split(" ")[0].toLowerCase()+id%1000,pass:"CH"+Math.floor(1000+Math.random()*8999)}:e));
 return (<div>
  <Nav view={view} go={k=>{setView(k);window.scrollTo({top:0,behavior:"smooth"})}} dark={dark} setDark={setDark}/>
  {view==="site"&&<Site onGo={setView} addEnroll={addEnroll}/>}
  {view==="portal"&&(auth.pai?<Portal invoices={invoices} pay={pay} diarios={diarios}/>:<Login role="pai" onOk={()=>setAuth({...auth,pai:true})}/>)}
  {view==="admin"&&(auth.admin?<Admin enrolls={enrolls} approve={approve} txs={txs} invoices={invoices} addDiario={addDiario} baixa={baixa}/>:<Login role="admin" onOk={()=>setAuth({...auth,admin:true})}/>)}
 </div>);
}
export default App;
