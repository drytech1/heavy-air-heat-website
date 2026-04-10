import { Phone, CheckCircle, Shield, Clock, Wrench, Thermometer, Wind, Zap } from 'lucide-react'
import Image from 'next/image'
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header with Left Logo */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo on LEFT */}
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Heavy Air and Heat Logo" 
                className="h-12 w-auto"
              />
              <div className="ml-4">
                <div className="text-xl font-bold text-gray-900">Heavy Air & Heat</div>
                <div className="text-sm text-gray-600">HVAC Services</div>
              </div>
            </div>

            {/* Emergency Contact on RIGHT */}
            <a
              href="tel:+15551234567"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              24/7 Emergency
            </a>
          </div>
        </div>
      </header>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Clock, title: '24/7 Service', desc: 'Emergency repairs anytime' },
            { icon: Shield, title: 'Licensed & Insured', desc: 'Fully certified technicians' },
            { icon: CheckCircle, title: 'Same-Day Service', desc: 'Most repairs completed same day' },
            { icon: Wrench, title: '50+ Years Experience', desc: 'Family-owned since 1975' },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our HVAC Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Thermometer, title: 'Heating Systems', color: 'from-red-500 to-orange-500' },
              { icon: Wind, title: 'Cooling Solutions', color: 'from-blue-500 to-cyan-500' },
              { icon: Zap, title: 'Emergency Repair', color: 'from-yellow-500 to-amber-500' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-8">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  Professional installation, repair, and maintenance for all major brands.
                </p>
                <button className="text-primary-600 font-semibold hover:text-primary-700">
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Reliable HVAC Service?</h2>
          <p className="text-xl opacity-90 mb-8">
            Schedule your service today and experience the Heavy Air & Heat difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-white text-primary-700 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg"
            >
              Call Now: (555) 123-4567
            </a>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg text-lg">
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Heavy Air & Heat, Inc.</h3>
            <p className="text-gray-400 mb-6">
              123 HVAC Drive • Springfield, VA 22150 • License #HVAC-12345
            </p>
            <div className="flex justify-center space-x-6">
              <a href="tel:+15551234567" className="text-gray-400 hover:text-white">
                (555) 123-4567
              </a>
              <a href="mailto:info@heavyairandheat.com" className="text-gray-400 hover:text-white">
                info@heavyairandheat.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
