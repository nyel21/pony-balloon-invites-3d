
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-07-26T15:30:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="countdown" className="py-20 bg-gradient-to-r from-pony-50 to-balloon-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 rainbow-text">
          Countdown to the Big Day!
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 perspective-1000">
            <div className="text-4xl md:text-6xl font-bold text-pony-600 mb-2 transform-3d">
              {timeLeft.days}
            </div>
            <div className="text-gray-700 font-medium">Days</div>
          </div>
          
          <div className="glass rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 perspective-1000" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl md:text-6xl font-bold text-balloon-600 mb-2 transform-3d">
              {timeLeft.hours}
            </div>
            <div className="text-gray-700 font-medium">Hours</div>
          </div>
          
          <div className="glass rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 perspective-1000" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl md:text-6xl font-bold text-teddy-600 mb-2 transform-3d">
              {timeLeft.minutes}
            </div>
            <div className="text-gray-700 font-medium">Minutes</div>
          </div>
          
          <div className="glass rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 perspective-1000" style={{ animationDelay: '0.6s' }}>
            <div className="text-4xl md:text-6xl font-bold text-pink-600 mb-2 transform-3d">
              {timeLeft.seconds}
            </div>
            <div className="text-gray-700 font-medium">Seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
