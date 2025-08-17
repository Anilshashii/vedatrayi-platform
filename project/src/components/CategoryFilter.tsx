import React from 'react';
import { Book, Sparkles, Heart, Quote } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'All', icon: Sparkles, count: 0 },
  { id: 'mantra', name: 'Mantras', icon: Quote, count: 3 },
  { id: 'veda', name: 'Vedas', icon: Book, count: 1 },
  { id: 'upanishad', name: 'Upanishads', icon: Heart, count: 1 },
  { id: 'affirmation', name: 'Affirmations', icon: Sparkles, count: 1 }
];

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange
}) => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-1 overflow-x-auto py-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{category.name}</span>
                {category.count > 0 && (
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    isSelected ? 'bg-white bg-opacity-20' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {category.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;