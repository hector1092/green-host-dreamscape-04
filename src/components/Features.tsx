import React from 'react';

const features = [
  "دعم فني 24 ساعة",
  "سرعة استجابة عالية",
  "حماية ضد الهجمات",
  "نسخ احتياطي يومي",
  "شهادات SSL مجانية",
  "لوحة تحكم متطورة",
];

const Features = () => {
  return (
    <div className="relative overflow-hidden py-10 bg-primary/5">
      <div className="animate-slide-left whitespace-nowrap">
        {[...features, ...features].map((feature, index) => (
          <span
            key={index}
            className="inline-block mx-8 text-lg font-medium text-primary"
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Features;