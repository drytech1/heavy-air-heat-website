export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Heavy Air and Heat, Inc.
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Professional HVAC Services for Commercial & Residential
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">24/7 Emergency Service</h2>
            <a 
              href="tel:+15551234567" 
              className="text-3xl font-bold text-blue-700 hover:text-blue-800 block mb-3"
            >
              (555) 123-4567
            </a>
            <p className="text-gray-700">
              Licensed, bonded, and insured technicians ready to handle any HVAC emergency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Heating Services</h3>
              <p className="text-gray-600">Furnace repair, installation, maintenance</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Cooling Solutions</h3>
              <p className="text-gray-600">AC repair, installation, seasonal maintenance</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Emergency Repair</h3>
              <p className="text-gray-600">24/7 service for urgent HVAC issues</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
