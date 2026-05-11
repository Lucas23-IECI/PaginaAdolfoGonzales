import React from 'react';
import { motion } from 'framer-motion';
import { Home, Layers, TreePine, Headphones, Zap, Gift, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Headphones,
    title: 'Tecnología Acústica de Precisión',
    description: 'Utilizamos geófonos de alta sensibilidad que "escuchan" la fuga a través del concreto, localizándola con precisión milimétrica.',
    colSpan: 'lg:col-span-8',
    bgClass: 'bg-primary text-white',
    textClass: 'text-white/80',
    iconClass: 'text-secondary bg-white/10',
    popular: true,
  },
  {
    icon: Home,
    title: 'Cañerías Interiores',
    description: 'Fugas en muros y cielos sin romper.',
    colSpan: 'lg:col-span-4',
    bgClass: 'bg-white',
    textClass: 'text-slate-500',
    iconClass: 'text-primary bg-primary/5',
    popular: false,
  },
  {
    icon: Layers,
    title: 'Losa y Piso Radiante',
    description: 'Detección exacta en sistemas de calefacción subterránea.',
    colSpan: 'lg:col-span-4',
    bgClass: 'bg-white',
    textClass: 'text-slate-500',
    iconClass: 'text-primary bg-primary/5',
    popular: false,
  },
  {
    icon: TreePine,
    title: 'Exterior y Jardines',
    description: 'Localización en redes subterráneas y patios.',
    colSpan: 'lg:col-span-4',
    bgClass: 'bg-white',
    textClass: 'text-slate-500',
    iconClass: 'text-primary bg-primary/5',
    popular: false,
  },
  {
    icon: Gift,
    title: 'Presupuesto Sin Compromiso',
    description: 'Evaluación y cotización 100% gratuita.',
    colSpan: 'lg:col-span-4',
    bgClass: 'bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/20',
    textClass: 'text-slate-600',
    iconClass: 'text-secondary bg-white',
    popular: false,
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const Services: React.FC = () => {
  return (
    <section id="servicios" className="relative py-32 overflow-hidden bg-background-alt">
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute -left-[20%] top-[20%] w-[50vw] h-[50vw] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -right-[10%] bottom-[10%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-secondary" />
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">
              Especialidades
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.1] mb-6"
          >
            Detección milimétrica para <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary italic pr-2">cada tipo de fuga.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 font-medium leading-relaxed max-w-lg"
          >
            Olvídate de las demoliciones a ciegas. Nuestro equipamiento nos permite "ver" a través del concreto y la tierra.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className={`group relative p-8 sm:p-10 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${service.colSpan} ${service.bgClass} ${service.bgClass === 'bg-white' ? 'border border-slate-100 shadow-xl shadow-slate-200/50' : 'shadow-2xl shadow-primary/20'}`}
            >
              {/* Internal Gradient Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {service.popular && (
                <div className="absolute top-6 right-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest backdrop-blur-md border border-secondary/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                  Tecnología Estrella
                </div>
              )}

              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${service.iconClass}`}>
                <service.icon size={32} strokeWidth={1.5} />
              </div>

              <div className="relative z-10">
                <h3 className={`text-2xl font-bold mb-3 ${service.bgClass.includes('bg-primary') ? 'text-white' : 'text-slate-900'}`}>
                  {service.title}
                </h3>
                <p className={`text-base leading-relaxed ${service.textClass}`}>
                  {service.description}
                </p>
              </div>

              {/* Decorative Arrow */}
              <div className={`absolute bottom-8 right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ${service.bgClass.includes('bg-primary') ? 'text-secondary' : 'text-primary'}`}>
                <ArrowRight size={24} />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
