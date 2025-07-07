import React, { useState, useEffect } from 'react';
import { Award, Users, TrendingUp } from 'lucide-react';
import { PowerBISection } from './components/PowerBISection';
import { LoadingSpinner } from './components/LoadingSpinner';
import { TicketsLeaderboard } from './components/TicketsLeaderboard';
import { CallsLeaderboard } from './components/CallsLeaderboard';
import { parseCSVData } from './data/csvParser';
import { Achiever, FilterType } from './types';

function App() {
  const [achievers, setAchievers] = useState<Achiever[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAchievers = async () => {
      try {
        setLoading(true);
        // Use the new public Google Sheets CSV link
        const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS2y3hb6MCD_0ISEJvnuoaSW0j8wxo3tjm-2gKR-UwgBGxxZMX5hqloWRn2QlLe_lqQeP9VnHAvLTR4/pub?output=csv';
        const data = await parseCSVData(csvUrl);
        console.log('🟢 Raw data from CSV:', data);
        console.log('🟢 Total achievers loaded:', data.length);
        setAchievers(data);
      } catch (err) {
        setError('Failed to load achievers data');
        console.error('Error loading achievers:', err);
      } finally {
        setLoading(false);
      }
    };

    loadAchievers();
  }, []);

  // Get top 3 performers for each category
  const ticketsAchievers = achievers
    .filter((a: Achiever) => a.category === 'Tickets')
    .sort((a: Achiever, b: Achiever) => {
      // Sort by ranking if available, otherwise by metric value
      if (a.ranking && b.ranking) return a.ranking - b.ranking;
      const aValue = parseInt(a.metric.replace(/[^\d]/g, '')) || 0;
      const bValue = parseInt(b.metric.replace(/[^\d]/g, '')) || 0;
      return bValue - aValue;
    })
    .slice(0, 3);

  console.log('🎫 Tickets achievers (filtered):', achievers.filter((a: Achiever) => a.category === 'Tickets'));
  console.log('🎫 Tickets achievers (top 3):', ticketsAchievers);

  const callsAchievers = achievers
    .filter((a: Achiever) => a.category === 'Calls')
    .sort((a: Achiever, b: Achiever) => {
      // Sort by ranking if available, otherwise by metric value
      if (a.ranking && b.ranking) return a.ranking - b.ranking;
      const aValue = parseInt(a.metric.replace(/[^\d]/g, '')) || 0;
      const bValue = parseInt(b.metric.replace(/[^\d]/g, '')) || 0;
      return bValue - aValue;
    })
    .slice(0, 3);

  console.log('📞 Calls achievers (filtered):', achievers.filter((a: Achiever) => a.category === 'Calls'));
  console.log('📞 Calls achievers (top 3):', callsAchievers);

  const stats = {
    total: achievers.length,
    tickets: achievers.filter((a: Achiever) => a.category === 'Tickets').length,
    calls: achievers.filter((a: Achiever) => a.category === 'Calls').length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Enhanced Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo Container */}
            <div className="flex items-center space-x-6">
              {/* Main Logo */}
              <div className="flex-shrink-0 logo-entrance">
                <img 
                       src="/WhatsApp Image 2025-07-07 at 15.57.36_746599eb.jpg"
                  alt="Company Logo" 
                  className="h-12 w-auto object-contain transition-all duration-300 hover:scale-105 filter drop-shadow-sm"
                  onError={(e) => {
                    console.log('Main logo failed to load');
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              
              {/* Elegant Divider */}
              <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              
              {/* Secondary Logo */}
              <div className="flex-shrink-0 logo-entrance-delayed">
                <img 
                  src="/Image.jpeg"
                  alt="Brand Logo" 
                  className="h-12 w-auto object-contain transition-all duration-300 hover:scale-105 filter drop-shadow-sm"
                  onError={(e) => {
                    console.log('Secondary logo failed to load');
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
            
            {/* Navigation Enhancement */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Dashboard
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 pt-32 pb-36 px-4">
          <div className="max-w-6xl mx-auto text-center">
            {/* Award Icon with Animation */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="bg-white/10 rounded-full p-6 backdrop-blur-sm border border-white/20 shadow-2xl hero-icon-entrance">
                  <Award className="w-20 h-20 text-white" />
                </div>
                <div className="absolute inset-0 bg-white/5 rounded-full animate-ping"></div>
              </div>
            </div>
            
            {/* Enhanced Title Treatment */}
            <div className="space-y-6 mb-12">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight hero-title-entrance">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  CX Team
                </span>
                <span className="block bg-gradient-to-r from-yellow-200 via-white to-blue-100 bg-clip-text text-transparent mt-2">
                  Top Achievers
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 max-w-4xl mx-auto leading-relaxed hero-subtitle-entrance">
                Celebrating excellence in customer experience through 
                <span className="text-yellow-200 font-semibold"> outstanding performance </span>
                in tickets and calls
              </p>
            </div>
            
            {/* Enhanced Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="stats-card-entrance bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-center justify-center gap-4">
                  <div className="bg-white/20 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-3xl font-bold text-white">{stats.total}</div>
                    <div className="text-blue-200 font-medium">Total Achievers</div>
                  </div>
                </div>
              </div>
              
              <div className="stats-card-entrance bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center justify-center gap-4">
                  <div className="bg-white/20 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-3xl font-bold text-white">{stats.tickets}</div>
                    <div className="text-blue-200 font-medium">Ticket Stars</div>
                  </div>
                </div>
              </div>
              
              <div className="stats-card-entrance bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group" style={{ animationDelay: '400ms' }}>
                <div className="flex items-center justify-center gap-4">
                  <div className="bg-white/20 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-3xl font-bold text-white">{stats.calls}</div>
                    <div className="text-blue-200 font-medium">Call Champions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seamless Transition Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24 fill-current text-slate-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Content - Leaderboards */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-center py-20">
            <div className="text-red-500 text-xl mb-4">Error loading data</div>
            <p className="text-gray-600">{error}</p>
          </div>
        ) : (
          <div className="space-y-24">
            {/* Tickets Leaderboard */}
            <TicketsLeaderboard achievers={ticketsAchievers} />
            
            {/* Calls Leaderboard */}
            <CallsLeaderboard achievers={callsAchievers} />
          </div>
        )}

        {!loading && !error && achievers.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-500 text-xl mb-4">No achievers found</div>
            <p className="text-gray-400">Please check your data source</p>
          </div>
        )}
      </div>

      {/* Enhanced Power BI Section */}
      <PowerBISection />

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 rounded-full p-3">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
            <p className="text-gray-300 text-lg mb-2">
            🏆 Top Achievers – You set the bar.
Consistent, sharp, always ahead.
Keep owning it. 🚀

            </p>
            <p className="text-gray-400">
             Built by the Quality Team using modern web technologies
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;