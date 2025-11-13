import React from 'react';

const storyEvents = [
  {
    year: '2019',
    title: 'First Meeting',
    desc: 'We met at a cozy coffee shop in downtown. What was supposed to be a quick coffee turned into a 4-hour conversation.',
    img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    year: '2020',
    title: 'First Trip Together',
    desc: 'Our first adventure to the mountains. We realized we make great travel companions and even better life partners.',
    img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    year: '2022',
    title: 'Moving In',
    desc: 'We decided to build a home together. Lots of DIY furniture assembly, pizza nights, and laughter.',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    year: '2023',
    title: 'The Proposal',
    desc: 'Michael proposed on a quiet beach at sunset. It was the easiest "Yes" Jane ever said.',
    img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
];

const Story: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-rose-500 font-medium tracking-widest uppercase text-sm">Our Love Journey</span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mt-3">Our Story</h2>
        </div>

        <div className="space-y-12 md:space-y-24 relative">
          {/* Center Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-rose-200 transform -translate-x-1/2"></div>

          {storyEvents.map((event, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image Side */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
                <div className={`relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ${index % 2 !== 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'}`}>
                   <img 
                    src={event.img} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                   />
                </div>
              </div>

              {/* Text Side */}
              <div className={`w-full md:w-1/2 text-center md:text-left px-4 ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                <span className="inline-block px-4 py-1 bg-rose-100 text-rose-600 rounded-full font-bold text-sm mb-4">
                  {event.year}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-3">{event.title}</h3>
                <p className="text-gray-600 leading-relaxed">{event.desc}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;