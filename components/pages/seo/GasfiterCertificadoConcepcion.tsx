import React, { useState } from 'react';
import SEOLanding from '../SEOLanding';
import { 
  Wrench, MapPin, Clock, Droplet, CheckCircle, PenTool, Shield, 
  Phone, MessageCircle, Star, ChevronDown, Activity, ShieldAlert,
  ArrowRight, Flame, Bath, Trash2, Home, Camera
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

const GasfiterCertificadoConcepcion: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.deteccionesadolfogonzales.cl/#localbusiness",
        "name": "Adolfo González | Gasfitería Especializada",
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
        "name": "Gasfiter Certificado en Concepción",
        "provider": { "@id": "https://www.deteccionesadolfogonzales.cl/#localbusiness" },
        "areaServed": ["Concepción", "San Pedro de la Paz", "Talcahuano", "Chiguayante", "Hualpén"],
        "description": "Reparación de cañerías, emergencias de plomería e instalaciones sanitarias por gasfiter autorizado SEC."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.deteccionesadolfogonzales.cl/" },
          { "@type": "ListItem", "position": 2, "name": "Gasfiter Certificado", "item": "https://www.deteccionesadolfogonzales.cl/gasfiter-certificado-concepcion" }
        ]
      },
      {
        "@type": "HowTo",
        "name": "Reparación de Cañerías de Cobre",
        "description": "Método profesional de soldadura para reparar matrices reventadas.",
        "step": [
          { "@type": "HowToStep", "name": "Corte de suministro", "text": "Cierre de la válvula general para aislar la presión de la casa." },
          { "@type": "HowToStep", "name": "Corte del tramo", "text": "Extracción de la tubería oxidada o reventada usando cortatubo." },
          { "@type": "HowToStep", "name": "Soldadura de Plata", "text": "Unión por capilaridad a alta temperatura con soplete y estaño-plata." },
          { "@type": "HowToStep", "name": "Prueba de presión", "text": "Apertura de válvulas para confirmar estanqueidad 100% libre de gotas." }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Qué soluciona un gasfiter a domicilio?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Llaves que gotean, destape de alcantarillados, filtraciones en cocinas o baños, instalación de WC y reparación de cañerías averiadas."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cómo realizan la reparación de cañerías?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cortando el tramo averiado y sustituyéndolo mediante soldadura de plata para cobre o termofusión para PPR, asegurando presión máxima."
            }
          },
          {
            "@type": "Question",
            "name": "¿Por qué buscar un gasfiter certificado?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Garantiza que la obra cumpla normativas SEC de hermeticidad. Un experto evita explosiones de calefones o inundaciones por soldaduras frías."
            }
          },
          {
            "@type": "Question",
            "name": "¿Atienden urgencias de gasfitería?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí. Acudimos velozmente ante inundaciones por matrices colapsadas o bloqueos severos de alcantarillado, cortando el problema de raíz."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuánto cuesta la visita de un gasfiter?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depende de la comuna. El valor cubre el diagnóstico en terreno, entregando un presupuesto exacto antes de realizar cualquier intervención física."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué materiales utilizan en las reparaciones?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cobre tipo L para alta presión, conexiones de bronce pesado, pegamentos industriales de PVC y soldadura fuerte estructural."
            }
          },
          {
            "@type": "Question",
            "name": "¿Instalan equipos como calefones o WC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí. Montamos calefones, termos, inodoros, vanitorios y grifería, respetando los sellos de cera y masillas para evitar malos olores posteriores."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuentan con herramientas para destapes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí. Usamos sondas eléctricas rotativas que barren grasa y raíces. Nunca aplicamos ácidos corrosivos que derriten el PVC domiciliario."
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
          <div className="bg-slate-100 p-3 rounded-lg text-slate-700"><Star className="w-6 h-6" /></div>
          <div><p className="text-2xl font-extrabold text-slate-900">+500</p><p className="text-slate-500 text-sm font-medium">Instalaciones</p></div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-slate-100 p-3 rounded-lg text-slate-700"><ShieldAlert className="w-6 h-6" /></div>
          <div><p className="text-2xl font-extrabold text-slate-900">SEC</p><p className="text-slate-500 text-sm font-medium">Acreditación Legal</p></div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-slate-100 p-3 rounded-lg text-slate-700"><Clock className="w-6 h-6" /></div>
          <div><p className="text-2xl font-extrabold text-slate-900">24/7</p><p className="text-slate-500 text-sm font-medium">Disponibilidad Urgencias</p></div>
        </div>
      </div>

      {/* SECCIÓN 1: H2 Gasfiter Certificado (Clear Cards) */}
      <div className="mb-12">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Gasfiter Certificado en Concepción</h2>
          <p className="text-slate-600 text-lg max-w-3xl">
            Soluciones inmediatas para problemas sanitarios, térmicos y de gas. Trabajo garantizado por técnicos acreditados ante la SEC.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Droplet, title: 'Fugas y Goteos', desc: 'Sustitución de llaves y sellos deteriorados.' },
            { icon: Wrench, title: 'Reparación Cañerías', desc: 'Soldadura de plata para matrices reventadas.' },
            { icon: Flame, title: 'Calefones', desc: 'Instalación y mantención bajo norma chilena.' },
            { icon: Bath, title: 'Artefactos Sanitarios', desc: 'Montaje hermético de WC y lavamanos.' },
            { icon: Trash2, title: 'Destapes Severos', desc: 'Sondas eléctricas para alcantarillado bloqueado.' },
            { icon: Activity, title: 'Baja Presión', desc: 'Instalación de bombas y redimensionamiento.' }
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
        title="¿Problemas de fontanería urgentes?" 
        subtitle="Un gasfiter a domicilio resolverá la avería en la primera visita."
        primaryText="Solicitar Visita"
        secondaryText="Escribir al WhatsApp"
      />

      {/* SECCIÓN 2: H2 Reparación de Cañerías (Gray Timeline) */}
      <div className="mb-12 bg-slate-50 p-8 rounded-2xl border border-slate-200">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Reparación de Cañerías</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { num: '1', title: 'Corte Rápido', desc: 'Cerramos la válvula matriz aislando el daño.' },
            { num: '2', title: 'Extracción', desc: 'Retiramos el cobre o PVC fracturado por presión.' },
            { num: '3', title: 'Termofusión', desc: 'Soldadura industrial para unir los repuestos nuevos.' },
            { num: '4', title: 'Verificación', desc: 'Prueba hidráulica para certificar cero gotas.' }
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

      {/* SECCIÓN 3: H2 Instalaciones Sanitarias (Clear Benefits) */}
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Instalaciones Sanitarias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4">
            <CheckCircle className="text-primary w-6 h-6 shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Cero Filtraciones</h3>
              <p className="text-slate-600 text-sm">Instalación de WC y tinas con sellos de masilla poliuretano, impidiendo malos olores y pudrición.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4">
            <CheckCircle className="text-primary w-6 h-6 shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Insumos Premium</h3>
              <p className="text-slate-600 text-sm">Solo utilizamos repuestos homologados, llaves pesadas de bronce y cobre tipo L resistente a impactos.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4">
            <CheckCircle className="text-primary w-6 h-6 shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Certificación SEC</h3>
              <p className="text-slate-600 text-sm">Montaje de calefones y termos eléctricos siguiendo los rígidos parámetros de ventilación estatal.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4">
            <CheckCircle className="text-primary w-6 h-6 shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Garantía Escrita</h3>
              <p className="text-slate-600 text-sm">Todo nuestro trabajo manual está respaldado. No hacemos arreglos temporales o con huincha adhesiva.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 4: Prueba Social (Photo Placeholders) */}
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Trabajos Realizados Recientemente</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
            <div className="h-40 bg-slate-200 flex items-center justify-center text-slate-400">
              <Camera className="w-8 h-8" />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-slate-900 text-sm">Montaje de Calefón SEC</h4>
              <p className="text-slate-500 text-xs mt-1">Conexión de gas certificada. Chiguayante.</p>
            </div>
          </div>
          <div className="bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
            <div className="h-40 bg-slate-200 flex items-center justify-center text-slate-400">
              <Camera className="w-8 h-8" />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-slate-900 text-sm">Destape Alcantarillado</h4>
              <p className="text-slate-500 text-xs mt-1">Uso de sonda eléctrica rotativa. Lomas de San Andrés.</p>
            </div>
          </div>
          <div className="bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
            <div className="h-40 bg-slate-200 flex items-center justify-center text-slate-400">
              <Camera className="w-8 h-8" />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-slate-900 text-sm">Cambio Red Cobre</h4>
              <p className="text-slate-500 text-xs mt-1">Soldadura de matriz dañada por helada. Concepción.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dark EEAT: H2 Emergencias de Gasfitería */}
      <div className="mb-12 bg-slate-900 rounded-2xl p-8 md:p-12 text-white shadow-xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">Emergencias de Gasfitería</h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Las tuberías reventadas y olores a gas no pueden esperar a mañana. Nuestro vehículo taller cuenta con stock de cañerías PPR, cobre, válvulas y soldaduras para contener la inundación o fuga en el mismo instante de la visita.
            </p>
            <div className="flex items-center gap-3">
              <ShieldAlert className="text-primary w-6 h-6" />
              <span className="font-bold">Protocolos de Contención Inmediata</span>
            </div>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <h4 className="font-bold mb-4 text-primary">Nuestra Cobertura Rápida</h4>
            <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Concepción</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> San Pedro</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Talcahuano</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Chiguayante</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Hualpén</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Penco</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gray FAQ */}
      <div className="mb-12 bg-slate-50 p-8 rounded-2xl border border-slate-200">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">Consultas Frecuentes</h2>
        <div className="space-y-3 max-w-3xl mx-auto">
          <AccordionItem 
            icon={Wrench}
            question="¿Qué soluciona un gasfiter a domicilio?"
            shortAnswer="Todo tipo de fallas hidráulicas: goteos de llaves, inodoros obstruidos, fugas en cocinas y reemplazo de cañerías rotas."
            longAnswer="Reemplazamos gomas de estanques de baño, limpiamos sifones y destapamos matrices principales bloqueadas. Trabajamos la grifería protegiendo el mobiliario de la pudrición constante."
          />
          <AccordionItem 
            icon={Wrench}
            question="¿Cómo realizan la reparación de cañerías?"
            shortAnswer="Se corta el flujo, se extrae el tramo roto y se suelda cobre con plata o termofusión para tuberías PPR."
            longAnswer="No usamos parches temporales ni cintas de goma. Aislamos el agua, pulimos los extremos y soldamos coplas de unión nuevas que garantizan resistencia total a la presión de la matriz principal."
          />
          <AccordionItem 
            icon={Wrench}
            question="¿Por qué buscar un gasfiter certificado?"
            shortAnswer="Para cumplir la ley chilena de instalaciones. Un técnico SEC evita fugas letales de monóxido y soldaduras defectuosas."
            longAnswer="La certificación es otorgada por el Estado tras pruebas de mecánica de fluidos y seguridad. Improvisar dimensiones en calefones o gas es un riesgo mortal. Confíe solo en técnicos autorizados."
          />
          <AccordionItem 
            icon={Wrench}
            question="¿Atienden urgencias de gasfitería?"
            shortAnswer="Sí. Nuestro taller móvil cuenta con repuestos y soldadoras para detener filtraciones mayores en la primera visita."
            longAnswer="Instruimos telefónicamente sobre cómo cerrar válvulas maestras. Luego acudimos velozmente a Concepción o Talcahuano para reparar la matriz colapsada y restaurar el servicio básico del inmueble."
          />
        </div>
      </div>

      {/* Interlinking */}
      <div className="mb-12">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Otros Servicios</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link to="/deteccion-fugas-agua-concepcion" className="bg-white p-5 rounded-xl border border-slate-200 hover:border-slate-400 transition-all flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900">Detección de Fugas</h3>
              <p className="text-slate-500 text-sm">Localización acústica sin romper muros.</p>
            </div>
            <ArrowRight className="text-slate-400" />
          </Link>
          <Link to="/sello-verde-sec-concepcion" className="bg-white p-5 rounded-xl border border-slate-200 hover:border-slate-400 transition-all flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900">Sello Verde SEC</h3>
              <p className="text-slate-500 text-sm">Normalización oficial de red de gas.</p>
            </div>
            <ArrowRight className="text-slate-400" />
          </Link>
        </div>
      </div>

      {/* CTA Final */}
      <CTASection 
        title="¿Problemas con el agua o gas?" 
        subtitle="Solucionamos tu emergencia sanitaria con rapidez, repuestos de calidad y garantía formal."
        primaryText="Agendar Reparación"
        secondaryText="Cotizar por WhatsApp"
      />
    </div>
  );

  return (
    <SEOLanding
      seoTitle="Gasfiter a Domicilio y Gasfiter Certificado en Concepción"
      seoDescription="Gasfiter certificado a domicilio en Concepción, San Pedro y comunas. Especialistas en reparación de cañerías, fugas y emergencias de plomería y gas."
      canonicalUrl="https://www.deteccionesadolfogonzales.cl/gasfiter-certificado-concepcion"
      schema={schema}
      h1="Gasfiter a Domicilio y Gasfiter Certificado en Concepción"
      heroText="Asistencia técnica comercial y residencial para reparación de cañerías, destapes y montaje sanitario con la seguridad de un profesional autorizado SEC."
      content={content}
    />
  );
};

export default GasfiterCertificadoConcepcion;
