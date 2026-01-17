'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for reaching out! We\'ll be in touch soon.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <main className="w-full">
      <Header />
      
      {/* Page Header */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl w-full mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Let's Talk</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to transform your operations? Get in touch with our team to discuss how Orchid Automation can accelerate your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition resize-none"
                    placeholder="Tell us about your automation needs..."
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>

              <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                  <div className="text-2xl text-purple-400">📧</div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a href="mailto:hello@orchidautomation.com" className="text-gray-300 hover:text-white transition">
                      hello@orchidautomation.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl text-purple-400">📱</div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Schedule a Call</h3>
                    <p className="text-gray-300">Let's discuss your automation needs</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl text-purple-400">🤝</div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Connect with Brandon</h3>
                    <a 
                      href="https://www.linkedin.com/in/bmguerrero/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition inline-flex items-center gap-2"
                    >
                      LinkedIn Profile <span className="text-purple-400">→</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-lg p-6 border border-purple-500/20">
                <h3 className="font-semibold text-white mb-2">Response Time</h3>
                <p className="text-gray-300 text-sm">
                  We typically respond to inquiries within 24 hours. For urgent matters, feel free to reach out directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'What does your typical engagement look like?',
                a: 'We start with a discovery call to understand your needs, followed by a detailed assessment of your current operations. We then create a customized automation roadmap and work with you to implement solutions that drive measurable results.'
              },
              {
                q: 'How long does it take to see results?',
                a: 'Most clients see initial results within the first 4-6 weeks of engagement. Significant ROI is typically realized within 3-6 months depending on the complexity of the automation initiatives.'
              },
              {
                q: 'Do you work with all types of startups?',
                a: 'We specialize in working with growth-stage startups and VCs. Whether you\'re pre-seed, seed-stage, or Series A/B, we have solutions tailored to your specific needs and constraints.'
              },
              {
                q: 'What automation tools do you work with?',
                a: 'We\'re platform-agnostic and work with tools like Zapier, Make (Integromat), n8n, and custom API integrations. We assess your current tech stack and recommend the best solutions for your situation.'
              },
              {
                q: 'Can you help with data migration?',
                a: 'Yes! We handle data migration, system integrations, and ensure smooth transitions from manual processes to automated workflows.'
              },
              {
                q: 'What if we need ongoing support?',
                a: 'We offer fractional ongoing support, retainer agreements, and strategic consulting to help you scale your automated systems as your business grows.'
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white/5 border border-purple-500/20 rounded-lg p-6 hover:bg-white/10 transition cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-white">
                  {faq.q}
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-300 mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Automate?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's schedule a consultation and explore how we can help your startup scale.
          </p>
          <Button size="lg">Get Started Today</Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
