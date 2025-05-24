import React, { useEffect } from 'react';
import Layout from './layouts/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Keerthana - Video Editor Portfolio";
    
    // Update favicon to match portfolio theme
    const link = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a855f7'%3E%3Cpath d='M4 3a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2H4zm.5 3h15a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5z'/%3E%3C/svg%3E";
    }
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;