import React from 'react';
import { SectionHeader } from './SectionHeader';
import { TECHNICAL_SKILLS, PROFESSIONAL_SKILLS } from '../constants';

const CircularProgress: React.FC<{ percentage: number; label: string }> = ({ percentage, label }) => {
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
            strokeDasharray={circumference + ' ' + circumference}
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
  return (
    <section className="py-24 bg-[#140c1f]">
      <div className="container mx-auto px-6">
        
        {/* Technical Skills */}
        <div className="mb-20">
          <SectionHeader title="My" highlight="Skills" />
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {TECHNICAL_SKILLS.map((skill) => (
              <div key={skill.name} className="bg-card p-6 rounded-lg border border-gray-800">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-white flex items-center gap-2">
                    {/* Placeholder for actual logos, using colored boxes for stability */}
                    <span className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold" style={{ backgroundColor: skill.color, color: 'black' }}>
                        {skill.name.slice(0,2)}
                    </span>
                    {skill.name}
                  </span>
                  <span className="text-gray-400">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%`, backgroundColor: skill.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div>
          <SectionHeader title="Professional" highlight="Skills" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {PROFESSIONAL_SKILLS.map((skill) => (
              <CircularProgress key={skill.name} percentage={skill.percentage} label={skill.name} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};