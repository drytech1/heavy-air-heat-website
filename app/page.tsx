import Hero from '@/components/sections/Hero'
import ServicesOverview from '@/components/sections/ServicesOverview'
// Import other sections as you add them

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      {/* Add other sections here:
          - ServiceArea
          - WhyChooseUs  
          - Testimonials
          - ContactForm
      */}
    </>
  )
}
