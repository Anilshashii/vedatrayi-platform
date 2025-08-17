import React, { useState } from 'react';
import { Play, Pause, Heart, Bookmark, Star, Clock, User } from 'lucide-react';
import { Mantra } from '../types/spiritual';

interface MantraCardProps {
  mantra: Mantra;
}

const MantraCard: React.FC<MantraCardProps> = ({ mantra }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const categoryColors = {
    mantra: 'from-orange-500 to-red-500',
    veda: 'from-blue-500 to-indigo-500',
    upanishad: 'from-purple-500 to-pink-500',
    affirmation: 'from-green-500 to-teal-500'
  };

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // In a real app, this would control audio playback
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* Header with gradient */}
      <div className={`bg-gradient-to-r ${categoryColors[mantra.category]} p-4 text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-3">
            <div>
              <span className="text-xs font-medium bg-white bg-opacity-20 backdrop-blur-sm px-2 py-1 rounded-full uppercase tracking-wider">
                {mantra.category}
              </span>
              <h3 className="text-xl font-bold mt-2">{mantra.title}</h3>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-2 rounded-full transition-all duration-200 ${
                  isFavorite ? 'bg-white text-red-500' : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                }`}
              >
                <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-full transition-all duration-200 ${
                  isBookmarked ? 'bg-white text-blue-500' : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                }`}
              >
                <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>

          {/* Audio Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePlayPause}
              className="bg-white text-gray-800 rounded-full p-3 hover:scale-105 transition-all duration-200 shadow-lg"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </button>
            <div className="flex items-center space-x-2 text-white text-opacity-90">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{mantra.duration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Sanskrit Text */}
        <div className="mb-4">
          <div className="text-lg font-semibold text-gray-800 leading-relaxed mb-2 sanskrit-text">
            {mantra.sanskrit}
          </div>
          <div className="text-gray-600 italic text-sm leading-relaxed">
            {mantra.transliteration}
          </div>
        </div>

        {/* Meaning */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Meaning</h4>
          <p className="text-gray-600 text-sm leading-relaxed">{mantra.meaning}</p>
        </div>

        {/* Benefits */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Benefits</h4>
          <div className="space-y-1">
            {mantra.benefits.slice(0, 3).map((benefit, index) => (
              <div key={index} className="flex items-start space-x-2">
                <Star className="h-3 w-3 text-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-gray-600 text-sm">{benefit}</span>
              </div>
            ))}
            {mantra.benefits.length > 3 && (
              <div className="text-xs text-gray-500 ml-5">
                +{mantra.benefits.length - 3} more benefits
              </div>
            )}
          </div>
        </div>

        {/* Tags and Difficulty */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {mantra.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4 text-gray-400" />
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${difficultyColors[mantra.difficulty]}`}>
              {mantra.difficulty}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MantraCard;