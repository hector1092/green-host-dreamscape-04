import React from 'react';
import CircuitBackground from '../components/CircuitBackground';
import Header from '../components/Header';
import HostingPlans from '../components/HostingPlans';
import Footer from '../components/Footer';
import PaymentMethods from '../components/PaymentMethods';

const Index = () => {
  return (
    <div className="min-h-screen relative text-right" dir="rtl">
      <video
        id="video-background"
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 min-w-full min-h-full object-cover -z-10"
      >
        <source src="/تصميم بدون عنوان.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <CircuitBackground />
      <Header />
      <HostingPlans />
      <PaymentMethods />
      <Footer />
    </div>
  );
};

export default Index;