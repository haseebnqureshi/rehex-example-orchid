interface StatCardProps {
  value: string
  label: string
  description?: string
  icon?: string
}

export const StatCard = ({ value, label, description, icon }: StatCardProps) => {
  return (
    <div className="text-center">
      {icon && <div className="text-4xl mb-3">{icon}</div>}
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{value}</div>
      <p className="text-gray-400 font-semibold text-sm md:text-base">{label}</p>
      {description && <p className="text-gray-500 text-xs md:text-sm mt-2">{description}</p>}
    </div>
  )
}
