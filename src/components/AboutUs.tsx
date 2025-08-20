import React from 'react';
import { Award, Target, Users, ArrowLeft } from 'lucide-react';

const AboutUs: React.FC = () => {
  const [showPrince2Details, setShowPrince2Details] = React.useState(false);
  const [showAgileDetails, setShowAgileDetails] = React.useState(false);

  const methodologies = [
    {
      name: 'PRINCE2',
      icon: Award,
      description: 'Standaryzowane metoda zarzadzania projektami',
      link: '#',
      onClick: () => setShowPrince2Details(true)
    },
    {
      name: 'AGILE',
      icon: Target,
      description: 'Elastyczne podejście do rozwoju / Flexible development approach',
      link: '#',
      onClick: () => setShowAgileDetails(true)
    },
    {
      name: 'SCRUM',
      icon: Users,
      description: 'Metoda zarządzania projektami IT oparta na zasadach Agile / Framework for complex product development',
      link: 'https://scrumguides.org/',
      onClick: null
    }
  ];

  if (showAgileDetails) {
    return (
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setShowAgileDetails(false)}
            className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Powrót do sekcji O nas
          </button>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Agile — w pigułce (po polsku)
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div className="bg-blue-50 rounded-lg p-6 my-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Manifest Agile — o co chodzi?</h3>
                <p>
                  Manifest programowania zwinnego (Agile Manifesto) to krótka deklaracja wartości i zasad, która w 2001 r. 
                  w Snowbird (Utah) zapoczątkowała zwrot w myśleniu o tworzeniu oprogramowania. Na jego fundamencie powstały 
                  i rozwinęły się metodyki zwinne (m.in. Scrum, Kanban, XP).
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">4 wartości Agile</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p><strong>Ludzie i interakcje</strong> ponad procesy i narzędzia.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p><strong>Działające oprogramowanie</strong> ponad wyczerpującą dokumentację.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p><strong>Współpraca z klientem</strong> ponad negocjacje umów.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p><strong>Reagowanie na zmiany</strong> ponad realizację planu.</p>
                </div>
              </div>
              <p className="italic text-gray-600 bg-gray-50 p-4 rounded-lg">
                W praktyce: elementy po prawej też są ważne, lecz Agile mocniej akcentuje to, co po lewej — 
                bo to szybciej dostarcza wartość.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">12 zasad Agile (w praktyce)</h3>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-1">1</span>
                  <div>Zadowolenie klienta dzięki wczesnemu i częstemu dostarczaniu wartości.</div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-1">2</span>
                  <div>Akceptacja zmian wymagań — nawet późno w projekcie — dla przewagi konkurencyjnej.</div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-1">3</span>
                  <div>Częste wydania działającego oprogramowania (od kilku tygodni do kilku miesięcy).</div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-1">4</span>
                  <div>Ścisła współpraca biznesu i zespołu w całym cyklu życia projektu.</div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-1">5</span>
                  <div>Budowanie projektów wokół zmotywowanych ludzi: właściwe środowisko, wsparcie i zaufanie.</div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-1">6</span>
                  <div>Najefektywniejsza komunikacja to rozmowa bezpośrednia (face‑to‑face).</div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-1">7</span>
                  <div>Działające oprogramowanie jest podstawową miarą postępu.</div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-1">8</span>
                  <div>Zrównoważone tempo pracy (sponsorzy, użytkownicy i zespół utrzymują równy rytm).</div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-1">9</span>
                  <div>Ciągłe dążenie do doskonałości technicznej i dobrego projektowania zwiększa zwinność.</div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-1">10</span>
                  <div>Prostota — sztuka minimalizowania niezbędnej pracy.</div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-1">11</span>
                  <div>Zespoły samoorganizujące się wybierają sposób pracy i narzędzia adekwatne do celu.</div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-1">12</span>
                  <div>Regularna inspekcja i adaptacja (przeglądy i retrospektywy) zwiększa efektywność.</div>
                </li>
              </ol>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Jak zbudować harmonogram Agile (6 kroków)</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">1) Określenie wizji produktu</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Zdefiniuj cel, grupę docelową, wartość i kluczowe funkcje.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Ustal, czy używasz roadmapy (horyzont, kamienie milowe) czy planu sprintów (krótkie iteracje).</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">2) Backlog produktu</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Zbieraj wymagania z klientami, użytkownikami i zespołem.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Twórz historyjki użytkownika i nadaj im priorytety.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Szacuj wysiłek (np. story points) i złożoność.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Systematycznie porządkuj (refinement): dodawaj, dziel, usuwaj, aktualizuj priorytety.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Dbaj o przejrzystość backlogu dla wszystkich interesariuszy.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">3) Dzielenie na sprinty</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Ustal kolejność elementów i możliwości zespołu (capacity).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Wybierz zakres sprintu i określ cel sprintu.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Prowadź codzienne synchronizacje i adaptuj plan do zmian.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Po sprincie: przegląd przyrostu i retrospektywa procesu.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">4) Cele i kamienie milowe</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Dają punkty odniesienia i koncentrację na najważniejszych efektach.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Wzmacniają motywację i odpowiedzialność całego zespołu.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Ułatwiają adaptację do zmian i komunikację z interesariuszami.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">5) Wspólne planowanie</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Zapewnij udział interdyscyplinarnych zespołów i interesariuszy.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Prowadź iteracyjne dyskusje; rozbijaj złożone zadania na mniejsze.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Wizualizuj postęp: tablice Kanban, roadmapy, wykresy zależności.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Decyzje podejmuj wspólnie, by wzmacniać zaangażowanie i odpowiedzialność.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">6) Ciągłe doskonalenie</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Zbieraj feedback od użytkowników, interesariuszy i zespołu.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Wprowadzaj przyrostowe korekty i ucz się na bieżąco.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Buduj kulturę inspekcji i adaptacji (empiryzm).</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Podsumowanie</h3>
                <p>
                  Agile to praktyka dostarczania wartości małymi krokami, z bliską współpracą z klientem i gotowością na zmiany. 
                  Harmonogram jest żywy, wspiera przejrzystość i decyzje oparte na danych, a miarą postępu jest działające oprogramowanie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (showPrince2Details) {
    return (
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setShowPrince2Details(false)}
            className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Powrót do sekcji O nas
          </button>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              PRINCE2 – Profesjonalna metoda zarządzania projektami
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                PRINCE2 (PRojects IN Controlled Environments) to globalnie uznana metoda zarządzania projektami, 
                wykorzystywana przez specjalistów i organizacje z różnych branż. Dzięki swojej elastyczności 
                i uniwersalności, PRINCE2 sprawdza się w projektach o różnej skali i specyfice, wspierając 
                zespoły w osiąganiu sukcesu.
              </p>

              <div className="bg-blue-50 rounded-lg p-6 my-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Dlaczego warto wybrać PRINCE2?</h3>
                <p className="mb-4">
                  PRINCE2 to sprawdzone podejście oparte na siedmiu zasadach, tematach i procesach, które można 
                  dostosować do indywidualnych potrzeb projektu. Kluczowe korzyści płynące z zastosowania metody to:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Uzasadnienie biznesowe:</strong> Stałe monitorowanie opłacalności projektu, zapewniające efektywne wykorzystanie zasobów.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Struktura organizacyjna:</strong> Jasno zdefiniowane role i obowiązki, minimalizujące ryzyko konfliktów w zespole.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Planowanie oparte na produktach:</strong> Skupienie na dostarczaniu wysokiej jakości rezultatów zgodnych z oczekiwaniami interesariuszy.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Etapowe zarządzanie:</strong> Podział projektu na kontrolowane etapy, umożliwiające bieżącą ocenę postępów.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Elastyczność:</strong> Możliwość dostosowania metody do specyfiki każdego projektu i organizacji.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Skuteczne zarządzanie ryzykiem:</strong> Lepsza kontrola nad potencjalnymi zagrożeniami i zmianami.</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Siedem zasad PRINCE2 – Fundament sukcesu</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">1. Ciągła zasadność biznesowa</h4>
                  <p>Projekt musi mieć uzasadniony cel biznesowy, który jest regularnie weryfikowany. Jeśli projekt przestaje być opłacalny, jest zamykany, co zapobiega marnowaniu zasobów.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">2. Korzystanie z doświadczeń</h4>
                  <p>Analiza poprzednich projektów pozwala unikać błędów i wdrażać sprawdzone rozwiązania.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">3. Zdefiniowane role i obowiązki</h4>
                  <p>Jasna struktura zespołu zapewnia efektywne zaangażowanie wszystkich interesariuszy.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">4. Zarządzanie etapowe</h4>
                  <p>Projekt dzielony jest na etapy, co ułatwia kontrolę i podejmowanie decyzji na każdym kroku.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">5. Zarządzanie z wykorzystaniem tolerancji</h4>
                  <p>Określenie dopuszczalnych odchyleń w czasie, kosztach, jakości, zakresie, ryzyku i korzyściach zapewnia elastyczność i kontrolę.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">6. Skoncentrowanie na produktach</h4>
                  <p>Szczegółowy opis produktów gwarantuje zgodność z wymaganiami interesariuszy.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">7. Dostosowanie do warunków projektu</h4>
                  <p>PRINCE2 jest uniwersalne, ale wymaga dostosowania do specyfiki organizacji i projektu, co zapewnia optymalne rezultaty.</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Siedem tematów PRINCE2 – Klucz do skutecznego zarządzania</h3>
              <p className="mb-4">Metoda PRINCE2 opiera się na siedmiu tematach, które są stale realizowane przez cały cykl życia projektu:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Uzasadnienie biznesowe</h4>
                  <p className="text-sm">Stałe monitorowanie celów projektu.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Organizacja</h4>
                  <p className="text-sm">Jasne określenie ról i odpowiedzialności.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Jakość</h4>
                  <p className="text-sm">Zapewnienie zgodności produktów z oczekiwaniami.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Plany</h4>
                  <p className="text-sm">Szczegółowe plany wspierające realizację celów.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Ryzyko</h4>
                  <p className="text-sm">Proaktywne zarządzanie potencjalnymi zagrożeniami.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Zmiana</h4>
                  <p className="text-sm">Kontrola i zarządzanie zmianami w projekcie.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Postęp</h4>
                  <p className="text-sm">Monitorowanie i raportowanie postępów w stosunku do planu.</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Siedem procesów PRINCE2 – Droga do sukcesu</h3>
              <p className="mb-4">PRINCE2 definiuje siedem procesów, które prowadzą przez każdy etap projektu:</p>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-1">1</span>
                  <div>
                    <strong>Przygotowanie projektu:</strong> Określenie podstaw i celów projektu.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-1">2</span>
                  <div>
                    <strong>Inicjowanie projektu:</strong> Utworzenie szczegółowego planu i dokumentacji.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-1">3</span>
                  <div>
                    <strong>Zarządzanie strategiczne projektem:</strong> Nadzór nad kierunkiem projektu.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-1">4</span>
                  <div>
                    <strong>Sterowanie etapem:</strong> Monitorowanie i kontrolowanie każdego etapu.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-1">5</span>
                  <div>
                    <strong>Zarządzanie wytwarzaniem produktów:</strong> Zapewnienie dostarczania produktów zgodnie z planem.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-1">6</span>
                  <div>
                    <strong>Zarządzanie końcowym etapem:</strong> Ocena wyników i przygotowanie do zamknięcia.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-1">7</span>
                  <div>
                    <strong>Zamykanie projektu:</strong> Formalne zakończenie i ocena projektu.
                  </div>
                </li>
              </ol>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Korzyści dla organizacji</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Spójne podejście:</strong> Ujednolicona metodologia dla wszystkich projektów.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Kontrola i organizacja:</strong> Strukturyzowany początek, środek i koniec projektu.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Stały monitoring:</strong> Regularne porównywanie postępów z planem.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Elastyczność:</strong> Możliwość dostosowania do małych i dużych firm.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Korzyści dla jednostek</h3>
                  <p>
                    Certyfikat PRINCE2 to cenny atut na rynku pracy. Badanie AXELOS z 2016 roku potwierdziło, 
                    że specjaliści z certyfikatem PRINCE2 są bardziej konkurencyjni i efektywni w zarządzaniu 
                    projektami, niezależnie od branży.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Role w PRINCE2</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Kierownik projektu</h4>
                  <p className="text-sm text-gray-600">Odpowiada za organizację, kontrolę i realizację projektu.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Klient</h4>
                  <p className="text-sm text-gray-600">Finansuje projekt i określa jego cele.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Użytkownik</h4>
                  <p className="text-sm text-gray-600">Korzysta z wyników projektu i definiuje wymagania.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Dostawca</h4>
                  <p className="text-sm text-gray-600">Zapewnia specjalistyczną wiedzę i umiejętności.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 md:col-span-2 lg:col-span-1">
                  <h4 className="font-semibold text-gray-900 mb-2">Komitet Sterujący</h4>
                  <p className="text-sm text-gray-600">Podejmuje kluczowe decyzje, wspierając kierownika projektu.</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Techniki zarządzania w PRINCE2</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Zapewnienie jakości</h4>
                  <p>Niezależna kontrola biznesowa, użytkownika i specjalisty gwarantuje zgodność projektu z celami.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Wsparcie projektu</h4>
                  <p>Biuro Wsparcia Projektu odciąża kierownika w zadaniach administracyjnych, szczególnie w dużych organizacjach.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Zarządzanie zakresem</h4>
                  <p>PRINCE2 zapewnia wspólny język i strukturę, ułatwiając współpracę między klientem, dostawcami i użytkownikami.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Kontrola zmian</h4>
                  <p>Systematyczne zarządzanie ryzykiem, jakością i zmianami w projekcie zapewnia utrzymanie właściwego kierunku.</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Podsumowanie</h3>
                <p>
                  PRINCE2 to nie tylko metoda, ale kompleksowe podejście do zarządzania projektami, które zwiększa 
                  szanse na sukces. Dostosowana do specyfiki każdego projektu, zapewnia jasność ról, skuteczne 
                  zarządzanie ryzykiem i kontrolę nad realizacją. Choć PRINCE2 nie gwarantuje sukcesu, daje solidne 
                  podstawy do osiągania celów na czas, w ramach budżetu i zgodnie z oczekiwaniami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
              <div
                key={index}
                onClick={methodology.onClick || (() => {
                  if (methodology.link.startsWith('http')) {
                    window.open(methodology.link, '_blank', 'noopener noreferrer');
                  }
                })}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <methodology.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {methodology.name}
                </h3>
                <p className="text-gray-600">{methodology.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;