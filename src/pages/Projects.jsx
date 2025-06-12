import { useState } from 'react'
import { ExternalLink, Github, Play, Filter, Search } from 'lucide-react'
import talhoSite from '../assets/talho_site.png'
import fabioSite from '../assets/fabio_site.png'
import eleicoesSite from '../assets/eleicoes_site.png'
import talhoApexSite from '../assets/talho_apex_site.png'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const projects = [
    {
      id: 1,
      title: "E-commerce Butcher Shop",
      description: "Complete e-commerce platform for butcher shop with inventory management, customer orders and clients. Includes advanced administrative panel and integrated payment system.",
      image: talhoApexSite,
      tags: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      category: "Fullstack",
      demoUrl: "https://g172cab7e0ec33a-nascentedb01.adb.eu-madrid-1.oraclecloudapps.com/ords/r/nascente/site/login?session=314224559415809",
      codeUrl: "https://github.com/abeloliveira/talho-online",
      featured: true
    },
    {
      id: 2,
      title: "Talho Nascente",
      description: "Professional website for Talho Nascente with product catalog, online ordering system and order management.",
      image: talhoSite,
      tags: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
      category: "Fullstack",
      demoUrl: "https://talhonascente.pt",
      codeUrl: "https://github.com/abelrodrigo1970/talho-nascente",
      featured: true
    },
    {
      id: 3,
      title: "Fabio Events",
      description: "Website for events company with photo gallery, contact form and event management.",
      image: fabioSite,
      tags: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
      category: "Frontend",
      demoUrl: "https://abelrodrigo1970.github.io/fabio-events/",
      codeUrl: "https://github.com/Abelrodrigo1970/fabio-events",
      featured: true
    },
    {
      id: 4,
      title: "Electoral Results Simulator",
      description: "Web application for simulation and analysis of electoral results with interactive visualizations and dynamic charts.",
      image: eleicoesSite,
      tags: ["JavaScript", "Chart.js", "Bootstrap", "Data Visualization"],
      category: "Frontend",
      demoUrl: "https://abelrodrigo1970.github.io/Simulador-Resultados-Eleitorais/",
      codeUrl: "https://github.com/abelrodrigo1970/Simulador-Resultados-Eleitorais",
      featured: true
    },
    {
      id: 5,
      title: "Crypto Backtest",
      description: "React application for backtesting cryptocurrency trading strategies with performance analysis and advanced visualizations.",
      image: "/api/placeholder/600/400",
      tags: ["TypeScript", "React", "Chart.js", "Binance API", "TailwindCSS"],
      category: "Frontend",
      demoUrl: "https://abelrodrigo1970.github.io/crypto-backtest",
      codeUrl: "https://github.com/abelrodrigo1970/crypto-backtest",
      featured: true
    },
    {
      id: 6,
      title: "Crypto Bot",
      description: "Automated bot for cryptocurrency trading with custom strategies and risk management.",
      image: "/api/placeholder/600/400",
      tags: ["JavaScript", "Node.js", "Binance API", "Technical Analysis"],
      category: "Backend",
      demoUrl: "https://bot-crypto.vercel.app",
      codeUrl: "https://github.com/abelrodrigo1970/bot3",
      featured: true
    }
  ]

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'Fullstack', name: 'Fullstack' },
    { id: 'Frontend', name: 'Frontend' },
    { id: 'Backend', name: 'Backend' }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="section-title">Project Portfolio</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of my most significant work, demonstrating technical expertise, 
            creativity and innovative solutions for real challenges.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-12 space-y-6">
          {/* Search */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card group">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.featured ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.featured ? 'Completed' : 'In Development'}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary text-center text-sm py-2 inline-flex items-center justify-center"
                  >
                    <Play size={16} className="mr-1" />
                    Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-outline text-center text-sm py-2 inline-flex items-center justify-center"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-xl mb-4">No projects found</div>
            <p className="text-gray-500">Try adjusting the filters or search term</p>
          </div>
        )}

        {/* Call to Action */}
        <section className="text-center py-16 mt-20">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Like What You See?</h3>
            <p className="text-gray-300 mb-6">
              These are just some examples of my work. I have much more to show 
              and I'm always ready for new challenges!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Let's Talk
              </a>
              <a href="/about" className="btn-outline">
                View Full Resume
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projects 