'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Button } from './Button'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text hover:opacity-80">
          🌸 Orchid
        </Link>
        
        <div className="hidden md:flex gap-8">
          <Link href="#features" className="text-gray-300 hover:text-white transition">
            Features
          </Link>
          <Link href="#about" className="text-gray-300 hover:text-white transition">
            About
          </Link>
          <Link href="/team" className="text-gray-300 hover:text-white transition">
            Team
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-white transition">
            Services
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition">
            Contact
          </Link>
        </div>

        <div className="hidden md:block">
          <Button>Get Started</Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          <Menu size={24} />
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-purple-500/10 p-4">
          <div className="flex flex-col gap-4">
            <Link href="#features" className="text-gray-300 hover:text-white">
              Features
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="/team" className="text-gray-300 hover:text-white">
              Team
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white">
              Services
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  )
}
