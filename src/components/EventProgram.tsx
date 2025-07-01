
import React from 'react';
import { Clock, Heart, Gift, Camera, Cake, Music, Utensils } from 'lucide-react';

const EventProgram = () => {
  const programItems = [
    {
      time: '3:45 PM',
      title: 'Opening Prayer',
      description: 'Blessing to start our celebration',
      icon: Heart,
      color: 'mcdonalds-red'
    },
    {
      time: '4:00 PM',
      title: 'Dedication of Baby Dos',
      description: 'Special blessing ceremony for baby Dos',
      icon: Gift,
      color: 'mcdonalds-yellow'
    },
    {
      time: '4:45 PM',
      title: 'Picture Taking',
      description: 'Capture precious memories together',
      icon: Camera,
      color: 'mcdonalds-red'
    },
    {
      time: '5:15 PM',
      title: 'Celebration of Taya\'s Birthday',
      description: 'Fun and games for everyone',
      icon: Music,
      color: 'mcdonalds-yellow'
    },
    {
      time: '6:00 PM',
      title: 'Eating Time',
      description: 'Enjoy McDonald\'s delicious treats',
      icon: Utensils,
      color: 'mcdonalds-red'
    },
    {
      time: '6:30 PM',
      title: 'Thank You and Farewell',
      description: 'Take home wonderful memories',
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

  // Animated McDonald's food items
  const AnimatedFood = () => (
    <>
      {/* Floating Fries */}
      <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: '0s' }}>
        <div className="text-6xl transform rotate-12 hover:scale-110 transition-transform duration-300">
          🍟
        </div>
      </div>
      
      {/* Floating Burger */}
      <div className="absolute top-32 right-16 animate-bounce-soft" style={{ animationDelay: '1s' }}>
        <div className="text-7xl transform -rotate-6 hover:scale-110 transition-transform duration-300">
          🍔
        </div>
      </div>
      
      {/* Floating Chicken Nuggets */}
      <div className="absolute bottom-40 left-20 animate-pulse-gentle" style={{ animationDelay: '2s' }}>
        <div className="text-5xl transform rotate-45 hover:scale-110 transition-transform duration-300">
          🍗
        </div>
      </div>
      
      {/* Floating Drink */}
      <div className="absolute top-60 right-32 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="text-6xl transform rotate-12 hover:scale-110 transition-transform duration-300">
          🥤
        </div>
      </div>
      
      {/* Floating Apple Pie */}
      <div className="absolute bottom-60 right-20 animate-bounce-soft" style={{ animationDelay: '1.5s' }}>
        <div className="text-5xl transform -rotate-12 hover:scale-110 transition-transform duration-300">
          🥧
        </div>
      </div>
      
      {/* Floating Ice Cream */}
      <div className="absolute top-80 left-32 animate-pulse-gentle" style={{ animationDelay: '2.5s' }}>
        <div className="text-6xl transform rotate-6 hover:scale-110 transition-transform duration-300">
          🍦
        </div>
      </div>
      
      {/* Floating Hash Brown */}
      <div className="absolute bottom-80 left-40 animate-float" style={{ animationDelay: '3s' }}>
        <div className="text-5xl transform -rotate-6 hover:scale-110 transition-transform duration-300">
          🥔
        </div>
      </div>
      
      {/* Floating Coffee */}
      <div className="absolute top-40 right-8 animate-bounce-soft" style={{ animationDelay: '0.8s' }}>
        <div className="text-5xl transform rotate-15 hover:scale-110 transition-transform duration-300">
          ☕
        </div>
      </div>
    </>
  );

  return (
    <section id="program" className="py-20 bg-red-600 relative overflow-hidden">
      {/* McDonald's Logo Background */}
      <div 
        className="absolute inset-0 opacity-10 bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(/lovable-uploads/48f0f406-b639-446c-87ad-604f0ffc4c65.png)`,
          backgroundSize: '300px 300px'
        }}
      ></div>

      {/* Animated McDonald's Food Items */}
      <AnimatedFood />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* McDonald's Menu Header */}
        <div className="text-center mb-16">
          <div className="bg-yellow-400 rounded-3xl p-8 mx-auto max-w-4xl shadow-2xl border-4 border-red-700 relative">
            {/* Mini floating food items around header */}
            <div className="absolute -top-4 -left-4 animate-sparkle">
              <span className="text-3xl">🍟</span>
            </div>
            <div className="absolute -top-4 -right-4 animate-bounce">
              <span className="text-3xl">🍔</span>
            </div>
            <div className="absolute -bottom-4 -left-4 animate-pulse">
              <span className="text-3xl">🥤</span>
            </div>
            <div className="absolute -bottom-4 -right-4 animate-float">
              <span className="text-3xl">🍦</span>
            </div>
            
            <div className="flex justify-center items-center mb-6">
              <img 
                src="/lovable-uploads/48f0f406-b639-446c-87ad-604f0ffc4c65.png" 
                alt="McDonald's Logo" 
                className="w-16 h-16 mr-4"
              />
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  Event Menu
                </h2>
                <div className="text-lg font-bold text-red-600 bg-white px-4 py-1 rounded-full inline-block border-2 border-red-600">
                  Today's Special Program
                </div>
              </div>
            </div>
            <p className="text-xl text-red-700 font-bold">
              Dos' Dedication & Taya's 4th Birthday Celebration
            </p>
          </div>
        </div>

        {/* McDonald's Menu Style Program */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-yellow-400 relative">
            {/* Mini food decorations around the program box */}
            <div className="absolute -top-2 left-20 animate-bounce-soft">
              <span className="text-2xl">🍗</span>
            </div>
            <div className="absolute -top-2 right-20 animate-float">
              <span className="text-2xl">🥔</span>
            </div>
            
            <div className="bg-red-600 text-white text-center py-4 rounded-2xl mb-8">
              <h3 className="text-3xl font-bold">Program Schedule</h3>
              <p className="text-yellow-300 font-medium">July 26, 2025 • McDonald's Ulong Tubig</p>
            </div>

            <div className="grid gap-6">
              {programItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-yellow-50 to-red-50 rounded-2xl p-6 border-3 border-red-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 relative group"
                >
                  {/* Random food items that appear on hover */}
                  <div className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce">
                    <span className="text-lg">
                      {index % 4 === 0 ? '🍟' : index % 4 === 1 ? '🍔' : index % 4 === 2 ? '🥤' : '🍦'}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full ${getColorClasses(item.color)} shadow-lg`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <Clock className="w-4 h-4 text-red-600" />
                          <span className="text-lg font-bold text-red-700 bg-yellow-200 px-3 py-1 rounded-full">
                            {item.time}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-red-800 mb-1">{item.title}</h3>
                        <p className="text-gray-700 font-medium">{item.description}</p>
                      </div>
                    </div>
                    <div className="bg-red-600 text-yellow-400 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow-lg">
                      M
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* McDonald's Footer Notes */}
        <div className="text-center mt-16">
          <div className="bg-yellow-400 rounded-3xl p-8 max-w-3xl mx-auto border-4 border-red-700 shadow-2xl relative">
            {/* Footer food decorations */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 animate-bounce">
              <span className="text-4xl">🍔</span>
            </div>
            <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 animate-float">
              <span className="text-3xl">🍟</span>
            </div>
            <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 animate-pulse-gentle">
              <span className="text-3xl">🥤</span>
            </div>
            
            <div className="flex justify-center items-center mb-6">
              <img 
                src="/lovable-uploads/48f0f406-b639-446c-87ad-604f0ffc4c65.png" 
                alt="McDonald's Logo" 
                className="w-12 h-12 mr-3"
              />
              <h3 className="text-3xl font-bold text-red-800">Special Notes</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-red-700 font-bold text-lg">
              <div className="bg-white p-4 rounded-xl border-2 border-red-600 relative overflow-hidden">
                <div className="absolute top-1 right-1 animate-sparkle">
                  <span className="text-sm">📸</span>
                </div>
                📸 Professional photographer available
              </div>
              <div className="bg-white p-4 rounded-xl border-2 border-red-600 relative overflow-hidden">
                <div className="absolute top-1 right-1 animate-pulse">
                  <span className="text-sm">🎁</span>
                </div>
                🎁 Party favors for all guests
              </div>
              <div className="bg-white p-4 rounded-xl border-2 border-red-600 relative overflow-hidden">
                <div className="absolute top-1 right-1 animate-bounce">
                  <span className="text-sm">🍟</span>
                </div>
                🍽️ McDonald's treats will be served
              </div>
              <div className="bg-white p-4 rounded-xl border-2 border-red-600 relative overflow-hidden">
                <div className="absolute top-1 right-1 animate-float">
                  <span className="text-sm">👶</span>
                </div>
                👶 Child-friendly celebration
              </div>
            </div>
            <div className="mt-8 text-white bg-red-600 px-8 py-4 rounded-full inline-block font-bold text-xl shadow-lg relative">
              <div className="absolute -left-2 -top-2 animate-sparkle">
                <span className="text-xl">✨</span>
              </div>
              Ba da ba ba ba... I'm lovin' it! 🎉
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventProgram;
