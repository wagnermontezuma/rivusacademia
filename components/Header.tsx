import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import Logo from './Logo';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Quem Somos', href: '#quem-somos' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Estrutura', href: '#estrutura' },
  { name: 'Localização', href: '#localizacao' },
  { name: 'Contato', href: '#contato' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1A1A1A]/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map(link => (
            <a key={link.name} href={link.href} className="text-[#F0F0F0] font-semibold hover:text-[#FF4D00] transition-colors duration-300">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="primary">Matricule-se</Button>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#F0F0F0] focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-[#1A1A1A] transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
         <div className="flex justify-end p-6">
             <button onClick={() => setIsMenuOpen(false)} className="text-[#F0F0F0]">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
             </button>
         </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
          {NAV_LINKS.map(link => (
            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-2xl text-[#F0F0F0] font-bold hover:text-[#FF4D00] transition-colors duration-300">
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="mt-8" onClick={() => setIsMenuOpen(false)}>Matricule-se</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;