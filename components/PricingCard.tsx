import { Button } from './Button'

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
  cta?: string
}

export const PricingCard = ({
  name,
  price,
  description,
  features,
  highlighted = false,
  cta = 'Get Started',
}: PricingCardProps) => {
  return (
    <div
      className={`rounded-xl p-8 border transition-all duration-300 ${
        highlighted
          ? 'bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/50 transform scale-105'
          : 'bg-white/5 border-purple-500/20 hover:border-purple-500/50 hover:bg-white/10'
      }`}
    >
      {highlighted && (
        <div className="mb-4">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Popular
          </span>
        </div>
      )}

      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>

      <div className="mb-6">
        <span className="text-4xl font-bold gradient-text">{price}</span>
        {price !== 'Custom' && <span className="text-gray-400 text-sm">/month</span>}
      </div>

      <Button variant={highlighted ? 'primary' : 'secondary'} className="w-full mb-6">
        {cta}
      </Button>

      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex gap-2 text-gray-300 text-sm">
            <span className="text-purple-400 font-bold">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
