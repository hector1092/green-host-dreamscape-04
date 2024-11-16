import React from 'react';
import { CreditCard, Banknote } from 'lucide-react';

const PaymentMethods = () => {
  return (
    <section className="py-16 bg-secondary/50 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">طرق الدفع</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: CreditCard,
              name: "فودافون كاش",
              description: "ادفع بسهولة عبر محفظة فودافون كاش"
            },
            {
              icon: CreditCard,
              name: "إنستا باي",
              description: "الدفع السريع عبر إنستا باي"
            },
            {
              icon: CreditCard,
              name: "بطاقة فيزا/ماستركارد",
              description: "ادفع باستخدام بطاقتك البنكية"
            },
            {
              icon: Banknote,
              name: "تحويل بنكي",
              description: "حول المبلغ مباشرة إلى حسابنا البنكي"
            }
          ].map((method, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <method.icon className="w-12 h-12 text-primary" />
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