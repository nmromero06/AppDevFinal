import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Instagram, Globe, Twitter, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      console.log('Form submitted:', formData)
      alert('Thank you for your message! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const contactMethods = [
    { icon: Mail, label: 'Email', value: 'mitzi@example.com', href: 'mailto:mitzi@example.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, label: 'Location', value: 'Creative Studio • USA', href: '#' }
  ]

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Globe, label: 'Portfolio' },
    { icon: Twitter, label: 'Twitter' }
  ]

  return (
    <section className="contact px-6 py-12" id="contact">
      <h2 className="section-title text-left">Let's Collaborate</h2>
      <p className="section-subtitle text-left">Have a project in mind? I'd love to discuss how I can help</p>

      <div className="contact-container grid md:grid-cols-2 gap-8 items-start">
        <div className="contact-methods flex flex-col gap-4">
          {contactMethods.map((method, i) => {
            const Icon = method.icon
            return (
              <a key={i} href={method.href} className="contact-method">
                <div className="contact-icon">
                  <Icon size={24} />
                </div>
                <div className="contact-info">
                  <h3>{method.label}</h3>
                  <p>{method.value}</p>
                </div>
              </a>
            )
          })}

          <div style={{marginTop: '2rem'}}>
            <p style={{color: '#9ca3af', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 500}}>FOLLOW MY WORK</p>
            <div className="grid grid-cols-4 gap-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon
                return (
                  <button
                    key={i}
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#9ca3af',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#ff69b4'
                      e.currentTarget.style.borderColor = 'rgba(255, 105, 180, 0.5)'
                      e.currentTarget.style.background = 'rgba(255, 105, 180, 0.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#9ca3af'
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'
                    }}
                    title={social.label}
                  >
                    <Icon size={20} />
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows="5"
              required
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="btn-primary premium-button"
            style={{width: '100%', opacity: isSubmitting ? 0.7 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}
          >
            <Send size={20} />
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      </div>
    </section>
  )
}
