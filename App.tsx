
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Structure from './components/Structure';
import Location from './components/Location';
import EnrollCTA from './components/EnrollCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="bg-[#1A1A1A] text-[#F0F0F0] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Structure />
        <Location />
        <EnrollCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
