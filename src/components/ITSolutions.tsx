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
  Calendar
} from 'lucide-react';

const ITSolutions: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);
  const [selectedSubSolution, setSelectedSubSolution] = useState<string | null>(null);
  const [showFixedAssetsDetails, setShowFixedAssetsDetails] = useState(false);

  const streamsoftModules = [
    { name: 'Zarządzanie Produkcją', icon: Package },
    { name: 'Handlowo-Magazynowy', icon: ShoppingCart },
    { name: 'CRM', icon: Users },
    { name: 'Finanse i Księgowość', icon: Calculator },
    { name: 'Kadry i Płace', icon: UserCheck },
    { name: 'Logistyka', icon: Truck },
    { name: 'DMS', icon: Database },
    { name: 'Rozrachunki', icon: DollarSign },
    { name: 'Środki Trwałe', icon: Building, id: 'fixed-assets' },
    { name: 'Wyposażenie', icon: Box },
    { name: 'Serwis', icon: Wrench },
    { name: 'Raporty i Formularze', icon: FileText },
    { name: 'Księga Podatkowa', icon: BookOpen },
    { name: 'Produkt', icon: Package },
    { name: 'Administrator', icon: Settings },
    { name: 'Wspólne', icon: Globe },
    { name: 'Business Intelligence', icon: BarChart3 },
    { name: 'PIVOT', icon: PieChart },
    { name: 'Magazyn Mobilny', icon: Smartphone },
    { name: 'Panel Pracownika', icon: User },
    { name: 'B2B', icon: ShoppingBag },
    { name: 'Kurier', icon: Mail },
    { name: 'Windykator', icon: DollarSign },
    { name: 'Serwis', icon: Shield }
      ]; 
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
              onClick={() => setSelectedSolution(null)}
              className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
              onClick={() => {
                setSelectedSolution(null);
                setSelectedSubSolution(null);
              }}
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
                      onClick={() => {
                        if (module.id === 'fixed-assets') {
                          setShowFixedAssetsDetails(true);
                        }
                      }}
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

                {showFixedAssetsDetails && (
                  <div className="mt-8 bg-gray-50 rounded-lg p-8">
                    <button
                      onClick={() => {
                        setShowFixedAssetsDetails(false);
                        setSelectedSubSolution(null);
                      }}
                      className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 mb-8"
                    >
                      <ChevronRight className="h-5 w-5 mr-2 rotate-180" />
                      Powrót do modułów Streamsoft
                    </button>

                    <div className="flex items-center mb-8">
                      <Building className="h-8 w-8 text-blue-600 mr-3" />
                      <h4 className="text-2xl font-bold text-gray-900">Moduł Środki Trwałe</h4>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Image Column */}
                      <div className="flex justify-center">
                        <img
                          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="Środki Trwałe - zarządzanie majątkiem firmy"
                          className="rounded-lg shadow-lg max-w-full h-auto"
                        />
                      </div>

                      {/* Description Column */}
                      <div className="space-y-6">
                        <div>
                          <p className="text-gray-700 leading-relaxed">
                            Moduł Środki Trwałe Streamsoft Prestiż zapewnia pełną kontrolę nad majątkiem trwałym, 
                            wartościami niematerialnymi, jak i prawnymi. Oferuje szereg możliwości w zakresie 
                            zarządzania środkami trwałymi i ich amortyzacji. Można także skorzystać z szerokiego 
                            katalogu wydruków oraz zestawień dostępnych w module, a gdyby zaszła taka potrzeba - 
                            definiować własne, zgodnie z bieżącymi potrzebami. Moduł posiada również mechanizm cech, 
                            czyli opcję pomocną przy wprowadzaniu własnych parametrów środków trwałych.
                          </p>
                        </div>

                        <div>
                          <h5 className="text-xl font-semibold text-gray-900 mb-3">Ewidencja środków trwałych</h5>
                          <p className="text-gray-700 leading-relaxed">
                            Moduł wspiera procesy ewidencjonowania środków trwałych. Możliwa jest ewidencja na podstawie 
                            szerokiego katalogu dokumentów: przyjęcia, likwidacji, ulepszenia, zmiany wprowadzonej przez 
                            użytkownika czy przeszacowania. Sprzyja to budowaniu pełnej historii majątku i pozwala 
                            użytkownikom modułu prześledzić kompletną ścieżkę danego środka trwałego, od chwili jego 
                            przyjęcia w firmie. Wgląd w aktualne dane jest intuicyjny, historię majątku trwałego można 
                            wywołać na kliknięcie – szybko i sprawnie.
                          </p>
                        </div>

                        <div>
                          <h5 className="text-xl font-semibold text-gray-900 mb-3">Kastomizacja parametrów</h5>
                          <p className="text-gray-700 leading-relaxed">
                            Moduł umożliwia szybkie filtrowanie oraz tworzenie autorskich parametrów dla różnych kategorii 
                            środków trwałych, np. przegląd sprzętu komputerowego, numer atestu urządzeń czy data przeglądu 
                            floty samochodowej. Moduł jest pod tym względem uniwersalny i posiada szeroki zakres funkcji. 
                            Dlatego zaspokaja potrzeby kadry zarządzającej, która oczekuje dostępu do różnorodnych 
                            informacji o posiadanym majątku trwałym.
                          </p>
                        </div>

                        <div>
                          <h5 className="text-xl font-semibold text-gray-900 mb-3">Inwentaryzacja</h5>
                          <p className="text-gray-700 leading-relaxed">
                            W module Środki Trwałe inwentaryzację można przeprowadzić zgodnie z wyodrębnionymi w firmie 
                            polami spisowymi, szybko i sprawnie generując odpowiednie arkusze spisowe. Dodatkowym 
                            usprawnieniem jest opcja generowania kodów kresowych wprost z systemu Streamsoft Prestiż 
                            i wykorzystanie kolektorów danych do wykonania spisu.
                          </p>
                        </div>

                        <div>
                          <h5 className="text-xl font-semibold text-gray-900 mb-3">Amortyzacja</h5>
                          <p className="text-gray-700 leading-relaxed">
                            Obliczanie odpisów amortyzacyjnych odbywa się w oparciu o składniki środków trwałych. 
                            Amortyzacja może przebiegać według ustalonej przez użytkownika metody (dostępne metody: 
                            liniowa, degresywna, jednorazowo). Prostą weryfikację skuteczności wybranej metody 
                            zapewniają plany i prognozy z perspektywą na kolejne lata.
                          </p>
                        </div>

                        <div>
                          <h5 className="text-xl font-semibold text-gray-900 mb-3">Wydruki i zestawienia</h5>
                          <p className="text-gray-700 leading-relaxed">
                            W module dostępny jest szeroki katalog dokumentów z zakresu analizy środków trwałych: 
                            standardowe tabele amortyzacyjne w ujęciu bilansowanym, dokumenty dotyczące m.in. przyjęcia 
                            i likwidacji, zmiany miejsca użytkowania, zmiany danych oraz raporty i wydruki definiowane 
                            tworzone wg potrzeb użytkownika.
                          </p>
                        </div>
                      </div>
                    </div>
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

                          {/* Example 2 */}
                          <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="bg-yellow-100 rounded-lg p-8 h-64 flex items-center justify-center">
                              <div className="text-center">
                                <BarChart3 className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
                                <p className="text-yellow-800 font-semibold">Monitoring zasobów</p>
                              </div>
                            </div>
                            <div>
                              <h5 className="text-xl font-semibold text-gray-900 mb-4">Wykorzystanie CPU, RAM i dysku</h5>
                              <p className="text-gray-700 mb-4">
                                Szczegółowe monitorowanie wykorzystania zasobów systemowych w czasie rzeczywistym. 
                                System automatycznie ostrzega o przekroczeniu limitów i optymalizuje alokację zasobów.
                              </p>
                              <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                  <span className="text-purple-500 mr-2">•</span>
                                  <span>Monitoring CPU, RAM i przestrzeni dyskowej</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-purple-500 mr-2">•</span>
                                  <span>Alerty o przekroczeniu limitów zasobów</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-purple-500 mr-2">•</span>
                                  <span>Automatyczna optymalizacja wydajności</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Example 3 */}
                          <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="bg-pink-100 rounded-lg p-8 h-64 flex items-center justify-center">
                              <div className="text-center">
                                <Shield className="h-16 w-16 text-pink-600 mx-auto mb-4" />
                                <p className="text-pink-800 font-semibold">Panel backup</p>
                              </div>
                            </div>
                            <div>
                              <h5 className="text-xl font-semibold text-gray-900 mb-4">Automatyczne kopie zapasowe VM</h5>
                              <p className="text-gray-700 mb-4">
                                Zaawansowany system tworzenia kopii zapasowych maszyn wirtualnych z możliwością 
                                harmonogramowania, wersjonowania i szybkiego przywracania danych.
                              </p>
                              <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                  <span className="text-purple-500 mr-2">•</span>
                                  <span>Automatyczne harmonogramowanie backup</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-purple-500 mr-2">•</span>
                                  <span>Wersjonowanie i archiwizacja kopii</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-purple-500 mr-2">•</span>
                                  <span>Szybkie przywracanie całych VM</span>
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

                          {/* Example 2 */}
                          <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="bg-emerald-100 rounded-lg p-8 h-64 flex items-center justify-center">
                              <div className="text-center">
                                <Database className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                                <p className="text-emerald-800 font-semibold">Przywracanie danych</p>
                              </div>
                            </div>
                            <div>
                              <h5 className="text-xl font-semibold text-gray-900 mb-4">Szybkie odzyskiwanie plików</h5>
                              <p className="text-gray-700 mb-4">
                                Intuicyjny interfejs umożliwia szybkie wyszukiwanie i przywracanie pojedynczych plików 
                                lub całych folderów z kopii zapasowych. System wspiera przywracanie do różnych lokalizacji.
                              </p>
                              <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                  <span className="text-cyan-500 mr-2">•</span>
                                  <span>Wyszukiwanie plików w kopiach zapasowych</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-cyan-500 mr-2">•</span>
                                  <span>Przywracanie do oryginalnej lub nowej lokalizacji</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-cyan-500 mr-2">•</span>
                                  <span>Podgląd zawartości przed przywróceniem</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Example 3 */}
                          <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="bg-violet-100 rounded-lg p-8 h-64 flex items-center justify-center">
                              <div className="text-center">
                                <Shield className="h-16 w-16 text-violet-600 mx-auto mb-4" />
                                <p className="text-violet-800 font-semibold">Ustawienia bezpieczeństwa</p>
                              </div>
                            </div>
                            <div>
                              <h5 className="text-xl font-semibold text-gray-900 mb-4">Konfiguracja szyfrowania i dostępu</h5>
                              <p className="text-gray-700 mb-4">
                                Zaawansowane opcje bezpieczeństwa zapewniają pełną ochronę danych w chmurze. 
                                System oferuje szyfrowanie end-to-end oraz szczegółowe zarządzanie uprawnieniami dostępu.
                              </p>
                              <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                  <span className="text-cyan-500 mr-2">•</span>
                                  <span>Szyfrowanie AES-256 dla wszystkich danych</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-cyan-500 mr-2">•</span>
                                  <span>Zarządzanie uprawnieniami użytkowników</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-cyan-500 mr-2">•</span>
                                  <span>Logi dostępu i audyt bezpieczeństwa</span>
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