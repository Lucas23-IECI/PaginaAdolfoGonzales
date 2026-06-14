import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Droplet, Layers, Wrench, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const SecCrossLinkBlock: React.FC = () => {
  const links = [
    { name: "Detección de Fugas", path: "/deteccion-fugas-agua-concepcion", icon: <Droplet className="w-5 h-5" /> },
    { name: "Fugas Bajo Radier", path: "/fugas-bajo-radier-concepcion", icon: <Layers className="w-5 h-5" /> },
    { name: "Instalador SEC", path: "/instalador-autorizado-sec-concepcion", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "Sello Verde SEC", path: "/sello-verde-sec-concepcion", icon: <CheckCircle className="w-5 h-5" /> },
    { name: "Normalización Gas", path: "/normalizacion-gas-concepcion", icon: <Wrench className="w-5 h-5" /> }
  ];

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-blue-950/50 p-8 md:p-10 rounded-3xl border border-blue-800/50">
          <div className="lg:w-1/3">
            <span className="text-blue-400 font-bold uppercase tracking-wider text-sm mb-2 block">Servicios Complementarios</span>
            <h2 className="text-2xl md:text-3xl font-black mb-4">Especialistas Integrales</h2>
            <p className="text-blue-200">
              Ya sea para encontrar filtraciones de agua ocultas o para certificar tus redes de gas bajo la normativa SEC, contamos con el equipo y la acreditación necesaria.
            </p>
          </div>
          
          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {links.map((link, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link 
                    to={link.path}
                    className="flex items-center justify-between p-4 bg-blue-900/50 hover:bg-blue-600 border border-blue-800 hover:border-blue-400 rounded-xl transition-all group"
                  >
                    <div className="flex items-center gap-3 font-semibold">
                      <div className="text-blue-400 group-hover:text-white transition-colors">
                        {link.icon}
                      </div>
                      {link.name}
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecCrossLinkBlock;
