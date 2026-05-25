import { useMemo, useState } from 'react';
import { B, PRODUCTS, CATS, waLink } from '../lib.js';

const VISUAL_CATS = [
  { id: 'collar',  label: 'Collares',  count: 25, photo: 'foto-27.jpeg' },
  { id: 'anillo',  label: 'Anillos',   count: 13, photo: 'foto-15.jpeg' },
  { id: 'pulsera', label: 'Pulseras',  count: 19, photo: 'foto-30.jpeg' },
  { id: 'arete',   label: 'Aretes',    count:  7, photo: 'foto-21.jpeg' },
];

export function Categorias({ onPick }) {
  return (
    <section className="section wrap">
      <div className="section-head">
        <div className="section-head-left">
          <span className="kicker">— Categorías</span>
          <h2 className="section-title">
            Diseñadas para <em>quedarse</em><br />contigo.
          </h2>
        </div>
        <p className="section-head-right">
          69 piezas en cuatro familias, todas a S/. 50. Plata 925 y baño de oro,
          con la opción de grabar tu nombre o iniciales en cualquiera de ellas.
        </p>
      </div>

      <div className="cat-grid">
        {VISUAL_CATS.map((c) => (
          <a
            key={c.id}
            className="cat-card"
            href="#catalogo"
            onClick={() => onPick && onPick(c.id)}
          >
            <div className="cat-img">
              <img src={`/assets/${c.photo}`} alt={c.label} loading="lazy" />
            </div>
            <div className="cat-meta">
              <span className="cat-name">{c.label}<span className="cat-arrow">↗</span></span>
              <span className="cat-count">{c.count} piezas</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function Catalogo({ filter, setFilter }) {
  const filtered = useMemo(
    () => (filter === 'todos' ? PRODUCTS : PRODUCTS.filter((p) => p.cat === filter)),
    [filter]
  );
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? filtered : filtered.slice(0, 12);

  return (
    <section className="section wrap" id="catalogo">
      <div className="section-head">
        <div className="section-head-left">
          <span className="kicker">— Catálogo completo</span>
          <h2 className="section-title">
            Elige tu <em>joya favorita</em>.
          </h2>
        </div>
        <p className="section-head-right">
          Las 69 piezas disponibles ahora mismo. Plata 925 y baño de oro 18k,
          con personalización incluida. Pago contra entrega en Lima.
        </p>
      </div>

      <div className="filter-bar">
        {CATS.map((c) => (
          <button
            key={c.id}
            className={'filter-btn' + (filter === c.id ? ' active' : '')}
            onClick={() => { setFilter(c.id); setShowAll(false); }}
          >
            {c.label} <span className="filter-count">{c.count}</span>
          </button>
        ))}
      </div>

      <div className="products">
        {visible.map((p) => (
          <a
            key={p.id}
            className="product"
            href={waLink(`Hola! Me interesa el producto: ${p.name} 🌸`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="product-img-wrap">
              {p.tag && (
                <span className={'product-tag' + (p.tag === 'Personalizable' ? ' tag-new' : '')}>
                  {p.tag}
                </span>
              )}
              <img className="product-img-real" src={`/assets/${p.photo}`} alt={p.name} loading="lazy" />
            </div>
            <div className="product-meta">
              <div>
                <div className="product-cat">{p.cat}</div>
                <div className="product-name">{p.name}</div>
              </div>
              <div className="product-price">{B.price}</div>
            </div>
          </a>
        ))}
      </div>

      {filtered.length > 12 && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 56 }}>
          <button className="btn btn-ghost" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Ver menos' : `Ver las ${filtered.length} piezas`}{' '}
            <span className="arrow">{showAll ? '↑' : '↓'}</span>
          </button>
        </div>
      )}
    </section>
  );
}
