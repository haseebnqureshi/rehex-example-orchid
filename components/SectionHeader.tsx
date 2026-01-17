interface SectionHeaderProps {
  title: React.ReactNode
  subtitle?: string
  centered?: boolean
  className?: string
}

export const SectionHeader = ({
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeaderProps) => {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
