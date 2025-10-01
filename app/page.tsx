"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, ChevronLeft, ChevronRight, Sparkles, Zap, Rocket, Brain, Code, Palette, X } from "lucide-react"
import { LineShadowText } from "@/components/line-shadow-text"
import { ShimmerButton } from "@/components/shimmer-button"
import { TermsOfServiceModal } from "@/components/terms-of-service-modal"
import { PrivacyPolicyModal } from "@/components/privacy-policy-modal"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

const slides = [
  {
    id: 1,
    icon: Sparkles,
    title: "Every Prompt You Need",
    subtitle: "Your Ultimate Prompt Marketplace",
    description:
      "Discover thousands of AI prompts for every use case. From creative writing to coding, business to design.",
    features: ["10,000+ Prompts", "All Categories", "Instant Access"],
  },
  {
    id: 2,
    icon: Brain,
    title: "AI-Powered Creativity",
    subtitle: "Unlock Your Potential",
    description: "Transform your ideas into reality with expertly crafted prompts for ChatGPT, Midjourney, and more.",
    features: ["Expert Crafted", "Tested & Verified", "Regular Updates"],
  },
  {
    id: 3,
    icon: Code,
    title: "Developer Prompts",
    subtitle: "Code Smarter, Not Harder",
    description: "Access specialized prompts for coding, debugging, architecture design, and technical documentation.",
    features: ["Code Generation", "Bug Fixing", "Documentation"],
  },
  {
    id: 4,
    icon: Palette,
    title: "Creative & Design",
    subtitle: "Bring Your Vision to Life",
    description: "Perfect prompts for image generation, graphic design, branding, and creative storytelling.",
    features: ["Image Prompts", "Design Systems", "Brand Identity"],
  },
  {
    id: 5,
    icon: Rocket,
    title: "Business & Marketing",
    subtitle: "Grow Your Business",
    description: "Professional prompts for marketing copy, business strategy, sales, and customer engagement.",
    features: ["Marketing Copy", "Strategy Plans", "Sales Scripts"],
  },
]

export default function HomePage() {
  const [showTrailer, setShowTrailer] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const [isAnimating, setIsAnimating] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [showPreRegisterPopup, setShowPreRegisterPopup] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)
  const [showDocsModal, setShowDocsModal] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  // Detect mobile and performance preferences
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    const checkReduceMotion = () => {
      setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }
    
    checkMobile()
    checkReduceMotion()
    
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-hide celebration notification after 5 seconds
  useEffect(() => {
    if (showCelebration) {
      const timer = setTimeout(() => {
        setShowCelebration(false)
      }, 5000)
      
      return () => clearTimeout(timer)
    }
  }, [showCelebration])

  // Auto-advance trailer slides
  useEffect(() => {
    if (showTrailer && !isAnimating) {
      const timer = setTimeout(() => {
        nextSlide()
      }, 4000) // Auto advance every 4 seconds
      
      return () => clearTimeout(timer)
    }
  }, [currentSlide, showTrailer, isAnimating])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection("right")
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection("left")
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setDirection(index > currentSlide ? "right" : "left")
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const handleExploreClick = () => {
    setShowMessage(true)
  }

  const handleSkipTrailer = () => {
    setShowTrailer(false)
  }

  // If trailer is showing, render trailer component
  if (showTrailer) {
    const current = slides[currentSlide]
    const Icon = current.icon

    return (
      <>
        <main className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center p-4">
          {/* Animated Background Rays */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-[200%] w-32 bg-gradient-to-r from-transparent via-[#f97316] to-transparent"
                  style={{
                    animation: `ray-flow ${8 + i * 2}s linear infinite`,
                    animationDelay: `${i * 1.5}s`,
                    top: "-50%",
                    left: `${i * 20}%`,
                    transform: 'rotate(20deg)',
                  }}
                />
              ))}
            </div>

            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-[#f97316]/10 via-transparent to-transparent opacity-50" />
          </div>

          {/* Skip Button */}
          <button
            onClick={handleSkipTrailer}
            className="absolute top-6 right-6 z-20 text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            Skip →
          </button>

          <div className="relative z-10 w-full max-w-md">
            <div className="relative overflow-hidden rounded-3xl border border-[#fb923c]/30 bg-black/80 backdrop-blur-xl shadow-2xl shadow-[#f97316]/20">
              {/* Slide Content */}
              <div className="px-6 py-12">
                <div
                  key={currentSlide}
                  className={cn(
                    "space-y-6 text-center",
                    direction === "right"
                      ? "animate-[slide-in-right_0.6s_ease-out]"
                      : "animate-[slide-in-left_0.6s_ease-out]",
                  )}
                >
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 animate-[pulse-glow_2s_ease-in-out_infinite] rounded-full bg-[#f97316]/30 blur-2xl" />
                      <div className="relative rounded-full bg-gradient-to-br from-[#f97316] to-[#ea580c] p-5">
                        <Icon className="h-12 w-12 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <div className="animate-[fade-in-up_0.6s_ease-out_0.1s_both]">
                    <p className="text-xs font-medium uppercase tracking-wider text-[#f97316]">{current.subtitle}</p>
                  </div>

                  {/* Title */}
                  <div className="animate-[fade-in-up_0.6s_ease-out_0.2s_both]">
                    <h1 className="text-balance text-3xl font-bold leading-tight text-white">{current.title}</h1>
                  </div>

                  {/* Description */}
                  <div className="animate-[fade-in-up_0.6s_ease-out_0.3s_both]">
                    <p className="text-pretty text-sm text-white/80">{current.description}</p>
                  </div>

                  {/* Features */}
                  <div className="animate-[fade-in-up_0.6s_ease-out_0.4s_both]">
                    <div className="flex flex-col gap-2">
                      {current.features.map((feature, index) => (
                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-full border border-[#fb923c]/30 bg-[#f97316]/10 px-4 py-2 backdrop-blur-sm transition-all hover:border-[#fb923c]/50 hover:bg-[#ea580c]/20"
                        >
                          <div className="absolute inset-0 translate-y-full bg-gradient-to-r from-[#f97316] to-[#ea580c] transition-transform group-hover:translate-y-0" />
                          <span className="relative z-10 text-xs font-medium text-white/70 group-hover:text-white">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="animate-[fade-in-up_0.6s_ease-out_0.5s_both] pt-2">
                    <Button
                      onClick={handleExploreClick}
                      size="lg"
                      className="group relative w-full overflow-hidden bg-gradient-to-r from-[#f97316] to-[#ea580c] px-6 py-5 text-base font-semibold text-white shadow-lg shadow-[#f97316]/50 transition-all hover:shadow-xl hover:shadow-[#f97316]/60 active:bg-[#c2410c]"
                    >
                      <span className="relative z-10">Explore Prompts</span>
                      <div className="absolute inset-0 translate-x-full bg-gradient-to-r from-[#ea580c] to-[#f97316] transition-transform group-hover:translate-x-0" />
                      <Zap className="relative z-10 ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[#fb923c]/20 px-6 py-4">
                <Button
                  onClick={prevSlide}
                  disabled={isAnimating}
                  size="icon"
                  variant="ghost"
                  className="h-10 w-10 rounded-full transition-all hover:bg-[#ea580c]/20 disabled:opacity-50"
                >
                  <ChevronLeft className="h-5 w-5 text-[#f97316]" />
                </Button>

                {/* Slide Indicators */}
                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      disabled={isAnimating}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300 disabled:cursor-not-allowed",
                        index === currentSlide
                          ? "w-8 bg-gradient-to-r from-[#f97316] to-[#ea580c]"
                          : "w-1.5 bg-white/30 hover:bg-white/50",
                      )}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  onClick={nextSlide}
                  disabled={isAnimating}
                  size="icon"
                  variant="ghost"
                  className="h-10 w-10 rounded-full transition-all hover:bg-[#ea580c]/20 disabled:opacity-50"
                >
                  <ChevronRight className="h-5 w-5 text-[#f97316]" />
                </Button>
              </div>

              <div className="absolute right-4 top-4">
                <div className="rounded-full border border-[#fb923c]/30 bg-black/50 px-3 py-1 backdrop-blur-sm">
                  <span className="text-xs font-medium text-[#f97316]">{String(currentSlide + 1).padStart(2, "0")}</span>
                  <span className="text-xs text-white/70"> / </span>
                  <span className="text-xs text-white/70">{String(slides.length).padStart(2, "0")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Message Modal */}
          {showMessage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
              <div className="relative mx-4 w-full max-w-sm animate-in zoom-in-95 duration-300">
                <div className="relative overflow-hidden rounded-2xl border border-[#fb923c]/40 bg-black/90 shadow-2xl shadow-[#f97316]/30">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/20 via-transparent to-[#ea580c]/20" />

                  <div className="relative p-8 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-gradient-to-br from-[#f97316] to-[#ea580c] p-4">
                        <Sparkles className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    <h2 className="mb-2 text-2xl font-bold text-white">Coming Soon!</h2>
                    <p className="text-sm text-white/80">
                      Prompts will be available soon. Stay tuned for thousands of amazing AI prompts!
                    </p>

                    <div className="flex gap-2 mt-6">
                      <Button
                        onClick={() => {
                          setShowMessage(false)
                          setShowTrailer(false)
                        }}
                        className="flex-1 bg-gradient-to-r from-[#f97316] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c2410c] text-white font-semibold"
                      >
                        Explore Website
                      </Button>
                      <Button
                        onClick={() => setShowMessage(false)}
                        variant="outline"
                        className="flex-1 border-[#fb923c]/30 text-white hover:bg-[#f97316]/10"
                      >
                        Continue Trailer
                      </Button>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowMessage(false)}
                    className="absolute right-4 top-4 rounded-full p-1 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Add custom styles for animations */}
        <style jsx>{`
          @keyframes ray-flow {
            0% { transform: translateX(-200px) rotate(20deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateX(100vw) rotate(20deg); opacity: 0; }
          }
          
          @keyframes pulse-glow {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
          
          @keyframes slide-in-right {
            0% { transform: translateX(100px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          
          @keyframes slide-in-left {
            0% { transform: translateX(-100px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          
          @keyframes fade-in-up {
            0% { transform: translateY(20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
        `}</style>
      </>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-black">
        {/* Flowing wave rays overlay - optimized for mobile performance */}
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            style={{ 
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
          >
            <defs>
              <radialGradient id="neonPulse1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                <stop offset="30%" stopColor="rgba(251,146,60,1)" />
                <stop offset="70%" stopColor="rgba(249,115,22,0.8)" />
                <stop offset="100%" stopColor="rgba(249,115,22,0)" />
              </radialGradient>
              <radialGradient id="neonPulse2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="25%" stopColor="rgba(251,146,60,0.9)" />
                <stop offset="60%" stopColor="rgba(234,88,12,0.7)" />
                <stop offset="100%" stopColor="rgba(234,88,12,0)" />
              </radialGradient>
              <radialGradient id="neonPulse3" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                <stop offset="35%" stopColor="rgba(251,146,60,1)" />
                <stop offset="75%" stopColor="rgba(234,88,12,0.6)" />
                <stop offset="100%" stopColor="rgba(234,88,12,0)" />
              </radialGradient>
              {/* Adding hero text background gradients and filters */}
              <radialGradient id="heroTextBg" cx="30%" cy="50%" r="70%">
                <stop offset="0%" stopColor="rgba(249,115,22,0.15)" />
                <stop offset="40%" stopColor="rgba(251,146,60,0.08)" />
                <stop offset="80%" stopColor="rgba(234,88,12,0.05)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </radialGradient>
              <filter id="heroTextBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="12" result="blur" />
                <feTurbulence baseFrequency="0.7" numOctaves="4" result="noise" />
                <feColorMatrix in="noise" type="saturate" values="0" result="monoNoise" />
                <feComponentTransfer in="monoNoise" result="alphaAdjustedNoise">
                  <feFuncA type="discrete" tableValues="0.03 0.06 0.09 0.12" />
                </feComponentTransfer>
                <feComposite in="blur" in2="alphaAdjustedNoise" operator="multiply" result="noisyBlur" />
                <feMerge>
                  <feMergeNode in="noisyBlur" />
                </feMerge>
              </filter>
              <linearGradient id="threadFade1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,0)" />
                <stop offset="15%" stopColor="rgba(249,115,22,0.8)" />
                <stop offset="85%" stopColor="rgba(249,115,22,0.8)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </linearGradient>
              <linearGradient id="threadFade2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,0)" />
                <stop offset="12%" stopColor="rgba(251,146,60,0.7)" />
                <stop offset="88%" stopColor="rgba(251,146,60,0.7)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </linearGradient>
              <linearGradient id="threadFade3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,0)" />
                <stop offset="18%" stopColor="rgba(234,88,12,0.8)" />
                <stop offset="82%" stopColor="rgba(234,88,12,0.8)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </linearGradient>
              <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <g>
              {/* Adding hero text background shape */}
              <ellipse
                cx="300"
                cy="350"
                rx="400"
                ry="200"
                fill="url(#heroTextBg)"
                filter="url(#heroTextBlur)"
                opacity="0.6"
              />
              <ellipse
                cx="350"
                cy="320"
                rx="500"
                ry="250"
                fill="url(#heroTextBg)"
                filter="url(#heroTextBlur)"
                opacity="0.4"
              />
              <ellipse
                cx="400"
                cy="300"
                rx="600"
                ry="300"
                fill="url(#heroTextBg)"
                filter="url(#heroTextBlur)"
                opacity="0.2"
              />

              {/* Mobile optimized threads - fewer but smoother */}
              {/* Primary thread 1 */}
              <path
                id="thread1"
                d="M50 720 Q300 550 650 520 Q900 480 1200 340"
                stroke="url(#threadFade1)"
                strokeWidth="1.2"
                fill="none"
                opacity="0.9"
                style={{ willChange: 'opacity' }}
              />
              <circle r="3" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="6s" repeatCount="indefinite" begin="0s">
                  <mpath href="#thread1" />
                </animateMotion>
              </circle>

              {/* Primary thread 2 */}
              <path
                id="thread2"
                d="M80 750 Q400 600 700 570 Q1000 520 1300 380"
                stroke="url(#threadFade2)"
                strokeWidth="1.0"
                fill="none"
                opacity="0.8"
                style={{ willChange: 'opacity' }}
              />
              <circle r="2.5" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="7s" repeatCount="indefinite" begin="1s">
                  <mpath href="#thread2" />
                </animateMotion>
              </circle>

              {/* Primary thread 3 */}
              <path
                id="thread3"
                d="M20 700 Q350 530 600 510 Q850 490 1200 320"
                stroke="url(#threadFade3)"
                strokeWidth="1.5"
                fill="none"
                opacity="0.85"
                style={{ willChange: 'opacity' }}
              />
              <circle r="3.5" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="5.5s" repeatCount="indefinite" begin="2s">
                  <mpath href="#thread3" />
                </animateMotion>
              </circle>

              {/* Secondary threads - hidden on mobile for better performance */}
              <g className="hidden sm:block">
                {/* Thread 4 */}
                <path
                  id="thread4"
                  d="M120 740 Q450 590 770 570 Q1070 530 1350 390"
                  stroke="url(#threadFade1)"
                  strokeWidth="0.8"
                  fill="none"
                  opacity="0.7"
                />
                <circle r="2" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                  <animateMotion dur="6.5s" repeatCount="indefinite" begin="0.5s">
                    <mpath href="#thread4" />
                  </animateMotion>
                </circle>

                {/* Thread 5 */}
                <path
                  id="thread5"
                  d="M60 725 Q380 550 680 530 Q980 490 1280 350"
                  stroke="url(#threadFade2)"
                  strokeWidth="1.2"
                  fill="none"
                  opacity="0.75"
                />
                <circle r="2.8" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
                  <animateMotion dur="5.8s" repeatCount="indefinite" begin="1.5s">
                    <mpath href="#thread5" />
                  </animateMotion>
                </circle>

                {/* Thread 6 */}
                <path
                  id="thread6"
                  d="M150 735 Q480 610 800 590 Q1080 560 1400 410"
                  stroke="url(#threadFade3)"
                  strokeWidth="0.9"
                  fill="none"
                  opacity="0.6"
                />
                <circle r="2.2" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
                  <animateMotion dur="7.2s" repeatCount="indefinite" begin="2.5s">
                    <mpath href="#thread6" />
                  </animateMotion>
                </circle>
              </g>

              {/* Desktop additional threads */}
              <g className="hidden lg:block">
                {/* Thread 7 */}
                <path
                  id="thread7"
                  d="M40 715 Q340 535 630 515 Q910 475 1250 335"
                  stroke="url(#threadFade1)"
                  strokeWidth="1.1"
                  fill="none"
                  opacity="0.8"
                />
                <circle r="2.6" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                  <animateMotion dur="6.8s" repeatCount="indefinite" begin="3s">
                    <mpath href="#thread7" />
                  </animateMotion>
                </circle>

                {/* Thread 8 */}
                <path
                  id="thread8"
                  d="M100 728 Q420 580 720 560 Q1000 520 1320 380"
                  stroke="url(#threadFade2)"
                  strokeWidth="0.7"
                  fill="none"
                  opacity="0.65"
                />
                <circle r="1.8" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
                  <animateMotion dur="5.3s" repeatCount="indefinite" begin="0.8s">
                    <mpath href="#thread8" />
                  </animateMotion>
                </circle>

                {/* Thread 9 */}
                <path
                  id="thread9"
                  d="M30 722 Q310 545 590 525 Q870 485 1180 345"
                  stroke="url(#threadFade3)"
                  strokeWidth="1.3"
                  fill="none"
                  opacity="0.75"
                />
                <circle r="3.2" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
                  <animateMotion dur="6.2s" repeatCount="indefinite" begin="1.8s">
                    <mpath href="#thread9" />
                  </animateMotion>
                </circle>

                {/* Thread 10 */}
                <path
                  id="thread10"
                  d="M90 732 Q390 575 680 555 Q960 515 1300 375"
                  stroke="url(#threadFade1)"
                  strokeWidth="0.6"
                  fill="none"
                  opacity="0.55"
                />
                <circle r="1.5" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                  <animateMotion dur="7.5s" repeatCount="indefinite" begin="2.8s">
                    <mpath href="#thread10" />
                  </animateMotion>
                </circle>
              </g>
            </g>
          </svg>
        </div>
      </div>

      <style jsx>{`
        /* Hardware accelerated animations for smooth performance */
        svg {
          transform: translateZ(0);
          will-change: transform;
        }
        
        circle {
          transform: translateZ(0);
          will-change: transform;
        }

        @media (max-width: 768px) {
          /* Reduce animation complexity on mobile */
          circle {
            filter: none;
          }
          
          /* Optimize SVG rendering on mobile */
          svg {
            image-rendering: optimizeSpeed;
            shape-rendering: optimizeSpeed;
          }
        }

        @keyframes flow {
          0%, 100% {
            opacity: 0.3;
            stroke-dasharray: 0 100;
            stroke-dashoffset: 0;
          }
          50% {
            opacity: 0.8;
            stroke-dasharray: 50 50;
            stroke-dashoffset: -25;
          }
        }

        /* Optimized pulse animations with transform3d for GPU acceleration */
        @keyframes pulse1 {
          0%, 100% { 
            opacity: 0.4; 
            transform: translate3d(0,0,0) scale3d(0.8,0.8,1); 
          }
          50% { 
            opacity: 1; 
            transform: translate3d(0,0,0) scale3d(1.2,1.2,1); 
          }
        }
        @keyframes pulse2 {
          0%, 100% { 
            opacity: 0.3; 
            transform: translate3d(0,0,0) scale3d(0.9,0.9,1); 
          }
          50% { 
            opacity: 1; 
            transform: translate3d(0,0,0) scale3d(1.1,1.1,1); 
          }
        }
        @keyframes pulse3 {
          0%, 100% { 
            opacity: 0.5; 
            transform: translate3d(0,0,0) scale3d(0.7,0.7,1); 
          }
          50% { 
            opacity: 1; 
            transform: translate3d(0,0,0) scale3d(1.3,1.3,1); 
          }
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          circle {
            animation: none !important;
          }
          
          animateMotion {
            animation: none !important;
          }
        }

        /* Custom scrollbar for docs modal */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(249, 115, 22, 0.5);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(249, 115, 22, 0.7);
        }
      `}</style>

      {/* Header Navigation */}
      <header className="relative z-10 flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 sm:py-4 lg:px-12">
        <div className="flex items-center space-x-0">
          <img src="/bg-remove.png" alt="Qwery Logo" className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24" />
          <span className="text-white font-bold text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-wider">
            QWERY
          </span>
        </div>

        <nav className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
          {/* Navigation items removed */}
        </nav>

        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
          <ShimmerButton 
            className="bg-orange-500 hover:bg-orange-600 text-white px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-1.5 md:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base font-medium shadow-lg transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25"
            onClick={() => setShowPreRegisterPopup(true)}
          >
            Pre-register
          </ShimmerButton>
          
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open('https://x.com/Qwerydotxyz', '_blank', 'noopener,noreferrer');
            }}
            className="group transition-all duration-75 ease-out transform hover:scale-110"
            aria-label="Follow us on Twitter"
          >
            <img 
              src="/twitter.png" 
              alt="Twitter" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 opacity-90 group-hover:opacity-100 transition-opacity duration-75 ease-out"
            />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-start justify-center min-h-[calc(100vh-120px)] px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl pt-8 sm:pt-4 md:-mt-8 lg:-mt-16 xl:-mt-24 pl-4 sm:pl-6 md:pl-12 lg:pl-20">

        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold leading-tight mb-4 sm:mb-6 text-balance">
          Prompts for every idea at{" "}
          <LineShadowText className="italic font-light" shadowColor="white">
            Place
          </LineShadowText>
        </h1>

        <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-6 sm:mb-8 max-w-3xl text-pretty leading-relaxed">
          Discover Creative Inspiration and Ideas
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          For Every Project and Vision.
        </p>

        <Button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg text-xs sm:text-sm md:text-base lg:text-lg font-semibold flex items-center gap-2 backdrop-blur-sm border border-orange-400/30 shadow-lg shadow-orange-500/25 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-700 ease-out hover:scale-110 hover:-translate-y-2">
          Get Started
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-2 group-hover:-rotate-12 transition-transform duration-700 ease-out" />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/0 via-white/15 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
        </Button>

      </main>

      {/* Pre-registration Popup Modal */}
      {showPreRegisterPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowPreRegisterPopup(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-black/90 backdrop-blur-lg border border-white/20 rounded-lg sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl w-full max-w-xs sm:max-w-md mx-auto">
            {/* Close Button */}
            <button
              onClick={() => setShowPreRegisterPopup(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-center pr-6 sm:pr-8">
              Join the Waitlist
            </h2>
            <p className="text-white/70 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 text-center">
              Be the first to know when we launch
            </p>
            
            <form className="space-y-3 sm:space-y-4" onSubmit={(e) => { 
              e.preventDefault(); 
              setShowPreRegisterPopup(false); 
              setShowCelebration(true);
            }}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
              >
                Pre-register Now
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <div className="fixed bottom-4 left-4 z-40">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <button
            type="button"
            onClick={() => {
              setShowPrivacyModal(true);
            }}
            className="text-xs text-white/70 hover:text-white transition-colors duration-200 hover:underline cursor-pointer"
          >
            Privacy Policy
          </button>
          <button
            type="button"
            onClick={() => {
              setShowTermsModal(true);
            }}
            className="text-xs text-white/70 hover:text-white transition-colors duration-200 hover:underline cursor-pointer"
          >
            Terms of Service
          </button>
          <button
            type="button"
            onClick={() => {
              setShowDocsModal(true);
            }}
            className="text-xs text-white/70 hover:text-white transition-colors duration-200 hover:underline cursor-pointer"
          >
            Docs
          </button>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="flex items-center space-x-2 text-right">
          <span className="text-xs text-white/60">Contact Us -</span>
          <button
            type="button"
            onClick={async (e) => {
              e.preventDefault()
              try {
                await navigator.clipboard.writeText('support@qwery.xyz')
                // You could add a toast notification here if needed
                console.log('Email copied to clipboard!')
              } catch (err) {
                console.error('Failed to copy email:', err)
                // Fallback: open mailto link
                window.location.href = 'mailto:support@qwery.xyz'
              }
            }}
            className="text-xs text-white/70 hover:text-white transition-colors duration-200 hover:underline cursor-pointer"
            title="Click to copy email address"
          >
            support@qwery.xyz
          </button>
        </div>
      </div>

      {/* Terms of Service Modal */}
      <TermsOfServiceModal 
        isOpen={showTermsModal} 
        onClose={() => setShowTermsModal(false)} 
      />

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal 
        isOpen={showPrivacyModal} 
        onClose={() => setShowPrivacyModal(false)} 
      />

      {/* Docs Modal */}
      {showDocsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowDocsModal(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-black/90 backdrop-blur-lg border border-white/20 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-white text-xl font-semibold">QWERY Documentation</h2>
              <button
                onClick={() => setShowDocsModal(false)}
                className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)] custom-scrollbar">
              <div className="prose prose-invert max-w-none">
                {/* Title */}
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                    📄 QWERY 
                    <span className="text-orange-500">–</span> 
                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                      AI powered prompts for every platform
                    </span>
                  </h1>
                </div>

                {/* About Section */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-orange-500 mb-4">About QWERY</h2>
                  <p className="text-white/80 leading-relaxed mb-4">
                    QWERY is more than just a prompt library — it is a <strong className="text-white">complete prompt universe</strong> designed to empower people from every background, industry, and skill level. At its core, QWERY exists to solve one of the biggest challenges in the modern AI era: the <strong className="text-white">struggle with poor-quality prompts</strong>. A great idea often gets lost in translation when users don't know how to express it to an AI system. QWERY bridges that gap by providing carefully structured, high-quality prompts that can instantly unlock <strong className="text-white">clarity, creativity, and productivity</strong>.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    With QWERY, users no longer need to waste hours experimenting with random prompts or facing the limitations of generic suggestions. Instead, they can <strong className="text-white">access a living ecosystem of curated, tested, and optimized prompts</strong> built for real-world outcomes. Whether someone is writing content, coding, building Web3 apps, designing visuals, researching data, or simply exploring AI for fun, QWERY makes the process <strong className="text-white">faster, smarter, and more inspiring</strong>.
                  </p>
                </section>

                {/* Who We Serve Section */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-orange-500 mb-4">Who We Serve</h2>
                  <p className="text-white/80 leading-relaxed mb-4">
                    QWERY is designed for <strong className="text-white">everyone</strong>. From the first-time AI user who wants to ask meaningful questions, to professionals who need advanced prompts for specific workflows, QWERY adapts to each unique journey. Our audience includes:
                  </p>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-500 mt-1">•</span>
                      <div>
                        <strong className="text-white">Creators & Artists</strong>: Writers, designers, and storytellers who want inspiration and fresh perspectives.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-500 mt-1">•</span>
                      <div>
                        <strong className="text-white">Developers & Builders</strong>: Both <strong className="text-white">Web2 programmers</strong> and <strong className="text-white">Web3 innovators</strong> who need prompts for coding, debugging, documentation, or smart contract development.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-500 mt-1">•</span>
                      <div>
                        <strong className="text-white">Entrepreneurs & Businesses</strong>: Startups, marketers, and enterprises that rely on prompts for campaigns, branding, market research, or product development.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-500 mt-1">•</span>
                      <div>
                        <strong className="text-white">Students & Learners</strong>: Anyone exploring AI to accelerate learning, improve study efficiency, or develop creative projects.
                      </div>
                    </li>
                  </ul>
                  <p className="text-white/80 leading-relaxed mt-4">
                    By covering such a broad spectrum of use cases, QWERY ensures that <strong className="text-white">no one is left behind</strong> in the age of artificial intelligence.
                  </p>
                </section>

                {/* Platform Coverage Section */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-orange-500 mb-4">Platform Coverage</h2>
                  <p className="text-white/80 leading-relaxed mb-4">
                    Unlike many platforms that focus on a single AI tool, QWERY is built to be <strong className="text-white">tool-agnostic and boundaryless</strong>. We provide prompts for multiple leading AI systems and productivity platforms, including but not limited to:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/80 mb-4">
                    <li className="flex items-center gap-2">
                      <span className="text-orange-500">•</span>
                      <strong className="text-white">ChatGPT (OpenAI)</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange-500">•</span>
                      <strong className="text-white">Gemini (Google DeepMind)</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange-500">•</span>
                      <strong className="text-white">Claude (Anthropic)</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange-500">•</span>
                      <strong className="text-white">Perplexity AI</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange-500">•</span>
                      <strong className="text-white">Vercel AI integrations</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange-500">•</span>
                      <span>And emerging platforms in both <strong className="text-white">AI research</strong> and <strong className="text-white">creative tech</strong></span>
                    </li>
                  </ul>
                  <p className="text-white/80 leading-relaxed">
                    This means that users are never restricted to one ecosystem. Whether they are coding with ChatGPT, researching with Perplexity, prototyping with Claude, or experimenting with Gemini, QWERY ensures that they always have <strong className="text-white">reliable, well-crafted prompts</strong> that actually work.
                  </p>
                </section>

                {/* Why QWERY is Different Section */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-orange-500 mb-4">Why QWERY is Different</h2>
                  <p className="text-white/80 leading-relaxed mb-4">
                    QWERY's strength lies in its <strong className="text-white">philosophy of inclusivity and practicality</strong>. While most prompt repositories are either too general or too narrow, QWERY has built a <strong className="text-white">multi-layered approach</strong>:
                  </p>
                  <ol className="space-y-4 text-white/80">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-500 font-bold">1.</span>
                      <div>
                        <strong className="text-white">Breadth & Depth Combined</strong> – We cover prompts across every domain (creative, technical, academic, business, entertainment) while also diving deep into niche areas like <strong className="text-white">blockchain dApps, DeFi projects, cybersecurity, and design thinking</strong>.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-500 font-bold">2.</span>
                      <div>
                        <strong className="text-white">Web2 + Web3 Synergy</strong> – Our platform equally supports traditional Web2 workflows and emerging Web3 projects, making QWERY a bridge between the present and the future of digital work.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-500 font-bold">3.</span>
                      <div>
                        <strong className="text-white">Curated Excellence</strong> – Every prompt is tested, refined, and optimized for clarity and usability. We focus on prompts that <strong className="text-white">produce actionable results</strong>, not just text.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-500 font-bold">4.</span>
                      <div>
                        <strong className="text-white">Future-Ready Vision</strong> – QWERY continuously evolves with the AI landscape, adding new categories, refining older prompts, and keeping pace with the rapidly growing world of generative intelligence.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-500 font-bold">5.</span>
                      <div>
                        <strong className="text-white">Community-Driven Evolution</strong> – We believe creativity is collaborative. QWERY allows ideas from diverse users to be shaped, refined, and shared, ensuring a <strong className="text-white">living, breathing ecosystem of knowledge</strong>.
                      </div>
                    </li>
                  </ol>
                </section>

                {/* Mission and Vision Section */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-orange-500 mb-4">Our Mission and Vision</h2>
                  <p className="text-white/80 leading-relaxed mb-4">
                    At QWERY, our mission is simple yet powerful:
                  </p>
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mb-4">
                    <p className="text-white font-medium">
                      ➡️ To provide <strong>every user, everywhere</strong>, with the right words to unlock the full potential of AI.
                    </p>
                  </div>
                  <p className="text-white/80 leading-relaxed mb-4">
                    We envision a future where <strong className="text-white">every project, business, and creative journey begins with inspiration and direction</strong>. By eliminating the frustration of poor prompts, QWERY empowers individuals and organizations to <strong className="text-white">move from idea to execution seamlessly</strong>.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Our vision is to become the <strong className="text-white">global hub of AI-driven creativity</strong>, where people across industries and geographies come together to discover, share, and refine the prompts that power tomorrow's ideas.
                  </p>
                </section>

                {/* Tagline Section */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-orange-500 mb-4">Tagline</h2>
                  <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-lg p-6 text-center">
                    <p className="text-xl text-white font-medium mb-2">✨</p>
                    <p className="text-lg text-white italic">
                      "Discover Creative Inspiration and Ideas — For Every Project and Vision."
                    </p>
                  </div>
                  <p className="text-white/80 leading-relaxed mt-4">
                    This tagline reflects our belief that creativity should have <strong className="text-white">no boundaries</strong>, and that inspiration should be accessible to <strong className="text-white">everyone, everywhere, at any time</strong>.
                  </p>
                </section>

                {/* Official Website Section */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-orange-500 mb-4">Official Website</h2>
                  <div className="bg-black/50 border border-white/10 rounded-lg p-4">
                    <p className="text-white font-mono text-lg">
                      🔗 <a href="https://qwery.xyz" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 transition-colors underline">qwery.xyz</a>
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Celebration Notification */}
      {showCelebration && (
        <div className="fixed bottom-20 right-6 z-50 animate-in slide-in-from-right-full duration-500 ease-out">
          <div className="relative bg-black/80 backdrop-blur-lg text-white p-4 rounded-xl shadow-2xl w-80 border border-white/10">
            {/* Subtle celebration particles */}
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <div className="absolute top-2 left-4 w-1 h-1 bg-green-400/60 rounded-full animate-pulse" style={{ animationDelay: '0ms', animationDuration: '2s' }}></div>
              <div className="absolute top-3 right-6 w-1 h-1 bg-emerald-400/60 rounded-full animate-pulse" style={{ animationDelay: '500ms', animationDuration: '2.5s' }}></div>
              <div className="absolute bottom-3 left-6 w-1 h-1 bg-green-300/60 rounded-full animate-pulse" style={{ animationDelay: '1000ms', animationDuration: '2.2s' }}></div>
            </div>
            
            {/* Close button */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setShowCelebration(false)
              }}
              className="absolute top-2 right-2 text-white/60 hover:text-white/90 transition-all duration-200 hover:scale-110 transform p-1 rounded-md hover:bg-white/10 z-20"
              aria-label="Close notification"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="relative z-10 pr-6">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-white">Registration Successful</h3>
              </div>
              <p className="text-white/70 text-xs leading-relaxed ml-9">
                Confirmation mail will be sent to you very soon. Thank you!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
