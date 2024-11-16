import React from 'react';
import { Server, Mail, Code } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';

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

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 2 }}
      className="bg-secondary/80 p-8 rounded-xl shadow-lg transition-all duration-1000 ease-in-out transform hover:scale-105"
    >
      <div className="flex flex-col items-center text-center gap-6">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.3 }}
          className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20"
        >
          <service.icon className="w-10 h-10 text-primary" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 2 + 0.3 }}
          className="text-xl font-bold text-white"
        >
          {service.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 2 + 0.6 }}
          className="text-gray-300"
        >
          {service.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const autoplayOptions = {
    delay: 4000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
  };

  return (
    <section dir="rtl" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="heading text-center mb-16"
        >
          خدماتنا
        </motion.h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[Autoplay(autoplayOptions)]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {services.map((service, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
                <ServiceCard service={service} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Services;