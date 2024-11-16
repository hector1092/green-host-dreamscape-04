import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "الأساسية",
    price: "99",
    features: [
      "مساحة 10 جيجا",
      "نطاق واحد",
      "5 قواعد بيانات",
      "دعم فني بالبريد",
    ]
  },
  {
    name: "المتقدمة",
    price: "199",
    features: [
      "مساحة 25 جيجا",
      "3 نطاقات",
      "10 قواعد بيانات",
      "دعم فني 24/7",
    ]
  },
  {
    name: "الاحترافية",
    price: "299",
    features: [
      "مساحة غير محدودة",
      "نطاقات غير محدودة",
      "قواعد بيانات غير محدودة",
      "دعم فني VIP",
    ]
  }
];

const HostingPlans = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="heading text-center mb-16">خطط الاستضافة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="card text-center">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold text-primary mb-6">
                {plan.price}
                <span className="text-xl text-gray-400"> ج.م/شهرياً</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full">اختر الخطة</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingPlans;