import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ITSolutions from './components/ITSolutions';
import References from './components/References';
import CaseStudy from './components/CaseStudy';
import Contact from './components/Contact';
import BookMeeting from './components/BookMeeting';
import RemoteHelp from './components/RemoteHelp';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutUs />;
      case 'solutions':
        return <ITSolutions />;
        {* wylaczone z wyswietlania do czasu poprawy pk. 2025.08.28
      case 'references':
        return <References />;
      case 'case-study':
        return <CaseStudy />;
        8}
      case 'contact':
        return <Contact />;
      case 'book-meeting':
        return <BookMeeting />;
      case 'remote-help':
        return <RemoteHelp />;
      case 'privacy-policy':
        return <PrivacyPolicy />;
      default:
        return <AboutUs />;
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-16 min-h-screen">
        {renderActiveSection()}
      </main>
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;
