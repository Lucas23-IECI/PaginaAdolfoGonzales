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
import { Layers, Activity, Radio, Search } from 'lucide-react';

const FugasBajoRadierConcepcion: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technologies: TechCard[] = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Gas Especial',
      description: 'Penetra el hormigón y la cerámica.',
      benefit: 'La mejor forma de buscar fugas hondas.'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Micrófono de Piso',
      description: 'Audífonos especiales para el cemento.',
      benefit: 'Escuchamos tuberías tapadas.'
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Scanner',
      description: 'Revisamos qué hay debajo del piso.',
      benefit: 'Para no taladrar otros tubos.'
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: 'Correlador',
      description: 'Mide las distancias del ruido del agua.',
      benefit: 'Achica el área de búsqueda.'
    }
  ];

  const faqs = [
    {
      question: '¿Qué es exactamente una fuga bajo radier?',
      shortAnswer: 'Es cuando se te rompe un tubo de agua que está tapado por todo el cemento y la cerámica del piso de tu casa.',
      extendedAnswer: 'Lo complicado es que el agua no siempre sale para arriba. Muchas veces se va hacia la tierra de abajo, chupando toda la humedad hacia tus paredes o hundiendo el piso sin que te des cuenta hasta que llega la cuenta.'
    },
    {
      question: '¿Van a tener que levantar todo mi piso flotante?',
      shortAnswer: 'Esa es la idea de llamarnos: no hacerlo.',
      extendedAnswer: 'Buscamos la fuga con nuestras máquinas. Cuando la encontramos, marcamos un cuadrado chiquito. Ahí es donde se levanta la cerámica o el piso flotante, se repara, y listo. Te ahorras tener que embaldosar toda la casa de nuevo.'
    },
    {
      question: 'Tengo un piso súper caliente en una parte, ¿es normal?',
      shortAnswer: 'No, seguramente tienes rota la matriz de agua caliente.',
      extendedAnswer: 'Si pisas la cerámica en pasillos o baños y notas que está tibia o muy caliente, es casi seguro que el tubo de agua caliente se rajó ahí abajo. Podemos ir con la cámara térmica y revisarlo en minutos.'
    },
    {
      question: '¿Cuánto cuesta buscar una fuga debajo del cemento?',
      shortAnswer: 'El precio depende de lo grande que sea el primer piso de tu casa.',
      extendedAnswer: 'Te decimos el valor clarito desde el principio. Piénsalo así: pagarle a alguien para que pique tu piso a martillazos a ver si "le achunta" al tubo, siempre te va a salir más caro por los materiales nuevos que vas a tener que comprar.'
    },
    {
      question: '¿Atienden en Chiguayante y Hualpén?',
      shortAnswer: 'Sí, vamos para allá sin problema.',
      extendedAnswer: 'Nos movemos por todo el Gran Concepción (Concepción, San Pedro, Talcahuano, Hualpén, Chiguayante, Penco, Tomé y Lota) buscando fugas escondidas.'
    },
    {
      question: '¿Mi seguro de hogar me cubre esta pega?',
      shortAnswer: 'La mayoría de los seguros de casa sí cubren daños por cañerías rotas.',
      extendedAnswer: 'Nosotros te hacemos un informe súper claro para que lo presentes a tu compañía de seguros y puedas pedir que te devuelvan la plata del arreglo.'
    }
  ];

  const steps = [
    { title: 'Vaciamos la Cañería', description: 'Le sacamos el agua al tubo para meterle aire o gas seguro.' },
    { title: 'Rastreo Lento', description: 'Caminamos por todo el primer piso escuchando el suelo o buscando el gas que sube.' },
    { title: 'Marcamos la Cerámica', description: 'Le ponemos una cinta al pedacito de suelo que hay que abrir.' },
    { title: 'Pique Pequeño', description: 'Se rompe justo ahí, ni un centímetro más.' },
    { title: 'Soldadura', description: 'Se pone un tubo nuevo, se prueba que no gotee y cerramos el tema.' }
  ];

  const problems = [
    { question: '¿La cerámica de tu pasillo está extrañamente caliente?' },
    { question: '¿Las paredes del primer piso se están descascarando por abajo?' },
    { question: '¿Se te está hundiendo el piso del patio o del living?' }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Fugas Bajo Radier Concepción | Especialistas en Fugas Ocultas</title>
        <meta name="description" content="Especialistas en fugas ocultas bajo el radier en Concepción. Encontramos la tubería rota bajo el cemento sin levantar toda tu cerámica." />
        <link rel="canonical" href="https://www.deteccionesadolfogonzales.cl/fugas-bajo-radier-concepcion" />
      </Helmet>

      <SchemaMarkup 
        pageUrl="/fugas-bajo-radier-concepcion"
        pageTitle="Fugas Bajo Radier Concepción | Especialistas en Fugas Ocultas"
        pageDescription="Especialistas en fugas ocultas bajo el radier en Concepción. Encontramos la tubería rota bajo el cemento."
        faqs={faqs}
      />

      <PremiumHero 
        title="Fugas de Agua Ocultas bajo el Radier"
        subtitle="Encontramos la tubería rota debajo del cemento de tu casa. No dejes que un maestro te pique toda la cerámica probando suerte."
        badges={["Gas que Atraviesa Piso", "Micrófonos Subterráneos", "Diagnóstico Directo"]}
      />

      <StatsBlock />
      
      <LocalCoverageBlock />

      <ProblemBlock 
        title="El agua bajo tu casa te está rompiendo las paredes"
        subtitle="El problema del agua subterránea es que no avisa, se come los cimientos y empieza a subir por la pintura."
        problems={problems}
      />

      <CTABlock />

      <SolutionBlock 
        title="Buscamos bajo tierra sin hacer tiras tu living"
        description="Picar el piso de un lado a otro buscando una cañería goteando es cosa del pasado. Nosotros traemos máquinas que pueden escuchar el ruido del agua a través del cemento duro. Y si el agua no suena, le metemos un gas especial al tubo que atraviesa el radier y nosotros lo detectamos arriba."
        benefits={[
          "Rompemos solo la palmeta que está suelta o donde está el tubo.",
          "Sabemos trabajar con piso flotante, baldosas y cerámicas.",
          "Cuidamos los otros tubos que están sanos.",
          "Entregamos el papel para que lo lleves a tu seguro."
        ]}
      />

      <div className="bg-white py-10 container mx-auto px-6 text-center text-slate-600">
        <p>
          Recuerda que si el problema no está bajo el piso sino en las paredes, también hacemos <Link to="/deteccion-fugas-agua-concepcion" className="text-blue-600 font-semibold hover:underline">Detección de Fugas de Agua</Link> en general. Además, somos <Link to="/instalador-autorizado-sec-concepcion" className="text-blue-600 font-semibold hover:underline">Instaladores SEC</Link>, así que también podemos ayudarte con la <Link to="/normalizacion-gas-concepcion" className="text-blue-600 font-semibold hover:underline">Normalización de Gas</Link> de tu hogar.
        </p>
      </div>

      <TechVisualBlock 
        title="Herramientas para ver bajo el piso"
        subtitle="Así logramos no desarmar tu casa"
        technologies={technologies} 
      />

      <StepTimeline title="Paso a paso del trabajo" steps={steps} />

      <DifferentiatorBlock />

      <EEATBlock />

      <SecCrossLinkBlock />

      <ShortFAQ title="Dudas sobre tubos bajo el cemento" faqs={faqs} />
    </div>
  );
};

export default FugasBajoRadierConcepcion;
