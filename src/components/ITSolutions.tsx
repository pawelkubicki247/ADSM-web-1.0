import React, { useState } from 'react';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Settings, 
  Users, 
  BarChart3, 
  FileText, 
  Truck, 
  Factory, 
  Package, 
  Calculator,
  ArrowLeft,
  Building2,
  Cog
} from 'lucide-react';

const ITSolutions: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);
  const [showFixedAssetsDetails, setShowFixedAssetsDetails] = useState(false);
  const [showProductionDetails, setShowProductionDetails] = useState(false);

  const solutions = [
    {
      id: 'streamsoft',
      title: 'Streamsoft Prestiż',
      description: 'Kompleksowy system ERP dla firm produkcyjnych i handlowych',
      icon: Server,
      features: [
        'Zarządzanie produkcją',
        'Handel i magazyn',
        'Finanse i księgowość',
        'Kadry i płace',
        'CRM',
        'Controlling'
      ]
    },
    {
      id: 'dedicated',
      title: 'Oprogramowanie dedykowane',
      description: 'Rozwiązania szyte na miarę Twojego biznesu',
      icon: Settings,
      features: [
        'Analiza potrzeb',
        'Projektowanie architektury',
        'Rozwój aplikacji',
        'Integracja z istniejącymi systemami',
        'Wsparcie i rozwój',
        'Szkolenia użytkowników'
      ]
    },
    {
      id: 'cloud',
      title: 'Rozwiązania chmurowe',
      description: 'Bezpieczne i skalowalne usługi w chmurze',
      icon: Cloud,
      features: [
        'Migracja do chmury',
        'Backup w chmurze',
        'Infrastruktura jako usługa',
        'Monitoring 24/7',
        'Skalowanie zasobów',
        'Bezpieczeństwo danych'
      ]
    }
  ];

  const streamsoftModules = [
    {
      id: 'production-management',
      name: 'Zarządzanie produkcją',
      icon: Factory,
      description: 'Kompleksowe zarządzanie procesami produkcyjnymi',
      onClick: () => setShowProductionDetails(true)
    },
    {
      name: 'Handel i magazyn',
      icon: Package,
      description: 'Obsługa sprzedaży, zakupów i magazynowania'
    },
    {
      name: 'Finanse i księgowość',
      icon: Calculator,
      description: 'Pełna obsługa finansowo-księgowa'
    },
    {
      id: 'fixed-assets',
      name: 'Środki trwałe',
      icon: Building2,
      description: 'Zarządzanie majątkiem trwałym i amortyzacją',
      onClick: () => setShowFixedAssetsDetails(true)
    },
    {
      name: 'Kadry i płace',
      icon: Users,
      description: 'Zarządzanie zasobami ludzkimi'
    },
    {
      name: 'CRM',
      icon: Users,
      description: 'Zarządzanie relacjami z klientami'
    },
    {
      name: 'Controlling',
      icon: BarChart3,
      description: 'Analiza i kontrola wyników finansowych'
    },
    {
      name: 'Raporty',
      icon: FileText,
      description: 'Zaawansowane raportowanie i analizy'
    }
  ];

  const dedicatedProjects = [
    {
      name: 'System zarządzania wagonami',
      icon: Truck,
      description: 'Dedykowane rozwiązanie dla firm transportowych',
      features: ['Śledzenie lokalizacji', 'Zarządzanie flotą', 'Optymalizacja tras']
    },
    {
      name: 'Portal B2B',
      icon: Users,
      description: 'Platforma współpracy z kontrahentami',
      features: ['Zamówienia online', 'Katalog produktów', 'Historia transakcji']
    },
    {
      name: 'System zarządzania terminalem',
      icon: Database,
      description: 'Rozwiązanie dla terminali przeładunkowych',
      features: ['Planowanie operacji', 'Kontrola bezpieczeństwa', 'Raportowanie']
    }
  ];

  const cloudServices = [
    {
      name: 'Backup w chmurze',
      icon: Shield,
      description: 'Automatyczne kopie zapasowe danych',
      features: ['Szyfrowanie', 'Automatyzacja', 'Monitoring']
    },
    {
      name: 'Infrastruktura chmurowa',
      icon: Server,
      description: 'Serwery i usługi w chmurze',
      features: ['Wysoka dostępność', 'Skalowanie', 'Bezpieczeństwo']
    },
    {
      name: 'Migracja do chmury',
      icon: Cloud,
      description: 'Przeniesienie systemów do chmury',
      features: ['Analiza', 'Planowanie', 'Wdrożenie']
    }
  ];

  const productionDetailsContent = (
    <div className="space-y-8">
      <button
        onClick={() => setShowProductionDetails(false)}
        className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Powrót do modułów Streamsoft
      </button>

      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Factory className="h-12 w-12 text-blue-600 mr-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Zarządzanie produkcją</h2>
        </div>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left column - Image */}
        <div className="order-2 lg:order-1">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/Zarzadzanie-Produkcja-screen-1.png"
              alt="Interfejs modułu Zarządzanie produkcją w systemie Streamsoft"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-sm text-gray-500 text-center mt-2">
            Interfejs modułu Zarządzanie produkcją w systemie Streamsoft Prestiż
          </p>
        </div>

        {/* Right column - Description */}
        <div className="order-1 lg:order-2 prose prose-lg max-w-none">
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Moduł Zarządzanie produkcją</h3>
            <p className="text-gray-700">
              Moduł Zarządzanie produkcją w systemie Streamsoft Prestiż to kompleksowe narzędzie 
              do kontroli i optymalizacji procesów produkcyjnych. Zapewnia pełną widoczność 
              efektywności maszyn, zarządzanie zleceniami produkcyjnymi oraz monitorowanie 
              kluczowych wskaźników wydajności w czasie rzeczywistym.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Monitorowanie efektywności</h4>
              <p className="text-gray-700">
                System oferuje zaawansowane dashboardy z wykresami kołowymi pokazującymi efektywność 
                maszyn w różnych okresach (zmiana, dzień, średnia tygodnia). Dzięki temu menedżerowie 
                produkcji mają pełny wgląd w wydajność linii produkcyjnych i mogą szybko identyfikować 
                obszary wymagające optymalizacji.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Zarządzanie zleceniami</h4>
              <p className="text-gray-700">
                Moduł umożliwia kompleksowe zarządzanie zleceniami produkcyjnymi - od planowania, 
                przez realizację, aż po kontrolę jakości. System automatycznie śledzi postęp 
                realizacji zleceń i informuje o opóźnieniach czy problemach technicznych.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Analiza wydajności</h4>
              <p className="text-gray-700">
                Zaawansowane wykresy i raporty pozwalają na analizę trendów wydajności, 
                identyfikację wąskich gardeł oraz optymalizację wykorzystania zasobów. 
                System generuje alerty produkcyjne i powiadomienia o opóźnionych zleceniach.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Kontrola jakości</h4>
              <p className="text-gray-700">
                Integracja z systemami kontroli jakości pozwala na bieżące monitorowanie 
                parametrów produkcji i automatyczne wykrywanie odchyleń od standardów. 
                System dokumentuje wszystkie kontrole i testy jakościowe.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Raportowanie i analizy</h4>
              <p className="text-gray-700">
                Szeroki katalog raportów produkcyjnych obejmuje analizy efektywności, 
                wykorzystania materiałów, kosztów produkcji oraz wskaźników OEE (Overall Equipment Effectiveness). 
                Raporty można generować automatycznie i wysyłać do odpowiednich osób w organizacji.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const fixedAssetsDetailsContent = (
    <div className="space-y-8">
      <button
        onClick={() => setShowFixedAssetsDetails(false)}
        className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Powrót do modułów Streamsoft
      </button>

      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Building2 className="h-12 w-12 text-blue-600 mr-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Środki Trwałe</h2>
        </div>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left column - Image */}
        <div className="order-2 lg:order-1">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Zarządzanie majątkiem trwałym firmy"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-sm text-gray-500 text-center mt-2">
            Profesjonalne zarządzanie majątkiem trwałym w przedsiębiorstwie
          </p>
        </div>

        {/* Right column - Description */}
        <div className="order-1 lg:order-2 prose prose-lg max-w-none">
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Moduł Środki Trwałe</h3>
            <p className="text-gray-700">
              Moduł Środki Trwałe Streamsoft Prestiż zapewnia pełną kontrolę nad majątkiem trwałym, 
              wartościami niematerialnymi, jak i prawnymi. Oferuje szereg możliwości w zakresie 
              zarządzania środkami trwałymi i ich amortyzacji.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Ewidencja środków trwałych</h4>
              <p className="text-gray-700">
                Moduł wspiera procesy ewidencjonowania środków trwałych. Możliwa jest ewidencja 
                na podstawie szerokiego katalogu dokumentów: przyjęcia, likwidacji, ulepszenia, 
                zmiany wprowadzonej przez użytkownika czy przeszacowania. Sprzyja to budowaniu 
                pełnej historii majątku i pozwala użytkownikom modułu prześledzić kompletną 
                ścieżkę danego środka trwałego, od chwili jego przyjęcia w firmie.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Kastomizacja parametrów</h4>
              <p className="text-gray-700">
                Moduł umożliwia szybkie filtrowanie oraz tworzenie autorskich parametrów dla 
                różnych kategorii środków trwałych, np. przegląd sprzętu komputerowego, numer 
                atestu urządzeń czy data przeglądu floty samochodowej. Moduł jest pod tym względem 
                uniwersalny i posiada szeroki zakres funkcji.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Inwentaryzacja</h4>
              <p className="text-gray-700">
                W module Środki Trwałe inwentaryzację można przeprowadzić zgodnie z wyodrębnionymi 
                w firmie polami spisowymi, szybko i sprawnie generując odpowiednie arkusze spisowe. 
                Dodatkowym usprawnieniem jest opcja generowania kodów kresowych wprost z systemu 
                Streamsoft Prestiż i wykorzystanie kolektorów danych do wykonania spisu.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Amortyzacja</h4>
              <p className="text-gray-700">
                Obliczanie odpisów amortyzacyjnych odbywa się w oparciu o składniki środków trwałych. 
                Amortyzacja może przebiegać według ustalonej przez użytkownika metody (dostępne metody: 
                liniowa, degresywna, jednorazowo). Prostą weryfikację skuteczności wybranej metody 
                zapewniają plany i prognozy z perspektywą na kolejne lata.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Wydruki i zestawienia</h4>
              <p className="text-gray-700">
                W module dostępny jest szeroki katalog dokumentów z zakresu analizy środków trwałych: 
                standardowe tabele amortyzacyjne w ujęciu bilansowanym, dokumenty dotyczące m.in. 
                przyjęcia i likwidacji, zmiany miejsca użytkowania, zmiany danych oraz raporty 
                i wydruki definiowane tworzone wg potrzeb użytkownika.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStreamsoftContent = () => {
    if (showProductionDetails) {
      return productionDetailsContent;
    }

    if (showFixedAssetsDetails) {
      return fixedAssetsDetailsContent;
    }

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Moduły systemu Streamsoft Prestiż</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kompleksowy system ERP składający się z zintegrowanych modułów, które można dostosować do specyfiki Twojego biznesu.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {streamsoftModules.map((module, index) => (
            <div
              key={index}
              onClick={module.onClick}
              className={`bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 ${
                module.onClick ? 'cursor-pointer group' : ''
              }`}
            >
              <div className={`flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 ${
                module.onClick ? 'group-hover:bg-blue-200' : ''
              } transition-colors duration-300`}>
                <module.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className={`text-lg font-semibold text-gray-900 mb-2 ${
                module.onClick ? 'group-hover:text-blue-600' : ''
              } transition-colors duration-300`}>
                {module.name}
              </h4>
              <p className="text-gray-600 text-sm">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderDedicatedContent = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Przykłady realizacji</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Tworzymy unikalne rozwiązania dostosowane do specyficznych potrzeb każdego klienta.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dedicatedProjects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
              <project.icon className="h-6 w-6 text-green-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h4>
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
            <ul className="space-y-1">
              {project.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCloudContent = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Nasze usługi chmurowe</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Bezpieczne, skalowalne i niezawodne rozwiązania w chmurze dla Twojego biznesu.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cloudServices.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
              <service.icon className="h-6 w-6 text-purple-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h4>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
            <ul className="space-y-1">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (selectedSolution) {
      case 'streamsoft':
        return renderStreamsoftContent();
      case 'dedicated':
        return renderDedicatedContent();
      case 'cloud':
        return renderCloudContent();
      default:
        return null;
    }
  };

  return (
    <section id="solutions" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rozwiązania IT</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Oferujemy kompleksowe rozwiązania IT dostosowane do potrzeb Twojego biznesu
          </p>
        </div>

        {!selectedSolution ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                onClick={() => setSelectedSolution(solution.id)}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group border border-gray-200 hover:border-blue-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <solution.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <button
              onClick={() => {
                setSelectedSolution(null);
                setShowFixedAssetsDetails(false);
                setShowProductionDetails(false);
              }}
              className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Powrót do rozwiązań
            </button>
            {renderContent()}
          </div>
        )}
      </div>
    </section>
  );
};

export default ITSolutions;