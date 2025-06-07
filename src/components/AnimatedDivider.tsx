
import React from 'react';

interface AnimatedDividerProps {
  variant?: 'pony' | 'balloon' | 'rainbow';
  className?: string;
}

const AnimatedDivider = ({ variant = 'rainbow', className = '' }: AnimatedDividerProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'pony':
        return 'from-pony-400 via-pink-400 to-purple-400';
      case 'balloon':
        return 'from-balloon-400 via-teddy-400 to-blue-400';
      default:
        return 'from-pony-400 via-pink-400 via-balloon-400 to-teddy-400';
    }
  };

  return (
    <div className={`relative py-12 overflow-hidden ${className}`}>
      {/* Main divider line */}
      <div className="relative flex items-center justify-center">
        <div className={`h-1 w-full max-w-4xl bg-gradient-to-r ${getVariantClasses()} rounded-full opacity-30`}></div>
        
        {/* Animated elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Moving sparkles */}
          <div className="absolute animate-float">
            <div className="flex space-x-12">
              <span className="text-2xl animate-sparkle">⭐</span>
              <span className="text-xl animate-sparkle" style={{ animationDelay: '0.5s' }}>✨</span>
              <span className="text-lg animate-sparkle" style={{ animationDelay: '1s' }}>💫</span>
            </div>
          </div>
          
          {/* Theme icons based on variant */}
          {variant === 'pony' && (
            <div className="absolute animate-bounce-soft">
              <span className="text-2xl">🦄</span>
            </div>
          )}
          {variant === 'balloon' && (
            <div className="absolute animate-bounce-soft">
              <span className="text-2xl">🎈</span>
            </div>
          )}
          {variant === 'rainbow' && (
            <div className="absolute animate-pulse-gentle">
              <span className="text-2xl">🌈</span>
            </div>
          )}
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
        <div className={`w-3 h-3 bg-gradient-to-r ${getVariantClasses()} rounded-full animate-float opacity-60`}></div>
      </div>
      <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
        <div className={`w-4 h-4 bg-gradient-to-r ${getVariantClasses()} rounded-full animate-bounce-soft opacity-60`} style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default AnimatedDivider;
