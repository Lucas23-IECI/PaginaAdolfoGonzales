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
        <Services />
        <Portfolio />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Home;
