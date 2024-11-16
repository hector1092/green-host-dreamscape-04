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
  const autoplayOptions = {
    delay: 2000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
  };

  return (
    <section dir="rtl" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="heading text-center mb-16">خدماتنا</h2>
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
                <div className="bg-secondary/80 p-8 rounded-xl shadow-lg transition-all duration-1000 ease-in-out transform hover:scale-105">
                  <div className="flex flex-col items-center text-center gap-6">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <service.icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
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