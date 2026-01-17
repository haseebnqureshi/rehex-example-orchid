import React from 'react'
import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105',
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        {
          'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/50 glow':
            variant === 'primary',
          'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40':
            variant === 'secondary',
          'border-2 border-purple-600 text-purple-400 hover:bg-purple-600/10':
            variant === 'outline',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
