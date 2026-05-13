import React from 'react';
import Navbar from '../Navbar';
import Hero from '../Hero';
import Services from '../Services';
import Portfolio from '../Portfolio';
import FAQ from '../FAQ';
import Contact from '../Contact';
import Footer from '../Footer';
import WhatsAppFloat from '../WhatsAppFloat';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        {/* Separador verde */}
        <div className="w-full flex justify-center py-2">
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-[#0f5a3b] via-[#16a34a] to-[#4ade80] opacity-40" />
        </div>
        <Services />
        <Portfolio />
        {/* Separador verde */}
        <div className="w-full flex justify-center py-2">
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-[#4ade80] via-[#16a34a] to-[#0f5a3b] opacity-40" />
        </div>
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Home;
