import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollDown = () => {
    document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519225468316-7440a4203305?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <p className="text-lg md:text-xl uppercase tracking-[0.3em] mb-4 opacity-90 animate-fade-in-up">We Are Getting Married</p>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-fade-in-up delay-100 drop-shadow-lg">
          Jane & Michael
        </h1>
        <p className="text-xl md:text-2xl font-light italic mb-10 animate-fade-in-up delay-200">
          October 26, 2024 &bull; The Grand Vineyard Estate
        </p>
        
        <div className="flex gap-4 animate-fade-in-up delay-300">
          <button 
            onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105 font-bold shadow-lg border-2 border-rose-500"
          >
            RSVP Now
          </button>
          <button 
            onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full transition-all font-bold border-2 border-white"
          >
            View Schedule
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollDown}>
        <ChevronDown className="w-8 h-8 text-white/80" />
      </div>
    </section>
  );
};

export default Hero;