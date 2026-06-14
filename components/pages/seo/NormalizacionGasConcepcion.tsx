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
import { Wind, Maximize, AlertOctagon, Wrench } from 'lucide-react';

const NormalizacionGasConcepcion: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technologies: TechCard[] = [
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'Hacemos Agujeros para Aire',
      description: 'Ponemos rejillas en puertas o muros.',
      benefit: 'El monóxido sale y no te ahogas.'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Movemos el Calefón',
      description: 'Lo sacamos del baño a un lugar seguro.',
      benefit: 'Evitamos que te desmayes en la ducha.'
    },
    {
      icon: <AlertOctagon className="w-8 h-8" />,
      title: 'Cambiamos el Gorro del Ducto',
      description: 'Arreglamos los tubos de aluminio del techo.',
      benefit: 'Los gases malos salen derecho para afuera.'
    },
    {
      icon: <Maximize className="w-8 h-8" />,
      title: 'Cambio de Tubos',
      description: 'Sacamos las llaves viejas y soldamos cobre nuevo.',
      benefit: 'Chao fugas por vejez.'
    }
  ];

  const faqs = [
    {
      question: '¿De qué trata esto de la "normalización de gas"?',
      shortAnswer: 'Es tomar una instalación de gas que está mala o antigua y arreglarla para que cumpla con la ley de hoy (Decreto 66 de la SEC).',
      extendedAnswer: 'Las reglas cambian. Quizás hace 20 años era normal tener el calefón adentro del baño, pero hoy está prohibidísimo porque la gente se moría asfixiada. Normalizar es sacar ese calefón del baño, ponerle ventilaciones a la cocina y cambiar los tubos viejos para dejar la casa segura.'
    },
    {
      question: 'Tengo un calefón adentro del baño o en un pasillo cerrado, ¿qué hago?',
      shortAnswer: 'Hay que sacarlo de ahí urgente.',
      extendedAnswer: 'Es un peligro enorme. Nosotros tomamos ese calefón, alargamos los tubos de agua y gas, y lo movemos hacia la logia, el patio o un balcón donde esté al aire libre. Así no te intoxicas mientras te duchas.'
    },
    {
      question: '¿Qué pasa si me dejaron un papel lleno de "observaciones" en la revisión?',
      shortAnswer: 'Nos llamas a nosotros, leemos el papel y arreglamos punto por punto lo que te pidieron.',
      extendedAnswer: 'A veces te anotan que te faltan rejillas de ventilación, o que la manguera de la cocina es de plástico y tiene que ser de cobre. Nosotros compramos los materiales buenos, arreglamos cada "observación" y te dejamos todo listo para que pases la prueba.'
    },
    {
      question: '¿Cuánto cuesta arreglar todas las observaciones que me dejaron?',
      shortAnswer: 'Va a depender de la lista. Te cobramos por lo que hay que hacer, ni más ni menos.',
      extendedAnswer: 'Si solo te falta una rejilla en la puerta, es súper barato. Si hay que sacar el calefón del baño y moverlo 10 metros para afuera, sale un poco más porque ocupamos mucho cobre. Lo mejor es que nos mandes una foto del papel por WhatsApp y te damos el valor.'
    },
    {
      question: '¿Hacen esto en condominios en Concepción o Hualpén?',
      shortAnswer: 'Sí, trabajamos en departamentos todo el tiempo.',
      extendedAnswer: 'Andamos por todo Concepción, San Pedro de la Paz, Talcahuano, Chiguayante, Hualpén, Penco, Tomé y Lota. Si el comité de tu edificio los obligó a normalizar para recuperar el gas general, nosotros te ayudamos con tu departamento.'
    },
    {
      question: '¿Arreglan el tubo grueso que sale del calefón hacia arriba?',
      shortAnswer: 'Sí, el "ducto de evacuación de gases" lo dejamos impecable.',
      extendedAnswer: 'A veces le ponen tubos corrugados de aluminio que se rompen con mirarlos. Nosotros instalamos ductos lisos, le damos la inclinación correcta para que tire el humo para arriba y le ponemos el sombrerete reglamentario en el techo.'
    }
  ];

  const steps = [
    { title: 'Revisamos tu papel', description: 'Leemos el acta de rechazo o miramos tu cocina para ver qué está mal.' },
    { title: 'Te damos el precio', description: 'Te explicamos qué tubo hay que cambiar o qué hoyo hay que hacer en la pared.' },
    { title: 'Hacemos los cambios', description: 'Soldamos cobre, instalamos las celosías de aire y cambiamos las llaves de paso.' },
    { title: 'Aprobamos la pega', description: 'Revisamos nosotros mismos que no haya quedado botando gas.' },
    { title: 'Listo para certificar', description: 'Te entregamos el papel firmado para que llames al inspector y te aprueben.' }
  ];

  const problems = [
    { question: '¿Tienes un calefón metido adentro del baño y te da miedo bañarte mucho rato?' },
    { question: '¿Te hicieron una inspección de gas, reprobaste, y no sabes cómo arreglarlo?' },
    { question: '¿Tu cocina no tiene ningún hoyito en la pared para que entre aire fresco?' }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Normalización de Gas en Concepción | Arreglamos Observaciones</title>
        <meta name="description" content="Corregimos tus instalaciones de gas para que cumplan la normativa SEC. Sacamos calefones de baños y arreglamos observaciones de rechazo en Concepción." />
        <link rel="canonical" href="https://www.deteccionesadolfogonzales.cl/normalizacion-gas-concepcion" />
      </Helmet>

      <SchemaMarkup 
        pageUrl="/normalizacion-gas-concepcion"
        pageTitle="Normalización de Gas en Concepción | Arreglamos Observaciones"
        pageDescription="Corregimos tus instalaciones de gas para que cumplan la normativa SEC."
        faqs={faqs}
      />

      <PremiumHero 
        title="Normalización de Instalaciones de Gas en Concepción"
        subtitle="Arreglamos todos los 'peros' y observaciones que te dejaron en la inspección. Dejamos tus cañerías, ventilaciones y calefones totalmente legales y seguros."
        badges={["Cumplimos la Ley", "Adiós Monóxido", "Calefones Seguros"]}
      />

      <StatsBlock />
      
      <LocalCoverageBlock />

      <ProblemBlock 
        title="Una instalación antigua o mal hecha es una bomba de tiempo"
        subtitle="Si tu calefón no tiene buena tirada de humo, el monóxido se queda adentro de tu casa."
        problems={problems}
      />

      <CTABlock />

      <SolutionBlock 
        title="Corregimos todo lo que está malo según la SEC"
        description="A veces las casas más viejitas se construyeron cuando la ley de gas era más relajada. Hoy las reglas son más estrictas porque salvan vidas. Nosotros nos dedicamos a modernizar tu instalación: ponemos rejillas para que entre aire, cambiamos mangueras plásticas prohibidas por cañerías de cobre soldadas, y armamos chimeneas nuevas para tu calefón."
        benefits={[
          "Arreglamos punto por punto el informe de rechazo.",
          "Instalamos rejillas de ventilación en puertas y muros.",
          "Movemos los calefones a donde sea seguro.",
          "Cambiamos llaves de paso que ya no giran."
        ]}
      />

      <div className="bg-white py-10 container mx-auto px-6 text-center text-slate-600">
        <p>
          Si no tienes a quién llamar para que te aprueben estos arreglos, recuerda que somos <Link to="/instalador-autorizado-sec-concepcion" className="text-blue-600 font-semibold hover:underline">Instaladores Autorizados</Link> y te tramitamos tu <Link to="/sello-verde-sec-concepcion" className="text-blue-600 font-semibold hover:underline">Sello Verde</Link> directamente. Por cierto, si notas humedad o que el medidor de agua gira mucho, revisa nuestra sección de <Link to="/deteccion-fugas-agua-concepcion" className="text-blue-600 font-semibold hover:underline">Detección de Fugas</Link>.
        </p>
      </div>

      <TechVisualBlock 
        title="Las cosas que siempre nos toca arreglar"
        subtitle="Los errores más comunes que la gente tiene en sus casas"
        technologies={technologies} 
      />

      <StepTimeline title="Paso a paso para regularizar tu gas" steps={steps} />

      <DifferentiatorBlock />

      <EEATBlock />

      <SecCrossLinkBlock />

      <ShortFAQ title="Preguntas comunes sobre normalizar el gas" faqs={faqs} />
    </div>
  );
};

export default NormalizacionGasConcepcion;
