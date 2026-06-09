import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { FaqItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const faqs: FaqItem[] = [
  {
    question: '¿Buscas un gasfiter en Concepción que detecte fugas sin romper?',
    answer:
      'Exacto. A diferencia de un gasfiter tradicional que rompe pisos y muros a ciegas para encontrar un tubo roto, nosotros utilizamos tecnología no destructiva. Empleamos geófonos acústicos (ultrasonido) y cámaras termográficas de alta resolución para "escuchar" y "ver" la humedad bajo la superficie. Esto nos permite marcar el punto exacto de la filtración y realizar una apertura mínima de máximo 1 metro cuadrado para la reparación.',
  },
  {
    question: '¿Qué tipo de filtraciones de agua y gas detecta un gasfiter certificado?',
    answer:
      'Como expertos en gasfitería y detección de fugas en Concepción, localizamos fugas en cañerías de agua potable fría y caliente, matrices de jardín subterráneas, circuitos de calefacción por losa radiante, fugas de gas licuado o natural, y problemas de humedad oculta. También somos instaladores autorizados SEC, lo que nos permite trabajar bajo estrictas normas de seguridad.',
  },
  {
    question: '¿Qué comunas cubre el servicio de gasfitería a domicilio en el Gran Concepción?',
    answer:
      'Damos cobertura completa e inmediata en todas las comunas del Gran Concepción: Concepción centro, San Pedro de la Paz (Andalué, Huertos Familiares, El Venado), Talcahuano, Chiguayante, Hualpén, Penco, Lirquén, Tomé, Coronel, Lota y Hualqui. También atendemos sectores residenciales como Lomas San Sebastián, Lomas de San Andrés y Barrio Norte.',
  },
  {
    question: '¿Tienen disponibilidad de gasfiter urgente para emergencias por filtración?',
    answer:
      'Sí. Entendemos que una filtración de agua potable activa puede inundar tu casa, dañar la estructura o disparar la cuenta del agua. Contamos con vehículos técnicos equipados y listos en Concepción para responder con la mayor rapidez posible ante urgencias hidráulicas en la zona.',
  },
  {
    question: '¿Qué respaldo entregan para el cobro de seguros de hogar por filtración de agua?',
    answer:
      'Al terminar el trabajo de gasfitería, entregamos una boleta de servicio detallada, un informe técnico formal firmado por nuestro especialista certificado SEC y un respaldo fotográfico completo de la detección y la reparación. Estos documentos son los exigidos por las compañías de seguros en Chile para tramitar el reembolso de los gastos de reparación de cañerías y daños por humedad.',
  },
  {
    question: '¿Ofrecen garantía en los trabajos de gasfitería y reparación de fugas?',
    answer:
      'Por supuesto. Con más de 10 años de experiencia, respaldamos cada una de nuestras detecciones y reparaciones con garantía de calidad técnica. Si realizamos la reparación de la cañería rota, nos aseguramos de realizar pruebas de presión hidráulica digital para certificar que el circuito ha quedado 100% hermético antes de cerrar.',
  }
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
              Preguntas sobre <span className="italic font-serif font-medium text-slate-800">Gasfitería y Detección.</span>
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
