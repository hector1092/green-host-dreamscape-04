import React from 'react';
import { CreditCard, Banknote, Smartphone, CreditCard as VisaIcon } from 'lucide-react';

const PaymentMethods = () => {
  return (
    <section className="py-16 bg-secondary/50 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">طرق الدفع</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Smartphone,
              name: "فودافون كاش",
              description: "ادفع بسهولة عبر محفظة فودافون كاش",
              color: "text-red-500"
            },
            {
              icon: CreditCard,
              name: "إنستا باي",
              description: "الدفع السريع عبر إنستا باي",
              color: "text-purple-500"
            },
            {
              icon: VisaIcon,
              name: "بطاقة فيزا/ماستركارد",
              description: "ادفع باستخدام بطاقتك البنكية",
              color: "text-blue-500"
            },
            {
              icon: Banknote,
              name: "تحويل بنكي",
              description: "حول المبلغ مباشرة إلى حسابنا البنكي",
              color: "text-green-500"
            }
          ].map((method, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">
                <method.icon 
                  className={`w-[50px] h-[50px] ${method.color} transition-transform duration-300 hover:scale-110`} 
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{method.name}</h3>
              <p className="text-gray-400">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;