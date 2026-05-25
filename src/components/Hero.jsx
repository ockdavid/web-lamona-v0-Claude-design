import { B, HERO_FEATURED, waLink } from '../lib.js';
import { IconWa } from '../icons.jsx';

export default function Hero() {
  const [h1, h2, h3] = HERO_FEATURED;

  return (
    <section className="hero wrap" id="inicio">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="line"></span>
            <span className="kicker">Joyería artesanal — Lima, Perú</span>
          </div>
          <h1 className="hero-title">
            Joyas que llevan<br />
            <em>tu historia</em><span className="ampersand">.</span>
          </h1>
          <p className="hero-sub">
            Plata de ley y baño de oro, personalizadas con tu nombre o iniciales.
            Cada pieza, única como tú — y todas a un solo precio.
          </p>
          <div className="hero-ctas">
            <a href="#catalogo" className="btn btn-primary">
              Ver catálogo <span className="arrow">→</span>
            </a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <IconWa width="14" height="14" /> Pedir por WhatsApp
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-img hero-img-main">
            <img src={`/assets/${h1}`} alt="Collar corazón con inicial" />
          </div>
          <div className="hero-img hero-img-side">
            <img src={`/assets/${h2}`} alt="Anillo solitario oro rosado" />
          </div>
          <div className="hero-img hero-img-top">
            <img src={`/assets/${h3}`} alt="Anillos con piedras naturales" />
          </div>
          <div className="hero-badge">
            <span className="b-serif">Hechas<br />a mano</span>
            <span className="b-mono">— Plata 925 —</span>
          </div>
        </div>
      </div>

      <div className="hero-meta">
        <div className="hero-meta-cell">
          <span className="hero-meta-num">+{B.followers}<em>.</em></span>
          <span className="hero-meta-lbl">Seguidoras en Instagram</span>
        </div>
        <div className="hero-meta-cell">
          <span className="hero-meta-num">{B.totalProducts}</span>
          <span className="hero-meta-lbl">Diseños únicos</span>
        </div>
        <div className="hero-meta-cell">
          <span className="hero-meta-num"><em>S/. 50</em></span>
          <span className="hero-meta-lbl">Todas las piezas</span>
        </div>
        <div className="hero-meta-cell">
          <span className="hero-meta-num">24h</span>
          <span className="hero-meta-lbl">Respuesta por WhatsApp</span>
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  const items = [
    'Todas las piezas a S/. 50',
    'Envíos a todo el Perú',
    'Pago contra entrega en Lima',
    'Personalización incluida',
    'Plata 925 con garantía',
    'Empaque de regalo',
  ];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...items, ...items].map((it, i) => (
          <span className="marquee-item" key={i}>{it}</span>
        ))}
      </div>
    </div>
  );
}
