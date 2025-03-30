"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

type RobotProps = {
  className?: string
  size?: "sm" | "md" | "lg"
  color?: "primary" | "secondary" | "accent"
  floating?: boolean
  walking?: boolean
  waving?: boolean
}

export const Robot = ({
  className = "",
  size = "md",
  color = "primary",
  floating = false,
  walking = false,
  waving = false,
}: RobotProps) => {
  const sizes = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  }

  const colors = {
    primary: "text-purple-600 dark:text-purple-400",
    secondary: "text-cyan-600 dark:text-cyan-400",
    accent: "text-emerald-600 dark:text-emerald-400",
  }

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  const walkingAnimation = {
    x: [-20, 20, -20],
    rotate: [0, 5, 0, -5, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  const wavingAnimation = {
    rotateZ: [0, 20, 0, 20, 0],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  const animation = floating ? floatingAnimation : walking ? walkingAnimation : { scale: 1 }

  return (
    <motion.div
      className={`${sizes[size]} ${className}`}
      animate={animation}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${colors[color]}`}
      >
        {/* Robot Head */}
        <motion.rect
          x="60"
          y="30"
          width="80"
          height="70"
          rx="10"
          className="fill-current"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />

        {/* Robot Eyes */}
        <motion.circle
          cx="80"
          cy="60"
          r="10"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        />
        <motion.circle
          cx="120"
          cy="60"
          r="10"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        />

        {/* Robot Pupils */}
        <motion.circle
          cx="80"
          cy="60"
          r="5"
          fill="black"
          animate={{
            x: [0, 3, 0, -3, 0],
            y: [0, 3, 0, -3, 0],
          }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
        />
        <motion.circle
          cx="120"
          cy="60"
          r="5"
          fill="black"
          animate={{
            x: [0, 3, 0, -3, 0],
            y: [0, 3, 0, -3, 0],
          }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
        />

        {/* Robot Mouth */}
        <motion.rect
          x="75"
          y="80"
          width="50"
          height="10"
          rx="5"
          fill="white"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        />

        {/* Robot Antenna */}
        <motion.rect
          x="95"
          y="15"
          width="10"
          height="15"
          className="fill-current"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        />
        <motion.circle
          cx="100"
          cy="15"
          r="8"
          className="fill-current"
          animate={{
            opacity: [1, 0.5, 1],
          }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
        />

        {/* Robot Body */}
        <motion.rect
          x="70"
          y="100"
          width="60"
          height="50"
          rx="5"
          className="fill-current"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />

        {/* Robot Arms */}
        <motion.rect
          x="40"
          y="110"
          width="30"
          height="10"
          rx="5"
          className="fill-current"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />
        <motion.rect
          x="130"
          y="110"
          width="30"
          height="10"
          rx="5"
          className="fill-current"
          initial={{ x: -20, opacity: 0 }}
          animate={waving ? { ...wavingAnimation, opacity: 1, x: 0 } : { x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />

        {/* Robot Legs */}
        <motion.rect
          x="80"
          y="150"
          width="10"
          height="30"
          rx="5"
          className="fill-current"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        <motion.rect
          x="110"
          y="150"
          width="10"
          height="30"
          rx="5"
          className="fill-current"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        />

        {/* Robot Feet */}
        <motion.rect
          x="75"
          y="180"
          width="20"
          height="10"
          rx="5"
          className="fill-current"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        />
        <motion.rect
          x="105"
          y="180"
          width="20"
          height="10"
          rx="5"
          className="fill-current"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        />
      </svg>
    </motion.div>
  )
}

export const RobotGroup = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <Robot size="md" color="primary" floating className="absolute top-0 left-0" />
      <Robot size="sm" color="secondary" walking className="absolute bottom-0 right-0" />
      <Robot size="sm" color="accent" waving className="absolute top-1/2 left-1/4" />
    </div>
  )
}

export const FloatingRobots = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createRobot = () => {
      const robot = document.createElement("div")
      const size = Math.random() * 30 + 20
      const color = `rgba(${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 255)}, 0.7)`

      robot.style.position = "absolute"
      robot.style.width = `${size}px`
      robot.style.height = `${size}px`
      robot.style.borderRadius = "50%"
      robot.style.backgroundColor = color
      robot.style.boxShadow = `0 0 10px ${color}`
      robot.style.left = `${Math.random() * 100}%`
      robot.style.top = `${Math.random() * 100}%`
      robot.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`

      container.appendChild(robot)

      setTimeout(() => {
        robot.remove()
      }, 20000)
    }

    const interval = setInterval(createRobot, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      style={{
        background: "transparent",
      }}
    >
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(${Math.random() > 0.5 ? "" : "-"}${Math.random() * 200}px, ${Math.random() > 0.5 ? "" : "-"}${Math.random() * 200}px) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

export const RobotScene = () => {
  return (
    <div className="relative w-full h-80 md:h-96">
      <FloatingRobots />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div className="relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Robot size="lg" color="primary" waving />

          <motion.div
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-cyan-500 px-4 py-2 rounded-full text-white font-bold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Hello, I'm AI-Bot!
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-10"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <Robot size="sm" color="secondary" walking />
      </motion.div>

      <motion.div
        className="absolute top-10 right-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <Robot size="sm" color="accent" floating />
      </motion.div>
    </div>
  )
}

export const RobotLoader = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Robot size="md" color="primary" />
      </motion.div>
      <div className="ml-4">
        <motion.div
          className="h-3 w-3 rounded-full bg-purple-600 dark:bg-purple-400 inline-block mr-1"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0,
          }}
        />
        <motion.div
          className="h-3 w-3 rounded-full bg-cyan-600 dark:bg-cyan-400 inline-block mr-1"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        <motion.div
          className="h-3 w-3 rounded-full bg-emerald-600 dark:bg-emerald-400 inline-block"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.4,
          }}
        />
      </div>
    </div>
  )
}

