import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import Footer from '../components/Footer';
import { PhotoCategory, Photo } from '../types';

// Mock Data
const photos: Photo[] = [
  { id: 1, category: PhotoCategory.CEREMONY, src: 'https://images.unsplash.com/photo-1519225468316-7440a4203305?ixlib=rb-4.0.3&w=800&q=80', alt: 'Vows' },
  { id: 2, category: PhotoCategory.PORTRAITS, src: 'https://images.unsplash.com/photo-1621801306899-787d50216d7a?ixlib=rb-4.0.3&w=800&q=80', alt: 'Portrait 1' },
  { id: 3, category: PhotoCategory.RECEPTION, src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&w=800&q=80', alt: 'Party' },
  { id: 4, category: PhotoCategory.CEREMONY, src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&w=800&q=80', alt: 'Ring' },
  { id: 5, category: PhotoCategory.PORTRAITS, src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&w=800&q=80', alt: 'Walk' },
  { id: 6, category: PhotoCategory.RECEPTION, src: 'https://images.unsplash.com/photo-1470753937643-efeb931202a9?ixlib=rb-4.0.3&w=800&q=80', alt: 'Dance' },
  { id: 7, category: PhotoCategory.CEREMONY, src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&w=800&q=80', alt: 'Flowers' },
  { id: 8, category: PhotoCategory.PORTRAITS, src: 'https://images.unsplash.com/photo-1522673607200-1645062cd955?ixlib=rb-4.0.3&w=800&q=80', alt: 'Smile' },
  { id: 9, category: PhotoCategory.RECEPTION, src: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?ixlib=rb-4.0.3&w=800&q=80', alt: 'Cake' },
  { id: 10, category: PhotoCategory.PORTRAITS, src: 'https://images.unsplash.com/photo-1520854221256-17451cc330e7?ixlib=rb-4.0.3&w=800&q=80', alt: 'Holding Hands' },
  { id: 11, category: PhotoCategory.CEREMONY, src: 'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?ixlib=rb-4.0.3&w=800&q=80', alt: 'Aisle' },
  { id: 12, category: PhotoCategory.RECEPTION, src: 'https://images.unsplash.com/photo-1545853332-147d5083187e?ixlib=rb-4.0.3&w=800&q=80', alt: 'Cheers' },
];

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PhotoCategory>(PhotoCategory.ALL);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const categories = Object.values(PhotoCategory);

  const filteredPhotos = activeCategory === PhotoCategory.ALL 
    ? photos 
    : photos.filter(p => p.category === activeCategory);

  const totalPages = Math.ceil(filteredPhotos.length / itemsPerPage);
  const currentPhotos = filteredPhotos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="min-h-screen bg-rose-50/30 flex flex-col">
      {/* Simple Header */}
      <header className="bg-white shadow-sm py-4 sticky top-0 z-30">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-rose-500 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Home</span>
          </Link>
          <h1 className="font-serif text-xl font-bold text-gray-800 hidden md:block">Jane & Michael</h1>
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors">
            <Download size={16} />
            <span className="hidden sm:inline">Download All</span>
          </button>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12">
        
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Wedding Gallery</h2>
          <p className="text-rose-500 font-medium">October 26, 2024 | The Grand Vineyard Estate</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-rose-500 text-white shadow-md transform scale-105' 
                  : 'bg-white text-gray-600 hover:bg-rose-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {currentPhotos.map((photo) => (
            <div key={photo.id} className="group relative aspect-[3/4] sm:aspect-square md:aspect-[4/5] overflow-hidden rounded-3xl bg-gray-200 shadow-sm hover:shadow-xl transition-all duration-500">
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-white/80 text-xs uppercase tracking-wider font-bold">{photo.category}</span>
                <h3 className="text-white font-serif text-xl">{photo.alt}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
            <button 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-600 hover:bg-rose-100 disabled:opacity-50 transition-colors"
            >
                &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-full font-medium transition-all ${
                    currentPage === page 
                    ? 'bg-rose-500 text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-rose-100'
                }`}
                >
                {page}
                </button>
            ))}
            <button 
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-600 hover:bg-rose-100 disabled:opacity-50 transition-colors"
            >
                &gt;
            </button>
            </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;