"use client"

import { useState } from "react"
import { X, Sparkles, Brain, Code, Palette, Rocket, Globe, Users, Target } from "lucide-react"

interface DocsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DocsModal({ isOpen, onClose }: DocsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-black/90 backdrop-blur-lg border border-white/20 rounded-lg sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl w-full max-w-5xl mx-auto max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/60 hover:text-white transition-colors z-10"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Docs Content */}
        <div className="pr-6 sm:pr-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="absolute inset-0 animate-pulse rounded-full bg-orange-500/30 blur-2xl" />
                <div className="relative rounded-full bg-gradient-to-br from-orange-500 to-orange-600 p-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              QWERY - AI Powered Prompts for Everything
            </h1>
            
            <p className="text-orange-400 text-sm sm:text-base font-medium">
              ✨ Discover Creative Inspiration and Ideas — For Every Project and Vision.
            </p>
          </div>

          <div className="text-white/90 text-sm sm:text-base leading-relaxed space-y-6">
            
            <section>
              <div className="flex items-center mb-3">
                <Brain className="h-5 w-5 text-orange-400 mr-2" />
                <h2 className="text-orange-400 text-lg font-semibold">About QWERY</h2>
              </div>
              <p className="mb-4">
                QWERY is more than just a prompt library — it is a <strong>complete prompt universe</strong> designed to empower people from every background, industry, and skill level. At its core, QWERY exists to solve one of the biggest challenges in the modern AI era: the <strong>struggle with poor-quality prompts</strong>. A great idea often gets lost in translation when users don't know how to express it to an AI system. QWERY bridges that gap by providing carefully structured, high-quality prompts that can instantly unlock <strong>clarity, creativity, and productivity</strong>.
              </p>
              <p>
                With QWERY, users no longer need to waste hours experimenting with random prompts or facing the limitations of generic suggestions. Instead, they can <strong>access a living ecosystem of curated, tested, and optimized prompts</strong> built for real-world outcomes. Whether someone is writing content, coding, building Web3 apps, designing visuals, researching data, or simply exploring AI for fun, QWERY makes the process <strong>faster, smarter, and more inspiring</strong>.
              </p>
            </section>

            <section>
              <div className="flex items-center mb-3">
                <Users className="h-5 w-5 text-orange-400 mr-2" />
                <h2 className="text-orange-400 text-lg font-semibold">Who We Serve</h2>
              </div>
              <p className="mb-3">
                QWERY is designed for <strong>everyone</strong>. From the first-time AI user who wants to ask meaningful questions, to professionals who need advanced prompts for specific workflows, QWERY adapts to each unique journey. Our audience includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Creators & Artists</strong>: Writers, designers, and storytellers who want inspiration and fresh perspectives.</li>
                <li><strong>Developers & Builders</strong>: Both <strong>Web2 programmers</strong> and <strong>Web3 innovators</strong> who need prompts for coding, debugging, documentation, or smart contract development.</li>
                <li><strong>Entrepreneurs & Businesses</strong>: Startups, marketers, and enterprises that rely on prompts for campaigns, branding, market research, or product development.</li>
                <li><strong>Students & Learners</strong>: Anyone exploring AI to accelerate learning, improve study efficiency, or develop creative projects.</li>
              </ul>
              <p className="mt-3">
                By covering such a broad spectrum of use cases, QWERY ensures that <strong>no one is left behind</strong> in the age of artificial intelligence.
              </p>
            </section>

            <section>
              <div className="flex items-center mb-3">
                <Globe className="h-5 w-5 text-orange-400 mr-2" />
                <h2 className="text-orange-400 text-lg font-semibold">Platform Coverage</h2>
              </div>
              <p className="mb-3">
                Unlike many platforms that focus on a single AI tool, QWERY is built to be <strong>tool-agnostic and boundaryless</strong>. We provide prompts for multiple leading AI systems and productivity platforms, including but not limited to:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                  <p className="text-orange-300 font-medium">• ChatGPT (OpenAI)</p>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                  <p className="text-orange-300 font-medium">• Gemini (Google DeepMind)</p>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                  <p className="text-orange-300 font-medium">• Claude (Anthropic)</p>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                  <p className="text-orange-300 font-medium">• Perplexity AI</p>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                  <p className="text-orange-300 font-medium">• Vercel AI integrations</p>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                  <p className="text-orange-300 font-medium">• Emerging platforms</p>
                </div>
              </div>
              <p>
                This means that users are never restricted to one ecosystem. Whether they are coding with ChatGPT, researching with Perplexity, prototyping with Claude, or experimenting with Gemini, QWERY ensures that they always have <strong>reliable, well-crafted prompts</strong> that actually work.
              </p>
            </section>

            <section>
              <div className="flex items-center mb-3">
                <Target className="h-5 w-5 text-orange-400 mr-2" />
                <h2 className="text-orange-400 text-lg font-semibold">Why QWERY is Different</h2>
              </div>
              <p className="mb-3">
                QWERY's strength lies in its <strong>philosophy of inclusivity and practicality</strong>. While most prompt repositories are either too general or too narrow, QWERY has built a <strong>multi-layered approach</strong>:
              </p>
              <div className="space-y-3">
                <div className="bg-white/5 border border-orange-500/20 rounded-lg p-4">
                  <h4 className="text-orange-300 font-semibold mb-2">1. Breadth & Depth Combined</h4>
                  <p className="text-sm">We cover prompts across every domain (creative, technical, academic, business, entertainment) while also diving deep into niche areas like blockchain dApps, DeFi projects, cybersecurity, and design thinking.</p>
                </div>
                <div className="bg-white/5 border border-orange-500/20 rounded-lg p-4">
                  <h4 className="text-orange-300 font-semibold mb-2">2. Web2 + Web3 Synergy</h4>
                  <p className="text-sm">Our platform equally supports traditional Web2 workflows and emerging Web3 projects, making QWERY a bridge between the present and the future of digital work.</p>
                </div>
                <div className="bg-white/5 border border-orange-500/20 rounded-lg p-4">
                  <h4 className="text-orange-300 font-semibold mb-2">3. Curated Excellence</h4>
                  <p className="text-sm">Every prompt is tested, refined, and optimized for clarity and usability. We focus on prompts that produce actionable results, not just text.</p>
                </div>
                <div className="bg-white/5 border border-orange-500/20 rounded-lg p-4">
                  <h4 className="text-orange-300 font-semibold mb-2">4. Future-Ready Vision</h4>
                  <p className="text-sm">QWERY continuously evolves with the AI landscape, adding new categories, refining older prompts, and keeping pace with the rapidly growing world of generative intelligence.</p>
                </div>
                <div className="bg-white/5 border border-orange-500/20 rounded-lg p-4">
                  <h4 className="text-orange-300 font-semibold mb-2">5. Community-Driven Evolution</h4>
                  <p className="text-sm">We believe creativity is collaborative. QWERY allows ideas from diverse users to be shaped, refined, and shared, ensuring a living, breathing ecosystem of knowledge.</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-3">
                <Rocket className="h-5 w-5 text-orange-400 mr-2" />
                <h2 className="text-orange-400 text-lg font-semibold">Our Mission and Vision</h2>
              </div>
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-lg p-4 mb-4">
                <p className="text-center text-white font-medium">
                  <strong>Our Mission:</strong><br />
                  ➡️ To provide <strong>every user, everywhere</strong>, with the right words to unlock the full potential of AI.
                </p>
              </div>
              <p className="mb-3">
                We envision a future where <strong>every project, business, and creative journey begins with inspiration and direction</strong>. By eliminating the frustration of poor prompts, QWERY empowers individuals and organizations to <strong>move from idea to execution seamlessly</strong>.
              </p>
              <p>
                Our vision is to become the <strong>global hub of AI-driven creativity</strong>, where people across industries and geographies come together to discover, share, and refine the prompts that power tomorrow's ideas.
              </p>
            </section>

            <section className="bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/10 border border-orange-500/20 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-orange-500/20 rounded-full p-3">
                  <Globe className="h-6 w-6 text-orange-400" />
                </div>
              </div>
              <h2 className="text-orange-400 text-lg font-semibold mb-2">Official Website</h2>
              <p className="text-2xl font-bold text-white">🔗 QWERY.xyz</p>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}
