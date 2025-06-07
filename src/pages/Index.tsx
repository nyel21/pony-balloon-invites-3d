
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import CountdownTimer from '../components/CountdownTimer';
import EventProgram from '../components/EventProgram';
import PhotoGallery from '../components/PhotoGallery';
import LocationMap from '../components/LocationMap';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CountdownTimer />
      <EventProgram />
      <PhotoGallery />
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
        </div>
      </footer>
    </div>
  );
};

export default Index;
