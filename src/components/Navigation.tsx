
import React from 'react';
import { Heart, Star, PartyPopper } from 'lucide-react';

const Navigation = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md bg-white/80 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Star className="w-6 h-6 text-pony-500 animate-sparkle" />
              <Heart className="w-6 h-6 text-teddy-500 animate-pulse-gentle" />
              <PartyPopper className="w-6 h-6 text-balloon-500 animate-bounce-soft" />
            </div>
            <span className="text-lg font-bold rainbow-text">
              Dos & Taya's Celebration
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-pony-600 transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('countdown')}
              className="text-gray-700 hover:text-balloon-600 transition-colors duration-300 font-medium"
            >
              Countdown
            </button>
            <button
              onClick={() => scrollToSection('program')}
              className="text-gray-700 hover:text-teddy-600 transition-colors duration-300 font-medium"
            >
              Program
            </button>
            <button
              onClick={() => scrollToSection('photos')}
              className="text-gray-700 hover:text-pony-600 transition-colors duration-300 font-medium"
            >
              Photos
            </button>
            <button
              onClick={() => scrollToSection('map')}
              className="text-gray-700 hover:text-balloon-600 transition-colors duration-300 font-medium"
            >
              Location
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
