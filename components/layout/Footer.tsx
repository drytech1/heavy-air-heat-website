import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Heavy Air & Heat, Inc.</h3>
            <p className="text-gray-400">
              Professional HVAC services since 1975. Licensed, bonded, and insured.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-gray-400" />
                <a href="tel:+13613348023" className="text-gray-400 hover:text-white">
                  (361) 334-8023
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-gray-400" />
                <a href="mailto:info@heavyairandheat.com" className="text-gray-400 hover:text-white">
                  info@heavyairandheat.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-gray-400" />
                <span className="text-gray-400">4109 Beard Drive, Corpus Christi, TX 78413</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Emergency Service</h4>
            <p className="text-gray-400 mb-4">
              24/7 emergency HVAC service available. No overtime charges.
            </p>
            <a
              href="tel:+13613348023"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg inline-block"
            >
              Call Now
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Heavy Air & Heat, Inc. All rights reserved.</p>
          <p className="mt-2">License TACLA28823C</p>
        </div>
      </div>
    </footer>
  )
}
