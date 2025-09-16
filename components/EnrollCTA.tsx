import React from 'react';
import Button from './ui/Button';

const EnrollCTA: React.FC = () => {
  return (
    <section id="matricula-cta" className="bg-[#1A1A1A]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('/hero1.png')" }}>
            {/* Image background */}
          </div>
          <div className="flex flex-col justify-center p-8 md:p-16 bg-[#2D2D2D]">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Pronto para começar?
            </h2>
            <p className="text-gray-300 mb-8">
              Junte-se à família Rivus e dê o primeiro passo em direção à sua melhor versão. Selecione a unidade e matricule-se agora.
            </p>
            <form className="flex flex-col gap-6">
              <div>
                <label htmlFor="unit-select" className="sr-only">Selecione a Unidade</label>
                <select id="unit-select" name="unit" className="w-full bg-[#1A1A1A] border border-gray-600 rounded-md p-4 text-lg focus:ring-[#FF4D00] focus:border-[#FF4D00]">
                  <option>Rivus Ananindeua</option>
                  <option>Rivus Belém (Em Breve)</option>
                </select>
              </div>
              <Button variant="primary" type="submit" className="py-4 text-lg">
                Matricule-se Agora
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollCTA;