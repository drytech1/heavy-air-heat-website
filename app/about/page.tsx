import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Users, Award, Clock, MapPin, Shield, Heart } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Heavy Air & Heat
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Family-owned HVAC excellence since 1975
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 1975 by John Heavy, Heavy Air & Heat began as a small family business 
                with a single service truck and a commitment to honest, reliable HVAC service.
              </p>
              <p>
                What started as a one-man operation has grown into a full-service HVAC company 
                serving commercial and residential customers across the region, but our core values 
                remain unchanged.
              </p>
              <p>
                Today, under the leadership of John's son, Michael Heavy, we continue to uphold 
                the standards of excellence that have made us a trusted name in HVAC services 
                for over five decades.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-700">50+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-700">10,000+</div>
                <div className="text-gray-600">Satisfied Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-700">24/7</div>
                <div className="text-gray-600">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-700">100%</div>
                <div className="text-gray-600">Satisfaction Guarantee</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                To provide exceptional HVAC services that ensure comfort, efficiency, and peace 
                of mind for every customer we serve.
              </p>
              <p className="text-gray-700">
                We believe in honest pricing, transparent communication, and workmanship that 
                stands the test of time.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <Heart className="h-5 w-5 text-red-500 mr-3" />
                <span className="text-gray-900 font-medium">Family-owned and operated</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-900 font-medium">Licensed, bonded, and insured</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-yellow-500 mr-3" />
                <span className="text-gray-900 font-medium">BBB Accredited Business</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our certified technicians bring decades of combined experience to every job.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Michael Heavy', role: 'President & CEO', experience: '30+ years', bio: 'Second-generation owner continuing the family legacy of excellence.' },
              { name: 'Sarah Johnson', role: 'Service Manager', experience: '25+ years', bio: 'Oversees all service operations and technician training.' },
              { name: 'Robert Chen', role: 'Lead Technician', experience: '20+ years', bio: 'Specializes in commercial HVAC systems and complex installations.' },
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-8 text-center">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-primary-600 font-semibold mb-2">{member.role}</div>
                <div className="text-gray-600 mb-4">{member.experience} Experience</div>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Certifications</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: 'EPA Certified', desc: 'Environmental Protection Agency' },
            { name: 'NATE Certified', desc: 'North American Technician Excellence' },
            { name: 'HVAC Excellence', desc: 'Industry-Recognized Certification' },
            { name: 'OSHA Trained', desc: 'Occupational Safety & Health' },
          ].map((cert, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <div className="font-bold text-gray-900">{cert.name}</div>
              <div className="text-sm text-gray-600">{cert.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Heavy Air & Heat Difference</h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of satisfied customers who trust us with their HVAC needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13613348023"
              className="bg-white text-primary-700 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg"
            >
              Schedule Service
            </a>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <
