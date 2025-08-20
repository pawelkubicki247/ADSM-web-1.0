import React from 'react';
import { Award, Target, Users } from 'lucide-react';

const AboutUs: React.FC = () => {
  const methodologies = [
    {
      name: 'PRINCE2',
      icon: Award,
      description: 'Structured project management methodology',
      link: '#'
    },
    {
      name: 'AGILE',
      icon: Target,
      description: 'Flexible development approach',
      link: 'https://agilemanifesto.org/'
    },
    {
      name: 'SCRUM',
      icon: Users,
      description: 'Framework for complex product development',
      link: 'https://scrumguides.org/'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O nas</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-lg leading-relaxed text-gray-700 mb-12">
            <p className="mb-6">
              Kompleksowe wsparcie dla firm jest głównym celem naszej działalności. Skupiamy się na identyfikacji problemów występujących w firmach i zajmujemy się usprawnianiem przetwarzania danych, związanych z obsługą oferowanych programów jest nierozerwalną częścią naszej działalności. Celem jest zoptymalizowanie pracy naszego klienta – poprzez stworzenie bezpiecznych narzędzi i środowisk do ich przechowywania oraz udostępnienie na zewnątrz narzędzi do aktywnej współpracy z jego kontrahentami.
            </p>
            <p>
              Specjalizujemy się w kompleksowych wdrożeniach i wsparciu w obsłudze systemów ERP. Wyróżnia nas szczególna dbałość o analizę potrzeb klienta – ten etap jest niezwykle ważny i pozwala zwerbalizować potrzeby i oczekiwania Klienta z możliwościami i potencjalnymi rozwiązaniami bazującymi na naszym bogatym doświadczeniu w pracy z Klientami. Klient dostaje produkt, który oczekiwał. Oferujemy również obsługę powdrożeniową – proponujemy naszym klientom umowy serwisowe, obsługę w wysokim standardzie, profesjonalne szkolenia, dzięki którym użytkownicy systemu szybko i komfortowo uczą się wykorzystywać system w swoich codziennych zadaniach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {methodologies.map((methodology, index) => (
              <a
                key={index}
                href={methodology.link}
                target={methodology.link.startsWith('http') ? '_blank' : '_self'}
                rel={methodology.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <methodology.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {methodology.name}
                </h3>
                <p className="text-gray-600">{methodology.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;