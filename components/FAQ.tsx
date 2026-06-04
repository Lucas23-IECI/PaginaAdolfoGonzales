import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { FaqItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const faqs: FaqItem[] = [
  {
    question: '¿Es necesario romper paredes o pisos para realizar la detección de filtración?',
    answer:
      'No. Utilizamos geófonos de alta sensibilidad y equipos avanzados que nos permiten realizar la detección de filtración de agua desde la superficie, sin necesidad de romper paredes, pisos ni excavar a ciegas. Una vez identificado el centímetro exacto de la falla, la intervención es mínima, protegiendo tu hogar.',
  },
  {
    question: '¿Qué tecnología utilizan ante una filtración de agua oculta?',
    answer:
      'Trabajamos con sensores acústicos avanzados (geófonos) que aíslan las frecuencias del escape presurizado ante cualquier filtración de agua. Esto garantiza una detección de fugas en Concepción totalmente certera y no destructiva.',
  },
  {
    question: '¿En qué comunas realizan la detección de fugas en Concepción?',
    answer:
      'Abarcamos de manera directa todas las comunas del Gran Concepción con unidades de respuesta rápida: Concepción centro, San Pedro de la Paz, Talcahuano, Chiguayante, Hualpén, Penco, Tomé, Lota y Hualqui. Si tu sector está en los alrededores, escríbenos por WhatsApp y coordinamos la visita.',
  },
  {
    question: '¿Cuánto tiempo demora la detección de filtración?',
    answer:
      'En la gran mayoría de los casos logramos identificar el punto exacto de la filtración de agua en una inspección técnica de 1 a 2 horas. Llegamos con todo el instrumental especializado de diagnóstico.',
  },
  {
    question: '¿Reparan la fuga de agua también, o solo la detectan?',
    answer:
      'Sí. Contamos con la experticia técnica para reparar la rotura una vez detectada de forma puntual. En la mayoría de las atenciones resolvemos todo en la misma visita: detección exacta e intervención focalizada, reduciendo molestias al mínimo.',
  },
  {
    question: '¿Cómo se cobra el servicio de inspección?',
    answer:
      'La evaluación y coordinación preliminar por WhatsApp es sin compromiso. El valor del servicio técnico se cotiza según el tipo de estructura y la complejidad de la filtración de agua. Aceptamos efectivo y transferencia bancaria.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Abierto por defecto el primero para guiar al usuario

  return (
    <section id="faq" className="py-32 bg-gradient-to-b from-transparent via-[#f0fdf4]/50 to-transparent relative overflow-hidden">
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
                <h3 className="text-xl font-bold text-primary mb-3">¿Tienes un caso particular?</h3>
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
