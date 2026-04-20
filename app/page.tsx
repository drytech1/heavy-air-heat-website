'use client';

import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Heavy Air & Heat, Inc.
        </h1>
        <p className="text-center text-gray-600">
          Professional HVAC Services in Corpus Christi
        </p>
      </div>

      <Footer />
    </div>
  );
}
