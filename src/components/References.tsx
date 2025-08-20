import React from 'react';
import { Star, Building2, CheckCircle } from 'lucide-react';

const References: React.FC = () => {
  const references = [
    {
      company: 'ABC Manufacturing Sp. z o.o.',
      industry: 'Produkcja',
      project: 'Wdrożenie systemu ERP Streamsoft',
      rating: 5,
      testimonial: 'Dzięki systemowi ERP od ADSM nasze procesy produkcyjne stały się znacznie bardziej efektywne. Zespół ADSM wykazał się profesjonalizmem na każdym etapie wdrożenia.'
    },
    {
      company: 'TechTrade Solutions',
      industry: 'Handel',
      project: 'Rozwiązania chmurowe i backup danych',
      rating: 5,
      testimonial: 'Bezpieczeństwo naszych danych jest teraz na najwyższym poziomie. ADSM zapewnił nam kompleksowe rozwiązanie backup w chmurze.'
    },
    {
      company: 'LogiFlow Logistics',
      industry: 'Logistyka',
      project: 'System zarządzania wagonami',
      rating: 5,
      testimonial: 'Dedykowane oprogramowanie do zarządzania flotą wagonów przekroczyło nasze oczekiwania. Mamy pełną kontrolę nad kosztami i czasami transportu.'
    },
    {
      company: 'GreenEnergy Terminals',
      industry: 'Energia',
      project: 'System zarządzania terminalem',
      rating: 5,
      testimonial: 'Strefa klienta dla naszego terminalu LPG działa bez zarzutu. Procesy przeładunkowe zostały zoptymalizowane, a bezpieczeństwo zwiększone.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Zadowolonych klientów' },
    { number: '15+', label: 'Lat doświadczenia' },
    { number: '1000+', label: 'Zrealizowanych projektów' },
    { number: '98%', label: 'Wskaźnik satysfakcji' }
  ];

  return (
    <section id="references" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Referencje</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Nasze sukcesy mierzy zadowolenie klientów. Sprawdź, co mówią o nas firmy, które już korzystają z naszych rozwiązań.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-50 rounded-lg p-6 hover:bg-blue-100 transition-colors duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-sm font-medium text-gray-700">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {references.map((reference, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Building2 className="h-6 w-6 text-blue-600 mr-2" />
                <div>
                  <h3 className="font-semibold text-gray-900">{reference.company}</h3>
                  <p className="text-sm text-gray-600">{reference.industry}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">{reference.project}</span>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(reference.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-700 italic">
                "{reference.testimonial}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Dołącz do grona zadowolonych klientów ADSM
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Skontaktuj się z nami
          </button>
        </div>
      </div>
    </section>
  );
};

export default References;