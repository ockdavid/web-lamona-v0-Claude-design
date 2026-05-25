import { useState } from 'react';
import { waLink } from '../lib.js';
import { IconWa } from '../icons.jsx';

const METALS = [
  { id: 'plata', label: 'Plata 925',   color: '#D8D4CB' },
  { id: 'oro',   label: 'Baño de oro', color: '#C9A86B' },
  { id: 'rose',  label: 'Oro rosa',    color: '#D8A99A' },
];

const CHAINS = [
  { id: 'rolo',      label: 'Rolo' },
  { id: 'veneciana', label: 'Veneciana' },
  { id: 'figaro',    label: 'Fígaro' },
];

const METAL_BG = {
  plata: 'radial-gradient(circle at 35% 30%, #FAFAF8 0%, #DDDAD2 38%, #A8A39B 70%, #6F6A62 100%)',
  oro:   'radial-gradient(circle at 35% 30%, #FBF1E0 0%, #E2C595 38%, #B8985F 70%, #8C6E3F 100%)',
  rose:  'radial-gradient(circle at 35% 30%, #F8E4DA 0%, #E2BCA8 38%, #B68574 70%, #8A5D4E 100%)',
};
const FONT_COLOR = { plata: '#363330', oro: '#4A371C', rose: '#4D2A20' };

export default function Personalizador() {
  const [name, setName] = useState('Lucía');
  const [metal, setMetal] = useState('oro');
  const [chain, setChain] = useState('rolo');

  const fontSize = name.length > 8 ? 38 : name.length > 5 ? 48 : 60;

  return (
    <section className="section section-alt" id="personalizar">
      <div className="wrap">
        <div className="perso-grid">
          <div className="perso-stage">
            <span className="perso-corner">PREVIEW · {metal.toUpperCase()}</span>
            <span className="perso-corner-r">PLATA 925</span>
            <svg className="perso-chain-svg" viewBox="0 0 280 200" preserveAspectRatio="none">
              <path
                d="M 30 0 Q 140 130, 250 0"
                fill="none"
                stroke="var(--ink-mute)"
                strokeWidth="1"
                strokeDasharray="2 3"
                opacity="0.5"
              />
            </svg>
            <div className="perso-chain">
              <div className="perso-pendant" style={{ background: METAL_BG[metal] }}>
                <div className="perso-name" style={{ color: FONT_COLOR[metal], fontSize }}>
                  {name || '—'}
                </div>
              </div>
            </div>
          </div>

          <div className="perso-controls">
            <span className="kicker">— Personaliza en vivo</span>
            <h3>Tu nombre, <em>tu pieza</em>.</h3>
            <p>
              Escribe lo que llevarás contigo. Grabamos a mano con tipografía
              cursiva o de imprenta — máximo 12 caracteres por línea.
              Confirmamos el diseño por WhatsApp antes de grabar.
            </p>

            <div className="field">
              <label className="field-label">Nombre o iniciales</label>
              <input
                className="field-input"
                value={name}
                onChange={(e) => setName(e.target.value.slice(0, 12))}
                placeholder="Lucía"
                maxLength={12}
              />
            </div>

            <div className="field">
              <label className="field-label">Material</label>
              <div className="field-row">
                {METALS.map((m) => (
                  <button
                    key={m.id}
                    className={'chip ' + (metal === m.id ? 'active' : '')}
                    onClick={() => setMetal(m.id)}
                  >
                    <span className="swatch" style={{ background: m.color }}></span>
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="field">
              <label className="field-label">Tipo de cadena</label>
              <div className="field-row">
                {CHAINS.map((c) => (
                  <button
                    key={c.id}
                    className={'chip ' + (chain === c.id ? 'active' : '')}
                    onClick={() => setChain(c.id)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="perso-price">
              <span className="perso-price-amt">S/. 50</span>
              <span className="perso-price-lbl">precio único · envío incluido en Lima</span>
              <a
                href={waLink(
                  `Hola! Quiero personalizar con: "${name}" — ${METALS.find((m) => m.id === metal).label}, cadena ${chain} 🌸`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ marginLeft: 'auto' }}
              >
                <IconWa width="14" height="14" /> Pedir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
