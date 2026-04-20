'use client';

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Phone, CheckCircle, Shield, Clock, Wrench, Thermometer, Wind, Zap, VolumeX, Volume2 } from 'lucide-react'
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
      
      {/* Hero Section with Video */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Heavy Air & Heat, Inc.
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Commercial-Grade HVAC Solutions Since 1975
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+13613348023"
                  className="bg-white text-primary-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg text-lg inline-flex items-center justify-center"
                >
                  <Phone className="h-6 w-6 mr-3" />
                  24/7 Emergency: (361) 334-8023
                </a>
                <button className="bg-accent-600 hover:bg-accent-700 text-white font-bold py-3 px-6 rounded-lg text-lg">
                  Request Service
                </button>
              </div>
            </div>
            
            {/* Video Container with Fallback */}
<div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
  <video
    ref={videoRef}
    className="w-full h-full object-cover"
    playsInline
    muted={isMuted}
    loop
    autoPlay
    preload="metadata"
    poster="/images/video-poster.jpg" // Optional: Add a poster image
    onError={(e) => {
      console.error("Video failed to load:", e);
      // You could show an error message or fallback image here
    }}
  >
    <source src="/videos/hero-video.mp4" type="video/mp4" />
    <source src="/videos/hero-video.webm" type="video/webm" /> {/* Optional webm fallback */}
    Your browser does not support the video tag.
    {/* Fallback image if video fails */}
    <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
      <p className="text-white text-lg">Video failed to load. Please check the file.</p>
    </div>
  </video>
  
  {/* Loading indicator */}
  {!videoRef.current?.readyState && (
    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
      <div className="text-white">Loading video...</div>
    </div>
  )}
  
  {/* Mute/Unmute Button */}
  <button
    onClick={toggleMute}
    className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full flex items-center gap-2"
    aria-label={isMuted ? "Unmute video" : "Mute video"}
  >
    {isMuted ? '🔇 Unmute' : '🔊 Mute'}
  </button>
  
  {/* Sound Status Indicator */}
  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
    {isMuted ? 'Sound Off - Click to Enable' : 'Sound On'}
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
