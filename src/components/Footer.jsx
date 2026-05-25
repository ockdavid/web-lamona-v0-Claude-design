import { B, waLink } from '../lib.js';
import { IconWa, IconIG, IconFB } from '../icons.jsx';

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src="/assets/logo.png" alt="la Mona" className="footer-brand-logo" />
            </div>
            <p className="footer-tag">
              Joyas de plata y baño de oro, personalizadas con tu nombre o iniciales.
              Hecho a mano en el Perú.
            </p>
            <div style={{ display: 'flex', gap: 14 }}>
              <a
                href={B.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="Instagram"
              >
                <IconIG />
              </a>
              <a
                href={B.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="Facebook"
              >
                <IconFB />
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="WhatsApp"
              >
                <IconWa />
              </a>
            </div>
          </div>
          <div>
            <h4>Catálogo</h4>
            <ul>
              <li><a href="#catalogo">Collares</a></li>
              <li><a href="#catalogo">Anillos</a></li>
              <li><a href="#catalogo">Pulseras</a></li>
              <li><a href="#catalogo">Aretes</a></li>
              <li><a href="#catalogo">Conjuntos</a></li>
            </ul>
          </div>
          <div>
            <h4>Casa</h4>
            <ul>
              <li><a href="#nosotros">Nuestra historia</a></li>
              <li><a href="#proceso">Proceso</a></li>
              <li><a href="#personalizar">Personalizar</a></li>
              <li><a href="#instagram">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </li>
              <li>
                <a href={B.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a href={B.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} la Mona · Joyas de plata · Lima, Perú 🇵🇪</span>
          <div>
            <a href="#">Términos</a>
            <a href="#">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
