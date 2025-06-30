import React from 'react';
import { BarChart3, Database, FileSpreadsheet, PieChart, Code, Brain, Calculator, TrendingUp, Zap, Target } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
   
    { name: 'SQL', level: 85, icon: Database, color: 'green', description: 'Database querying, optimization, data extraction' },
    { name: 'Power BI', level: 88, icon: BarChart3, color: 'orange', description: 'Interactive dashboards, data visualization' },
    { name: 'Excel', level: 92, icon: FileSpreadsheet, color: 'emerald', description: 'Advanced formulas, macros, pivot tables' },
    { name: 'ETL', level: 80, icon: PieChart, color: 'purple', description: 'Data cleaning, storytelling' },
    { name: 'Statistics', level: 85, icon: Calculator, color: 'pink', description: 'Statistical analysis, hypothesis testing' },
  ];

  const analyticalSkills = [
    'Data Mining & ETL',
    'Statistical Analysis',
    'Predictive Modeling',
    'Business Intelligence',
    'Data Visualization',
    'Performance Analysis',
    'Trend Analysis',
    'Risk Assessment',
  ];

  const tools = [
    
    'MySQL & PostgreSQL',
    'Azure Data Factory',
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return { bg: 'bg-blue-600', light: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200' };
      case 'green':
        return { bg: 'bg-green-600', light: 'bg-green-100', text: 'text-green-700', border: 'border-green-200' };
      case 'purple':
        return { bg: 'bg-purple-600', light: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200' };
      case 'orange':
        return { bg: 'bg-orange-600', light: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200' };
      case 'emerald':
        return { bg: 'bg-emerald-600', light: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200' };
      case 'pink':
        return { bg: 'bg-pink-600', light: 'bg-pink-100', text: 'text-pink-700', border: 'border-pink-200' };
      default:
        return { bg: 'bg-gray-600', light: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-200' };
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for data analysis, visualization, and business intelligence
          </p>
        </div>

        {/* Technical Skills with Progress Bars */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Core Technologies</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technicalSkills.map((skill, index) => {
              const colors = getColorClasses(skill.color);
              const Icon = skill.icon;
              return (
                <div key={index} className={`bg-white p-8 rounded-2xl shadow-lg border-2 ${colors.border} hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                  <div className="flex items-center mb-6">
                    <div className={`${colors.bg} p-3 rounded-xl mr-4 shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xl font-bold text-gray-900">{skill.name}</span>
                        <span className={`text-lg font-bold ${colors.text}`}>{skill.level}%</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{skill.description}</p>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className={`${colors.bg} h-3 rounded-full transition-all duration-1000 ease-out shadow-sm`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Analytical Skills */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Brain className="h-8 w-8 mr-3 text-blue-600" />
              Analytical Skills
            </h3>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {analyticalSkills.map((skill, index) => (
                  <div key={index} className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300 transform hover:scale-105">
                    <TrendingUp className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Zap className="h-8 w-8 mr-3 text-purple-600" />
              Tools & Platforms
            </h3>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div key={index} className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover:shadow-md transition-all duration-300 transform hover:scale-105">
                    <Code className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Competencies */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Data Storytelling</h4>
              <p className="text-blue-100 leading-relaxed">
                Transforming complex datasets into compelling narratives that drive business decisions
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Strategic Analysis</h4>
              <p className="text-purple-100 leading-relaxed">
                Identifying key business metrics and KPIs to measure performance and growth opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Predictive Insights</h4>
              <p className="text-pink-100 leading-relaxed">
                Building models to forecast trends and anticipate future business scenarios
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
