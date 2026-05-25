import { B, waLink } from '../lib.js';
import { IconWa } from '../icons.jsx';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="brand" href="#inicio">
          <img src="/assets/logo.png" alt="la Mona" className="brand-logo" />
          <span className="brand-text">
            <span className="brand-mark">Joyas de plata y oro</span>
            <span className="brand-sub">{B.instagramHandle} · Lima, Perú 🇵🇪</span>
          </span>
        </a>
        <div className="nav-links">
          <a href="#catalogo">Catálogo</a>
          <a href="#personalizar">Personalizar</a>
          <a href="#proceso">Proceso</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#instagram">Instagram</a>
        </div>
        <a className="nav-cta" href={waLink()} target="_blank" rel="noopener noreferrer">
          <IconWa width="14" height="14" />
          WhatsApp
        </a>
      </div>
    </nav>
  );
}
