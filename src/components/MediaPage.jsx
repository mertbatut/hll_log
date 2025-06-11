import React, { useEffect, useState } from 'react';
import { Image, Eye, X } from 'lucide-react';

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

// Simple Gallery Data
const GALLERY_IMAGES = [
  { id: 1, title: 'Araç Filosu', src: 'https://safarilojistik.com/upload/product-image/large-1667383779.jpg' },
  { id: 2, title: 'Araç Filosu', src: 'https://www.goodloading.com/wp-content/uploads/2024/03/goodloading-road-freight-forwarder.png' },
  { id: 3, title: 'Araç Filosu', src: 'https://www.ioscm.com/wp-content/uploads/2022/06/AdobeStock_65931251.jpeg' },
  { id: 4, title: 'Araç Filosu', src: 'https://media.licdn.com/dms/image/v2/D4E12AQEfNWNSinp_Gg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1696979503695?e=2147483647&v=beta&t=Ak_swilFacu44TspUIzGeFA_E2P_iSRYAft_7PCUuy4' },
  { id: 5, title: 'Araç Filosu', src: 'https://www.seatram.com.au/wp-content/uploads/2017/02/shutterstock_350092247.jpg' },
  { id: 6, title: 'Araç Filosu', src: 'https://cdn.prod.website-files.com/5ca4d1fd374efbecd845739f/62fbbc3ee846b67820ed003f_Two%20Trucks%20Driving.png' },
  { id: 7, title: 'Araç Filosu', src: 'https://cdn-platform.wareflex.io/web-marketing/resources/01917437-f391-772d-807d-14a4e6e8fe2c.jpg' },
  { id: 8, title: 'Araç Filosu', src: 'https://landing.unicoreoverseas.com/assets/images/perevozki/roadfreight.jpg' },
  { id: 9, title: 'Araç Filosu', src: 'https://www.kinay.com/Images/LojistikHizmetleri/KaraTasimaciligi.webp' },
  { id: 10, title: 'Araç Filosu', src: 'https://www.hipexcargo.com/images/hizmetler/uluslararasi-karayolu-tasima-hizmetler-579162519-img.jpg' },
  { id: 11, title: 'Araç Filosu', src: 'https://www.envoylojistik.com/upload/hizmetler/kkkkk.jpg' },
  { id: 12, title: 'Araç Filosu', src: 'https://cdn.prod.website-files.com/64214054953dd55d1d85f7fd/665dc2fceedfd6a8e9539aa4_Containers.webp' }
];

// Lightbox Modal Component
const Lightbox = ({ image, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        >
          <X className="w-8 h-8" />
        </button>
        <img
          src={image.src}
          alt={image.title}
          className="max-w-full max-h-full object-contain"
        />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-semibold">{image.title}</h3>
        </div>
      </div>
    </div>
  );
};

// Main MediaPage Component
const MediaPage = () => {
  useScrollAnimations();
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="font-sans">
      {/* Simple Header */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Galeri
          </h1>
          <p className="text-lg text-gray-600">
            İmra Lojistik fotoğraf galerisi
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {GALLERY_IMAGES.map((image) => (
              <div key={image.id} className="scroll-animate group">
                <div className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  {/* Image Area */}
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    {/* Ana resim img tag'i */}
                    <img 
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div 
                      className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                      onClick={() => openLightbox(image)}
                    >
                      <div className="text-center text-white">
                        <Eye className="w-8 h-8 mx-auto mb-1" />
                        <span className="text-sm">Büyüt</span>
                      </div>
                    </div>
                  </div>

                  {/* Image Title */}
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 text-center">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox 
        image={selectedImage} 
        isOpen={lightboxOpen} 
        onClose={closeLightbox} 
      />

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
        
        .aspect-square {
          aspect-ratio: 1/1;
        }
      `}</style>
    </div>
  );
};

export default MediaPage;