import React from 'react';
import { MessageCircle, ArrowRight, Award, Target, ShieldCheck, MapPin, Droplet } from 'lucide-react';
import { motion } from 'framer-motion';

const WHATSAPP_LINK =
  'https://wa.me/56966795221?text=Hola%20Adolfo%2C%20necesito%20detectar%20una%20fuga%20de%20agua.%20%C2%BFPuede%20ayudarme%3F';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80';

const trustBadges = [
  { icon: Award, label: '10 Años Experiencia' },
  { icon: Target, label: 'Precisión' },
  { icon: ShieldCheck, label: 'Sin Demoler' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

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
      className="relative min-h-[100vh] pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-background-alt"
    >
      {/* Editorial Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-multiply" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── Text Content (Spans 7 columns) ── */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-8 z-20"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="flex items-center">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest">
                  Especialista en Fugas · Concepción
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={fadeUp} 
              className="text-5xl sm:text-6xl lg:text-[5rem] font-extrabold text-primary leading-[1.05] tracking-tight"
            >
              Detén la fuga <br className="hidden sm:block" />
              de agua{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary relative inline-block">
                sin romper
                {/* Curved underline */}
                <svg
                  className="absolute -bottom-3 left-0 w-full drop-shadow-md"
                  viewBox="0 0 300 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 12C50 3 100 2 150 5C200 8 250 12 298 5"
                    stroke="#16a34a"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              <br className="hidden sm:block" />
              un solo azulejo
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={fadeUp} 
              className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl font-medium"
            >
              Con tecnología acústica de precisión y{' '}
              <strong className="text-primary font-extrabold bg-primary/5 px-1.5 py-0.5 rounded">10 años de experiencia</strong> en
              gasfitería, detectamos filtraciones de agua de forma rápida, exacta y
              sin obras innecesarias.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5 pt-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white text-base font-bold rounded-2xl overflow-hidden transition-all shadow-[0_20px_40px_-15px_rgba(15,90,59,0.5)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <MessageCircle size={22} className="relative z-10" />
                <span className="relative z-10">Contactar por WhatsApp</span>
              </a>
              
              <a
                href="#servicios"
                onClick={(e) => handleScroll(e, 'servicios')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-slate-50 text-primary border border-slate-200 text-base font-bold rounded-2xl transition-all hover:border-slate-300 hover:shadow-lg"
              >
                Ver Servicios
                <ArrowRight size={20} className="text-secondary" />
              </a>
            </motion.div>

            {/* Trust Badges - Editorial Layout */}
            <motion.div variants={fadeUp} className="pt-8 flex flex-wrap gap-6 items-center">
              {trustBadges.map(({ icon: Icon, label }, idx) => (
                <div key={label} className="flex items-center gap-2.5 group cursor-default">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-slate-100 group-hover:border-secondary/30 group-hover:shadow-md transition-all">
                    <Icon size={18} className="text-secondary group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-sm font-bold text-slate-700">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Image Content (Spans 5 columns) ── */}
          <motion.div 
            className="lg:col-span-5 relative h-[500px] lg:h-[700px] w-full mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {/* Image Container with Custom Shape */}
            <div className="absolute inset-0 z-10 rounded-t-full rounded-b-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(15,90,59,0.3)] border-8 border-white">
              <img
                src={HERO_IMAGE}
                alt="Detección de fugas de agua con tecnología avanzada"
                className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000"
              />
              {/* Inner Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-80" />
            </div>

            {/* Floating Glass Card 1 */}
            <motion.div 
              className="absolute top-20 -left-12 sm:-left-20 z-20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <MapPin className="text-secondary" size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Cobertura</p>
                  <p className="text-sm font-extrabold text-primary">Gran Concepción</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Glass Card 2 */}
            <motion.div 
              className="absolute bottom-24 -right-4 sm:-right-12 z-20"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="bg-primary/90 backdrop-blur-xl p-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(15,90,59,0.4)] border border-primary-dark/50 flex flex-col gap-2 max-w-[200px]">
                <Droplet className="text-secondary" size={28} />
                <p className="text-white font-bold leading-tight mt-1">Detección exacta sin destruir tu hogar.</p>
              </div>
            </motion.div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

