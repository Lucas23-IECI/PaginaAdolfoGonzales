import React from 'react';
import { motion } from 'framer-motion';

export interface TechCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefit: string;
}

interface TechVisualBlockProps {
  title?: string;
  subtitle?: string;
  technologies: TechCard[];
}

const TechVisualBlock: React.FC<TechVisualBlockProps> = ({ 
  title = "Nuestra Tecnología", 
  subtitle = "Equipamiento de última generación para precisión milimétrica",
  technologies 
}) => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-slate-300">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-colors"
            >
              <div className="w-14 h-14 bg-blue-900/50 text-blue-400 rounded-xl flex items-center justify-center mb-6">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{tech.description}</p>
              <div className="pt-4 border-t border-slate-700">
                <span className="text-blue-400 text-sm font-semibold block uppercase tracking-wider">Beneficio</span>
                <span className="text-slate-200">{tech.benefit}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechVisualBlock;
