'use client'

import { useState } from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const serviceTypes = [
    'Emergency Repair',
    'Heating System Service',
    'Air Conditioning Service',
    'Preventive Maintenance',
    'System Installation',
    'Free Estimate',
    'Other'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Heavy Air & Heat, Inc.
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Get in touch for emergency service, estimates, or general inquiries
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            
            <div className="space-y-8">
              {/* Emergency Contact */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <AlertCircle className="h-6 w-6 text-red-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Emergency Service</h3>
                    <a 
                      href="tel:+13613348023" 
                      className="text-2xl font-bold text-red-600 hover:text-red-700 block mb-2"
                    >
                      (361) 334-8023
                    </a>
                    <p className="text-gray-700">
                      For urgent heating or cooling issues, call us anytime - day or night.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <a href="tel:+13613348023" className="text-gray-700 hover:text-primary-600">
                      (361) 334-8023
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <a href="mailto:heavyair1@gmail.com" className="text-gray-700 hover:text-primary-600">
                      heavyair1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Address</div>
                    <div className="text-gray-700">
                      4109 Beard Drive<br />
                      Corpus Christi, TX 78413
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Business Hours</div>
                    <div className="text-gray-700">
                      Monday - Friday: 7:00 AM - 7:00 PM<br />
                      Saturday: 8:00 AM - 5:00 PM<br />
                      Sunday: Emergency Service Only
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Area</h3>
                <p className="text-gray-700 mb-4">
                  We proudly serve the following areas:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {['Corpus Christi', 'Portland', 'Aransas Pass', 'Rockport', 'Ingleside', 'Sinton', 'Mathis', 'Alice'].map((area, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded-r-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <div>
                      <div className="font-semibold text-green-800">Message Sent Successfully!</div>
                      <div className="text-green-700">We'll get back to you within 24 hours.</div>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="(361) 334-8023"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a service...</option>
                    {serviceTypes.map((service, idx) => (
                      <option key={idx} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Please describe your HVAC needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to our privacy policy. We'll never share your information.
                </p>
              </form>
            </div>

            {/* Quick Contact */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <a
                href="tel:+13613348023"
                className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-6 text-center group transition-colors duration-200"
              >
                <Phone className="h-8 w-8 text-primary-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                <div className="font-semibold text-gray-900">Call Now</div>
                <div className="text-sm text-gray-600">(361) 334-8023</div>
              </a>
              
              <a
                href="sms:+13613348023"
                className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-6 text-center group transition-colors duration-200"
              >
                <MessageSquare className="h-8 w-8 text-primary-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                <div className="font-semibold text-gray-900">Text Us</div>
                <div className="text-sm text-gray-600">Quick questions</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
<div className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Find Our Location</h2>
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5823.436098104245!2d-97.41265292295768!3d27.695647976189356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8668f583ffffffff%3A0x1ef24b491d7fad85!2sHeavy%20Air%20%26%20Heat%20Inc!5e1!3m2!1sen!2sus!4v1775859729108!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Heavy Air and Heat Location"
          className="w-full h-full"
        />
      </div>
      <div className="p-6 bg-white">
        <div className="flex items-center justify-center">
          <MapPin className="h-6 w-6 text-primary-600 mr-3" />
          <div>
            <div className="font-bold text-gray-900">Heavy Air & Heat, Inc.</div>
            <div className="text-gray-600">4109 Beard Drive, Corpus Christi, TX 78413</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* CTA Section */}
      <div className="bg-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl opacity-90 mb-8">
            For emergency HVAC service, call us now - we're available 24/7.
          </p>
          <a
            href="tel:+13613348023"
            className="bg-white text-primary-700 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg inline-block"
          >
            Emergency Call: (361) 334-8023
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}
