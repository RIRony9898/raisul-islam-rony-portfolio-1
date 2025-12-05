import { motion } from "framer-motion";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-8 border-t border-gray-800 text-center">
      <motion.p
        className="text-gray-500 text-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        © 2025 - Raisul Islam Rony. All rights reserved.
      </motion.p>
    </footer>
  );
};
