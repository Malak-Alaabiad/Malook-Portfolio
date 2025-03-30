"use client"

import { useEffect, useRef } from "react"

type Particle = {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const animationFrameId = useRef<number>()

  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined") return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles.current = []
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100)

      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: getRandomColor(),
        })
      }
    }

    const getRandomColor = () => {
      const colors = [
        "rgba(139, 92, 246, 0.5)", // purple
        "rgba(6, 182, 212, 0.5)", // cyan
        "rgba(16, 185, 129, 0.5)", // emerald
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.current.forEach((particle, index) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX
        }

        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Connect particles
        connectParticles(particle, index)
      })

      animationFrameId.current = requestAnimationFrame(animate)
    }

    const connectParticles = (particle: Particle, index: number) => {
      const distance = 150

      for (let i = index + 1; i < particles.current.length; i++) {
        const otherParticle = particles.current[i]
        const dx = particle.x - otherParticle.x
        const dy = particle.y - otherParticle.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < distance) {
          ctx.beginPath()
          ctx.strokeStyle = particle.color
          ctx.lineWidth = 0.5
          ctx.globalAlpha = 1 - dist / distance
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(otherParticle.x, otherParticle.y)
          ctx.stroke()
          ctx.globalAlpha = 1
        }
      }
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-30 dark:opacity-20 pointer-events-none" />
}

