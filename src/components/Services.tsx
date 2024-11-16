import React, { useEffect, useState } from 'react';
import { Server, Mail, Code } from 'lucide-react';

const services = [
  {
    icon: Server,
    title: "خدمة الاستضافة",
    description: "نحن نقدم استضافة سريعة وموثوقة على أعلى السيرفرات لضمان سرعة موقعك واستقراره."
  },
  {
    icon: Mail,
    title: "الإيميلات الرسمية",
    description: "تجهيز الإيميلات الرسمية لموقعك بسهولة، مما يعزز من مصداقيتك."
  },
  {
    icon: Code,
    title: "تركيب ووردبريس",
    description: "تركيب أنظمة ووردبريس بسرعة وكفاءة، مما يسهل عليك إدارة موقعك بدون أي تعقيدات."
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const animateCards = () => {
      setActiveIndex(-1); // Reset animation
      
      // Start animation sequence
      services.forEach((_, index) => {
        setTimeout(() => {
          setActiveIndex(index);
        }, index * 500); // 500ms delay between each card
      });
    };

    // Initial animation
    animateCards();

    // Set up interval for repeated animation
    const interval = setInterval(animateCards, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="heading text-center mb-16">خدماتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-secondary/80 p-8 rounded-xl shadow-lg transition-all duration-1000 ease-in-out transform
                ${activeIndex >= index ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
            >
              <div className="flex flex-col items-center text-center gap-6">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;