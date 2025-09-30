"use client"

import { useState } from "react"

interface PrivacyPolicyModalProps {
  isOpen: boolean
  onClose: () => void
}

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-black/90 backdrop-blur-lg border border-white/20 rounded-lg sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl w-full max-w-4xl mx-auto max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/60 hover:text-white transition-colors z-10"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Privacy Policy Content */}
        <div className="pr-6 sm:pr-8">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">
            Privacy Policy
          </h1>
          
          <p className="text-white/80 text-sm sm:text-base mb-6 text-center">
            <strong>Effective Date:</strong> September 30, 2025
          </p>

          <div className="text-white/90 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>
            
            <p>
              We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
            </p>

            <div className="space-y-6 mt-6">
              <section>
                <h2 className="text-orange-400 text-lg font-semibold mb-2">Interpretation and Definitions</h2>
                
                <h3 className="text-orange-300 text-base font-semibold mb-2 mt-4">Interpretation</h3>
                <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                
                <h3 className="text-orange-300 text-base font-semibold mb-2 mt-4">Definitions</h3>
                <p className="mb-2">For the purposes of this Privacy Policy:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                  <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to <strong>QWERY</strong>, accessible from <strong>QWERY.xyz</strong>.</li>
                  <li><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for election of directors or other managing authority.</li>
                  <li><strong>Account</strong> means a unique account created for You to access Our Service or parts of Our Service.</li>
                  <li><strong>Website</strong> refers to QWERY, accessible from <a href="https://QWERY.xyz" className="text-orange-300 hover:text-orange-200 underline">https://QWERY.xyz</a>.</li>
                  <li><strong>Service</strong> refers to the Website and the prompt discovery platform provided by QWERY.</li>
                  <li><strong>Country</strong> refers to: India.</li>
                  <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, provide the Service on Our behalf, perform services related to the Service, or assist the Company in analyzing how the Service is used.</li>
                  <li><strong>Third-party Social Media Service</strong> refers to any website or social network through which a User can log in or create an account to use the Service.</li>
                  <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                  <li><strong>Cookies</strong> are small files placed on Your device by a website, containing details of Your browsing history on that website, among other uses.</li>
                  <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-orange-400 text-lg font-semibold mb-2">Collecting and Using Your Personal Data</h2>
                
                <h3 className="text-orange-300 text-base font-semibold mb-2 mt-4">Types of Data Collected</h3>
                
                <h4 className="text-white font-medium mb-2 mt-3">Personal Data</h4>
                <p className="mb-2">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Account username or login credentials (if applicable)</li>
                  <li>Usage Data</li>
                </ul>

                <h4 className="text-white font-medium mb-2 mt-3">Usage Data</h4>
                <p className="mb-2">Usage Data is collected automatically when using the Service. Usage Data may include information such as:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Your Device's Internet Protocol (IP) address</li>
                  <li>Browser type and version</li>
                  <li>Pages of Our Service that You visit</li>
                  <li>Time and date of Your visit</li>
                  <li>Time spent on those pages</li>
                  <li>Unique device identifiers and diagnostic data</li>
                </ul>

                <p className="mt-3">When You access the Service via a mobile device, We may collect additional details such as:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Type of mobile device used</li>
                  <li>Mobile operating system</li>
                  <li>Unique mobile device ID</li>
                  <li>Mobile Internet browser type</li>
                  <li>IP address of the mobile device</li>
                </ul>

                <p className="mt-3">We may also collect information automatically transmitted by Your browser or device when visiting Our Service.</p>
              </section>

              <section>
                <h2 className="text-orange-400 text-lg font-semibold mb-2">Tracking Technologies and Cookies</h2>
                <p className="mb-3">We use Cookies and similar tracking technologies to monitor activity on Our Service and store certain information. Technologies used include beacons, tags, and scripts to collect and track data to improve and analyze Our Service.</p>
                
                <p className="mb-3">You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, some parts of our Service may not function properly.</p>
                
                <p className="mb-2"><strong>Types of Cookies We Use:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Necessary / Essential Cookies</strong>: Enable core functionality, such as authentication and account access.</li>
                  <li><strong>Cookies Policy / Notice Acceptance Cookies</strong>: Record Your acceptance of cookie use.</li>
                  <li><strong>Functionality Cookies</strong>: Store preferences like login details or language settings.</li>
                  <li><strong>Analytics Cookies</strong>: Help Us understand user interactions and improve performance.</li>
                </ul>
                
                <p className="mt-3">For more information, please see Our Cookies Policy.</p>
              </section>

              <section>
                <h2 className="text-orange-400 text-lg font-semibold mb-2">Use of Your Personal Data</h2>
                <p className="mb-2">The Company may use Personal Data for the following purposes:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>To provide and maintain Our Service</strong>, including monitoring usage.</li>
                  <li><strong>To manage Your Account</strong>, including access to functionalities as a registered user.</li>
                  <li><strong>For the performance of a contract</strong>, including any paid services or premium features.</li>
                  <li><strong>To contact You</strong>, via email, SMS, calls, or push notifications for updates, offers, or security notices.</li>
                  <li><strong>To provide You with news and special offers</strong> regarding prompts, services, and events, unless You opt out.</li>
                  <li><strong>To manage Your requests</strong>, such as support tickets or inquiries.</li>
                  <li><strong>For business development</strong>, including analytics, marketing, and service improvements.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-orange-400 text-lg font-semibold mb-2">Sharing Your Personal Data</h2>
                <p className="mb-2">We may share Your information in the following circumstances:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>With Service Providers</strong>: For hosting, analytics, payments, and customer support.</li>
                  <li><strong>For Business Transfers</strong>: During mergers, acquisitions, or asset sales.</li>
                  <li><strong>With Affiliates</strong>: Provided they honor this Privacy Policy.</li>
                  <li><strong>With Business Partners</strong>: To offer co-branded services or promotions.</li>
                  <li><strong>With Other Users</strong>: If You choose to share content publicly (e.g., contributed prompts, comments).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-orange-400 text-lg font-semibold mb-2">Data Retention</h2>
                <p>We retain Your Personal Data only as long as necessary to fulfill the purposes of this Privacy Policy. Usage Data may be retained for shorter periods unless needed for security, functionality improvements, or legal obligations.</p>
              </section>

              <section>
                <h2 className="text-orange-400 text-lg font-semibold mb-2">Data Transfers</h2>
                <p>Your data may be transferred to and stored outside Your state or country. By using QWERY, You consent to such transfers, provided appropriate safeguards are in place.</p>
              </section>

              <section>
                <h2 className="text-orange-400 text-lg font-semibold mb-2">Disclosure of Data</h2>
                <p className="mb-2">We may disclose Personal Data:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>To comply with legal obligations.</li>
                  <li>To protect QWERY's rights and property.</li>
                  <li>To investigate potential wrongdoing.</li>
                  <li>To protect user or public safety.</li>
                  <li>To defend against legal liability.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-orange-400 text-lg font-semibold mb-2">Data Security</h2>
                <p>We implement commercially acceptable measures to protect Your Personal Data. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
              </section>

              <section>
                <h2 className="text-orange-400 text-lg font-semibold mb-2">Children's Privacy</h2>
                <p>Our Service is not directed to anyone under 13. We do not knowingly collect personal data from children under 13. If we learn such data has been collected, we will delete it immediately.</p>
              </section>

              <section>
                <h2 className="text-orange-400 text-lg font-semibold mb-2">Links to Other Websites</h2>
                <p>Our Service may contain links to third-party sites. We are not responsible for the privacy practices of external websites and recommend reviewing their policies.</p>
              </section>

              <section>
                <h2 className="text-orange-400 text-lg font-semibold mb-2">Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy periodically. Updates will be posted on this page with the "Last updated" date.</p>
              </section>

              <section className="bg-white/5 p-4 rounded-lg">
                <h2 className="text-orange-400 text-lg font-semibold mb-2">Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <p className="text-orange-300">📧 contact@qwery.xyz</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
