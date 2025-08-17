import { Mantra } from '../types/spiritual';

export const mantras: Mantra[] = [
  {
    id: '1',
    title: 'Gayatri Mantra',
    category: 'mantra',
    sanskrit: 'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्',
    transliteration: 'Om Bhur Bhuvaḥ Swaḥ Tat-savitur Vareñyaṃ Bhargo Devasya Dhīmahi Dhiyo Yo Naḥ Prachodayāt',
    meaning: 'We meditate on the divine light of the Sun God who illuminates the three worlds. May that divine light illuminate our intellect.',
    benefits: [
      'Enhances concentration and focus',
      'Purifies mind and body',
      'Increases spiritual awareness',
      'Brings peace and tranquility',
      'Improves memory and learning ability'
    ],
    duration: '3:45',
    difficulty: 'beginner',
    tags: ['concentration', 'purification', 'spiritual growth', 'morning practice']
  },
  {
    id: '2',
    title: 'Maha Mantra (Hare Krishna)',
    category: 'mantra',
    sanskrit: 'हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे। हरे राम हरे राम राम राम हरे हरे॥',
    transliteration: 'Hare Krishna Hare Krishna Krishna Krishna Hare Hare, Hare Rama Hare Rama Rama Rama Hare Hare',
    meaning: 'O Lord Krishna, O Lord Rama, please engage me in your devotional service.',
    benefits: [
      'Purifies consciousness',
      'Connects with divine love',
      'Removes negative karma',
      'Brings inner joy and bliss',
      'Develops devotion and surrender'
    ],
    duration: '5:20',
    difficulty: 'beginner',
    tags: ['devotion', 'purification', 'joy', 'karma cleansing']
  },
  {
    id: '3',
    title: 'Om Namah Shivaya',
    category: 'mantra',
    sanskrit: 'ॐ नमः शिवाय',
    transliteration: 'Om Namah Shivaya',
    meaning: 'I bow to Lord Shiva, the auspicious one who is the true Self within all.',
    benefits: [
      'Destroys ego and negativity',
      'Awakens inner strength',
      'Promotes self-realization',
      'Brings peace and protection',
      'Connects with cosmic consciousness'
    ],
    duration: '2:30',
    difficulty: 'beginner',
    tags: ['self-realization', 'strength', 'protection', 'transformation']
  },
  {
    id: '4',
    title: 'Isa Upanishad - Opening Verse',
    category: 'upanishad',
    sanskrit: 'ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते। पूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते॥',
    transliteration: 'Om Purnamadah Purnamidam Purnat Purnamudachyate, Purnasya Purnamadaya Purnamevavashishyate',
    meaning: 'That is complete, this is complete. From completeness emerges completeness. When completeness is taken from completeness, completeness alone remains.',
    benefits: [
      'Understanding of cosmic unity',
      'Realization of wholeness',
      'Transcendence of duality',
      'Deep philosophical insight',
      'Spiritual enlightenment'
    ],
    duration: '4:15',
    difficulty: 'advanced',
    tags: ['philosophy', 'unity', 'enlightenment', 'vedanta']
  },
  {
    id: '5',
    title: 'Rigveda - Nasadiya Sukta',
    category: 'veda',
    sanskrit: 'नासदासीन्नो सदासीत्तदानीं नासीद्रजो नो व्योमा परो यत्',
    transliteration: 'Nasadasin no sadasit tadanim nasidrajo no vyoma paro yat',
    meaning: 'Then there was neither being nor non-being, there was no realm of air, no sky beyond.',
    benefits: [
      'Contemplation of existence',
      'Understanding creation mysteries',
      'Philosophical depth',
      'Cosmic consciousness',
      'Meditative awareness'
    ],
    duration: '6:30',
    difficulty: 'advanced',
    tags: ['creation', 'existence', 'philosophy', 'meditation']
  },
  {
    id: '6',
    title: 'Self-Confidence Affirmation',
    category: 'affirmation',
    sanskrit: 'अहं ब्रह्मास्मि',
    transliteration: 'Aham Brahmasmi',
    meaning: 'I am the universal consciousness, I am one with the divine.',
    benefits: [
      'Builds unshakeable confidence',
      'Connects with inner divinity',
      'Removes self-doubt',
      'Empowers personal growth',
      'Awakens true potential'
    ],
    duration: '1:45',
    difficulty: 'intermediate',
    tags: ['confidence', 'self-realization', 'empowerment', 'growth']
  }
];

export const languages = [
  { code: 'sa', name: 'Sanskrit', nativeName: 'संस्कृत' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া' }
];