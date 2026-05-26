import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Landing from './pages/Landing.jsx';
import ProtocolGuardian from './pages/ProtocolGuardian.jsx';
import SolGuard from './pages/SolGuard.jsx';
import Mosaic from './pages/Mosaic.jsx';
import Aivenstu from './pages/Aivenstu.jsx';
import Team from './pages/Team.jsx';
import NotFound from './pages/NotFound.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-argus-bg text-argus-fg font-sans antialiased selection:bg-argus-accent/30 selection:text-argus-fg">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/protocol-guardian" element={<ProtocolGuardian />} />
          <Route path="/solguard" element={<SolGuard />} />
          <Route path="/mosaic" element={<Mosaic />} />
          <Route path="/aivenstu" element={<Aivenstu />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
