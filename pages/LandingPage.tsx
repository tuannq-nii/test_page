import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/landing/Hero';
import Countdown from '../components/landing/Countdown';
import Couple from '../components/landing/Couple';
import Story from '../components/landing/Story';
import Schedule from '../components/landing/Schedule';
import Location from '../components/landing/Location';
import GalleryPreview from '../components/landing/GalleryPreview';
import RSVP from '../components/landing/RSVP';
import Gifts from '../components/landing/Gifts';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Countdown />
      <Couple />
      <Story />
      <Schedule />
      <Location />
      <GalleryPreview />
      <RSVP />
      <Gifts />
      <Footer />
    </div>
  );
};

export default LandingPage;