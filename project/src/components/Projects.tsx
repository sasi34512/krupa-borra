import React from 'react';
import { ExternalLink, Github, BarChart3, ShoppingCart, Users, TrendingUp, Database, PieChart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Sales Performance Dashboard',
      description: 'Comprehensive Power BI dashboard analyzing sales performance across multiple regions and product categories. Features real-time data updates and predictive analytics.',
      technologies: ['Power BI', 'SQL', 'Excel'],
      type: 'Business Intelligence',
      icon: BarChart3,
      color: 'blue',
      insights: ['Increased sales visibility by 40%', 'Identified top-performing regions', 'Reduced reporting time by 60%'],
      metrics: { impact: '40%', timeline: '10 days', stakeholders: '5+' },
      github: '#',
      demo: '#'
    },
    {
      title: 'Corporate Leave Management System',
      description: 'A complete leave management system enabling employees to apply for leaves, track approvals, and manage leave balances efficiently, developed as part of BSc Computers project.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP'],
      type: 'Web Application',
      icon: Database,
      color: 'green',
      insights: ['Automated leave tracking', 'Reduced HR workload by 50%', 'Improved employee transparency'],
      metrics: { impact: '50%', timeline: '4 months', stakeholders: '100+' },
      github: '#',
      demo: '#'
    },
    {
      title: 'HR Analytics and Impact on Organization',
      description: 'An MBA project focusing on HR analytics to evaluate attrition, employee engagement, and performance metrics to drive strategic decisions within the organization.',
      technologies: ['Power BI', 'Excel', 'Python'],
      type: 'Analytics Project',
      icon: PieChart,
      color: 'purple',
      insights: ['Identified high-risk attrition areas', 'Enhanced HR policy effectiveness', 'Improved decision-making processes'],
      metrics: { impact: '30%', timeline: '5 months', stakeholders: '50+' },
      github: '#',
      demo: '#'
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'blue':
        return { bg: 'bg-blue-600', light: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', gradient: 'from-blue-500 to-blue-600' };
      case 'purple':
        return { bg: 'bg-purple-600', light: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', gradient: 'from-purple-500 to-purple-600' };
      case 'green':
        return { bg: 'bg-green-600', light: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', gradient: 'from-green-500 to-green-600' };
      case 'orange':
        return { bg: 'bg-orange-600', light: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', gradient: 'from-orange-500 to-orange-600' };
      case 'pink':
        return { bg: 'bg-pink-600', light: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-700', gradient: 'from-pink-500 to-pink-600' };
      case 'indigo':
        return { bg: 'bg-indigo-600', light: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', gradient: 'from-indigo-500 to-indigo-600' };
      default:
        return { bg: 'bg-gray-600', light: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-700', gradient: 'from-gray-500 to-gray-600' };
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real-world data analysis projects showcasing business impact and technical expertise</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            const Icon = project.icon;

            return (
              <div key={index} className={`bg-white rounded-2xl shadow-lg border-2 ${colors.border} hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group`}>
                <div className={`bg-gradient-to-r ${colors.gradient} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="bg-white/20 p-3 rounded-xl mr-4 backdrop-blur-sm">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{project.type}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <a href={project.github} className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm" title="View Code">
                          <Github className="h-4 w-4 text-white" />
                        </a>
                        <a href={project.demo} className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm" title="Live Demo">
                          <ExternalLink className="h-4 w-4 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${colors.text}`}>{project.metrics.impact}</div>
                      <div className="text-xs text-gray-500">Impact</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${colors.text}`}>{project.metrics.timeline}</div>
                      <div className="text-xs text-gray-500">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${colors.text}`}>{project.metrics.stakeholders}</div>
                      <div className="text-xs text-gray-500">Stakeholders</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Insights</h4>
                    <ul className="space-y-2">
                      {project.insights.map((insight, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className={`w-2 h-2 ${colors.bg} rounded-full mr-3 flex-shrink-0`}></div>
                          <span className="text-sm">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className={`px-3 py-1 ${colors.light} ${colors.text} text-xs font-medium rounded-full border ${colors.border} group-hover:scale-105 transition-transform duration-200`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
