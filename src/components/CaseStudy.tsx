import React, { useState } from 'react';
import { ChevronDown, ChevronRight, TrendingUp, Clock, DollarSign, Shield } from 'lucide-react';

const CaseStudy: React.FC = () => {
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  const caseStudies = [
    {
      title: 'Wdrożenie systemu ERP w firmie produkcyjnej',
      company: 'Zakład Produkcyjny "MetalWork"',
      industry: 'Metalurgia',
      challenge: 'Firma borykała się z problemami w zarządzaniu produkcją, magazynem i finansami. Brak integracji między działami powodował błędy i opóźnienia.',
      solution: 'Wdrożenie kompleksowego systemu ERP Streamsoft z modułami: Zarządzanie Produkcją, Handlowo-Magazynowy, Finanse i Księgowość.',
      results: [
        'Redukcja czasu przetwarzania zamówień o 40%',
        'Zwiększenie efektywności produkcji o 25%',
        'Eliminacja błędów w fakturowaniu',
        'Poprawa kontroli kosztów o 30%'
      ],
      timeline: '6 miesięcy',
      investment: 'ROI osiągnięty w 14 miesięcy'
    },
    {
      title: 'Migracja do chmury i wdrożenie systemu backup',
      company: 'Firma Handlowa "TradePro"',
      industry: 'Handel detaliczny',
      challenge: 'Stary serwer powodował częste awarie, brak kopii zapasowych stanowił zagrożenie dla ciągłości biznesu.',
      solution: 'Migracja infrastruktury do chmury z wdrożeniem automatycznego systemu backup i monitoringu.',
      results: [
        'Zwiększenie dostępności systemu do 99.9%',
        'Redukcja kosztów IT o 35%',
        'Automatyczne kopie zapasowe co 4 godziny',
        'Możliwość pracy zdalnej dla wszystkich pracowników'
      ],
      timeline: '3 miesiące',
      investment: 'Redukcja kosztów o 35% rocznie'
    },
    {
      title: 'Dedykowany system zarządzania logistyką',
      company: 'Transport Solutions Sp. z o.o.',
      industry: 'Transport i logistyka',
      challenge: 'Brak kontroli nad flotą wagonów, problemy z rozliczaniem kosztów transportu i czasów postojów.',
      solution: 'Opracowanie i wdrożenie dedykowanego systemu zarządzania wagonami z funkcjami monitoringu i raportowania.',
      results: [
        'Poprawa wykorzystania floty o 20%',
        'Redukcja kosztów postojów o 45%',
        'Automatyzacja raportowania',
        'Zwiększenie precyzji rozliczeń'
      ],
      timeline: '8 miesięcy',
      investment: 'Oszczędności 200 000 zł rocznie'
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedCase(expandedCase === index ? null : index);
  };

  return (
    <section id="case-study" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Case Study</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Poznaj szczegółowe historie sukcesu naszych klientów i zobacz, jak nasze rozwiązania przyczyniły się do rozwoju ich biznesu.
          </p>
        </div>

        <div className="space-y-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="font-medium">{study.company}</span>
                      <span>•</span>
                      <span>{study.industry}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-blue-600">
                    {expandedCase === index ? (
                      <ChevronDown className="h-5 w-5" />
                    ) : (
                      <ChevronRight className="h-5 w-5" />
                    )}
                  </div>
                </div>
              </div>

              {expandedCase === index && (
                <div className="px-6 pb-6 border-t border-gray-200">
                  <div className="pt-6 space-y-6">
                    {/* Challenge */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Shield className="h-5 w-5 text-red-500 mr-2" />
                        Wyzwanie
                      </h4>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <TrendingUp className="h-5 w-5 text-blue-500 mr-2" />
                        Rozwiązanie
                      </h4>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <DollarSign className="h-5 w-5 text-green-500 mr-2" />
                        Rezultaty
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start text-gray-700">
                            <span className="text-green-500 mr-2">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Timeline and Investment */}
                    <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-gray-500 mr-2" />
                        <div>
                          <div className="font-semibold text-gray-900">Czas realizacji</div>
                          <div className="text-gray-600">{study.timeline}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-5 w-5 text-gray-500 mr-2" />
                        <div>
                          <div className="font-semibold text-gray-900">Zwrot z inwestycji</div>
                          <div className="text-gray-600">{study.investment}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Chcesz osiągnąć podobne rezultaty?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Każdy projekt zaczynamy od dogłębnej analizy Twoich potrzeb. Skontaktuj się z nami, aby omówić jak możemy pomóc w rozwoju Twojego biznesu.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Omów swój projekt
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;