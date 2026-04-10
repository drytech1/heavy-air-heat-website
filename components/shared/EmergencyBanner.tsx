import { AlertTriangle, Phone } from 'lucide-react'

export default function EmergencyBanner() {
  return (
    <div className="bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-2 flex items-center justify-center gap-3">
          <AlertTriangle className="h-5 w-5 flex-shrink-0" />
          <span className="font-semibold">24/7 EMERGENCY HVAC SERVICE:</span>
          <a 
            href="tel:+15551234567" 
            className="font-bold hover:underline flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
            (555) 123-4567
          </a>
          <span className="hidden sm:inline">• No overtime charges • Licensed & Insured</span>
        </div>
      </div>
    </div>
  )
}
