import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;