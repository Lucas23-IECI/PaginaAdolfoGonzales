import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const DifferentiatorBlock: React.FC = () => {
  const comparisons = [
    { label: "Intervención Física", trad: "Mayor demolición", tech: "Menor intervención" },
    { label: "Estrategia", trad: "Búsqueda por prueba y error", tech: "Localización precisa" },
    { label: "Velocidad de Respuesta", trad: "Más tiempo", tech: "Diagnóstico rápido" },
    { label: "Impacto Financiero", trad: "Más costos de reconstrucción", tech: "Equipos tecnológicos" }
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegir una detección tecnológica?</h2>
          <p className="text-slate-600 text-lg">
            La diferencia entre procedimientos basados en prueba y error versus el diagnóstico especializado instrumentado.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="grid grid-cols-3 bg-slate-100 border-b border-slate-200 text-sm md:text-base font-bold text-slate-700">
            <div className="p-4 md:p-6 text-center border-r border-slate-200">Característica</div>
            <div className="p-4 md:p-6 text-center border-r border-slate-200 text-red-600">Métodos tradicionales</div>
            <div className="p-4 md:p-6 text-center text-blue-600">Diagnóstico especializado</div>
          </div>

          {comparisons.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 border-b border-slate-100 hover:bg-slate-50 transition-colors"
            >
              <div className="p-4 md:p-6 flex items-center justify-center font-medium text-slate-700 text-center text-sm md:text-base border-r border-slate-200">
                {item.label}
              </div>
              <div className="p-4 md:p-6 flex flex-col md:flex-row items-center justify-center gap-2 text-slate-600 text-center text-sm md:text-base border-r border-slate-200">
                <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                <span>{item.trad}</span>
              </div>
              <div className="p-4 md:p-6 flex flex-col md:flex-row items-center justify-center gap-2 text-slate-900 font-semibold text-center text-sm md:text-base">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                <span>{item.tech}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorBlock;
