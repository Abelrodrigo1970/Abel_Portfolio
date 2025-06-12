import React from 'react';
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, ArrowRight, Download, Eye } from 'lucide-react'
import abelImage from '../assets/abel.JPG'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-accent-900/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Hello, I'm{' '}
                  <span className="gradient-text">Abel Oliveira</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-primary-400 font-medium">
                  Junior Full Stack Developer in transformation
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                  I was an entrepreneur and manager for 30 years. Now I'm on an exciting transformation journey, 
                  transitioning to full-stack development and creating innovative digital solutions.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects" className="btn-primary inline-flex items-center">
                  <Eye size={20} className="mr-2" />
                  View Projects
                </Link>
                <Link to="/contact" className="btn-outline inline-flex items-center">
                  <Mail size={20} className="mr-2" />
                  Get In Touch
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6 pt-4">
                <span className="text-gray-400 text-sm">Connect:</span>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/abelrodrigo1970"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/abel-r-oliveira-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:abelrodrigo101@gmail.com"
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end animate-slide-up">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full p-1">
                  <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={abelImage}
                      alt="Abel Oliveira"
                      className="w-72 h-72 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-400">30+</div>
              <div className="text-gray-400">Years of Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-400">6</div>
              <div className="text-gray-400">Projects Developed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-400">2024</div>
              <div className="text-gray-400">Started Programming</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-400">100%</div>
              <div className="text-gray-400">Dedication</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="section-title">Featured Work</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A selection of my recent projects that demonstrate my digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Preview Cards */}
            <Link to="/projects" className="card group cursor-pointer">
              <div className="w-full h-48 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">E-commerce Butcher Shop</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">E-commerce Platform</h3>
              <p className="text-gray-400 mb-4">Complete online sales system with inventory management and payments.</p>
              <div className="flex justify-between items-center">
                <span className="text-primary-400 text-sm">React • PostgreSQL • Stripe</span>
                <ArrowRight size={20} className="text-primary-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/projects" className="card group cursor-pointer">
              <div className="w-full h-48 bg-gradient-to-br from-accent-600 to-accent-800 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Election Results</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Election Simulator</h3>
              <p className="text-gray-400 mb-4">Interactive simulator for electoral results with real-time data visualization.</p>
              <div className="flex justify-between items-center">
                <span className="text-primary-400 text-sm">JavaScript • HTML • CSS</span>
                <ArrowRight size={20} className="text-primary-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/projects" className="card group cursor-pointer">
              <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Talho Nascente</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Business Website</h3>
              <p className="text-gray-400 mb-4">Professional website with online ordering system.</p>
              <div className="flex justify-between items-center">
                <span className="text-primary-400 text-sm">JavaScript • HTML • CSS</span>
                <ArrowRight size={20} className="text-primary-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="btn-primary inline-flex items-center">
              View All Projects
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Highlights */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="section-title">Core Skills</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Technologies and tools I master in my journey as a developer.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'JavaScript', 'TypeScript', 'React', 'Java', 'Oracle APEX', 'Git'
            ].map((skill, index) => (
              <div key={index} className="card text-center py-6">
                <div className="text-2xl font-bold text-primary-400 mb-2">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 