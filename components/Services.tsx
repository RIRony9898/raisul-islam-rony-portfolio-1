import React from 'react';
import { SectionHeader } from './SectionHeader';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative">
       {/* Background accent */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/10 blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        <SectionHeader title="My" highlight="Services" />
        
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-card p-8 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all hover:transform hover:-translate-y-2 group text-center">
              <div className="inline-flex mb-6 text-primary group-hover:scale-110 transition-transform">
                <service.icon size={48} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm font-semibold opacity-90 hover:opacity-100 transition-opacity">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};