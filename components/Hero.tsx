import React from 'react';
import { Activity, Droplet, Zap, ArrowRight } from 'lucide-react';
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
  <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
    <div className="absolute inset-0 rounded-full border-2 border-[#16a34a] opacity-20 animate-ping" style={{ animationDuration: '2s' }} />
    <div className="absolute inset-1 rounded-full border-2 border-[#16a34a] opacity-40 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
    <div className="relative z-10 w-5 h-5 bg-[#16a34a] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(22,163,74,0.6)]">
      <Activity size={12} className="text-white" />
    </div>
  </div>
);

// We define reusable blocks to avoid code duplication across mobile/desktop views

const BadgeBlock = () => (
  <motion.div variants={fadeUp} className="flex items-center">
    <div className="inline-flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-white/60 backdrop-blur-md border border-slate-200/60 shadow-sm relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
      <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16a34a] opacity-75" />
        <span className="relative inline-flex rounded-full h-full w-full bg-[#16a34a]" />
      </span>
      <span className="text-[9px] sm:text-xs font-black text-slate-800 tracking-widest uppercase flex items-center gap-1.5">
        Detección Inteligente <Zap size={12} className="text-[#16a34a] sm:w-[14px] sm:h-[14px]" />
      </span>
    </div>
  </motion.div>
);

const HeadlineBlock = () => (
  <motion.h1 
    variants={fadeUp} 
    className="text-4xl sm:text-6xl lg:text-[6.5rem] font-black text-slate-900 leading-[1] lg:leading-[0.9] tracking-[-0.04em] relative"
  >
    <span className="block mb-1 sm:mb-2">Localizamos</span>
    <span className="block mb-1 sm:mb-2 text-slate-400">la fuga,</span>
    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0f5a3b] via-[#16a34a] to-[#22c55e] inline-block pr-4 lg:pr-8">
      no la excusa.
      <svg className="absolute -bottom-1 lg:-bottom-4 left-0 w-full drop-shadow-[0_5px_10px_rgba(22,163,74,0.4)]" viewBox="0 0 400 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
);

const SubtitleBlock = () => (
  <motion.p 
    variants={fadeUp} 
    className="text-sm sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-medium mt-2 border-l-4 border-[#16a34a] pl-4 lg:pl-6"
  >
    <strong className="text-slate-900 block mb-1.5 lg:mb-2">10 años de experiencia en el rubro de la gasfitería y detectando filtraciones de agua potable.</strong>
    Dile adiós a los gasfiteros que rompen para buscar. Con nuestro sistema de <strong className="text-slate-900 font-extrabold bg-[#16a34a]/10 px-1.5 py-0.5 rounded">Radar Acústico 3D</strong>, sabemos exactamente dónde está el problema antes de tocar una herramienta.
  </motion.p>
);

const CTABlock = ({ handleScroll }: { handleScroll: any }) => (
  <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 lg:pt-8">
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center justify-center gap-3 px-6 py-4 sm:px-8 sm:py-5 bg-[#0a0a0a] text-white text-base sm:text-lg font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(22,163,74,0.4)]"
    >
      <div className="absolute inset-0 bg-[#16a34a]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
      <Activity size={20} className="relative z-10 text-[#22c55e] group-hover:animate-pulse sm:w-6 sm:h-6" />
      <span className="relative z-10">Solicitar Escaneo</span>
    </a>
    <a
      href="#servicios"
      onClick={(e) => handleScroll(e, 'servicios')}
      className="inline-flex items-center justify-center gap-3 px-6 py-4 sm:px-8 sm:py-5 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 hover:border-slate-300 text-base sm:text-lg font-bold rounded-2xl transition-all shadow-sm"
    >
      Ver Tecnología
      <ArrowRight size={18} className="text-slate-400 sm:w-5 sm:h-5" />
    </a>
  </motion.div>
);

const HeroVisuals = ({ isMobile = false }: { isMobile?: boolean }) => (
  <motion.div 
    className={`relative flex items-center justify-center perspective-1000 ${isMobile ? 'w-full h-[240px] sm:h-[300px]' : 'w-full lg:h-[750px] lg:justify-end'}`}
    initial={{ opacity: 0, rotateY: 20, scale: 0.9 }}
    animate={{ opacity: 1, rotateY: 0, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  >
    {/* Main Image Mask */}
    <div className={`relative w-full h-full overflow-hidden bg-slate-900 group ${isMobile ? 'rounded-[1.5rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] border border-white/30' : 'max-w-[550px] rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] border border-white/40'}`}>
      <img
        src={HERO_IMAGE}
        alt="Inspección técnica de tuberías"
        className="w-full h-full object-cover object-center scale-110 opacity-80 group-hover:opacity-60 transition-all duration-[3s]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#16a34a1a_1px,transparent_1px),linear-gradient(to_bottom,#16a34a1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-70 mix-blend-overlay z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30 z-10" />
    </div>

    {/* UI Component 1: Scanning Status */}
    <motion.div 
      className={`absolute z-40 ${isMobile ? 'top-1 left-0' : 'top-[10%] -left-16'}`}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      <div style={isMobile ? { transform: 'scale(0.4)', transformOrigin: 'top left' } : {}}>
        <div className="bg-white/90 backdrop-blur-2xl p-6 rounded-3xl shadow-xl border border-white/50 flex items-center gap-5 w-max">
          <SonarWave />
          <div className="min-w-0">
            <p className={`${isMobile ? 'text-xs' : 'text-[10px]'} font-black text-slate-400 uppercase tracking-[0.2em] mb-1`}>Módulo Acústico</p>
            <p className={`${isMobile ? 'text-xl' : 'text-base'} font-black text-slate-800`}>Analizando terreno...</p>
            <div className="flex gap-1.5 mt-2">
              <div className="h-2 w-12 bg-[#16a34a] rounded-full overflow-hidden relative">
                 <div className="absolute inset-0 bg-white/40 animate-[shimmer_1s_infinite] -translate-x-full"></div>
              </div>
              <div className="h-2 w-4 bg-[#16a34a]/20 rounded-full"></div>
              <div className="h-2 w-2 bg-[#16a34a]/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>

    {/* UI Component 2: Data Panel */}
    <motion.div 
      className={`absolute z-40 ${isMobile ? 'bottom-1 right-0' : 'bottom-[15%] -right-12'}`}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.1, duration: 0.8 }}
    >
      <div style={isMobile ? { transform: 'scale(0.4)', transformOrigin: 'bottom right' } : {}}>
        <div className="bg-[#0f5a3b]/95 backdrop-blur-xl p-6 rounded-3xl shadow-[0_20px_40px_-10px_rgba(15,90,59,0.5)] border border-[#16a34a]/40 flex flex-col gap-2 w-[240px]">
          <div className="flex justify-between items-center mb-1 gap-4">
            <div className="w-10 h-10 shrink-0 rounded-xl bg-[#16a34a]/30 flex items-center justify-center border border-[#16a34a]/50">
              <Droplet size={18} className="text-[#22c55e]" />
            </div>
            <div className="flex flex-col items-end min-w-0">
              <span className={`${isMobile ? 'text-xs' : 'text-[10px]'} font-bold text-[#16a34a] uppercase`}>Tasa de Éxito</span>
              <span className={`${isMobile ? 'text-2xl' : 'text-lg'} font-black text-white`}>99.9%</span>
            </div>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-[#16a34a]/50 to-transparent my-2" />
          <p className={`text-white font-bold leading-tight ${isMobile ? 'text-base' : 'text-sm'}`}>Garantía de daño cero en infraestructuras.</p>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-[100vh] flex items-center pt-24 pb-20 overflow-hidden">
      {/* ── Background: Ambient Glows ── */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#16a34a]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#0f5a3b]/5 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================== */}
        {/* MOBILE VIEW (Hidden on lg screens)                             */}
        {/* ============================================================== */}
        <motion.div 
          className="flex flex-col lg:hidden w-full gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Top Side-by-Side: Title Left / Image Right */}
          <div className="grid grid-cols-12 gap-3 sm:gap-6 items-center">
            {/* Left: Badge + Title */}
            <div className="col-span-7 sm:col-span-8 flex flex-col gap-4">
              <BadgeBlock />
              <HeadlineBlock />
            </div>
            
            {/* Right: Scaled Image */}
            <div className="col-span-5 sm:col-span-4 flex items-center justify-center">
              <HeroVisuals isMobile={true} />
            </div>
          </div>

          {/* Bottom Full-Width: Subtitle + CTAs */}
          <div className="flex flex-col gap-6 mt-2">
            <SubtitleBlock />
            <CTABlock handleScroll={handleScroll} />
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* DESKTOP VIEW (Hidden on mobile screens)                        */}
        {/* ============================================================== */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex flex-col gap-8 z-20 max-w-2xl"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <BadgeBlock />
            <HeadlineBlock />
            <SubtitleBlock />
            <CTABlock handleScroll={handleScroll} />
          </motion.div>

          <div className="flex justify-end w-full">
            <HeroVisuals isMobile={false} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
