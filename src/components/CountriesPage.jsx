import React, { useEffect } from 'react';
import {
  MapPin,
  Truck,
  Package,
  Clock,
  Phone,
  Building,
  Users,
  Star,
  CheckCircle,
  Globe,
  ArrowRight,
  Factory,
  Plane,
  Ship,
  Container,
  Route,
  Shield,
  Timer,
  FileText,
  Mail,
  Calendar,
  TrendingUp,
  Award,
  Zap,
  ExternalLink,
  Activity,
  BarChart3
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

// Enhanced Countries Data - KARA YOLU ODAKLI
const COUNTRIES_DATA = [
  {
    id: 'turkiye',
    name: 'Türkiye',
    flag: '🇹🇷',
    region: 'Ana Merkez & Hub',
    status: 'headquarters',
    established: '2008',
    mainCity: 'Bursa',
    coverage: '81 İl',
    dailyVolume: '5000+',
    employees: '150+',
    facilities: 3,
    services: [
      { icon: Truck, name: 'Yurtiçi Kara Taşımacılığı', desc: 'Türkiye geneli kapıdan kapıya teslimat', status: 'primary' },
      { icon: Package, name: 'Depolama & Konsolidasyon', desc: '15.000m² modern depo tesisi', status: 'primary' },
      { icon: Route, name: 'Avrupa Transit Hub', desc: 'Avrupa rotaları koordinasyon merkezi', status: 'primary' },
      { icon: FileText, name: 'Gümrük & Dokümantasyon', desc: 'Türkiye-AB gümrük işlemleri', status: 'secondary' }
    ],
    contact: {
      phone: '+90 224 XXX XX XX',
      email: 'turkiye@hll-lojistik.com',
      address: 'OSB, Bursa'
    },
    highlights: [
      'Ana operasyon merkezi',
      'En büyük araç filosu',
      'Avrupa hub koordinasyonu'
    ]
  },
  {
    id: 'almanya',
    name: 'Almanya',
    flag: '🇩🇪',
    region: 'Avrupa Koordinasyon Hub',
    status: 'major-hub',
    established: '2012',
    mainCity: 'Hamburg',
    coverage: 'Almanya Geneli',
    dailyVolume: '2000+',
    employees: '45+',
    facilities: 2,
    services: [
      { icon: Truck, name: 'Kara Yolu Taşımacılığı', desc: 'Almanya içi ve transit geçiş rotaları', status: 'primary' },
      { icon: Route, name: 'Avrupa Dağıtım Ağı', desc: 'Almanya merkezli Avrupa rotaları', status: 'primary' },
      { icon: FileText, name: 'AB Gümrük İşlemleri', desc: 'Avrupa Birliği prosedürleri', status: 'primary' },
      { icon: Building, name: 'Transit Depolama', desc: 'Geçici depolama ve dağıtım', status: 'secondary' }
    ],
    contact: {
      phone: '+49 40 XXX XXX XX',
      email: 'deutschland@hll-lojistik.com',
      address: 'Hafencity, Hamburg'
    },
    highlights: [
      'AB gümrük uzmanı',
      'Transit hub merkezi',
      'Avrupa dağıtım ağı'
    ]
  },
  {
    id: 'fransa',
    name: 'Fransa',
    flag: '🇫🇷',
    region: 'Batı Avrupa',
    status: 'active',
    established: '2015',
    mainCity: 'Paris',
    coverage: 'Fransa Geneli',
    dailyVolume: '800+',
    employees: '25+',
    facilities: 1,
    services: [
      { icon: Truck, name: 'Kara Yolu Express', desc: 'Fransa içi hızlı dağıtım ağı', status: 'primary' },
      { icon: Route, name: 'Cross Docking', desc: 'Konsolidasyon ve dağıtım merkezi', status: 'primary' },
      { icon: Timer, name: 'Same Day Delivery', desc: 'Aynı gün teslimat hizmetleri', status: 'secondary' }
    ],
    contact: {
      phone: '+33 1 XX XX XX XX',
      email: 'france@hll-lojistik.com',
      address: 'La Défense, Paris'
    },
    highlights: [
      'Express teslimat',
      'Same day servis',
      'Cross docking merkezi'
    ]
  },
  {
    id: 'italya',
    name: 'İtalya',
    flag: '🇮🇹',
    region: 'Güney Avrupa',
    status: 'active',
    established: '2016',
    mainCity: 'Milano',
    coverage: 'İtalya Geneli',
    dailyVolume: '600+',
    employees: '20+',
    facilities: 1,
    services: [
      { icon: Truck, name: 'Alp Geçiş Rotaları', desc: 'İtalya-Avrupa kara bağlantısı', status: 'primary' },
      { icon: Route, name: 'Milano Hub', desc: 'Kuzey İtalya dağıtım merkezi', status: 'primary' },
      { icon: Package, name: 'Regional Dağıtım', desc: 'İtalya içi bölgesel teslimat', status: 'secondary' }
    ],
    contact: {
      phone: '+39 02 XXX XXX XX',
      email: 'italia@hll-lojistik.com',
      address: 'Porta Nuova, Milano'
    },
    highlights: [
      'Alp geçişi uzmanı',
      'Milano hub merkezi',
      'Güney Avrupa ağı'
    ]
  },
  {
    id: 'ispanya',
    name: 'İspanya',
    flag: '🇪🇸',
    region: 'İber Yarımadası',
    status: 'active',
    established: '2018',
    mainCity: 'Madrid',
    coverage: 'İspanya Geneli',
    dailyVolume: '400+',
    employees: '15+',
    facilities: 1,
    services: [
      { icon: Truck, name: 'İspanya-Türkiye Rotası', desc: 'Direkt kara yolu bağlantısı', status: 'primary' },
      { icon: Route, name: 'İber Yarımadası', desc: 'İspanya-Portekiz dağıtım ağı', status: 'primary' },
      { icon: FileText, name: 'Gümrük Desteği', desc: 'İspanya gümrük prosedürleri', status: 'secondary' }
    ],
    contact: {
      phone: '+34 91 XXX XX XX',
      email: 'espana@hll-lojistik.com',
      address: 'Distrito Financiero, Madrid'
    },
    highlights: [
      'Türkiye direkt rota',
      'İber yarımadası kapsamı',
      'Gümrük uzmanı'
    ]
  },
  {
    id: 'hollanda',
    name: 'Hollanda',
    flag: '🇳🇱',
    region: 'Benelux Hub',
    status: 'active',
    established: '2017',
    mainCity: 'Amsterdam',
    coverage: 'Benelux Bölgesi',
    dailyVolume: '500+',
    employees: '18+',
    facilities: 1,
    services: [
      { icon: Truck, name: 'Benelux Dağıtım', desc: 'Hollanda-Belçika-Lüksemburg ağı', status: 'primary' },
      { icon: Route, name: 'Transit Koordinasyon', desc: 'Avrupa transit ağ yönetimi', status: 'primary' },
      { icon: Building, name: 'Konsolidasyon Hub', desc: 'Avrupa yük birleştirme merkezi', status: 'secondary' }
    ],
    contact: {
      phone: '+31 20 XXX XX XX',
      email: 'nederland@hll-lojistik.com',
      address: 'Zuidas, Amsterdam'
    },
    highlights: [
      'Benelux uzmanı',
      'Transit koordinasyonu',
      'Konsolidasyon hub'
    ]
  }
];

const EXPANSION_TIMELINE = [
  { country: 'Belçika', flag: '🇧🇪', status: 'planning', phase: '2025 Q2', priority: 'high' },
  { country: 'Avusturya', flag: '🇦🇹', status: 'planning', phase: '2025 Q4', priority: 'high' },
  { country: 'Polonya', flag: '🇵🇱', status: 'research', phase: '2026 Q1', priority: 'medium' },
  { country: 'İsviçre', flag: '🇨🇭', status: 'research', phase: '2026 Q3', priority: 'low' }
];

const NETWORK_OVERVIEW = [
  { icon: Globe, value: '6', label: 'Aktif Ülke', growth: '+2 (2025)' },
  { icon: Building, value: '12', label: 'Ofis & Tesis', growth: '+4 planlanıyor' },
  { icon: Truck, value: '9.3K+', label: 'Günlük Koli', growth: '%15 artış' },
  { icon: Users, value: '273', label: 'Çalışan', growth: '+50 (2025)' }
];
// Components
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16 lg:py-24 overflow-hidden">
      {/* Avrupa Haritası Background - Hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-europe-map bg-no-repeat bg-cover bg-center opacity-15 animate-map-float"></div>
        <div className="absolute inset-0   bg-gradient-to-br from-blue-50/80 via-white/60 to-[rgb(106_142_179_/_80%)]"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm border border-blue-200 text-blue-700 text-sm font-semibold tracking-wide uppercase shadow-sm">
                <Globe className="w-4 h-4 mr-2" />
                Avrupa Geneli Hizmet Ağı
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Çalıştığımız
              <span className="block text-blue-600 mt-1">Ülkeler</span>
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              <strong>6 ülkede</strong> kurduğumuz güçlü operasyon ağı ile Avrupa genelinde 
              kesintisiz ve güvenilir lojistik hizmetleri sunuyoruz.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                <span className="text-gray-700 font-medium">Yerel uzman ekipler</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                <span className="text-gray-700 font-medium">7/24 operasyon</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                <span className="text-gray-700 font-medium">Tek platform yönetimi</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                <span className="text-gray-700 font-medium">Kapıdan kapıya teslimat</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg">
                Ülkeye Özel Teklif Al
              </button>
              <button className="border-2 border-gray-800 text-gray-800 px-8 py-3 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300">
                Hizmet Haritası
              </button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="lg:col-span-5">
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Operasyon Ağı Özeti</h3>
              <div className="space-y-6">
                {NETWORK_OVERVIEW.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-50 border border-blue-200 flex items-center justify-center mr-4">
                        <stat.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{stat.label}</div>
                        <div className="text-sm text-gray-500">{stat.growth}</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CountryCard = ({ country, isReversed = false }) => {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'headquarters':
        return <span className="bg-green-600 text-white px-2 py-1 text-xs font-semibold uppercase">Ana Merkez</span>;
      case 'major-hub':
        return <span className="bg-blue-600 text-white px-2 py-1 text-xs font-semibold uppercase">Hub</span>;
      default:
        return <span className="bg-gray-600 text-white px-2 py-1 text-xs font-semibold uppercase">Aktif</span>;
    }
  };

  return (
    <div className="scroll-animate">
      <div className={`grid lg:grid-cols-12 gap-8 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}>
        
        {/* Country Info - Compact */}
        <div className={`lg:col-span-4 ${isReversed ? 'lg:order-2' : ''}`}>
          <div className="bg-white border border-gray-200 shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-4xl mr-3">{country.flag}</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{country.name}</h3>
                  <p className="text-sm text-gray-600">{country.region}</p>
                </div>
              </div>
              {getStatusBadge(country.status)}
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4 text-center border-t border-gray-100 pt-4">
              <div>
                <div className="text-lg font-bold text-gray-900">{country.established}</div>
                <div className="text-xs text-gray-600">Kuruluş</div>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">{country.dailyVolume}</div>
                <div className="text-xs text-gray-600">Günlük Koli</div>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">{country.employees}</div>
                <div className="text-xs text-gray-600">Çalışan</div>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">{country.facilities}</div>
                <div className="text-xs text-gray-600">Tesis</div>
              </div>
            </div>

            {/* Contact */}
            <div className="border-t border-gray-100 pt-4">
              <div className="text-xs text-gray-600 mb-2">İletişim</div>
              <div className="space-y-1">
                <div className="flex items-center text-sm">
                  <Phone className="w-3 h-3 mr-2 text-blue-600" />
                  <span className="text-gray-700">{country.contact.phone}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Building className="w-3 h-3 mr-2 text-blue-600" />
                  <span className="text-gray-700">{country.contact.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className={`lg:col-span-8 ${isReversed ? 'lg:order-1' : ''}`}>
          <div className="grid md:grid-cols-2 gap-4">
            {country.services.map((service, index) => (
              <div key={index} className={`bg-white border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200 ${
                service.status === 'primary' ? 'border-l-4 border-l-blue-600' : 'border-l-4 border-l-gray-300'
              }`}>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gray-50 border border-gray-200 flex items-center justify-center mr-3 flex-shrink-0">
                    <service.icon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{service.name}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{service.desc}</p>
                    {service.status === 'primary' && (
                      <div className="mt-2">
                        <span className="bg-blue-50 text-blue-700 px-2 py-1 text-xs font-medium border border-blue-200">
                          Ana Hizmet
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="mt-4 bg-gray-50 border border-gray-200 p-4">
            <h4 className="font-bold text-gray-900 text-sm mb-3">Öne Çıkan Özellikler</h4>
            <div className="flex flex-wrap gap-2">
              {country.highlights.map((highlight, index) => (
                <span key={index} className="bg-white text-gray-700 px-3 py-1 text-xs font-medium border border-gray-200">
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExpansionTimeline = () => {
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Avrupa Haritası Background - Timeline */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-europe-map bg-no-repeat bg-cover bg-center opacity-10 animate-map-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/85 via-gray-50/90 to-gray-50/85"></div>
      </div>
      
      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="scroll-animate inline-block px-4 py-2 bg-white border border-blue-200 text-blue-700 text-sm font-semibold tracking-wide uppercase mb-4">
            Genişleme Planları
          </div>
          <h2 className="scroll-animate text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            2025-2026 Yol Haritamız
          </h2>
          <p className="scroll-animate text-lg text-gray-600 max-w-2xl mx-auto">
            Avrupa'daki hizmet ağımızı stratejik olarak genişletmeye devam ediyoruz.
          </p>
        </div>

        <div className="scroll-animate grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {EXPANSION_TIMELINE.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 p-6 text-center hover:shadow-md transition-shadow duration-200">
              <span className="text-3xl mb-3 block">{item.flag}</span>
              <h4 className="font-bold text-gray-900 mb-2">{item.country}</h4>
              <div className="mb-3">
                {item.status === 'planning' ? (
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 text-xs font-semibold border border-orange-200">
                    Planlama
                  </span>
                ) : (
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 text-xs font-semibold border border-blue-200">
                    Araştırma
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-2">{item.phase}</p>
              <div className={`text-xs font-medium ${
                item.priority === 'high' ? 'text-red-600' : 
                item.priority === 'medium' ? 'text-yellow-600' : 'text-gray-600'
              }`}>
                {item.priority === 'high' ? 'Yüksek Öncelik' : 
                 item.priority === 'medium' ? 'Orta Öncelik' : 'Düşük Öncelik'}
              </div>
            </div>
          ))}
        </div>

        <div className="scroll-animate text-center">
          <div className="bg-white border border-gray-200 p-8 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-bold text-gray-900 text-sm mb-1">2025 Hedefi</h4>
                <p className="text-xs text-gray-600">8 Ülke Operasyonu</p>
              </div>
              <div className="text-center">
                <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-bold text-gray-900 text-sm mb-1">Kapasite Artışı</h4>
                <p className="text-xs text-gray-600">%40 Büyüme</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-bold text-gray-900 text-sm mb-1">Yeni İstihdam</h4>
                <p className="text-xs text-gray-600">+100 Çalışan</p>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700 transition-colors duration-300 text-sm">
              Genişleme Planları Detayları
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const CallToActionSection = () => {
  return (
    <section className="py-16 bg-blue-600 relative overflow-hidden">
      {/* Avrupa Haritası Background - CTA */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-europe-map bg-no-repeat bg-cover bg-center opacity-20 animate-map-drift brightness-0 invert"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 via-blue-600/80 to-blue-600/90"></div>
      </div>
      
      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="scroll-animate text-3xl lg:text-4xl font-bold text-white mb-6">
            Hangi Ülkeye Gönderim Yapmak İstiyorsunuz?
          </h2>
          
          <p className="scroll-animate text-lg text-blue-100 mb-8">
            6 ülkedeki güçlü operasyon ağımız ile size en yakın noktadan 
            hızlı ve güvenilir teslimat hizmeti sunuyoruz.
          </p>
          
          <div className="scroll-animate grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Timer className="w-8 h-8 text-blue-200 mx-auto mb-3" />
              <h4 className="font-bold text-white text-sm mb-1">24-72 Saat</h4>
              <p className="text-blue-100 text-sm">Teslimat Süresi</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-blue-200 mx-auto mb-3" />
              <h4 className="font-bold text-white text-sm mb-1">%100 Sigorta</h4>
              <p className="text-blue-100 text-sm">Güvenli Taşıma</p>
            </div>
       <div className="text-center">
              <Activity className="w-8 h-8 text-blue-200 mx-auto mb-3" />
              <h4 className="font-bold text-white text-sm mb-1">Canlı Takip</h4>
              <p className="text-blue-100 text-sm">7/24 İzleme</p>
            </div>
          </div>
          
          <div className="scroll-animate flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg">
              Ülkeye Özel Teklif Al
            </button>
            <button className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              <Phone className="mr-2 w-4 h-4 inline" />
              Hızlı İletişim
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main CountriesPage Component
const CountriesPage = () => {
  useScrollAnimations();

  return (
    <div className="font-sans">
      <HeroSection />
      
      {/* Countries Grid */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Avrupa Haritası Background - Content */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-europe-map bg-no-repeat bg-cover bg-center opacity-8 animate-map-slide"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/95 to-white/90"></div>
        </div>
        
        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="scroll-animate inline-block px-4 py-2 bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide uppercase mb-4">
              Operasyonel Ağımız
            </div>
            <h2 className="scroll-animate text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Aktif Olduğumuz Ülkeler
            </h2>
            <p className="scroll-animate text-lg text-gray-600 max-w-2xl mx-auto">
              Her ülkede yerel uzman ekibimiz ve modern lojistik altyapımız ile 
              kesintisiz hizmet kalitesi sağlıyoruz.
            </p>
          </div>

          <div className="space-y-16">
            {COUNTRIES_DATA.map((country, index) => (
              <CountryCard 
                key={country.id} 
                country={country} 
                isReversed={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      <ExpansionTimeline />
      <CallToActionSection />
      
      {/* Custom CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .animate-fade-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .scroll-animate {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
        
        .lg\\:direction-rtl {
          direction: ltr;
        }
        
        .lg\\:direction-rtl .lg\\:order-1 {
          order: 1;
        }
        
        .lg\\:direction-rtl .lg\\:order-2 {
          order: 2;
        }
        
        @media (min-width: 1024px) {
          .lg\\:direction-rtl {
            direction: rtl;
          }
          
          .lg\\:direction-rtl > * {
            direction: ltr;
          }
        }

        /* Avrupa Haritası Background Sınıfı */
        .bg-europe-map {
          background-image: url('public/image/png-transparent-europe-blank-map-world-map-europe-monochrome-world-black.png');
        }

        /* Harita Animasyonları */
        @keyframes map-float {
          0%, 100% { 
            transform: translate3d(0, 0, 0) scale(1);
          }
          25% { 
            transform: translate3d(-5px, -8px, 0) scale(1.02);
          }
          50% { 
            transform: translate3d(0, -12px, 0) scale(1.03);
          }
          75% { 
            transform: translate3d(5px, -8px, 0) scale(1.02);
          }
        }

        @keyframes map-slide {
          0% { 
            transform: translate3d(-20px, 0, 0) scale(1.05);
          }
          50% { 
            transform: translate3d(10px, -5px, 0) scale(1.08);
          }
          100% { 
            transform: translate3d(-20px, 0, 0) scale(1.05);
          }
        }

        @keyframes map-pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.10;
          }
          50% { 
            transform: scale(1.05);
            opacity: 0.15;
          }
        }

        @keyframes map-drift {
          0% { 
            transform: translate3d(0, 0, 0) scale(1.1);
          }
          33% { 
            transform: translate3d(-15px, -10px, 0) scale(1.12);
          }
          66% { 
            transform: translate3d(10px, -5px, 0) scale(1.08);
          }
          100% { 
            transform: translate3d(0, 0, 0) scale(1.1);
          }
        }

        .animate-map-float {
          animation: map-float 15s ease-in-out infinite;
        }

        .animate-map-slide {
          animation: map-slide 20s linear infinite;
        }

        .animate-map-pulse {
          animation: map-pulse 12s ease-in-out infinite;
        }

        .animate-map-drift {
          animation: map-drift 25s ease-in-out infinite;
        }

        /* Scroll ile Paralaks Efekti */
        @media (prefers-reduced-motion: no-preference) {
          .bg-europe-map {
            will-change: transform;
            backface-visibility: hidden;
            perspective: 1000px;
          }
        }

        /* Responsive opacity ayarları */
        .opacity-8 {
          opacity: 0.08;
        }

        .opacity-15 {
          opacity: 0.15;
        }

        .opacity-20 {
          opacity: 0.20;
        }
        `
      }} />
    </div>
  );
};

export default CountriesPage;