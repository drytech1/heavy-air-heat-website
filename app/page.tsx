'use client';

import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Phone, CheckCircle, Shield, Clock, Wrench, Thermometer, Wind, Zap } from 'lucide-react';
import { useRef, useState } from 'react';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  function toggleMute() {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block">Heavy Air</span>
                <span className="block text-accent-400">& Heat, Inc.</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl">
                Commercial-Grade HVAC Solutions with 50+ Years of Excellence
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+13613348023"
                  className="bg-accent-600 hover:bg-accent-700 text-white font-bold py-4 px-8 rounded-lg text-lg inline-flex items-center justify-center"
                >
                  <Phone className="h-6 w-6 mr-3" />
                  24/7 Emergency: (361) 334-8023
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
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
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      <div className="font-semibold">HVAC Services Video</div>
                    </div>
                    <button
                      onClick={toggleMute}
                      className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full"
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
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our HVAC Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional HVAC services for residential and commercial clients throughout Corpus Christi and surrounding areas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Thermometer, 
                title: 'Heating Systems', 
                desc: 'Professional installation, repair, and maintenance of furnaces, boilers, and heat pumps.',
                features: ['Furnace Repair', 'Boiler Service', 'Heat Pump Systems']
              },
              { 
                icon: Wind, 
                title: 'Cooling Solutions', 
                desc: 'Complete AC installation, maintenance, and repair services for hot Texas summers.',
                features: ['AC Installation', 'Duct Cleaning', 'Preventive Maintenance']
              },
              { 
                icon: Zap, 
                title: 'Emergency Repair', 
                desc: '24/7 emergency HVAC service with no overtime charges.',
                features: ['Same-Day Service', 'Weekend Available', 'No Overtime Fees']
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-primary-600 flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.desc}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
