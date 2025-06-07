
import React from 'react';

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pony-100 via-pink-100 to-balloon-100">
      {/* Background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-2xl animate-sparkle opacity-30">⭐</div>
        <div className="absolute top-32 right-16 text-xl animate-sparkle opacity-30" style={{ animationDelay: '1s' }}>✨</div>
        <div className="absolute bottom-20 left-32 text-lg animate-sparkle opacity-30" style={{ animationDelay: '0.5s' }}>💫</div>
        <div className="absolute top-40 right-8 text-xl animate-sparkle opacity-30" style={{ animationDelay: '1.5s' }}>🌈</div>
        <div className="absolute bottom-32 right-24 text-xl animate-bounce-soft opacity-30" style={{ animationDelay: '2s' }}>🧸</div>
        <div className="absolute top-20 left-1/3 text-lg animate-float opacity-30" style={{ animationDelay: '1.2s' }}>🎈</div>
      </div>

      {/* Main content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        {/* Calligraphy title */}
        <h1 className="calligraphy-text text-5xl md:text-7xl lg:text-8xl mb-8 animate-fade-in">
          <div className="block mb-4" style={{ animationDelay: '0.5s' }}>
            Dos' Dedication
          </div>
          <div className="text-4xl md:text-5xl lg:text-6xl opacity-80" style={{ animationDelay: '1s' }}>
            &
          </div>
          <div className="block mt-4" style={{ animationDelay: '1.5s' }}>
            Taya's 4th Birthday
          </div>
        </h1>

        {/* Loading animation */}
        <div className="flex justify-center space-x-2 animate-fade-in" style={{ animationDelay: '2s' }}>
          <div className="w-4 h-4 bg-gradient-to-r from-pony-400 to-pink-400 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-gradient-to-r from-balloon-400 to-teddy-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pony-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>

        <p className="text-lg text-gray-600 mt-8 animate-fade-in font-medium" style={{ animationDelay: '2.5s' }}>
          Preparing your magical celebration...
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
