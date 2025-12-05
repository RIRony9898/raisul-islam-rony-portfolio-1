import React from "react";
import { SectionHeader } from "./SectionHeader";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#140c1f]">
      <div className="container mx-auto px-6">
        <SectionHeader title="About" highlight="Me" />

        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_30px_rgba(139,92,246,0.3)]">
              <img
                src="https://i.ibb.co.com/jvq6dj6s/portfolio-img-2.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              Full Stack Developer!
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I build modern and responsive web applications using{" "}
              <strong className="text-white">
                Next.js, React, Node.js, Express, MongoDB, and Tailwind CSS.
              </strong>
            </p>
            <p className="text-gray-400 leading-relaxed">
              I enjoy creating{" "}
              <strong className="text-white">user-friendly interfaces</strong>{" "}
              and writing{" "}
              <strong className="text-white">clean, efficient code.</strong>
              My goal is to turn ideas into{" "}
              <strong className="text-white">
                interactive digital experiences.
              </strong>
            </p>
            <p className="text-gray-400 leading-relaxed">
              I am continuously learning and improving my skills to deliver the
              best solutions.
            </p>

            <button className="mt-4 px-8 py-2.5 bg-primary hover:bg-violet-700 text-white rounded-full transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
