import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 backdrop-blur-lg py-16 text-right" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary mb-6">Green Host</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              نقدم أفضل خدمات الاستضافة بأسعار تنافسية مع دعم فني متميز
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-2xl font-bold mb-6">تواصل معنا</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group hover:text-primary transition-colors duration-300">
                <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-lg">support@greenhost.com</span>
              </div>
              <div className="flex items-center gap-4 group hover:text-primary transition-colors duration-300">
                <Phone className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-lg">+20 123 456 789</span>
              </div>
              <div className="flex items-center gap-4 group hover:text-primary transition-colors duration-300">
                <MapPin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-lg">القاهرة، مصر</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-2xl font-bold mb-6">تابعنا</h4>
            <div className="flex gap-6">
              {[
                { icon: Facebook, link: "#" },
                { icon: Twitter, link: "#" },
                { icon: Instagram, link: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-500 transform hover:scale-110 hover:rotate-6"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
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