import React, { useState } from 'react';
import { X, ArrowRight, User, Mail, Phone, Building, MapPin, Package, Truck, FileText } from 'lucide-react';

const NavlunFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    isim: '',
    soyisim: '',
    telefon: '',
    mail: '',
    sirketAdi: '',
    tonaj: '',
    teslimAdresi: '',
    malCinsi: '',
    gumrukAdresi: '',
    yuklemeYeri: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // Form validation
      const requiredFields = ['isim', 'soyisim', 'telefon', 'mail', 'tonaj', 'teslimAdresi', 'malCinsi', 'yuklemeYeri'];
      const missingFields = requiredFields.filter(field => !formData[field]);
      
      if (missingFields.length > 0) {
        setSubmitMessage('Lütfen tüm zorunlu alanları doldurun.');
        setIsSubmitting(false);
        return;
      }

      // EmailJS ile mail gönderimi için hazırlanan data
      const emailData = {
        to_email: 'info@imralojistik.com.tr',
        from_name: `${formData.isim} ${formData.soyisim}`,
        from_email: formData.mail,
        subject: 'Yeni Navlun Teklif Talebi',
        message: `
Yeni Navlun Teklif Talebi

Kişi Bilgileri:
- İsim Soyisim: ${formData.isim} ${formData.soyisim}
- Telefon: ${formData.telefon}
- E-mail: ${formData.mail}
- Şirket: ${formData.sirketAdi || 'Belirtilmedi'}

Yük Bilgileri:
- Tonaj: ${formData.tonaj}
- Mal Cinsi: ${formData.malCinsi}
- Yükleme Yeri: ${formData.yuklemeYeri}
- Teslim Adresi: ${formData.teslimAdresi}
- Gümrük Adresi: ${formData.gumrukAdresi || 'Belirtilmedi'}

Bu talep ${new Date().toLocaleString('tr-TR')} tarihinde gönderilmiştir.
        `
      };

      console.log('Email data prepared:', emailData);
      
      // Simülasyon için 2 saniye bekle
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitMessage('Talebiniz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
      
      // 3 saniye sonra modalı kapat
      setTimeout(() => {
        onClose();
        setFormData({
          isim: '', soyisim: '', telefon: '', mail: '', sirketAdi: '',
          tonaj: '', teslimAdresi: '', malCinsi: '', gumrukAdresi: '', yuklemeYeri: ''
        });
        setSubmitMessage('');
      }, 3000);

    } catch (error) {
      setSubmitMessage('Bir hata oluştu. Lütfen tekrar deneyin veya telefon ile iletişime geçin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="bg-blue-600 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold mb-2">Ücretsiz Navlun Teklifi</h2>
          <p className="text-blue-100">
            Detaylı bilgilerinizi doldurun, size özel fiyat teklifimizi hazırlayalım.
          </p>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {submitMessage && (
            <div className={`mb-6 p-4 border-l-4 ${
              submitMessage.includes('başarıyla') 
                ? 'bg-green-50 border-green-500 text-green-700' 
                : 'bg-red-50 border-red-500 text-red-700'
            }`}>
              {submitMessage}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {/* Kişi Bilgileri */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center mb-4">
                <User className="w-5 h-5 mr-2 text-blue-600" />
                Kişi Bilgileri
              </h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  İsim *
                </label>
                <input
                  type="text"
                  name="isim"
                  value={formData.isim}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Adınız"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Soyisim *
                </label>
                <input
                  type="text"
                  name="soyisim"
                  value={formData.soyisim}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Soyadınız"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon *
                </label>
                <input
                  type="tel"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+90 546 403 16 22"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail *
                </label>
                <input
                  type="email"
                  name="mail"
                  value={formData.mail}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Şirket Adı
                </label>
                <input
                  type="text"
                  name="sirketAdi"
                  value={formData.sirketAdi}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Şirket adınız (opsiyonel)"
                />
              </div>
            </div>

            {/* Yük Bilgileri */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center mb-4">
                <Package className="w-5 h-5 mr-2 text-blue-600" />
                Yük Bilgileri
              </h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tonaj *
                </label>
                <input
                  type="text"
                  name="tonaj"
                  value={formData.tonaj}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Örn: 25 ton, 15.5 ton"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mal Cinsi *
                </label>
                <input
                  type="text"
                  name="malCinsi"
                  value={formData.malCinsi}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Örn: Tekstil ürünleri, makine parçaları"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Yükleme Yeri *
                </label>
                <input
                  type="text"
                  name="yuklemeYeri"
                  value={formData.yuklemeYeri}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Örn: Bursa, Türkiye"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Teslim Adresi *
                </label>
                <input
                  type="text"
                  name="teslimAdresi"
                  value={formData.teslimAdresi}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Örn: Hamburg, Almanya"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gümrük Adresi
                </label>
                <input
                  type="text"
                  name="gumrukAdresi"
                  value={formData.gumrukAdresi}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Gümrük işlemleri adresi (opsiyonel)"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex-1 bg-blue-600 text-white px-8 py-3 font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    Teklif Talep Et
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
              <button
                onClick={onClose}
                className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors duration-300"
              >
                İptal
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              * işaretli alanlar zorunludur. Talebiniz 24 saat içinde değerlendirilecektir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavlunFormModal;