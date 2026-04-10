'use client'

import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Request Service', href: '/request', primary: true },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-700">
              Heavy Air & Heat
            </Link>
            <span className="ml-2 text-sm text-secondary-600 hidden sm:inline">
              Commercial & Residential HVAC
            </span>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium ${
                  item.primary
                    ? 'bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg'
                    : 'text-secondary-700 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+13613348023"
              className="flex items-center text-sm font-semibold text-accent-700 hover:text-accent-800"
            >
              <Phone className="h-4 w-4 mr-2" />
              (361) 334-8023
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-secondary-700" />
            ) : (
              <Menu className="h-6 w-6 text-secondary-700" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-secondary-200 py-4">
            <div className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-2 text-base font-medium ${
                    item.primary
                      ? 'bg-primary-600 text-white text-center rounded-lg'
                      : 'text-secondary-700 hover:text-primary-600'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+13613348023"
                className="flex items-center justify-center py-2 text-base font-semibold text-accent-700 hover:text-accent-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="h-5 w-5 mr-2" />
                (361) 334-8023
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
