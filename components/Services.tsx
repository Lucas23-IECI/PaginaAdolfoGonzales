import React from 'react';
import { motion } from 'framer-motion';
import { Home, Layers, TreePine, Headphones, ShieldCheck, Wrench, Gift, ArrowRight } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  colSpan: string;
  bgClass: string;
  textClass: string;
  iconClass: string;
  popular: boolean;
  badgeText?: string;
}

const services: Service[] = [
  {
    icon: ShieldCheck,
    title: 'Certificación SEC y Gas',
    description: <>Instaladores autorizados por la <a href="https://www.sec.cl/" target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 hover:decoration-white transition-colors" title="Superintendencia de Electricidad y Combustibles">SEC</a>. Realizamos Declaración de Instalación de Gas (TC6), Tramitación Sello Verde, Redes de Gas bajo normalización, Fugas de Gas y Reparación/Instalación de Calefont.</>,
    colSpan: 'lg:col-span-6',
    bgClass: 'bg-primary text-white border-transparent',
    textClass: '',
    iconClass: 'bg-white/10 text-secondary border border-white/20',
    popular: true,
    badgeText: 'Certificado SEC',
  },
  {
    icon: Headphones,
    title: 'Tecnología Acústica de Precisión',
    description: <>Utilizamos <a href="https://es.wikipedia.org/wiki/Ge%C3%B3fono" target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 hover:decoration-white transition-colors" title="Información sobre Geófonos">geófonos</a> de alta sensibilidad que "escuchan" la fuga a través del concreto, localizándola con precisión milimétrica.</>,
    colSpan: 'lg:col-span-6',
    bgClass: 'bg-primary text-white border-transparent',
    textClass: '',
    iconClass: 'bg-white/10 text-secondary border border-white/20',
    popular: true,
    badgeText: 'Tecnología Estrella',
  },
  {
    icon: Wrench,
    title: 'Gasfitería Integral',
    description: <><a href="#contacto" className="underline decoration-slate-300 hover:decoration-primary hover:text-primary transition-colors" title="Contactar para trabajos de gasfitería">Trabajos</a> en PPR, PEX, COBRE y PVC. Instalación de Redes de Agua, Griferías, Sanitarias y Calefacción Central.</>,
    colSpan: 'lg:col-span-3',
    bgClass: 'bg-white text-slate-900 border-slate-200/60',
    textClass: '',
    iconClass: 'bg-slate-50 text-primary border border-slate-100',
    popular: false,
  },
  {
    icon: Home,
    title: 'Cañerías Interiores',
    description: 'Fugas en muros y cielos sin romper.',
    colSpan: 'lg:col-span-3',
    bgClass: 'bg-white text-slate-900 border-slate-200/60',
    textClass: '',
    iconClass: 'bg-slate-50 text-primary border border-slate-100',
    popular: false,
  },
  {
    icon: Layers,
    title: 'Losa y Piso Radiante',
    description: 'Detección exacta en sistemas de calefacción subterránea.',
    colSpan: 'lg:col-span-3',
    bgClass: 'bg-white text-slate-900 border-slate-200/60',
    textClass: '',
    iconClass: 'bg-slate-50 text-primary border border-slate-100',
    popular: false,
  },
  {
    icon: TreePine,
    title: 'Exterior y Jardines',
    description: 'Localización en redes subterráneas y patios.',
    colSpan: 'lg:col-span-3',
    bgClass: 'bg-white text-slate-900 border-slate-200/60',
    textClass: '',
    iconClass: 'bg-slate-50 text-primary border border-slate-100',
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
    <section id="servicios" className="relative py-32 overflow-hidden bg-transparent">
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

        {/* Modern Custom Grid */}
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
              className={`group relative flex flex-col justify-between p-8 sm:p-10 rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 border ${service.colSpan} ${service.bgClass} shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl ${!service.bgClass.includes('bg-primary') ? 'hover:border-[#16a34a]/30' : ''}`}
            >
              {/* Background gradient overlay for depth */}
              {service.bgClass.includes('bg-primary') && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              )}

              {/* Línea lateral verde para cards blancas */}
              {!service.bgClass.includes('bg-primary') && (
                <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-[#16a34a] to-[#4ade80] group-hover:h-full transition-all duration-700 rounded-full" />
              )}
              
              {/* Top Section */}
              <div className="relative z-10 flex justify-between items-start mb-16">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${service.iconClass} ${!service.bgClass.includes('bg-primary') ? 'group-hover:bg-[#16a34a]/10 group-hover:text-[#16a34a] group-hover:border-[#16a34a]/20' : ''}`}>
                  <service.icon size={26} strokeWidth={2} />
                </div>

                {service.popular && (
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-widest backdrop-blur-md border border-white/20 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                    {service.badgeText}
                  </div>
                )}
              </div>

              {/* Bottom Section */}
              <div className="relative z-10 mt-auto">
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight leading-tight">
                  {service.title}
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed ${service.bgClass.includes('bg-primary') ? 'text-white/80' : 'text-slate-500'}`}>
                  {service.description}
                </p>
              </div>

              {/* Decorative floating icon */}
              <div className={`absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 transform group-hover:scale-125 group-hover:-rotate-12 pointer-events-none ${service.bgClass.includes('bg-primary') ? 'text-white' : 'text-slate-900'}`}>
                <service.icon size={200} strokeWidth={1} />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
