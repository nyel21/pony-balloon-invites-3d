
import React from 'react';
import { Clock, Heart, Gift, Camera, Cake, Music } from 'lucide-react';

const EventProgram = () => {
  const programItems = [
    {
      time: '3:30 PM',
      title: 'Welcome & Arrival',
      description: 'Guests arrive and settle in',
      icon: Heart,
      color: 'mcdonalds-red'
    },
    {
      time: '4:00 PM',
      title: 'Dedication Ceremony',
      description: 'Special blessing for baby Dos',
      icon: Gift,
      color: 'mcdonalds-yellow'
    },
    {
      time: '4:30 PM',
      title: 'Photo Session',
      description: 'Capture precious memories',
      icon: Camera,
      color: 'mcdonalds-red'
    },
    {
      time: '5:00 PM',
      title: 'Fun Games & Activities',
      description: 'My Little Pony themed games',
      icon: Music,
      color: 'mcdonalds-yellow'
    },
    {
      time: '5:45 PM',
      title: 'Birthday Cake Ceremony',
      description: 'Taya blows out her candles',
      icon: Cake,
      color: 'mcdonalds-red'
    },
    {
      time: '6:30 PM',
      title: 'Thank You & Farewell',
      description: 'Take home memories and treats',
      icon: Heart,
      color: 'mcdonalds-yellow'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      'mcdonalds-red': 'bg-red-600 text-white',
      'mcdonalds-yellow': 'bg-yellow-400 text-red-800'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-500 text-white';
  };

  return (
    <section id="program" className="py-20 bg-gradient-to-b from-red-100 via-yellow-50 to-red-50 relative overflow-hidden">
      {/* McDonald's themed background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl animate-bounce" style={{ animationDelay: '0s' }}>🍟</div>
        <div className="absolute top-32 right-16 text-5xl animate-bounce" style={{ animationDelay: '1s' }}>🍔</div>
        <div className="absolute bottom-20 left-20 text-4xl animate-bounce" style={{ animationDelay: '2s' }}>🥤</div>
        <div className="absolute bottom-40 right-12 text-6xl animate-bounce" style={{ animationDelay: '0.5s' }}>🍟</div>
        <div className="absolute top-20 right-32 text-4xl animate-bounce" style={{ animationDelay: '1.5s' }}>🍔</div>
        <div className="absolute bottom-60 left-8 text-5xl animate-bounce" style={{ animationDelay: '2.5s' }}>🥤</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">
            Event Program
          </h2>
          <p className="text-xl text-gray-700 font-bold">
            Here's what we have planned for our special day at McDonald's!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - McDonald's colors */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-400 via-yellow-400 to-red-400 rounded-full"></div>

            {programItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 ${getColorClasses(item.color)}`}
                ></div>

                {/* Content card */}
                <div
                  className={`ml-20 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="glass rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg perspective-1000 border-2 border-yellow-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-3 rounded-full ${getColorClasses(item.color)}`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-red-600" />
                          <span className="text-sm font-bold text-red-700">{item.time}</span>
                        </div>
                        <h3 className="text-lg font-bold text-red-800">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 font-medium">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto border-2 border-yellow-300 bg-gradient-to-r from-red-50 to-yellow-50">
            <h3 className="text-2xl font-bold text-red-800 mb-4">Special Notes</h3>
            <div className="space-y-3 text-red-700 font-medium">
              <p>📸 Professional photographer will be present</p>
              <p>🎁 Giveaways and party favors for all guests</p>
              <p>🍽️ McDonald's treats and Happy Meals will be served</p>
              <p>👶 Child-friendly activities in the play area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventProgram;
