import { B } from '../lib.js';
import { IconIG, IconFB } from '../icons.jsx';

export default function Nosotros() {
  return (
    <section className="section wrap" id="nosotros">
      <div className="nosotros-grid">
        <div className="nosotros-imgs">
          <img
            className="nosotros-img-big"
            src="/assets/post-7.jpg"
            alt="Detrás de la marca la Mona"
            loading="lazy"
          />
          <img
            className="nosotros-img-small"
            src="/assets/foto-51.jpeg"
            alt="Colección la Mona"
            loading="lazy"
          />
        </div>
        <div className="nosotros-text">
          <span className="kicker">— Quiénes somos</span>
          <h2 className="section-title">
            Hecho con amor <em>en Perú</em>.
          </h2>
          <p>
            Somos <strong>la Mona</strong>, una marca peruana de joyería artesanal.
            Trabajamos con plata de ley y baño de oro para crear piezas únicas
            que cuentan historias. Cada joya sale de nuestras manos con cuidado —
            desde el diseño hasta el empaque.
          </p>
          <p>Porque sabemos que cuando regalas una joya, regalas un momento.</p>

          <div className="nosotros-valores">
            <div className="valor">
              <strong>{B.followers}</strong>
              <span>seguidoras en Instagram</span>
            </div>
            <div className="valor">
              <strong>{B.totalProducts}+</strong>
              <span>diseños únicos</span>
            </div>
            <div className="valor">
              <strong>100%</strong>
              <span>hecho en Perú 🇵🇪</span>
            </div>
          </div>

          <div className="nosotros-redes">
            <a href={B.instagram} target="_blank" rel="noopener noreferrer" className="red-link">
              <IconIG /> {B.instagramHandle}
            </a>
            <a href={B.facebook} target="_blank" rel="noopener noreferrer" className="red-link">
              <IconFB /> Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
