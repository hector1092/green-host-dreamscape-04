import React from 'react';
import { Shield, Zap, Clock, Database, Lock, Settings } from 'lucide-react';

const features = [
  {
    icon: Clock,
    text: "دعم فني 24 ساعة",
  },
  {
    icon: Zap,
    text: "سرعة استجابة عالية",
  },
  {
    icon: Shield,
    text: "حماية ضد الهجمات",
  },
  {
    icon: Database,
    text: "نسخ احتياطي يومي",
  },
  {
    icon: Lock,
    text: "شهادات SSL مجانية",
  },
  {
    icon: Settings,
    text: "لوحة تحكم متطورة",
  },
];

const Features = () => {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 hover:bg-white/20 transition-all duration-300 cursor-default group"
            >
              <feature.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-white font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;