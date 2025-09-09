import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import './index.css';
import CountriesPage from './components/CountriesPage';
import AboutPage from './components/AboutPage';
import MediaPage from './components/MediaPage';
import ContactPage from './components/ContactPage';
import NavlunFormModal from './components/NavlunFormModal';

function App() {
  const [activeSection, setActiveSection] = useState('anasayfa');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

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
    scrollToTop();
  };

  const handleRequestQuote = () => {
    setIsQuoteModalOpen(true);
  };

  useEffect(() => {
    const handler = (e) => {
      try {
        const target = e.target;
        // Avoid intercepting inside the navlun modal itself
        if (target.closest && target.closest('[data-component="navlun-modal"]')) return;

        const clickable = target.closest && (target.closest('button') || target.closest('[role="button"]'));
        if (!clickable) return;

        const text = (clickable.innerText || '').toLowerCase();

        // Open quote modal for any button containing 'teklif'
        if (text.includes('teklif')) {
          e.preventDefault();
          setIsQuoteModalOpen(true);
          return;
        }

        // Dial on common call button phrases
        if (text.includes('ileti') || text.includes('ara') || text.includes('+90 546 403 16 22') || text.includes('546 403 16 22')) {
          e.preventDefault();
          window.location.href = 'tel:+905464031622';
          return;
        }
      } catch (err) {
        // no-op
      }
    };
    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler, true);
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'anasayfa':
        return <HomePage onRequestQuote={handleRequestQuote} />;
      case 'hakkimizda':
        return <AboutPage onRequestQuote={handleRequestQuote} />;
      case 'ulkeler':
        return <CountriesPage onRequestQuote={handleRequestQuote} />;
      case 'iletisim':
        return <ContactPage />;
      case 'medya':
        return <MediaPage />;
      default:
        return <HomePage onRequestQuote={handleRequestQuote} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onRequestQuote={handleRequestQuote}
      />
      <main>
        {renderContent()}
      </main>
      <NavlunFormModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
      
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
