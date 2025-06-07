
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
            {/* My Little Pony Particles */}
            <div className="absolute inset-0">
              {/* Magical sparkles */}
              <div className="absolute top-10 left-10 text-2xl animate-sparkle" style={{ animationDelay: '0s' }}>⭐</div>
              <div className="absolute top-32 left-16 text-xl animate-sparkle" style={{ animationDelay: '1s' }}>✨</div>
              <div className="absolute top-20 left-32 text-lg animate-sparkle" style={{ animationDelay: '0.5s' }}>💫</div>
              <div className="absolute top-40 left-8 text-xl animate-sparkle" style={{ animationDelay: '1.5s' }}>⭐</div>
              
              {/* Rainbow elements */}
              <div className="absolute top-24 left-20 text-2xl animate-float" style={{ animationDelay: '0.5s' }}>🌈</div>
              <div className="absolute top-48 left-12 text-lg animate-float" style={{ animationDelay: '2s' }}>🌈</div>
              
              {/* Unicorn and pony elements */}
              <div className="absolute top-16 left-24 text-xl animate-bounce-soft" style={{ animationDelay: '1s' }}>🦄</div>
              <div className="absolute top-44 left-28 text-lg animate-bounce-soft" style={{ animationDelay: '2.5s' }}>🐴</div>
              
              {/* Heart elements */}
              <div className="absolute top-36 left-6 text-lg animate-pulse-gentle" style={{ animationDelay: '0.8s' }}>💖</div>
              <div className="absolute top-52 left-24 text-sm animate-pulse-gentle" style={{ animationDelay: '1.8s' }}>💕</div>
              
              {/* Floating geometric shapes */}
              <div className="absolute top-28 left-4 w-4 h-4 bg-gradient-to-r from-pony-400 to-pink-400 rounded-full animate-float" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute top-14 left-28 w-3 h-3 bg-gradient-to-r from-purple-400 to-pony-500 rounded-full animate-bounce-soft" style={{ animationDelay: '1.2s' }}></div>
              <div className="absolute top-42 left-14 w-5 h-5 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full animate-pulse-gentle" style={{ animationDelay: '2.1s' }}></div>
            </div>
          </div>
          
          {/* Dos' side - Teddy Bear & Hot Air Balloon theme */}
          <div className="w-1/2 bg-gradient-to-bl from-teddy-100 via-balloon-100 to-blue-100 relative">
            {/* Teddy Bear & Hot Air Balloon Particles */}
            <div className="absolute inset-0">
              {/* Hot air balloons */}
              <div className="absolute top-12 right-10 text-2xl animate-float" style={{ animationDelay: '0.5s' }}>🎈</div>
              <div className="absolute top-28 right-20 text-xl animate-float" style={{ animationDelay: '1.5s' }}>🎈</div>
              <div className="absolute top-44 right-8 text-lg animate-float" style={{ animationDelay: '2.5s' }}>🎈</div>
              
              {/* Teddy bears */}
              <div className="absolute top-16 right-24 text-xl animate-bounce-soft" style={{ animationDelay: '1s' }}>🧸</div>
              <div className="absolute top-36 right-16 text-lg animate-bounce-soft" style={{ animationDelay: '2s' }}>🧸</div>
              <div className="absolute top-52 right-28 text-sm animate-bounce-soft" style={{ animationDelay: '0.8s' }}>🧸</div>
              
              {/* Clouds */}
              <div className="absolute top-20 right-12 text-lg animate-pulse-gentle" style={{ animationDelay: '0.7s' }}>☁️</div>
              <div className="absolute top-40 right-32 text-sm animate-pulse-gentle" style={{ animationDelay: '1.7s' }}>☁️</div>
              
              {/* Baby elements */}
              <div className="absolute top-24 right-6 text-lg animate-pulse-gentle" style={{ animationDelay: '1.3s' }}>👶</div>
              <div className="absolute top-48 right-20 text-sm animate-sparkle" style={{ animationDelay: '2.3s' }}>🍼</div>
              
              {/* Floating geometric shapes */}
              <div className="absolute top-18 right-14 w-4 h-4 bg-gradient-to-r from-teddy-400 to-balloon-400 rounded-full animate-float" style={{ animationDelay: '0.8s' }}></div>
              <div className="absolute top-32 right-26 w-3 h-3 bg-gradient-to-r from-balloon-300 to-teddy-300 rounded-full animate-bounce-soft" style={{ animationDelay: '1.8s' }}></div>
              <div className="absolute top-46 right-18 w-5 h-5 bg-gradient-to-r from-blue-300 to-balloon-400 rounded-full animate-pulse-gentle" style={{ animationDelay: '2.8s' }}></div>
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

          {/* Dual celebrants photos */}
          <div className="mb-12 flex justify-center items-center gap-8 perspective-1000">
            {/* Taya's photo */}
            <div className="relative">
              <div className="relative w-48 h-48 rounded-full overflow-hidden glass transform hover:scale-105 transition-transform duration-500 animate-pulse-gentle">
                <img 
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop&crop=face"
                  alt="Taya"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pony-500/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pony-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                Taya - 4 Years Old
              </div>
            </div>

            {/* Dos' photo */}
            <div className="relative">
              <div className="relative w-48 h-48 rounded-full overflow-hidden glass transform hover:scale-105 transition-transform duration-500 animate-pulse-gentle" style={{ animationDelay: '1s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop&crop=face"
                  alt="Baby Dos"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-balloon-500/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-balloon-500 to-teddy-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                Baby Dos - Dedication
              </div>
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
