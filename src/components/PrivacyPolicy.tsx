import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  setActiveSection?: (section: string) => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ setActiveSection }) => {
  return (
    <section id="privacy-policy" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Polityka Prywatności</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-sm text-gray-600">
              Data ostatniej aktualizacji: 15.08.2025 r.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            {/* 1. Wprowadzenie */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Wprowadzenie</h3>
              <p>
                ADSM Sp. z o.o. (dalej: „my", „nas", „nasz" lub „Spółka") szanuje prywatność użytkowników naszej strony internetowej oraz usług. Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób gromadzimy, wykorzystujemy, udostępniamy i chronimy informacje o użytkownikach. Prosimy o uważne zapoznanie się z dokumentem, aby zrozumieć nasze praktyki dotyczące przetwarzania danych osobowych.
              </p>
            </div>

            {/* 2. Administrator Danych */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Administrator Danych</h3>
              <p className="mb-4">Administratorem danych osobowych jest:</p>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="space-y-2">
                  <p><strong>ADSM Sp. z o.o.</strong></p>
                  <p>ul. Kwartowa 16/3</p>
                  <p>31-419 Kraków</p>
                  <p>NIP: 9452256300</p>
                  <p>REGON: —</p>
                  <p>E-mail: info@adsm.com.pl</p>
                  <p>Tel.: —</p>
                </div>
              </div>
            </div>

            {/* 3. Rodzaje Zbieranych Danych */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Rodzaje Zbieranych Danych</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">3.1. Dane podawane dobrowolnie</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Dane kontaktowe (imię, nazwisko, adres e‑mail, numer telefonu).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Dane firmowe (nazwa firmy, NIP, adres).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Dane profilu (nazwa użytkownika, hasło).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Treść korespondencji z nami.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">3.2. Dane zbierane automatycznie</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Informacje o urządzeniu (typ urządzenia, system operacyjny, przeglądarka).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Adres IP.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Dane o aktywności na stronie (odwiedzone podstrony, czas spędzony na stronie).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Informacje o lokalizacji.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Pliki cookies i podobne technologie.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Cele i Podstawy Prawne */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Cele i Podstawy Prawne Przetwarzania Danych</h3>
              <p className="mb-6">Przetwarzamy dane osobowe w następujących celach:</p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cel przetwarzania</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Podstawa prawna</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Okres przechowywania</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Świadczenie usług</td>
                      <td className="border border-gray-300 px-4 py-3">Wykonanie umowy (art. 6 ust. 1 lit. b RODO)</td>
                      <td className="border border-gray-300 px-4 py-3">Przez czas trwania umowy i do czasu przedawnienia roszczeń</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Marketing własnych produktów i usług</td>
                      <td className="border border-gray-300 px-4 py-3">Uzasadniony interes (art. 6 ust. 1 lit. f RODO) lub zgoda (art. 6 ust. 1 lit. a RODO)</td>
                      <td className="border border-gray-300 px-4 py-3">Do momentu wyrażenia sprzeciwu lub wycofania zgody</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Analiza i poprawa jakości usług</td>
                      <td className="border border-gray-300 px-4 py-3">Uzasadniony interes (art. 6 ust. 1 lit. f RODO)</td>
                      <td className="border border-gray-300 px-4 py-3">Do 2 lat od zebrania danych</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Wypełnienie obowiązków prawnych</td>
                      <td className="border border-gray-300 px-4 py-3">Obowiązek prawny (art. 6 ust. 1 lit. c RODO)</td>
                      <td className="border border-gray-300 px-4 py-3">Zgodnie z wymogami przepisów prawa</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Dochodzenie lub obrona roszczeń</td>
                      <td className="border border-gray-300 px-4 py-3">Uzasadniony interes (art. 6 ust. 1 lit. f RODO)</td>
                      <td className="border border-gray-300 px-4 py-3">Do czasu przedawnienia roszczeń</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5. Odbiorcy Danych */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Odbiorcy Danych</h3>
              <p className="mb-4">Dane osobowe możemy udostępniać następującym kategoriom odbiorców:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Dostawcy usług IT i hostingowych.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Dostawcy oprogramowania CRM i innych narzędzi biznesowych.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Dostawcy usług marketingowych.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Dostawcy usług płatniczych.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Doradcy prawni i podatkowi.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Organy publiczne – gdy jest to wymagane przez prawo.</span>
                </li>
              </ul>
              <p>Wszyscy dostawcy usług, którym powierzamy dane, są zobowiązani do ich odpowiedniej ochrony.</p>
            </div>

            {/* 6. Przekazywanie Danych */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">6. Przekazywanie Danych do Państw Trzecich (poza EOG)</h3>
              <p className="mb-4">W niektórych przypadkach możemy przekazywać dane osobowe poza Europejski Obszar Gospodarczy. Zapewniamy zgodność takich transferów z przepisami o ochronie danych, w szczególności poprzez:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Przekazywanie do krajów uznanych przez Komisję Europejską za zapewniające odpowiedni poziom ochrony.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Zastosowanie standardowych klauzul umownych (SCC) zatwierdzonych przez Komisję Europejską.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>W przypadku transferu do USA – współpracę z podmiotami certyfikowanymi w ramach EU‑US Data Privacy Framework.</span>
                </li>
              </ul>
            </div>

            {/* 7. Cookies */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">7. Pliki Cookies i Podobne Technologie</h3>
              <p className="mb-6">Wykorzystujemy cookies i podobne technologie, by zapewnić prawidłowe działanie serwisu, analizować ruch oraz dostosowywać treści do preferencji użytkowników.</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">7.1. Rodzaje cookies</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Niezbędne – konieczne do funkcjonowania strony.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Funkcjonalne – zapamiętują preferencje użytkownika.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Analityczne – pomagają zrozumieć, w jaki sposób użytkownicy korzystają ze strony.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Marketingowe – służą do wyświetlania spersonalizowanych reklam.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">7.2. Zarządzanie cookies</h4>
                  <p>Ustawienia dotyczące cookies można zmienić w przeglądarce internetowej. Szczegóły znajdują się w jej dokumentacji.</p>
                </div>
              </div>
            </div>

            {/* 8. Prawa */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">8. Prawa Osób, Których Dane Dotyczą</h3>
              <p className="mb-4">Zgodnie z RODO przysługują Państwu m.in.:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Prawo dostępu do danych.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Prawo do sprostowania danych.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Prawo do usunięcia danych („prawo do bycia zapomnianym").</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Prawo do ograniczenia przetwarzania.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Prawo do przenoszenia danych.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Prawo do sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Prawo do wycofania zgody w dowolnym momencie (bez wpływu na zgodność wcześniejszego przetwarzania).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00‑193 Warszawa).</span>
                </li>
              </ul>
              <p>W celu realizacji praw prosimy o kontakt na dane wskazane w pkt 2.</p>
            </div>

            {/* 9. Bezpieczeństwo */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">9. Bezpieczeństwo Danych</h3>
              <p className="mb-4">Stosujemy odpowiednie środki techniczne i organizacyjne, w tym:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Szyfrowanie transmisji danych (SSL/TLS).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Regularne aktualizacje i monitorowanie bezpieczeństwa.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Kontrolę dostępu do danych osobowych.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Szkolenia personelu z zakresu ochrony danych.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Procedury zarządzania incydentami bezpieczeństwa.</span>
                </li>
              </ul>
            </div>

            {/* 10. Zautomatyzowane Podejmowanie Decyzji */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">10. Zautomatyzowane Podejmowanie Decyzji i Profilowanie</h3>
              <p>
                Możemy stosować zautomatyzowane metody przetwarzania danych (w tym profilowanie) w celu analizy lub przewidywania preferencji, zainteresowań i zachowań użytkowników, m.in. by dostosować ofertę, poprawić jakość usług oraz wykrywać nadużycia. Przysługuje prawo do niepodlegania decyzji opartej wyłącznie na zautomatyzowanym przetwarzaniu, wywołującej skutki prawne lub podobnie istotnie na Państwa wpływającej.
              </p>
            </div>

            {/* 11. Ochrona Dzieci */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">11. Ochrona Prywatności Dzieci</h3>
              <p>
                Usługi nie są kierowane do osób poniżej 16. roku życia i nie gromadzimy świadomie ich danych. W razie stwierdzenia takiej sytuacji dane zostaną usunięte.
              </p>
            </div>

            {/* 12. Linki */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">12. Linki do Innych Stron</h3>
              <p>
                Serwis może zawierać linki do stron osób trzecich. Nie ponosimy odpowiedzialności za ich praktyki prywatności. Zachęcamy do zapoznania się z odpowiednimi politykami prywatności.
              </p>
            </div>

            {/* 13. Zmiany */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">13. Zmiany w Polityce Prywatności</h3>
              <p>
                Zastrzegamy sobie prawo do aktualizacji Polityki Prywatności. Data ostatniej aktualizacji znajduje się na górze dokumentu. Zachęcamy do regularnego przeglądu treści.
              </p>
            </div>

            {/* 14. Kontakt */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">14. Kontakt</h3>
              <p className="mb-4">W sprawach związanych z prywatnością i ochroną danych prosimy o kontakt:</p>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="space-y-2">
                  <p><strong>ADSM Sp. z o.o.</strong></p>
                  <p>ul. Kwartowa 16/3</p>
                  <p>31-419 Kraków</p>
                  <p>e-mail: info@adsm.com.pl</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;