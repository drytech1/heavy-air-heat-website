'use client'

import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Heavy Air and Heat Logo" 
                className="h-16 w-auto"
              />
              <div className="ml-4">
                <div className="text-xl font-bold text-gray-900"></div>
                <div className="text-sm text-gray-600"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+13613348023"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              24/7 Emergency
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+13613348023"
                className="block px-4 py-3 bg-red-600 text-white font-bold rounded-lg text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-5 w-5 inline mr-2" />
                24/7 Emergency: (361) 334-8023
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
