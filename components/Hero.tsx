import React from "react";
import { SOCIAL_LINKS } from "../constants";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Raisul Islam Rony
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold">
            Full Stack Developer
          </h2>
          <p className="text-gray-400 max-w-lg text-lg leading-relaxed">
            I build dynamic and responsive web applications using React,
            Node.js, Express, and MongoDB. I love turning ideas into powerful,
            user-friendly digital experiences.
          </p>

          <div className="flex gap-4 pt-2">
            {SOCIAL_LINKS.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                title={Icon.name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1">
              Hire Me
            </button>
            <button className="px-8 py-3 border border-purple-500 rounded-full text-white font-semibold hover:bg-purple-500/10 transition-all">
              Download CV
            </button>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center relative">
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-pulse"></div>
            <img
              src="https://i.ibb.co.com/xK9Z7rP0/Rony-Portfolio-Image.jpg"
              alt="Tanvir Ahmed"
              className="w-full h-full object-cover rounded-full border-4 border-card shadow-2xl z-10 relative"
            />
            {/* Decorative circle behind */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-full bg-gradient-to-tr from-primary to-transparent opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
