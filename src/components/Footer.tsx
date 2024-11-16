import React from 'react';
import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 backdrop-blur-lg py-16 text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="space-y-8">
          <h3 className="text-4xl font-bold text-primary mb-6">Green Host</h3>
          <div className="space-y-4 text-gray-200">
            <p className="text-2xl font-semibold">جاهز لتحقيق أحلامك الرقمية؟</p>
            <p className="text-lg">مع Green Host، رحلتك إلى النجاح تبدأ بخطوة واحدة.</p>
            <p className="text-lg">لا تتردد، انضم إلينا اليوم واستمتع بتجربة استضافة استثنائية! 🌐</p>
            <div className="flex items-center justify-center gap-2 text-primary">
              <Phone className="w-5 h-5" />
              <p className="text-lg">دعم فني دائم | خدمات متميزة | نجاح مضمون</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-lg">
            © {new Date().getFullYear()} Green Host. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;