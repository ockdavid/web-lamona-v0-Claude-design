const STEPS = [
  { n: '01', h: 'Eliges',      em: 'tu joya',  p: 'Escoges del catálogo o personalizas con tu nombre/iniciales. Coordinamos todo por WhatsApp en minutos.',     photo: 'foto-44.jpeg' },
  { n: '02', h: 'Confirmamos', em: 'diseño',   p: 'Te enviamos foto o boceto del grabado antes de empezar. Recién cuando das el OK comenzamos a trabajar la pieza.', photo: 'foto-30.jpeg' },
  { n: '03', h: 'Grabado',     em: 'a mano',   p: 'Tu pieza se graba a mano en plata 925 o con baño de oro 18k. Pulida y revisada antes de ir al empaque.',      photo: 'foto-29.jpeg' },
  { n: '04', h: 'A tu',        em: 'puerta',   p: 'Empaque de regalo incluido. Pago contra entrega en Lima, envío a todo el Perú vía Olva o Shalom.',            photo: 'foto-26.jpeg' },
];

export default function Proceso() {
  return (
    <section className="section section-deep" id="proceso">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-left">
            <span className="kicker">— Proceso</span>
            <h2 className="section-title" style={{ color: 'var(--paper)' }}>
              Cuatro pasos,<br />una sola <em style={{ color: 'var(--metal)' }}>pieza</em>.
            </h2>
          </div>
          <p className="section-head-right" style={{ color: 'rgba(251,248,243,0.7)' }}>
            No producimos en serie. Cada pedido se confirma y se trabaja
            de forma individual — y todo lo coordinamos por WhatsApp.
          </p>
        </div>

        <div className="proceso-grid">
          {STEPS.map((s, i) => (
            <div key={i} className="proceso-step">
              <span className="proceso-num">— {s.n}</span>
              <h3 className="proceso-h">{s.h} <em>{s.em}</em></h3>
              <p>{s.p}</p>
              <div className="proceso-img">
                <img src={`/assets/${s.photo}`} alt="" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
