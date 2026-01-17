'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'

export default function Services() {
  const services = [
    {
      title: 'AI-Powered Automation Strategy',
      description: 'Custom automation roadmap tailored to your business needs and growth stage.',
      features: [
        'Process discovery and analysis',
        'Automation opportunity assessment',
        'ROI projection and planning',
        'Implementation roadmap'
      ],
      icon: '🎯'
    },
    {
      title: 'Go-to-Market Operations',
      description: 'Streamline your sales, marketing, and customer success operations.',
      features: [
        'Lead qualification automation',
        'Sales pipeline optimization',
        'Customer journey mapping',
        'Revenue ops integration'
      ],
      icon: '📈'
    },
    {
      title: 'Business Process Automation',
      description: 'Eliminate manual workflows and boost team productivity across departments.',
      features: [
        'Data processing automation',
        'Workflow optimization',
        'System integrations',
        'Custom automation solutions'
      ],
      icon: '⚙️'
    },
    {
      title: 'AI Integration & Implementation',
      description: 'Harness AI to solve complex business problems and gain competitive advantage.',
      features: [
        'AI solution implementation',
        'Machine learning integration',
        'Predictive analytics setup',
        'AI capability assessment'
      ],
      icon: '🤖'
    },
    {
      title: 'Operations Scaling & Optimization',
      description: 'Scale your operations without adding headcount or operational complexity.',
      features: [
        'Process efficiency audits',
        'Bottleneck identification',
        'Scalability planning',
        'Performance monitoring'
      ],
      icon: '🚀'
    },
    {
      title: 'Consulting & Strategy',
      description: 'Expert guidance on automation, AI adoption, and operational transformation.',
      features: [
        'Digital transformation consulting',
        'Automation strategy development',
        'Technology recommendations',
        'Change management support'
      ],
      icon: '💡'
    }
  ];

  return (
    <main className="w-full">
      <Header />
      
      {/* Page Header */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl w-full mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Automation</span>
            <br />
            <span className="text-white">Done Right</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Comprehensive automation solutions designed to accelerate growth, streamline operations, and maximize ROI for your startup.
          </p>
          <Button size="lg">Explore Our Services</Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:bg-white/10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex gap-2 text-gray-300 text-sm">
                      <span className="text-purple-400 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">How We Work</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Fractional Partnership</h3>
              <p className="text-gray-300 mb-4">
                Access expert automation knowledge without full-time commitment. Flexible engagement tailored to your needs.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Part-time or project-based</li>
                <li>✓ Scale up or down easily</li>
                <li>✓ Expert-level support</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Project-Based</h3>
              <p className="text-gray-300 mb-4">
                Defined scope, clear timeline, and measurable outcomes. Perfect for specific automation initiatives.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Clear deliverables</li>
                <li>✓ Fixed timeline</li>
                <li>✓ Success metrics</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Strategic Consulting</h3>
              <p className="text-gray-300 mb-4">
                Long-term partnership focused on transformation and sustainable growth through automation.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Strategic guidance</li>
                <li>✓ Ongoing support</li>
                <li>✓ Team collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Our Process
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-purple-600 to-pink-600">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Discovery & Assessment</h3>
                <p className="text-gray-300">
                  We dive deep into your current operations, identify bottlenecks, and uncover automation opportunities with the highest ROI potential.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-purple-600 to-pink-600">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Strategy & Planning</h3>
                <p className="text-gray-300">
                  We develop a comprehensive automation roadmap with clear milestones, success metrics, and resource requirements.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-purple-600 to-pink-600">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Implementation & Integration</h3>
                <p className="text-gray-300">
                  Our team executes the automation plan, integrates with your existing systems, and ensures smooth deployment with minimal disruption.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-purple-600 to-pink-600">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Optimization & Support</h3>
                <p className="text-gray-300">
                  We monitor performance, optimize workflows, and provide ongoing support to maximize your automation ROI and scale solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how Orchid Automation can help you achieve your growth goals.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg">Schedule Consultation</Button>
            <Button variant="secondary" size="lg">Download Our Case Studies</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
