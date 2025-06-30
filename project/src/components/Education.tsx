import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, Star, Trophy } from 'lucide-react';

const Education = () => {
  const educationList = [
    {
      degree: 'MBA (Business Analytics & HRM)',
      field: '',
      university: 'Acharya Nagarjuna University',
      location: 'Guntur, India',
      graduation: '2024',
      duration: '2 Years',
      honors: 'Pursuing',
      coursework: [
        'Business Analytics',
        'Human Resource Management',
        'Data Visualization',
        'Predictive Analytics',
        'Strategic Management'
      ]
    },
    {
      degree: 'B.Sc (MSCS - Information Technology)',
      field: '',
      university: 'Krishna University, Triveni',
      location: 'Vijayawada, India',
      graduation: '2021',
      duration: '3 Years',
      honors: 'First Class',
      coursework: [
        'C Programming',
        'Data Structures',
        'DBMS',
        'Statistics',
        'Web Technologies'
      ]
    },
    {
      degree: 'Intermediate (MPC)',
      field: '',
      university: 'Narayana Junior College',
      location: 'Vijayawada, India',
      graduation: '2018',
      duration: '2 Years',
      honors: '',
      coursework: [
        'Mathematics',
        'Physics',
        'Chemistry'
      ]
    },
    {
      degree: 'SSC',
      field: '',
      university: 'St. Anthony’s RCM High School',
      location: 'Vijayawada, India',
      graduation: '2016',
      duration: '',
      honors: '',
      coursework: [
        'General Curriculum'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Microsoft Power BI Data Analyst',
      issuer: 'Microsoft',
      date: '2023',
      skills: ['Power BI', 'DAX', 'Data Modeling', 'Visualization'],
      color: 'blue',
      level: 'Professional'
    },
    {
      name: 'Google Data Analytics Professional Certificate',
      issuer: 'Google (Coursera)',
      date: '2022',
      skills: ['Data Analysis', 'R Programming', 'Tableau', 'SQL'],
      color: 'green',
      level: 'Professional'
    },
    {
      name: 'Python for Data Science',
      issuer: 'IBM (Coursera)',
      date: '2022',
      skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
      color: 'purple',
      level: 'Intermediate'
    },
    {
      name: 'Advanced Excel for Business',
      issuer: 'Microsoft',
      date: '2021',
      skills: ['Advanced Excel', 'VBA', 'Pivot Tables', 'Data Analysis'],
      color: 'orange',
      level: 'Advanced'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return { bg: 'bg-blue-600', light: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', gradient: 'from-blue-500 to-blue-600' };
      case 'green':
        return { bg: 'bg-green-600', light: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', gradient: 'from-green-500 to-green-600' };
      case 'purple':
        return { bg: 'bg-purple-600', light: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', gradient: 'from-purple-500 to-purple-600' };
      case 'orange':
        return { bg: 'bg-orange-600', light: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', gradient: 'from-orange-500 to-orange-600' };
      default:
        return { bg: 'bg-gray-600', light: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-700', gradient: 'from-gray-500 to-gray-600' };
    }
  };

  return (
    <section id="education" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strong academic foundation complemented by industry-recognized certifications
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {educationList.map((edu, idx) => (
            <div key={idx} className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-8 text-white relative">
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-white/20 p-4 rounded-2xl mr-4 backdrop-blur-sm">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{edu.degree}</h3>
                      <p className="text-blue-100">{edu.university}</p>
                      <p className="text-blue-200">{edu.location}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 mb-4">
                    {edu.graduation && (
                      <div className="bg-white/10 px-4 py-2 rounded-xl text-sm text-blue-200">
                        Graduated: {edu.graduation}
                      </div>
                    )}
                    {edu.honors && (
                      <div className="bg-white/10 px-4 py-2 rounded-xl text-sm text-blue-200">
                        {edu.honors}
                      </div>
                    )}
                    {edu.duration && (
                      <div className="bg-white/10 px-4 py-2 rounded-xl text-sm text-blue-200">
                        {edu.duration}
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Key Subjects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span key={i} className="bg-white/10 px-3 py-1 rounded-full text-xs text-blue-100">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const colors = getColorClasses(cert.color);
              return (
                <div key={index} className={`bg-white rounded-2xl shadow-lg border-2 ${colors.border} hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden`}>
                  <div className={`bg-gradient-to-r ${colors.gradient} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="bg-white/20 p-3 rounded-xl mr-4 backdrop-blur-sm">
                          <Award className="h-6 w-6 text-white" />
                        </div>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">{cert.level}</span>
                      </div>
                      <div className="flex items-center text-white/80">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{cert.date}</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold">{cert.name}</h4>
                    <p className="text-white/80 font-medium">{cert.issuer}</p>
                  </div>
                  <div className="p-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Skills Covered</h5>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span key={idx} className={`px-3 py-1 ${colors.light} ${colors.text} text-xs font-medium rounded-full border ${colors.border}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Continuous Learning */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 text-center border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm committed to staying current with the latest developments in data analytics,
            machine learning, and business intelligence technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-white rounded-full text-gray-700 font-medium shadow-md border border-gray-200">
              Currently Learning: Advanced Machine Learning
            </span>
            <span className="px-6 py-3 bg-white rounded-full text-gray-700 font-medium shadow-md border border-gray-200">
              Next Goal: AWS Data Analytics Certification
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
