import React, { useEffect, useRef, useState } from 'react';
import { Server, Users, Clock } from 'lucide-react';

const stats = [
  { value: 99.9, label: "نسبة الجاهزية", suffix: "%", icon: Clock },
  { value: 1000, label: "عميل سعيد", suffix: "+", icon: Users },
  { value: 50, label: "خادم", suffix: "", icon: Server },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="card text-center transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">
                {isVisible ? (
                  <span className="animate-number-count">
                    {stat.value}
                    {stat.suffix}
                  </span>
                ) : (
                  "0"
                )}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;