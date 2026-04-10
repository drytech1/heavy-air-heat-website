import { Wrench, Thermometer, Wind, Settings, Zap, Home, Check } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Thermometer,
    title: 'Heating Systems',
    description: 'Furnace installation, repair, and maintenance for all fuel types.',
    features: ['Gas & Electric', 'Heat Pumps', 'Boilers', 'Ductless Systems'],
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Wind,
    title: 'Cooling Solutions',
    description: 'Air conditioning installation, repair, and seasonal maintenance.',
    features: ['Central AC', 'Mini-Splits', 'Commercial Units', 'Preventive Care'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Settings,
    title: 'Ventilation',
    description: 'Indoor air quality systems and proper airflow solutions.',
    features: ['Air Purifiers', 'Humidifiers', 'ERV/HRV', 'Duct Cleaning'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Emergency Repair',
    description: '24/7 emergency service for urgent HVAC issues.',
    features: ['Same-Day Service', 'No Overtime Charges', 'Parts in Stock', 'Warranty'],
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Home,
    title: 'Commercial HVAC',
    description: 'Large-scale systems for businesses and industrial facilities.',
    features: ['RTU Maintenance', 'Chiller Service', 'Building Automation', 'Energy Audit'],
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: Wrench,
    title: 'Preventive Maintenance',
    description: 'Regular maintenance plans to prevent costly breakdowns.',
    features: ['Bi-Annual Tune-ups', 'Priority Service', 'Discounts', 'Extended Warranty'],
    color: 'from-indigo-500 to-blue-500',
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive HVAC Services
          </h2>
          <p className="text-lg text-gray-600">
            From routine maintenance to emergency repairs, we handle all your heating, cooling, 
            and ventilation needs with commercial-grade expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute -top-4 left-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white`}>
                  <service.icon className="h-6 w-6" />
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <Check className="h-4 w-4 text-primary-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group-hover:translate-x-2 transition-transform duration-200"
                >
                  Learn more
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg text-lg inline-flex items-center"
          >
            View All Services
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
