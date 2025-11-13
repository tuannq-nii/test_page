import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Couple: React.FC = () => {
  return (
    <section id="couple" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-rose-500 font-medium tracking-widest uppercase text-sm">The Happy Couple</span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mt-3">Bride & Groom</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-24">
          {/* Bride */}
          <div className="flex-1 text-center group">
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full border-4 border-rose-100 transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Jane Doe" 
                className="w-full h-full object-cover rounded-full shadow-lg relative z-10"
              />
            </div>
            <h3 className="font-serif text-3xl text-gray-900 mb-2">Jane Doe</h3>
            <p className="text-rose-500 font-medium mb-4">The Bride</p>
            <p className="text-gray-600 leading-relaxed max-w-xs mx-auto mb-6">
              Jane is an architect who loves coffee, morning runs, and sketching old buildings. She fell in love with Michael's sense of humor instantly.
            </p>
            <div className="flex justify-center gap-4">
              <button className="p-2 bg-gray-100 rounded-full hover:bg-rose-100 hover:text-rose-500 transition-colors">
                <Facebook size={18} />
              </button>
              <button className="p-2 bg-gray-100 rounded-full hover:bg-rose-100 hover:text-rose-500 transition-colors">
                <Instagram size={18} />
              </button>
            </div>
          </div>

          {/* Divider for desktop */}
          <div className="hidden md:block w-px h-80 bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>

          {/* Groom */}
          <div className="flex-1 text-center group">
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full border-4 border-rose-100 transform -translate-x-3 translate-y-3 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Michael Smith" 
                className="w-full h-full object-cover rounded-full shadow-lg relative z-10"
              />
            </div>
            <h3 className="font-serif text-3xl text-gray-900 mb-2">Michael Smith</h3>
            <p className="text-rose-500 font-medium mb-4">The Groom</p>
            <p className="text-gray-600 leading-relaxed max-w-xs mx-auto mb-6">
              Michael is a software engineer who enjoys hiking, photography, and cooking. He knew Jane was the one from their very first coffee date.
            </p>
            <div className="flex justify-center gap-4">
              <button className="p-2 bg-gray-100 rounded-full hover:bg-rose-100 hover:text-rose-500 transition-colors">
                <Facebook size={18} />
              </button>
              <button className="p-2 bg-gray-100 rounded-full hover:bg-rose-100 hover:text-rose-500 transition-colors">
                <Twitter size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Couple;