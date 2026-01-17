'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { Linkedin, Mail } from 'lucide-react'

export default function Team() {
  return (
    <main className="w-full">
      <Header />
      
      {/* Page Header */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl w-full mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Meet Our Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experts in automation, AI, and business operations dedicated to helping startups scale.
          </p>
        </div>
      </section>

      {/* Brandon Guerrero Profile */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-xl border border-purple-500/20 overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-purple-600/30 to-pink-600/30"></div>
            
            <div className="px-8 pb-12">
              <div className="flex flex-col md:flex-row gap-8 -mt-32 items-start md:items-end">
                <div className="w-48 h-48 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
                  BG
                </div>
                <div className="flex-1">
                  <h2 className="text-4xl font-bold text-white mb-2">Brandon Guerrero</h2>
                  <p className="text-2xl gradient-text font-semibold mb-4">Founder & CEO</p>
                  <p className="text-gray-300 mb-4">Fractional Automation Partner | AI & Operations Expert | Startup Consultant</p>
                  
                  <div className="flex gap-4 mb-6">
                    <a href="https://www.linkedin.com/in/bmguerrero/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-400 hover:text-white transition">
                      <Linkedin size={20} />
                      LinkedIn
                    </a>
                    <a href="mailto:brandon@orchidautomation.com" className="inline-flex items-center gap-2 text-purple-400 hover:text-white transition">
                      <Mail size={20} />
                      Email
                    </a>
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div className="mt-12 mb-12">
                <h3 className="text-2xl font-bold text-white mb-4">About Brandon</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Brandon Guerrero is a fractional automation partner and business automation expert with a passion for helping growth-stage startups and VCs scale operations efficiently. With extensive experience in automation, AI, and SaaS operations, Brandon brings a results-oriented approach to solving complex operational challenges.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  As the founder of Orchid Automation, Brandon combines technical expertise with deep business acumen to deliver measurable impact. He specializes in streamlining go-to-market operations, revenue automation, and optimizing internal workflows for maximum efficiency.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Brandon's approach is rooted in understanding the unique constraints of growth-stage companies. He works as an extension of your team, bringing fractional expertise without the overhead of a full-time hire.
                </p>
              </div>

              {/* Experience & Expertise */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Expertise Areas</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-gray-300">
                      <span className="text-purple-400 font-bold">→</span>
                      <span>AI-Powered Automation & Machine Learning</span>
                    </li>
                    <li className="flex gap-3 text-gray-300">
                      <span className="text-purple-400 font-bold">→</span>
                      <span>Business Process Automation</span>
                    </li>
                    <li className="flex gap-3 text-gray-300">
                      <span className="text-purple-400 font-bold">→</span>
                      <span>Go-to-Market Operations</span>
                    </li>
                    <li className="flex gap-3 text-gray-300">
                      <span className="text-purple-400 font-bold">→</span>
                      <span>Revenue Operations & Sales Automation</span>
                    </li>
                    <li className="flex gap-3 text-gray-300">
                      <span className="text-purple-400 font-bold">→</span>
                      <span>Workflow Optimization & Integration</span>
                    </li>
                    <li className="flex gap-3 text-gray-300">
                      <span className="text-purple-400 font-bold">→</span>
                      <span>SaaS Operations & Scaling</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Skills & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Automation', 'AI/ML', 'Python', 'Data Analysis', 'APIs', 'Workflow Design', 'SQL', 'Business Analysis', 'Process Mining', 'CRM Systems', 'Zapier', 'Make', 'n8n'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-purple-500/20 border border-purple-500/50 rounded-full text-sm text-purple-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Certifications & Training</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-purple-500/10 rounded-lg p-4">
                    <p className="font-semibold text-white">The Complete SQL Bootcamp</p>
                    <p className="text-sm text-gray-400">Udemy • Data Management & Analytics</p>
                  </div>
                  <div className="bg-white/5 border border-purple-500/10 rounded-lg p-4">
                    <p className="font-semibold text-white">Hootsuite Certification</p>
                    <p className="text-sm text-gray-400">Hootsuite • Social Media & Marketing</p>
                  </div>
                  <div className="bg-white/5 border border-purple-500/10 rounded-lg p-4">
                    <p className="font-semibold text-white">Excel Certification</p>
                    <p className="text-sm text-gray-400">Certiport • Data Analysis & Reporting</p>
                  </div>
                  <div className="bg-white/5 border border-purple-500/10 rounded-lg p-4">
                    <p className="font-semibold text-white">Preventing Workplace Harassment</p>
                    <p className="text-sm text-gray-400">Emtrain • Compliance & Training</p>
                  </div>
                </div>
              </div>

              {/* Philosophy */}
              <div className="mt-12 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg p-6 border border-purple-500/20">
                <h4 className="text-xl font-bold text-white mb-3">Philosophy</h4>
                <p className="text-gray-300 italic">
                  "The best automation isn't about replacing people—it's about elevating them. By automating repetitive, low-value work, we free teams to focus on strategic initiatives that drive real business impact. That's what Orchid Automation is all about: partnership, results, and sustainable growth."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Brandon and the Orchid team are ready to help you scale your operations and accelerate growth.
          </p>
          <Button size="lg">Schedule a Consultation</Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
