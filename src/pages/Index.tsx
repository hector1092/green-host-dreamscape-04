import React from 'react';
import CircuitBackground from '../components/CircuitBackground';
import Header from '../components/Header';
import HostingPlans from '../components/HostingPlans';
import Stats from '../components/Stats';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative" dir="rtl">
      <CircuitBackground />
      <Header />
      <Features />
      <HostingPlans />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;