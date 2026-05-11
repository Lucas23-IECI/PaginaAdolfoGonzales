import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Terms: React.FC = () => {
  useEffect(() => {
    document.title = 'Términos de Servicio | Adolfo Gonzalez';
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 p-8 sm:p-16 border border-slate-200"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-primary/10 p-3 rounded-xl text-primary">
                <FileText size={32} />
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Términos de Servicio
              </h1>
            </div>

            <div className="prose prose-slate prose-lg max-w-none text-slate-600">
              <p className="lead text-xl text-slate-700 font-medium">
                Al solicitar los servicios de Adolfo Gonzalez - Detección de Fugas, usted acepta los siguientes términos y condiciones de servicio.
              </p>

              <h3 className="text-slate-900 font-bold mt-8 mb-4">1. Naturaleza del Servicio</h3>
              <p>
                Ofrecemos servicios especializados de detección de fugas de agua utilizando tecnología acústica, gas trazador y métodos no destructivos. Nuestro objetivo principal es localizar filtraciones con la mayor precisión técnica posible para minimizar los daños estructurales en su propiedad durante la reparación.
              </p>

              <h3 className="text-slate-900 font-bold mt-8 mb-4">2. Presupuestos y Visitas a Terreno</h3>
              <p>
                La visita técnica inicial para realizar el diagnóstico y la detección de la fuga incurre en un valor base que será informado previamente y de forma transparente a través de nuestros canales de contacto. 
              </p>
              <p>
                Los presupuestos posteriores correspondientes a la <strong>reparación de la fuga</strong> se entregan sin compromiso y están siempre sujetos a la factibilidad técnica evaluada en terreno. Nos reservamos el derecho de aceptar o rechazar trabajos de reparación dependiendo de la complejidad estructural.
              </p>

              <h3 className="text-slate-900 font-bold mt-8 mb-4">3. Limitación de Responsabilidad</h3>
              <p>
                Si bien nuestra tecnología permite una precisión excepcionalmente alta, las condiciones estructurales únicas de cada propiedad (grosor del concreto, tipo de tubería, múltiples capas de piso) pueden crear márgenes de variación. Adolfo Gonzalez no se hace responsable por daños colaterales preexistentes causados por el agua ni por el deterioro natural de las instalaciones de la propiedad.
              </p>

              <h3 className="text-slate-900 font-bold mt-8 mb-4">4. Garantía del Servicio</h3>
              <p>
                Garantizamos la máxima precisión en nuestras detecciones, respaldados por el uso de equipos de última generación certificados y más de 10 años de experiencia técnica comprobada en el rubro. Los trabajos de reparación (cuando son realizados por nuestro equipo) incluyen una garantía específica que será detallada y acordada en la orden de trabajo correspondiente.
              </p>

              <h3 className="text-slate-900 font-bold mt-8 mb-4">5. Modificaciones</h3>
              <p>
                Nos reservamos el derecho de actualizar estos términos de servicio en cualquier momento. Los términos aplicables a su servicio serán aquellos vigentes en el momento de la contratación de la visita técnica.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
