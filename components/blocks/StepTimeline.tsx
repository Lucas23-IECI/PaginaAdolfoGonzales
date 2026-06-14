import React from 'react';
import { motion } from 'framer-motion';

export interface Step {
  title: string;
  description: string;
}

interface StepTimelineProps {
  title?: string;
  steps: Step[];
}

const StepTimeline: React.FC<StepTimelineProps> = ({ 
  title = "Nuestro Proceso Especializado", 
  steps 
}) => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative flex gap-6 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              {idx !== steps.length - 1 && (
                <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-blue-200"></div>
              )}
              
              {/* Number Circle */}
              <div className="relative z-10 w-12 h-12 shrink-0 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/30">
                {idx + 1}
              </div>
              
              {/* Content */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-1 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepTimeline;
