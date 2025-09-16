import React from 'react';

// FIX: Changed icon type from JSX.Element to React.ReactNode to resolve "Cannot find namespace 'JSX'" error.
const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-[#2D2D2D] p-8 rounded-lg">
    <div className="flex items-center gap-4">
      <div className="text-[#FF4D00]">{icon}</div>
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
    <p className="mt-4 text-gray-300">{children}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="quem-somos" className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Feita para <span className="text-[#FF4D00]">você</span>, pensada no seu <span className="text-[#FF4D00]">bem-estar</span>.
            </h2>
            <p className="text-gray-300 mb-4">
              Nossa missão é proporcionar uma experiência de treino única, com equipamentos de ponta, instrutores qualificados e um ambiente que inspira a superação.
            </p>
            <p className="text-gray-300">
              Na Rivus, acreditamos que todos podem ir além. Nossos valores são pautados no respeito, na dedicação e na busca contínua pela excelência.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2 1M4 7l2-1M4 7v2.5M12 21.5v-2.5M12 18.5l-2 1m2-1l2 1" /></svg>}
              title="Ambientes Modernos"
            >
              Espaços amplos e climatizados, projetados para o máximo conforto e performance durante seus treinos.
            </FeatureCard>
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.283.356-1.857m0 0a3.004 3.004 0 015.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
              title="Instrutores Especializados"
            >
              Um time de profissionais certificados e prontos para te guiar em cada etapa da sua evolução.
            </FeatureCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;