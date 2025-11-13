import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const GalleryPreview: React.FC = () => {
  // Using Picsum with seeds to stay consistent
  const images = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1511285560982-1356c11d4606?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1520854221256-17451cc330e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Captured Moments</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A glimpse into our engagement shoot and pre-wedding celebrations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {images.map((src, idx) => (
            <div key={idx} className={`overflow-hidden rounded-2xl shadow-md group ${idx % 2 === 0 ? 'translate-y-0' : 'md:translate-y-8'}`}>
              <img 
                src={src} 
                alt="Couple Moment" 
                className="w-full h-64 md:h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-20">
          <Link 
            to="/gallery" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-rose-500 text-white rounded-full font-bold shadow-lg hover:bg-rose-600 hover:shadow-rose-500/30 transition-all transform hover:-translate-y-1"
          >
            View Full Gallery <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;