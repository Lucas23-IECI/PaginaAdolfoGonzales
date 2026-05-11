import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
  useEffect(() => {
    document.title = 'Política de Privacidad | Adolfo Gonzalez';
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
                <Shield size={32} />
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Política de Privacidad
              </h1>
            </div>

            <div className="prose prose-slate prose-lg max-w-none text-slate-600">
              <p className="lead text-xl text-slate-700 font-medium">
                En Adolfo Gonzalez - Detección de Fugas, valoramos profundamente tu confianza y respetamos tu privacidad. Esta política detalla cómo manejamos la información que nos proporcionas.
              </p>

              <h3 className="text-slate-900 font-bold mt-8 mb-4">1. Recopilación de Información</h3>
              <p>
                Los datos personales que solicitamos a través de nuestros canales de contacto (como tu nombre, teléfono, dirección aproximada y detalles del problema) son recopilados con el único propósito de gestionar, coordinar y ejecutar la evaluación técnica que nos solicitas.
              </p>

              <h3 className="text-slate-900 font-bold mt-8 mb-4">2. Uso y Manejo de Datos</h3>
              <p>
                <strong>Confidencialidad absoluta:</strong> No almacenamos tu información en bases de datos de marketing masivo, ni vendemos, alquilamos o compartimos tus datos con terceros bajo ninguna circunstancia. Toda comunicación se realiza de manera directa y confidencial entre tú y nuestro equipo técnico para resolver tu emergencia de la forma más rápida posible.
              </p>

              <h3 className="text-slate-900 font-bold mt-8 mb-4">3. Consentimiento</h3>
              <p>
                Al utilizar nuestro formulario web o contactarnos directamente vía WhatsApp o correo electrónico, consientes el uso de tu información exclusivamente para los siguientes fines:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Elaboración de cotizaciones y presupuestos.</li>
                <li>Coordinación de visitas a terreno para diagnóstico.</li>
                <li>Prestación y seguimiento del servicio contratado.</li>
              </ul>

              <h3 className="text-slate-900 font-bold mt-8 mb-4">4. Seguridad</h3>
              <p>
                Los mensajes enviados a través de nuestro sitio web son redirigidos de forma segura a través de WhatsApp, plataforma que cuenta con cifrado de extremo a extremo, garantizando que tu comunicación sea privada y segura.
              </p>

              <h3 className="text-slate-900 font-bold mt-8 mb-4">5. Contacto</h3>
              <p>
                Si tienes alguna duda sobre el manejo de tus datos o deseas solicitar la eliminación de tu historial de chat comercial, puedes contactarnos en cualquier momento a través de nuestro WhatsApp oficial o correo electrónico <a href="mailto:adolfogsoto29@gmail.com" className="text-primary hover:text-secondary font-medium">adolfogsoto29@gmail.com</a>.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
