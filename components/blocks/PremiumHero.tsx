import React from 'react';
import { motion } from 'framer-motion';

interface PremiumHeroProps {
  title: string;
  subtitle: string;
  badges?: string[];
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

const PremiumHero: React.FC<PremiumHeroProps> = ({ 
  title, 
  subtitle, 
  badges = [], 
  ctaText = "Solicitar Evaluación", 
  ctaLink = "https://wa.me/56966795221?text=Hola%20Adolfo%2C%20necesito%20ayuda%20técnica.",
  backgroundImage = "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80')"
}) => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white min-h-[70vh] flex items-center">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Badges */}
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-6">
              {badges.map((badge, idx) => (
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx} 
                  className="px-4 py-1.5 bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          )}

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-white"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg lg:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1"
            >
              {ctaText}
            </a>
            <a 
              href="tel:+56961175685"
              className="inline-flex justify-center items-center px-8 py-4 bg-slate-800/50 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-600 backdrop-blur-sm transition-all"
            >
              Llamar Ahora
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PremiumHero;
