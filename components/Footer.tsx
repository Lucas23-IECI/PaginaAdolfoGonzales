import React from 'react';
import { Mail, Shield, FileText, ArrowUpRight, Zap } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { Link } from 'react-router-dom';

const PHONE_RAW   = '56966795221';
const PHONE_LABEL = '+56 9 6679 5221';
const EMAIL       = 'adolfogsoto29@gmail.com';

const WHATSAPP_LINK =
  'https://wa.me/56966795221?text=Hola%20Adolfo%2C%20necesito%20detectar%20una%20fuga%20de%20agua.%20%C2%BFPuede%20ayudarme%3F';

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
    <circle cx="18" cy="26" r="3.5" fill="white" />
    <circle cx="18" cy="26" r="7"   stroke="white" strokeWidth="1.5" strokeOpacity="0.55" />
    <circle cx="18" cy="26" r="10.5" stroke="white" strokeWidth="1" strokeOpacity="0.25" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="bg-slate-950 text-white pt-20 pb-8 relative overflow-hidden"
    >
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── CTA DE URGENCIA FINAL (Cierre de Embudo) ── */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-black border border-slate-800/80 rounded-3xl p-8 sm:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden shadow-2xl">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/10 rounded-full blur-[40px]" />
          
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20 mb-4">
              <Zap size={12} /> Disponibilidad Inmediata
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              ¿Sospechas de una filtración oculta en tu propiedad?
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mt-2 font-medium">
              Actúa a tiempo. Agenda tu evaluación técnica sin compromisos.
            </p>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto shrink-0 group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-primary hover:bg-[#c2410c] text-white text-base sm:text-lg font-black rounded-2xl overflow-hidden transition-all hover:scale-105 shadow-xl hover:shadow-primary/20"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
            <WhatsAppIcon size={22} className="relative z-10" />
            <span className="relative z-10">Chat de Urgencia</span>
          </a>
        </div>

        {/* ── CONTENIDO PRINCIPAL DEL FOOTER ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">

          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2.5 rounded-xl shadow-md">
                <LogoIcon className="text-white h-7 w-auto" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white text-xl font-black tracking-tight leading-none">
                  Adolfo González
                </span>
                <span className="text-primary text-[11px] font-extrabold tracking-[0.15em] uppercase mt-0.5">
                  Detecciones
                </span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm font-medium">
              Líderes en <strong className="text-white font-bold">detección de fugas en Concepción</strong> (todas las comunas) ante cualquier <strong className="text-white font-bold">filtración de agua</strong>. Tecnología avanzada para una <strong className="text-white font-bold">detección de filtración</strong> exacta sin romper tu casa.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex gap-3">
                <a
                  href={`https://wa.me/${PHONE_RAW}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar a Adolfo González por WhatsApp"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow-sm"
                >
                  <WhatsAppIcon size={18} />
                </a>
                <a
                  href={`mailto:${EMAIL}?subject=Consulta%20sobre%20Detección%20de%20Fugas`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Enviar correo a Adolfo González"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-300 shadow-sm"
                >
                  <Mail size={18} />
                </a>
              </div>
              <div className="hidden sm:block h-10 w-px bg-slate-800/50 mx-1" />
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1 ml-1">Certificación SEC</span>
                <img src="/sec_logo.png" alt="Sello de Certificación SEC" width={120} height={56} className="h-14 w-auto object-contain drop-shadow-md brightness-90" />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-slate-300 tracking-[0.15em] uppercase">Navegación</h4>
            <ul className="space-y-3">
              {[
                ['Inicio',      '#inicio'     ],
                ['Servicios',   '#servicios'  ],
                ['Portafolio',  '#portafolio' ],
                ['FAQ',         '#faq'        ],
                ['Contacto',    '#contacto'   ],
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
            <h4 className="text-xs font-bold text-slate-300 tracking-[0.15em] uppercase">Línea Directa</h4>
            <ul className="space-y-5">
              <li>
                <a
                  href={`https://wa.me/${PHONE_RAW}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1"
                >
                  <span className="text-slate-500 text-xs font-medium">WhatsApp Emergencias</span>
                  <span className="text-lg font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
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
                  <span className="text-slate-500 text-xs font-medium">Atención Corporativa</span>
                  <span className="text-sm font-medium text-white group-hover:text-primary transition-colors">
                    {EMAIL}
                  </span>
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-slate-500 text-xs font-medium">Zonas de Cobertura (Todas las Comunas)</span>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Concepción, San Pedro de la Paz, Talcahuano, Chiguayante, Hualpén, Penco, Tomé, Lota, Hualqui, Lomas San Sebastián y Lomas San Andrés.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-800/50">
          <p className="text-slate-500 text-xs font-medium text-center md:text-left">
            © {new Date().getFullYear()} Adolfo González Detecciones. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-slate-500 text-xs font-medium">
            <Link to="/privacidad" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Shield size={12} /> Privacidad
            </Link>
            <Link to="/terminos" className="hover:text-white transition-colors flex items-center gap-1.5">
              <FileText size={12} /> Términos
            </Link>
            <span className="hidden md:inline text-slate-800">|</span>
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
