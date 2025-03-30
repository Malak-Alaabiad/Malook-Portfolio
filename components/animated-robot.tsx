"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

type RobotColor = "purple" | "cyan" | "green" | "pink" | "blue" | "orange"

interface AnimatedRobotProps {
  initialPosition?: { x: number; y: number }
  positionType?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right"
  size?: "small" | "medium" | "large"
  delay?: number
  changeColorInterval?: number
  moveInterval?: number
  moveRange?: number
}

export default function AnimatedRobot({
  initialPosition,
  positionType = "top-left",
  size = "medium",
  delay = 0,
  changeColorInterval = 5000,
  moveInterval = 10000,
  moveRange = 100,
}: AnimatedRobotProps) {
  // Size styles
  const sizeStyles = {
    small: "w-12 h-12",
    medium: "w-20 h-20",
    large: "w-28 h-28",
  }

  // Color styles
  const colorMap = {
    purple: "#a855f7",
    cyan: "#06b6d4",
    green: "#10b981",
    pink: "#ec4899",
    blue: "#3b82f6",
    orange: "#f97316",
  }

  // Calculate initial position based on positionType
  const getInitialPosition = () => {
    if (initialPosition) return initialPosition

    // Default positions when no specific coordinates are provided
    const defaultPositions = {
      "top-left": { x: 50, y: 100 },
      "top-right": { x: 500, y: 100 },
      "bottom-left": { x: 50, y: 500 },
      "bottom-right": { x: 500, y: 500 },
      "center-left": { x: 50, y: 300 },
      "center-right": { x: 500, y: 300 },
    }

    return defaultPositions[positionType]
  }

  const [position, setPosition] = useState(getInitialPosition)
  const [color, setColor] = useState<RobotColor>("purple")
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Update dimensions on client-side only
  useEffect(() => {
    if (typeof window === "undefined") return

    const updateDimensions = () => {
      if (containerRef.current?.parentElement) {
        const rect = containerRef.current.parentElement.getBoundingClientRect()
        setDimensions({ width: rect.width, height: rect.height })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Change color periodically
  useEffect(() => {
    const colors: RobotColor[] = ["purple", "cyan", "green", "pink", "blue", "orange"]
    const interval = setInterval(() => {
      const currentIndex = colors.indexOf(color)
      const nextIndex = (currentIndex + 1) % colors.length
      setColor(colors[nextIndex])
    }, changeColorInterval)

    return () => clearInterval(interval)
  }, [color, changeColorInterval])

  // Move robot periodically
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const interval = setInterval(() => {
      const newX = Math.max(0, Math.min(dimensions.width - 100, position.x + (Math.random() - 0.5) * moveRange))
      const newY = Math.max(0, Math.min(dimensions.height - 100, position.y + (Math.random() - 0.5) * moveRange))
      setPosition({ x: newX, y: newY })
    }, moveInterval)

    return () => clearInterval(interval)
  }, [position, dimensions, moveInterval, moveRange])

  return (
    <motion.div
      ref={containerRef}
      className={`absolute ${sizeStyles[size]} pointer-events-none z-10`}
      initial={{ opacity: 0, x: position.x, y: position.y }}
      animate={{
        opacity: 1,
        x: position.x,
        y: position.y,
        transition: {
          x: { duration: 2, ease: "easeInOut" },
          y: { duration: 2, ease: "easeInOut" },
        },
      }}
      transition={{ delay }}
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Robot Head */}
          <motion.rect
            x="30"
            y="15"
            width="40"
            height="35"
            rx="5"
            fill={colorMap[color]}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay + 0.2, duration: 0.5 }}
          />

          {/* Robot Eyes */}
          <motion.circle
            cx="40"
            cy="30"
            r="5"
            fill="white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: delay + 0.4, duration: 0.3 }}
          />
          <motion.circle
            cx="60"
            cy="30"
            r="5"
            fill="white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: delay + 0.5, duration: 0.3 }}
          />

          {/* Robot Pupils */}
          <motion.circle
            cx="40"
            cy="30"
            r="2.5"
            fill="black"
            animate={{
              x: [0, 1.5, 0, -1.5, 0],
              y: [0, 1.5, 0, -1.5, 0],
            }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
          />
          <motion.circle
            cx="60"
            cy="30"
            r="2.5"
            fill="black"
            animate={{
              x: [0, 1.5, 0, -1.5, 0],
              y: [0, 1.5, 0, -1.5, 0],
            }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
          />

          {/* Robot Mouth */}
          <motion.rect
            x="37.5"
            y="40"
            width="25"
            height="5"
            rx="2.5"
            fill="white"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: delay + 0.6, duration: 0.3 }}
          />

          {/* Robot Antenna */}
          <motion.rect
            x="47.5"
            y="7.5"
            width="5"
            height="7.5"
            fill={colorMap[color]}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: delay + 0.1, duration: 0.3 }}
          />
          <motion.circle
            cx="50"
            cy="7.5"
            r="4"
            fill={colorMap[color]}
            animate={{
              opacity: [1, 0.5, 1],
            }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
          />

          {/* Robot Body */}
          <motion.rect
            x="35"
            y="50"
            width="30"
            height="25"
            rx="2.5"
            fill={colorMap[color]}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay + 0.3, duration: 0.5 }}
          />

          {/* Robot Arms */}
          <motion.rect
            x="20"
            y="55"
            width="15"
            height="5"
            rx="2.5"
            fill={colorMap[color]}
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: delay + 0.4, duration: 0.5 }}
          />
          <motion.rect
            x="65"
            y="55"
            width="15"
            height="5"
            rx="2.5"
            fill={colorMap[color]}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: delay + 0.4, duration: 0.5 }}
          />

          {/* Robot Legs */}
          <motion.rect
            x="40"
            y="75"
            width="5"
            height="15"
            rx="2.5"
            fill={colorMap[color]}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay + 0.5, duration: 0.5 }}
          />
          <motion.rect
            x="55"
            y="75"
            width="5"
            height="15"
            rx="2.5"
            fill={colorMap[color]}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay + 0.6, duration: 0.5 }}
          />

          {/* Robot Feet */}
          <motion.rect
            x="37.5"
            y="90"
            width="10"
            height="5"
            rx="2.5"
            fill={colorMap[color]}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: delay + 0.7, duration: 0.3 }}
          />
          <motion.rect
            x="52.5"
            y="90"
            width="10"
            height="5"
            rx="2.5"
            fill={colorMap[color]}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: delay + 0.8, duration: 0.3 }}
          />
        </svg>
      </motion.div>
    </motion.div>
  )
}

