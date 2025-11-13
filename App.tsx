import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import GalleryPage from './pages/GalleryPage';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="font-sans text-gray-800 antialiased selection:bg-rose-200 selection:text-rose-900">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;