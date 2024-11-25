import React from 'react';
import { HardDrive, Network, Mail, Globe, Database, Shield, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "خطة البداية",
    price: "1500",
    description: "مثالية للمشاريع الصغيرة والمواقع الشخصية",
    features: [
      { text: "مساحة 3 جيجا بايت", icon: HardDrive },
      { text: "باندويدث 30,000 جيجا بايت شهرياً", icon: Network },
      { text: "5 إيميلات رسمية", icon: Mail },
      { text: "دومين بسعر خاص", icon: Globe },
      { text: "تركيب ووردبريس", icon: Database },
      { text: "نسخ احتياطي يومي", icon: Clock },
    ]
  },
  {
    name: "خطة الأعمال المتوسطة",
    price: "2000",
    description: "مثالية للشركات الصغيرة والمتوسطة",
    features: [
      { text: "مساحة 6 جيجا بايت", icon: HardDrive },
      { text: "باندويدث 60,000 جيجا بايت شهرياً", icon: Network },
      { text: "10 إيميلات رسمية", icon: Mail },
      { text: "دومين بسعر خاص", icon: Globe },
      { text: "تركيب ووردبريس", icon: Database },
      { text: "نسخ احتياطي يومي", icon: Clock },
    ]
  },
  {
    name: "خطة الأعمال المتقدمة",
    price: "3000",
    description: "مثالية للشركات والمؤسسات الكبيرة",
    features: [
      { text: "مساحة 15 جيجا بايت", icon: HardDrive },
      { text: "باندويدث 150,000 جيجا بايت شهرياً", icon: Network },
      { text: "20 إيميل رسمي", icon: Mail },
      { text: "دومين بسعر خاص", icon: Globe },
      { text: "تركيب ووردبريس", icon: Database },
      { text: "دعم فني متقدم 24/7", icon: Clock },
    ]
  },
  {
    name: "خطة الاستضافة الشاملة",
    price: "5000",
    description: "الحل الأمثل للمشاريع الكبيرة",
    features: [
      { text: "مساحة تخزينية غير محدودة", icon: HardDrive },
      { text: "نقل بيانات شهري غير محدود", icon: Network },
      { text: "عدد غير محدود من الإيميلات الرسمية", icon: Mail },
      { text: "دومين مجاني", icon: Globe },
      { text: "تركيب وتجهيز ووردبريس", icon: Database },
      { text: "حماية متقدمة من الفيروسات والهجمات", icon: Shield },
      { text: "دعم فني متميز على مدار الساعة", icon: Clock },
    ]
  }
];

const HostingPlans = () => {
  const handleSubscribe = () => {
    window.open('https://wa.me/201030435987', '_blank');
  };

  return (
    <section dir="rtl" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="heading text-center mb-4">خطط الاستضافة</h2>
        <p className="subheading text-center mb-16">اختر الخطة المناسبة لمشروعك</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                <div className="text-4xl font-bold text-gray-800 mb-8">
                  {plan.price}
                  <span className="text-xl text-gray-500"> ج.م</span>
                </div>
                <ul className="space-y-4 mb-8 text-right">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <feature.icon className="w-5 h-5 text-blue-500 shrink-0" />
                      <span className="text-gray-600 text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={handleSubscribe}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
                  size="lg"
                >
                  اشترك الآن
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingPlans;