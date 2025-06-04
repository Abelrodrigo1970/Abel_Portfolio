import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/abelrodrigo1970',
      icon: Github,
    },
    {
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/abel-r-oliveira-dev/',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:abelrodrigo101@gmail.com',
      icon: Mail,
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold gradient-text">Abel Oliveira</h3>
            <p className="text-gray-400 mt-4 max-w-md">
              Junior Full Stack Developer passionate about creating innovative solutions 
              and exceptional digital experiences. Always seeking new 
              challenges and growth opportunities.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110"
                    aria-label={link.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-primary-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 hover:bg-primary-600 rounded-lg transition-all duration-300 hover:scale-110"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
            <p className="text-gray-400 text-sm">
              Available for freelance and interesting projects.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Abel Oliveira. All rights reserved.
            <span className="text-gray-600">|</span>
            Made with <Heart size={16} className="text-red-500 animate-pulse" /> in Portugal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 