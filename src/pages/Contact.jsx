import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        budget: '',
        timeline: ''
      })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 2000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "abelrodrigo101@gmail.com",
      description: "I respond within 24 hours",
      href: "mailto:abelrodrigo101@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+351 937 585 364",
      description: "Available for direct calls",
      href: "tel:+351937585364",
      color: "text-green-400"
    },
    {
      icon: MessageCircle,
      title: "LinkedIn",
      value: "abel-r-oliveira-dev",
      description: "Professional networking",
      href: "https://linkedin.com/in/abel-r-oliveira-dev/",
      color: "text-cyan-400"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Portugal",
      description: "Available for meetings",
      href: "https://maps.google.com/search/Portugal",
      color: "text-red-400"
    }
  ]

  const budgetRanges = [
    "< €1,000",
    "€1,000 - €5,000",
    "€5,000 - €15,000",
    "€15,000 - €50,000",
    "> €50,000",
    "Discuss in person"
  ]

  const timelineOptions = [
    "1-2 weeks",
    "1 month",
    "2-3 months",
    "3-6 months",
    "6+ months",
    "Flexible"
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="section-title">Let's Talk</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Want to discuss an idea? Or just want to say hello? 
            I'm always available for a good conversation about technology and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 font-medium">
                    ✅ Message sent successfully! I'll respond soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="What would you like to talk about?"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      {timelineOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Tell me about your project or what you'd like to discuss..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary inline-flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon
                  return (
                    <a
                      key={index}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-800 transition-colors group"
                    >
                      <div className={`flex-shrink-0 p-2 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors ${method.color}`}>
                        <IconComponent size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium">{method.title}</p>
                        <p className="text-gray-300 text-sm break-words">{method.value}</p>
                        <p className="text-gray-400 text-xs mt-1">{method.description}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Response */}
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-4">Quick Response</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Usually responds within 4 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Available Mon-Fri, 9AM-6PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Open to remote collaboration</span>
                </div>
              </div>
            </div>

            {/* Availability Calendar */}
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-4">Let's Schedule a Call</h3>
              <p className="text-gray-300 text-sm mb-4">
                Prefer to talk? I'm always open to discussing your project over a call.
              </p>
              <a
                href="mailto:abelrodrigo101@gmail.com?subject=Schedule a Call&body=Hi Abel, I'd like to schedule a call to discuss..."
                className="btn-outline w-full inline-flex items-center justify-center"
              >
                <Calendar size={20} className="mr-2" />
                Schedule a Call
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-3">What's your typical project timeline?</h3>
              <p className="text-gray-300 text-sm">
                It depends on the complexity, but most projects range from 2-8 weeks. 
                I'll provide a detailed timeline after understanding your requirements.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-3">Do you work with remote clients?</h3>
              <p className="text-gray-300 text-sm">
                Absolutely! I work with clients worldwide and am experienced with remote collaboration tools.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-3">What technologies do you specialize in?</h3>
              <p className="text-gray-300 text-sm">
                I specialize in JavaScript, TypeScript, React, Java, and Oracle APEX. 
                Check out my skills page for a complete list.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-3">Do you provide ongoing support?</h3>
              <p className="text-gray-300 text-sm">
                Yes! I offer post-launch support and maintenance packages to ensure your project continues to run smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 