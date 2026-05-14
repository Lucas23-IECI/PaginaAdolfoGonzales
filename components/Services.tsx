import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Flame, ShieldCheck, Eye, Compass, Cpu, ArrowRight } from 'lucide-react';

const waterServices = [
  {
    icon: Activity,
    title: 'Ultrasonido de Alta Precisión',
    description: 'Rastreamos las ondas sonoras imperceptibles en una filtración de agua a través del concreto o tierra usando sensores acústicos avanzados.',
    badge: 'Precisión Milimétrica',
  },
  {
    icon: Eye,
    title: 'Cámaras Termográficas',
    description: 'Visualizamos espectros de temperatura en losas y muros para la detección de filtración oculta sin romper absolutamente nada a ciegas.',
    badge: 'Cero Destrozos',
  },
  {
    icon: Compass,
    title: 'Radar Acústico Subterráneo',
    description: 'Mapeo exacto para la detección de fugas en redes bajo tierra y jardines, ubicando fallas profundas en todo el Gran Concepción.',
    badge: 'Tecnología 3D',
  },
];

const gasServices = [
  {
    icon: ShieldCheck,
    title: 'Certificación SEC Oficial',
    description: 'Instaladores autorizados por la Superintendencia de Electricidad y Combustibles. Tramitación de Sello Verde y regularización TC6.',
  },
  {
    icon: Flame,
    title: 'Redes de Gas y Normalización',
    description: 'Pruebas de hermeticidad de alta exigencia, detección de fugas de gas y trazado o reparación de redes bajo estricta normativa legal.',
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
            Tecnología avanzada para un <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic pr-2">diagnóstico exacto.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 font-medium leading-relaxed"
          >
            Nos desmarcamos de la gasfitería tradicional. Ejecutamos la inspección y <strong className="text-slate-900 font-bold">detección de filtración de agua</strong> con precisión quirúrgica utilizando instrumental de última generación en todas las comunas de Concepción para proteger tu patrimonio.
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
            <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0 shadow-md">
              <Cpu size={28} className="animate-pulse" />
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
              1. Detección de Fugas e Inspección de Filtración de Agua
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
              2. Redes de Gas y Certificación SEC
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
                  <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">Servicio Normado</span>
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
      </div>
    </section>
  );
};

export default Services;
