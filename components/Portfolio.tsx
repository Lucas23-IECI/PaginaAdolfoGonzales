import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioCase {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'before-after' | 'single';
  before?: {
    label: string;
    image: string;
    desc: string;
    phaseLabel?: string;
  };
  after?: {
    label: string;
    image: string;
    desc: string;
    phaseLabel?: string;
  };
  single?: {
    label: string;
    image: string;
    desc: string;
    phaseLabel?: string;
  };
  whatsappText: string;
}

const cases: PortfolioCase[] = [
  {
    id: 'muro',
    title: 'Rotura en Muro/Piso',
    subtitle: 'Intervención exacta y reemplazo de cañería',
    description: 'En lugar de demoler toda la pared buscando la filtración, identificamos el punto exacto y realizamos una apertura mínima para instalar la tubería nueva.',
    type: 'before-after',
    before: {
      label: 'Antes: Daño Oculto',
      image: '/portfolio/antes-muro.webp',
      desc: 'Cañería matriz de agua rota y totalmente desconectada al interior de la estructura.',
      phaseLabel: 'FASE 1: LOCALIZACIÓN',
    },
    after: {
      label: 'Después: Red Nueva',
      image: '/portfolio/despues-muro.webp',
      desc: 'Instalación de nueva red PPR de alta resistencia, termofusionada a la perfección.',
      phaseLabel: 'FASE 2: REPARACIÓN',
    },
    whatsappText: 'Hola Adolfo, necesito cotizar una reparación de filtración en muro/piso.',
  },
  {
    id: 'subterranea',
    title: 'Fuga Subterránea',
    subtitle: 'Excavación puntual y controlada',
    description: 'Rastreamos la onda acústica bajo tierra para cavar un hoyo circular de diámetro ultra reducido, evitando causar destrozos innecesarios en la superficie.',
    type: 'single',
    single: {
      label: 'Intervención Mínima',
      image: '/portfolio/hoyo-tierra.webp',
      desc: 'Apertura precisa del suelo guiada por tecnología acústica, reparando la matriz de forma limpia y hermética bajo tierra.',
      phaseLabel: 'RESULTADO FINAL',
    },
    whatsappText: 'Hola Adolfo, tengo una posible fuga subterránea y necesito detección.',
  },
  {
    id: 'gas',
    title: 'Instalaciones y Gas',
    subtitle: 'Terminaciones limpias y estética profesional',
    description: 'Además de detectar fugas, entregamos instalaciones de redes de agua y gas impecables, respetando al 100% la estética de tu hogar.',
    type: 'single',
    single: {
      label: 'Entrega Lista',
      image: '/portfolio/gas-terminado.webp',
      desc: 'Muro limpio y conexiones listas para instalar tus artefactos o muebles, cumpliendo con la normativa SEC.',
      phaseLabel: 'TRABAJO TERMINADO',
    },
    whatsappText: 'Hola Adolfo, necesito un presupuesto para instalaciones de agua/gas.',
  }
];

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('muro');

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
                Casos de Éxito
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05]"
            >
              Detección de Filtraciones <br/> <span className="italic font-serif font-medium text-primary">y Reparación en Terreno</span>
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

            {/* Grilla visual */}
            {selectedCase.type === 'before-after' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                
                {/* ANTES (Detección Exacta) */}
                <div className="flex flex-col bg-slate-50 rounded-2xl p-5 border border-slate-200/60 relative overflow-hidden group">
                  <div className="absolute top-4 left-4 z-20 bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <AlertCircle size={14} className="text-secondary" /> {selectedCase.before!.label}
                  </div>
                  
                  <div className="aspect-[4/3] w-full rounded-xl overflow-hidden mb-4 relative bg-slate-200">
                    {selectedCase.before!.image.endsWith('.mp4') ? (
                      <video
                        src={selectedCase.before!.image}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={selectedCase.before!.image}
                        alt={`Detección de fugas en Concepción: ${selectedCase.before!.label} - Gasfiter Adolfo González`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  </div>

                  <div className="mt-auto">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">{selectedCase.before!.phaseLabel}</span>
                    <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                      {selectedCase.before!.desc}
                    </p>
                  </div>
                </div>

                {/* DESPUÉS (Reparación Final) */}
                <div className="flex flex-col bg-orange-50/50 rounded-2xl p-5 border border-primary/20 relative overflow-hidden group">
                  <div className="absolute top-4 left-4 z-20 bg-primary/95 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md">
                    <CheckCircle2 size={14} /> {selectedCase.after!.label}
                  </div>
                  
                  <div className="aspect-[4/3] w-full rounded-xl overflow-hidden mb-4 relative bg-slate-200">
                    {selectedCase.after!.image.endsWith('.mp4') ? (
                      <video
                        src={selectedCase.after!.image}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={selectedCase.after!.image}
                        alt={`Reparación de cañerías e instalaciones: ${selectedCase.after!.label} - Gasfitería`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  </div>

                  <div className="mt-auto">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">{selectedCase.after!.phaseLabel}</span>
                    <p className="text-sm sm:text-base text-slate-800 font-bold leading-relaxed">
                      {selectedCase.after!.desc}
                    </p>
                  </div>
                </div>

              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                
                {/* Columna Izquierda: La Foto */}
                <div className="flex flex-col bg-slate-50 rounded-2xl p-5 border border-slate-200/60 relative overflow-hidden group">
                  <div className="absolute top-4 left-4 z-20 bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-secondary" /> {selectedCase.single!.label}
                  </div>
                  
                  <div className="aspect-[4/3] w-full rounded-xl overflow-hidden relative bg-slate-200">
                    {selectedCase.single!.image.endsWith('.mp4') ? (
                      <video
                        src={selectedCase.single!.image}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={selectedCase.single!.image}
                        alt={`Detección de filtración en Concepción: ${selectedCase.single!.label} - Gasfiter SEC`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Columna Derecha: El Texto */}
                <div className="flex flex-col justify-center bg-slate-50/80 rounded-2xl p-8 sm:p-12 border border-slate-200/60">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-4">{selectedCase.single!.phaseLabel}</span>
                  <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed">
                    {selectedCase.single!.desc}
                  </p>
                </div>
                
              </div>
            )}

            {/* CTA Inferior de la Card */}           {/* CTA Inferior de la Card */}
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
