import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! (Simulation)');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-[#140c1f]">
      <div className="container mx-auto px-6">
        <SectionHeader title="Contact" highlight="Me" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Image/Illustration */}
            <div className="hidden md:flex justify-center">
                 {/* Simulate the illustration from screenshot using a placeholder with specific styling */}
                 <div className="bg-white/5 p-8 rounded-2xl w-full max-w-md aspect-square flex items-center justify-center relative border border-gray-800">
                    <img 
                        src="https://picsum.photos/id/445/500/500" 
                        alt="Contact Illustration" 
                        className="rounded-xl opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                    />
                 </div>
            </div>

            {/* Right Column: Info & Form */}
            <div className="space-y-8">
                <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                        Get in <span className="text-primary">Touch</span>
                    </h3>
                    <p className="text-gray-400 text-sm">Have any questions or need help? Fill out the form and we'll get back to you as soon as possible.</p>
                    
                    <div className="space-y-2 pt-4">
                        <div className="flex items-center gap-3 text-gray-300">
                            <Phone size={18} className="text-primary" />
                            <span>+880 1777-829308</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <Mail size={18} className="text-primary" />
                            <span>sabbirtanvirahmed18@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <MapPin size={18} className="text-primary" />
                            <span>Dhaka, Bangladesh</span>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                        <input 
                            type="text" 
                            placeholder="Name" 
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({...formState, name: e.target.value})}
                            className="bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        />
                         <input 
                            type="email" 
                            placeholder="Email" 
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({...formState, email: e.target.value})}
                            className="bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                    <textarea 
                        rows={4} 
                        placeholder="Message" 
                        required
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    ></textarea>
                    
                    <button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-violet-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all transform active:scale-95"
                    >
                        Send Message <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};