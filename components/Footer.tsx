import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] text-gray-400">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo className="h-10 w-auto mb-4" />
            <p className="text-sm">Sua melhor versão começa aqui.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-[#FF4D00]">Home</a></li>
              <li><a href="#quem-somos" className="hover:text-[#FF4D00]">Quem Somos</a></li>
              <li><a href="#servicos" className="hover:text-[#FF4D00]">Serviços</a></li>
              <li><a href="#estrutura" className="hover:text-[#FF4D00]">Estrutura</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#FF4D00]">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-[#FF4D00]">Termos de Uso</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Siga-nos</h4>
             <div className="flex gap-4">
               {/* Icons here - simple placeholders for now */}
               <a href="#" className="hover:text-[#FF4D00]">IG</a>
               <a href="#" className="hover:text-[#FF4D00]">FB</a>
               <a href="#" className="hover:text-[#FF4D00]">WA</a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Rivus Gym. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;