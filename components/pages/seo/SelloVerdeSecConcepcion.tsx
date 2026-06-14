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
import { FileCheck, ShieldAlert, BadgeCheck, ClipboardList } from 'lucide-react';

const SelloVerdeSecConcepcion: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technologies: TechCard[] = [
    {
      icon: <BadgeCheck className="w-8 h-8" />,
      title: 'Sello Verde',
      description: 'Todo impecable.',
      benefit: 'Instalación aprobada y legal.'
    },
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: 'Sello Amarillo',
      description: 'Tiene fallas chicas.',
      benefit: 'Te dan un plazo corto para arreglar.'
    },
    {
      icon: <ShieldAlert className="w-8 h-8" />,
      title: 'Sello Rojo',
      description: 'Rechazo total.',
      benefit: 'Corte de gas por peligro de muerte.'
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: 'La Prueba de Aire',
      description: 'Metemos aire a presión a los tubos.',
      benefit: 'Así probamos que no hay goteo de gas.'
    }
  ];

  const faqs = [
    {
      question: '¿Qué es exactamente el Sello Verde?',
      shortAnswer: 'Es un certificado oficial que dice que tu red de gas y tus calefones están funcionando de manera segura y cumplen la ley.',
      extendedAnswer: 'Las empresas certificadoras lo entregan después de hacer una revisión completa de tu casa o departamento. Si te dan el sello verde, significa que no tienes fugas y tus ventilaciones están perfectas.'
    },
    {
      question: '¿Qué pasa si en la inspección me dejan con Sello Rojo?',
      shortAnswer: 'Significa que hay un peligro súper grave. Te cortan el gas inmediatamente.',
      extendedAnswer: 'El sello rojo se pone cuando descubren fugas en las cañerías o cuando ven que el monóxido se está devolviendo hacia adentro de tu casa. Para recuperar el gas, tienes que llamar a un técnico SEC como nosotros para que arregle las fallas y vuelva a pedir la inspección.'
    },
    {
      question: 'Me dieron Sello Amarillo, ¿puedo seguir usando el gas?',
      shortAnswer: 'Sí, pero te dan un plazo súper corto para arreglar los "detalles".',
      extendedAnswer: 'El sello amarillo significa que la casa no va a explotar hoy, pero tiene errores que no cumplen la norma (como una rejilla muy chica o una llave oxidada). Si no arreglas eso antes de que venza el plazo, te pasan a sello rojo y te cortan.'
    },
    {
      question: '¿Ustedes me pueden recuperar el Sello Verde?',
      shortAnswer: 'Sí, para eso estamos.',
      extendedAnswer: 'Tú nos muestras el papel que te dejó el inspector (donde salen las fallas). Nosotros vamos, arreglamos todo lo que anotó, hacemos la prueba de presión para asegurarnos que no quedó botando gas, y tramitamos los papeles para que te devuelvan el sello verde.'
    },
    {
      question: '¿Cuánto cuesta arreglar la casa para pasar la prueba?',
      shortAnswer: 'El precio depende puramente de cuántas fallas te anotaron en el informe de rechazo.',
      extendedAnswer: 'Pídenos una visita o mándanos una foto del informe por WhatsApp. Ahí te damos el valor cerrado. Nosotros nos encargamos de que pases la prueba sí o sí a la primera vez que vuelva el inspector.'
    },
    {
      question: '¿Atienden urgencias por cortes de gas en Talcahuano o Chiguayante?',
      shortAnswer: 'Sí, nos movemos rápido por todo el Gran Concepción.',
      extendedAnswer: 'Sabemos lo que es quedarse sin poder cocinar o bañarse. Atendemos en Concepción, San Pedro, Talcahuano, Chiguayante, Hualpén, Penco, Tomé y Lota para levantarte el sello rojo lo antes posible.'
    }
  ];

  const steps = [
    { title: 'Leemos el Papel', description: 'Miramos el informe de la certificadora donde salen todos tus "puntos rojos".' },
    { title: 'Presupuesto', description: 'Te decimos cuánto sale arreglar exactamente eso, sin inventarte cosas extra.' },
    { title: 'Metemos Mano', description: 'Cambiamos llaves, ponemos ventilaciones y sellamos fugas de gas.' },
    { title: 'Prueba de Seguridad', description: 'Le metemos presión a los tubos con nuestras máquinas para ver que quedaron súper firmes.' },
    { title: 'Listos para el Sello', description: 'Te damos tu certificado de arreglo y ya puedes pedir que te timbren el Sello Verde de nuevo.' }
  ];

  const problems = [
    { question: '¿Vinieron a revisar el gas del edificio y te dejaron la puerta tapizada en sellos rojos?' },
    { question: '¿La compañía te cortó la llave de paso porque dice que tu instalación está peligrosa?' },
    { question: '¿Quieres arrendar tu departamento y la corredora te exige el Sello Verde al día?' }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Sello Verde SEC en Concepción | Recupera tu Certificación</title>
        <meta name="description" content="Te ayudamos a recuperar tu Sello Verde SEC en Concepción. Levantamos sellos rojos, arreglamos tu gas y hacemos que pases la inspección." />
        <link rel="canonical" href="https://www.deteccionesadolfogonzales.cl/sello-verde-sec-concepcion" />
      </Helmet>

      <SchemaMarkup 
        pageUrl="/sello-verde-sec-concepcion"
        pageTitle="Sello Verde SEC en Concepción | Recupera tu Certificación"
        pageDescription="Te ayudamos a recuperar tu Sello Verde SEC en Concepción. Levantamos sellos rojos."
        faqs={faqs}
      />

      <PremiumHero 
        title="Recupera el Sello Verde SEC de tu Casa"
        subtitle="Si te dejaron con sello rojo o amarillo, nosotros hacemos los arreglos oficiales para que te aprueben y te devuelvan el gas."
        badges={["Chao Sello Rojo", "Pruebas de Presión", "Inspección Aprobada"]}
      />

      <StatsBlock />
      
      <LocalCoverageBlock />

      <ProblemBlock 
        title="Un sello rojo significa quedarse sin duchas ni cocina"
        subtitle="No puedes pasar semanas esperando a que un maestro te devuelva el agua caliente."
        problems={problems}
      />

      <CTABlock />

      <SolutionBlock 
        title="Te dejamos la casa lista para que pases la prueba"
        description="Recuperar el Sello Verde no se trata de hacer parches a medias para engañar al inspector. Se trata de dejar tus tubos y calefones súper seguros para tu propia familia. Nosotros vamos a tu casa, tomamos la lista de cosas malas que te anotaron, y las reparamos una por una bajo la ley. Cuando terminamos, hacemos una prueba de presión con máquinas para asegurarnos de que el inspector te va a dar el sello verde a la primera."
        benefits={[
          "Arreglamos exactamente lo que el inspector te reprobó.",
          "Hacemos la famosa Prueba de Hermeticidad (que los tubos no boten).",
          "Te entregamos los papeles oficiales TC6.",
          "Volvemos a dejarte el suministro de gas funcionando."
        ]}
      />

      <div className="bg-white py-10 container mx-auto px-6 text-center text-slate-600">
        <p>
          Si no sabes muy bien qué hacer con esos papeles que te dejaron, revisa también cómo hacemos la <Link to="/normalizacion-gas-concepcion" className="text-blue-600 font-semibold hover:underline">Normalización de Gas</Link> que va muy de la mano con esto. También, para que sepas quiénes somos, revisa nuestra sección de <Link to="/instalador-autorizado-sec-concepcion" className="text-blue-600 font-semibold hover:underline">Instalador SEC</Link>. (Y ojo, si notas que tu medidor de agua también gira extraño, búscanos en <Link to="/deteccion-fugas-agua-concepcion" className="text-blue-600 font-semibold hover:underline">Detección de Fugas</Link>).
        </p>
      </div>

      <TechVisualBlock 
        title="Los tres colores de la inspección"
        subtitle="Qué significa la calcomanía que te pegaron en la puerta"
        technologies={technologies} 
      />

      <StepTimeline title="Cómo recuperamos tu Sello Verde" steps={steps} />

      <DifferentiatorBlock />

      <EEATBlock />

      <SecCrossLinkBlock />

      <ShortFAQ title="Dudas sobre la inspección del gas" faqs={faqs} />
    </div>
  );
};

export default SelloVerdeSecConcepcion;
