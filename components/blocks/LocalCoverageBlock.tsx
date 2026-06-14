import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const LocalCoverageBlock: React.FC = () => {
  const comunas = [
    "Concepción", "San Pedro de la Paz", "Talcahuano", 
    "Chiguayante", "Hualpén", "Penco", "Tomé", "Lota"
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-2xl mb-4">
            <MapPin className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Cobertura técnica en el Gran Concepción</h2>
          <p className="text-slate-600">Entregamos diagnóstico instrumental preciso en zonas residenciales, edificios e industria local de la intercomuna.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {comunas.map((comuna, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="px-5 py-3 bg-white border border-slate-200 rounded-xl shadow-sm text-slate-700 font-semibold flex items-center gap-2 cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              {comuna}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalCoverageBlock;
