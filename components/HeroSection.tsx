'use client'

import { Button } from './Button'

interface HeroSectionProps {
  title: React.ReactNode
  subtitle: string
  cta?: {
    primary: string
    secondary?: string
  }
  stats?: Array<{
    value: string
    label: string
  }>
  showDemo?: boolean
}

export const HeroSection = ({
  title,
  subtitle,
  cta = { primary: 'Get Started', secondary: 'Learn More' },
  stats,
  showDemo = true,
}: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-7xl w-full mx-auto text-center">
        <div className="mb-6 inline-block">
          <span className="bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 text-sm text-purple-300 font-semibold">
            🚀 AI-Powered Automation
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {title}
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <Button size="lg">{cta.primary}</Button>
          {cta.secondary && <Button variant="outline" size="lg">{cta.secondary}</Button>}
        </div>

        {showDemo && stats && (
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-2xl -z-10"></div>
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/20">
              <div className={`grid grid-cols-${stats.length} gap-4 text-center`}>
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                    <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
