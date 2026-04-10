import { Thermometer, Wind, Settings, Zap, Home, Wrench, Shield, Clock, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const services = [
  {
    icon: Thermometer,
    title: 'Heating System Services',
    description: 'Complete heating solutions for all fuel types and system sizes.',
    features: [
      'Furnace Installation & Repair',
      'Heat Pump Systems',
      'Boiler Services',
      'Ductless Mini-Splits',
      'Thermostat Installation',
      'Emergency Heating Repair'
    ],
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: Wind,
    title: 'Cooling & Air Conditioning',
    description: 'Keep your space comfortable year-round with professional AC services.',
    features: [
      'Central AC Installation',
      'AC Repair & Maintenance',
      'Ductless Cooling Systems',
      'Commercial AC Units',
      'Preventive Maintenance',
      '24/7 Emergency Cooling'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Settings,
    title: 'Ventilation & Air Quality',
    description: 'Improve indoor air quality and proper airflow throughout your property.',
    features: [
      'Air Duct Cleaning',
      'Air Purifier Installation',
      'Humidifier/Dehumidifier',
      'ERV/HRV Systems',
      'Ventilation Assessment',
      'Mold & Allergen Control'
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'Emergency Repair Services',
    description: '24/7 emergency HVAC services for urgent climate control issues.',
    features: [
      'Same-Day Service Available',
      'No Overtime Charges',
      'Emergency Parts Inventory',
      'Weekend & Holiday Service',
      'Priority Dispatch',
      'Warranty on All Repairs'
    ],
    color: 'from-yellow-500 to-amber-500'
  },
  {
    icon: Home,
    title: 'Residential HVAC',
    description: 'Complete home heating and cooling solutions for every family.',
    features: [
      'Whole-Home Systems',
      'Energy-Efficient Upgrades',
      'Smart Home Integration',
      'Regular Maintenance Plans',
      'System Replacements',
      'Indoor Air Quality'
    ],
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Wrench,
    title: 'Commercial HVAC',
    description: 'Large-scale systems for businesses, offices, and industrial facilities.',
    features: [
      'RTU Maintenance & Repair',
      'Chiller Services',
      'Building Automation',
      'Energy Audits',
      'Preventive Maintenance',
      'Compliance & Certification'
    ],
    color: 'from-indigo-500 to-blue-500'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive HVAC Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              From emergency repairs to complete system installations, we handle all your climate control needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13613348023"
                className="bg-white text-primary-700 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg inline-flex items-center justify-center"
              >
                <Clock className="h-6 w-6 mr-3" />
                24/7 Emergency Service
              </a>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg text-lg"
              >
                Request Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                <div className="p-8">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 group-hover:bg-primary-50 group-hover:text-primary-700">
                    Learn More About {service.title.split(' ')[0]} Services
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Heavy Air & Heat?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With over 50 years of experience, we bring unmatched expertise to every job.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Licensed & Insured', desc: 'Fully certified technicians with proper licensing and insurance for your protection.' },
              { icon: Clock, title: '24/7 Emergency Service', desc: 'Round-the-clock availability for urgent HVAC issues, including holidays.' },
              { icon: CheckCircle, title: 'Satisfaction Guaranteed', desc: 'We stand behind our work with a 100% satisfaction guarantee on all services.' },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Professional HVAC Service?</h2>
          <p className="text-xl opacity-90 mb-8">
            Contact us today for a free estimate or emergency service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13613348023"
              className="bg-white text-primary-700 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg"
            >
              Call Now: (361) 334-8023
            </a>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg text-lg"
            >
              Schedule Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
