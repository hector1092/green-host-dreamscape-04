import React from 'react';
import CircuitBackground from '../components/CircuitBackground';
import Header from '../components/Header';
import HostingPlans from '../components/HostingPlans';
import Footer from '../components/Footer';
import PaymentMethods from '../components/PaymentMethods';

const Index = () => {
  return (
    <div className="min-h-screen relative text-right" dir="rtl">
      <CircuitBackground />
      <Header />
      <HostingPlans />
      <PaymentMethods />
      <Footer />
    </div>
  );
};

export default Index;