'use client';

import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Phone } from 'lucide-react';
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

      <Footer />
    </div>
  );
}
