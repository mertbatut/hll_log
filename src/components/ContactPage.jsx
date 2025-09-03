import React, { useEffect, useState } from 'react';
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
    details: ['+90 546 403 16 22', '+90 546 403 16 22']
  },
  {
    icon: Mail,
    title: 'E-posta',
    details: ['info@imralojistik.com.tr', 'operasyon@imralojistik.com.tr']
  },
  {
    icon: MapPin,
    title: 'Adres',
    details: ['ÜÇEVLER MH. 3.(220)SK. NO:19  D:6 ESNAFLAR VE SANATKARLARI KOOPERATİFİ ', 'Bursa / Türkiye']
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
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form gönderme işlemi burada yapılacak
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
  };

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
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ad Soyad
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
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
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
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
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
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
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Mesaj Konusu"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Lütfen ihtiyaçlarınızı detaylı olarak belirtiniz..."
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white py-3 px-6 font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Mesaj Gönder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="scroll-animate max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Konum
            </h2>
            
            {/* Google Maps Embed */}
            <div className="w-full h-96 border border-gray-300 shadow-sm overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d190.43437691573888!2d28.94237202459535!3d40.21017447055171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x14ca114e38dd370d%3A0x657381deb2305442!2zS29zZ2ViIEJ1cnNhIEJhdMSxIE3DvGTDvHJsw7zEn8O8!3m2!1d40.209491899999996!2d28.940898699999998!4m5!1s0x14ca1141ea2daaa1%3A0x51075a8ddf261c49!2zw5zDp2V2bGVyLCAzLiBTay4gTm86MTkvQSwgMTYxMjAgTmnMh2zDvGZlci9CdXJzYQ!3m2!1str!2str!4v1749636033013!5m2!1str!2str"
                width="100%" 
                height="100%" 
                className="border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HLL Lojistik Konum"
              />
            </div>
            
            {/* Map Alt Bilgisi */}
            <div className="mt-4 text-center">
              <p className="text-gray-600 text-sm">
                Organize Sanayi Bölgesi, Bursa / Türkiye
              </p>
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