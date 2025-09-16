import React from 'react';

const servicesData = [
  {
    title: 'Musculação',
    description: 'Equipamentos de última geração para você atingir seus objetivos de força e hipertrofia.',
    image: '/hero1.png',
  },
  {
    title: 'Funcional',
    description: 'Treinos dinâmicos que trabalham o corpo de forma integrada, melhorando sua performance diária.',
    image: '/hero2.png',
  },
  {
    title: 'Aulas Coletivas',
    description: 'Zumba, Spinning, Yoga e mais. Energia e diversão em grupo para queimar calorias.',
    image: '/hero3.png',
  },
  {
    title: 'Lutas',
    description: 'Boxe, Muay Thai e Jiu-Jitsu. Desenvolva disciplina, defesa pessoal e condicionamento físico.',
    image: '/hero1.png',
  },
  {
    title: 'Personal Trainer',
    description: 'Acompanhamento individualizado para acelerar seus resultados com segurança e eficiência.',
    image: '/hero2.png',
  },
  {
    title: 'Avaliação Física',
    description: 'Análise completa da sua composição corporal e performance para traçar metas precisas.',
    image: '/hero3.png',
  },
];

const ServiceCard: React.FC<{ service: typeof servicesData[0] }> = ({ service }) => (
  <div className="bg-[#2D2D2D] rounded-lg overflow-hidden group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
    <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
      <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
      <a href="#" className="font-semibold text-[#FF4D00] hover:underline">
        Saiba Mais &rarr;
      </a>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-[#222]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-2">Nossos Serviços</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Oferecemos uma gama completa de modalidades para todos os níveis e objetivos. Encontre a que mais combina com você.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;