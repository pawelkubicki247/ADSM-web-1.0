import React, { useState } from 'react';
import { Monitor, Download, Shield, Clock, CheckCircle, AlertCircle, PhoneCall, MessageSquare } from 'lucide-react';

const RemoteHelp: React.FC = () => {
  const [requestForm, setRequestForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    urgency: '',
    problem: '',
    description: '',
    systemInfo: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Remote help request submitted:', requestForm);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setRequestForm({
        name: '',
        email: '',
        company: '',
        phone: '',
        urgency: '',
        problem: '',
        description: '',
        systemInfo: ''
      });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setRequestForm({
      ...requestForm,
      [e.target.name]: e.target.value
    });
  };

  const remoteTools = [
    {
      name: 'TeamViewer',
      description: 'Bezpieczne połączenie zdalne do Twojego komputera',
      icon: Monitor,
      downloadUrl: 'https://www.teamviewer.com/download/',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'AnyDesk',
      description: 'Szybkie i bezpieczne narzędzie dostępu zdalnego',
      icon: Download,
      downloadUrl: 'https://anydesk.com/download',
      color: 'bg-green-100 text-green-600'
    },
    {
      name: 'Chrome Remote Desktop',
      description: 'Dostęp przez przeglądarkę Chrome',
      icon: Shield,
      downloadUrl: 'https://remotedesktop.google.com/',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const responseTime = [
    { urgency: 'critical', time: '15 minut', description: 'Problemy krytyczne - system nie działa', color: 'text-red-600' },
    { urgency: 'high', time: '1 godzina', description: 'Problemy pilne - ograniczona funkcjonalność', color: 'text-orange-600' },
    { urgency: 'medium', time: '4 godziny', description: 'Problemy standardowe', color: 'text-yellow-600' },
    { urgency: 'low', time: '24 godziny', description: 'Konsultacje i optymalizacje', color: 'text-green-600' }
  ];

  if (isSubmitted) {
    return (
      <section id="remote-help" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-12">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Zgłoszenie przyjęte!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Dziękujemy za zgłoszenie. Nasz zespół techniczny skontaktuje się z Państwem 
              zgodnie z priorytetem zgłoszenia.
            </p>
            <div className="bg-white rounded-lg p-6 border border-green-200">
              <h3 className="font-semibold text-gray-900 mb-2">Co dalej?</h3>
              <div className="text-left space-y-2 text-sm text-gray-600">
                <p>• Otrzymają Państwo SMS z kodem zgłoszenia</p>
                <p>• Nasz konsultant skontaktuje się telefonicznie</p>
                <p>• Przygotujemy narzędzia do zdalnego dostępu</p>
                <p>• Rozpoczniemy rozwiązywanie problemu</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="remote-help" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pomoc zdalna</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Potrzebujesz natychmiastowej pomocy? Nasi eksperci mogą połączyć się z Twoim komputerem 
            i rozwiązać problem zdalnie w czasie rzeczywistym.
          </p>
        </div>

        {/* Response Times */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center flex items-center justify-center">
            <Clock className="h-6 w-6 text-blue-600 mr-2" />
            Czas reakcji na zgłoszenia
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {responseTime.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className={`font-bold text-lg mb-1 ${item.color}`}>{item.time}</div>
                <div className="text-sm font-medium text-gray-700 mb-2">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Remote Tools */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Narzędzia zdalnego dostępu</h3>
            <p className="text-gray-600 mb-6">
              Aby udzielić pomocy zdalnej, potrzebujemy dostępu do Twojego komputera. 
              Wybierz jedno z poniższych narzędzi i pobierz je na swój komputer:
            </p>
            
            <div className="space-y-4">
              {remoteTools.map((tool, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center mr-4`}>
                      <tool.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h4>
                      <p className="text-gray-600 mb-4">{tool.description}</p>
                      <a
                        href={tool.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Pobierz
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Security Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Bezpieczeństwo</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Nigdy nie udostępniaj kodu dostępu osobom nieupoważnionym</li>
                    <li>• Połączenie jest szyfrowane i bezpieczne</li>
                    <li>• Możesz zakończyć sesję w każdej chwili</li>
                    <li>• Nasz konsultant poprosi o zgodę przed każdą akcją</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Request Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Zgłoś problem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={requestForm.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={requestForm.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="jan@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Firma *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={requestForm.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Nazwa firmy"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={requestForm.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="+48 123 456 789"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                      Pilność problemu *
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      required
                      value={requestForm.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Wybierz pilność</option>
                      <option value="critical">Krytyczny - system nie działa</option>
                      <option value="high">Pilny - ograniczona funkcjonalność</option>
                      <option value="medium">Standardowy</option>
                      <option value="low">Niski - konsultacja</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-2">
                      Typ problemu *
                    </label>
                    <select
                      id="problem"
                      name="problem"
                      required
                      value={requestForm.problem}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Wybierz problem</option>
                      <option value="streamsoft-issue">Problem z systemem Streamsoft</option>
                      <option value="network-issue">Problem z siecią/internetem</option>
                      <option value="software-issue">Problem z oprogramowaniem</option>
                      <option value="hardware-issue">Problem ze sprzętem</option>
                      <option value="backup-issue">Problem z kopiami zapasowymi</option>
                      <option value="security-issue">Problem z bezpieczeństwem</option>
                      <option value="other">Inny problem</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Opis problemu *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    value={requestForm.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Opisz dokładnie jaki problem występuje, co robił(a) przed wystąpieniem problemu, jakie komunikaty pojawiają się na ekranie..."
                  />
                </div>

                <div>
                  <label htmlFor="systemInfo" className="block text-sm font-medium text-gray-700 mb-2">
                    Informacje o systemie
                  </label>
                  <textarea
                    id="systemInfo"
                    name="systemInfo"
                    rows={2}
                    value={requestForm.systemInfo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="System operacyjny, wersja oprogramowania (jeśli znana), itp."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center"
              >
                <AlertCircle className="h-5 w-5 mr-2" />
                Wyślij zgłoszenie pomocy
              </button>
            </form>

            {/* Emergency Contact */}
            <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                <PhoneCall className="h-5 w-5 mr-2" />
                Kontakt w sytuacjach krytycznych
              </h4>
              <p className="text-red-700 mb-3">
                W przypadku awarii krytycznej, gdy system nie działa i potrzebna jest natychmiastowa pomoc:
              </p>
              <div className="space-y-2 text-red-800">
                <div className="font-semibold">Telefon: +48 123 456 789</div>
                <div className="text-sm">Dostępny 24/7 dla klientów z umowami serwisowymi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoteHelp;