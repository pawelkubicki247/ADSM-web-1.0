import React, { useState } from 'react';
import { 
  Package, 
  ShoppingCart, 
  Users, 
  Calculator, 
  UserCheck, 
  Truck, 
  Database, 
  DollarSign, 
  Building, 
  Wrench, 
  Settings, 
  FileText, 
  BookOpen, 
  Box, 
  Shield, 
  Globe, 
  BarChart3, 
  PieChart, 
  Smartphone, 
  User, 
  ShoppingBag, 
  Mail,
  Train,
  Cloud,
  Server,
  HardDrive,
  Monitor,
  ChevronRight,
  Calendar,
  TrendingUp,
  Clock,
  AlertCircle
} from 'lucide-react';

const ITSolutions: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);
  const [selectedSubSolution, setSelectedSubSolution] = useState<string | null>(null);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  const streamsoftModules = [
    { name: 'Zarządzanie Produkcją', icon: Package, id: 'production' },
    { name: 'Handlowo-Magazynowy', icon: ShoppingCart, id: 'trade-warehouse' },
    { name: 'CRM', icon: Users, id: 'crm' },
    { name: 'Finanse i Księgowość', icon: Calculator, id: 'finance' },
    { name: 'Kadry i Płace', icon: UserCheck, id: 'hr' },
    { name: 'Logistyka', icon: Truck, id: 'logistics' },
    { name: 'DMS', icon: Database, id: 'dms' },
    { name: 'Rozrachunki', icon: DollarSign, id: 'settlements' },
    { name: 'Środki Trwałe', icon: Building, id: 'fixed-assets' },
    { name: 'Wyposażenie', icon: Box, id: 'equipment' },
    { name: 'Serwis', icon: Wrench, id: 'service' },
    { name: 'Raporty i Formularze', icon: FileText, id: 'reports' },
    { name: 'Księga Podatkowa', icon: BookOpen, id: 'tax-book' },
    { name: 'Produkt', icon: Package, id: 'product' },
    { name: 'Administrator', icon: Settings, id: 'admin' },
    { name: 'Wspólne', icon: Globe, id: 'common' },
    { name: 'Business Intelligence', icon: BarChart3, id: 'bi' },
    { name: 'PIVOT', icon: PieChart, id: 'pivot' },
    { name: 'Magazyn Mobilny', icon: Smartphone, id: 'mobile-warehouse' },
    { name: 'Panel Pracownika', icon: User, id: 'employee-panel' },
    { name: 'B2B', icon: ShoppingBag, id: 'b2b' },
    { name: 'Kurier', icon: Mail, id: 'courier' },
    { name: 'Windykator', icon: DollarSign, id: 'debt-collector' },
    { name: 'Serwis', icon: Shield, id: 'service-2' }
  ];

  // Definicje szczegółów modułów
  const moduleDetails = {
    'production': {
      title: 'Zarządzanie Produkcją',
      icon: Package,
      sections: [
        {
          title: 'Dashboard produkcji - Efektywność maszyn',
          description: 'Monitoring wydajności i stanu technicznego linii produkcyjnych',
          screenColor: 'bg-blue-100',
          screenIcon: PieChart,
          screenImage: '/screens/Zarzadzanie-Produkcja-screen-1.png',
          details: [
            'Wykresy efektywności maszyn w czasie rzeczywistym (zmiana, dzień, średnia tygodnia)',
            'Lista zgłoszonych awarii z czasem trwania i przyczyną przestoju',
            'Meldunek nierozliczonych operacji z podziałem na kategorie',
            'Alerty produkcyjne i opóźnione zlecenia',
            'Wiekowanie nierozliczonych meldunków z wykresami trendu'
          ]
        },
        {
          title: 'Planowanie produkcji - Wykres Gantta',
          description: 'Wizualne planowanie i harmonogramowanie operacji produkcyjnych',
          screenColor: 'bg-green-100',
          screenIcon: BarChart3,
          screenImage: '/screens/Zarzadzanie-Produkcja-screen-2.png',
          details: [
            'Wykres Gantta z operacjami technologicznymi na osi czasu',
            'Sterownie planowane operacji z podziałem na kompetencje',
            'Koszty planowanych operacji i analiza rentowności',
            'Automatyczne wykrywanie kolizji w harmonogramie',
            'Optymalizacja wykorzystania zasobów produkcyjnych'
          ]
        },
        {
          title: 'Harmonogram produkcji',
          description: 'Szczegółowe planowanie zleceń produkcyjnych z kalendarzem',
          screenColor: 'bg-purple-100',
          screenIcon: Calendar,
          screenImage: '/screens/Zarzadzanie-Produkcja-screen-3.png',
          details: [
            'Wykres Gantta z szczegółowymi informacjami o zleceniach (Wtrysk 4100)',
            'Data rozpoczęcia i zakończenia każdej operacji',
            'Postęp realizacji z informacją o czasie i pozostałych godzinach',
            'Integracja z kalendarzem produkcyjnym',
            'Możliwość przesuwania zadań z automatycznym przeliczeniem terminów'
          ]
        }
      ]
    },
    'trade-warehouse': {
      title: 'Handlowo-Magazynowy',
      icon: ShoppingCart,
      sections: [
        {
          title: 'Panel sprzedaży',
          description: 'Kompleksowe zarządzanie procesami sprzedażowymi',
          screenColor: 'bg-orange-100',
          screenIcon: TrendingUp,
          screenImage: '/screens/Handlowo-Magazynowy-screen.png',
          details: [
            'Obsługa zamówień klientów',
            'Generowanie ofert i faktur',
            'Śledzenie statusu realizacji',
            'Analiza wyników sprzedaży'
          ]
        },
        {
          title: 'Magazyn centralny',
          description: 'Zarządzanie stanem magazynowym i lokalizacjami',
          screenColor: 'bg-teal-100',
          screenIcon: Database,
          details: [
            'Stan magazynowy w czasie rzeczywistym',
            'Lokalizacje i przemieszczenia towarów',
            'Automatyczne uzupełnianie stanów',
            'Inwentaryzacja i korekty'
          ]
        },
        {
          title: 'Zakupy i dostawy',
          description: 'Optymalizacja procesów zakupowych',
          screenColor: 'bg-indigo-100',
          screenIcon: Truck,
          details: [
            'Zarządzanie dostawcami',
            'Automatyczne generowanie zamówień',
            'Śledzenie dostaw i terminów',
            'Analiza kosztów zakupu'
          ]
        }
      ]
    },
    'crm': {
      title: 'CRM',
      icon: Users,
      sections: [
        {
          title: 'Baza klientów',
          description: 'Centralna baza danych wszystkich kontaktów biznesowych',
          screenColor: 'bg-blue-100',
          screenIcon: Users,
          details: [
            'Pełne profile klientów i kontrahentów',
            'Historia współpracy i transakcji',
            'Segmentacja klientów',
            'Zarządzanie danymi kontaktowymi'
          ]
        },
        {
          title: 'Opportunities pipeline',
          description: 'Śledzenie szans sprzedażowych przez cały cykl',
          screenColor: 'bg-yellow-100',
          screenIcon: TrendingUp,
          details: [
            'Wizualizacja lejka sprzedażowego',
            'Prognozowanie przychodów',
            'Automatyzacja procesów sprzedażowych',
            'Raportowanie efektywności'
          ]
        },
        {
          title: 'Komunikacja z klientami',
          description: 'Centralizacja wszystkich form komunikacji',
          screenColor: 'bg-green-100',
          screenIcon: Mail,
          details: [
            'Historia komunikacji email i telefonicznej',
            'Automatyczne kampanie marketingowe',
            'Zarządzanie zadaniami i przypomnieniami',
            'Integracja z systemami komunikacji'
          ]
        }
      ]
    },
    'finance': {
      title: 'Finanse i Księgowość',
      icon: Calculator,
      sections: [
        {
          title: 'Księgowość główna',
          description: 'Pełna ewidencja księgowa zgodna z polskimi standardami',
          screenColor: 'bg-blue-100',
          screenIcon: Calculator,
          screenImage: '/screens/Handlowo-Magazynowy-screen.png',
          details: [
            'Automatyczne księgowania z innych modułów',
            'Plan kont dostosowany do specyfiki firmy',
            'Zamknięcia okresowe i roczne',
            'Sprawozdania finansowe i bilanse'
          ]
        },
        {
          title: 'Controlling finansowy',
          description: 'Analiza i kontrola wyników finansowych',
          screenColor: 'bg-purple-100',
          screenIcon: BarChart3,
          details: [
            'Centra kosztów i zysku',
            'Budżetowanie i kontrola budżetu',
            'Analiza rentowności produktów',
            'Wskaźniki finansowe i KPI'
          ]
        },
        {
          title: 'Rozrachunki z kontrahentami',
          description: 'Zarządzanie należnościami i zobowiązaniami',
          screenColor: 'bg-red-100',
          screenIcon: DollarSign,
                     screenImage: '/screens/Rozrachunki-screen.png',
          details: [
            'Kartoteki kontrahentów',
            'Terminy płatności i windykacja',
            'Automatyczne ponaglenia',
            'Analiza wiarygodności płatniczej'
          ]
        }
      ]
    },
    'hr': {
      title: 'Kadry i Płace',
      icon: UserCheck,
      sections: [
        {
          title: 'Ewidencja pracowników',
          description: 'Kompleksowa baza danych kadrowych',
          screenColor: 'bg-green-100',
          screenIcon: Users,
          details: [
            'Teczki personalne pracowników',
            'Umowy i aneksy',
            'Certyfikaty i uprawnienia',
            'Historia zatrudnienia'
          ]
        },
        {
          title: 'System płacowy',
          description: 'Automatyczne naliczanie wynagrodzeń',
          screenColor: 'bg-blue-100',
          screenIcon: Calculator,
          details: [
            'Różne systemy wynagradzania',
            'Automatyczne naliczanie składek',
            'Generowanie list płac',
            'Rozliczenia z ZUS i US'
          ]
        },
        {
          title: 'Czas pracy',
          description: 'Rejestracja i rozliczanie czasu pracy',
          screenColor: 'bg-yellow-100',
          screenIcon: Clock,
          details: [
            'Karty czasu pracy',
            'Ewidencja nieobecności',
            'Planowanie urlopów',
            'Rozliczenia nadgodzin'
          ]
        }
      ]
    },
    'logistics': {
      title: 'Logistyka',
      icon: Truck,
      sections: [
        {
          title: 'Planowanie transportu',
          description: 'Optymalizacja tras i wykorzystania floty',
          screenColor: 'bg-blue-100',
          screenIcon: Truck,
          details: [
            'Planowanie tras dostawowych',
            'Optymalizacja wykorzystania pojazdów',
            'Zarządzanie harmonogramem kierowców',
            'Kalkulacja kosztów transportu'
          ]
        },
        {
          title: 'Śledzenie przesyłek',
          description: 'Monitoring statusu dostaw w czasie rzeczywistym',
          screenColor: 'bg-green-100',
          screenIcon: Monitor,
          details: [
            'Lokalizacja pojazdów GPS',
            'Status realizacji dostaw',
            'Powiadomienia o opóźnieniach',
            'Potwierdzenia odbioru'
          ]
        },
        {
          title: 'Analiza logistyczna',
          description: 'Raporty i wskaźniki efektywności',
          screenColor: 'bg-purple-100',
          screenIcon: BarChart3,
          details: [
            'Koszty transportu na jednostkę',
            'Efektywność wykorzystania floty',
            'Punktualność dostaw',
            'Analiza tras i dystansów'
          ]
        }
      ]
    }
  };

  const wagonScreens = [
    {
      title: 'Dashboard monitoringu',
      description: 'Przegląd statusu wszystkich wagonów w czasie rzeczywistym',
      color: 'bg-blue-100'
    },
    {
      title: 'Mapa tras',
      description: 'Śledzenie lokalizacji i tras przewozów',
      color: 'bg-green-100'
    },
    {
      title: 'Raporty kosztów',
      description: 'Analiza kosztów transportu i postojów',
      color: 'bg-purple-100'
    }
  ];

  const clientZoneScreens = [
    {
      title: 'Panel kontrolny terminala',
      description: 'Zarządzanie procesami przeładunkowymi',
      color: 'bg-orange-100'
    },
    {
      title: 'Monitoring zbiorników',
      description: 'Kontrola poziomu i jakości materiałów',
      color: 'bg-teal-100'
    },
    {
      title: 'Harmonogram operacji',
      description: 'Planowanie i optymalizacja przeładunków',
      color: 'bg-indigo-100'
    }
  ];

  const vmScreens = [
    {
      title: 'Dashboard VM',
      description: 'Zarządzanie maszynami wirtualnymi',
      color: 'bg-red-100'
    },
    {
      title: 'Monitoring zasobów',
      description: 'Wykorzystanie CPU, RAM i dysku',
      color: 'bg-yellow-100'
    },
    {
      title: 'Panel backup',
      description: 'Automatyczne kopie zapasowe VM',
      color: 'bg-pink-100'
    }
  ];

  const backupScreens = [
    {
      title: 'Dashboard backup',
      description: 'Status i harmonogram kopii zapasowych',
      color: 'bg-cyan-100'
    },
    {
      title: 'Przywracanie danych',
      description: 'Szybkie odzyskiwanie plików',
      color: 'bg-emerald-100'
    },
    {
      title: 'Ustawienia bezpieczeństwa',
      description: 'Konfiguracja szyfrowania i dostępu',
      color: 'bg-violet-100'
    }
  ];

  const mainSolutions = [
    {
      id: 'streamsoft',
      title: 'Streamsoft',
      icon: Package,
      description: 'Kompleksowe rozwiązanie informatyczne dla produkcji, handlu i usług',
      color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
    },
    {
      id: 'dedicated',
      title: 'Oprogramowanie dedykowane',
      icon: Settings,
      description: 'Systemy zarządzania wagonami i strefy klienta',
      color: 'bg-green-50 hover:bg-green-100 border-green-200'
    },
    {
      id: 'cloud',
      title: 'Rozwiązania chmurowe',
      icon: Cloud,
      description: 'Bazy danych na VM i backup w chmurze',
      color: 'bg-purple-50 hover:bg-purple-100 border-purple-200'
    }
  ];

  return (
    <section id="solutions" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rozwiązania IT</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Wybierz rozwiązanie, które najlepiej odpowiada potrzebom Twojej firmy
          </p>
        </div>

        {!selectedSolution ? (
          /* Main solution tiles */
          <div className="grid md:grid-cols-3 gap-8">
            {mainSolutions.map((solution) => (
              <div
                key={solution.id}
                onClick={() => setSelectedSolution(solution.id)}
                className={`${solution.color} border-2 rounded-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 group`}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <solution.icon className="h-16 w-16 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-700 mb-6">{solution.description}</p>
                  <div className="flex items-center justify-center text-blue-600 font-semibold">
                    <span>Zobacz szczegóły</span>
                    <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Selected solution content */
          <div className="space-y-8">
            {/* Back button */}
            <button
              onClick={() => {
                setSelectedSolution(null);
                setSelectedSubSolution(null);
                setSelectedModule(null);
              }}
              className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
            >
              <ChevronRight className="h-5 w-5 mr-2 rotate-180" />
              Powrót do rozwiązań
            </button>

            {selectedSolution === 'streamsoft' && (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <Package className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Streamsoft</h3>
                </div>

                {!selectedModule ? (
                  <>
                    <div className="mb-8">
                      <p className="text-lg leading-relaxed text-gray-700 mb-4">
                        Kompleksowe rozwiązanie informatyczne dla produkcji, handlu i usług – spójność danych, kontrola nad procesami
                      </p>
                      <p className="text-gray-700 mb-4">
                        System ERP Streamsoft Prestiż wybrało już ponad 500 firm produkcyjnych, równie chętnie korzystają z niego firmy handlowe oraz usługowe. W rynkowych raportach analitycznych od wielu lat plasujemy się w ścisłej czołówce rozwiązań IT dla średnich przedsiębiorstw.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Na pozycję rynkową produkowanego przez Streamsoft rozwiązania wpływa jego funkcjonalność, zapewniająca kompleksową obsługę biznesową. Znaczenie ma także nasza umiejętność dopasowania rozwiązań do indywidualnych wymagań Klienta oraz wiedza o specyfice rynku, podparta wieloletnią praktyką wdrożeniową.
                      </p>
                      <p className="text-gray-700">
                        System jest oferowany również w angielskiej wersji językowej, co zapewnia możliwość optymalizacji procesów w międzynarodowym środowisku pracy.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                      {streamsoftModules.map((module, index) => (
                        <div
                          key={index}
                          onClick={() => setSelectedModule(module.id)}
                          className="bg-gray-50 p-4 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all duration-300 cursor-pointer group"
                        >
                          <div className="flex flex-col items-center text-center">
                            <module.icon className="h-6 w-6 text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                              {module.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  /* Selected module details */
                  <div className="space-y-8">
                    {/* Back button to modules */}
                    <button
                      onClick={() => setSelectedModule(null)}
                      className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                    >
                      <ChevronRight className="h-5 w-5 mr-2 rotate-180" />
                      Powrót do modułów Streamsoft
                    </button>

                    {moduleDetails[selectedModule] && (
                      <div>
                        <div className="flex items-center mb-8">
                          {React.createElement(moduleDetails[selectedModule].icon, {
                            className: "h-8 w-8 text-blue-600 mr-3"
                          })}
                          <h4 className="text-2xl font-bold text-gray-900">
                            {moduleDetails[selectedModule].title}
                          </h4>
                        </div>
                        
                        <div className="space-y-12">
                          {moduleDetails[selectedModule].sections.map((section, index) => (
                            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                              <div className={`${section.screenColor} rounded-lg p-8 h-64 flex items-center justify-center`}>
                                <div className="text-center">
                                  {React.createElement(section.screenIcon, {
                                    className: "h-16 w-16 text-blue-800 mx-auto mb-4"
                                  })}
                                  <p className="text-blue-900 font-semibold">{section.title}</p>
                                </div>
                              </div>
                              <div>
                                <h5 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h5>
                                <p className="text-gray-700 mb-4">{section.description}</p>
                                <ul className="space-y-2 text-gray-600">
                                  {section.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="flex items-start">
                                      <span className="text-blue-500 mr-2">•</span>
                                      <span>{detail}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {!moduleDetails[selectedModule] && (
                      <div className="text-center py-16">
                        <AlertCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold text-gray-700 mb-2">
                          Szczegóły tego modułu będą wkrótce dostępne
                        </h4>
                        <p className="text-gray-600">
                          Pracujemy nad przygotowaniem szczegółowych informacji o tym module.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {selectedSolution === 'dedicated' && (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <Settings className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Oprogramowanie dedykowane</h3>
                </div>

                {!selectedSubSolution ? (
                  /* Sub-solution tiles */
                  <div className="grid md:grid-cols-2 gap-8">
                    <div
                      onClick={() => setSelectedSubSolution('wagons')}
                      className="bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                    >
                      <div className="text-center">
                        <div className="flex justify-center mb-6">
                          <Train className="h-16 w-16 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">Zarządzanie wagonami</h4>
                        <p className="text-gray-700 mb-6">
                          Monitoring wagonów, identyfikacja postojów, narzędzia do zgłaszania wagonów do odpraw celnych, monitorowanie kosztów transportu i postojów wagonów.
                        </p>
                        <div className="flex items-center justify-center text-green-600 font-semibold">
                          <span>Zobacz szczegóły</span>
                          <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={() => setSelectedSubSolution('client-zone')}
                      className="bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 rounded-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                    >
                      <div className="text-center">
                        <div className="flex justify-center mb-6">
                          <Users className="h-16 w-16 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">Strefa klienta</h4>
                        <p className="text-gray-700 mb-6">
                          Zastosowania terminale przeładunkowe gazu LPG, materiałów płynnych i sypkich, nawozy, itp.
                        </p>
                        <div className="flex items-center justify-center text-blue-600 font-semibold">
                          <span>Zobacz szczegóły</span>
                          <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Selected sub-solution content */
                  <div className="space-y-8">
                    {/* Back button */}
                    <button
                      onClick={() => setSelectedSubSolution(null)}
                      className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                    >
                      <ChevronRight className="h-5 w-5 mr-2 rotate-180" />
                      Powrót do oprogramowania dedykowanego
                    </button>

                    {selectedSubSolution === 'wagons' && (
                      <div>
                        <div className="flex items-center mb-8">
                          <Train className="h-8 w-8 text-green-600 mr-3" />
                          <h4 className="text-2xl font-bold text-gray-900">Zarządzanie wagonami</h4>
                        </div>
                        
                        <div className="space-y-12">
                          {/* Example 1 */}
                          <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="bg-blue-100 rounded-lg p-8 h-64 flex items-center justify-center">
                              <div className="text-center">
                                <Monitor className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                                <p className="text-blue-800 font-semibold">Dashboard monitoringu wagonów</p>
                              </div>
                            </div>
                            <div>
                              <h5 className="text-xl font-semibold text-gray-900 mb-4">Przegląd statusu floty</h5>
                              <p className="text-gray-700 mb-4">
                                Centralny dashboard umożliwia monitorowanie wszystkich wagonów w czasie rzeczywistym. 
                                System wyświetla aktualną lokalizację, status każdego wagonu oraz informacje o przewożonych materiałach.
                              </p>
                              <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                  <span className="text-green-500 mr-2">•</span>
                                  <span>Mapa z lokalizacją wszystkich wagonów</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-green-500 mr-2">•</span>
                                  <span>Status każdego wagonu (w transporcie, postój, załadunek)</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-green-500 mr-2">•</span>
                                  <span>Alerty o przekroczeniu czasu postojów</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Example 2 */}
                          <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="bg-green-100 rounded-lg p-8 h-64 flex items-center justify-center">
                              <div className="text-center">
                                <BarChart3 className="h-16 w-16 text-green-600 mx-auto mb-4" />
                                <p className="text-green-800 font-semibold">Analiza kosztów transportu</p>
                              </div>
                            </div>
                            <div>
                              <h5 className="text-xl font-semibold text-gray-900 mb-4">Kontrola kosztów i rentowności</h5>
                              <p className="text-gray-700 mb-4">
                                Szczegółowa analiza kosztów transportu pozwala na optymalizację tras i minimalizację 
                                kosztów postojów. System automatycznie kalkuluje koszty na podstawie czasu i dystansu.
                              </p>
                              <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                  <span className="text-green-500 mr-2">•</span>
                                  <span>Automatyczne naliczanie kosztów postojów</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-green-500 mr-2">•</span>
                                  <span>Raporty rentowności tras</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-green-500 mr-2">•</span>
                                  <span>Porównanie kosztów różnych przewoźników</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Example 3 */}
                          <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="bg-purple-100 rounded-lg p-8 h-64 flex items-center justify-center">
                              <div className="text-center">
                                <FileText className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                                <p className="text-purple-800 font-semibold">Zarządzanie dokumentacją</p>
                              </div>
                            </div>
                            <div>
                              <h5 className="text-xl font-semibold text-gray-900 mb-4">Automatyzacja procesów celnych</h5>
                              <p className="text-gray-700 mb-4">
                                System wspiera proces zgłaszania wagonów do odpraw celnych, automatyzując 
                                generowanie dokumentów i śledzenie statusu procedur celnych.
                              </p>
                              <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                  <span className="text-green-500 mr-2">•</span>
                                  <span>Automatyczne generowanie dokumentów celnych</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-green-500 mr-2">•</span>
                                  <span>Śledzenie statusu odpraw celnych</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-green-500 mr-2">•</span>
                                  <span>Integracja z systemami celnymi</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedSubSolution === 'client-zone' && (
                      <div>
                        <div className="flex items-center mb-8">
                          <Users className="h-8 w-8 text-blue-600 mr-3" />
                          <h4 className="text-2xl font-bold text-gray-900">Strefa klienta</h4>
                        </div>
                        
                        <div className="space-y-12">
                          {/* Example 1 */}
                          <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="bg-orange-100 rounded-lg p-8 h-64 flex items-center justify-center">
                              <div className="text-center">
                                <Settings className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                                <p className="text-orange-800 font-semibold">Panel kontrolny terminala</p>
                              </div>
                            </div>
                            <div>
                              <h5 className="text-xl font-semibold text-gray-900 mb-4">Zarządzanie procesami przeładunkowymi</h5>
                              <p className="text-gray-700 mb-4">
                                Centralny panel kontrolny umożliwia zarządzanie wszystkimi procesami przeładunkowymi 
                                w terminalu. System kontroluje przepływ materiałów i optymalizuje wykorzystanie zasobów.
                              </p>
                              <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                  <span className="text-blue-500 mr-2">•</span>
                                  <span>Kontrola procesów załadunku i rozładunku</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-blue-500 mr-2">•</span>
                                  <span>Monitorowanie wykorzystania stanowisk</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-blue-500 mr-2">•</span>
                                  <span>Automatyczne planowanie kolejności operacji</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Example 2 */}
                          <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="bg-teal-100 rounded-lg p-8 h-64 flex items-center justify-center">
                              <div className="text-center">
                                <Database className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                                <p className="text-teal-800 font-semibold">Monitoring zbiorników</p>
                              </div>
                            </div>
                            <div>
                              <h5 className="text-xl font-semibold text-gray-900 mb-4">Kontrola poziomu i jakości materiałów</h5>
                              <p className="text-gray-700 mb-4">
                                System monitoruje w czasie rzeczywistym poziom materiałów w zbiornikach oraz 
                                kontroluje parametry jakościowe. Automatyczne alerty informują o przekroczeniu limitów.
                              </p>
                              <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                  <span className="text-blue-500 mr-2">•</span>
                                  <span>Ciągły monitoring poziomu w zbiornikach</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-blue-500 mr-2">•</span>
                                  <span>Kontrola parametrów jakościowych</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-blue-500 mr-2">•</span>
                                  <span>Alerty o przekroczeniu limitów bezpieczeństwa</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Example 3 */}
                          <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="bg-indigo-100 rounded-lg p-8 h-64 flex items-center justify-center">
                              <div className="text-center">
                                <Calendar className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                                <p className="text-indigo-800 font-semibold">Harmonogram operacji</p>
                              </div>
                            </div>
                            <div>
                              <h5 className="text-xl font-semibold text-gray-900 mb-4">Planowanie i optymalizacja przeładunków</h5>
                              <p className="text-gray-700 mb-4">
                                Zaawansowany system planowania optymalizuje harmonogram przeładunków, 
                                minimalizując czas oczekiwania i maksymalizując przepustowość terminala.
                              </p>
                              <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                  <span className="text-blue-500 mr-2">•</span>
                                  <span>Automatyczne planowanie kolejności przeładunków</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-blue-500 mr-2">•</span>
                                  <span>Optymalizacja wykorzystania zasobów</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-blue-500 mr-2">•</span>
                                  <span>Prognozowanie czasów operacji</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                </div>
            )}

            {selectedSolution === 'cloud' && (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <Cloud className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Rozwiązania chmurowe</h3>
                </div>

                {!selectedSubSolution ? (
                  /* Sub-solution tiles */
                  <div className="grid md:grid-cols-2 gap-8">
                    <div
                      onClick={() => setSelectedSubSolution('vm-databases')}
                      className="bg-purple-50 hover:bg-purple-100 border-2 border-purple-200 rounded-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                    >
                      <div className="text-center">
                        <div className="flex justify-center mb-6">
                          <Server className="h-16 w-16 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">Bazy danych na VM</h4>
                        <p className="text-gray-700 mb-6">
                          Oferujemy wsparcie w procesie projektowania i wdrożenia platformy wirtualizacyjnej. 
                          Rozwiązanie wirtualizacji zwiększa elastyczność centrów danych i ułatwia zarządzanie aplikacjami.
                        </p>
                        <div className="flex items-center justify-center text-purple-600 font-semibold">
                          <span>Zobacz szczegóły</span>
                          <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={() => setSelectedSubSolution('cloud-backup')}
                      className="bg-cyan-50 hover:bg-cyan-100 border-2 border-cyan-200 rounded-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                    >
                      <div className="text-center">
                        <div className="flex justify-center mb-6">
                          <HardDrive className="h-16 w-16 text-cyan-600 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">Backup w chmurze dla firm</h4>
                        <p className="text-gray-700 mb-6">
                          Zabezpiecz swoje dane – chroń przyszłość firmy. Backup w chmurze to najskuteczniejsza 
                          i najbardziej opłacalna forma ochrony przed utratą danych.
                        </p>
                        <div className="flex items-center justify-center text-cyan-600 font-semibold">
                          <span>Zobacz szczegóły</span>
                          <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Selected sub-solution content */
                  <div className="space-y-8">
                    {/* Back button */}
                    <button
                      onClick={() => setSelectedSubSolution(null)}
                      className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                    >
                      <ChevronRight className="h-5 w-5 mr-2 rotate-180" />
                      Powrót do rozwiązań chmurowych
                    </button>

                    {selectedSubSolution === 'vm-databases' && (
                      <div>
                        <div className="flex items-center mb-8">
                          <Server className="h-8 w-8 text-purple-600 mr-3" />
                          <h4 className="text-2xl font-bold text-gray-900">Bazy danych na VM</h4>
                        </div>
                        
                        <div className="space-y-12">
                          {/* Example 1 */}
                          <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="bg-red-100 rounded-lg p-8 h-64 flex items-center justify-center">
                              <div className="text-center">
                                <Monitor className="h-16 w-16 text-red-600 mx-auto mb-4" />
                                <p className="text-red-800 font-semibold">Dashboard VM</p>
                              </div>
                            </div>
                            <div>
                              <h5 className="text-xl font-semibold text-gray-900 mb-4">Zarządzanie maszynami wirtualnymi</h5>
                              <p className="text-gray-700 mb-4">
                                Centralny panel zarządzania wszystkimi maszynami wirtualnymi w infrastrukturze. 
                                System umożliwia monitorowanie stanu, wydajności i zasobów każdej maszyny wirtualnej.
                              </p>
                              <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                  <span className="text-purple-500 mr-2">•</span>
                                  <span>Przegląd wszystkich maszyn wirtualnych</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-purple-500 mr-2">•</span>
                                  <span>Kontrola stanu i wydajności VM</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-purple-500 mr-2">•</span>
                                  <span>Zarządzanie zasobami i konfiguracją</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedSubSolution === 'cloud-backup' && (
                      <div>
                        <div className="flex items-center mb-8">
                          <HardDrive className="h-8 w-8 text-cyan-600 mr-3" />
                          <h4 className="text-2xl font-bold text-gray-900">Backup w chmurze dla firm</h4>
                        </div>
                        
                        <div className="space-y-12">
                          {/* Example 1 */}
                          <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="bg-cyan-100 rounded-lg p-8 h-64 flex items-center justify-center">
                              <div className="text-center">
                                <Monitor className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
                                <p className="text-cyan-800 font-semibold">Dashboard backup</p>
                              </div>
                            </div>
                            <div>
                              <h5 className="text-xl font-semibold text-gray-900 mb-4">Status i harmonogram kopii zapasowych</h5>
                              <p className="text-gray-700 mb-4">
                                Centralny panel kontrolny umożliwia zarządzanie wszystkimi kopiami zapasowymi firmy. 
                                System wyświetla status wykonanych backup, harmonogram oraz statystyki wykorzystania przestrzeni.
                              </p>
                              <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                  <span className="text-cyan-500 mr-2">•</span>
                                  <span>Przegląd wszystkich kopii zapasowych</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-cyan-500 mr-2">•</span>
                                  <span>Harmonogram automatycznych backup</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-cyan-500 mr-2">•</span>
                                  <span>Statystyki wykorzystania przestrzeni</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ITSolutions;