import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const schedule = [
  { time: '3:30 PM', title: 'Guest Arrival', desc: 'Welcome drinks and seating.' },
  { time: '4:00 PM', title: 'The Ceremony', desc: 'Exchange of vows at the Garden.' },
  { time: '5:00 PM', title: 'Cocktail Hour', desc: 'Enjoy hors d\'oeuvres and signature cocktails.' },
  { time: '6:30 PM', title: 'Reception Dinner', desc: 'Dinner, speeches, and toasts.' },
  { time: '10:00 PM', title: 'Send Off', desc: 'Sparkler exit for the newlyweds.' },
];

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-rose-500 font-medium tracking-widest uppercase text-sm">Order of Events</span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mt-3">Wedding Schedule</h2>
          <p className="text-gray-500 mt-4">Here is what you can expect during our special day.</p>
        </div>

        <div className="relative border-l-2 border-rose-100 ml-4 md:ml-auto md:mx-auto space-y-12 pl-8 md:pl-0">
          {schedule.map((item, index) => (
            <div key={index} className="relative flex flex-col md:flex-row md:items-center md:justify-between group">
              
              {/* Dot on Line */}
              <div className="absolute -left-[39px] md:left-1/2 md:-ml-[9px] top-0 w-5 h-5 rounded-full border-4 border-white bg-rose-500 shadow-sm z-10"></div>
              
              {/* Time (Left on Desktop) */}
              <div className="md:w-1/2 md:pr-12 md:text-right mb-2 md:mb-0">
                 <span className="font-bold text-rose-500 text-xl">{item.time}</span>
              </div>

              {/* Content (Right on Desktop) */}
              <div className="md:w-1/2 md:pl-12">
                <h3 className="font-serif text-2xl text-gray-800 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;