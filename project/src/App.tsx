import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import MantraCard from './components/MantraCard';
import AudioPlayer from './components/AudioPlayer';
import StatsCard from './components/StatsCard';
import { mantras, languages } from './data/mantras';
import { Mantra } from './types/spiritual';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('sa');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<{
    title: string;
    category: string;
    duration: string;
  } | undefined>();

  // Filter mantras based on search and category
  const filteredMantras = useMemo(() => {
    return mantras.filter((mantra: Mantra) => {
      const matchesSearch = 
        mantra.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mantra.sanskrit.includes(searchQuery) ||
        mantra.transliteration.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mantra.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mantra.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'all' || mantra.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Set current track when a mantra is played
  const handleMantraPlay = (mantra: Mantra) => {
    setCurrentTrack({
      title: mantra.title,
      category: mantra.category,
      duration: mantra.duration || '0:00'
    });
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
        languages={languages}
      />

      {/* Category Filter */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Discover Ancient Wisdom
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the profound teachings of Vedas, Upanishads, and sacred mantras. 
            Experience spiritual transformation through authentic Sanskrit wisdom with 
            multi-language support and guided pronunciations.
          </p>
        </div>

        {/* Stats */}
        <StatsCard />

        {/* Search Results Info */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-gray-600">
            {searchQuery ? (
              <span>
                Found <span className="font-semibold text-gray-800">{filteredMantras.length}</span> results for "{searchQuery}"
              </span>
            ) : (
              <span>
                Showing <span className="font-semibold text-gray-800">{filteredMantras.length}</span> {selectedCategory === 'all' ? 'spiritual practices' : selectedCategory + 's'}
              </span>
            )}
          </div>
          
          <div className="text-sm text-gray-500">
            Language: <span className="font-medium">
              {languages.find(lang => lang.code === selectedLanguage)?.nativeName}
            </span>
          </div>
        </div>

        {/* Mantras Grid */}
        {filteredMantras.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMantras.map((mantra) => (
              <div key={mantra.id} onClick={() => handleMantraPlay(mantra)}>
                <MantraCard mantra={mantra} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No results found</h3>
            <p className="text-gray-500">
              Try adjusting your search criteria or browse different categories
            </p>
          </div>
        )}

        {/* Featured Quote */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl p-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="relative z-10">
            <blockquote className="text-2xl font-light mb-4 italic">
              "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः। तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥"
            </blockquote>
            <p className="text-lg opacity-90 mb-2">
              "Where there is Krishna, the Lord of Yoga, and where there is Arjuna, the wielder of bow, there is prosperity, victory, happiness, and righteousness."
            </p>
            <cite className="text-sm opacity-75">- Bhagavad Gita 18.78</cite>
          </div>
        </div>
      </main>

      {/* Audio Player */}
      <AudioPlayer
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        currentTrack={currentTrack}
      />
    </div>
  );
}

export default App;