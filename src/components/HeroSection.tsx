
import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import EventDetails from './EventDetails';
import RSVPForm from './RSVPForm';

const HeroSection = () => {
  const [showEventDetails, setShowEventDetails] = React.useState(false);
  const [showRSVP, setShowRSVP] = React.useState(false);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background with dual theme */}
      <div className="absolute inset-0">
        <div className="flex h-full">
          {/* Taya's side - My Little Pony theme */}
          <div className="w-1/2 bg-gradient-to-br from-pony-100 via-pink-100 to-purple-100 relative">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-pony-400 to-pink-400 rounded-full animate-float"></div>
              <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-purple-400 to-pony-500 rounded-full animate-bounce-soft" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full animate-pulse-gentle" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
          
          {/* Dos' side - Teddy Bear & Hot Air Balloon theme */}
          <div className="w-1/2 bg-gradient-to-bl from-teddy-100 via-balloon-100 to-blue-100 relative">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-20 right-10 w-18 h-18 bg-gradient-to-r from-teddy-400 to-balloon-400 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-40 left-20 w-14 h-14 bg-gradient-to-r from-balloon-300 to-teddy-300 rounded-full animate-bounce-soft" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute bottom-40 right-20 w-22 h-22 bg-gradient-to-r from-blue-300 to-balloon-400 rounded-full animate-pulse-gentle" style={{ animationDelay: '2.5s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full pt-20 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 perspective-1000">
            <div className="rainbow-text transform-3d">
              Dos' Dedication &
            </div>
            <div className="rainbow-text transform-3d mt-2">
              Taya's 4th Birthday
            </div>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
            A Magical Dual Celebration
          </p>

          {/* Celebrants photo placeholder */}
          <div className="mb-12 perspective-1000">
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden glass transform hover:scale-105 transition-transform duration-500 animate-pulse-gentle">
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop&crop=face"
                alt="Dos and Taya"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Quick info cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
            <div className="glass rounded-xl p-4 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <Calendar className="w-6 h-6 text-pony-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">July 26, 2025</p>
            </div>
            <div className="glass rounded-xl p-4 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <Clock className="w-6 h-6 text-balloon-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">3:30-6:30 PM</p>
            </div>
            <div className="glass rounded-xl p-4 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <MapPin className="w-6 h-6 text-teddy-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">McDonald's Ulong Tubig</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setShowEventDetails(true)}
              className="bg-gradient-to-r from-pony-500 to-pink-500 hover:from-pony-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-gentle"
            >
              Event Details
            </button>
            <button
              onClick={() => setShowRSVP(true)}
              className="bg-gradient-to-r from-balloon-500 to-teddy-500 hover:from-balloon-600 hover:to-teddy-600 text-white px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-gentle"
              style={{ animationDelay: '1s' }}
            >
              RSVP Now
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <EventDetails 
        isOpen={showEventDetails} 
        onClose={() => setShowEventDetails(false)} 
      />
      <RSVPForm 
        isOpen={showRSVP} 
        onClose={() => setShowRSVP(false)} 
      />
    </section>
  );
};

export default HeroSection;
