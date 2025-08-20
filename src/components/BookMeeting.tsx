import React, { useState } from 'react';
import { Calendar, Clock, User, Building, MessageCircle, CheckCircle } from 'lucide-react';

const BookMeeting: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    meetingType: '',
    preferredDate: '',
    preferredTime: '',
    duration: '',
    topic: '',
    description: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Meeting booking submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        meetingType: '',
        preferredDate: '',
        preferredTime: '',
        duration: '',
        topic: '',
        description: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section id="book-meeting" className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Spotkanie zarezerwowane!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Dziękujemy za rezerwację spotkania. Skontaktujemy się z Państwem w ciągu 24 godzin 
              w celu potwierdzenia terminu i szczegółów spotkania.
            </p>
            <p className="text-sm text-gray-500">
              Na podany adres email wyślemy potwierdzenie z wszystkimi informacjami.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book-meeting" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Umów spotkanie</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Zarezerwuj bezpłatną konsultację z naszymi ekspertami. Omówimy Twoje potrzeby i zaproponujemy najlepsze rozwiązania.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Elastyczne terminy</h3>
              <p className="text-sm text-gray-600">Dopasowujemy się do Twojego harmonogramu</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Online lub stacjonarnie</h3>
              <p className="text-sm text-gray-600">Wybierz wygodną dla siebie formę spotkania</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Bezpłatna konsultacja</h3>
              <p className="text-sm text-gray-600">Pierwsze spotkanie zawsze bez zobowiązań</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <User className="h-5 w-5 text-blue-600 mr-2" />
                Dane kontaktowe
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
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
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="jan@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Firma *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
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
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="+48 123 456 789"
                  />
                </div>
              </div>
            </div>

            {/* Meeting Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                Szczegóły spotkania
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="meetingType" className="block text-sm font-medium text-gray-700 mb-2">
                    Typ spotkania *
                  </label>
                  <select
                    id="meetingType"
                    name="meetingType"
                    required
                    value={formData.meetingType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Wybierz typ spotkania</option>
                    <option value="online">Spotkanie online (Microsoft Teams/Zoom)</option>
                    <option value="office">Spotkanie w naszym biurze</option>
                    <option value="client">Spotkanie u klienta</option>
                    <option value="phone">Rozmowa telefoniczna</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                    Przewidywany czas trwania
                  </label>
                  <select
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Wybierz czas</option>
                    <option value="30min">30 minut</option>
                    <option value="1h">1 godzina</option>
                    <option value="1.5h">1,5 godziny</option>
                    <option value="2h">2 godziny</option>
                    <option value="longer">Dłużej niż 2 godziny</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferowany termin *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferowana godzina *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Wybierz godzinę</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Meeting Topic */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <MessageCircle className="h-5 w-5 text-blue-600 mr-2" />
                Temat spotkania
              </h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                    Główny temat *
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    required
                    value={formData.topic}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Wybierz temat</option>
                    <option value="streamsoft-demo">Prezentacja systemu Streamsoft</option>
                    <option value="streamsoft-implementation">Wdrożenie systemu ERP</option>
                    <option value="dedicated-software">Oprogramowanie dedykowane</option>
                    <option value="cloud-migration">Migracja do chmury</option>
                    <option value="backup-solutions">Rozwiązania backup</option>
                    <option value="it-audit">Audyt IT</option>
                    <option value="technical-support">Wsparcie techniczne</option>
                    <option value="consultation">Konsultacja ogólna</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Opis potrzeb i oczekiwań
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Opisz szczegółowo swoje potrzeby, aktualne wyzwania i oczekiwania wobec rozwiązania IT..."
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Zarezerwuj spotkanie
              </button>
              <p className="text-sm text-gray-500 text-center mt-4">
                Po złożeniu zgłoszenia skontaktujemy się z Państwem w ciągu 24 godzin w celu potwierdzenia terminu
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookMeeting;