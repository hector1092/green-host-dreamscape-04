import React from 'react';
import { Check, Server, Database, Globe, Headphones } from 'lucide-react';

const plans = [
  {
    name: "الأساسية",
    price: "99",
    description: "مثالي للمواقع الشخصية والمدونات",
    features: [
      { text: "مساحة 10 جيجا", icon: Server },
      { text: "نطاق واحد", icon: Globe },
      { text: "5 قواعد بيانات", icon: Database },
      { text: "دعم فني بالبريد", icon: Headphones },
    ]
  },
  {
    name: "المتقدمة",
    price: "199",
    description: "مثالي للشركات الصغيرة والمتوسطة",
    features: [
      { text: "مساحة 25 جيجا", icon: Server },
      { text: "3 نطاقات", icon: Globe },
      { text: "10 قواعد بيانات", icon: Database },
      { text: "دعم فني 24/7", icon: Headphones },
    ]
  },
  {
    name: "الاحترافية",
    price: "299",
    description: "مثالي للمشاريع الكبيرة والشركات",
    features: [
      { text: "مساحة غير محدودة", icon: Server },
      { text: "نطاقات غير محدودة", icon: Globe },
      { text: "قواعد بيانات غير محدودة", icon: Database },
      { text: "دعم فني VIP", icon: Headphones },
    ]
  }
];

const HostingPlans = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="heading text-center mb-4">خطط الاستضافة</h2>
        <p className="text-gray-400 text-center mb-16">اختر الخطة المناسبة لمشروعك</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="card text-center transform hover:scale-105 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
              <div className="text-4xl font-bold text-primary mb-6">
                {plan.price}
                <span className="text-xl text-gray-400"> ج.م/شهرياً</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-right">
                    <feature.icon className="w-5 h-5 text-primary shrink-0" />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full hover:shadow-lg transform hover:translate-y-[-2px] transition-all">
                اختر الخطة
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingPlans;