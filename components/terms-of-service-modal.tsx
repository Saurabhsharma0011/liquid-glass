"use client"

import { useState } from "react"

interface TermsOfServiceModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsOfServiceModal({ isOpen, onClose }: TermsOfServiceModalProps) {
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

        {/* Terms Content */}
        <div className="pr-6 sm:pr-8">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">
            Terms and Conditions
          </h1>
          
          <p className="text-white/80 text-sm sm:text-base mb-6 text-center">
            <strong>Effective Date:</strong> September 15, 2025
          </p>

          <div className="text-white/90 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              Welcome to <strong>QWERY (QWERY.xyz)</strong>. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following <strong>Terms and Conditions of Use</strong>, which together with our <strong>Privacy Policy</strong> govern QWERY's relationship with you in relation to this website.
            </p>
            
            <p>
              The term <strong>'QWERY'</strong> or <strong>'us'</strong> or <strong>'we'</strong> refers to the owner and operator of the website. The term <strong>'you'</strong> refers to the user, visitor, or viewer of our website.
            </p>

            <div className="space-y-6 mt-6">
              <section>
                <h2 className="text-orange-400 text-lg font-semibold mb-2">1. General Use</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>The content of the pages of this website is for your general information, creative exploration, and educational use only.</li>
                  <li>QWERY reserves the right to update, change, or remove content without prior notice.</li>
                  <li>Unauthorized use of this website may give rise to a claim for damages and/or constitute a criminal offense.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-orange-400 text-lg font-semibold mb-2">2. Accuracy of Information</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Neither we nor third parties provide any warranty or guarantee regarding the <strong>accuracy, timeliness, performance, completeness, or suitability</strong> of the prompts, information, and materials available on this website.</li>
                  <li>You acknowledge that such information and materials may contain errors, and we expressly exclude liability for such inaccuracies to the fullest extent permitted by law.</li>
                  <li>Your use of any prompts, information, or materials on this website is entirely at your own risk, and QWERY will not be liable for the results of your usage.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-orange-400 text-lg font-semibold mb-2">3. User Responsibility</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>It is your responsibility to ensure that any prompts, products, services, or information available through this website meet your specific requirements.</li>
                  <li>You are solely responsible for how you apply prompts or skills obtained from QWERY.</li>
                  <li>QWERY is not responsible for any financial, professional, or personal outcomes resulting from your use of the platform.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-orange-400 text-lg font-semibold mb-2">4. Intellectual Property</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>This website contains material owned by or licensed to QWERY. This includes, but is not limited to, the <strong>design, layout, look, appearance, prompts, and graphics</strong>.</li>
                  <li>Reproduction is prohibited except in accordance with the copyright notice provided on this website.</li>
                  <li>All trademarks reproduced on this website, which are not the property of QWERY or licensed to QWERY, are acknowledged accordingly.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-orange-400 text-lg font-semibold mb-2">5. External Links</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>From time to time, this website may include links to other websites. These are provided for your convenience and to offer further information.</li>
                  <li>Such links do not signify that we endorse the linked website(s). QWERY has no responsibility for the content of the linked websites.</li>
                  <li>You may not create a link to this website from another website or document without prior written consent from QWERY.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-orange-400 text-lg font-semibold mb-2">6. Payment Terms</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Orders or payments (if applicable) will only commence upon receiving authorization/confirmation from the respective payment gateway or credit card provider.</li>
                  <li>All payments are <strong>non-refundable</strong>. By using our platform, you acknowledge and agree that QWERY does not provide refunds under any circumstances.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-orange-400 text-lg font-semibold mb-2">7. Educational Purpose Only</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>QWERY is designed for <strong>educational and creative purposes only</strong>.</li>
                  <li>Prompts, guides, and resources are intended to help users improve skills, develop ideas, and explore creativity.</li>
                  <li>QWERY does not guarantee any income, business success, job placement, or financial results from using our platform.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-orange-400 text-lg font-semibold mb-2">8. Disclaimer of Warranties</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>QWERY provides services and prompts <strong>"as is"</strong> without any express or implied warranty.</li>
                  <li>We do not guarantee uninterrupted service, error-free content, or compatibility with all third-party AI platforms (such as ChatGPT, Claude, Gemini, Perplexity, or others).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-orange-400 text-lg font-semibold mb-2">9. Governing Law</h2>
                <p>Your use of this website and any dispute arising out of such use is subject to the laws of <strong>India</strong> or other applicable regulatory authority.</p>
              </section>

              <section>
                <h2 className="text-orange-400 text-lg font-semibold mb-2">10. Acceptance of Terms</h2>
                <p>By continuing to use the QWERY website and services, you accept and agree to these Terms and Conditions in full.</p>
              </section>

              <section className="bg-white/5 p-4 rounded-lg">
                <h2 className="text-orange-400 text-lg font-semibold mb-2">Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at:</p>
                <p className="text-orange-300">📧 contact@qwery.xyz</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}