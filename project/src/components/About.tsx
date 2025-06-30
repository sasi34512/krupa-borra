import React from 'react';
import { GraduationCap, Target, TrendingUp, Users, Award, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate Data Analyst with expertise in transforming complex datasets into actionable business insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              My Data Journey
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                 
                I specialize in extracting meaningful insights from complex datasets to drive 
                strategic business decisions.
              </p>
              
              <p>
                My expertise spans across statistical analysis, data visualization, and 
                predictive modeling. I have successfully worked with diverse industries, 
                helping organizations optimize their operations through data-driven approaches.
              </p>
              
              <p>
                I'm passionate about turning raw data into compelling stories that influence 
                business strategy and drive growth. My analytical mindset combined with 
                strong communication skills allows me to bridge the gap between technical 
                analysis and business understanding.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                Key Achievements
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Improved business efficiency by 25% through data-driven insights
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Developed automated reporting systems reducing manual work by 40%
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Led cross-functional teams in implementing BI solutions
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Skills & Qualities */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 p-3 rounded-xl mr-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Analytics</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Advanced statistical analysis and predictive modeling to uncover hidden patterns in data.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-600 p-3 rounded-xl mr-4">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Programming</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Proficient in Python, R, SQL, and various data analysis tools and frameworks.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 p-3 rounded-xl mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Strategy</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Translating complex data insights into actionable business strategies and recommendations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 p-3 rounded-xl mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Collaboration</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Strong communication skills to present findings to both technical and non-technical stakeholders.
                </p>
              </div>
            </div>

            {/* Education Highlight */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-2xl border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-gray-700 p-3 rounded-xl mr-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Education</h4>
                  <p className="text-gray-600">Bachelor of Technology</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Strong foundation in computer science and mathematics, providing the analytical 
                framework for advanced data analysis and problem-solving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
