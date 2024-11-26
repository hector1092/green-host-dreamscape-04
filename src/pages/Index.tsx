import React from 'react';
import CircuitBackground from '../components/CircuitBackground';
import Header from '../components/Header';
import HostingPlans from '../components/HostingPlans';
import Footer from '../components/Footer';
import PaymentMethods from '../components/PaymentMethods';

const Index = () => {
  return (
    <div className="min-h-screen relative text-right overflow-hidden" dir="rtl">
      <video
        id="video-background"
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 min-w-full min-h-full object-cover -z-10 animate-pulse"
      >
        <source src="/green (1) (1).mkv" type="video/x-matroska" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 bg-white/5 backdrop-blur-sm">
        <CircuitBackground />
        <Header />
        <HostingPlans />
        <PaymentMethods />
        <Footer />
      </div>
    </div>
  );
};

export default Index;