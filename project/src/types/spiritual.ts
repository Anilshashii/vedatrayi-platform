export interface Mantra {
  id: string;
  title: string;
  category: 'mantra' | 'veda' | 'upanishad' | 'affirmation';
  sanskrit: string;
  transliteration: string;
  meaning: string;
  benefits: string[];
  audioUrl?: string;
  duration?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export interface UserPreferences {
  preferredLanguages: string[];
  favoriteCategory: string;
  audioSpeed: number;
  fontSize: 'small' | 'medium' | 'large';
}