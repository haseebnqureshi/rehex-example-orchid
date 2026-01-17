import React from 'react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group card-hover relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300 group-hover:bg-white/10 h-full">
        <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300 origin-left">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
