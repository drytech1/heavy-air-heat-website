'use client';

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Phone, CheckCircle, Shield, Clock, Wrench, Thermometer, Wind, Zap } from 'lucide-react'
import { useRef, useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
     {/* Enhanced Hero Section */}
<div className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white overflow-hidden">
  {/* Background pattern */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%230c4a6e" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Text Content - Enhanced */}
      <div className="text-center lg:text-left">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
          <span className="text-sm font-semibold">Serving Corpus Christi Since 1975</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block">Heavy Air</span>
          <span className="block text-accent-400">& Heat, Inc.</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl">
          Commercial-Grade HVAC Solutions with <span className="font-bold text-accent-300">50+ Years</span> of Excellence
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+13613348023"
            className="bg-accent-600 hover:bg-accent-700 text-white font-bold py-4 px-8 rounded-lg text-lg inline-flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Phone className="h-6 w-6 mr-3" />
            24/7 Emergency: (361) 334-8023
          </a>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-lg text-lg border border-white/20 transition-all duration-300">
            Schedule Service
          </button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-12 grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-300">50+</div>
            <div className="text-sm opacity-80">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-300">24/7</div>
            <div className="text-sm opacity-80">Emergency Service</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-300">100%</div>
            <div className="text-sm opacity-80">Satisfaction</div>
          </div>
        </div>
      </div>
      
      {/* Video Container - Enhanced */}
      <div className="relative">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black transform hover:scale-[1.02] transition-transform duration-500">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            muted={isMuted}
            loop
            autoPlay
            preload="metadata"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          
          {/* Glass effect controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <div className="flex items-center justify-between">
              <div className="text-white">
                <div className="font-semibold">HVAC Services Video</div>
                <div className="text-sm opacity-80">Professional installation & repair</div>
              </div>
              <button
                onClick={toggleMute}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? '🔇' : '🔊'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Features Section */}
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

      {/* Enhanced Services Section */}
<div className="py-20 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-semibold mb-4">
        Our Services
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Comprehensive <span className="text-primary-600">HVAC Solutions</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        From emergency repairs to complete system installations, we provide professional HVAC services for residential and commercial clients.
      </p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { 
          icon: Thermometer, 
          title: 'Heating Systems', 
          desc: 'Furnace installation, repair, and maintenance for optimal winter comfort.',
          color: 'from-red-500 to-orange-500',
          features: ['Furnace Repair', 'Boiler Service', 'Heat Pump Installation']
        },
        { 
          icon: Wind, 
          title: 'Cooling Solutions', 
          desc: 'AC installation, maintenance, and repair to keep you cool all summer.',
          color: 'from-blue-500 to-cyan-500',
          features: ['AC Installation', 'Duct Cleaning', 'Preventive Maintenance']
        },
        { 
          icon: Zap, 
          title: 'Emergency Repair', 
          desc: '24/7 emergency service with no overtime charges.',
          color: 'from-yellow-500 to-amber-500',
          features: ['Same-Day Service', 'Weekend Available', 'No Overtime Fees']
        },
      ].map((service, idx) => (
        <div key={idx} className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary-200">
          <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
          <div className="p-8">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
              <service.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.desc}</p>
            
            <ul className="space-y-3 mb-8">
              {service.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-primary-50 hover:bg-primary-100 text-primary-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center group-hover:bg-primary-100">
              Learn More
              <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
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
              href="tel:+13613348023"
              className="bg-white text-primary-700 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg"
            >
              Call Now: (361) 334-8023
            </a>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg text-lg">
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
