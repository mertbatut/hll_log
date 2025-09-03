// src/components/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { Truck, Menu, X, Phone, Mail } from 'lucide-react';

const NAVIGATION_ITEMS = [
  { key: 'anasayfa', label: 'Ana Sayfa' },
  { key: 'hakkimizda', label: 'Hakkımızda' },
  { key: 'ulkeler', label: 'Çalıştığımız Ülkeler' },
  { key: 'iletisim', label: 'İletişim' },
  { key: 'medya', label: 'Medya' }
];

const Logo = () => (
  <div className="flex items-center space-x-3 group cursor-pointer">
    <div className="w-12 h-12 bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
     <img src="/image/imra.svg" alt="Logo" className="w-12 h-12" />
    </div>
    <div className="flex flex-col">
      <span className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
        İmra Lojistik
      </span>
      <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">
        Güvenilir Taşımacılık
      </span>
    </div>
  </div>
);

const NavigationButton = ({ item, isActive, onClick }) => (
  <button
    onClick={() => onClick(item.key)}
    className={`relative px-6 py-2 font-semibold transition-all duration-300 ${
      isActive
        ? 'text-blue-600'
        : 'text-gray-700 hover:text-blue-600'
    }`}
  >
    {item.label}
    {isActive && (
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 transform scale-x-100 transition-transform duration-300"></div>
    )}
    {!isActive && (
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
    )}
  </button>
);

const MobileNavigationButton = ({ item, isActive, onClick, onClose }) => (
  <button
    onClick={() => {
      onClick(item.key);
      onClose();
    }}
    className={`block w-full text-left px-6 py-4 font-semibold transition-all duration-300 border-l-4 ${
      isActive
        ? 'text-blue-600 bg-blue-50 border-blue-600'
        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 border-transparent'
    }`}
  >
    {item.label}
  </button>
);

const TopBar = () => (
  <div className="bg-gray-900 text-white py-2 hidden lg:block">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            <span>+90 546 403 16 22</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            <span>info@imralojistik.com.tr</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-300">7/24 Müşteri Hizmetleri</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
);

const Navigation = ({ activeSection = 'anasayfa', onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section) => {
    if (onNavigate) {
      onNavigate(section);
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="relative z-50">
      <TopBar />
      
      <nav className={`bg-white border-b border-gray-200 sticky top-0 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo />
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {NAVIGATION_ITEMS.map((item) => (
                <NavigationButton
                  key={item.key}
                  item={item}
                  isActive={activeSection === item.key}
                  onClick={handleNavigate}
                />
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href='/iletisim' className="bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
                İletişim
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 bg-white absolute left-0 right-0 top-full shadow-xl">
              <div className="py-4">
                {NAVIGATION_ITEMS.map((item) => (
                  <MobileNavigationButton
                    key={item.key}
                    item={item}
                    isActive={activeSection === item.key}
                    onClick={handleNavigate}
                    onClose={() => setIsMenuOpen(false)}
                  />
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="px-6 py-4 border-t border-gray-200 mt-4 space-y-3">
                  <button className="w-full border-2 border-blue-600 text-blue-600 py-3 font-semibold hover:bg-blue-50 transition-colors duration-300">
                    Ücretsiz Teklif Al
                  </button>
                  <button className="w-full bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700 transition-colors duration-300">
                    İletişim
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;