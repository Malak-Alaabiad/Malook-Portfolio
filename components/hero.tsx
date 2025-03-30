"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import AnimatedRobot from "@/components/animated-robot"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [isProfileExpanded, setIsProfileExpanded] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const profileControls = useAnimation()

  useEffect(() => {
    setIsVisible(true)

    // Binary rain effect
    const canvas = canvasRef.current
    if (!canvas || typeof window === "undefined") return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)

    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100)
    }

    const binaryChars = "01"

    function draw() {
      if (!ctx) return

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#2dd4bf" // Teal color
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = binaryChars.charAt(Math.floor(Math.random() * binaryChars.length))
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)

    return () => clearInterval(interval)
  }, [])

  const handleProfileClick = async () => {
    setIsProfileExpanded(!isProfileExpanded)

    if (!isProfileExpanded) {
      await profileControls.start({
        scale: 1.2,
        transition: { duration: 0.5 },
      })
      setTimeout(() => {
        profileControls.start({
          scale: 1,
          transition: { duration: 0.5 },
        })
      }, 1500)
    }
  }

  // Engaging phrases that rotate
  const engagingPhrases = [
    "Turning Data into Intelligence",
    "Crafting AI Solutions",
    "Building the Future with ML",
    "Transforming Ideas into AI Reality",
    "Passionate AI Engineer & Problem Solver",
    "Where Creativity Meets Algorithms",
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Binary rain background */}
      <canvas ref={canvasRef} className="absolute inset-0 -z-10 opacity-20" />

      {/* Gradient background */}
      <div className="absolute inset-0 -z-5 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-background"></div>

      {/* Circuit pattern */}
      <div className="absolute inset-0 -z-5 opacity-10 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat"></div>

      {/* Animated robots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedRobot positionType="top-left" size="small" delay={0.5} />
        <AnimatedRobot positionType="top-right" size="medium" delay={1} />
        <AnimatedRobot positionType="bottom-left" size="small" delay={1.5} />
        <AnimatedRobot positionType="bottom-right" size="medium" delay={2} />
      </div>

      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-16 z-10">
        <motion.div
          className="flex-1 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              AI Engineer &
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">Developer</span>
          </h1>

          {/* Animated typing effect */}
          <motion.div
            className="h-6 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.p
              className="text-purple-300 dark:text-purple-300 light:text-purple-700"
              animate={{
                y: [0, -30, -60, -90, -120, -150, -180, 0],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 1,
              }}
            >
              {engagingPhrases.map((phrase, index) => (
                <span key={index} className="block h-6 mb-6">
                  {phrase}
                </span>
              ))}
            </motion.p>
          </motion.div>

          <p className="text-purple-200 dark:text-purple-200 light:text-purple-800 max-w-md mt-4">
            Passionate about creating intelligent solutions and pushing the boundaries of what's possible with
            artificial intelligence.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 transition-all duration-300"
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-purple-600 hover:bg-purple-900/20 transition-all duration-300"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Profile image with enhanced clarity and effects */}
          <motion.div
            className="relative w-80 h-80 md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-4 border-purple-500/50 shadow-xl cursor-pointer"
            onClick={handleProfileClick}
            animate={profileControls}
            whileHover={{ scale: 1.05 }}
          >
            {/* Enhanced image quality with priority loading */}
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sign1.jpg-zZ5pRM6pqRpx7xn3bjb83oXAtcZW5R.jpeg"
              alt="Malak Al-Aabiad"
              width={500}
              height={500}
              className="w-full h-full object-cover"
              priority
              quality={100}
              unoptimized
            />

            {/* Subtle overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-700/10 to-cyan-700/10 mix-blend-overlay"></div>

            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 border-4 border-transparent rounded-full"
              style={{ borderRadius: "100%" }}
              animate={{
                boxShadow: [
                  "0 0 0 4px rgba(168, 85, 247, 0.4)",
                  "0 0 0 4px rgba(6, 182, 212, 0.4)",
                  "0 0 0 4px rgba(168, 85, 247, 0.4)",
                ],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>

          {/* Glowing effect */}
          <motion.div
            className="absolute -z-10 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full bg-purple-500/20 blur-3xl"
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          {/* Orbiting elements */}
          <motion.div
            className="absolute w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-purple-500/30 rounded-full backdrop-blur-sm" />
          </motion.div>

          <motion.div
            className="absolute w-full h-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-500/30 rounded-full backdrop-blur-sm" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
        transition={{ duration: 0.5, delay: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <a
          href="#about"
          className="flex flex-col items-center text-purple-300 dark:text-purple-300 light:text-purple-700 hover:text-cyan-500 transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </motion.div>
    </section>
  )
}

