import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

const slides = [
  {
    id: 1,
    title: 'Transforme seu corpo e mente',
    subtitle: 'Experimente nossa metodologia única de treinamento',
    image: '/hero1.png',
  },
  {
    id: 2,
    title: 'Equipamentos de última geração',
    subtitle: 'Tecnologia para impulsionar seus resultados',
    image: '/hero2.png',
  },
  {
    id: 3,
    title: 'Professores especializados',
    subtitle: 'Guiando você em cada etapa da sua jornada fitness',
    image: '/hero3.png',
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${slide.image})`, opacity: index === currentSlide ? 1 : 0 }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      ))}
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#F0F0F0]">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-[#F0F0F0]">
          {slides[currentSlide].subtitle}
        </p>
        <Button variant="primary" size="lg">Comece Agora</Button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-[#FF4D00]' : 'bg-[#F0F0F0]'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;