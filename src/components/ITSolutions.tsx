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

  const streamsoftModules = [
    { name: 'Zarządzanie Produkcją', icon: Package },
    { name: 'Handlowo-Magazynowy', icon: ShoppingCart },
    { name: 'CRM', icon: Users },
    { name: 'Finanse i Księgowość', icon: Calculator },
    { name: 'Kadry i Płace', icon: UserCheck },
    { name: 'Logistyka', icon: Truck },
    { name: 'DMS', icon: Database },
    { name: 'Rozrachunki', icon: DollarSign },
    { name: 'Środki Trwałe', icon: Building },
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

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Bazy danych na VM */}
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <Server className="h-6 w-6 text-blue-600 mr-2" />
                      <h4 className="text-xl font-semibold text-gray-900">Bazy danych na VM</h4>
                    </div>
                    <p className="text-gray-700 mb-6">
                      Oferujemy wsparcie w procesie projektowania i wdrożenia platformy witalizacyjnej. Jeśli stoisz w obliczu zwiększonych kosztów operacyjnych i niewydajnego wykorzystania zasobów IT musisz rozważyć wdrożenie technologii wirtualizacyjnej. Rozwiązanie wirtualizacji zwiększa elastyczność centrów danych, pozwala zaspokoić potrzeby związane z ceną / wydajnością, a także ułatwia wdrażanie, zarządzanie i obsługę aplikacji.
                    </p>
                    
                    <div className="grid gap-4">
                      {vmScreens.map((screen, index) => (
                        <div key={index} className="border rounded-lg p-4 hover:shadow-sm transition-shadow duration-300">
                          <div className={`${screen.color} h-24 rounded-lg mb-3 flex items-center justify-center`}>
                            <Monitor className="h-8 w-8 text-gray-600" />
                          </div>
                          <h5 className="font-medium text-gray-900 mb-1">{screen.title}</h5>
                          <p className="text-sm text-gray-600">{screen.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Backup w chmurze */}
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <HardDrive className="h-6 w-6 text-blue-600 mr-2" />
                      <h4 className="text-xl font-semibold text-gray-900">Backup w chmurze dla firm</h4>
                    </div>
                    <div className="text-gray-700 mb-6 space-y-4">
                      <p className="font-semibold">Zabezpiecz swoje dane – chroń przyszłość firmy</p>
                      <p>
                        Dziś bezpieczeństwo danych to fundament każdej działalności. Kradzież laptopa czy awaria dysku to drobnostki w porównaniu z konsekwencjami ataku ransomware. Firma, która traci dostęp do umów, faktur czy baz klientów, w jednej chwili traci też możliwość dalszego działania.
                      </p>
                      <p>
                        Cyberprzestępcy liczą na to, że zapłacisz okup – bez gwarancji odzyskania danych. Ty możesz być o krok przed nimi.
                      </p>
                      <p className="font-medium">👉 Rozwiązanie? Regularny backup danych.</p>
                      <p>
                        Kopia zapasowa pozwala w kilka chwil przywrócić dostęp do systemu i zapewnia ciągłość biznesu, nawet jeśli hakerzy spróbują sparaliżować Twoją firmę.
                      </p>
                      <div>
                        <p className="font-medium mb-2">Backup w chmurze to dziś najskuteczniejsza i najbardziej opłacalna forma ochrony:</p>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>zawsze dostępny – bez względu na to, gdzie jesteś,</li>
                          <li>bezpieczny – chroniony przed cyberatakami i awariami sprzętu,</li>
                          <li>elastyczny – dopasowany do potrzeb Twojej firmy,</li>
                          <li>opłacalny – znacznie tańszy i skuteczniejszy niż tradycyjne nośniki.</li>
                        </ul>
                      </div>
                      <p className="font-semibold">
                        Nie ryzykuj przerwania działalności.<br />
                        Postaw na bezpieczeństwo i spokojny sen – z backupem w chmurze Twoje dane są zawsze pod kontrolą.
                      </p>
                    </div>
                    
                    <div className="grid gap-4">
                      {backupScreens.map((screen, index) => (
                        <div key={index} className="border rounded-lg p-4 hover:shadow-sm transition-shadow duration-300">
                          <div className={`${screen.color} h-24 rounded-lg mb-3 flex items-center justify-center`}>
                            <Monitor className="h-8 w-8 text-gray-600" />
                          </div>
                          <h5 className="font-medium text-gray-900 mb-1">{screen.title}</h5>
                          <p className="text-sm text-gray-600">{screen.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ITSolutions;