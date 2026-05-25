import { B, POSTS } from '../lib.js';
import { IconIG } from '../icons.jsx';

export default function Instagram() {
  return (
    <section className="section section-alt" id="instagram">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-left">
            <span className="kicker">— Síguenos en Instagram</span>
            <h2 className="section-title">
              {B.instagramHandle.replace('@', '')}<em>.</em>
            </h2>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              justifySelf: 'end',
              maxWidth: 380,
            }}
          >
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
              {B.followers} seguidoras y subiendo. Nuevas piezas cada semana,
              clientas reales y un poco de detrás de cámaras.
            </p>
            <a
              href={B.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ alignSelf: 'flex-start' }}
            >
              <IconIG width="14" height="14" /> Seguir
            </a>
          </div>
        </div>

        <div className="ig-grid">
          {POSTS.map((p, i) => (
            <a
              key={i}
              className="ig-tile"
              href={B.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={`/assets/${p}`} alt="" loading="lazy" />
              <div className="ig-overlay">
                <IconIG width="20" height="20" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
