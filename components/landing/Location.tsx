import React from 'react';
import { MapPin, Car, Info } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Info Side */}
          <div className="lg:w-2/5 p-10 lg:p-16 flex flex-col justify-center">
            <span className="text-rose-500 font-bold tracking-wider uppercase text-xs mb-2">The Venue</span>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6">The Garden Venue & Grand Ballroom</h2>
            <p className="text-gray-600 mb-8">123 Blossom Lane, Floral City, FL 33555</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-rose-50 rounded-lg text-rose-500">
                  <Car size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Parking</h4>
                  <p className="text-sm text-gray-500 mt-1">Free valet parking is available for all guests at the main entrance.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-rose-50 rounded-lg text-rose-500">
                  <Info size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Accommodations</h4>
                  <p className="text-sm text-gray-500 mt-1">We have reserved a block of rooms at the Grand Hotel. Mention our names for a discount.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side Placeholder */}
          <div className="lg:w-3/5 bg-gray-200 relative min-h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500">
              <div className="text-center">
                 <MapPin className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                 <span className="font-medium">Map Placeholder</span>
                 <p className="text-xs text-gray-500 mt-2">(Google Maps Embed would go here)</p>
              </div>
            </div>
            {/* Simulated map overlay */}
             <div className="absolute inset-0 mix-blend-multiply bg-rose-900/10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;