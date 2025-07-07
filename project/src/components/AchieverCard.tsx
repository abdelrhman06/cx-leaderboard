import React from 'react';
import { Trophy, User, Calendar, Target } from 'lucide-react';
import { Achiever } from '../types';

interface AchieverCardProps {
  achiever: Achiever;
  index: number;
}

export const AchieverCard: React.FC<AchieverCardProps> = ({ achiever, index }) => {
  const categoryColors = {
    Tickets: 'bg-blue-500 text-white',
    Calls: 'bg-green-500 text-white'
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
      style={{
        animationDelay: `${index * 150}ms`,
        animation: 'slideInUp 0.8s ease-out forwards'
      }}
    >
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center overflow-hidden">
          <img 
            src={achiever.profileImage} 
            alt={achiever.name}
            className="w-32 h-32 rounded-full object-cover ring-4 ring-white shadow-lg group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${categoryColors[achiever.category]}`}>
          {achiever.category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <h3 className="text-xl font-bold text-gray-800">{achiever.achievement}</h3>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <User className="w-4 h-4 text-gray-500" />
          <p className="text-lg font-semibold text-gray-700">{achiever.name}</p>
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">{achiever.description}</p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600">{achiever.metric}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">{achiever.period}</span>
          </div>
        </div>
      </div>
    </div>
  );
};