import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';

interface AudioPlayerProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  currentTrack?: {
    title: string;
    category: string;
    duration: string;
  };
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  isPlaying,
  onPlayPause,
  currentTrack
}) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(75);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  
  const progressRef = useRef<HTMLDivElement>(null);

  // Simulate audio progress
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime(prev => (prev + 1) % 100);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Progress Bar */}
        <div className="mb-3">
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <span>{formatTime(Math.floor(currentTime * 2.4))}</span>
            <div
              ref={progressRef}
              className="flex-1 h-1 bg-gray-200 rounded-full cursor-pointer overflow-hidden"
            >
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300"
                style={{ width: `${currentTime}%` }}
              />
            </div>
            <span>{currentTrack.duration}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          {/* Track Info */}
          <div className="flex items-center space-x-3 flex-1 min-w-0">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
              <Play className="h-4 w-4 text-white" />
            </div>
            <div className="min-w-0">
              <h4 className="text-sm font-semibold text-gray-800 truncate">
                {currentTrack.title}
              </h4>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                {currentTrack.category}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsShuffle(!isShuffle)}
              className={`p-2 rounded-full transition-all duration-200 ${
                isShuffle ? 'text-orange-500 bg-orange-50' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Shuffle className="h-4 w-4" />
            </button>
            
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <SkipBack className="h-5 w-5" />
            </button>

            <button
              onClick={onPlayPause}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </button>

            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <SkipForward className="h-5 w-5" />
            </button>

            <button
              onClick={() => setIsRepeat(!isRepeat)}
              className={`p-2 rounded-full transition-all duration-200 ${
                isRepeat ? 'text-orange-500 bg-orange-50' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Repeat className="h-4 w-4" />
            </button>
          </div>

          {/* Volume */}
          <div className="flex items-center space-x-2 flex-1 justify-end">
            <Volume2 className="h-4 w-4 text-gray-400" />
            <div className="w-20 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                style={{ width: `${volume}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;