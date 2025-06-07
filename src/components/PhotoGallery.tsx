
import React from 'react';
import { Camera, Heart } from 'lucide-react';

const PhotoGallery = () => {
  const photos = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=600&fit=crop',
      alt: 'Taya enjoying her pony toys',
      caption: 'Taya with her favorite pony'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=600&fit=crop',
      alt: 'Baby Dos sleeping peacefully',
      caption: 'Sweet dreams, little Dos'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=600&fit=crop',
      alt: 'Taya and Dos together',
      caption: 'Big sister and little brother'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=600&fit=crop',
      alt: 'Family moment',
      caption: 'Precious family moments'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=600&h=600&fit=crop',
      alt: 'Taya playing',
      caption: 'Taya having fun'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=600&fit=crop',
      alt: 'Baby Dos smiling',
      caption: 'Dos\' precious smile'
    }
  ];

  return (
    <section id="photos" className="py-20 bg-gradient-to-b from-pony-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 rainbow-text">
            Featured Photos
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Camera className="w-6 h-6 text-pony-500" />
            <p className="text-xl text-gray-600">Capturing precious moments</p>
            <Heart className="w-6 h-6 text-pink-500 animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl glass transform hover:scale-105 transition-all duration-500 hover:shadow-2xl perspective-1000"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium text-sm">{photo.caption}</p>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-pony-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="glass rounded-2xl p-6 max-w-md mx-auto">
            <p className="text-gray-600 mb-4">More photos coming soon!</p>
            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 bg-pony-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-balloon-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-teddy-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
