import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { NavItem } from '../types';
import { useLocation, useNavigate } from 'react-router-dom';

const WHATSAPP_LINK =
  'https://wa.me/56966795221?text=Hola%20Adolfo%2C%20necesito%20detectar%20una%20fuga%20de%20agua.%20%C2%BFPuede%20ayudarme%3F';

const navItems: NavItem[] = [
  { label: 'Inicio',    href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio',  href: '#portafolio' },
  { label: 'FAQ',       href: '#faq' },
  { label: 'Contacto',  href: '#contacto' },
];

/** Inline SVG logo: water drop with sonar rings */
const LogoIcon = ({ className = '' }: { className?: string }) => (
  <svg
    className={className}
    width="36"
    height="42"
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
    <circle cx="18" cy="26" r="10.5" stroke="white" strokeWidth="1"   strokeOpacity="0.25" />
  </svg>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled]           = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/' + href);
      return;
    }

    const targetId = href.replace('#', '');
    const element  = document.getElementById(targetId);
    if (element) {
      setTimeout(() => {
        const headerOffset    = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition  = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }, 100);
    } else if (href === '#' || href === '#inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Línea decorativa verde superior */}
        <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0f5a3b] via-[#16a34a] to-[#4ade80] transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a
              href="#"
              onClick={(e) => handleNavClick(e, '#')}
              className="flex items-center gap-3 group z-50 relative shrink-0"
            >
              <div className="bg-primary p-2 rounded-lg shadow-sm">
                <LogoIcon className="text-white h-6 w-auto" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-primary text-xl font-bold tracking-tight leading-none">
                  Adolfo Gonzalez
                </span>
                <span className="text-secondary text-[10px] font-bold tracking-[0.15em] uppercase">
                  Detección de Fugas
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-slate-700 hover:text-primary text-sm font-semibold transition-colors relative group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Desktop */}
            <div className="hidden lg:flex shrink-0">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#0f5a3b] to-[#16a34a] hover:from-[#16a34a] hover:to-[#22c55e] transition-all text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md hover:shadow-[0_8px_20px_-4px_rgba(22,163,74,0.4)] flex items-center gap-2"
              >
                <WhatsAppIcon size={18} />
                Pedir Presupuesto
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-slate-700 p-2 hover:text-primary transition-colors z-[60] relative"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[55] lg:hidden flex flex-col pt-24 pb-10 px-6 transition-all duration-300 overflow-y-auto ${
          isMobileMenuOpen
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-500 hover:bg-slate-100 transition-colors"
        >
          <X size={28} />
        </button>

        <div className="flex flex-col gap-2 mt-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="py-4 text-slate-800 text-2xl font-bold border-b border-slate-100"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#0f5a3b] to-[#16a34a] text-white text-lg font-bold rounded-xl shadow-lg"
          >
            <WhatsAppIcon size={22} />
            Pedir Presupuesto
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
