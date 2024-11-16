import React from 'react';
import CircuitBackground from '../components/CircuitBackground';
import Header from '../components/Header';
import HostingPlans from '../components/HostingPlans';
import Stats from '../components/Stats';
import Features from '../components/Features';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative bg-secondary/95" dir="rtl">
      <CircuitBackground />
      <Header />
      <Features />
      <Services />
      <HostingPlans />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;