import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

const BeforeAndAfter: React.FC = () => {
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowAfter(prev => !prev);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Massive Image Container */}
        <div className="relative w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group flex flex-col md:block">
          
          {/* Images */}
          <div className="relative w-full aspect-[4/3] md:aspect-[16/10] cursor-pointer" onClick={() => setShowAfter(!showAfter)}>
            {/* Video Antes (Siempre visible en el fondo) */}
            <div className="absolute inset-0 bg-slate-900">
              <video
                src="/portfolio/antes-muro-video.mp4"
                className="w-full h-full object-cover opacity-90"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            
            {/* Imagen Después (Aparece suavemente por encima) */}
            <motion.div
              initial={false}
              animate={{ opacity: showAfter ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img src="/portfolio/despues-muro-nuevo.jpeg" alt="Reparación finalizada" className="w-full h-full object-cover" />
            </motion.div>

            {/* Click hint */}
            <div className="absolute top-8 left-8 bg-black/40 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block z-30">
              Clic para cambiar vista
            </div>
          </div>

          {/* Floating Card Top Right (Text + Controls) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-5 md:absolute md:top-6 md:right-6 md:max-w-[300px] md:bg-white/95 md:backdrop-blur-md md:p-4 md:rounded-2xl md:shadow-2xl md:border md:border-white/50 flex flex-col gap-4 md:gap-3 z-20"
          >
            {/* Text content */}
            <div className="pointer-events-none">
              <h2 className="text-lg md:text-xl font-black text-slate-900 mb-1 tracking-tight">
                Intervención <span className="text-primary">Exacta</span>
              </h2>
              <p className="text-[12px] md:text-xs text-slate-600 font-medium leading-snug">
                Localizamos la falla exacta y reparamos solo lo estrictamente necesario. Observa nuestro proceso en acción.
              </p>
            </div>

            {/* Integrated Control Panel */}
            <div className="bg-slate-100/80 border border-slate-200 p-1 md:p-1 rounded-xl flex flex-col sm:flex-row gap-1">
              <button
                onClick={(e) => { e.stopPropagation(); setShowAfter(false); }}
                className={`relative px-3 py-3 md:px-2 md:py-2 rounded-lg font-bold text-xs md:text-[10px] transition-all duration-300 flex items-center justify-center gap-2 md:gap-1.5 flex-1 ${!showAfter ? 'text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                {!showAfter && (
                  <motion.div layoutId="activeTabBeforeAfter" className="absolute inset-0 bg-white rounded-lg border border-slate-200 shadow-sm" />
                )}
                <span className="relative z-10 flex items-center gap-2 md:gap-1.5 whitespace-nowrap">
                  <AlertTriangle size={16} className={`md:w-[14px] md:h-[14px] ${!showAfter ? 'text-secondary' : 'text-slate-400'}`} />
                  Falla Detectada
                </span>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setShowAfter(true); }}
                className={`relative px-3 py-3 md:px-2 md:py-2 rounded-lg font-bold text-xs md:text-[10px] transition-all duration-300 flex items-center justify-center gap-2 md:gap-1.5 flex-1 ${showAfter ? 'text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                {showAfter && (
                  <motion.div layoutId="activeTabBeforeAfter" className="absolute inset-0 bg-green-50 rounded-lg border border-green-200 shadow-sm" />
                )}
                <span className="relative z-10 flex items-center gap-2 md:gap-1.5 whitespace-nowrap">
                  <CheckCircle2 size={16} className={`md:w-[14px] md:h-[14px] ${showAfter ? 'text-primary' : 'text-slate-400'}`} />
                  Reparación
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAndAfter;
