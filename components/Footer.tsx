import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-100">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
        </div>
        <h3 className="font-serif text-xl text-gray-800 mb-2">Jane & Michael</h3>
        <p className="text-gray-500 text-sm mb-8">Thank you for celebrating with us.</p>
        <p className="text-gray-400 text-xs">
          © 2024 Jane & Michael. Photos by The Talented Photographer.
        </p>
      </div>
    </footer>
  );
};

export default Footer;