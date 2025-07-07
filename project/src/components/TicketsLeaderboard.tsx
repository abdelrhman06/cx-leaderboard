import React from 'react';
import { Ticket, Trophy, TrendingUp, Award } from 'lucide-react';
import { Achiever } from '../types';
import { LeaderboardCard } from './LeaderboardCard';

interface TicketsLeaderboardProps {
  achievers: Achiever[];
}

export const TicketsLeaderboard: React.FC<TicketsLeaderboardProps> = ({ achievers }) => {
  return (
    <section className="relative" role="region" aria-labelledby="tickets-leaderboard-title">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl opacity-50"></div>
      
      <div className="relative z-10 p-8 md:p-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full p-4 shadow-lg">
              <Ticket className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h2 
            id="tickets-leaderboard-title"
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent"
          >
            🎫 Tickets Leaderboard
          </h2>
          
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Recognizing our top ticket resolution champions who deliver exceptional customer support
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
                category="Tickets"
                primaryColor="#3B82F6"
                accentColor="#1E40AF"
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Performance Summary */}
        <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Trophy className="w-6 h-6 text-blue-500" />
              <div>
                <p className="text-2xl font-bold text-blue-600">
                  {achievers.reduce((sum, a) => sum + (parseInt(a.metric.replace(/[^\d]/g, '')) || 0), 0).toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">Total Tickets Resolved</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <TrendingUp className="w-6 h-6 text-green-500" />
              <div>
                <p className="text-2xl font-bold text-green-600">
                  {
                    achievers.length > 0
                      ? Math.round(
                          achievers.reduce((sum, a) => {
                            // Use avgSatisfaction if present, otherwise fallback to 95
                            const satisfaction = typeof a.avgSatisfaction === 'number' ? a.avgSatisfaction : 95;
                            return sum + satisfaction;
                          }, 0) / achievers.length
                        )
                      : 0
                  }%
                </p>
                <p className="text-sm text-gray-600">Avg Satisfaction</p>
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