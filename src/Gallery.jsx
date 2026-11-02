import React, { useState, useEffect, useRef } from "react";
import { PH, ALL, CATS } from "./photos.js";

/* Imagem responsiva (srcset 640w/1400w), com lazy-loading e dimensões para evitar saltos de layout */
export function Img({ k, sizes = "100vw", eager = false, className = "", alt, style }) {
  const p = PH[k];
  return (
    <img
      src={p.lg}
      srcSet={`${p.sm} 640w, ${p.lg} ${p.w}w`}
      sizes={sizes}
      width={p.w}
      height={p.h}
      alt={alt ?? p.alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      draggable="false"
      className={className}
      style={style}
    />
  );
}

const Icon = ({ d, s = 22 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

/* Visualizador em ecrã inteiro: setas, teclado, deslizar no telemóvel, Esc para fechar */
export function Lightbox({ items, index, onClose, onIndex }) {
  const open = index != null;
  const n = items.length;
  const box = useRef(null);
  const tx = useRef(0);
  const go = (d) => onIndex((index + d + n) % n);

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement;
    const ov = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    box.current && box.current.querySelector("button")?.focus();
    return () => {
      document.body.style.overflow = ov;
      prev && prev.focus && prev.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "Tab" && box.current) {
        const f = [...box.current.querySelectorAll("button")];
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  });

  if (!open) return null;
  const p = PH[items[index]];
  const nb = PH[items[(index + 1) % n]];
  return (
    <div
      ref={box}
      className="lb"
      role="dialog"
      aria-modal="true"
      aria-label="Galeria de fotos"
      onClick={onClose}
      onTouchStart={(e) => { tx.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => { const d = e.changedTouches[0].clientX - tx.current; if (Math.abs(d) > 50) go(d < 0 ? 1 : -1); }}
    >
      <button className="lb-btn lb-x" aria-label="Fechar" onClick={(e) => { e.stopPropagation(); onClose(); }}><Icon d="M6 6l12 12M18 6L6 18" /></button>
      {n > 1 && <button className="lb-btn lb-prev" aria-label="Foto anterior" onClick={(e) => { e.stopPropagation(); go(-1); }}><Icon d="M15 5l-7 7 7 7" /></button>}
      {n > 1 && <button className="lb-btn lb-next" aria-label="Foto seguinte" onClick={(e) => { e.stopPropagation(); go(1); }}><Icon d="M9 5l7 7-7 7" /></button>}
      <figure className="lb-fig" onClick={(e) => e.stopPropagation()}>
        <img key={p.k} className="lb-img" src={p.lg} srcSet={`${p.sm} 640w, ${p.lg} ${p.w}w`} sizes="(min-width:1024px) 80vw, 100vw" alt={p.alt} />
        <figcaption className="lb-cap">
          <span className="disp lb-t">{p.title}</span>
          <span className="lb-s">{p.sub}</span>
          <span className="lb-c" aria-live="polite">{index + 1} / {n}</span>
        </figcaption>
      </figure>
      <link rel="preload" as="image" href={nb.lg} />
    </div>
  );
}

/* Galeria com filtros por categoria e mosaico em destaque */
export function Gallery({ onOpen }) {
  const [cat, setCat] = useState("Todas");
  const list = cat === "Todas" ? ALL : ALL.filter((k) => PH[k].cats.includes(cat));
  const feat = cat === "Todas" ? [0, 5] : []; // 2 fotos grandes no mosaico (4 colunas)
  return (
    <div>
      <div className="flex flex-wrap gap-2 mt-5" role="group" aria-label="Filtrar fotos">
        {CATS.map((c) => (
          <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className="chip">
            {c}
            <span className="chip-n">{c === "Todas" ? ALL.length : ALL.filter((k) => PH[k].cats.includes(c)).length}</span>
          </button>
        ))}
      </div>
      <div className="gal mt-5" key={cat}>
        {list.map((k, i) => {
          const p = PH[k];
          const big = feat.includes(i);
          return (
            <button
              key={k}
              onClick={() => onOpen(list, i)}
              className={"tile" + (big ? " tile-big" : "")}
              style={{ "--d": Math.min(i, 8) * 60 + "ms" }}
              aria-label={`Ver foto: ${p.title}`}
            >
              <Img k={k} sizes={big ? "(min-width:1024px) 50vw, 50vw" : "(min-width:1024px) 25vw, 50vw"} className="tile-img" />
              <span className="tile-cap">
                <span className="disp tile-t">{p.title}</span>
                <span className="tile-s">{p.sub}</span>
              </span>
              <span className="tile-z" aria-hidden="true"><Icon d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" s={16} /></span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

const SPACES = [
  { k: "fachada", i: "🏫", t: "Entrada", d: "Uma entrada acolhedora e segura, com boas-vindas em português e inglês logo no portão.", b: ["Portão e vedação segura", "Boas-vindas bilingue", "Ponta-Gêa, Beira"] },
  { k: "hall", i: "🎒", t: "Hall e cacifos", d: "Cada aluno tem o seu cacifo para guardar a mochila e os pertences, num hall fresco e climatizado.", b: ["Cacifos individuais", "Hall climatizado", "Zona de espera para famílias"] },
  { k: "sala-ampla", i: "📚", t: "Salas de aula", d: "Salas amplas e luminosas, com ecrã de apoio, quadro branco e cantinho de leitura ao alcance das crianças.", b: ["Ecrã e quadro branco", "Estante de leitura", "Cartazes de letras e números"] },
  { k: "patio", i: "🌳", t: "Pátio", d: "Um pátio com sombra de frangipani onde as crianças brincam, exploram e gastam energia em segurança.", b: ["Sombra natural", "Zona de areia", "Vasos de pneus reciclados"] },
  { k: "jardim", i: "🌿", t: "Jardim", d: "Uma zona verde com tenda de sombra, perfeita para atividades ao ar livre e pausas tranquilas.", b: ["Tenda de sombra", "Plantas e relva", "Mesa de atividades"] },
  { k: "secretaria", i: "🗂️", t: "Secretaria", d: "Atendimento próximo aos encarregados para matrículas, informações e acompanhamento do dia a dia.", b: ["Matrículas e informações", "Quadro de avisos", "Atendimento personalizado"] },
];

/* Visita guiada ao espaço: separadores + foto grande com transição suave */
export function Tour({ onOpen }) {
  const [a, setA] = useState(0);
  const s = SPACES[a];
  const mv = (d) => setA((x) => (x + d + SPACES.length) % SPACES.length);
  return (
    <div className="mt-6 grid lg:grid-cols-12 gap-5 items-stretch">
      <div className="lg:col-span-7 min-w-0">
        <div className="tour-stage" role="group" aria-roledescription="visita guiada" aria-label="Fotos do espaço">
          {SPACES.map((x, i) => (
            <Img key={x.k} k={x.k} sizes="(min-width:1024px) 58vw, 100vw" className={"tour-img" + (i === a ? " on" : "")} alt={i === a ? PH[x.k].alt : ""} />
          ))}
          <span className="tour-tag">{s.i} {s.t}</span>
          <div className="tour-ctrl">
            <button aria-label="Espaço anterior" onClick={() => mv(-1)}><Icon d="M15 5l-7 7 7 7" s={20} /></button>
            <button aria-label="Espaço seguinte" onClick={() => mv(1)}><Icon d="M9 5l7 7-7 7" s={20} /></button>
          </div>
          <button className="tour-zoom" aria-label={`Ampliar foto: ${s.t}`} onClick={() => onOpen(SPACES.map((x) => x.k), a)}><Icon d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" s={18} /></button>
        </div>
      </div>
      <div className="lg:col-span-5 min-w-0 flex flex-col">
        <div className="tour-tabs" role="tablist" aria-label="Espaços da escola">
          {SPACES.map((x, i) => (
            <button key={x.k} role="tab" aria-selected={i === a} onClick={() => setA(i)} className="chip">
              <span aria-hidden="true">{x.i}</span> {x.t}
            </button>
          ))}
        </div>
        <div className="card p-6 mt-4 flex-1 pop" key={a} role="tabpanel">
          <h3 className="text-2xl font-extrabold" style={{ color: "var(--wine)" }}>{s.t}</h3>
          <p className="mt-2 mut">{s.d}</p>
          <ul className="mt-4 space-y-2 font-semibold text-sm">
            {s.b.map((x) => (
              <li key={x} className="flex gap-3 items-center">
                <span className="w-6 h-6 rounded-full grid place-items-center text-xs shrink-0" style={{ background: "var(--wine)", color: "var(--gold)" }}>✓</span>{x}
              </li>
            ))}
          </ul>
          <a href="https://wa.me/message/PCVCW5NJOFFVO1" className="btn inline-block mt-5 text-sm">Agendar visita</a>
        </div>
      </div>
    </div>
  );
}
