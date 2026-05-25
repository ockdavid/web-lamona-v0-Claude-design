import { useState } from 'react';

import Nav from './components/Nav.jsx';
import Hero, { Marquee } from './components/Hero.jsx';
import Catalogo, { Categorias } from './components/Catalogo.jsx';
import Personalizador from './components/Personalizador.jsx';
import Proceso from './components/Proceso.jsx';
import Nosotros from './components/Nosotros.jsx';
import Instagram from './components/Instagram.jsx';
import FAQ, { CTA } from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [filter, setFilter] = useState('todos');

  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Categorias onPick={(id) => setFilter(id)} />
      <Personalizador />
      <Catalogo filter={filter} setFilter={setFilter} />
      <Proceso />
      <Nosotros />
      <Instagram />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
