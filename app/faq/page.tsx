'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Home } from 'lucide-react';
import Link from 'next/link';

const faqData = [
  // ... keep your existing faqData array here
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back to Home Link */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
  <div className="container mx-auto px-4 py-3">
    <div className="flex justify-between items-center">
      <Link 
        href="/" 
        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
      >
        <Home className="h-5 w-5 mr-2" />
        <span className="font-semibold hidden sm:inline">Back to Home</span>
        <span className="font-semibold sm:hidden">Home</span>
      </Link>
      
      <a 
        href="tel:3613348023" 
        className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
      >
        <span className="hidden sm:inline">Emergency: </span>(361) 334-8023
      </a>
    </div>
  </div>
</header>

      {/* Rest of your FAQ page content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our HVAC services, pricing, and maintenance plans.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-left"
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  <span className="ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="mt-2 p-6 bg-blue-50 rounded-lg">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <div className="bg-blue-600 text-white p-8 rounded-2xl max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="mb-6 text-blue-100">
                Can't find the answer you're looking for? Our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Contact Us
                </a>
                <a
                  href="tel:3613348023"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  Call Now: (361) 334-8023
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
