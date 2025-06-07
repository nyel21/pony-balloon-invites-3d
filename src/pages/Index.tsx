
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import CountdownTimer from '../components/CountdownTimer';
import EventProgram from '../components/EventProgram';
import PhotoGallery from '../components/PhotoGallery';
import LocationMap from '../components/LocationMap';
import LoadingPage from '../components/LoadingPage';
import AnimatedDivider from '../components/AnimatedDivider';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the beautiful calligraphy effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // 3.5 seconds for a nice loading experience

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="min-h-screen scroll-smooth">
      <Navigation />
      
      <HeroSection />
      
      <AnimatedDivider variant="rainbow" />
      
      <CountdownTimer />
      
      <AnimatedDivider variant="pony" />
      
      <EventProgram />
      
      <AnimatedDivider variant="balloon" />
      
      <PhotoGallery />
      
      <AnimatedDivider variant="rainbow" />
      
      <LocationMap />
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-pony-600 via-balloon-600 to-teddy-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Thank You for Celebrating With Us!
          </h3>
          <p className="text-lg mb-6">
            Dos' Dedication & Taya's 4th Birthday
          </p>
          <p className="text-sm opacity-80">
            July 26, 2025 • McDonald's Ulong Tubig • 3:30-6:30 PM
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <div className="mt-6">
            <Link 
              to="/admin" 
              className="text-white/70 hover:text-white text-sm underline transition-colors"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
