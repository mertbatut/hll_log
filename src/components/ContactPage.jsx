// src/components/ContactPage.jsx
import React, { useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send
} from 'lucide-react';

// Animation Hook
const useScrollAnimations = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

// Contact Data
const CONTACT_INFO = [
  {
    icon: Phone,
    title: 'Telefon',
    details: ['+90 224 XXX XX XX', '+90 224 XXX XX XX']
  },
  {
    icon: Mail,
    title: 'E-posta',
    details: ['info@hll-lojistik.com', 'satis@hll-lojistik.com']
  },
  {
    icon: MapPin,
    title: 'Adres',
    details: ['Organize Sanayi Bölgesi', 'Bursa / Türkiye']
  },
  {
    icon: Clock,
    title: 'Çalışma Saatleri',
    details: ['Pazartesi - Cuma: 08:00 - 18:00', 'Cumartesi: 09:00 - 15:00']
  }
];

// Main ContactPage Component
const ContactPage = () => {
  useScrollAnimations();

  return (
    <div className="font-sans">
      {/* Simple Header */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            İletişim
          </h1>
          <p className="text-lg text-gray-600">
            Lojistik ihtiyaçlarınız için bize ulaşın
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Info */}
            <div>
              <h2 className="scroll-animate text-2xl font-bold text-gray-900 mb-8">
                İletişim Bilgileri
              </h2>
              
              <div className="space-y-6">
                {CONTACT_INFO.map((contact) => (
                  <div key={contact.title} className="scroll-animate">
                    <div className="bg-white border border-gray-200 p-6 shadow-sm">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-blue-50 border border-blue-200 flex items-center justify-center mr-4 flex-shrink-0">
                          <contact.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">{contact.title}</h3>
                          {contact.details.map((detail, index) => (
                            <p key={index} className="text-gray-600">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="scroll-animate text-2xl font-bold text-gray-900 mb-8">
                Mesaj Gönderin
              </h2>
              
              <div className="scroll-animate bg-white border border-gray-200 p-8 shadow-sm">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ad Soyad
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Telefon Numaranız"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="E-posta Adresiniz"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Konu
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Mesaj Konusu"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Lütfen ihtiyaçlarınızı detaylı olarak belirtiniz..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Mesaj Gönder
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="scroll-animate text-2xl font-bold text-gray-900 text-center mb-8">
            Konum
          </h2>
          
          <div className="scroll-animate max-w-4xl mx-auto">
            <div className="bg-gray-200 border border-gray-300 h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-medium">Harita Alanı</p>
                <p className="text-sm">Bursa, Türkiye</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS */}
      <style jsx>{`
        .animate-fade-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .scroll-animate {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;