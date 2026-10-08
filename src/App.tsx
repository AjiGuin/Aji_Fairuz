import { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import { site } from './config/site';

const MIN_SPLASH_MS = 1500;

const App = () => {
  const [loading, setLoading] = useState(true);
  const ready = !loading;

  useEffect(() => {
    let cancelled = false;
    const started = Date.now();
    const preload = new Image();
    preload.src = site.portrait;
    const finish = () => {
      if (cancelled) return;
      const waited = Date.now() - started;
      const remaining = Math.max(0, MIN_SPLASH_MS - waited);
      window.setTimeout(() => {
        if (!cancelled) setLoading(false);
      }, remaining);
    };
    if (preload.complete) {
      finish();
    } else {
      preload.addEventListener('load', finish, { once: true });
      preload.addEventListener('error', finish, { once: true });
    }
    const fallback = window.setTimeout(() => {
      if (!cancelled) setLoading(false);
    }, MIN_SPLASH_MS + 3500);
    return () => {
      cancelled = true;
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar visible={ready} />
      <main id="main">
        <Hero ready={ready} loading={loading} />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
