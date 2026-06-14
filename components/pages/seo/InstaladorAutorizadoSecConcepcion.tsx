import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PremiumHero from '../../blocks/PremiumHero';
import StatsBlock from '../../blocks/StatsBlock';
import LocalCoverageBlock from '../../blocks/LocalCoverageBlock';
import ProblemBlock from '../../blocks/ProblemBlock';
import CTABlock from '../../blocks/CTABlock';
import SolutionBlock from '../../blocks/SolutionBlock';
import TechVisualBlock, { TechCard } from '../../blocks/TechVisualBlock';
import StepTimeline from '../../blocks/StepTimeline';
import DifferentiatorBlock from '../../blocks/DifferentiatorBlock';
import EEATBlock from '../../blocks/EEATBlock';
import SecCrossLinkBlock from '../../blocks/SecCrossLinkBlock';
import ShortFAQ from '../../blocks/ShortFAQ';
import SchemaMarkup from '../../blocks/SchemaMarkup';
import { Award, PenTool, Shield, Wrench } from 'lucide-react';

const InstaladorAutorizadoSecConcepcion: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technologies: TechCard[] = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Carnet Oficial SEC',
      description: 'Documento que nos autoriza a trabajar con gas.',
      benefit: 'Trabajas con profesionales de verdad.'
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: 'Papeles TC6',
      description: 'Llenamos el formulario oficial de tu casa.',
      benefit: 'Dejas tu red inscrita y legal.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Materiales Permitidos',
      description: 'Solo cobre o tuberías PEX aprobadas.',
      benefit: 'Nada de mangueras de jardín peligrosas.'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Instalación de Calefones',
      description: 'Ponemos tu termo o calefón como dice la ley.',
      benefit: 'No pierdes la garantía de la tienda.'
    }
  ];

  const faqs = [
    {
      question: '¿Qué es exactamente un Instalador Autorizado SEC?',
      shortAnswer: 'Es un técnico que dio pruebas en el gobierno (SEC) para demostrar que sabe trabajar con gas de forma segura.',
      extendedAnswer: 'La Superintendencia de Electricidad y Combustibles nos da un carnet especial (Clase 3 en nuestro caso). Esto significa que la ley chilena nos autoriza a hacer planos, soldar cañerías, poner calefones y firmar los papeles que declaran que tu casa no va a explotar por una mala pega.'
    },
    {
      question: '¿Por qué no puedo llamar a cualquier maestro para arreglar el gas?',
      shortAnswer: 'Porque si pasa un accidente, el seguro de tu casa no te va a pagar nada si el arreglo lo hizo alguien sin licencia.',
      extendedAnswer: 'Un maestro chasquilla te puede arreglar una llave de agua, pero con el gas es otra cosa. Si pones mangueras prohibidas o dejas mal ventilado un calefón, alguien puede ahogarse. Además, cuando vengan de la empresa del gas a revisar tu sello verde, te lo van a cortar directo si ven arreglos sin firmar por un Instalador SEC.'
    },
    {
      question: '¿Cuándo necesito llamar a un Instalador SEC?',
      shortAnswer: 'Cuando construyes una casa, cuando compras un calefón nuevo, o cuando te cortan el gas.',
      extendedAnswer: 'También nos necesitas si quieres cambiarte de balones de gas a gas de cañería (o al revés), si vas a mover el medidor de lugar, o si en la inspección del condominio te dejaron un papel con observaciones que hay que arreglar.'
    },
    {
      question: '¿Cuánto demora hacer el papeleo TC6 para declarar mi instalación?',
      shortAnswer: 'El arreglo en tu casa se hace en 1 o 2 días. Subir los papeles a la SEC toma otro par de días hábiles.',
      extendedAnswer: 'Una vez que soldamos todo y comprobamos que no hay ni una gotita de gas saliendo, hacemos un plano simple y lo subimos a la plataforma del gobierno. Cuando nos dan el "OK", te entregamos el certificado final.'
    },
    {
      question: '¿Atienden instalaciones de gas en Tomé o Lota?',
      shortAnswer: 'Sí, vamos a varias comunas del Gran Concepción.',
      extendedAnswer: 'Trabajamos moviéndonos por Concepción, San Pedro de la Paz, Talcahuano, Chiguayante, Hualpén, Penco, Tomé y Lota para que no te quedes sin agua caliente.'
    },
    {
      question: '¿Puedo cambiar mi calefón de gas licuado a gas natural con ustedes?',
      shortAnswer: 'Sí. Nosotros hacemos la conversión de forma segura y cambiamos los inyectores.',
      extendedAnswer: 'Es súper peligroso usar un calefón hecho para balón de gas con gas de cañería sin modificarlo. Nosotros lo adaptamos, le calibramos la llama para que no te queme la casa, y te lo dejamos firmado.'
    }
  ];

  const steps = [
    { title: 'Visita Inicial', description: 'Vamos a tu casa a mirar qué quieres hacer y tomamos las medidas.' },
    { title: 'Presupuesto Claro', description: 'Te decimos cuánto sale hacer la pega usando cobre y materiales de buena calidad.' },
    { title: 'Trabajo con Seguridad', description: 'Soldamos todo y le ponemos presión de aire a los tubos para ver que no goteen gas.' },
    { title: 'Formulario TC6', description: 'Metemos todos los datos técnicos de tu red a la página oficial de la SEC.' },
    { title: 'Entrega de Papeles', description: 'Te pasamos tu certificado oficial en la mano. Red lista y legal.' }
  ];

  const problems = [
    { question: '¿Compraste un calefón nuevo y la tienda te pide un instalador autorizado para no perder la garantía?' },
    { question: '¿Construiste tu casa y no sabes cómo pedir que te conecten el medidor de gas?' },
    { question: '¿Tienes cañerías viejas, parchadas, y te da miedo que haya un accidente?' }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Instalador Autorizado SEC Concepción | Proyectos de Gas Legales</title>
        <meta name="description" content="Instaladores Autorizados SEC en Concepción. Trabajos de gas seguros, instalaciones nuevas y declaración TC6." />
        <link rel="canonical" href="https://www.deteccionesadolfogonzales.cl/instalador-autorizado-sec-concepcion" />
      </Helmet>

      <SchemaMarkup 
        pageUrl="/instalador-autorizado-sec-concepcion"
        pageTitle="Instalador Autorizado SEC Concepción | Proyectos de Gas Legales"
        pageDescription="Instaladores Autorizados SEC en Concepción. Trabajos de gas seguros."
        faqs={faqs}
      />

      <PremiumHero 
        title="Instalador Autorizado SEC en Concepción"
        subtitle="Trabajos de gas realizados y certificados por un Instalador Autorizado. Duerme tranquilo sabiendo que tu red no va a explotar y cumple toda la ley."
        badges={["Licencia SEC al Día", "Trámites TC6", "Seguridad Total"]}
      />

      <StatsBlock />
      
      <LocalCoverageBlock />

      <ProblemBlock 
        title="El gas no es para que cualquiera ande inventando arreglos"
        subtitle="Una soldadura mal hecha o un calefón puesto donde no debe ir le puede costar la vida a tu familia."
        problems={problems}
      />

      <CTABlock />

      <SolutionBlock 
        title="Hacemos la pega bien hecha y te entregamos los papeles"
        description="Nosotros no parchamos con mangueras plásticas ni pegamentos baratos. Como Instaladores Autorizados por la SEC, sabemos hacer planos de gas, sabemos qué tubo de cobre aguanta la presión y calculamos cuánto aire necesita tu calefón para no ahogarte. Hacemos la pega técnica, la probamos con máquinas, y te dejamos el proyecto declarado formalmente."
        benefits={[
          "Te hacemos todo el papeleo del Anexo TC6.",
          "Instalamos encimeras, cocinas y calefones.",
          "Tu seguro de casa responderá porque está todo legal.",
          "Te orientamos para que no tengas problemas a futuro."
        ]}
      />

      <div className="bg-white py-10 container mx-auto px-6 text-center text-slate-600">
        <p>
          Si te dejaron una lista de problemas en la última revisión, mira nuestra sección de <Link to="/normalizacion-gas-concepcion" className="text-blue-600 font-semibold hover:underline">Normalización de Gas</Link> o te ayudamos directo a recuperar el <Link to="/sello-verde-sec-concepcion" className="text-blue-600 font-semibold hover:underline">Sello Verde</Link>. Y recuerda que si se te rompe un tubo de agua, también somos expertos en <Link to="/deteccion-fugas-agua-concepcion" className="text-blue-600 font-semibold hover:underline">Detección de Fugas</Link>.
        </p>
      </div>

      <TechVisualBlock 
        title="Por qué pedirnos la credencial SEC"
        subtitle="Lo que ganamos estudiando para certificarnos"
        technologies={technologies} 
      />

      <StepTimeline title="Cómo trabajamos con tu gas" steps={steps} />

      <DifferentiatorBlock />

      <EEATBlock />

      <SecCrossLinkBlock />

      <ShortFAQ title="Preguntas rápidas sobre los Instaladores SEC" faqs={faqs} />
    </div>
  );
};

export default InstaladorAutorizadoSecConcepcion;
