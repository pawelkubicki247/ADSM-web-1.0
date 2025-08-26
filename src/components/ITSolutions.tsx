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
  const [showWagonDetails, setShowWagonDetails] = useState(false);
  const [showFixedAssetsDetails, setShowFixedAssetsDetails] = useState(false);
  const [showProductionDetails, setShowProductionDetails] = useState(false);

  const solutions = [
    {
      title: 'System ERP Streamsoft',
      description: 'Kompleksowy system zarządzania przedsiębiorstwem',
      icon: Server,
      id: 'streamsoft'
    },
    {
      title: 'Oprogramowanie dedykowane',
      description: 'Rozwiązania szyte na miarę Twojej firmy',
      icon: Settings,
      id: 'dedicated'
    },
    {
      title: 'Rozwiązania chmurowe',
      description: 'Bezpieczne przechowywanie danych w chmurze',
      icon: Cloud,
      id: 'cloud'
    },
    {
      title: 'Backup w chmurze',
      description: 'Automatyczne kopie zapasowe Twoich danych',
      icon: Shield,
      id: 'backup'
    }
  ];

  const streamsoftModules = [
    {
      name: 'Handlowo-Magazynowy',
      description: 'Zarządzanie sprzedażą, zakupami i magazynem',
      icon: Package,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'Finanse i Księgowość',
      description: 'Kompleksowa obsługa finansowo-księgowa',
      icon: Calculator,
      color: 'bg-green-100 text-green-600'
    },
    {
      name: 'Zarządzanie produkcją',
      description: 'Kontrola procesów produkcyjnych',
      icon: Factory,
      color: 'bg-orange-100 text-orange-600',
      onClick: () => setShowProductionDetails(true)
    },
    {
      name: 'Środki Trwałe',
      description: 'Ewidencja i amortyzacja majątku trwałego',
      icon: Building2,
      color: 'bg-purple-100 text-purple-600',
      id: 'fixed-assets',
      onClick: () => setShowFixedAssetsDetails(true)
    },
    {
      name: 'Kadry i Płace',
      description: 'Zarządzanie zasobami ludzkimi',
      icon: Users,
      color: 'bg-red-100 text-red-600'
    },
    {
      name: 'Controlling',
      description: 'Analiza kosztów i rentowności',
      icon: BarChart3,
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      name: 'Zarządzanie wagonami',
      description: 'System do zarządzania flotą wagonów',
      icon: Truck,
      color: 'bg-indigo-100 text-indigo-600',
      onClick: () => setShowWagonDetails(true)
    },
    {
      name: 'Dokumenty',
      description: 'Zarządzanie dokumentacją firmową',
      icon: FileText,
      color: 'bg-gray-100 text-gray-600'
    }
  ];

  const dedicatedSolutions = [
    {
      title: 'Aplikacje webowe',
      description: 'Nowoczesne aplikacje dostępne przez przeglądarkę',
      features: ['Responsywny design', 'Bezpieczne logowanie', 'Integracja z API', 'Optymalizacja SEO']
    },
    {
      title: 'Systemy desktopowe',
      description: 'Wydajne aplikacje na komputery stacjonarne',
      features: ['Wysoka wydajność', 'Offline functionality', 'Integracja systemowa', 'Zaawansowane UI']
    },
    {
      title: 'Aplikacje mobilne',
      description: 'Aplikacje na urządzenia mobilne iOS i Android',
      features: ['Native performance', 'Push notifications', 'Offline sync', 'Geolokalizacja']
    }
  ];

  const cloudSolutions = [
    {
      title: 'Migracja do chmury',
      description: 'Bezpieczne przeniesienie infrastruktury IT do chmury',
      benefits: ['Redukcja kosztów', 'Skalowalność', 'Dostępność 24/7', 'Automatyczne aktualizacje']
    },
    {
      title: 'Hosting aplikacji',
      description: 'Profesjonalny hosting dla aplikacji biznesowych',
      benefits: ['Wysoka dostępność', 'Monitoring 24/7', 'Backup automatyczny', 'Wsparcie techniczne']
    }
  ];

  const backupSolutions = [
    {
      title: 'Automatyczny backup',
      description: 'Regularne kopie zapasowe bez ingerencji użytkownika',
      features: ['Harmonogram kopii', 'Szyfrowanie danych', 'Kompresja plików', 'Powiadomienia']
    },
    {
      title: 'Disaster Recovery',
      description: 'Plan odzyskiwania danych w przypadku awarii',
      features: ['Szybkie odzyskiwanie', 'Testowanie procedur', 'Dokumentacja procesów', 'Wsparcie 24/7']
    }
  ];

  const wagonDetailsContent = (
    <div className="space-y-8">
      <button
        onClick={() => setShowWagonDetails(false)}
        className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Powrót do modułów Streamsoft
      </button>

      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
          <Truck className="h-8 w-8 text-indigo-600 mr-3" />
          Zarządzanie wagonami
        </h3>
        <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="order-2 lg:order-1">
          <img
            src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Zarządzanie flotą wagonów"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        
        <div className="order-1 lg:order-2 prose prose-lg max-w-none">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">System zarządzania flotą wagonów</h4>
          <p className="text-gray-700 mb-6">
            Kompleksowe rozwiązanie do zarządzania flotą wagonów kolejowych, umożliwiające pełną kontrolę 
            nad majątkiem kolejowym, optymalizację wykorzystania taboru oraz efektywne planowanie tras i harmonogramów.
          </p>
          
          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Funkcjonalności systemu:</h5>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Ewidencja i monitoring stanu technicznego wagonów</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Planowanie tras i optymalizacja wykorzystania taboru</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Zarządzanie harmonogramami przeglądów i napraw</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Kontrola kosztów eksploatacji i utrzymania</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Raportowanie i analiza efektywności floty</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Korzyści:</h5>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Zwiększenie efektywności wykorzystania floty</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Redukcja kosztów eksploatacji</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Poprawa bezpieczeństwa transportu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Automatyzacja procesów planowania</span>
                </li>
              </ul>
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
        className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Powrót do modułów Streamsoft
      </button>

      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
          <Building2 className="h-8 w-8 text-purple-600 mr-3" />
          Środki Trwałe
        </h3>
        <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="order-2 lg:order-1">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Zarządzanie środkami trwałymi"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        
        <div className="order-1 lg:order-2 prose prose-lg max-w-none">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">Moduł Środki Trwałe</h4>
          <p className="text-gray-700 mb-6">
            Moduł Środki Trwałe Streamsoft Prestiż zapewnia pełną kontrolę nad majątkiem trwałym, wartościami niematerialnymi, jak i prawnymi. Oferuje szereg możliwości w zakresie zarządzania środkami trwałymi i ich amortyzacji. Można także skorzystać z szerokiego katalogu wydruków oraz zestawień dostępnych w module, a gdyby zaszła taka potrzeba - definiować własne, zgodnie z bieżącymi potrzebami. Moduł posiada również mechanizm cech, czyli opcję pomocną przy wprowadzaniu własnych parametrów środków trwałych.
          </p>
          
          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Ewidencja środków trwałych</h5>
              <p className="text-gray-700">
                Moduł wspiera procesy ewidencjonowania środków trwałych. Możliwa jest ewidencja na podstawie szerokiego katalogu dokumentów: przyjęcia, likwidacji, ulepszenia, zmiany wprowadzonej przez użytkownika czy przeszacowania. Sprzyja to budowaniu pełnej historii majątku i pozwala użytkownikom modułu prześledzić kompletną ścieżkę danego środka trwałego, od chwili jego przyjęcia w firmie. Wgląd w aktualne dane jest intuicyjny, historię majątku trwałego można wywołać na kliknięcie – szybko i sprawnie.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Kastomizacja parametrów</h5>
              <p className="text-gray-700">
                Moduł umożliwia szybkie filtrowanie oraz tworzenie autorskich parametrów dla różnych kategorii środków trwałych, np. przegląd sprzętu komputerowego, numer atestu urządzeń czy data przeglądu floty samochodowej. Moduł jest pod tym względem uniwersalny i posiada szeroki zakres funkcji. Dlatego zaspokaja potrzeby kadry zarządzającej, która oczekuje dostępu do różnorodnych informacji o posiadanym majątku trwałym.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Inwentaryzacja</h5>
              <p className="text-gray-700">
                W module Środki Trwałe inwentaryzację można przeprowadzić zgodnie z wyodrębnionymi w firmie polami spisowymi, szybko i sprawnie generując odpowiednie arkusze spisowe. Dodatkowym usprawnieniem jest opcja generowania kodów kresowych wprost z systemu Streamsoft Prestiż i wykorzystanie kolektorów danych do wykonania spisu.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Amortyzacja</h5>
              <p className="text-gray-700">
                Obliczanie odpisów amortyzacyjnych odbywa się w oparciu o składniki środków trwałych. Amortyzacja może przebiegać według ustalonej przez użytkownika metody (dostępne metody: liniowa, degresywna, jednorazowo). Prostą weryfikację skuteczności wybranej metody zapewniają plany i prognozy z perspektywą na kolejne lata.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Wydruki i zestawienia</h5>
              <p className="text-gray-700">
                W module dostępny jest szeroki katalog dokumentów z zakresu analizy środków trwałych: standardowe tabele amortyzacyjne w ujęciu bilansowanym, dokumenty dotyczące m.in. przyjęcia i likwidacji, zmiany miejsca użytkowania, zmiany danych oraz raporty i wydruki definiowane tworzone wg potrzeb użytkownika.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const productionDetailsContent = (
    <div className="space-y-8">
      <button
        onClick={() => setShowProductionDetails(false)}
        className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Powrót do modułów Streamsoft
      </button>

      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
          <Factory className="h-8 w-8 text-orange-600 mr-3" />
          Zarządzanie produkcją
        </h3>
        <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="order-2 lg:order-1">
          <img
            src="/Zarzadzanie-Produkcja-screen-1.png"
            alt="System zarządzania produkcją"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        
        <div className="order-1 lg:order-2 prose prose-lg max-w-none">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">Moduł Zarządzanie Produkcją</h4>
          <p className="text-gray-700 mb-6">
            Kompleksowy system zarządzania procesami produkcyjnymi, który umożliwia pełną kontrolę nad całym cyklem produkcyjnym - od planowania przez realizację po analizę efektywności. System zapewnia optymalizację wykorzystania zasobów, kontrolę jakości oraz monitorowanie kosztów produkcji.
          </p>
          
          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Planowanie produkcji</h5>
              <p className="text-gray-700">
                Zaawansowane narzędzia do planowania produkcji umożliwiają optymalne wykorzystanie maszyn, surowców i czasu pracy. System automatycznie generuje harmonogramy produkcji na podstawie zamówień, dostępności zasobów i priorytetów biznesowych.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Kontrola procesów</h5>
              <p className="text-gray-700">
                Monitoring procesów produkcyjnych w czasie rzeczywistym pozwala na szybkie reagowanie na odchylenia od planu. System rejestruje wszystkie operacje, kontroluje jakość na każdym etapie i automatycznie generuje raporty o postępach.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Zarządzanie zasobami</h5>
              <p className="text-gray-700">
                Efektywne zarządzanie surowcami, materiałami pomocniczymi i narzędziami produkcyjnymi. System automatycznie monitoruje stany magazynowe, generuje zapotrzebowania na materiały i optymalizuje wykorzystanie maszyn i urządzeń.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Kontrola jakości</h5>
              <p className="text-gray-700">
                Zintegrowany system kontroli jakości umożliwia definiowanie standardów, przeprowadzanie testów i dokumentowanie wyników. Automatyczne powiadomienia o odchyleniach od norm jakościowych pozwalają na szybkie podejmowanie działań korygujących.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Analiza kosztów</h5>
              <p className="text-gray-700">
                Szczegółowa analiza kosztów produkcji obejmująca materiały, robociznę, energię i koszty pośrednie. System generuje raporty rentowności produktów, analizy odchyleń od budżetu oraz prognozy kosztów dla planowanych produkcji.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Raportowanie i analityka</h5>
              <p className="text-gray-700">
                Bogaty zestaw raportów i analiz umożliwia monitorowanie kluczowych wskaźników efektywności (KPI), analizę trendów produkcyjnych oraz identyfikację obszarów do optymalizacji. Dashboardy w czasie rzeczywistym zapewniają menedżerom pełny wgląd w procesy produkcyjne.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStreamsoftContent = () => {
    if (selectedSolution === 'streamsoft' && showWagonDetails) {
      return wagonDetailsContent;
    }

    if (selectedSolution === 'streamsoft' && showFixedAssetsDetails) {
      return fixedAssetsDetailsContent;
    }

    if (selectedSolution === 'streamsoft' && showProductionDetails) {
      return productionDetailsContent;
    }

    if (selectedSolution === 'streamsoft') {
      return (
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Moduły systemu Streamsoft</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kompleksowy system ERP składający się z zintegrowanych modułów, które można dostosować do specyfiki Twojej branży
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {streamsoftModules.map((module, index) => (
              <div
                key={index}
                onClick={module.onClick}
                className={`bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 ${
                  module.onClick ? 'cursor-pointer' : ''
                }`}
              >
                <div className={`flex items-center justify-center w-12 h-12 ${module.color} rounded-lg mb-4`}>
                  <module.icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{module.name}</h4>
                <p className="text-gray-600 text-sm">{module.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setSelectedSolution(null)}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300"
            >
              Powrót do rozwiązań
            </button>
          </div>
        </div>
      );
    }

    return null;
  };

  const renderSolutionContent = () => {
    if (selectedSolution === 'streamsoft') {
      return renderStreamsoftContent();
    }

    if (selectedSolution === 'dedicated') {
      return (
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Oprogramowanie dedykowane</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tworzymy unikalne rozwiązania programistyczne dostosowane do specyficznych potrzeb Twojej firmy
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {dedicatedSolutions.map((solution, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{solution.title}</h4>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setSelectedSolution(null)}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300"
            >
              Powrót do rozwiązań
            </button>
          </div>
        </div>
      );
    }

    if (selectedSolution === 'cloud') {
      return (
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Rozwiązania chmurowe</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nowoczesne rozwiązania chmurowe zapewniające bezpieczeństwo, skalowalność i dostępność
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {cloudSolutions.map((solution, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{solution.title}</h4>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                      <span className="text-blue-500 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setSelectedSolution(null)}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300"
            >
              Powrót do rozwiązań
            </button>
          </div>
        </div>
      );
    }

    if (selectedSolution === 'backup') {
      return (
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Backup w chmurze</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Profesjonalne rozwiązania backup zapewniające bezpieczeństwo Twoich danych
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {backupSolutions.map((solution, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{solution.title}</h4>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setSelectedSolution(null)}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300"
            >
              Powrót do rozwiązań
            </button>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section id="solutions" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rozwiązania IT</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Oferujemy kompleksowe rozwiązania IT dostosowane do potrzeb Twojej firmy
          </p>
        </div>

        {selectedSolution ? (
          renderSolutionContent()
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                onClick={() => setSelectedSolution(solution.id)}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200 hover:border-blue-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <solution.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ITSolutions;