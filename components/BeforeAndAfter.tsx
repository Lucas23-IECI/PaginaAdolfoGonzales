import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const BeforeAndAfter: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Intervención Exacta y Precisa
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Mira cómo resolvemos el problema directamente en la zona afectada. Evitamos destrozos innecesarios en tu propiedad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Before */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img 
                src="/anteshd.png" 
                alt="Antes - Fuga localizada" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-slate-800/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2">
                Antes
              </div>
            </div>
            <p className="text-slate-600 text-center font-medium px-4">
              Localizamos el punto exacto de la filtración antes de intervenir.
            </p>
          </motion.div>

          {/* After */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] border-4 border-primary">
              <img 
                src="/despueshd.png" 
                alt="Después - Reparación finalizada" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2">
                <CheckCircle2 size={20} />
                Después
              </div>
            </div>
            <p className="text-slate-600 text-center font-medium px-4">
              Realizamos la reparación estrictamente necesaria minimizando el daño en tu hogar.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAndAfter;
