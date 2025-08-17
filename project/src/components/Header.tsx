import React from 'react';
import { Search, Heart, Settings, Globe, Flower2 } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  languages: Array<{ code: string; name: string; nativeName: string }>;
}

const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  selectedLanguage,
  onLanguageChange,
  languages
}) => {
  return (
    <header className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2">
              <Flower2 className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Vedatrayi</h1>
              <p className="text-sm text-white text-opacity-90">Universal Spiritual Wisdom</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-white text-opacity-70" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border-0 rounded-xl bg-white bg-opacity-20 backdrop-blur-sm placeholder-white placeholder-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 focus:bg-opacity-30 transition-all duration-200"
                placeholder="Search mantras, vedas, affirmations..."
              />
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <select
                value={selectedLanguage}
                onChange={(e) => onLanguageChange(e.target.value)}
                className="appearance-none bg-white bg-opacity-20 backdrop-blur-sm text-white border-0 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 cursor-pointer"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="text-gray-800">
                    {lang.nativeName}
                  </option>
                ))}
              </select>
              <Globe className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white pointer-events-none" />
            </div>

            <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2 text-white hover:bg-opacity-30 transition-all duration-200">
              <Heart className="h-5 w-5" />
            </button>
            <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2 text-white hover:bg-opacity-30 transition-all duration-200">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;