'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { FeatureCard } from '@/components/FeatureCard'

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-7xl w-full mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 text-sm text-purple-300 font-semibold">
              🚀 AI-Powered Automation
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Scale Your Operations</span>
            <br />
            <span className="text-white">Without the Overhead</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Orchid Automation is your fractional automation partner. We streamline operations and supercharge GTM for VCs and growth-stage startups using cutting-edge AI solutions.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <Button size="lg">Start Automating</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>

          {/* Demo Card */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-2xl -z-10"></div>
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/20">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold gradient-text">50%</div>
                  <p className="text-gray-400 text-sm mt-2">Time Saved</p>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">10x</div>
                  <p className="text-gray-400 text-sm mt-2">Faster Scaling</p>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">99.9%</div>
                  <p className="text-gray-400 text-sm mt-2">Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 gradient-text">
            Powerful Features
          </h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Everything you need to automate, scale, and grow your business operations efficiently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon="🤖"
              title="AI-Powered Automation"
              description="Leverage machine learning to automate repetitive tasks and streamline workflows."
            />
            <FeatureCard
              icon="⚡"
              title="Lightning Fast Deployment"
              description="Get up and running in days, not months. Our solutions integrate seamlessly."
            />
            <FeatureCard
              icon="📊"
              title="Real-Time Analytics"
              description="Monitor performance with detailed dashboards and actionable insights."
            />
            <FeatureCard
              icon="🔒"
              title="Enterprise Security"
              description="Bank-grade security with encryption and compliance certifications."
            />
            <FeatureCard
              icon="🔄"
              title="Custom Integrations"
              description="Connect with your existing tools and systems effortlessly."
            />
            <FeatureCard
              icon="🎯"
              title="Results-Driven"
              description="Measurable impact on your bottom line from day one."
            />
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Built for</span>
            <br />
            <span className="text-white">Growth Stage Startups</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-white mb-3">Go-to-Market Acceleration</h3>
              <p className="text-gray-300 mb-4">Automate sales processes, customer onboarding, and support workflows to accelerate your GTM.</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>✓ Lead qualification automation</li>
                <li>✓ Customer journey mapping</li>
                <li>✓ Revenue ops optimization</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-white mb-3">Operations Optimization</h3>
              <p className="text-gray-300 mb-4">Streamline internal processes, reduce manual work, and improve team efficiency.</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>✓ Data processing automation</li>
                <li>✓ Workflow optimization</li>
                <li>✓ Team productivity tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">About Orchid</span>
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Founded in 2024, Orchid Automation was born from a simple insight: growth-stage startups need fractional automation partners who understand their unique challenges and constraints.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We combine deep expertise in AI, automation, and SaaS operations to deliver measurable results that scale with your business.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our mission is to empower startups and VCs to focus on what they do best—innovating and growing—while we handle the operational complexity.
              </p>
              <Button>Learn About Our Team</Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-xl blur-3xl -z-10"></div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Orchid?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-pink-500 font-bold">✨</span>
                    <span className="text-gray-300">Fractional expertise without full-time commitment</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pink-500 font-bold">⚡</span>
                    <span className="text-gray-300">Quick implementation and rapid ROI</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pink-500 font-bold">🎯</span>
                    <span className="text-gray-300">Results-oriented approach with measurable metrics</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pink-500 font-bold">🤝</span>
                    <span className="text-gray-300">Partnership mindset aligned with your growth</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Automate Your Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's talk about how Orchid Automation can accelerate your growth and streamline your operations.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg">Get Started Today</Button>
            <a href="mailto:hello@orchidautomation.com" className="inline-block">
              <Button variant="secondary" size="lg">Contact Us</Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
