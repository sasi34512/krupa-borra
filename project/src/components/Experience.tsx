import React from 'react';
import { Briefcase, Calendar, MapPin, TrendingUp, Users, BarChart3 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    

    {
      title: 'Intern',
      company: 'infosys',
      location: 'vijayawada',
      period: '6 months',
      type: 'Internship',
      description: 'Gained hands-on experience in data analysis and business intelligence tools.',
      achievements: [
        'Analyzed customer behavior patterns to identify growth opportunities',
        'Created comprehensive reports for executive decision making',
        'Assisted in developing KPI tracking systems',
        'Learned advanced Excel functions and data visualization techniques'
      ],
      technologies: ['Excel', 'Google Analytics', 'SQL', 'Power BI'],
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return { 
          bg: 'bg-blue-600', 
          light: 'bg-blue-50', 
          border: 'border-blue-200', 
          text: 'text-blue-700',
          gradient: 'from-blue-500 to-blue-600'
        };
      case 'purple':
        return { 
          bg: 'bg-purple-600', 
          light: 'bg-purple-50', 
          border: 'border-purple-200', 
          text: 'text-purple-700',
          gradient: 'from-purple-500 to-purple-600'
        };
      case 'green':
        return { 
          bg: 'bg-green-600', 
          light: 'bg-green-50', 
          border: 'border-green-200', 
          text: 'text-green-700',
          gradient: 'from-green-500 to-green-600'
        };
      default:
        return { 
          bg: 'bg-gray-600', 
          light: 'bg-gray-50', 
          border: 'border-gray-200', 
          text: 'text-gray-700',
          gradient: 'from-gray-500 to-gray-600'
        };
    }
  };

  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of growth in data analysis and business intelligence
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-green-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colors = getColorClasses(exp.color);
              
              return (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${colors.gradient} rounded-full border-4 border-white shadow-lg hidden md:block z-10`}></div>
                  
                  {/* Content Card */}
                  <div className="md:ml-20">
                    <div className={`bg-white rounded-2xl shadow-lg border-2 ${colors.border} hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden`}>
                      {/* Header */}
                      <div className={`bg-gradient-to-r ${colors.gradient} p-6 text-white`}>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                            <div className="flex items-center text-blue-100 mb-2">
                              <Briefcase className="h-5 w-5 mr-2" />
                              <span className="text-lg font-semibold">{exp.company}</span>
                            </div>
                            <div className="flex flex-wrap gap-4 text-blue-100">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span className="text-sm">{exp.period}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span className="text-sm">{exp.location}</span>
                              </div>
                              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                                {exp.type}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <TrendingUp className={`h-5 w-5 mr-2 ${colors.text}`} />
                            Key Achievements
                          </h4>
                          <ul className="space-y-3">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className={`w-2 h-2 ${colors.bg} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                                <span className="text-gray-700">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <BarChart3 className={`h-5 w-5 mr-2 ${colors.text}`} />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className={`px-3 py-1 ${colors.light} ${colors.text} text-sm font-medium rounded-full border ${colors.border}`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">fresher</div>
              <div className="text-blue-100">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-purple-100">Stakeholders Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25%</div>
              <div className="text-pink-100">Efficiency Improvement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
