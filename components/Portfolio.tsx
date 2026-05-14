import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BeforeAfterCase {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  before: {
    label: string;
    image: string;
    desc: string;
  };
  after: {
    label: string;
    image: string;
    desc: string;
  };
  whatsappText: string;
}

const cases: BeforeAfterCase[] = [
  {
    id: 'losa',
    title: 'Filtración en Losa de Hormigón',
    subtitle: 'Intervención milimétrica en interior residencial',
    description: 'Las fugas bajo losa o cerámicos suelen derivar en demoliciones masivas de cocinas o baños completos. Con nuestra tecnología, acotamos el área a la mínima expresión.',
    before: {
      label: 'Detección Exacta',
      image: '/images/fuga_losa_v2.webp',
      desc: 'Escaneo térmico y acústico marca el centímetro exacto de la rotura bajo el pavimento.',
    },
    after: {
      label: 'Reparación Quirúrgica',
      image: '/images/tecnico_geofono_v2.webp',
      desc: 'Remoción de una sola palmeta de cerámica para termofusionar la cañería dañada.',
    },
    whatsappText: 'Hola Adolfo, me interesa el servicio para una fuga en losa/piso como vi en la sección Antes y Después.',
  },
  {
    id: 'jardin',
    title: 'Rotura Subterránea en Jardín',
    subtitle: 'Matriz principal a 80cm de profundidad',
    description: 'Evitamos el destrozo innecesario de prados, entradas vehiculares o terrazas completas rastreando la onda sonora bajo tierra.',
    before: {
      label: 'Rastreo por Ultrasonido',
      image: '/images/deteccion_subterranea_v2.webp',
      desc: 'El geófono de alta sensibilidad aísla la frecuencia del agua presurizada escapando.',
    },
    after: {
      label: 'Excavación Puntual',
      image: '/images/deteccion_subterranea_v2.webp',
      desc: 'Apertura controlada directa a la cañería matriz para su reemplazo inmediato y sellado.',
    },
    whatsappText: 'Hola Adolfo, necesito detectar una fuga subterránea/exterior como vi en la sección Antes y Después.',
  },
];

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('losa');

  const selectedCase = cases.find(c => c.id === activeTab) || cases[0];

  return (
    <section id="portafolio" className="py-32 bg-slate-50 relative overflow-hidden scroll-mt-20">
      
      {/* Decorative Text Background */}
      <div className="absolute top-10 -left-10 text-[8rem] sm:text-[10rem] font-extrabold text-slate-200/40 pointer-events-none select-none tracking-tighter leading-none whitespace-nowrap z-0">
        PRECISIÓN EXACTA
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-bold tracking-widest uppercase text-sm">
                Antes y Después
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05]"
            >
              Detección exacta vs. <br/> <span className="italic font-serif font-medium text-primary">la reparación final.</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-md text-lg leading-relaxed md:text-right font-medium"
          >
            Comprueba visualmente nuestro diferenciador clave: rompemos solo lo estrictamente necesario para solucionar la emergencia.
          </motion.p>
        </div>

        {/* Selector de Casos */}
        <div className="flex flex-wrap gap-3 mb-12">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 flex items-center gap-2 ${
                activeTab === c.id 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Contenedor Comparativo Visual */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCase.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[2.5rem] p-6 sm:p-10 border border-slate-200 shadow-xl"
          >
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
                Caso Documentado
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 mb-2">
                {selectedCase.subtitle}
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                {selectedCase.description}
              </p>
            </div>

            {/* Grilla comparativa Antes vs Después */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              
              {/* ANTES (Detección Exacta) */}
              <div className="flex flex-col bg-slate-50 rounded-2xl p-5 border border-slate-200/60 relative overflow-hidden group">
                <div className="absolute top-4 left-4 z-20 bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <AlertCircle size={14} className="text-secondary" /> {selectedCase.before.label}
                </div>
                
                <div className="aspect-[4/3] w-full rounded-xl overflow-hidden mb-4 relative bg-slate-200">
                  <img
                    src={selectedCase.before.image}
                    alt={selectedCase.before.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>

                <div className="mt-auto">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Fase 1: Localización</span>
                  <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                    {selectedCase.before.desc}
                  </p>
                </div>
              </div>

              {/* DESPUÉS (Reparación Final) */}
              <div className="flex flex-col bg-orange-50/50 rounded-2xl p-5 border border-primary/20 relative overflow-hidden group">
                <div className="absolute top-4 left-4 z-20 bg-primary/95 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md">
                  <CheckCircle2 size={14} /> {selectedCase.after.label}
                </div>
                
                <div className="aspect-[4/3] w-full rounded-xl overflow-hidden mb-4 relative bg-slate-200">
                  <img
                    src={selectedCase.after.image}
                    alt={selectedCase.after.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>

                <div className="mt-auto">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Fase 2: Intervención Mínima</span>
                  <p className="text-sm sm:text-base text-slate-800 font-bold leading-relaxed">
                    {selectedCase.after.desc}
                  </p>
                </div>
              </div>

            </div>

            {/* CTA Inferior de la Card */}
            <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-500 font-medium text-center sm:text-left">
                ¿Sufres una situación similar? Evaluamos tu caso con el mismo nivel de precisión.
              </p>
              <a
                href={`https://wa.me/56966795221?text=${encodeURIComponent(selectedCase.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-primary text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
              >
                Solicitar Diagnóstico Similar <ArrowRight size={16} />
              </a>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Portfolio;
