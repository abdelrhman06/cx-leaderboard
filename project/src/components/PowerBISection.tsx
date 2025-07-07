import React from 'react';
import { BarChart3, ExternalLink, TrendingUp, Zap, Eye, Database } from 'lucide-react';

export const PowerBISection: React.FC = () => {
  const handleDashboardClick = () => {
    window.open('https://app.powerbi.com/view?r=eyJrIjoiNGI3MTBiNDgtYjExZi00YmIzLWE1NGQtNzBmNTFiYzg2NDMwIiwidCI6IjdjOGExMGZlLTBjYzAtNDNjZS1iMjEyLTEwMGQ5NjFhNGUzOCJ9', '_blank');
  };

  const features = [
    {
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Live performance metrics and KPI tracking'
    },
    {
      icon: BarChart3,
      title: 'Interactive Charts',
      description: 'Dynamic visualizations and drill-down capabilities'
    },
    {
      icon: Eye,
      title: 'Detailed Insights',
      description: 'Comprehensive reports and trend analysis'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamless connection to multiple data sources'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-700 to-blue-800 text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Top Wave Transition */}
      <div className="absolute top-0 left-0 right-0">
        <svg className="w-full h-24 fill-current text-slate-50 transform rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-36 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="bg-white/10 rounded-full p-6 backdrop-blur-sm border border-white/20 shadow-2xl powerbi-icon-entrance">
                  <BarChart3 className="w-16 h-16 text-white" />
                </div>
                <div className="absolute inset-0 bg-white/5 rounded-full animate-ping"></div>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 powerbi-title-entrance">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Dive Deeper into
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-200 via-white to-blue-100 bg-clip-text text-transparent">
                Analytics
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed powerbi-subtitle-entrance">
              Explore comprehensive performance metrics, trends, and insights in our 
              <span className="text-yellow-200 font-semibold"> interactive Power BI dashboard</span>
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="powerbi-feature-card bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white/20 rounded-full p-4 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-2xl mx-auto powerbi-cta-entrance">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-yellow-300" />
                <span className="text-lg font-medium text-blue-100">Ready to explore?</span>
                <Zap className="w-6 h-6 text-yellow-300" />
              </div>
              
              <button
                onClick={handleDashboardClick}
                className="group relative bg-gradient-to-r from-white to-blue-50 text-purple-700 px-10 py-4 rounded-full font-bold text-lg hover:from-blue-50 hover:to-white transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3 mx-auto overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  View Power BI Dashboard
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <p className="text-blue-200 text-sm mt-4">
                Access real-time insights and interactive visualizations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
    </section>
  );
};