import React from 'react';
import { Download, Calendar, MapPin, Award, Briefcase, Code, Languages, Heart } from 'lucide-react'
import cvPdf from '../assets/CV-Abel.pdf'

const About = () => {
  const education = [
    {
      degree: "Full Stack Developer Bootcamp",
      school: "Code for All",
      period: "2024",
      location: "Portugal",
      description: "Intensive 14-week programming course where I learned Computer Engineering and Programming."
    },
    {
      degree: "Oracle APEX from Beginner to Advanced",
      school: "Udemy",
      period: "2024",
      location: "Online",
      description: "Complete Oracle SQL and PL/SQL database course"
    },
    {
      degree: "High School",
      school: "Escola Secundária Cerco Porto",
      period: "1987",
      location: "Porto, Portugal",
      description: "Complete secondary education"
    }
  ]

  const experience = [
    {
      position: "Software Developer and Project Manager",
      company: "Data Plan",
      period: "1989 - 1995",
      location: "Portugal",
      description: "Started my career in technology, developing software and managing projects. Also responsible for customer training.",
      achievements: [
        "Developed customized software solutions",
        "Technology project management",
        "Customer training and support",
        "Implementation of enterprise systems"
      ]
    },
    {
      position: "Manager and Butcher",
      company: "Talho Nascente",
      period: "1995 - 2023",
      location: "Portugal",
      description: "Complete management of family business, including financial, commercial and operational management. Responsible for all areas of the butcher shop for almost 30 years.",
      achievements: [
        "Financial and commercial management for 28 years",
        "Development and maintenance of customer relationships",
        "Supplier management and inventory control",
        "Implementation of operational improvements"
      ]
    }
  ]

  const skills = {
    programming: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "SQL", level: 85 },
      { name: "PL/SQL", level: 80 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 }
    ],
    libraries: [
      { name: "React", level: 85 },
      { name: "jQuery", level: 80 },
      { name: "SimpleGraphicsGFX", level: 75 }
    ],
    frameworks: [
      { name: "Bootstrap", level: 80 },
      { name: "Spring MVC", level: 75 },
      { name: "Spring Boot", level: 75 },
      { name: "Hibernate", level: 70 },
      { name: "JUnit", level: 70 },
      { name: "Mockito", level: 70 }
    ],
    tools: [
      { name: "Oracle APEX", level: 85 },
      { name: "Git", level: 80 },
      { name: "Vim", level: 75 },
      { name: "Apache Tomcat", level: 75 },
      { name: "Maven", level: 70 },
      { name: "REST API", level: 80 },
      { name: "Ajax", level: 75 },
      { name: "Scrum", level: 80 }
    ]
  }

  const languages = [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Intermediate" }
  ]

  const hobbies = [
    { name: "Playing Football", icon: "⚽" },
    { name: "Dancing", icon: "💃" },
    { name: "Airsoft", icon: "🎯" }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="section-title">About Me & Resume</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I was an entrepreneur and manager for 30 years. Now I'm on an exciting transformation journey, 
            transitioning to full-stack developer.
          </p>
          
          {/* Download CV Button */}
          <div className="pt-4">
            <a
              href={cvPdf}
              download="CV-Abel-Oliveira.pdf"
              className="btn-primary inline-flex items-center"
            >
              <Download size={20} className="mr-2" />
              Download CV
            </a>
          </div>
        </div>

        {/* Education Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <Award className="text-primary-400 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                    <p className="text-primary-400 font-medium mb-2">{edu.school}</p>
                    <p className="text-gray-300 mb-4">{edu.description}</p>
                  </div>
                  <div className="text-right text-sm text-gray-400 md:ml-6 flex-shrink-0">
                    <div className="flex items-center mb-1">
                      <Calendar size={16} className="mr-1" />
                      {edu.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {edu.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <Briefcase className="text-primary-400 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Professional Experience</h2>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{exp.position}</h3>
                    <p className="text-primary-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="text-white font-medium">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start">
                            <span className="text-primary-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-400 md:ml-6 flex-shrink-0 mt-4 md:mt-0">
                    <div className="flex items-center mb-1">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <Code className="text-primary-400 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="card">
                <h3 className="text-xl font-semibold text-white mb-6 capitalize">
                  {category === 'programming' && 'Programming'}
                  {category === 'libraries' && 'Libraries'}
                  {category === 'frameworks' && 'Frameworks'}
                  {category === 'tools' && 'Tools & Others'}
                </h3>
                <div className="space-y-4">
                  {skillList.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-primary-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-primary-500 h-2 rounded-full transition-all duration-300 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <Languages className="text-primary-400 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Languages</h2>
          </div>
          
          <div className="card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {languages.map((language, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-300 font-medium">{language.name}</span>
                  <span className="text-primary-400">{language.level}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <Heart className="text-primary-400 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Hobbies & Interests</h2>
          </div>
          
          <div className="card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {hobbies.map((hobby, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-2xl">{hobby.icon}</span>
                  <span className="text-gray-300 font-medium">{hobby.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together?</h3>
            <p className="text-gray-300 mb-6">
              I'm always open to new challenges and opportunities. 
              If you have a project in mind, let's talk!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Get In Touch
              </a>
              <a href="/projects" className="btn-outline">
                View Projects
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About 