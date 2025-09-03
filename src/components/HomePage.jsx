import React, { useEffect, useRef, useState } from 'react';
import { 
  Truck, 
  Globe, 
  Package, 
  Clock, 
  Shield, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle,
  Building,
  Target,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Star,
  Zap,
  Timer,
  FileText,
  Headphones,
  BarChart3,
  Settings,
  Factory,
  Plane,
  Ship,
  Calendar,
  CreditCard,
  Lock,
  Route,
  Activity,
  Briefcase,
  Database,
  Network
} from 'lucide-react';
import NavlunFormModal from './NavlunFormModal';

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

const HERO_STATS = [
  { icon: Award, value: '15+', label: 'Yıl Tecrübe', detail: 'Sektörel deneyim' },
  { icon: Users, value: '500+', label: 'Aktif Müşteri', detail: 'Güvenilen firma' },
  { icon: Globe, value: '25', label: 'Ülke Ağı', detail: 'Avrupa kapsamı' },
  { icon: Package, value: '100K+', label: 'Teslimat', detail: 'Başarılı nakliye' }
];

const CORE_SERVICES = [
  { 
    icon: Truck, 
    title: 'Kara Yolu Taşımacılığı',
    subtitle: 'Avrupa Geneli Güvenli Nakliye',
    description: 'Modern araç filosu ve deneyimli şoför kadrosu ile Avrupa\'nın her noktasına güvenli, hızlı ve ekonomik kara yolu taşımacılığı hizmeti sunuyoruz.',
    features: [
      { icon: Clock, text: '7/24 Canlı Takip Sistemi' },
      { icon: Shield, text: 'Tam Sigorta Kapsamı' },
      { icon: CheckCircle, text: 'Zamanında Teslimat Garantisi' },
      { icon: Phone, text: 'Anında Müşteri Desteği' }
    ],
    highlight: 'En Popüler'
  },
  { 
    icon: Package, 
    title: 'Depolama & Lojistik Merkezi',
    subtitle: 'Modern Tesislerde Güvenli Saklama',
    description: 'Klimatize edilmiş 1.000 m² depolama alanımızda, gelişmiş güvenlik sistemleri ile mallarınızı koruyoruz. Stok yönetimi ve dağıtım hizmetleri dahil.',
    features: [
      { icon: Building, text: '1.000 m² Kapalı Alan' },
      { icon: Settings, text: 'Otomasyon Sistemleri' },
      { icon: BarChart3, text: 'Detaylı Raporlama' },
      { icon: Lock, text: '24/7 Güvenlik' }
    ]
  },
  { 
    icon: Globe, 
    title: 'Uluslararası Kargo & Gümrük',
    subtitle: 'Kapıdan Kapıya Uluslararası Hizmet',
    description: 'Gümrük işlemlerinden son teslimat noktasına kadar tüm süreçleri yönetiyor, uluslararası ticaret süreçlerinizi kolaylaştırıyoruz.',
    features: [
      { icon: FileText, text: 'Gümrük Dokümantasyonu' },
      { icon: Globe, text: '25 Ülke Operasyonu' },
      { icon: CreditCard, text: 'Zamanında Teslimat' },
      { icon: Headphones, text: 'Uzman Danışmanlık' }
    ]
  }
];

const CORPORATE_ADVANTAGES = [
  {
    icon: Activity,
    category: 'Operasyonel Mükemmellik',
    title: 'İleri Teknoloji Altyapısı',
    description: 'Yapay zeka destekli rota optimizasyonu ve gerçek zamanlı takip sistemleri ile operasyonel verimliliği maksimize ediyoruz.',
    metrics: [
      { label: 'Teslimat Başarı Oranı', value: '%98.5' },
      { label: 'Ulaşılabilirlik ', value: '24 Saat' }
    ]
  },
  {
    icon: Shield,
    category: 'Güvenlik & Kalite',
    title: 'Kapsamlı Risk Yönetimi',
    description: 'ISO 9001:2015 standartları ve çok katmanlı sigorta politikalarımız ile yüklerinizi maksimum güvenlik altında taşıyoruz.',
    metrics: [
      { label: 'Hasar Oranı', value: '< %0.1' },
      { label: 'Güvenlik Sertifikaları', value: '12 Adet' }
    ]
  },
  {
    icon: Network,
    category: 'Stratejik Ortaklıklar',
    title: 'Geniş Partner Ağı',
    description: 'Avrupa genelinde kurduğumuz stratejik ortaklıklar sayesinde müşterilerimize kesintisiz hizmet sunuyoruz.',
    metrics: [
      { label: 'Aktif Partner', value: '150+' },
      { label: 'Hizmet Verilen Şehir', value: '200+' }
    ]
  },
  {
    icon: Database,
    category: 'Dijital Dönüşüm',
    title: 'Veri Odaklı Çözümler',
    description: 'Büyük veri analitiği ve makine öğrenmesi ile lojistik süreçlerinizi optimize ediyor, maliyet tasarrufu sağlıyoruz.',
    metrics: [
      { label: 'Maliyet Tasarrufu', value: '%15' },
      { label: 'Süreç Optimizasyonu', value: '%30' }
    ]
  }
];

const TRANSPORT_MODES = [
  { icon: Truck, name: 'Kamyon', capacity: '24 Ton', coverage: 'Tam Yük (FTL)' },
  { icon: Package, name: 'Kamyonet', capacity: '3.5 Ton', coverage: 'Parça Yük (LTL)' },
  { icon: Route, name: 'Express', capacity: '1 Ton', coverage: 'Acil Teslimat' },
  { icon: Building, name: 'Konvoy', capacity: 'Özel', coverage: 'Büyük Projeler' }
];

// Components
const HeroSection = ({ onOpenModal }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.hero-animate');
      elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        setTimeout(() => {
          el.style.transition = 'all 1s ease-out';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, index * 150);
      });
    }
  }, []);

  return (
    <section ref={heroRef} className="relative bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }}>
        </div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Content - 8 columns */}
          <div className="lg:col-span-8">
            <div className="hero-animate mb-6">
              <div className="inline-flex items-center px-6 py-3 bg-white border border-blue-200 text-blue-700 font-semibold tracking-wide">
                <Truck className="w-5 h-5 mr-3" />
                15+ YILLIK SEKTÖREL DENEYİM
              </div>
            </div>
            
            <h1 className="hero-animate text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
              Avrupa'nın
              <span className="block text-blue-600 mt-2">Güvenilir</span>
              <span className="block text-gray-800">Lojistik Ortağı</span>
            </h1>
            
            <div className="hero-animate mb-10">
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-6">
                <strong>HLL Lojistik</strong> olarak, 8 yıllık deneyimimiz ve modern teknoloji altyapımızla 
                Avrupa genelinde <span className="text-blue-600 font-semibold">güvenilir nakliye çözümleri</span> sunuyoruz.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Bursa merkezli operasyonlarımızla 25 ülkede hizmet veriyor, 
                müşterilerimize kesintisiz ve kaliteli lojistik deneyimi yaşatıyoruz.
              </p>
            </div>
            <div className="hero-animate flex flex-col sm:flex-row gap-6 mb-12">
              <button 
                onClick={onOpenModal}
                className="group bg-blue-600 text-white px-10 py-4 text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Ücretsiz Teklif Alın
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
                <button
                  className="group border-2 border-gray-800 text-gray-800 px-10 py-4 text-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center justify-center"
                  onClick={() => window.location.href = 'tel:+905464031622'}
                >
                  <Phone className="mr-3 w-5 h-5" />
                  Hemen Arayın
                </button>
            </div>

            {/* Quick Stats */}
            <div className="hero-animate grid grid-cols-2 lg:grid-cols-4 gap-6">
              {HERO_STATS.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Card - 4 columns */}
          <div className="lg:col-span-4">
            <div className="hero-animate">
              <div className="bg-white border border-gray-200 shadow-xl overflow-hidden">
                {/* Header Image */}
                <div className="h-32 relative">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkiWIVlObm3HsYiHdSfWlhS5Gvu_fsJGIaARr1-PxkxEi-SW-_mglVTBTrn-1SP9Q_Ks&usqp=CAU"
                    alt="HLL Lojistik İletişim"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-32 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center" style={{ display: 'none' }}>
                    <Building className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Hemen İletişime Geçin</h3>
                    <p className="text-gray-600">Lojistik ihtiyaçlarınız için ücretsiz danışmanlık</p>
                  </div>
                
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900">+90 546 403 16 22</div>
                        <div className="text-sm text-gray-500">Anında bağlantı</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900">info@imralojistik.com.tr</div>
                        <div className="text-sm text-gray-500">24 saat içinde yanıt</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900">Bursa Merkez Ofis</div>
                        <div className="text-sm text-gray-500">Avrupa operasyon merkezi</div>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={onOpenModal}
                    className="w-full bg-blue-600 text-white py-4 font-semibold hover:bg-blue-700 transition-colors duration-300 mb-4"
                  >
                    Ücretsiz Teklif İsteyin
                  </button>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Teklif tamamen ücretsizdir
                    </div>
                  </div>
                </div>{/* /p-8 */}
              </div>{/* /card */}
            </div>{/* /hero-animate */}
          </div>{/* /col-span-4 */}
        </div>{/* /grid */}
      </div>{/* /container */}
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="scroll-animate inline-block px-6 py-3 bg-blue-50 text-blue-600 font-semibold uppercase tracking-wide mb-6">
            Ana Hizmetlerimiz
          </div>
          <h2 className="scroll-animate text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Profesyonel Lojistik Çözümleri
          </h2>
          <p className="scroll-animate text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            8 yıllık deneyimimiz ve modern teknoloji altyapımızla, lojistik süreçlerinizde 
            güvenilir ve verimli çözümler sunuyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {CORE_SERVICES.map((service, index) => (
            <div key={index} className={`scroll-animate grid lg:grid-cols-12 gap-12 items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
              {/* Service Content */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative">
                  {service.highlight && (
                    <div className="absolute -top-4 left-0">
                      <span className="bg-orange-500 text-white px-3 py-1 text-sm font-semibold">
                        {service.highlight}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-50 border border-blue-200 flex items-center justify-center mr-6">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-1">{service.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <feature.icon className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  
               
                </div>
              </div>

              {/* Service Visual */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="bg-gray-50 border border-gray-200 overflow-hidden">
                  <img 
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx9E8ZOlj398xf6TuECWH0zsFBwl6wVC1qnFmzl3o_-Hx862aav5pfJaq-QkQktR57qQ0&usqp=CAU`}
                    alt={service.title}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="w-full h-80 bg-gray-50 flex items-center justify-center" style={{ display: 'none' }}>
                    <div className="text-center">
                      <service.icon className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-gray-700 mb-2">{service.title}</h4>
                      <p className="text-gray-500">Görsel: service-{index + 1}.jpg</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transport Modes */}
        <div className="scroll-animate mt-20 pt-16 border-t border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Taşımacılık Seçenekleri</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {TRANSPORT_MODES.map((mode, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gray-50 border border-gray-200 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300">
                  <mode.icon className="w-10 h-10 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{mode.name}</h4>
                <p className="text-sm text-gray-600 mb-1">{mode.capacity}</p>
                <p className="text-xs text-gray-500">{mode.coverage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Yeni kurumsal tasarım bileşeni
const CorporateAdvantagesSection = () => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="scroll-animate inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold uppercase tracking-wider text-sm mb-8">
            Kurumsal Avantajlarımız
          </div>
          <h2 className="scroll-animate text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Lojistikte Yeni Nesil
            <span className="block text-blue-600 mt-2">Teknoloji & Güvenilirlik</span>
          </h2>
          <p className="scroll-animate text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Sektörel liderliğimizi modern teknoloji, stratejik ortaklıklar ve veri odaklı yaklaşımlarla 
            pekiştiriyor, müşterilerimize üstün değer sunuyoruz.
          </p>
        </div>

        {/* Corporate Advantages Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {CORPORATE_ADVANTAGES.map((advantage, index) => (
            <div key={index} className="scroll-animate group">
              <div className="bg-white border-l-4 border-blue-600 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                {/* Header Section */}
                <div className="p-8 pb-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mr-6">
                        <advantage.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
                          {advantage.category}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                          {advantage.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {advantage.description}
                  </p>
                </div>

                {/* Metrics Section */}
                <div className="bg-gray-50 border-t border-gray-100 p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {advantage.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          {metric.value}
                        </div>
                        <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="scroll-animate text-center mt-20">
          <div className="bg-white border border-gray-200 shadow-lg p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Kurumsal Lojistik Çözümleriniz İçin Hazırız
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Büyük ölçekli projeleriniz, düzenli sevkiyatlarınız ve özel gereksinimleriniz için 
              uzman ekibimizle stratejik ortaklık kurun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-blue-600 text-white px-10 py-4 font-bold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
                onClick={() => window.location.href = 'mailto:info@imralojistik.com.tr'}
              >
                Kurumsal Teklif Alın
              </button>
              <button
                className="border-2 border-gray-800 text-gray-800 px-10 py-4 font-bold hover:bg-gray-800 hover:text-white transition-all duration-300"
                onClick={() => window.location.href = 'tel:+905464031622'}
              >
                <Briefcase className="mr-3 w-5 h-5 inline" />
                B2B Ortaklık
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CallToActionSection = ({ onOpenModal }) => {
  return (
    <section className="py-24 bg-blue-600">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="scroll-animate text-4xl lg:text-5xl font-bold text-white mb-8">
            Lojistik İhtiyaçlarınız İçin
            <span className="block mt-2">Profesyonel Destek</span>
          </h2>
          
          <p className="scroll-animate text-xl text-blue-100 mb-12 leading-relaxed">
            Uzman ekibimiz, özel gereksinimlerinize uygun lojistik stratejileri geliştirir. 
            <strong className="text-white">Ücretsiz danışmanlık</strong> ve detaylı teklif için hemen iletişime geçin.
          </p>
          
          <div className="scroll-animate grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Clock className="w-12 h-12 text-blue-200 mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Hızlı Yanıt</h4>
              <p className="text-blue-100">24 saat içinde geri dönüş</p>
            </div>
            <div className="text-center">
              <FileText className="w-12 h-12 text-blue-200 mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Detaylı Teklif</h4>
              <p className="text-blue-100">Kapsamlı maliyet analizi</p>
            </div>
            <div className="text-center">
              <Headphones className="w-12 h-12 text-blue-200 mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Uzman Danışmanlık</h4>
              <p className="text-blue-100">Deneyimli ekip desteği</p>
            </div>
          </div>
          
          <div className="scroll-animate flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={onOpenModal}
              className="bg-white text-blue-600 px-10 py-4 text-lg font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg"
            >
              Ücretsiz Teklif Alın
            </button>
            <button className="border-2 border-white text-white px-10 py-4 text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              <Phone className="mr-3 w-5 h-5 inline" />
              +90 546 403 16 22
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main HomePage Component
const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useScrollAnimations();

  return (
    <div className="font-sans">
      <HeroSection onOpenModal={() => setIsModalOpen(true)} />
      <ServicesSection />
      <CorporateAdvantagesSection />
      <CallToActionSection onOpenModal={() => setIsModalOpen(true)} />
      
      <NavlunFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default HomePage;
