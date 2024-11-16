import React from 'react';
import CircuitBackground from '../components/CircuitBackground';
import Header from '../components/Header';
import HostingPlans from '../components/HostingPlans';
import Services from '../components/Services';
import Footer from '../components/Footer';
import WelcomeMessage from '../components/WelcomeMessage';

const Index = () => {
  return (
    <div className="min-h-screen relative bg-secondary/95" dir="rtl">
      <CircuitBackground />
      <WelcomeMessage />
      <Header />
      <Services />
      <HostingPlans />
      <Footer />
    </div>
  );
};

export default Index;