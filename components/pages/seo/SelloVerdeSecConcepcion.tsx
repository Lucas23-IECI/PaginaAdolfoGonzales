import React, { useState } from 'react';
import SEOLanding from '../SEOLanding';
import { 
  ShieldCheck, FileText, AlertTriangle, ClipboardCheck, Wrench, XCircle, FileSignature,
  Phone, MessageCircle, Star, ChevronDown, CheckCircle, MapPin, Wind, Flame, Zap, ArrowRight, Camera
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AccordionItem = ({ question, shortAnswer, longAnswer, icon: Icon }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:border-primary transition-all overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex items-start justify-between text-left focus:outline-none"
      >
        <div className="flex items-start gap-4">
          <div className="bg-slate-100 p-2 rounded-lg text-slate-700 shrink-0">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mt-1">{question}</h3>
        </div>
        <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 mt-1 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pt-4 border-t border-slate-100">
          <p className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2 text-primary">Respuesta Directa</p>
          <p className="text-slate-700 mb-4 font-medium bg-slate-50 p-4 rounded-lg border border-slate-100">{shortAnswer}</p>
          <p className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2 text-primary">Detalle Técnico</p>
          <p className="text-slate-600 text-sm leading-relaxed">{longAnswer}</p>
        </div>
      </div>
    </div>
  );
};

const CTASection = ({ title, subtitle, primaryText, secondaryText }: any) => (
  <div className="bg-slate-900 rounded-2xl p-8 md:p-12 shadow-xl text-center my-12 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-50"></div>
    <div className="relative z-10">
      <h3 className="text-3xl font-extrabold text-white mb-4">{title}</h3>
      <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="tel:+56966795221" className="bg-primary text-white font-bold py-3 px-8 rounded-xl flex items-center gap-2 hover:bg-emerald-600 transition-colors w-full sm:w-auto justify-center shadow-lg">
          <Phone className="w-5 h-5" /> {primaryText}
        </a>
        <a href="https://wa.me/56966795221" target="_blank" rel="noreferrer" className="bg-[#25D366] text-white font-bold py-3 px-8 rounded-xl flex items-center gap-2 hover:bg-[#20bd5a] transition-colors w-full sm:w-auto justify-center shadow-lg">
          <MessageCircle className="w-5 h-5" /> {secondaryText}
        </a>
      </div>
    </div>
  </div>
);

const SelloVerdeSecConcepcion: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.deteccionesadolfogonzales.cl/#localbusiness",
        "name": "Adolfo González | Gasfitería y Certificación SEC",
        "url": "https://www.deteccionesadolfogonzales.cl",
        "telephone": "+56966795221",
        "image": "https://www.deteccionesadolfogonzales.cl/logo.png",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Concepción Centro",
          "addressLocality": "Concepción",
          "addressRegion": "Biobío",
          "addressCountry": "CL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -36.8201,
          "longitude": -73.0444
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      {
        "@type": "Service",
        "name": "Obtención y Normalización de Sello Verde SEC en Concepción",
        "provider": { "@id": "https://www.deteccionesadolfogonzales.cl/#localbusiness" },
        "areaServed": ["Concepción", "San Pedro de la Paz", "Talcahuano", "Chiguayante", "Hualpén"],
        "description": "Servicio de normalización de instalaciones de gas y certificación para la obtención del Sello Verde SEC en la Región del Biobío."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.deteccionesadolfogonzales.cl/" },
          { "@type": "ListItem", "position": 2, "name": "Sello Verde SEC", "item": "https://www.deteccionesadolfogonzales.cl/sello-verde-sec-concepcion" }
        ]
      },
      {
        "@type": "HowTo",
        "name": "Proceso de Certificación de Sello Verde SEC",
        "description": "Pasos para normalizar y certificar una instalación de gas domiciliaria o comercial.",
        "step": [
          { "@type": "HowToStep", "name": "Pre-Inspección", "text": "Evaluación técnica de la red actual, revisión de calefones, conductos y celosías." },
          { "@type": "HowToStep", "name": "Proyecto de Modificación", "text": "Rediseño de cañerías e isométricos para cumplir el Decreto Supremo N° 66." },
          { "@type": "HowToStep", "name": "Obra de Normalización", "text": "Ejecución de cambios físicos: soldadura, cambio de llaves de paso y ventilaciones." },
          { "@type": "HowToStep", "name": "Prueba de Hermeticidad", "text": "Inyección de aire presurizado con manómetro para descartar fugas previo al TC6." }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Qué significa sello amarillo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Indica defectos menores (ej: ventilación pequeña) sin riesgo letal inminente. Otorga un plazo para corregir antes de que corten el gas."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué significa sello rojo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Advertencia máxima por riesgo vital (fugas o monóxido). La empresa distribuidora corta inmediatamente el suministro por ley."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cómo recuperar el sello verde?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Un instalador autorizado SEC debe normalizar la red corrigiendo los defectos, realizar prueba de hermeticidad y recertificar mediante el Anexo TC6."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuánto demora la certificación?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Si no hay problemas, unas horas. Si requiere normalización u obras, entre 1 a 3 días físicos, más el plazo de inscripción administrativa SEC."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué documentos se necesitan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Planos isométricos de la red, memoria de cálculo, certificados de artefactos y la firma digital (Anexo TC6) del Instalador Autorizado."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué revisa la SEC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Estanqueidad 100% de la red (cero fugas), volumen del recinto, calidad de soldaduras, tiro del calefón y ventilación cruzada (celosías)."
            }
          },
          {
            "@type": "Question",
            "name": "¿Es obligatorio tener Sello Verde SEC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí. Todo edificio o local conectado a gas debe renovarlo periódicamente para asegurar seguridad pública. Los seguros exigen su vigencia."
            }
          },
          {
            "@type": "Question",
            "name": "¿Puede un gasfiter normal darme el sello?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Solo instaladores con licencia vigente de la Superintendencia de Electricidad y Combustibles pueden firmar documentos TC6."
            }
          }
        ]
      }
    ]
  };

  const content = (
    <div className="w-full">
      
      {/* Metrics Section (Clear) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 -mt-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-slate-100 p-3 rounded-lg text-slate-700"><ClipboardCheck className="w-6 h-6" /></div>
          <div><p className="text-2xl font-extrabold text-slate-900">+500</p><p className="text-slate-500 text-sm font-medium">Recintos regularizados</p></div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-slate-100 p-3 rounded-lg text-slate-700"><ShieldCheck className="w-6 h-6" /></div>
          <div><p className="text-2xl font-extrabold text-slate-900">TC6</p><p className="text-slate-500 text-sm font-medium">Anexos Tramitados</p></div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-slate-100 p-3 rounded-lg text-slate-700"><Star className="w-6 h-6" /></div>
          <div><p className="text-2xl font-extrabold text-slate-900">100%</p><p className="text-slate-500 text-sm font-medium">Aprobación Técnica</p></div>
        </div>
      </div>

      {/* SECCIÓN 1: H2 Normalización de Instalaciones de Gas (Clear Cards) */}
      <div className="mb-12">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Normalización de Instalaciones de Gas</h2>
          <p className="text-slate-600 text-lg max-w-3xl">
            Corregimos y adaptamos tu red de gas para cumplir al 100% con la normativa estatal, garantizando la seguridad absoluta de los residentes y evitando bloqueos de suministro.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: AlertTriangle, title: 'Sello Amarillo o Rojo', desc: 'Levantamiento inmediato de observaciones técnicas.' },
            { icon: Zap, title: 'Pruebas de Hermeticidad', desc: 'Test de presión digital para asegurar cero fugas.' },
            { icon: Flame, title: 'Reubicación Calefones', desc: 'Traslado de equipos mal instalados en baños o sin ductos.' },
            { icon: Wind, title: 'Ventilación Normativa', desc: 'Instalación de celosías calculadas para reposición de aire.' },
            { icon: Wrench, title: 'Tuberías a la Vista', desc: 'Soldadura fuerte en redes de cobre expuestas.' },
            { icon: FileSignature, title: 'Trámite Completo', desc: 'Gestión directa del Anexo TC6 ante el Ministerio.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="bg-slate-50 text-primary p-3 rounded-lg shrink-0">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dark CTA */}
      <CTASection 
        title="¿La empresa de gas cortó tu suministro?" 
        subtitle="Contrata a un especialista autorizado para devolver la legalidad y servicio a tu hogar."
        primaryText="Solicitar Normalización"
        secondaryText="Hablar por WhatsApp"
      />

      {/* SECCIÓN 2: H2 Proceso de Certificación SEC (Gray Timeline) */}
      <div className="mb-12 bg-slate-50 p-8 rounded-2xl border border-slate-200">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Proceso de Certificación SEC</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { num: '1', title: 'Auditoría', desc: 'Identificamos las causales de rechazo en tu instalación.' },
            { num: '2', title: 'Planimetría', desc: 'Trazamos isométricos nuevos cumpliendo el Decreto N°66.' },
            { num: '3', title: 'Ejecución', desc: 'Modificación física de tuberías, válvulas y celosías.' },
            { num: '4', title: 'Validación', desc: 'Firma oficial y entrega del Sello Verde aprobado.' }
          ].map((step, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative">
              <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold mb-3">
                {step.num}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN 3: H2 Recuperación de Sello Verde Rechazado (Clear Benefits) */}
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Recuperación de Sello Verde Rechazado</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4">
            <XCircle className="text-red-500 w-6 h-6 shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Riesgo Penal y Seguro</h3>
              <p className="text-slate-600 text-sm">Operar sin Sello Verde invalida las pólizas de seguro contra incendios de tu comunidad en caso de siniestro.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4">
            <XCircle className="text-red-500 w-6 h-6 shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Bloqueo de Venta</h3>
              <p className="text-slate-600 text-sm">Notarías y bancos exigen el certificado SEC al día como requisito intransable para compras hipotecarias.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4">
            <CheckCircle className="text-emerald-500 w-6 h-6 shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Solución Técnica Directa</h3>
              <p className="text-slate-600 text-sm">Convertimos las "observaciones" del rechazo en planos de acción, corrigiendo conductos y redes en tiempo récord.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4">
            <CheckCircle className="text-emerald-500 w-6 h-6 shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Garantía de Aprobación</h3>
              <p className="text-slate-600 text-sm">No abandonamos la obra hasta que la entidad certificadora apruebe satisfactoriamente nuestras modificaciones.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 4: Prueba Social (Photo Placeholders) */}
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Instalaciones Regularizadas Recientemente</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
            <div className="h-40 bg-slate-200 flex items-center justify-center text-slate-400">
              <Camera className="w-8 h-8" />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-slate-900 text-sm">Edificio Centro</h4>
              <p className="text-slate-500 text-xs mt-1">Normalización de 40 departamentos. Levantamiento de Sello Rojo.</p>
            </div>
          </div>
          <div className="bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
            <div className="h-40 bg-slate-200 flex items-center justify-center text-slate-400">
              <Camera className="w-8 h-8" />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-slate-900 text-sm">Reubicación Calefón</h4>
              <p className="text-slate-500 text-xs mt-1">Traslado desde baño a logia con ducto a normativa exterior.</p>
            </div>
          </div>
          <div className="bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
            <div className="h-40 bg-slate-200 flex items-center justify-center text-slate-400">
              <Camera className="w-8 h-8" />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-slate-900 text-sm">Local Gastronómico</h4>
              <p className="text-slate-500 text-xs mt-1">Cálculo de volumen y celosías en cocina industrial. Sello Verde.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dark EEAT: H2 Instalador Autorizado SEC */}
      <div className="mb-12 bg-slate-900 rounded-2xl p-8 md:p-12 text-white shadow-xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">Instalador Autorizado SEC</h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Trabajar redes de gas es una labor de alta ingeniería. Todo instalador debe portar su credencial vigente de la Superintendencia de Electricidad y Combustibles para validar planos isométricos y someter las matrices a inyecciones manométricas extremas.
            </p>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-primary w-6 h-6" />
              <span className="font-bold">Licencia Estatal Activa - Clase Oficial</span>
            </div>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <h4 className="font-bold mb-4 text-primary">Nuestras Competencias</h4>
            <div className="grid grid-cols-1 gap-3 text-sm text-slate-300">
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Memorias de cálculo y volumen volumétrico</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Trazado de planimetría isométrica TC6</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Auditoría con manómetro de alta precisión</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Conocimiento riguroso Decreto Supremo N°66</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gray FAQ */}
      <div className="mb-12 bg-slate-50 p-8 rounded-2xl border border-slate-200">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">Consultas Frecuentes</h2>
        <div className="space-y-3 max-w-3xl mx-auto">
          <AccordionItem 
            icon={ShieldCheck}
            question="¿Qué significa sello amarillo?"
            shortAnswer="Defectos menores. Permite uso temporal del gas, pero exige corrección obligatoria antes de un plazo límite o cortarán el suministro."
            longAnswer="Por ejemplo, se otorga si la ventilación inferior de la cocina es un poco más pequeña de lo exigido. Si no subsanas las observaciones dentro del período estipulado mediante un profesional certificado, el dictamen pasará a ser rojo irrevocable."
          />
          <AccordionItem 
            icon={AlertTriangle}
            question="¿Qué significa sello rojo?"
            shortAnswer="Riesgo vital. Fugas activas o ahogamiento térmico por falta de tiraje. Provoca el corte inmediato y sellado del medidor."
            longAnswer="Indica que la vivienda representa un peligro. Ocurre por roturas de matrices que filtran gas combustible o instalación ilegal de calefones en baños. Únicamente se repondrá el acceso cuando un experto modernice la infraestructura."
          />
          <AccordionItem 
            icon={Wrench}
            question="¿Cómo recuperar el sello verde?"
            shortAnswer="Un instalador autorizado SEC debe realizar un proyecto de normalización, corregir fallas y presentar la recertificación (Anexo TC6)."
            longAnswer="No lo puede hacer un gasfiter no certificado. Nosotros diseñamos un trazado de modificación, compramos el material exigido (soldaduras fuertes, cobre grueso) y rectificamos la falla para citar a la empresa certificadora."
          />
          <AccordionItem 
            icon={FileText}
            question="¿Puede un gasfiter normal darme el sello?"
            shortAnswer="No. Ningún gasfiter sin licencia SEC puede tramitar ni firmar documentos de Sello Verde. El Estado rechazará la documentación."
            longAnswer="Contratar a técnicos inescrupulosos que ofrecen una certificación veloz mediante contactos informales es altamente riesgoso. La SEC cruza RUTs y registros; si quien firma no está autorizado, anularán la gestión burocrática."
          />
        </div>
      </div>

      {/* Interlinking */}
      <div className="mb-12">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Otros Servicios</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link to="/gasfiter-certificado-concepcion" className="bg-white p-5 rounded-xl border border-slate-200 hover:border-slate-400 transition-all flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900">Gasfiter Certificado</h3>
              <p className="text-slate-500 text-sm">Reparaciones de urgencia.</p>
            </div>
            <ArrowRight className="text-slate-400" />
          </Link>
          <Link to="/deteccion-fugas-agua-concepcion" className="bg-white p-5 rounded-xl border border-slate-200 hover:border-slate-400 transition-all flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900">Detección de Fugas</h3>
              <p className="text-slate-500 text-sm">Localización de agua sin romper.</p>
            </div>
            <ArrowRight className="text-slate-400" />
          </Link>
        </div>
      </div>

      {/* CTA Final */}
      <CTASection 
        title="¿Sello de gas vencido o rechazado?" 
        subtitle="Un Instalador Autorizado SEC gestionará y resolverá el problema rápidamente."
        primaryText="Agendar Evaluación"
        secondaryText="Cotizar por WhatsApp"
      />
    </div>
  );

  return (
    <SEOLanding
      seoTitle="Sello Verde SEC Concepción | Normalización de Instalaciones"
      seoDescription="Normalización de instalaciones de gas y obtención del Sello Verde SEC en Concepción. Somos instaladores autorizados SEC expertos en pruebas de hermeticidad."
      canonicalUrl="https://www.deteccionesadolfogonzales.cl/sello-verde-sec-concepcion"
      schema={schema}
      h1="Sello Verde SEC y Normalización de Instalaciones en Concepción"
      heroText="Asegura el funcionamiento legal de tu hogar con instaladores autorizados SEC. Tramitamos tu Sello Verde y reparamos matrices cortadas en la Región del Biobío."
      content={content}
    />
  );
};

export default SelloVerdeSecConcepcion;
