import React from 'react';

const galleryItems = [
  { name: 'Recepção', image: '/hero1.png' },
  { name: 'Área de Cardio', image: '/hero2.png' },
  { name: 'Peso Livre', image: '/hero3.png' },
  { name: 'Box de Crossing', image: '/hero1.png' },
  { name: 'Sala Coletiva', image: '/hero2.png' },
  { name: 'Sala de Luta', image: '/hero3.png' },
];

const Structure: React.FC = () => {
  return (
    <section id="estrutura" className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-2">Nossa Estrutura</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Conheça os ambientes que preparamos para você ter a melhor experiência de treino.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden group cursor-pointer">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-300">{item.name}</h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Structure;