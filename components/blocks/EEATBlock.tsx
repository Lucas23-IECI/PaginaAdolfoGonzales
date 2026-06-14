import React from 'react';
import { Award, ShieldCheck, MapPin, UserCheck, HardHat, CheckCircle } from 'lucide-react';

const EEATBlock: React.FC = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-200">
      <div className="container mx-auto px-6">
        
        {/* Profile Section */}
        <div className="max-w-4xl mx-auto mb-16 bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3 flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-blue-200 rounded-full flex items-center justify-center mb-4">
              <HardHat className="w-16 h-16 text-blue-700" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">Adolfo Gonzales</h3>
            <span className="text-blue-600 font-semibold mt-1">Especialista Técnico</span>
          </div>
          <div className="md:w-2/3">
            <h4 className="text-xl font-bold text-slate-800 mb-3">¿Quién va a tu casa?</h4>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Soy Instalador Autorizado SEC Clase 3. Me dedico personalmente a buscar esas fugas de agua que nadie más encuentra usando máquinas de ultrasonido, y a dejar las redes de gas listas para pasar la prueba del Sello Verde. Sin adivinar y sin romper tu casa entera.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Instalador Autorizado SEC</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Máquinas de Ultrasonido</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Informes para Seguros</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Trabajo 100% Legal</div>
            </div>
          </div>
        </div>

        {/* Experience Case Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Una historia de la semana pasada...</h3>
          <div className="bg-slate-900 text-slate-300 rounded-2xl p-6 md:p-8 italic text-lg leading-relaxed shadow-lg">
            "Nos llamaron de una casa acá en Concepción porque la cuenta del agua les había salido por las nubes. No había pozas ni paredes mojadas. Le metimos gas trazador a las tuberías por debajo del radier y nuestro micrófono nos marcó un punto súper claro en medio del pasillo. Levantamos una pura palmeta de cerámica y ¡ahí estaba el tubo rajado! Reparamos eso en el día y les salvamos de tener que picar medio living."
          </div>
        </div>

        {/* Badges Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
            <Award className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h4 className="font-bold text-slate-900 mb-2">Procedimientos Certificados</h4>
            <p className="text-slate-600 text-sm">Todo lo que hacemos de gas queda firmado bajo mi credencial de la SEC.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
            <ShieldCheck className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h4 className="font-bold text-slate-900 mb-2">Equipamiento Profesional</h4>
            <p className="text-slate-600 text-sm">No adivinamos dónde está la fuga, la escuchamos y la vemos con cámaras.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
            <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h4 className="font-bold text-slate-900 mb-2">En el Gran Concepción</h4>
            <p className="text-slate-600 text-sm">Andamos por Concepción, San Pedro, Talcahuano, Chiguayante, Penco, Tomé y Lota.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
            <UserCheck className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h4 className="font-bold text-slate-900 mb-2">Diagnóstico Técnico</h4>
            <p className="text-slate-600 text-sm">Trabajamos midiendo presión y haciendo pruebas reales en tus tubos.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EEATBlock;
