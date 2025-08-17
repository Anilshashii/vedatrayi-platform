import React from 'react';
import { TrendingUp, Users, Clock, Star } from 'lucide-react';

const StatsCard: React.FC = () => {
  const stats = [
    { label: 'Total Mantras', value: '500+', icon: TrendingUp, color: 'from-blue-500 to-blue-600' },
    { label: 'Active Users', value: '10K+', icon: Users, color: 'from-green-500 to-green-600' },
    { label: 'Practice Hours', value: '25K+', icon: Clock, color: 'from-purple-500 to-purple-600' },
    { label: 'Average Rating', value: '4.9', icon: Star, color: 'from-yellow-500 to-yellow-600' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Platform Statistics</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="text-center">
              <div className={`bg-gradient-to-br ${stat.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsCard;