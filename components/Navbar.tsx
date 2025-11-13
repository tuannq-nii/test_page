import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Our Story', action: () => handleScrollTo('story') },
    { name: 'Events', action: () => handleScrollTo('schedule') },
    { name: 'RSVP', action: () => handleScrollTo('rsvp') },
  ];

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || !isHome ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
  }`;

  const textClasses = isScrolled || !isHome ? 'text-gray-800' : 'text-white';

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-serif font-bold flex items-center gap-2 ${textClasses}`}>
          <Heart className={`w-6 h-6 ${isScrolled || !isHome ? 'text-rose-500 fill-rose-500' : 'text-white fill-white'}`} />
          Jane & Michael
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={link.action}
              className={`text-sm font-medium uppercase tracking-widest hover:text-rose-500 transition-colors ${textClasses}`}
            >
              {link.name}
            </button>
          ))}
          <Link 
            to="/gallery" 
            className={`text-sm font-medium uppercase tracking-widest hover:text-rose-500 transition-colors ${textClasses}`}
          >
            Gallery
          </Link>
          <button
            onClick={() => handleScrollTo('rsvp')}
            className="px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all shadow-lg transform hover:scale-105 font-medium text-sm"
          >
            Confirm Attendance
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden ${textClasses}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={link.action}
              className="text-gray-800 font-medium uppercase text-sm"
            >
              {link.name}
            </button>
          ))}
          <Link 
            to="/gallery" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-800 font-medium uppercase text-sm"
          >
            Gallery
          </Link>
          <button
             onClick={() => handleScrollTo('rsvp')}
             className="px-8 py-3 bg-rose-500 text-white rounded-full text-sm font-bold"
          >
            RSVP Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;