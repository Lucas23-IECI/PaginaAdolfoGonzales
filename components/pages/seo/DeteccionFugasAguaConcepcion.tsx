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
import { Activity, Radio, Thermometer, Search } from 'lucide-react';

const DeteccionFugasAguaConcepcion: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technologies: TechCard[] = [
    {
      icon: <Radio className="w-8 h-8" />,
      title: 'Ultrasonido',
      description: 'Escuchamos la presión del agua bajo el piso.',
      benefit: 'No necesitamos picar a ciegas.'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Geófono',
      description: 'Capta ruidos subterráneos muy profundos.',
      benefit: 'Perfecto para patios y estacionamientos.'
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: 'Termografía',
      description: 'Vemos los cambios de temperatura en la pared.',
      benefit: 'Rastrea humedad oculta rápidamente.'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Gas Trazador',
      description: 'Inyectamos gas para encontrar roturas mudas.',
      benefit: 'Ideal cuando la fuga no hace ruido.'
    }
  ];

  const faqs = [
    {
      question: '¿Cuánto cuesta el servicio de detección de fugas?',
      shortAnswer: 'El precio depende del tamaño de la casa o departamento y del equipo que necesitemos usar.',
      extendedAnswer: 'Te entregamos el valor exacto antes de empezar. Pagar por un diagnóstico exacto con nosotros siempre te saldrá más barato que tener que pagarle a un albañil para reconstruir un piso que rompieron por equivocación.'
    },
    {
      question: '¿Cuánto demora en encontrar la filtración?',
      shortAnswer: 'Normalmente nos toma entre 1 y 3 horas encontrar el punto exacto.',
      extendedAnswer: 'Llegamos con los equipos listos. Revisamos las llaves, probamos el medidor y pasamos las máquinas hasta dar con la rotura en la misma visita.'
    },
    {
      question: '¿Necesito romper el piso para que revisen?',
      shortAnswer: 'No. Justamente para eso nos llamas, para no tener que romper.',
      extendedAnswer: 'Nosotros marcamos una "X" exacta en tu cerámica o jardín. Recién ahí, y solo en ese espacio pequeño, abrimos para arreglar el tubo roto.'
    },
    {
      question: 'Mi medidor gira solo aunque tengo todo cerrado, ¿es una fuga?',
      shortAnswer: 'Sí, es la señal más clara de que estás perdiendo agua de forma invisible.',
      extendedAnswer: 'Si cierras todas las llaves de la casa y la estrella del medidor sigue girando, significa que el agua se está yendo por debajo de la tierra o por dentro de un muro. Debemos ubicarla antes de que la cuenta de fin de mes suba más.'
    },
    {
      question: '¿Qué incluye la visita técnica?',
      shortAnswer: 'Incluye la revisión de consumo, el paso de las máquinas (geófono, cámara térmica) y marcar el punto roto.',
      extendedAnswer: 'Si la fuga necesita gas trazador, lo conversamos en el lugar. Al final te entregamos un informe claro, que incluso te sirve para presentarlo al seguro de tu casa si tienes uno.'
    },
    {
      question: '¿Atienden urgencias en San Pedro de la Paz o Talcahuano?',
      shortAnswer: 'Sí, vamos a todo el Gran Concepción rápidamente.',
      extendedAnswer: 'Trabajamos todos los días en Concepción centro, San Pedro de la Paz, Talcahuano, Chiguayante, Hualpén, Penco, Tomé y Lota. Sabemos que el agua no espera, así que llegamos lo más rápido posible.'
    }
  ];

  const steps = [
    { title: 'Revisión del Medidor', description: 'Miramos si estás perdiendo agua y cuánta presión hay en las cañerías.' },
    { title: 'Uso de Máquinas', description: 'Pasamos el geófono o la cámara térmica por las zonas donde sospechamos.' },
    { title: 'Marcamos el Punto', description: 'Le ponemos una marca exacta a tu piso o pared para saber dónde está el problema.' },
    { title: 'Arreglo Directo', description: 'Si tú quieres, rompemos ese pedacito, soldamos el tubo nuevo y dejamos funcionando.' },
    { title: 'Entrega de Informe', description: 'Te dejamos todo documentado por si necesitas cobrar un seguro.' }
  ];

  const problems = [
    { question: '¿Te llegó una cuenta de agua carísima y no sabes por qué?' },
    { question: '¿La estrella del medidor da vueltas todo el día sola?' },
    { question: '¿Aparecieron manchas de humedad en la pared de la nada?' }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Detección de Fugas de Agua en Concepción | Sin Romper Pisos</title>
        <meta name="description" content="Encontramos la fuga de agua sin romper innecesariamente. Servicio de detección precisa con ultrasonido y termografía en Concepción." />
        <link rel="canonical" href="https://www.deteccionesadolfogonzales.cl/deteccion-fugas-agua-concepcion" />
      </Helmet>

      <SchemaMarkup 
        pageUrl="/deteccion-fugas-agua-concepcion"
        pageTitle="Detección de Fugas de Agua en Concepción"
        pageDescription="Encontramos la fuga de agua sin romper innecesariamente. Servicio de detección precisa en Concepción."
        faqs={faqs}
      />

      <PremiumHero 
        title="Detección de Fugas de Agua en Concepción sin Romper tu Casa"
        subtitle="Encontramos la cañería rota usando ultrasonido y cámaras térmicas. Evita gastar de más en cerámica o piso flotante reparando a ciegas."
        badges={["Sin Destruir Tu Piso", "Diagnóstico Rápido", "Tecnología Precisa"]}
      />

      <StatsBlock />
      
      <LocalCoverageBlock />

      <ProblemBlock 
        title="Las fugas ocultas salen caras si no las detienes a tiempo"
        subtitle="Esa humedad que ves en la pared o ese medidor que no para de girar están inflando tu cuenta a fin de mes."
        problems={problems}
      />

      <CTABlock />

      <SolutionBlock 
        title="Encontramos la fuga sin adivinar"
        description="Antes, había que picar toda la pared o levantar todo el piso hasta encontrar el tubo roto. Nosotros trabajamos diferente. Usamos equipos para escuchar el agua por debajo de la tierra y ver los cambios de temperatura en la pared. Así, te decimos exactamente dónde está el problema para romper solo un espacio pequeño."
        benefits={[
          "Sabemos dónde picar, sin destruir toda la casa.",
          "Te sirve para cañerías de agua caliente y fría.",
          "Te entregamos un informe para tu seguro.",
          "Ahorras plata en albañilería y reconstrucción."
        ]}
      />

      <div className="bg-white py-10 container mx-auto px-6 text-center text-slate-600">
        <p>
          Y si tu problema resulta ser de gas, tranquilo. Somos <Link to="/instalador-autorizado-sec-concepcion" className="text-blue-600 font-semibold hover:underline">Instaladores Autorizados SEC</Link> y también nos encargamos de <Link to="/normalizacion-gas-concepcion" className="text-blue-600 font-semibold hover:underline">Normalizar el Gas</Link> o ayudarte con el <Link to="/sello-verde-sec-concepcion" className="text-blue-600 font-semibold hover:underline">Sello Verde</Link>.
        </p>
      </div>

      <TechVisualBlock 
        title="Máquinas Profesionales que Usamos"
        subtitle="Trabajamos con tecnología real para no adivinar dónde está tu fuga"
        technologies={technologies} 
      />

      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center">Fugas muy escondidas bajo el radier</h2>
          <p className="text-slate-700 text-lg mb-6 leading-relaxed">
            A veces, el tubo se rompe por debajo del cemento de la casa. A esto le llamamos <Link to="/fugas-bajo-radier-concepcion" className="text-blue-600 font-semibold hover:underline">fuga bajo radier</Link>. El problema es que el agua se va hacia la tierra y tú no ves ninguna mancha ni charco arriba. Solo te das cuenta cuando llega la boleta del agua altísima.
          </p>
          <p className="text-slate-700 text-lg mb-6 leading-relaxed">
            Para estos casos más difíciles, llevamos el <strong>gas trazador</strong>. Le inyectamos un gas seguro a la cañería (que no es tóxico). Como el gas es tan liviano, sube, atraviesa el cemento, y nuestra máquina lo "huele". Así sabemos en qué pedacito exacto de tu piso está la rotura.
          </p>
        </div>
      </section>

      <StepTimeline title="Así trabajamos en tu casa" steps={steps} />

      <DifferentiatorBlock />

      <EEATBlock />

      <SecCrossLinkBlock />

      <ShortFAQ title="Preguntas que siempre nos hacen" faqs={faqs} />
    </div>
  );
};

export default DeteccionFugasAguaConcepcion;
