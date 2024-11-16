import React from 'react';
import CircuitBackground from '../components/CircuitBackground';
import Header from '../components/Header';
import HostingPlans from '../components/HostingPlans';
import Services from '../components/Services';
import Footer from '../components/Footer';
import WelcomeMessage from '../components/WelcomeMessage';
import PaymentMethods from '../components/PaymentMethods';
import HostingAnimation from '../components/HostingAnimation';

const Index = () => {
  return (
    <div className="min-h-screen relative text-right" dir="rtl">
      <CircuitBackground />
      <WelcomeMessage />
      <Header />
      <HostingAnimation />
      <Services />
      <HostingPlans />
      <PaymentMethods />
      <Footer />
    </div>
  );
};

export default Index;