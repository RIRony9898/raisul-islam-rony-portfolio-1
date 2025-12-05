import React from 'react';
import { SectionHeader } from './SectionHeader';
import { PROJECTS } from '../constants';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader title="My Recent" highlight="Work" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-card rounded-xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
              </div>
              
              <div className="p-6 relative">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1 bg-gray-800 text-primary rounded-full border border-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="px-6 py-2 bg-primary hover:bg-violet-700 text-white text-sm font-semibold rounded-md transition-colors">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};