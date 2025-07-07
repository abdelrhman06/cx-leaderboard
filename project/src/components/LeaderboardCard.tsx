import React from 'react';
import { Trophy, User, Calendar, Target, Star, Phone, Ticket } from 'lucide-react';
import { Achiever } from '../types';

interface LeaderboardCardProps {
  achiever: Achiever;
  rank: number;
  category: 'Tickets' | 'Calls';
  primaryColor: string;
  accentColor: string;
  index: number;
}

export const LeaderboardCard: React.FC<LeaderboardCardProps> = ({ 
  achiever, 
  rank, 
  category, 
  primaryColor, 
  accentColor,
  index 
}) => {
  const getRankConfig = (rank: number) => {
    switch (rank) {
      case 1:
        return {
          medal: '🥇',
          color: '#FFD700',
          bgGradient: 'from-yellow-400 to-yellow-600',
          borderColor: 'border-yellow-400',
          shadowColor: 'shadow-yellow-400/30',
          glowClass: 'gold-glow'
        };
      case 2:
        return {
          medal: '🥈',
          color: '#C0C0C0',
          bgGradient: 'from-gray-300 to-gray-500',
          borderColor: 'border-gray-400',
          shadowColor: 'shadow-gray-400/30',
          glowClass: 'silver-glow'
        };
      case 3:
        return {
          medal: '🥉',
          color: '#CD7F32',
          bgGradient: 'from-orange-400 to-orange-600',
          borderColor: 'border-orange-400',
          shadowColor: 'shadow-orange-400/30',
          glowClass: 'bronze-glow'
        };
      default:
        return {
          medal: '🏆',
          color: '#6B7280',
          bgGradient: 'from-gray-400 to-gray-600',
          borderColor: 'border-gray-400',
          shadowColor: 'shadow-gray-400/30',
          glowClass: ''
        };
    }
  };

  const rankConfig = getRankConfig(rank);
  const CategoryIcon = category === 'Tickets' ? Ticket : Phone;

  return (
    <article 
      className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 overflow-hidden group relative w-full max-w-sm ${rankConfig.shadowColor} hover:${rankConfig.glowClass}`}
      style={{
        animationDelay: `${index * 150}ms`,
        animation: 'slideInUp 0.8s ease-out forwards'
      }}
      role="article"
      aria-labelledby={`achiever-${achiever.id}-name`}
      aria-describedby={`achiever-${achiever.id}-description`}
    >
      {/* Card Header with Tag Badge */}
      <div className="relative">
        {/* Category Tag Badge - Top Left in Header */}
        <div className="absolute top-4 left-4 z-20">
          <div 
            className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-white shadow-lg backdrop-blur-sm"
            style={{ backgroundColor: primaryColor }}
          >
            <CategoryIcon className="w-4 h-4" />
            <span>{category}</span>
          </div>
        </div>

        {/* Rank Medal - Top Right Corner */}
        <div className="absolute top-4 right-4 z-20">
          <div 
            className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg border-4 ${rankConfig.borderColor} bg-white animate-medalGlow`}
            style={{ 
              boxShadow: `0 8px 25px ${rankConfig.color}40, 0 0 20px ${rankConfig.color}30` 
            }}
            role="img"
            aria-label={`${rank === 1 ? 'First' : rank === 2 ? 'Second' : 'Third'} place medal`}
          >
            {rankConfig.medal}
          </div>
        </div>

        {/* Rank Number - Positioned below medal */}
        <div className="absolute top-24 right-6 z-20">
          <div 
            className={`w-10 h-10 rounded-full bg-gradient-to-br ${rankConfig.bgGradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
            aria-label={`Rank ${rank}`}
          >
            {rank}
          </div>
        </div>

        {/* Profile Section */}
        <div 
          className="h-56 flex items-center justify-center overflow-hidden relative pt-4"
          style={{
            background: `linear-gradient(135deg, ${primaryColor}10, ${accentColor}20)`
          }}
        >
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-8 left-8">
              <Star className="w-6 h-6" style={{ color: primaryColor }} />
            </div>
            <div className="absolute bottom-8 right-8">
              <Trophy className="w-6 h-6" style={{ color: primaryColor }} />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <CategoryIcon className="w-12 h-12" style={{ color: primaryColor }} />
            </div>
          </div>
          
          <img 
            src={achiever.profileImage} 
            alt={`${achiever.name} profile picture`}
            className="w-32 h-32 rounded-full object-cover ring-4 ring-white shadow-2xl group-hover:scale-110 transition-transform duration-700 relative z-10 mt-4"
            loading="lazy"
          />
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        <div className="text-center mb-4">
          <h3 
            id={`achiever-${achiever.id}-name`}
            className="text-2xl font-bold text-gray-800 mb-2"
          >
            {achiever.name}
          </h3>
          <div className="flex items-center justify-center gap-2 mb-3">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <p className="text-lg font-semibold text-gray-700">{achiever.achievement}</p>
          </div>
        </div>
        
        <p 
          id={`achiever-${achiever.id}-description`}
          className="text-gray-600 text-center mb-6 leading-relaxed text-sm"
        >
          {achiever.description}
        </p>
        
        {/* Metrics */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4" style={{ color: primaryColor }} />
            <span className="text-sm font-bold" style={{ color: accentColor }}>
              {achiever.metric}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">{achiever.period}</span>
          </div>
        </div>
      </div>

      {/* Decorative Border Glow */}
      <div 
        className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(45deg, ${rankConfig.color}20, transparent, ${rankConfig.color}20)`,
          padding: '2px'
        }}
      />
    </article>
  );
};