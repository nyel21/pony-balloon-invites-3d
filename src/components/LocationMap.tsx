
import React from 'react';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

const LocationMap = () => {
  return (
    <section id="map" className="py-20 bg-gradient-to-b from-teddy-50 to-balloon-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 rainbow-text">
            Find Us Here
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            McDonald's Ulong Tubig Branch, Carmona, Cavite
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="relative">
            <div className="glass rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2298.871758315751!2d121.01857430500603!3d14.298295033692229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d7499706b7b1%3A0x9fe178df8048be82!2sMcDonald's%20Ulong%20Tubig!5e0!3m2!1sen!2sph!4v1749295022942!5m2!1sen!2sph"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              ></iframe>
            </div>
            
            {/* Beacon effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="relative">
                <div className="w-6 h-6 bg-red-500 rounded-full animate-ping absolute"></div>
                <div className="w-6 h-6 bg-red-600 rounded-full relative z-10"></div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-3">
                <MapPin className="w-7 h-7 text-balloon-500" />
                <span>Venue Information</span>
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-pony-500 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Address</h4>
                    <p className="text-gray-600">McDonald's Ulong Tubig Branch</p>
                    <p className="text-gray-600">Carmona, Cavite, Philippines</p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-balloon-500 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Event Time</h4>
                    <p className="text-gray-600">Saturday, July 26, 2025</p>
                    <p className="text-gray-600">3:30 PM - 6:30 PM</p>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-start space-x-4">
                  <div className="bg-teddy-500 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Need Help?</h4>
                    <p className="text-gray-600">Contact us if you need directions</p>
                    <p className="text-gray-600">or have any questions!</p>
                  </div>
                </div>

                {/* Directions Button */}
                <div className="pt-4">
                  <a
                    href="https://www.google.com/maps/dir//McDonald's+Ulong+Tubig+Carmona+Cavite/@14.298295033692229,121.01857430500603"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-balloon-500 to-pony-500 hover:from-balloon-600 hover:to-pony-600 text-white p-4 rounded-xl font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <Navigation className="w-5 h-5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="glass rounded-2xl p-6">
              <h4 className="font-bold text-gray-800 mb-4">Parking & Accessibility</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-balloon-500 rounded-full"></span>
                  <span>Free parking available</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pony-500 rounded-full"></span>
                  <span>Wheelchair accessible</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-teddy-500 rounded-full"></span>
                  <span>Family-friendly environment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>Air-conditioned venue</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
