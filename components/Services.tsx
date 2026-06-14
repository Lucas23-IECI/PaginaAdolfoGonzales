import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Flame, ShieldCheck, Eye, Compass, Gauge, ArrowRight, Wrench, FileText } from 'lucide-react';

const waterServices = [
  {
    icon: Activity,
    title: 'Geófono de Ultrasonido',
    description: 'Rastreamos las frecuencias y ondas sonoras de la filtración de agua a través del concreto, losas o tierra usando sensores acústicos de alta sensibilidad.',
    badge: 'Precisión Acústica',
  },
  {
    icon: Eye,
    title: 'Cámaras Termográficas FLIR',
    description: 'Mapeo térmico infrarrojo de alta resolución para ver y localizar la humedad oculta tras muros, tabiques y circuitos de losa radiante sin dañar.',
    badge: 'Diagnóstico Visual',
  },
  {
    icon: Wrench,
    title: 'Reparación Especializada',
    description: 'Con 10 años de experiencia, reparamos la rotura de cañería detectada interviniendo un espacio mínimo, cuidando al máximo la estética de tu hogar.',
    badge: 'Garantía Técnica',
  },
];

const gasServices = [
  {
    icon: ShieldCheck,
    title: 'Instalador Autorizado SEC',
    description: 'Instalaciones certificadas por la Superintendencia de Electricidad y Combustibles SEC. Tramitamos Sello Verde, pruebas de hermeticidad y declaraciones TC6 oficiales.',
    isSec: true,
  },
  {
    icon: Flame,
    title: 'Detección y Fugas de Gas',
    description: 'Localización de fugas de gas licuado o natural con sensores digitales calibrados. Reparamos, trazamos y normalizamos redes de cañerías bajo norma.',
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const WaterMeterIcon = () => (
  <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="brass" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
        <stop offset="0%" stopColor="#fde047" />
        <stop offset="60%" stopColor="#ca8a04" />
        <stop offset="100%" stopColor="#854d0e" />
      </radialGradient>
      <radialGradient id="inner-shadow" cx="50%" cy="50%" r="50%">
        <stop offset="85%" stopColor="#ffffff" stopOpacity="1" />
        <stop offset="100%" stopColor="#e2e8f0" stopOpacity="1" />
      </radialGradient>
      <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
        <stop offset="40%" stopColor="#ffffff" stopOpacity="0.1" />
        <stop offset="50%" stopColor="#ffffff" stopOpacity="0.0" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    <circle cx="60" cy="60" r="58" fill="url(#brass)" stroke="#713f12" strokeWidth="2" />
    <circle cx="60" cy="60" r="48" fill="#1e293b" />
    <circle cx="60" cy="60" r="44" fill="url(#inner-shadow)" />
    <rect x="26" y="32" width="68" height="24" fill="#0f172a" rx="4" />
    <g fill="#1e293b">
      <rect x="28" y="34" width="12" height="20" rx="1" />
      <rect x="42" y="34" width="12" height="20" rx="1" />
      <rect x="56" y="34" width="12" height="20" rx="1" />
      <rect x="70" y="34" width="12" height="20" rx="1" />
    </g>
    <rect x="84" y="34" width="12" height="20" rx="1" fill="#ef4444" />
    <g fontSize="16" fontFamily="Arial, monospace" fontWeight="900" fill="#ffffff" textAnchor="middle">
      <text x="34" y="50">0</text>
      <text x="48" y="50">0</text>
      <text x="62" y="50">4</text>
      <text x="76" y="50">2</text>
      <text x="90" y="50">8</text>
    </g>
    <text x="60" y="66" fontSize="10" fontFamily="Arial, sans-serif" fontWeight="bold" fill="#64748b" textAnchor="middle">m³</text>
    <g fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1">
      <circle cx="34" cy="80" r="10" />
      <circle cx="86" cy="80" r="10" />
    </g>
    <g stroke="#ef4444" strokeWidth="2" strokeLinecap="round">
      <line x1="34" y1="80" x2="38" y2="76" />
      <line x1="86" y1="80" x2="82" y2="76" />
    </g>
    <g fill="#0f172a">
      <circle cx="34" cy="80" r="2" />
      <circle cx="86" cy="80" r="2" />
    </g>
    <g transform="translate(60, 84)">
      <g className="animate-[spin_0.6s_linear_infinite]">
        <circle cx="0" cy="0" r="14" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1" />
        <path d="M 0 -12 L 3 -4 L 11 -3 L 5 2 L 6 10 L 0 6 L -6 10 L -5 2 L -11 -3 L -3 -4 Z" fill="#ef4444" />
        <circle cx="0" cy="0" r="3" fill="#991b1b" />
      </g>
    </g>
    <path d="M 16 60 A 44 44 0 0 1 104 60 A 44 44 0 0 0 16 60 Z" fill="url(#glass)" />
  </svg>
);

const Services: React.FC = () => {
  return (
    <section id="servicios" className="relative py-32 overflow-hidden bg-transparent scroll-mt-20">
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute -left-[20%] top-[20%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(234,88,12,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -right-[10%] bottom-[10%] w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(249,115,22,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-secondary" />
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">
              Ingeniería y Diagnóstico
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Servicio de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic pr-2">Detección de Fugas</span> en Concepción
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 font-medium leading-relaxed"
          >
            Con más de 10 años de trayectoria, nos desmarcamos de la gasfitería tradicional destructiva. Realizamos la localización e inspección de <strong className="text-slate-900 font-bold">filtración de agua</strong> con precisión milimétrica mediante tecnología acústica y térmica en todas las comunas de Concepción.
          </motion.p>
        </div>

        {/* ── BANNER GANCHO OBLIGATORIO ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-gradient-to-r from-background-alt via-white to-background-alt border-2 border-primary/20 p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg shadow-orange-500/5"
        >
          <div className="flex items-center gap-5 w-full sm:w-auto">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-[2rem] flex items-center justify-center shrink-0 shadow-xl border border-slate-100 p-2 sm:p-3 relative">
              <WaterMeterIcon />
              <div className="absolute inset-0 bg-primary/10 rounded-[2rem] blur-xl -z-10" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                ¿Tu medidor gira y no sabes por qué? <span className="text-primary underline decoration-primary/30">Tienes una fuga.</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-1 font-medium">
                Localizamos el punto exacto de la pérdida de agua antes de que el daño sea irreversible.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/56966795221?text=Hola%20Adolfo%2C%20mi%20medidor%20gira%20y%20creo%20que%20tengo%20una%20fuga.%20%C2%BFPuede%20ayudarme%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto justify-center shrink-0 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-4 rounded-xl transition-all text-base flex items-center gap-2 shadow-sm group"
          >
            Coordinar Visita <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* ── BLOQUE 1: DETECCIÓN DE FUGAS DE AGUA ── */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-8 bg-primary rounded-full" />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              1. Detección de Fugas y Filtraciones de Agua en Concepción
            </h3>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {waterServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group relative flex flex-col justify-between p-8 sm:p-10 bg-white rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-primary/30"
              >
                {/* Línea lateral de acento */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-primary to-secondary group-hover:h-full transition-all duration-700 rounded-full" />
                
                {/* Top Section */}
                <div className="relative z-10 flex justify-between items-start mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-background-alt text-primary border border-primary/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-primary group-hover:text-white shadow-sm">
                    <service.icon size={26} strokeWidth={2} />
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    {service.badge}
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="relative z-10 mt-auto">
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight leading-snug group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                {/* Decorative floating icon */}
                <div className="absolute -right-6 -bottom-6 opacity-[0.02] group-hover:opacity-[0.06] transition-all duration-700 transform group-hover:scale-125 pointer-events-none text-slate-900">
                  <service.icon size={160} strokeWidth={1} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── BLOQUE 2: REDES DE GAS Y CERTIFICACIÓN SEC ── */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-8 bg-slate-900 rounded-full" />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              2. Instalador Autorizado SEC: Redes de Gas y Certificación
            </h3>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {gasServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group relative flex flex-col justify-between p-8 sm:p-10 bg-slate-900 text-white rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-slate-800 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top Section */}
                <div className="relative z-10 flex justify-between items-start mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 text-secondary border border-white/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <service.icon size={26} strokeWidth={2} />
                  </div>
                  {service.isSec ? (
                    <div className="flex items-center gap-3 bg-white/5 px-3 py-2 rounded-xl border border-white/5 backdrop-blur-sm">
                      <img src="/sec_logo.png" alt="SEC" className="h-8 sm:h-10 w-auto object-contain brightness-110" />
                      <div className="w-px h-6 bg-white/10" />
                      <span className="text-[10px] font-black text-white tracking-widest uppercase bg-primary px-2 py-1 rounded">Clase 3</span>
                    </div>
                  ) : (
                    <span className="text-xs font-bold text-slate-400 tracking-widest uppercase mt-2">Servicio Normado</span>
                  )}
                </div>

                {/* Bottom Section */}
                <div className="relative z-10 mt-auto">
                  <h4 className="text-xl sm:text-2xl font-bold mb-3 tracking-tight leading-snug text-white">
                    {service.title}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-all duration-700 transform group-hover:scale-125 pointer-events-none text-white">
                  <service.icon size={160} strokeWidth={1} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── BANNER SEGUROS Y GARANTÍA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-slate-200 p-8 sm:p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm relative overflow-hidden"
        >
          {/* Decorative background element */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
          
          <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8 w-full">
            <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-slate-900/10">
              <FileText size={32} strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <div className="inline-flex px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-full mb-4 border border-slate-200">
                Cobertura de Seguro
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3 leading-tight">
                ¿Cuentas con seguro de hogar? <br className="hidden sm:block" />
                <span className="text-primary italic font-serif">Te facilitamos el reembolso.</span>
              </h3>
              <p className="text-base text-slate-600 font-medium leading-relaxed max-w-3xl">
                Sabemos que las emergencias son estresantes. Por eso, al finalizar nuestra reparación, te entregamos de forma inmediata toda la documentación técnica y legal requerida por las compañías de seguro para que puedas gestionar tu cobertura sin demoras.
              </p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-slate-800">Boleta de Servicio</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-slate-800">Informe Técnico</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-slate-800">Respaldo Fotográfico</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
