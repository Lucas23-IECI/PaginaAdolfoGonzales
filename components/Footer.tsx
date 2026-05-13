import React from 'react';
import { Mail, Shield, FileText, ArrowUpRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { Link } from 'react-router-dom';

const PHONE_RAW   = '56966795221';
const PHONE_LABEL = '+56 9 6679 5221';
const EMAIL       = 'adolfogsoto29@gmail.com';

/** Inline SVG logo for dark background */
const LogoIcon = ({ className = '' }: { className?: string }) => (
  <svg
    className={className}
    width="34"
    height="40"
    viewBox="0 0 36 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M18 1L3 24C3 33.941 9.716 41 18 41C26.284 41 33 33.941 33 24L18 1Z"
      fill="currentColor"
    />
    <circle cx="18" cy="26" r="3.5" fill="#020617" />
    <circle cx="18" cy="26" r="7"   stroke="#020617" strokeWidth="1.5" strokeOpacity="0.6" />
    <circle cx="18" cy="26" r="10.5" stroke="#020617" strokeWidth="1" strokeOpacity="0.25" />
  </svg>
);


const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="bg-slate-950 text-white pt-24 pb-8 relative overflow-hidden"
    >
      {/* Línea decorativa verde superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#16a34a] to-transparent opacity-60" />
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">

          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-2.5 rounded-xl border border-primary/20">
                <LogoIcon className="text-secondary h-8 w-auto" />
              </div>
              <div>
                <span className="block text-xl font-extrabold leading-none tracking-tight text-white">Adolfo Gonzalez</span>
                <span className="text-secondary text-[10px] font-bold tracking-[0.2em] uppercase">
                  Especialista
                </span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm font-light">
              Más de 10 años asegurando la tranquilidad de hogares en el Gran Concepción mediante tecnología acústica no destructiva.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex gap-3">
                <a
                  href={`https://wa.me/${PHONE_RAW}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar por WhatsApp"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow-sm"
                >
                  <WhatsAppIcon size={18} />
                </a>
                <a
                  href={`mailto:${EMAIL}?subject=Consulta%20sobre%20Detección%20de%20Fugas`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Enviar correo electrónico"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-300 shadow-sm"
                >
                  <Mail size={18} />
                </a>
              </div>
              <div className="hidden sm:block h-10 w-px bg-slate-800/50 mx-1" />
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">Instalador Autorizado</span>
                <img src="/sec_logo.png" alt="Certificación SEC" className="h-16 w-auto object-contain drop-shadow-md" />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-slate-300 tracking-[0.15em] uppercase">Navegación</h3>
            <ul className="space-y-3">
              {[
                ['Inicio',    '#inicio'     ],
                ['Servicios', '#servicios'  ],
                ['Portafolio',  '#portafolio' ],
                ['FAQ',       '#faq'        ],
                ['Contacto',  '#contacto'   ],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium group w-fit"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-3 transition-all duration-300 rounded-full" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-slate-300 tracking-[0.15em] uppercase">Contacto</h3>
            <ul className="space-y-5">
              <li>
                <a
                  href={`https://wa.me/${PHONE_RAW}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1"
                >
                  <span className="text-slate-500 text-xs font-medium">WhatsApp Directo</span>
                  <span className="text-lg font-semibold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                    {PHONE_LABEL}
                    <ArrowUpRight size={16} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-primary" />
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${EMAIL}?subject=Consulta%20sobre%20Detección%20de%20Fugas`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1"
                >
                  <span className="text-slate-500 text-xs font-medium">Correo Electrónico</span>
                  <span className="text-sm font-medium text-white group-hover:text-primary transition-colors">
                    {EMAIL}
                  </span>
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-slate-500 text-xs font-medium">Área de Cobertura</span>
                <span className="text-sm font-medium text-slate-300">
                  Concepción, Chiguayante, Talcahuano y alrededores.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-800/50">
          <p className="text-slate-600 text-xs font-medium text-center md:text-left">
            © {new Date().getFullYear()} Adolfo Gonzalez Soto. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-slate-500 text-xs font-medium">
            <Link to="/privacidad" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Shield size={12} /> Privacidad
            </Link>
            <Link to="/terminos" className="hover:text-white transition-colors flex items-center gap-1.5">
              <FileText size={12} /> Términos
            </Link>
            <span className="hidden md:inline text-slate-700">|</span>
            <p>
              Diseñado por{' '}
              <a href="https://purocode.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors font-bold">
                PuroCode
              </a>
            </p>
            <a href="https://www.puragenda.cl" target="_blank" rel="noopener noreferrer" aria-label="Puragenda" className="text-slate-900/10 text-xs select-none pointer-events-none">
              puragenda
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
