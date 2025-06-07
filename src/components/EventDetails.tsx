
import React from 'react';
import { X, Calendar, Clock, MapPin, Heart } from 'lucide-react';

interface EventDetailsProps {
  isOpen: boolean;
  onClose: () => void;
}

const EventDetails: React.FC<EventDetailsProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
        <div className="relative p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold rainbow-text mb-4">
              Event Details
            </h2>
            <div className="flex justify-center space-x-2 mb-6">
              <Heart className="w-6 h-6 text-pony-500 animate-pulse" />
              <Heart className="w-6 h-6 text-teddy-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Heart className="w-6 h-6 text-balloon-500 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          <div className="space-y-6">
            {/* Date */}
            <div className="flex items-start space-x-4 p-4 glass rounded-xl">
              <div className="bg-pony-500 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">Date</h3>
                <p className="text-gray-600">Saturday, July 26, 2025</p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-start space-x-4 p-4 glass rounded-xl">
              <div className="bg-balloon-500 p-3 rounded-full">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">Time</h3>
                <p className="text-gray-600">3:30 PM - 6:30 PM</p>
                <p className="text-sm text-gray-500 mt-1">Please arrive on time for the ceremony!</p>
              </div>
            </div>

            {/* Venue */}
            <div className="flex items-start space-x-4 p-4 glass rounded-xl">
              <div className="bg-teddy-500 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">Venue</h3>
                <p className="text-gray-600">McDonald's Ulong Tubig Branch</p>
                <p className="text-gray-600">Carmona, Cavite</p>
                <p className="text-sm text-gray-500 mt-1">Parking available on-site</p>
              </div>
            </div>

            {/* Celebrations */}
            <div className="bg-gradient-to-r from-pony-100 to-balloon-100 p-6 rounded-xl">
              <h3 className="font-bold text-lg text-gray-800 mb-4">Double Celebration</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <h4 className="font-bold text-pony-600 mb-2">Taya's 4th Birthday</h4>
                  <p className="text-sm text-gray-600">My Little Pony Theme</p>
                  <p className="text-xs text-gray-500 mt-1">Rainbow magic & unicorn fun!</p>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <h4 className="font-bold text-teddy-600 mb-2">Dos' Dedication</h4>
                  <p className="text-sm text-gray-600">Teddy Bear & Hot Air Balloon</p>
                  <p className="text-xs text-gray-500 mt-1">Soft hugs & dreamy flights!</p>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="p-4 glass rounded-xl">
              <h3 className="font-bold text-lg text-gray-800 mb-3">What to Expect</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pony-500 rounded-full"></span>
                  <span>Dedication ceremony for baby Dos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-balloon-500 rounded-full"></span>
                  <span>Birthday celebration for Taya</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-teddy-500 rounded-full"></span>
                  <span>Fun games and activities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>Delicious food and cake</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
