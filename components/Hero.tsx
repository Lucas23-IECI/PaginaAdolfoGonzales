import React, { useState } from 'react';
import { MessageCircle, ArrowRight, Activity, MapPin, Droplet, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const WHATSAPP_LINK =
  'https://wa.me/56966795221?text=Hola%20Adolfo%2C%20necesito%20detectar%20una%20fuga%20de%20agua.%20%C2%BFPuede%20ayudarme%3F';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const SonarWave = () => (
  <div className="relative w-12 h-12 flex items-center justify-center">
    <div className="absolute inset-0 rounded-full border-2 border-[#16a34a] opacity-20 animate-ping" style={{ animationDuration: '2s' }} />
    <div className="absolute inset-1 rounded-full border-2 border-[#16a34a] opacity-40 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
    <div className="relative z-10 w-5 h-5 bg-[#16a34a] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(22,163,74,0.6)]">
      <Activity size={12} className="text-white" />
    </div>
  </div>
);

const Hero: React.FC = () => {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[100vh] flex items-start lg:items-center pt-24 pb-20 overflow-hidden"
    >
      {/* ── Background: Ambient Glows ── */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#16a34a]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#0f5a3b]/5 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* ── Text Content ── */}
          <motion.div
            className="flex flex-col gap-8 z-20 max-w-2xl relative"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* System Status Badge */}
            <motion.div variants={fadeUp} className="flex items-center">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-white/60 backdrop-blur-md border border-slate-200/60 shadow-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16a34a] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#16a34a]" />
                </span>
                <span className="text-xs font-black text-slate-800 tracking-widest uppercase flex items-center gap-2">
                  Detección Inteligente <Zap size={14} className="text-[#16a34a]" />
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={fadeUp} 
              className="text-4xl sm:text-6xl lg:text-[6rem] font-black text-slate-900 leading-[0.85] tracking-[-0.04em] relative"
            >
              <span className="block mb-2">Localizamos</span>
              <span className="block mb-2 text-slate-400">la fuga,</span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0f5a3b] via-[#16a34a] to-[#22c55e] inline-block pr-8">
                no la excusa.
                <svg className="absolute -bottom-4 left-0 w-full drop-shadow-[0_5px_10px_rgba(22,163,74,0.4)]" viewBox="0 0 400 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 15C100 5 200 5 300 15C350 20 380 15 400 5" stroke="url(#paint0_linear)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="0" y1="10" x2="400" y2="10" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#16a34a"/>
                      <stop offset="1" stopColor="#22c55e" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={fadeUp} 
              className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium mt-4 border-l-4 border-[#16a34a] pl-6"
            >
              Dile adiós a los gasfiteros que rompen para buscar. Con nuestro sistema de <strong className="text-slate-900 font-extrabold bg-[#16a34a]/10 px-2 py-0.5 rounded">Radar Acústico 3D</strong>, sabemos exactamente dónde está el problema antes de tocar una herramienta.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#0a0a0a] text-white text-lg font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(22,163,74,0.4)]"
              >
                {/* Tech scanline effect on hover */}
                <div className="absolute inset-0 bg-[#16a34a]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
                
                <Activity size={24} className="relative z-10 text-[#22c55e] group-hover:animate-pulse" />
                <span className="relative z-10">Solicitar Escaneo</span>
              </a>
              
              <a
                href="#servicios"
                onClick={(e) => handleScroll(e, 'servicios')}
                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 hover:border-slate-300 text-lg font-bold rounded-2xl transition-all shadow-sm"
              >
                Ver Tecnología
                <ArrowRight size={20} className="text-slate-400" />
              </a>
            </motion.div>
          </motion.div>

          {/* ── Visual Content (Image + Diagnostic Overlays) ── */}
          <motion.div 
            className="relative lg:h-[750px] w-full flex items-center justify-center lg:justify-end mt-6 lg:mt-0 perspective-1000"
            initial={{ opacity: 0, rotateY: 20, scale: 0.9 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Main Image Mask with 3D feel */}
            <div className="relative w-full max-w-[550px] aspect-[4/5] lg:aspect-auto lg:h-[95%] rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] border border-white/40 bg-slate-900 group">
              <img
                src={HERO_IMAGE}
                alt="Inspección técnica de tuberías"
                className="w-full h-full object-cover object-center scale-110 opacity-80 group-hover:opacity-60 transition-all duration-[3s]"
              />
              
              {/* Technical Grid Overlay on Image */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#16a34a1a_1px,transparent_1px),linear-gradient(to_bottom,#16a34a1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-70 mix-blend-overlay z-10" />
              
              {/* Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30 z-10" />

            </div>

            {/* Diagnostic UI Component 1: Scanning Status */}
            <motion.div 
              className="absolute top-4 left-4 sm:top-[10%] sm:-left-16 z-40"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white/90 backdrop-blur-2xl p-5 sm:p-6 rounded-3xl shadow-2xl border border-white/50 flex items-center gap-5">
                <SonarWave />
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Módulo Acústico</p>
                  <p className="text-base font-black text-slate-800">Analizando terreno...</p>
                  <div className="flex gap-1.5 mt-2.5">
                    <div className="h-2 w-12 bg-[#16a34a] rounded-full overflow-hidden relative">
                       <div className="absolute inset-0 bg-white/40 animate-[shimmer_1s_infinite] -translate-x-full"></div>
                    </div>
                    <div className="h-2 w-4 bg-[#16a34a]/20 rounded-full"></div>
                    <div className="h-2 w-2 bg-[#16a34a]/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Diagnostic UI Component 2: Data Panel */}
            <motion.div 
              className="absolute bottom-4 right-4 sm:bottom-[15%] sm:-right-12 z-40"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <div className="bg-[#0f5a3b]/95 backdrop-blur-xl p-6 rounded-3xl shadow-[0_30px_60px_-15px_rgba(15,90,59,0.5)] border border-[#16a34a]/40 flex flex-col gap-2 max-w-[240px]">
                <div className="flex justify-between items-center mb-1">
                  <div className="w-10 h-10 rounded-xl bg-[#16a34a]/30 flex items-center justify-center border border-[#16a34a]/50">
                    <Droplet size={20} className="text-[#22c55e]" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-bold text-[#16a34a] uppercase">Tasa de Éxito</span>
                    <span className="text-lg font-black text-white">99.9%</span>
                  </div>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-[#16a34a]/50 to-transparent my-2" />
                <p className="text-white font-bold leading-tight text-sm">Garantía de daño cero en infraestructuras.</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


