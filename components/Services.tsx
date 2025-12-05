import { motion } from "framer-motion";
import { gsap } from "gsap";
import { React, useEffect } from "react";
import { SERVICES } from "../constants";
import { SectionHeader } from "./SectionHeader";

export const Services: React.FC = () => {
  useEffect(() => {
    // GSAP animation for background accent
    gsap.fromTo(
      ".services-bg",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-bg",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // GSAP animation for service cards
    gsap.fromTo(
      ".service-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".service-card",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <section id="services" className="py-24 relative">
      {/* Background accent */}
      <div className="services-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/10 blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        <SectionHeader title="My" highlight="Services" />

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card bg-card p-8 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all hover:transform hover:-translate-y-2 group text-center"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="inline-flex mb-6 text-primary group-hover:scale-110 transition-transform"
                variants={iconVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.5 },
                }}
              >
                <service.icon size={48} />
              </motion.div>
              <motion.h3
                className="text-xl font-bold text-white mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="text-gray-400 text-sm leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {service.description}
              </motion.p>
              <motion.button
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm font-semibold opacity-90 hover:opacity-100 transition-opacity"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Read More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
