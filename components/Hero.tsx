import React from 'react';
import { Activity, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const WHATSAPP_LINK =
  'https://wa.me/56966795221?text=Hola%20Adolfo%2C%20necesito%20detectar%20una%20fuga%20de%20agua.%20%C2%BFPuede%20ayudarme%3F';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const HeadlineBlock = () => (
  <motion.h1 
    variants={fadeUp} 
    className="hero-title font-black text-white leading-[1.05] lg:leading-[0.95] tracking-[-0.04em] relative sm:text-5xl lg:text-[4.75rem]"
  >
    <span className="block mb-1 sm:mb-2 text-slate-300 text-2xl sm:text-3xl lg:text-4xl tracking-tight font-extrabold">Gasfitería y Detección de Fugas</span>
    <span className="block mb-1 sm:mb-2 text-white">en Concepción</span>
    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] via-[#22c55e] to-[#4ade80] inline-block pr-4 lg:pr-8">
      Sin Romper.
      <svg className="absolute -bottom-1 lg:-bottom-4 left-0 w-full drop-shadow-[0_5px_10px_rgba(22,163,74,0.4)]" viewBox="0 0 400 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 15C100 5 200 5 300 15C350 20 380 15 400 5" stroke="url(#paint0_linear)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="paint0_linear" x1="0" y1="10" x2="400" y2="10" gradientUnits="userSpaceOnUse">
            <stop stopColor="#16a34a"/>
            <stop offset="1" stopColor="#4ade80" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    </span>
  </motion.h1>
);

const SubtitleBlock = () => (
  <motion.div variants={fadeUp} className="mt-4 flex flex-col gap-3 border-l-4 border-[#16a34a] pl-4 lg:pl-6">
    <p className="text-xl sm:text-2xl font-black text-white tracking-tight">
      Servicio de Gasfiter y Detecciones con Ultrasonido y Termografía
    </p>
    <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-medium">
      ¿Buscas un <strong className="text-white font-extrabold bg-[#16a34a]/20 px-1.5 py-0.5 rounded">gasfiter en Concepción</strong> certificado? Con más de <strong className="text-white font-extrabold">10 años de experiencia</strong>, somos especialistas en <strong className="text-white font-extrabold bg-[#16a34a]/20 px-1.5 py-0.5 rounded">detección de fugas de agua</strong> potable y localización de filtraciones invisibles en el Gran Concepción. Localizamos averías con geófono de ultrasonido y cámaras termográficas sin romper.
    </p>
  </motion.div>
);

const CTABlock = ({ handleScroll }: { handleScroll: any }) => (
  <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 lg:pt-8">
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp para detectar fuga"
      className="group relative inline-flex items-center justify-center gap-3 px-6 py-4 sm:px-8 sm:py-6 bg-[#ea580c] hover:bg-[#c2410c] text-white text-base sm:text-xl font-black rounded-2xl overflow-hidden transition-all hover:scale-105 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(234,88,12,0.5)]"
    >
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]" />
      <Activity size={24} className="relative z-10 text-white group-hover:animate-pulse sm:w-7 sm:h-7" />
      <span className="relative z-10 tracking-wide">Cotizar ahora</span>
    </a>
    <a
      href="#servicios"
      onClick={(e) => handleScroll(e, 'servicios')}
      aria-label="Ver detalles de nuestra tecnología avanzada"
      className="inline-flex items-center justify-center gap-3 px-6 py-4 sm:px-8 sm:py-6 bg-black/30 backdrop-blur-md hover:bg-black/50 text-white border-2 border-white/20 hover:border-white/40 text-base sm:text-lg font-bold rounded-2xl transition-all shadow-sm"
    >
      Ver Tecnología
      <ArrowRight size={18} className="text-slate-300 sm:w-5 sm:h-5" />
    </a>
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
    <section id="inicio" className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* ── Background Video & Overlay ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/Video1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-slate-900/70 z-10" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#16a34a1a_1px,transparent_1px),linear-gradient(to_bottom,#16a34a1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 z-10 pointer-events-none" />

      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        
        <motion.div
          className="flex flex-col gap-8 max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <HeadlineBlock />
          <SubtitleBlock />
          <CTABlock handleScroll={handleScroll} />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
