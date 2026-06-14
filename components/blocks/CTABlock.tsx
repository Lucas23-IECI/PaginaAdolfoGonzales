import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const CTABlock: React.FC = () => {
  return (
    <section className="py-12 bg-blue-50 border-y border-blue-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-blue-200 p-8 text-center flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left flex-1">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">¿Sospechas una fuga de agua?</h2>
            <p className="text-slate-600 font-medium">Una detección temprana evita daños estructurales y gastos innecesarios.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a href="tel:+56966795221" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-colors">
              <Phone className="w-5 h-5" />
              Solicitar Evaluación
            </a>
            <a href="https://wa.me/56966795221?text=Hola%20Adolfo%2C%20necesito%20evaluación%20técnica." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition-colors">
              <MessageCircle className="w-5 h-5" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABlock;
