import { motion } from "framer-motion";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { PROFESSIONAL_SKILLS, TECHNICAL_SKILLS } from "../constants";
import { SectionHeader } from "./SectionHeader";

const CircularProgress: React.FC<{ percentage: number; label: string }> = ({
  percentage,
  label,
}) => {
  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg height={radius * 2} width={radius * 2} className="rotate-[-90deg]">
          <circle
            stroke="#1f2937"
            strokeWidth={stroke}
            fill="transparent"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="currentColor"
            strokeWidth={stroke}
            strokeDasharray={circumference + " " + circumference}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            fill="transparent"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="text-primary transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
          {percentage}%
        </div>
      </div>
      <span className="text-white font-medium">{label}</span>
    </div>
  );
};

export const Skills: React.FC = () => {
  const progressRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    progressRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { width: 0 },
          {
            width: `${TECHNICAL_SKILLS[index].percentage}%`,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className="py-24 bg-[#140c1f]">
      <div className="container mx-auto px-6">
        {/* Technical Skills */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader title="My" highlight="Skills" />
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {TECHNICAL_SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-card p-6 rounded-lg border border-gray-800"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className="flex justify-between mb-2">
                  <motion.span
                    className="font-bold text-white flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {/* Placeholder for actual logos, using colored boxes for stability */}
                    <span
                      className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold"
                      style={{ backgroundColor: skill.color, color: "black" }}
                    >
                      {skill.name.slice(0, 2)}
                    </span>
                    {skill.name}
                  </motion.span>
                  <motion.span
                    className="text-gray-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {skill.percentage}%
                  </motion.span>
                </div>
                <div className="w-full bg-gray-700 h-2.5 rounded-full overflow-hidden">
                  <div
                    ref={(el) => {
                      if (el) progressRefs.current[index] = el;
                    }}
                    className="h-full rounded-full"
                    style={{ width: 0, backgroundColor: skill.color }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader title="Professional" highlight="Skills" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {PROFESSIONAL_SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <CircularProgress
                  percentage={skill.percentage}
                  label={skill.name}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
