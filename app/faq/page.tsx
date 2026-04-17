'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What HVAC services do you provide?",
    answer: "We provide comprehensive HVAC services including installation, repair, maintenance, and emergency services for heating, ventilation, and air conditioning systems for both residential and commercial properties."
  },
  {
    question: "How quickly can you respond to emergency calls?",
    answer: "We offer 24/7 emergency service with response times typically within 2 hours for urgent heating or cooling issues in the Corpus Christi area."
  },
  {
    question: "Do you offer maintenance plans?",
    answer: "Yes, we offer affordable maintenance plans that include regular inspections, cleaning, and priority service to keep your HVAC system running efficiently year-round."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve Corpus Christi, Portland, Aransas Pass, Rockport, and surrounding areas in Texas."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we are fully licensed, bonded, and insured for your protection. All our technicians are certified and undergo regular training."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we offer flexible financing options to make HVAC services more affordable. Contact us to discuss available payment plans."
  },
  {
    question: "How often should I service my HVAC system?",
    answer: "We recommend bi-annual service - once in spring for cooling systems and once in fall for heating systems to ensure optimal performance."
  },
  {
    question: "What brands do you work with?",
    answer: "We work with all major HVAC brands including Carrier, Trane, Lennox, Rheem, and Goodman. We can service, repair, or install any brand."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
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
  );
}
