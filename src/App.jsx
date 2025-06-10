// src/App.jsx
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import './index.css';
import CountriesPage from './components/CountriesPage';
import AboutPage from './components/AboutPage';
import MediaPage from './components/MediaPage';
import ContactPage from './components/ContactPage';

function App() {
  const [activeSection, setActiveSection] = useState('anasayfa');

  const handleNavigate = (section) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'anasayfa':
        return <HomePage />;
      case 'hakkimizda':
        return (
          <AboutPage/>
        );
   
      case 'ulkeler':
        return (
          <CountriesPage/>
        );
      case 'iletisim':
        return (
          <ContactPage />
        );
      case 'medya':
        return (
        <MediaPage />
        );
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
    </div>
  );
}

export default App;