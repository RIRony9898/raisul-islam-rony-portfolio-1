import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  useEffect(() => {
    // GSAP ScrollTrigger setup for global animations
    gsap.set(".animate-on-scroll", { opacity: 0, y: 50 });

    gsap.to(".animate-on-scroll", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".animate-on-scroll",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="antialiased text-slate-200">
      <Navbar />
      <main className='max-w-fit mx-auto px-4 sm:px-6 lg:px-8'>
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
