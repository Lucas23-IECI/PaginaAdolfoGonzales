import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { FaqItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const faqs: FaqItem[] = [
  {
    question: '¿Es necesario romper paredes o pisos para encontrar la fuga?',
    answer:
      'No. Utilizamos geófonos y equipos de detección acústica que nos permiten localizar la fuga desde la superficie, sin necesidad de romper paredes, pisos ni excavar. Una vez identificado el punto exacto, el arreglo puede ser mínimamente invasivo, ahorrándote tiempo y dinero.',
  },
  {
    question: '¿Qué tecnología utilizan para detectar las fugas?',
    answer:
      'Trabajamos con geófonos de alta sensibilidad —dispositivos que "escuchan" el ruido que hace el agua al escapar por una cañería defectuosa. Esta tecnología nos permite localizar la fuga con una precisión de centímetros, sin hacer ningún daño previo a la estructura.',
  },
  {
    question: '¿En qué comunas atienden?',
    answer:
      'Atendemos en Concepción, Chiguayante, Talcahuano y comunas cercanas del Gran Concepción. Si no estás seguro si tu zona tiene cobertura, escríbenos por WhatsApp y te confirmamos disponibilidad sin ningún compromiso.',
  },
  {
    question: '¿Cuánto tiempo demora la detección?',
    answer:
      'Depende del tipo de instalación y la complejidad del caso, pero en la mayoría de los casos logramos identificar la fuga en una visita de 1 a 2 horas. Llegamos con todo el equipo necesario, sin que tengas que preparar nada especial.',
  },
  {
    question: '¿Reparan la fuga también, o solo la detectan?',
    answer:
      'Sí. Gracias a nuestra experiencia de 10 años en gasfitería, podemos también reparar la fuga una vez detectada. En muchos casos coordinamos todo en una sola visita: detección y reparación, minimizando molestias para ti.',
  },
  {
    question: '¿Cómo se cobra el servicio?',
    answer:
      'El presupuesto es siempre sin compromiso. El valor del servicio se cotiza según el tipo de detección, la complejidad y la accesibilidad del punto. Aceptamos efectivo y transferencia bancaria. Contáctanos por WhatsApp para más información o para coordinar una visita.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Abierto por defecto el primero para guiar al usuario

  return (
    <section id="faq" className="py-32 bg-transparent relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Sticky Left Column (Header & CTA) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-secondary" />
              <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                Transparencia Total
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.1] mb-8"
            >
              Resolvemos tus <span className="italic font-serif font-medium text-slate-800">dudas.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-600 text-lg leading-relaxed mb-12"
            >
              Sabemos que enfrentar una fuga de agua genera incertidumbre. Aquí respondemos de forma clara cómo trabajamos para darte tranquilidad antes de que lleguemos a tu hogar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />
                <h4 className="text-xl font-bold text-primary mb-3">¿Tienes un caso particular?</h4>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed">Si tu problema no está descrito aquí, envíame un mensaje o foto por WhatsApp y lo evaluamos sin costo.</p>
                <a
                  href="https://wa.me/56966795221?text=Hola%20Adolfo%2C%20tengo%20una%20consulta%20sobre%20detección%20de%20fugas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors group-hover:gap-3"
                >
                  Hablar con Adolfo <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  className={`border-b-2 transition-colors duration-300 ${isOpen ? 'border-primary' : 'border-slate-200'}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex items-start justify-between gap-6 py-8 w-full text-left focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <h3
                      className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 pr-8 ${
                        isOpen ? 'text-primary' : 'text-slate-800 group-hover:text-secondary'
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <div 
                      className={`shrink-0 mt-1 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 ${
                        isOpen ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-slate-500 group-hover:bg-secondary/10 group-hover:text-secondary'
                      }`}
                    >
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="pb-8 pr-12 text-slate-600 text-lg leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
