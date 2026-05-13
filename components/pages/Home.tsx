import React, { Suspense } from 'react';
import Navbar from '../Navbar';
import Hero from '../Hero';
import WhatsAppFloat from '../WhatsAppFloat';

// Lazy loading de componentes "below the fold" para mejorar INP y tamaño del DOM inicial
const Services = React.lazy(() => import('../Services'));
const Portfolio = React.lazy(() => import('../Portfolio'));
const FAQ = React.lazy(() => import('../FAQ'));
const Contact = React.lazy(() => import('../Contact'));
const Footer = React.lazy(() => import('../Footer'));

const Home: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero carga inmediato porque es LCP (Largest Contentful Paint) */}
        <Hero />
        
        <Suspense fallback={<div className="h-32 flex items-center justify-center text-slate-400">Cargando...</div>}>
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
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <WhatsAppFloat />
    </div>
  );
};

export default Home;
