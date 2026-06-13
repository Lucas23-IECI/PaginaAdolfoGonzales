import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import WhatsAppFloat from '../WhatsAppFloat';
import { useSEO } from '../../hooks/useSEO';
import Contact from '../Contact';

interface SEOLandingProps {
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
  schema: Record<string, any>;
  h1: string;
  heroText: string;
  content: React.ReactNode;
}

const SEOLanding: React.FC<SEOLandingProps> = ({
  seoTitle,
  seoDescription,
  canonicalUrl,
  schema,
  h1,
  heroText,
  content,
}) => {
  useSEO({
    title: seoTitle,
    description: seoDescription,
    canonicalUrl,
    schema,
  });

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-background-light text-slate-900">
      <Navbar />
      <main>
        {/* Simple Hero for SEO Pages */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-slate-900 via-[#0f5a3b] to-slate-800 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              {h1}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-medium">
              {heroText}
            </p>
          </div>
        </section>

        {/* Content Area */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            {content}
          </div>
        </section>

        {/* Contact Form CTA */}
        <div className="bg-slate-50 py-12">
          <Contact />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default SEOLanding;
