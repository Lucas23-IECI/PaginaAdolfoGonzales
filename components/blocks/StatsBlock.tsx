import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle, Map, Zap } from 'lucide-react';

const StatsBlock: React.FC = () => {
  const stats = [
    { label: "Atención Especializada", icon: <CheckCircle className="w-10 h-10 mx-auto mb-3 text-blue-500" /> },
    { label: "Diagnóstico Técnico", icon: <Target className="w-10 h-10 mx-auto mb-3 text-blue-500" /> },
    { label: "Cobertura Regional", icon: <Map className="w-10 h-10 mx-auto mb-3 text-blue-500" /> },
    { label: "Tecnología Profesional", icon: <Zap className="w-10 h-10 mx-auto mb-3 text-blue-500" /> }
  ];

  return (
    <section className="py-16 bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              {stat.icon}
              <span className="text-sm md:text-base font-bold text-slate-300 uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBlock;
