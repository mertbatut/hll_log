// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import './index.css';
import CountriesPage from './components/CountriesPage';
import AboutPage from './components/AboutPage';
import MediaPage from './components/MediaPage';
import ContactPage from './components/ContactPage';

function App() {
  const [activeSection, setActiveSection] = useState('anasayfa');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll pozisyonunu takip et
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // En üste çık fonksiyonu
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavigate = (section) => {
    setActiveSection(section);
    // Sayfa değiştiğinde de en üste çık
    scrollToTop();
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'anasayfa':
        return <HomePage />;
      case 'hakkimizda':
        return <AboutPage/>;
      case 'ulkeler':
        return <CountriesPage/>;
      case 'iletisim':
        return <ContactPage />;
      case 'medya':
        return <MediaPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
      <main>
        {renderContent()}
      </main>
      
      {/* En Üste Çık Butonu */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="En üste çık"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </button>
    </div>
  );
}

export default App;