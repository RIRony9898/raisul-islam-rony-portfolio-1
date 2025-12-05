import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";
import { SectionHeader } from "./SectionHeader";

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Simulation)");
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-[#140c1f]">
      <div className="container mx-auto px-6">
        <SectionHeader title="Contact" highlight="Me" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image/Illustration */}
          <motion.div
            className="hidden md:flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Simulate the illustration from screenshot using a placeholder with specific styling */}
            <motion.div
              className="bg-white/5 p-8 rounded-2xl w-full max-w-md aspect-square flex items-center justify-center relative border border-gray-800"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="https://picsum.photos/id/445/500/500"
                alt="Contact Illustration"
                className="rounded-xl opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Info & Form */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <motion.h3
                className="text-3xl font-bold text-white flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Get in <span className="text-primary">Touch</span>
              </motion.h3>
              <motion.p
                className="text-gray-400 text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Have any questions or need help? Fill out the form and we'll get
                back to you as soon as possible.
              </motion.p>

              <motion.div
                className="space-y-2 pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-center gap-3 text-gray-300"
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Phone size={18} className="text-primary" />
                  <span>+880 1780-367811</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 text-gray-300"
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Mail size={18} className="text-primary" />
                  <span>rirony59@gmail.com</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 text-gray-300"
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <MapPin size={18} className="text-primary" />
                  <span>Dhaka, Bangladesh</span>
                </motion.div>
              </motion.div>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.input
                  type="text"
                  placeholder="Name"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  whileFocus={{ scale: 1.02, borderColor: "#8b5cf6" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.input
                  type="email"
                  placeholder="Email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  whileFocus={{ scale: 1.02, borderColor: "#8b5cf6" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.textarea
                rows={4}
                placeholder="Message"
                required
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                whileFocus={{ scale: 1.01, borderColor: "#8b5cf6" }}
                transition={{ duration: 0.3 }}
              ></motion.textarea>

              <motion.button
                type="submit"
                className="w-full bg-primary hover:bg-violet-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all transform active:scale-95"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Send Message <Send size={18} />
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
