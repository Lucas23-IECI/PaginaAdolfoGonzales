import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/pages/Home';
import Privacy from './components/pages/Privacy';
import Terms from './components/pages/Terms';

// Lazy load SEO pages for performance
const DeteccionFugasAguaConcepcion = React.lazy(() => import('./components/pages/seo/DeteccionFugasAguaConcepcion'));
const SelloVerdeSecConcepcion = React.lazy(() => import('./components/pages/seo/SelloVerdeSecConcepcion'));
const GasfiterCertificadoConcepcion = React.lazy(() => import('./components/pages/seo/GasfiterCertificadoConcepcion'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const TitleManager = () => {
  useEffect(() => {
    const originalTitle = document.title;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = '¡Vuelve! Tenemos tu solución 💧';
      } else {
        document.title = originalTitle;
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <TitleManager />
      <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center text-slate-400">Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/terminos" element={<Terms />} />
          
          {/* Rutas Satélite SEO */}
          <Route path="/deteccion-fugas-agua-concepcion" element={<DeteccionFugasAguaConcepcion />} />
          <Route path="/sello-verde-sec-concepcion" element={<SelloVerdeSecConcepcion />} />
          <Route path="/gasfiter-certificado-concepcion" element={<GasfiterCertificadoConcepcion />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
