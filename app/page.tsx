'use client';

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Phone, CheckCircle, Shield, Clock, Wrench, Thermometer, Wind, Zap, ArrowRight } from 'lucide-react'
import { useRef, useState } from 'react'

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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%230c4a6e\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
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

      {/* Services Section */}
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
