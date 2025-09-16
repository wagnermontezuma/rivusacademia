
import React from 'react';

const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF4D00] transition-colors duration-300">
    {children}
  </a>
);

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Entre em Contato</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Tem alguma dúvida? Fale conosco! Nossa equipe está pronta para te atender.
        </p>
        <div className="max-w-3xl mx-auto bg-[#2D2D2D] p-8 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="text-left">
            <p className="flex items-center gap-3 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF4D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>(91) 99999-9999</span>
            </p>
            <p className="flex items-center gap-3 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF4D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>contato@rivus.com.br</span>
            </p>
            <p className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF4D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>Av. Gov. Hélio da Mota Gueiros, 10, Ananindeua-PA</span>
            </p>
          </div>
          <div className="flex gap-6">
            <SocialIcon href="#">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.012 2.002c-5.517 0-9.99 4.473-9.99 9.99 0 2.25.748 4.332 2.015 6.01l-1.326 4.815 4.938-1.303c1.61.802 3.41 1.27 5.362 1.27 5.517 0 9.99-4.473 9.99-9.99s-4.473-9.99-9.99-9.99zm0 18.29c-1.78-.002-3.48-.48-4.9-1.35l-.352-.208-3.648.958.973-3.562-.23-.368c-.96-1.48-1.47-3.23-1.47-5.06 0-4.59 3.73-8.32 8.32-8.32 4.59 0 8.32 3.73 8.32 8.32 0 4.59-3.73 8.32-8.32 8.32zm4.52-6.25c-.246-.124-1.45-.715-1.674-.795-.225-.08-.387-.123-.55.123-.16.246-.63.795-.772.957-.145.16-.29.184-.533.06-.246-.123-1.03-.38-1.962-1.21-.724-.65-1.21-1.45-1.35-1.695-.144-.246-.015-.38.11-.504.11-.11.246-.288.37-.432.122-.144.162-.246.245-.41.082-.163.04-.305-.02-.43s-.55-1.32-.752-1.81c-.2-.48-.4-.41-.55-.41-.144 0-.306-.015-.47-.015s-.43.06-.653.307c-.225.247-.86.84-1.054 2.035-.195 1.192.885 2.36 1.01 2.52.123.163 1.74 2.65 4.22 3.72.59.252 1.05.403 1.41.516.6.195 1.14.167 1.56.1.47-.074 1.45-.59 1.65-1.16.2-.57.2-1.05.144-1.16-.057-.11-.22-.17-.464-.294z"></path></svg>
            </SocialIcon>
            <SocialIcon href="#">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 0C9.58 0 9.22.01 8.16.059c-1.109.05-1.897.227-2.613.502a6.51 6.51 0 00-2.288 1.567 6.51 6.51 0 00-1.567 2.288c-.275.716-.452 1.504-.502 2.613C.01 9.22 0 9.58 0 12s.01 2.78.059 3.84c.05 1.109.227 1.897.502 2.613a6.51 6.51 0 001.567 2.288 6.51 6.51 0 002.288 1.567c.716.275 1.504.452 2.613.502C9.22 23.99 9.58 24 12 24s2.78-.01 3.84-.059c1.109-.05 1.897-.227 2.613-.502a6.51 6.51 0 002.288-1.567 6.51 6.51 0 001.567-2.288c.275-.716.452-1.504.502-2.613C23.99 14.78 24 14.42 24 12s-.01-2.78-.059-3.84c-.05-1.109-.227-1.897-.502-2.613a6.51 6.51 0 00-1.567-2.288 6.51 6.51 0 00-2.288-1.567c-.716-.275-1.504-.452-2.613-.502C14.78.01 14.42 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" clipRule="evenodd" /></svg>
            </SocialIcon>
            <SocialIcon href="#">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
