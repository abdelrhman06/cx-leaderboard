import React from 'react';
import { Phone, Trophy, Clock, Award } from 'lucide-react';
import { Achiever } from '../types';
import { LeaderboardCard } from './LeaderboardCard';

interface CallsLeaderboardProps {
  achievers: Achiever[];
}

export const CallsLeaderboard: React.FC<CallsLeaderboardProps> = ({ achievers }) => {
  return (
    <section className="relative" role="region" aria-labelledby="calls-leaderboard-title">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl opacity-50"></div>
      
      <div className="relative z-10 p-8 md:p-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-4 shadow-lg">
              <Phone className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h2 
            id="calls-leaderboard-title"
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent"
          >
            📞 Calls Leaderboard
          </h2>
          
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Celebrating our call center champions who excel in voice-based customer interactions
          </p>
        </div>

        {/* Top 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {achievers.map((achiever, index) => (
            <div
              key={achiever.id}
              className="flex justify-center"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: 'slideInUp 0.8s ease-out forwards'
              }}
            >
              <LeaderboardCard 
                achiever={achiever} 
                rank={index + 1}
                category="Calls"
                primaryColor="#10B981"
                accentColor="#047857"
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Performance Summary */}
        <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-6 h-6 text-green-500" />
              <div>
                <p className="text-2xl font-bold text-green-600">
                  {achievers.reduce((sum, a) => sum + (parseInt(a.metric.replace(/[^\d]/g, '')) || 0), 0).toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">Total Calls Handled</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-6 h-6 text-blue-500" />
              <div>
                <p className="text-2xl font-bold text-blue-600">
                  {
                    achievers.length > 0
                      ? (
                          achievers.reduce((sum, a) => {
                            // Use avgResolutionTime if present, otherwise fallback to 3.5
                            const time = typeof a.avgResolutionTime === 'number' ? a.avgResolutionTime : 3.5;
                            return sum + time;
                          }, 0) / achievers.length
                        ).toFixed(1)
                      : 0
                  }min
                </p>
                <p className="text-sm text-gray-600">Avg Resolution Time</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <Award className="w-6 h-6 text-purple-500" />
              <div>
                <p className="text-2xl font-bold text-purple-600">{achievers.length}</p>
                <p className="text-sm text-gray-600">Top Performers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};