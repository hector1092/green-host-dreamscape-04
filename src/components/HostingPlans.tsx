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
      { text: "ربط الدومين مع الاستضافة", icon: Globe },
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
      { text: "ربط الدومين مع الاستضافة", icon: Globe },
      { text: "تركيب ووردبريس", icon: Database },
      { text: "نسخ احتياطي يومي", icon: Clock },
    ]
  },
  {
    name: "خطة الأعمال المتقدمة",
    price: "2500",
    description: "مثالية للشركات والمؤسسات الكبيرة",
    features: [
      { text: "مساحة 15 جيجا بايت", icon: HardDrive },
      { text: "باندويدث 150,000 جيجا بايت شهرياً", icon: Network },
      { text: "20 إيميل رسمي", icon: Mail },
      { text: "ربط الدومين مع الاستضافة", icon: Globe },
      { text: "تركيب ووردبريس", icon: Database },
      { text: "دعم فني متقدم 24/7", icon: Clock },
    ]
  },
  {
    name: "خطة الاستضافة الشاملة",
    price: "2999",
    description: "الحل الأمثل للمشاريع الكبيرة",
    popular: true,
    features: [
      { text: "مساحة تخزينية غير محدودة", icon: HardDrive },
      { text: "نقل بيانات شهري غير محدود", icon: Network },
      { text: "عدد غير محدود من الإيميلات الرسمية", icon: Mail },
      { text: "ربط مجاني للدومين مع الاستضافة", icon: Globe },
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
    <section id="hosting-plans" className="section">
      <div className="container mx-auto px-4">
        <h2 className="heading text-center mb-4">خطط الاستضافة</h2>
        <p className="subheading text-center mb-16">اختر الخطة المناسبة لمشروعك</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`card ${plan.popular ? 'ring-2 ring-primary' : ''}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-4 bg-primary text-white px-4 py-1 rounded-full text-sm">
                  عرض محدود
                </span>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
                <div className="text-4xl font-bold text-white mb-8">
                  {plan.price}
                  <span className="text-xl text-gray-400"> ج.م/شهرياً</span>
                </div>
                <ul className="space-y-4 mb-8 text-right">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <feature.icon className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-gray-200 text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={handleSubscribe}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40"
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
