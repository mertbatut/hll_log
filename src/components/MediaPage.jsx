// src/components/MediaPage.jsx
import React, { useEffect } from 'react';
import { Image, Eye } from 'lucide-react';

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
  { id: 1, title: 'Araç Filosu 1' },
  { id: 2, title: 'Araç Filosu 2' },
  { id: 3, title: 'Araç Filosu 3' },
  { id: 4, title: 'Depo Tesisi 1' },
  { id: 5, title: 'Depo Tesisi 2' },
  { id: 6, title: 'Depo Tesisi 3' },
  { id: 7, title: 'Operasyon 1' },
  { id: 8, title: 'Operasyon 2' },
  { id: 9, title: 'Operasyon 3' },
  { id: 10, title: 'Ekip Çalışması 1' },
  { id: 11, title: 'Ekip Çalışması 2' },
  { id: 12, title: 'Ekip Çalışması 3' }
];

// Main MediaPage Component
const MediaPage = () => {
  useScrollAnimations();

  return (
    <div className="font-sans">
      {/* Simple Header */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Galeri
          </h1>
          <p className="text-lg text-gray-600">
            HLL Lojistik fotoğraf galerisi
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
                    {/* Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image className="w-12 h-12 text-gray-400" />
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
                      <Eye className="w-8 h-8 text-white" />
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