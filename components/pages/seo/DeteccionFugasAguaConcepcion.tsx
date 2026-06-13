import React, { useState } from 'react';
import SEOLanding from '../SEOLanding';
import { 
  Search, MapPin, Activity, CheckCircle, ShieldAlert, Droplets, 
  ArrowRight, Phone, MessageCircle, Star, Clock, Wrench, ChevronDown, 
  EyeOff, House, Factory, TreePine, CloudRain, Camera
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

const DeteccionFugasAguaConcepcion: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.deteccionesadolfogonzales.cl/#localbusiness",
        "name": "Adolfo González | Detección de Fugas y Gasfitería",
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
        "name": "Detección de Fugas de Agua en Concepción",
        "provider": { "@id": "https://www.deteccionesadolfogonzales.cl/#localbusiness" },
        "areaServed": ["Concepción", "San Pedro de la Paz", "Talcahuano", "Chiguayante", "Hualpén"],
        "description": "Servicio técnico especializado en localización de fugas de agua mediante ultrasonido y termografía en la Región del Biobío."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.deteccionesadolfogonzales.cl/" },
          { "@type": "ListItem", "position": 2, "name": "Detección de Fugas de Agua", "item": "https://www.deteccionesadolfogonzales.cl/deteccion-fugas-agua-concepcion" }
        ]
      },
      {
        "@type": "HowTo",
        "name": "Proceso de Detección de Fugas de Agua",
        "description": "Metodología técnica para encontrar fugas de agua ocultas sin romper.",
        "step": [
          { "@type": "HowToStep", "name": "Cierre de circuito", "text": "Aislar la red de agua cerrando llaves de paso para identificar la matriz afectada." },
          { "@type": "HowToStep", "name": "Escaneo Ultrasónico", "text": "Uso de geófono en pisos y muros para captar la frecuencia del agua escapando a presión." },
          { "@type": "HowToStep", "name": "Mapeo Termográfico", "text": "Uso de cámara infrarroja para detectar cambios de temperatura asociados a humedad oculta." },
          { "@type": "HowToStep", "name": "Apertura Milimétrica", "text": "Intervención exacta en el punto de falla para proceder a la soldadura y reparación." }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Cómo saber si existe una fuga de agua?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cierre todas las llaves y revise el medidor. Si sigue avanzando, hay fuga activa. Si el medidor no avanza pero hay humedad, la filtración proviene del alcantarillado."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuáles son los síntomas de una fuga de agua?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Humedad ascendente en muros, pisos inusualmente cálidos (losa radiante), desprendimiento de cerámicas y reducción de presión en llaves de agua."
            }
          },
          {
            "@type": "Question",
            "name": "¿Se puede detectar una fuga sin romper?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, utilizando geófonos acústicos y cámaras termográficas se aísla la ubicación exacta de la rotura, reduciendo la intervención a una sola cerámica."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuánto demora una detección?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "El diagnóstico toma entre 45 a 90 minutos dependiendo de la complejidad de la red domiciliaria. La reparación se realiza inmediatamente después."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué provoca una fuga oculta?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fatiga de material en cañerías antiguas, golpes de ariete por cambios bruscos de presión y movimientos sísmicos que trizan uniones soldadas."
            }
          },
          {
            "@type": "Question",
            "name": "¿Por qué aumenta la cuenta del agua?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Una fisura de 1mm bajo presión puede botar más de 300 litros diarios. Este consumo constante es registrado 24/7 por el medidor de la sanitaria."
            }
          },
          {
            "@type": "Question",
            "name": "¿Las fugas dañan los cimientos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí. El agua socava la arena bajo el radier, generando vacíos que provocan asentamientos estructurales y grietas en muros de carga."
            }
          },
          {
            "@type": "Question",
            "name": "¿Atienden emergencias?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, atendemos emergencias hidráulicas. Contamos con equipos de rastreo y soldadura para solucionar roturas matrices en la primera visita técnica."
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
          <div className="bg-slate-100 p-3 rounded-lg text-slate-700"><CheckCircle className="w-6 h-6" /></div>
          <div><p className="text-2xl font-extrabold text-slate-900">+500</p><p className="text-slate-500 text-sm font-medium">Fugas resueltas</p></div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-slate-100 p-3 rounded-lg text-slate-700"><MapPin className="w-6 h-6" /></div>
          <div><p className="text-2xl font-extrabold text-slate-900">+10</p><p className="text-slate-500 text-sm font-medium">Comunas cubiertas</p></div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-slate-100 p-3 rounded-lg text-slate-700"><Activity className="w-6 h-6" /></div>
          <div><p className="text-2xl font-extrabold text-slate-900">15</p><p className="text-slate-500 text-sm font-medium">Años de experiencia</p></div>
        </div>
      </div>

      {/* SECCIÓN 1: Detección de Fugas (Clear Cards) */}
      <div className="mb-12">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Detección de Fugas de Agua en Concepción</h2>
          <p className="text-slate-600 text-lg max-w-3xl">
            Solucionamos filtraciones de agua antes de que causen daños estructurales. Reconoce los síntomas a tiempo y evita cuentas de agua excesivas.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Activity, title: 'Cuenta Elevada', desc: 'Aumento injustificado en la facturación mensual.' },
            { icon: CloudRain, title: 'Humedad en Muros', desc: 'Pintura englobada y hongos en zócalos.' },
            { icon: Droplets, title: 'Mal Olor', desc: 'Aroma a encierro originado en filtraciones.' },
            { icon: ArrowRight, title: 'Baja Presión', desc: 'Pérdida de caudal en duchas y llaves.' },
            { icon: EyeOff, title: 'Goteos Ocultos', desc: 'Agua bajo cerámicas o piso flotante.' },
            { icon: Activity, title: 'Ruido Constante', desc: 'Sonido de agua corriendo con todo apagado.' }
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
        title="¿Sospechas de una filtración?" 
        subtitle="Intervenimos de inmediato para detener el daño en tu propiedad."
        primaryText="Solicitar Diagnóstico"
        secondaryText="Agendar Visita"
      />

      {/* SECCIÓN 2: Proceso (Gray Timeline) */}
      <div className="mb-12 bg-slate-50 p-8 rounded-2xl border border-slate-200">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-8">¿Cómo detectar una fuga sin romper?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { num: '1', title: 'Aislamiento', desc: 'Cortamos el circuito para identificar la matriz afectada.' },
            { num: '2', title: 'Ultrasonido', desc: 'Escaneo con geófono para captar la frecuencia del agua.' },
            { num: '3', title: 'Termografía', desc: 'Mapeo infrarrojo de humedad acumulada bajo radier.' },
            { num: '4', title: 'Intervención', desc: 'Apertura milimétrica, soldadura y prueba de presión.' }
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

      {/* SECCIÓN 3: Tecnología (Clear Benefits) */}
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Tecnología utilizada para localizar filtraciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4">
            <CheckCircle className="text-primary w-6 h-6 shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Geófonos Profesionales</h3>
              <p className="text-slate-600 text-sm">Amplificación sísmica para localizar roturas en tuberías enterradas a gran profundidad.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4">
            <CheckCircle className="text-primary w-6 h-6 shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Cámaras Termográficas</h3>
              <p className="text-slate-600 text-sm">Visualización de contrastes térmicos para encontrar humedad tras tabiquería sin demoler.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4">
            <CheckCircle className="text-primary w-6 h-6 shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Gas Trazador</h3>
              <p className="text-slate-600 text-sm">Inyección de gas inocuo en matrices complejas para detectar fisuras microscópicas.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4">
            <CheckCircle className="text-primary w-6 h-6 shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Manómetros Digitales</h3>
              <p className="text-slate-600 text-sm">Medición exacta de la caída de presión para certificar la existencia real de fugas.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 4: Prueba Social (Photo Placeholders) */}
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Problemas Solucionados en Concepción</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
            <div className="h-40 bg-slate-200 flex items-center justify-center text-slate-400">
              <Camera className="w-8 h-8" />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-slate-900 text-sm">Fuga Subterránea PPR</h4>
              <p className="text-slate-500 text-xs mt-1">Reparación sin rotura masiva. San Pedro de la Paz.</p>
            </div>
          </div>
          <div className="bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
            <div className="h-40 bg-slate-200 flex items-center justify-center text-slate-400">
              <Camera className="w-8 h-8" />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-slate-900 text-sm">Filtración Losa Radiante</h4>
              <p className="text-slate-500 text-xs mt-1">Localización termográfica exacta. Barrio Norte.</p>
            </div>
          </div>
          <div className="bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
            <div className="h-40 bg-slate-200 flex items-center justify-center text-slate-400">
              <Camera className="w-8 h-8" />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-slate-900 text-sm">Rotura Matriz Cobre</h4>
              <p className="text-slate-500 text-xs mt-1">Soldadura de plata industrial. Talcahuano.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dark EEAT */}
      <div className="mb-12 bg-slate-900 rounded-2xl p-8 md:p-12 text-white shadow-xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">¿Cuándo solicitar una inspección?</h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              La filtración de agua no desaparece sola. Actuar a tiempo evita el colapso de tabiques, proliferación de hongos tóxicos y facturas millonarias de Essbio. Operamos con certificación SEC, garantizando arreglos bajo norma en la Región del Biobío.
            </p>
            <div className="flex items-center gap-3">
              <ShieldAlert className="text-primary w-6 h-6" />
              <span className="font-bold">Especialistas en siniestros hidráulicos</span>
            </div>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <h4 className="font-bold mb-4 text-primary">Nuestra Cobertura</h4>
            <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Concepción</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> San Pedro</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Talcahuano</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Chiguayante</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Hualpén</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Coronel y Lota</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gray FAQ */}
      <div className="mb-12 bg-slate-50 p-8 rounded-2xl border border-slate-200">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">Consultas Frecuentes</h2>
        <div className="space-y-3 max-w-3xl mx-auto">
          <AccordionItem 
            icon={Search}
            question="¿Cómo saber si existe una fuga de agua?"
            shortAnswer="Cierre todas las llaves y revise el medidor. Si avanza, hay fuga. Si hay humedad pero el medidor no gira, proviene del desagüe."
            longAnswer="El medidor de agua potable verifica líneas presurizadas. Si la matriz pierde presión, el medidor gira. Para filtraciones de alcantarillado, usamos inspección visual y cámaras para encontrar averías sin romper cerámicas."
          />
          <AccordionItem 
            icon={Search}
            question="¿Cuáles son los síntomas de una fuga de agua?"
            shortAnswer="Humedad en muros, pisos inusualmente cálidos, desprendimiento de papel mural y baja presión en grifería."
            longAnswer="Un piso cálido indica fuga en cañería de agua caliente. Charcos en el jardín apuntan a matriz principal rota. Estos síntomas atraen moho tóxico, exigiendo reparación sanitaria inmediata."
          />
          <AccordionItem 
            icon={Search}
            question="¿Se puede detectar una fuga sin romper?"
            shortAnswer="Sí. Con geófonos acústicos y termografía aislamos el punto exacto de la falla, rompiendo solo una palmeta de cerámica."
            longAnswer="El geófono aísla la frecuencia del chorro bajo presión. La cámara térmica detecta acumulación de humedad. Cruzando ambos datos, señalamos el área a excavar reduciendo costos de albañilería drásticamente."
          />
          <AccordionItem 
            icon={Search}
            question="¿Cuánto demora una detección?"
            shortAnswer="El escaneo técnico toma entre 45 a 90 minutos. Posteriormente se entrega presupuesto y se puede reparar en el acto."
            longAnswer="En domicilios estándar, encontramos la matriz afectada en menos de una hora. Inmediatamente procedemos a cortar, soldar con termofusión o plata, y realizar prueba de presión para garantizar el servicio."
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
              <p className="text-slate-500 text-sm">Reparaciones sanitarias.</p>
            </div>
            <ArrowRight className="text-slate-400" />
          </Link>
          <Link to="/sello-verde-sec-concepcion" className="bg-white p-5 rounded-xl border border-slate-200 hover:border-slate-400 transition-all flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900">Sello Verde SEC</h3>
              <p className="text-slate-500 text-sm">Normalización de gas.</p>
            </div>
            <ArrowRight className="text-slate-400" />
          </Link>
        </div>
      </div>

      {/* CTA Final */}
      <CTASection 
        title="¿Problemas de humedad y cobros excesivos?" 
        subtitle="Un técnico especializado está listo para diagnosticar tu matriz."
        primaryText="Solicitar Presupuesto"
        secondaryText="Hablar por WhatsApp"
      />
    </div>
  );

  return (
    <SEOLanding
      seoTitle="Detección de Fugas de Agua en Concepción | Sin Romper"
      seoDescription="Servicio experto de detección de fugas de agua en Concepción. Localizamos filtraciones ocultas sin romper. Soluciona tu cuenta de agua alta hoy."
      canonicalUrl="https://www.deteccionesadolfogonzales.cl/deteccion-fugas-agua-concepcion"
      schema={schema}
      h1="Detección de Fugas de Agua en Concepción"
      heroText="Encontramos filtraciones ocultas bajo tierra y humedad en muros con tecnología no invasiva. Detén el daño y baja tu cuenta de agua."
      content={content}
    />
  );
};

export default DeteccionFugasAguaConcepcion;
