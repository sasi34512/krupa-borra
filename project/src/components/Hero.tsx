import React from 'react';
import { ChevronDown, Download, Mail, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                <img
        src="./r.jpg"
        alt="Profile"
        className="w-full h-full rounded-full object-cover shadow-2xl"
      />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white animate-bounce"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="block opacity-90">Hi, I'm</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Krupa Borra
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-200 mb-6 font-light">
              Data Analyst & Business Intelligence Specialist
            </p>
            
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Passionate about transforming complex data into actionable insights. 
              Experienced in statistical analysis, data visualization, and business intelligence 
              with a proven track record of driving data-driven decision making.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm">Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-purple-400" />
                <span className="text-sm">+91 9390776982</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-pink-400" />
                <span className="text-sm">krupaborra2001@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="flex items-center gap-2">
                View My Work
                <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
            >
              <Mail className="h-5 w-5" />
              Get In Touch
            </button>
            
            <a
              href="/r.pdf"
              className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
            >
              <Download className="h-5 w-5" />
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold text-blue-400 mb-2">2+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold text-pink-400 mb-2">5+</div>
              <div className="text-gray-300">Technical Skills</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-white/70 hover:text-white transition-colors duration-300"
          >
            <ChevronDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;