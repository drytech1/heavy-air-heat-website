import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Heavy Air & Heat</h3>
            <p className="text-gray-400">
              Professional HVAC services for commercial and residential customers.
              24/7 emergency service available.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary-400" />
                <a href="tel:+15551234567" className="hover:text-primary-300">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary-400" />
                <a href="mailto:info@heavyairandheat.com" className="hover:text-primary-300">
                  info@heavyairandheat.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-primary-400" />
                <span>123 HVAC Drive, Springfield, VA 22150</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-primary-400" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="/request" className="text-gray-400 hover:text-white">Request Service</Link></li>
              <li><Link href="/scheduling" className="text-gray-400 hover:text-white">Online Scheduling</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Certifications</h4>
            <ul className="space-y-2 text-gray-400">
              <li>✓ Licensed & Insured</li>
              <li>✓ EPA Certified</li>
              <li>✓ NATE Certified</li>
              <li>✓ BBB Accredited</li>
              <li>✓ 50+ Years Experience</li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-primary-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary-300">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Heavy Air and Heat, Inc. All rights reserved.</p>
          <p className="mt-2">License #: HVAC-12345 | Bonded & Insured</p>
        </div>
      </div>
    </footer>
  )
}
