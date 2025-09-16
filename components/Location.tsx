import React from 'react';
import Button from './ui/Button';

const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 bg-[#222]">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-2">Nossa Localização</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Encontre a unidade Rivus mais perto de você.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#2D2D2D] p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <label htmlFor="state" className="block text-sm font-medium text-gray-300 mb-2">Estado</label>
              <select id="state" name="state" className="w-full bg-[#1A1A1A] border border-gray-600 rounded-md p-3 focus:ring-[#FF4D00] focus:border-[#FF4D00]">
                <option>Pará</option>
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-2">Cidade</label>
              <select id="city" name="city" className="w-full bg-[#1A1A1A] border border-gray-600 rounded-md p-3 focus:ring-[#FF4D00] focus:border-[#FF4D00]">
                <option>Ananindeua</option>
              </select>
            </div>
          </div>
          
          <div className="bg-[#1A1A1A] rounded-lg overflow-hidden flex flex-col md:flex-row">
            <img src="/hero2.png" alt="Fachada Rivus Ananindeua" className="w-full md:w-1/3 h-64 md:h-auto object-cover" />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#FF4D00]">Rivus Ananindeua</h3>
                <p className="mt-2 text-gray-300">
                  Av. Gov. Hélio da Mota Gueiros, 10 - Coqueiro, Ananindeua - PA, 67120-370
                </p>
              </div>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-6 inline-block w-full sm:w-auto"
              >
                <Button variant="outline" className="w-full">
                  Abrir no Google Maps
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;