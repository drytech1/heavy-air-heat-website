import { Phone, CheckCircle, Clock, Shield } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
                <Shield className="h-4 w-4 mr-2" />
                24/7 Emergency Service Available
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Heavy-Duty HVAC Solutions for{' '}
                <span className="text-primary-600">Heavy-Duty</span> Needs
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                Commercial-grade heating, cooling, and ventilation services for businesses and homes. 
                Licensed, bonded, and insured technicians ready to handle any climate control challenge.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: CheckCircle, text: 'Same-Day Service' },
                { icon: Shield, text: 'Licensed & Insured' },
                { icon: Clock, text: '24/7 Emergency' },
                { icon: CheckCircle, text: 'Free Estimates' },
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <feature.icon className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/request"
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg text-lg text-center transition-colors duration-200"
              >
                Request Service Now
              </Link>
              
              <a
                href="tel:+13613348023"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                <Phone className="h-5 w-5 mr-3" />
                Emergency: (361) 334-8023
              </a>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by businesses across the region:</p>
              <div className="flex flex-wrap items-center gap-6 opacity-60">
                <div className="text-lg font-semibold text-gray-700">50+ Years Experience</div>
                <div className="h-6 w-px bg-gray-300" />
                <div className="text-lg font-semibold text-gray-700">1000+ Happy Customers</div>
                <div className="h-6 w-px bg-gray-300" />
                <div className="text-lg font-semibold text-gray-700">24/7 Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-500 to-primary-700 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-4xl font-bold mb-4">Your Climate Control Experts</div>
                    <p className="text-xl opacity-90">Commercial & Residential HVAC Solutions</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Response Time</span>
                    <span className="font-bold text-primary-700">Under 2 Hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Service Area</span>
                    <span className="font-bold text-primary-700">50+ Miles</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Satisfaction</span>
                    <span className="font-bold text-primary-700">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3" />
              <span className="font-semibold">24/7 EMERGENCY SERVICE:</span>
              <a href="tel:+13613348023" className="ml-2 font-bold hover:underline">
                (361) 334-8023
              </a>
            </div>
            <div className="text-sm opacity-90">
              No extra charge for nights, weekends, or holidays
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
