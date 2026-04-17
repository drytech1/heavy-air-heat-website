import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Heavy Air & Heat',
  description: 'Privacy Policy for Heavy Air & Heat, Inc. HVAC services in Corpus Christi, Texas.',
  openGraph: {
    title: 'Privacy Policy - Heavy Air & Heat',
    description: 'Privacy Policy for Heavy Air & Heat, Inc. HVAC services in Corpus Christi, Texas.',
    url: 'https://heavyairandheat.com/privacy',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Heavy Air & Heat Privacy Policy',
      },
    ],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            ← Back to Home
          </Link>
        </div>
      </header>

      <div className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Last updated: April 17, 2026</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Policy for Heavy Air & Heat, Inc.</h2>
              
              <p className="mb-6">At <strong>Heavy Air & Heat, Inc.</strong>, accessible from <strong>https://heavyairandheat.com</strong>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by <strong>Heavy Air & Heat, Inc.</strong> and how we use it.</p>

              <p className="mb-6">If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <a href="mailto:heavyair1@gmail.com" className="text-blue-600 hover:underline">heavyair1@gmail.com</a> or call us at <a href="tel:3613348023" className="text-blue-600 hover:underline">(361) 334-8023</a>.</p>

              <p className="mb-6">This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in <strong>Heavy Air & Heat, Inc.</strong>. This policy is not applicable to any information collected offline or via channels other than this website.</p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Consent</h3>
              <p className="mb-6">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h3>
              <p className="mb-4">The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
              <p className="mb-4">If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
              <p className="mb-6">When you request a service quote or schedule an appointment, we may ask for your contact information, including items such as name, address, email address, and telephone number.</p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h3>
              <p className="mb-4">We use the information we collect in various ways, including to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new services, features, and functionality</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to our services</li>
                <li>Send you service reminders and maintenance notifications</li>
                <li>Process service requests and schedule appointments</li>
                <li>Send you emails about our services and promotions</li>
                <li>Find and prevent fraud</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Log Files</h3>
              <p className="mb-4"><strong>Heavy Air & Heat, Inc.</strong> follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics.</p>
              <p className="mb-4">The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.</p>
              <p className="mb-6">The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.</p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Cookies and Web Beacons</h3>
              <p className="mb-4">Like any other website, <strong>Heavy Air & Heat, Inc.</strong> uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.</p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Google DoubleClick DART Cookie</h3>
              <p className="mb-6">Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to <strong>heavyairandheat.com</strong> and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://policies.google.com/technologies/ads</a></p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Advertising Partners Privacy Policies</h3>
              <p className="mb-4">You may consult this list to find the Privacy Policy for each of the advertising partners of <strong>Heavy Air & Heat, Inc.</strong>.</p>
              <p className="mb-4">Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on <strong>heavyairandheat.com</strong>, which are sent directly to users&apos; browser. They automatically receive your IP address when this occurs.</p>
              <p className="mb-6">Note that <strong>Heavy Air & Heat, Inc.</strong> has no access to or control over these cookies that are used by third-party advertisers.</p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Third Party Privacy Policies</h3>
              <p className="mb-6"><strong>Heavy Air & Heat, Inc.&apos;s</strong> Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">CCPA Privacy Rights (Do Not Sell My Personal Information)</h3>
              <p className="mb-4">Under the CCPA, among other rights, California consumers have the right to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Request that a business that collects a consumer&apos;s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
                <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
                <li>Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s personal data.</li>
              </ul>
              <p className="mb-6">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">GDPR Data Protection Rights</h3>
              <p className="mb-4">We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
                <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
                <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
                <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
                <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
              </ul>
              <p className="mb-6">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Children&apos;s Information</h3>
              <p className="mb-4">Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
              <p className="mb-6"><strong>Heavy Air & Heat, Inc.</strong> does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h3>
              <p className="mb-2">If you have any questions about this Privacy Policy, please contact us:</p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="mb-1"><strong>Heavy Air & Heat, Inc.</strong></p>
                <p className="mb-1"><strong>Address:</strong> 4109 Beard Drive, Corpus Christi, TX 78413</p>
                <p className="mb-1"><strong>Phone:</strong> <a href="tel:3613348023" className="text-blue-600 hover:underline">(361) 334-8023</a></p>
                <p className="mb-1"><strong>Email:</strong> <a href="mailto:heavyair1@gmail.com" className="text-blue-600 hover:underline">heavyair1@gmail.com</a></p>
                <p className="mb-1"><strong>Website:</strong> <a href="https://heavyairandheat.com" className="text-blue-600 hover:underline">https://heavyairandheat.com</a></p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
