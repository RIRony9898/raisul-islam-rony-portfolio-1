import React from 'react';

interface SectionHeaderProps {
  title: string;
  highlight: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, highlight }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        {title} <span className="text-primary">{highlight}</span>
      </h2>
    </div>
  );
};