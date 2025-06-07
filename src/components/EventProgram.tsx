
import React from 'react';
import { Clock, Heart, Gift, Camera, Cake, Music } from 'lucide-react';

const EventProgram = () => {
  const programItems = [
    {
      time: '3:30 PM',
      title: 'Welcome & Arrival',
      description: 'Guests arrive and settle in',
      icon: Heart,
      color: 'pony'
    },
    {
      time: '4:00 PM',
      title: 'Dedication Ceremony',
      description: 'Special blessing for baby Dos',
      icon: Gift,
      color: 'teddy'
    },
    {
      time: '4:30 PM',
      title: 'Photo Session',
      description: 'Capture precious memories',
      icon: Camera,
      color: 'balloon'
    },
    {
      time: '5:00 PM',
      title: 'Fun Games & Activities',
      description: 'My Little Pony themed games',
      icon: Music,
      color: 'pony'
    },
    {
      time: '5:45 PM',
      title: 'Birthday Cake Ceremony',
      description: 'Taya blows out her candles',
      icon: Cake,
      color: 'pink'
    },
    {
      time: '6:30 PM',
      title: 'Thank You & Farewell',
      description: 'Take home memories and treats',
      icon: Heart,
      color: 'teddy'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      pony: 'bg-pony-500 text-white',
      teddy: 'bg-teddy-500 text-white',
      balloon: 'bg-balloon-500 text-white',
      pink: 'bg-pink-500 text-white'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-500 text-white';
  };

  return (
    <section id="program" className="py-20 bg-gradient-to-b from-balloon-50 to-teddy-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 rainbow-text">
            Event Program
          </h2>
          <p className="text-xl text-gray-600">
            Here's what we have planned for our special day!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-pony-300 via-balloon-300 to-teddy-300 rounded-full"></div>

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
                  <div className="glass rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg perspective-1000">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-3 rounded-full ${getColorClasses(item.color)}`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-bold text-gray-600">{item.time}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Special Notes</h3>
            <div className="space-y-3 text-gray-600">
              <p>📸 Professional photographer will be present</p>
              <p>🎁 Giveaways and party favors for all guests</p>
              <p>🍽️ Refreshments and snacks will be served</p>
              <p>👶 Child-friendly activities throughout the event</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventProgram;
