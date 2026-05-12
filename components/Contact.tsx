import React, { useState } from 'react';
import { Mail, MapPin, Clock, ArrowRight, Zap } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { motion } from 'framer-motion';

const PHONE_RAW   = '56966795221';
const PHONE_LABEL = '+56 9 6679 5221';
const EMAIL       = 'adolfogsoto29@gmail.com';

const zones = ['Concepción', 'Chiguayante', 'Talcahuano', 'San Pedro de la Paz', 'Penco', 'y alrededores'];

const TOPICS = [
  'Fuga en cañería interior',
  'Fuga en losa o piso radiante',
  'Fuga en jardín o exterior',
  'No sé, necesito un diagnóstico',
];

const Contact: React.FC = () => {
  const [form, setForm]       = useState({ name: '', topic: TOPICS[0], message: '' });
  const [errors, setErrors]   = useState({ name: '' });
  const [isHovering, setIsHovering] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === 'name') setErrors((prev) => ({ ...prev, name: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setErrors({ name: 'El nombre es obligatorio.' });
      return;
    }

    const lines = [
      `Hola Adolfo, necesito coordinar una evaluación técnica.`,
      ``,
      `*Nombre:* ${form.name.trim()}`,
      `*Tipo de problema:* ${form.topic}`,
      ``,
      form.message.trim()
        ? `*Detalles:* ${form.message.trim()}`
        : `Me gustaría coordinar una visita a la brevedad.`,
    ];

    const url = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank');
    setForm({ name: '', topic: TOPICS[0], message: '' });
  };

  return (
    <section id="contacto" className="py-32 bg-transparent relative overflow-hidden scroll-mt-24">
      {/* Background Decorators for Light Theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary/5 rounded-[100%] blur-[100px] pointer-events-none opacity-60" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-sm flex items-center gap-2">
              <Zap size={16} /> Evaluación Técnica
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6"
          >
            Agenda tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic font-serif">diagnóstico.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-600 text-lg leading-relaxed max-w-2xl"
          >
            El tiempo es clave para evitar daños estructurales mayores. Completa la información y coordinaremos una visita experta hoy mismo. Presupuesto sin compromiso.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">

          {/* ── Left: Premium Form (Spans 7 cols) ── */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white border border-slate-200 rounded-[2rem] p-8 sm:p-12 shadow-xl shadow-slate-200/50 h-full flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Nombre */}
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre de contacto <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-base outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/20"
                    placeholder="Tu nombre completo"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 absolute">{errors.name}</p>}
                </div>

                {/* Tipo de problema */}
                <div className="relative">
                  <label htmlFor="topic" className="block text-sm font-medium text-slate-700 mb-2">
                    Naturaleza del problema
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-base outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/20 appearance-none cursor-pointer"
                  >
                    {TOPICS.map((t) => (
                      <option key={t} value={t} className="bg-white text-slate-900">{t}</option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Detalles adicionales (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-base outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/20 resize-none"
                    placeholder="Describe brevemente la filtración..."
                  />
                </div>
              </div>

              <div className="mt-12">
                <button
                  type="submit"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 sm:py-5 rounded-2xl transition-all flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-[0_10px_30px_rgba(15,90,59,0.3)] text-sm sm:text-base lg:text-lg group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  <WhatsAppIcon size={18} className="shrink-0" />
                  <span className="whitespace-nowrap">Solicitar Evaluación Inmediata</span>
                  <motion.div animate={{ x: isHovering ? 5 : 0 }} transition={{ type: "spring" }} className="shrink-0">
                    <ArrowRight size={16} />
                  </motion.div>
                </button>
                <p className="text-xs text-slate-500 text-center mt-4 font-medium">
                  Se abrirá WhatsApp de forma segura. No guardamos tus datos.
                </p>
              </div>
            </form>
          </motion.div>

          {/* ── Right: Info Terminal (Spans 5 cols) ── */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Contact Card */}
            <div className="bg-primary border border-primary-dark p-8 rounded-[2rem] shadow-xl relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/30 rounded-full blur-[40px]" />
              <h3 className="text-white text-xl font-bold mb-8 relative z-10">Canales Directos</h3>
              
              <div className="space-y-6 relative z-10">
                <a
                  href={`https://wa.me/${PHONE_RAW}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 group"
                >
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-all backdrop-blur-sm border border-white/20">
                    <WhatsAppIcon size={24} />
                  </div>
                  <div>
                    <p className="text-primary-100 text-sm mb-1 opacity-80">Respuesta rápida</p>
                    <p className="text-white font-bold text-lg group-hover:text-secondary-100 transition-colors">{PHONE_LABEL}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-all backdrop-blur-sm border border-white/20">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-primary-100 text-sm mb-1 opacity-80">Consultas corporativas</p>
                    <p className="text-white font-bold text-sm sm:text-base group-hover:text-secondary-100 transition-colors">{EMAIL}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Coverage Card */}
            <div className="bg-white border border-slate-200 p-8 rounded-[2rem] flex-1 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-slate-900 text-xl font-bold mb-1">Cobertura</h3>
                  <p className="text-slate-500 text-sm">Operación en Gran Concepción</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {zones.map((zone) => (
                  <span
                    key={zone}
                    className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:bg-primary/5 transition-colors"
                  >
                    {zone}
                  </span>
                ))}
              </div>
            </div>

            {/* Schedule Note */}
            <div className="flex items-center gap-4 bg-primary/5 border border-primary/10 p-6 rounded-[2rem]">
              <Clock size={24} className="text-primary shrink-0" />
              <p className="text-sm text-slate-600">
                <strong className="text-slate-900 block mb-1">Horario de Operaciones</strong>
                Atención a convenir de Lunes a Sábado. Respuesta prioritaria ante emergencias.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
