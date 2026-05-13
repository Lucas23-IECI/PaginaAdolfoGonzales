import React, { useState } from 'react';
import { X, ZoomIn, ArrowUpRight } from 'lucide-react';
import { PortfolioItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const portfolioItems: PortfolioItem[] = [
  {
    image: '/images/deteccion_subterranea_v2.png',
    alt:   'Detección de fuga en cañería subterránea',
    title: 'Detección Subterránea',
    description: 'Localización a 80cm de profundidad sin excavar el jardín completo.',
    whatsappText: 'Hola Adolfo, me interesa el servicio de Detección Subterránea que vi en la galería de fotos. ¿Me puede orientar?',
  },
  {
    image: '/images/tecnico_geofono_v2.png',
    alt:   'Técnico detectando fuga con geófono acústico',
    title: 'Precisión Acústica',
    description: 'Diagnóstico con geófono para evitar daños colaterales.',
    whatsappText: 'Hola Adolfo, me interesa la detección con Precisión Acústica (Geófono) que vi en la galería de fotos. ¿Me puede orientar?',
  },
  {
    image: '/images/fuga_losa_v2.png',
    alt:   'Detección de fuga en losa de hormigón',
    title: 'Fugas en Losa',
    description: 'Intervención milimétrica en losa de hormigón residencial.',
    whatsappText: 'Hola Adolfo, me interesa la detección de Fugas en Losa que vi en la galería de fotos. ¿Me puede orientar?',
  },
];

const Portfolio: React.FC = () => {
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  return (
    <section id="portafolio" className="py-32 bg-transparent relative overflow-hidden">
      
      {/* Decorative Text Background */}
      <div className="absolute top-10 -left-10 text-[10rem] font-extrabold text-slate-50 opacity-50 pointer-events-none select-none tracking-tighter leading-none whitespace-nowrap z-0">
        RESULTADOS REALES
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px w-12 bg-secondary" />
              <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                Casos de Éxito
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.05]"
            >
              Resultados que <br/> <span className="italic font-serif font-medium text-slate-800">hablan por sí solos.</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 max-w-md text-lg leading-relaxed md:text-right"
          >
            Cada proyecto es la prueba viviente de nuestra capacidad para detectar fugas ocultas sin romper lo innecesario.
          </motion.p>
        </div>

        {/* Asymmetrical Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Featured Large Item (Spans 7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative group lg:self-start"
          >
            <button 
              onClick={() => setSelected(portfolioItems[0])}
              className="w-full text-left relative rounded-[2rem] overflow-hidden shadow-2xl focus:outline-none focus:ring-4 focus:ring-secondary/50 block"
            >
              <div className="aspect-[4/5] lg:aspect-square w-full">
                <img 
                  src={portfolioItems[0].image} 
                  alt={portfolioItems[0].alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            </button>
            
            {/* Floating Info Box for Featured */}
            <button 
              onClick={() => setSelected(portfolioItems[0])}
              className="absolute text-left -top-4 -left-4 sm:-top-6 sm:-left-6 lg:-top-8 lg:-left-8 bg-white/90 backdrop-blur-xl p-5 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-white max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] z-20 transition-transform duration-500 group-hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-secondary/50 cursor-pointer hover:bg-white"
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-primary mb-1.5 lg:mb-2">{portfolioItems[0].title}</h3>
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed">{portfolioItems[0].description}</p>
              <div className="mt-3 lg:mt-6 flex items-center gap-2 text-secondary font-bold uppercase tracking-wider text-xs sm:text-sm group-hover:text-primary transition-colors">
                <ZoomIn size={14} className="lg:w-4 lg:h-4" /> Ver Detalles
              </div>
            </button>
          </motion.div>

          {/* Right Column: Two stacked smaller items */}
          <div className="lg:col-span-5 flex flex-col gap-12 lg:gap-20 mt-20 lg:mt-32">
            
            {/* Second Item - Precisión Acústica */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <button 
                onClick={() => setSelected(portfolioItems[1])}
                className="w-full text-left relative rounded-3xl shadow-xl focus:outline-none focus:ring-4 focus:ring-secondary/50 block"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl">
                  <img 
                    src={portfolioItems[1].image} 
                    alt={portfolioItems[1].alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
                {/* Floating Info Box - Precisión Acústica (Superior Izquierda) */}
                <div className="absolute text-left -top-12 -left-4 sm:-top-12 sm:-left-4 lg:-top-16 lg:-left-8 bg-white/90 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-[0_10px_20px_-10px_rgba(0,0,0,0.15)] border border-white max-w-[200px] sm:max-w-[240px] z-20 transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-base sm:text-lg font-extrabold text-primary mb-1">{portfolioItems[1].title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">{portfolioItems[1].description}</p>
                  <div className="mt-2.5 flex items-center gap-1.5 text-secondary font-bold uppercase tracking-wider text-xs group-hover:text-primary transition-colors">
                    <ZoomIn size={14} className="w-3.5 h-3.5" /> Ver Detalles
                  </div>
                </div>
              </button>
            </motion.div>

            {/* Third Item - Fugas en Losa */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group lg:-ml-16"
            >
              <button 
                onClick={() => setSelected(portfolioItems[2])}
                className="w-full text-left relative rounded-3xl shadow-xl focus:outline-none focus:ring-4 focus:ring-secondary/50 block border-8 border-white"
              >
                <div className="aspect-square w-full overflow-hidden rounded-[calc(1.5rem-8px)]">
                  <img 
                    src={portfolioItems[2].image} 
                    alt={portfolioItems[2].alt}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                {/* Floating Info Box - Fugas en Losa (Inferior Izquierda) */}
                <div className="absolute text-left -bottom-4 -left-2 sm:-bottom-4 sm:-left-2 lg:-bottom-6 lg:-left-6 bg-white/90 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-[0_10px_20px_-10px_rgba(0,0,0,0.15)] border border-white max-w-[180px] sm:max-w-[220px] z-20 transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-sm sm:text-base font-extrabold text-primary mb-1">{portfolioItems[2].title}</h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2">{portfolioItems[2].description}</p>
                  <div className="mt-2 flex items-center gap-1.5 text-secondary font-bold uppercase tracking-wider text-[11px] sm:text-xs group-hover:text-primary transition-colors">
                    <ZoomIn size={14} className="w-3.5 h-3.5" /> Ver Detalles
                  </div>
                </div>
              </button>
            </motion.div>

          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-md px-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:w-2/3 shrink-0">
                <img
                  src={selected.image}
                  alt={selected.alt}
                  className="w-full h-48 md:h-full object-cover md:max-h-[80vh]"
                />
              </div>
              <div className="md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-slate-50">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  <ZoomIn size={20} />
                </div>
                <h3 className="text-3xl font-extrabold text-primary mb-4 leading-tight">{selected.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg mb-8">{selected.description}</p>
                
                <a
                  href={`https://wa.me/56966795221?text=${encodeURIComponent(selected.whatsappText || 'Hola Adolfo, necesito detectar una fuga de agua. ¿Puede ayudarme?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white font-bold rounded-xl hover:bg-secondary transition-colors"
                >
                  Solicitar evaluación
                </a>
              </div>
              
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 md:right-auto md:left-4 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full transition-colors z-10"
                aria-label="Cerrar"
              >
                <X size={20} className="text-white md:text-slate-900" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
