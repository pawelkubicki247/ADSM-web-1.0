import React from 'react';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveSection }) => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © 2025 ADSM. Wszystkie prawa zastrzeżone.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#rodo"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              rodo
            </a>
            <button
              onClick={() => {
                setActiveSection('privacy-policy');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              polityka prywatności
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;