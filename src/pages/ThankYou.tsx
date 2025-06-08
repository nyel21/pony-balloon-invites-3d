
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Heart, Home, PartyPopper } from 'lucide-react';

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') || 'Friend';

  return (
    <div className="min-h-screen bg-gradient-to-br from-pony-50 via-balloon-50 to-teddy-50 flex items-center justify-center p-4">
      <div className="glass rounded-3xl max-w-2xl w-full p-8 text-center">
        {/* Animated Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          <PartyPopper className="w-12 h-12 text-pony-500 animate-bounce" />
          <Heart className="w-12 h-12 text-balloon-500 animate-pulse-gentle" style={{ animationDelay: '0.2s' }} />
          <PartyPopper className="w-12 h-12 text-teddy-500 animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>

        {/* Main Thank You Message */}
        <h1 className="text-4xl md:text-6xl font-bold rainbow-text mb-6">
          Thank You!
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          Dear {name}
        </h2>

        <div className="space-y-6 mb-8">
          <p className="text-lg text-gray-700">
            We're absolutely thrilled that you'll be joining us for this special celebration!
          </p>
          
          <p className="text-lg text-gray-700">
            Your presence will make Dos' Dedication & Taya's 4th Birthday even more magical! 🎉
          </p>
          
          <div className="bg-gradient-to-r from-pony-100 via-balloon-100 to-teddy-100 rounded-xl p-6">
            <p className="text-gray-800 font-medium">
              📅 July 26, 2025 • 3:30-6:30 PM<br />
              📍 McDonald's Ulong Tubig
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-2 mb-8">
          <div className="w-3 h-3 bg-pony-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-balloon-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-teddy-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>

        {/* Back to Home Button */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-pony-500 via-balloon-500 to-teddy-500 hover:from-pony-600 hover:via-balloon-600 hover:to-teddy-600 text-white px-8 py-4 rounded-xl font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Home className="w-5 h-5" />
          <span>Back to Celebration</span>
        </Link>

        {/* Final Message */}
        <p className="text-sm text-gray-600 mt-6">
          Can't wait to celebrate with you! 💕
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
