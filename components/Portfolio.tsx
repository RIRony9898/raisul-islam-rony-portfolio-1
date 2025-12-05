import { motion } from "framer-motion";
import React from "react";
import { PROJECTS } from "../constants";
import { SectionHeader } from "./SectionHeader";

export const Portfolio: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { scale: 1.1 },
    visible: { scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader title="My Recent" highlight="Work" />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-card rounded-xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all group"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="relative h-64 overflow-hidden"
                variants={imageVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
              </motion.div>

              <div className="p-6 relative">
                <motion.h3
                  className="text-2xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-gray-400 text-sm mb-4 line-clamp-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="text-xs px-3 py-1 bg-gray-800 text-primary rounded-full border border-gray-700"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: 0.5 + tagIndex * 0.1,
                        duration: 0.3,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, backgroundColor: "#8b5cf6" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.button
                  className="px-6 py-2 bg-primary hover:bg-violet-700 text-white text-sm font-semibold rounded-md transition-colors"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  View Project
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
