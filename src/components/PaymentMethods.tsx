import React from 'react';

const PaymentMethods = () => {
  return (
    <section className="py-16 bg-secondary/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">طرق الدفع</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "/public/icons/image-_5_.ico",
              name: "فودافون كاش",
              description: "ادفع بسهولة عبر محفظة فودافون كاش",
              bgColor: "bg-red-500/10"
            },
            {
              icon: "/public/icons/image-_4_.ico",
              name: "بطاقة فيزا/ماستركارد",
              description: "ادفع باستخدام بطاقتك البنكية",
              bgColor: "bg-blue-500/10"
            },
            {
              icon: "/public/icons/image-_3_.ico",
              name: "إنستا باي",
              description: "الدفع السريع عبر إنستا باي",
              bgColor: "bg-purple-500/10"
            },
            {
              icon: "/public/icons/image-_2_.ico",
              name: "تحويل بنكي",
              description: "حول المبلغ مباشرة إلى حسابنا البنكي",
              bgColor: "bg-green-500/10"
            }
          ].map((method, index) => (
            <div
              key={index}
              className={`${method.bgColor} backdrop-blur-xl rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/10 flex flex-col items-center`}
            >
              <div className="mb-4">
                <img 
                  src={method.icon}
                  alt={method.name}
                  className="w-16 h-16 transition-transform duration-300 hover:scale-110 filter brightness-0 invert"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{method.name}</h3>
              <p className="text-gray-300">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;