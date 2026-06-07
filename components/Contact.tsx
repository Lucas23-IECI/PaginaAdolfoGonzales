import React, { useState } from 'react';
import { Mail, MapPin, Clock, ArrowRight, Zap, CheckCircle } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { motion } from 'framer-motion';

const PHONE_RAW   = '56966795221';
const EMAIL       = 'adolfogsoto29@gmail.com';

interface Zone {
  name: string;
  highlight?: boolean;
}

const zones: Zone[] = [
  { name: 'Concepción', highlight: true },
  { name: 'San Pedro de la Paz', highlight: true },
  { name: 'Talcahuano', highlight: true },
  { name: 'Chiguayante', highlight: true },
  { name: 'Hualpén', highlight: true },
  { name: 'Penco', highlight: true },
  { name: 'Tomé', highlight: true },
  { name: 'Lota', highlight: true },
  { name: 'Hualqui', highlight: true },
  { name: 'Lomas San Sebastián', highlight: true },
  { name: 'Lomas San Andrés', highlight: true },
];

const TOPICS = [
  'Filtración de agua oculta (medidor gira)',
  'Filtración en losa o piso radiante',
  'Fuga en cañería interior (muro/cielo)',
  'Rotura en matriz exterior o jardín',
  'Certificación SEC / Instalación de Gas',
  'No estoy seguro, necesito diagnóstico',
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
      setErrors({ name: 'El nombre es obligatorio para agendar.' });
      return;
    }

    const lines = [
      `🚨 *SOLICITUD DE EVALUACIÓN TÉCNICA* 🚨`,
      ``,
      `*Cliente:* ${form.name.trim()}`,
      `*Servicio requerido:* ${form.topic}`,
      ``,
      form.message.trim()
        ? `*Notas del problema:* ${form.message.trim()}`
        : `*Notas:* Solicito coordinación prioritaria para detectar filtración.`,
    ];

    const url = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank');
    setForm({ name: '', topic: TOPICS[0], message: '' });
  };

  return (
    <section id="contacto" className="py-32 bg-transparent relative overflow-hidden scroll-mt-24">
      {/* Background Decorators */}
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
              <Zap size={16} /> Contacto Inmediato
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6"
          >
            Contacto con <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic font-serif">Gasfiter en Concepción</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-600 text-lg leading-relaxed max-w-2xl font-medium"
          >
            Atendemos urgencias ante cualquier <strong className="text-slate-900 font-bold">filtración de agua</strong> con tecnología no destructiva. Ingresa tus datos para derivar tu caso inmediatamente al equipo en terreno en el Gran Concepción.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">

          {/* ── Left: Formulario de Alta Conversión (7 cols) ── */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white border border-slate-200 rounded-[2.5rem] p-8 sm:p-12 shadow-xl shadow-slate-200/40 h-full flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Nombre */}
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-bold text-slate-800 mb-2">
                    Tu Nombre o Empresa <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 text-base font-medium outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/20 focus:bg-white"
                    placeholder="Ej. Juan Pérez"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 absolute">{errors.name}</p>}
                </div>

                {/* Tipo de problema */}
                <div className="relative">
                  <label htmlFor="topic" className="block text-sm font-bold text-slate-800 mb-2">
                    ¿Qué tipo de problema presentas?
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 text-base font-medium outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/20 appearance-none cursor-pointer focus:bg-white"
                  >
                    {TOPICS.map((t) => (
                      <option key={t} value={t} className="bg-white text-slate-900">{t}</option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-bold text-slate-800 mb-2">
                    Detalles adicionales de la fuga (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 text-base font-medium outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/20 resize-none focus:bg-white"
                    placeholder="Indica si es casa o departamento, hace cuánto notas la filtración, etc."
                  />
                </div>
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="w-full bg-primary hover:bg-[#c2410c] text-white font-black py-4 px-4 sm:py-5 sm:px-6 rounded-2xl transition-all flex items-center justify-center gap-2 sm:gap-3 shadow-xl shadow-primary/20 text-sm sm:text-lg group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  <WhatsAppIcon size={22} className="shrink-0" />
                  <span className="text-center leading-tight">Enviar a WhatsApp Inmediatamente</span>
                  <motion.div animate={{ x: isHovering ? 5 : 0 }} transition={{ type: "spring" }} className="shrink-0">
                    <ArrowRight size={18} />
                  </motion.div>
                </button>
                <p className="text-xs text-slate-500 text-center mt-3 font-medium">
                  Atención prioritaria. Serás redirigido a nuestro chat oficial al instante.
                </p>
              </div>
            </form>
          </motion.div>

          {/* ── Right: Bloque de Cobertura y Contacto (5 cols) ── */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6 justify-between"
          >
            {/* Tarjeta de Cobertura Geográfica Premium */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden flex-1 flex flex-col justify-between">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/20 rounded-full blur-[50px] pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/20 p-3 rounded-2xl text-primary border border-primary/30">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-black tracking-tight">Gran Concepción</h3>
                    <p className="text-xs text-slate-400 font-medium">Despliegue de unidades móviles</p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  Garantizamos tiempos de respuesta optimizados cubriendo de manera directa los sectores clave de la Región del Biobío:
                </p>
                
                {/* Listado de comunas solicitadas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {zones.map((zone) => (
                    <div 
                      key={zone.name}
                      className={`flex items-center gap-2 p-2.5 rounded-xl border transition-colors ${
                        zone.highlight 
                          ? 'bg-white/5 border-primary/30 text-white font-bold' 
                          : 'bg-transparent border-slate-800 text-slate-400 font-medium'
                      }`}
                    >
                      <CheckCircle size={14} className={zone.highlight ? 'text-primary shrink-0' : 'text-slate-600 shrink-0'} />
                      <span className="text-xs sm:text-sm tracking-tight">{zone.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nota inferior de cobertura */}
              <div className="pt-4 border-t border-slate-800/80 text-center sm:text-left">
                <span className="text-[11px] text-slate-400 block font-medium">
                  ¿Tu comuna no está en la lista? Consulta disponibilidad técnica por interno.
                </span>
              </div>
            </div>

            {/* Alternativas de Contacto Directo */}
            <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-[2.5rem] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="w-12 h-12 bg-slate-50 text-slate-700 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Correo Corporativo</p>
                  <a href={`mailto:${EMAIL}`} className="text-sm sm:text-base font-extrabold text-slate-900 hover:text-primary transition-colors">
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="h-8 w-px bg-slate-200 hidden sm:block" />

              <div className="flex items-center gap-2 text-slate-600 text-xs font-bold bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100">
                <Clock size={16} className="text-primary shrink-0" />
                <span>Lun a Sáb</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
