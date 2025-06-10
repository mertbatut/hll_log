// src/components/AboutPage.jsx
import React, { useEffect } from 'react';
import { 
  Building,
  Users,
  Award,
  Calendar,
  MapPin,
  Truck,
  Package,
  Shield,
  Clock,
  Target,
  TrendingUp,
  CheckCircle,
  Star,
  Globe,
  Route,
  BarChart3,
  Zap,
  Timer,
  FileText,
  Phone,
  Mail,
  Factory,
  Settings,
  Heart,
  Handshake,
  Eye,
  Lightbulb
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

// Company Data
const COMPANY_STATS = [
  { icon: Calendar, value: '2008', label: 'Kuruluş Yılı', detail: '15+ yıl deneyim' },
  { icon: Users, value: '273', label: 'Çalışan Sayısı', detail: 'Profesyonel ekip' },
  { icon: Globe, value: '6', label: 'Ülke', detail: 'Avrupa operasyonu' },
  { icon: Truck, value: '85+', label: 'Araç Filosu', detail: 'Modern kamyon filosu' },
  { icon: Package, value: '100K+', label: 'Yıllık Teslimat', detail: 'Başarılı nakliye' },
  { icon: Building, value: '15K m²', label: 'Depo Alanı', detail: 'Güvenli depolama' }
];

const MILESTONES = [
  {
    year: '2008',
    title: 'HLL Lojistik Kuruluşu',
    description: 'Bursa\'da kara yolu taşımacılığı alanında faaliyet göstermek üzere kurulduk.',
    icon: Building,
    highlight: true
  },
  {
    year: '2010',
    title: 'İlk Avrupa Rotası',
    description: 'Almanya\'ya ilk uluslararası kara yolu taşımacılığı hizmetimizi başlattık.',
    icon: Route
  },
  {
    year: '2012',
    title: 'Hamburg Ofisi',
    description: 'Almanya Hamburg\'da Avrupa operasyonları için ilk yurtdışı ofisimizi açtık.',
    icon: MapPin
  },
  {
    year: '2014',
    title: 'Depo Tesisi Yatırımı',
    description: 'Bursa\'da 15.000 m² modern depolama tesisimizi hizmete aldık.',
    icon: Package
  },
  {
    year: '2015-2018',
    title: 'Avrupa Genişlemesi',
    description: 'Fransa, İtalya, İspanya ve Hollanda\'da operasyonlarımızı başlattık.',
    icon: Globe
  },
  {
    year: '2020',
    title: 'Dijital Dönüşüm',
    description: 'Takip sistemi ve dijital platform yatırımlarımızı gerçekleştirdik.',
    icon: Settings
  },
  {
    year: '2022',
    title: 'ISO 9001:2015',
    description: 'Kalite yönetim sistemi sertifikasını aldık ve süreçlerimizi standartlaştırdık.',
    icon: Award
  },
  {
    year: '2025',
    title: 'Gelecek Vizyonu',
    description: '8 ülke hedefi ile Avrupa\'nın lider kara yolu lojistik firması olmak.',
    icon: Target,
    future: true
  }
];

const CORE_VALUES = [
  {
    icon: Shield,
    title: 'Güvenilirlik',
    description: 'Müşterilerimize verdiğimiz sözleri tutarak, uzun vadeli güven ilişkileri kuruyoruz.',
    principles: ['Söz verdiğimizde tutarız', 'Şeffaf iletişim', 'Hesap verebilirlik']
  },
  {
    icon: Heart,
    title: 'Müşteri Odaklılık',
    description: 'Her müşterimizin ihtiyacını anlayarak özel çözümler geliştiriyoruz.',
    principles: ['Müşteri memnuniyeti öncelik', 'Kişisel hizmet yaklaşımı', '7/24 destek']
  },
  {
    icon: Zap,
    title: 'Hızlı Çözüm',
    description: 'Operasyonel mükemmellik ile hızlı ve etkili lojistik çözümleri sunuyoruz.',
    principles: ['Zamanında teslimat', 'Proaktif yaklaşım', 'Hızlı problem çözme']
  },
  {
    icon: TrendingUp,
    title: 'Sürekli Gelişim',
    description: 'Teknoloji ve süreç yeniliklerini takip ederek kendimizi sürekli geliştiriyoruz.',
    principles: ['Teknoloji yatırımı', 'Personel eğitimi', 'Süreç optimizasyonu']
  }
];

const MANAGEMENT_TEAM = [
  {
    name: 'Ahmet YILMAZ',
    position: 'Genel Müdür & Kurucu',
    experience: '20+ yıl',
    expertise: 'Lojistik Yönetimi',
    description: 'Lojistik sektöründe 20 yılı aşkın deneyime sahip. HLL Lojistik\'i sektörde güvenilir bir marka haline getirdi.'
  },
  {
    name: 'Mehmet KAYA',
    position: 'Operasyon Müdürü',
    experience: '15+ yıl',
    expertise: 'Operasyonel Mükemmellik',
    description: 'Avrupa operasyonlarının başarıyla yönetilmesinden sorumlu. Süreç optimizasyonu uzmanı.'
  },
  {
    name: 'Fatma DEMİR',
    position: 'Mali İşler Müdürü',
    experience: '12+ yıl',
    expertise: 'Finansal Yönetim',
    description: 'Şirketin finansal büyümesini planlıyor ve risk yönetimi konularında uzman.'
  },
  {
    name: 'Mustafa ÖZKAN',
    position: 'İş Geliştirme Müdürü',
    experience: '10+ yıl',
    expertise: 'Satış & Pazarlama',
    description: 'Yeni pazarlar ve müşteri portföyü geliştirme konularında şirketin büyümesini sağlıyor.'
  }
];

const CERTIFICATIONS = [
  {
    icon: Award,
    title: 'ISO 9001:2015',
    description: 'Kalite Yönetim Sistemi',
    year: '2022',
    status: 'active'
  },
  {
    icon: Shield,
    title: 'TOBB Üyeliği',
    description: 'Türkiye Odalar Birliği',
    year: '2008',
    status: 'active'
  },
  {
    icon: FileText,
    title: 'Karayolu Taşıma Ruhsatı',
    description: 'Uluslararası Nakliye Belgesi',
    year: '2008',
    status: 'active'
  },
  {
    icon: Globe,
    title: 'EU Transport License',
    description: 'AB Taşımacılık Lisansı',
    year: '2012',
    status: 'active'
  }
];

// Components
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }}>
        </div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-8">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-white border border-blue-200 text-blue-700 text-sm font-semibold tracking-wide uppercase">
                <Building className="w-4 h-4 mr-2" />
                15+ Yıllık Deneyim
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hakkımızda
              <span className="block text-blue-600 mt-1">HLL Lojistik</span>
            </h1>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                <strong>2008 yılında kurulan HLL Lojistik</strong>, Türkiye merkezli olarak 
                Avrupa genelinde kara yolu taşımacılığı alanında faaliyet gösteren 
                köklü bir lojistik firmasıdır.
              </p>
              
              <p>
                <strong>273 çalışanı</strong> ve <strong>85+ araçlık modern filosu</strong> ile 
                6 ülkede operasyon yürüten şirketimiz, Bursa merkezli 15.000 m² depolama 
                tesisi ve Avrupa'daki stratejik lokasyonlardaki ofisleri ile 
                kesintisiz hizmet sunmaktadır.
              </p>
              
              <p>
                Müşteri memnuniyeti odaklı yaklaşımımız, teknoloji yatırımlarımız ve 
                deneyimli ekibimiz ile <strong>yılda 100.000'den fazla başarılı teslimat</strong> 
                gerçekleştiriyoruz.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg">
                İletişime Geçin
              </button>
              <button className="border-2 border-gray-800 text-gray-800 px-8 py-3 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300">
                Referanslarımız
              </button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-gray-200 shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Şirket Bilgileri</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Kuruluş</span>
                  <span className="font-bold text-gray-900">2008</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Merkez</span>
                  <span className="font-bold text-gray-900">Bursa, Türkiye</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Faaliyet Alanı</span>
                  <span className="font-bold text-gray-900">Kara Yolu Lojistiği</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Hizmet Bölgesi</span>
                  <span className="font-bold text-gray-900">Türkiye & Avrupa</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Çalışan Sayısı</span>
                  <span className="font-bold text-gray-900">273 Kişi</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Kalite Sertifikası</span>
                  <span className="font-bold text-green-600">ISO 9001:2015</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">İletişim Bilgileri</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-blue-600" />
                    <span>+90 224 XXX XX XX</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-blue-600" />
                    <span>info@hll-lojistik.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                    <span>OSB, Bursa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="scroll-animate text-3xl lg:text-4xl font-bold text-white mb-4">
            Rakamlarla HLL Lojistik
          </h2>
          <p className="scroll-animate text-lg text-blue-100">
            15 yılda ulaştığımız başarı göstergeleri
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPANY_STATS.map((stat, index) => (
            <div key={index} className="scroll-animate text-center">
              <div className="w-16 h-16 bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-blue-100 mb-1">{stat.label}</div>
              <div className="text-sm text-blue-200">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="scroll-animate inline-block px-4 py-2 bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide uppercase mb-4">
            Şirket Tarihçesi
          </div>
          <h2 className="scroll-animate text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            15 Yıllık Yolculuğumuz
          </h2>
          <p className="scroll-animate text-lg text-gray-600 max-w-2xl mx-auto">
            2008'den bugüne kadar geçen sürede attığımız önemli adımlar ve kilometre taşları
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {MILESTONES.map((milestone, index) => (
              <div key={index} className={`scroll-animate flex items-start ${milestone.future ? 'opacity-75' : ''}`}>
                <div className={`w-16 h-16 flex items-center justify-center mr-6 flex-shrink-0 ${
                  milestone.highlight 
                    ? 'bg-blue-600 border-4 border-blue-200' 
                    : milestone.future 
                      ? 'bg-gray-400 border-4 border-gray-200'
                      : 'bg-white border-4 border-blue-600'
                }`}>
                  <milestone.icon className={`w-6 h-6 ${
                    milestone.highlight ? 'text-white' : milestone.future ? 'text-white' : 'text-blue-600'
                  }`} />
                </div>
                
                <div className="flex-1">
                  <div className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                      <span className={`px-3 py-1 text-sm font-semibold ${
                        milestone.future 
                          ? 'bg-orange-100 text-orange-700 border border-orange-200'
                          : 'bg-blue-100 text-blue-700 border border-blue-200'
                      }`}>
                        {milestone.year}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ValuesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="scroll-animate inline-block px-4 py-2 bg-white border border-blue-200 text-blue-700 text-sm font-semibold tracking-wide uppercase mb-4">
            Kurumsal Değerlerimiz
          </div>
          <h2 className="scroll-animate text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            İş Yapış Felsefemiz
          </h2>
          <p className="scroll-animate text-lg text-gray-600 max-w-2xl mx-auto">
            Çalışma kültürümüzü şekillendiren temel değerler ve ilkelerimiz
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {CORE_VALUES.map((value, index) => (
            <div key={index} className="scroll-animate bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-50 border border-blue-200 flex items-center justify-center mr-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{value.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{value.description}</p>
              
              <div className="space-y-2">
                {value.principles.map((principle, principleIndex) => (
                  <div key={principleIndex} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ManagementSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="scroll-animate inline-block px-4 py-2 bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide uppercase mb-4">
            Yönetim Ekibi
          </div>
          <h2 className="scroll-animate text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Deneyimli Liderlik
          </h2>
          <p className="scroll-animate text-lg text-gray-600 max-w-2xl mx-auto">
            Şirketimizi başarıya taşıyan deneyimli yönetim kadrosu
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {MANAGEMENT_TEAM.map((member, index) => (
            <div key={index} className="scroll-animate bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-gray-100 border border-gray-200 flex items-center justify-center mr-6 flex-shrink-0">
                  <Users className="w-8 h-8 text-gray-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {member.experience}
                    </span>
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {member.expertise}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CertificationsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="scroll-animate inline-block px-4 py-2 bg-white border border-blue-200 text-blue-700 text-sm font-semibold tracking-wide uppercase mb-4">
            Sertifikalar & Belgeler
          </div>
          <h2 className="scroll-animate text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Kalite Güvencemiz
          </h2>
          <p className="scroll-animate text-lg text-gray-600 max-w-2xl mx-auto">
            Hizmet kalitemizi garanti eden sertifikalar ve resmi belgelerimiz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div key={index} className="scroll-animate bg-white border border-gray-200 p-6 text-center hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto mb-4">
                <cert.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{cert.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{cert.description}</p>
              <div className="flex items-center justify-center">
                <span className="bg-green-100 text-green-700 px-2 py-1 text-xs font-semibold border border-green-200">
                  {cert.year} - Aktif
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToActionSection = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="scroll-animate text-3xl lg:text-4xl font-bold text-white mb-6">
            Lojistik İhtiyaçlarınız İçin
            <span className="block">Güvenilir Ortağınız</span>
          </h2>
          
          <p className="scroll-animate text-lg text-blue-100 mb-8">
            15 yıllık deneyimimiz ve güçlü ekibimiz ile 
            kara yolu taşımacılığı ihtiyaçlarınızda yanınızdayız.
          </p>
          
          <div className="scroll-animate flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg">
              Hemen Teklif Alın
            </button>
            <button className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              <Phone className="mr-2 w-4 h-4 inline" />
              İletişime Geçin
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main AboutPage Component
const AboutPage = () => {
  useScrollAnimations();

  return (
    <div className="font-sans">
      <HeroSection />
      <StatsSection />
      <TimelineSection />
      <ValuesSection />
      <ManagementSection />
      <CertificationsSection />
      <CallToActionSection />
      
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

export default AboutPage;