import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Download, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'krupaborra2001@gmail.com',
      href: 'mailto:krupaborra2001@gmail.com',
      color: 'blue'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9390776982',
      href: 'tel:+919390776982',
      color: 'green'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: '#',
      color: 'purple'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/krupa-borra-63273a257?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHfsex%2FcMRZaDRNti65imog%3D%3D',
      color: 'blue'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/krupa-borra',
      color: 'gray'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:krupaborra2001@gmail.com',
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return { bg: 'bg-blue-600', hover: 'hover:bg-blue-700', light: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' };
      case 'green':
        return { bg: 'bg-green-600', hover: 'hover:bg-green-700', light: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' };
      case 'purple':
        return { bg: 'bg-purple-600', hover: 'hover:bg-purple-700', light: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' };
      case 'gray':
        return { bg: 'bg-gray-600', hover: 'hover:bg-gray-700', light: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' };
      case 'red':
        return { bg: 'bg-red-600', hover: 'hover:bg-red-700', light: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' };
      default:
        return { bg: 'bg-gray-600', hover: 'hover:bg-gray-700', light: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' };
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Ready to transform your data into actionable insights? Let's discuss how I can help drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
        <div className="flex flex-col items-center text-center">
  <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>

  <div className="space-y-6 mb-8 w-full max-w-md">
    {contactInfo.map((info, index) => {
      const colors = getColorClasses(info.color);
      const Icon = info.icon;

      return (
        <a
          key={index}
          href={info.href}
          className="flex items-center p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
        >
          <div className={`${colors.bg} p-4 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-white text-lg">{info.label}</h4>
            <p className="text-blue-200">{info.value}</p>
          </div>
        </a>
      );
    })}
  </div>

  {/* Social Links */}
  <div className="mb-8">
    <h4 className="text-xl font-semibold text-white mb-6">Connect Online</h4>
    <div className="flex space-x-4 justify-center">
      {socialLinks.map((social, index) => {
        const colors = getColorClasses(social.color);
        const Icon = social.icon;

        return (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${colors.bg} ${colors.hover} p-4 rounded-xl text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
            title={social.label}
          >
            <Icon className="h-6 w-6" />
          </a>
        );
      })}
    </div>
  </div>

  {/* Resume Download */}
  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white max-w-md">
    <h4 className="text-xl font-semibold mb-3 flex items-center justify-center">
      <Download className="h-6 w-6 mr-2" />
      Download My Resume
    </h4>
    <p className="text-blue-100 mb-6">
      Get a comprehensive overview of my experience, skills, and achievements in data analytics
    </p>
    <a
      href="/r.pdf"
      className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
      download
    >
      <Download className="h-5 w-5 mr-2" />
      Download PDF
    </a>
  </div>
        </div>


       
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Make Data-Driven Decisions?</h3>
          <p className="text-blue-200 mb-8 max-w-3xl mx-auto text-lg">
            I'm passionate about helping businesses unlock the power of their data. 
            Let's collaborate to turn your data challenges into competitive advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:krupaborra2001@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Email Me Directly
            </a>
            <a
              href="https://linkedin.com/in/krupa-borra"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
