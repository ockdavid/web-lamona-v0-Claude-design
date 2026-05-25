import { useState } from 'react';
import { waLink } from '../lib.js';
import { IconWa } from '../icons.jsx';

const QS = [
  {
    q: '¿Por qué todas a S/. 50?',
    a: 'Es el corazón de la Mona: una sola tarifa, sin sorpresas. Las 69 piezas del catálogo cuestan exactamente lo mismo, con personalización incluida y sin cobrar extra por grabado.',
  },
  {
    q: '¿La plata se pone negra?',
    a: 'Toda plata 925 puede oscurecerse con el tiempo por contacto con cremas, agua de mar o sudor. Cada pedido viene con un paño de pulido — y si la tuya pierde brillo, escríbenos.',
  },
  {
    q: '¿Cuánto demora un pedido personalizado?',
    a: 'Entre 3 y 6 días hábiles. Te enviamos foto o boceto antes de empezar el grabado para que confirmes el diseño.',
  },
  {
    q: '¿Hacen envíos fuera de Lima?',
    a: 'Sí, enviamos a todo el Perú vía Olva y Shalom (24-72h). Coordinamos el método por WhatsApp.',
  },
  {
    q: '¿Cómo pago?',
    a: 'Yape, Plin, transferencia BCP/Interbank, o pago contra entrega dentro de Lima Metropolitana. Todo lo coordinamos por WhatsApp.',
  },
  {
    q: '¿Puedo devolver una pieza?',
    a: 'Las piezas no personalizadas tienen 7 días de cambio. Las personalizadas no se devuelven, pero si hay un defecto la reponemos sin costo.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="faq-grid">
          <div>
            <span className="kicker">— Preguntas frecuentes</span>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              Resolvemos<br /><em>todo</em>.
            </h2>
            <p
              style={{
                marginTop: 24,
                fontSize: 15,
                color: 'var(--ink-soft)',
                maxWidth: 340,
              }}
            >
              ¿No encuentras lo que buscas? Escríbenos por WhatsApp,
              normalmente respondemos en menos de una hora.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ marginTop: 24 }}
            >
              <IconWa width="14" height="14" /> Hablar con Mona
            </a>
          </div>
          <div className="faq-list">
            {QS.map((it, i) => (
              <div key={i} className={'faq-item' + (open === i ? ' open' : '')}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  {it.q}
                  <span className="faq-toggle">+</span>
                </button>
                <div className="faq-a">{it.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="newsletter">
      <div className="wrap newsletter-inner">
        <h2>¿Lista para tu<br /><em>joya?</em></h2>
        <div>
          <p
            style={{
              color: 'rgba(251,248,243,0.75)',
              fontSize: 16,
              lineHeight: 1.6,
              margin: '0 0 24px',
            }}
          >
            Escríbenos por WhatsApp y lo resolvemos en minutos.
            Pago contra entrega en Lima, envíos a todo el Perú.
          </p>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-wa-big">
            <IconWa width="20" height="20" /> +51 997 918 216
          </a>
        </div>
      </div>
    </section>
  );
}
