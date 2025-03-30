"use client"

import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

type RobotPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "middle-left" | "middle-right"
type RobotColor = "teal" | "purple" | "blue" | "pink"

interface ModernRobotProps {
  position: RobotPosition
  color: RobotColor
  size?: "small" | "medium" | "large"
  delay?: number
  useImage?: boolean
}

export default function ModernRobot({
  position,
  color = "teal",
  size = "medium",
  delay = 0,
  useImage = false,
}: ModernRobotProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [message, setMessage] = useState("")
  const [showMessage, setShowMessage] = useState(false)
  const robotRef = useRef<HTMLDivElement>(null)
  const [position2, setPosition2] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)

  // Messages the robot can say
  const messages = [
    "Hello there! Welcome to Malak's portfolio!",
    "Check out Malak's amazing AI projects!",
    "Malak is an AI Engineer from Cairo University!",
    "Want to see some cool certificates? Scroll down!",
    "Malak is an expert in Machine Learning and Deep Learning!",
    "Did you know Malak won 1st place in an AI Challenge?",
    "Malak is a Kaggle Expert - top 2,000 worldwide!",
    "Interested in AI? Let's connect!",
  ]

  // Get random message
  const getRandomMessage = () => {
    return messages[Math.floor(Math.random() * messages.length)]
  }

  // Handle click to show message
  const handleClick = () => {
    setMessage(getRandomMessage())
    setShowMessage(true)

    // Hide message after 3 seconds
    setTimeout(() => {
      setShowMessage(false)
    }, 3000)
  }

  // Random movement
  useEffect(() => {
    const moveRobot = () => {
      if (robotRef.current && !isHovered) {
        setIsMoving(true)
        const parentRect = robotRef.current.parentElement?.getBoundingClientRect()
        if (parentRect) {
          const maxX = 50
          const maxY = 50
          const newX = Math.random() * maxX - maxX / 2
          const newY = Math.random() * maxY - maxY / 2
          setPosition2({ x: newX, y: newY })
        }
        setTimeout(() => setIsMoving(false), 2000)
      }
    }

    const interval = setInterval(moveRobot, 5000)
    return () => clearInterval(interval)
  }, [isHovered])

  // Position styles
  const getPositionStyles = () => {
    switch (position) {
      case "top-left":
        return "top-20 left-10"
      case "top-right":
        return "top-32 right-10"
      case "bottom-left":
        return "bottom-20 left-10"
      case "bottom-right":
        return "bottom-20 right-10"
      case "middle-left":
        return "top-1/2 -translate-y-1/2 left-10"
      case "middle-right":
        return "top-1/2 -translate-y-1/2 right-10"
      default:
        return "top-20 left-10"
    }
  }

  // Size styles
  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return "w-16 h-16"
      case "large":
        return "w-32 h-32"
      default: // medium
        return "w-24 h-24"
    }
  }

  // Color styles
  const getColorStyles = () => {
    switch (color) {
      case "teal":
        return {
          body: "bg-gradient-to-b from-teal-300 to-teal-500",
          eyes: "bg-cyan-400",
          accent: "bg-teal-300",
          glow: "bg-teal-400/30",
        }
      case "purple":
        return {
          body: "bg-gradient-to-b from-purple-300 to-purple-500",
          eyes: "bg-violet-400",
          accent: "bg-purple-300",
          glow: "bg-purple-400/30",
        }
      case "blue":
        return {
          body: "bg-gradient-to-b from-blue-300 to-blue-500",
          eyes: "bg-sky-400",
          accent: "bg-blue-300",
          glow: "bg-blue-400/30",
        }
      case "pink":
        return {
          body: "bg-gradient-to-b from-pink-300 to-pink-500",
          eyes: "bg-rose-400",
          accent: "bg-pink-300",
          glow: "bg-pink-400/30",
        }
      default:
        return {
          body: "bg-gradient-to-b from-teal-300 to-teal-500",
          eyes: "bg-cyan-400",
          accent: "bg-teal-300",
          glow: "bg-teal-400/30",
        }
    }
  }

  const colorStyles = getColorStyles()

  return (
    <motion.div
      ref={robotRef}
      className={`fixed ${getPositionStyles()} z-40 ${getSizeStyles()} cursor-pointer`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: position2.x,
        y: position2.y,
      }}
      transition={{
        opacity: { delay, duration: 0.5 },
        scale: { delay, duration: 0.5, type: "spring" },
        x: { duration: 2, ease: "easeInOut" },
        y: { duration: 2, ease: "easeInOut" },
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {useImage ? (
        // Use the Eilik robot image
        <motion.div
          className="relative w-full h-full"
          animate={{
            y: [0, -10, 0],
            rotate: isMoving ? [-5, 5] : 0,
          }}
          transition={{
            y: { duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
            rotate: { duration: 0.5, repeat: isMoving ? 4 : 0, repeatType: "reverse" },
          }}
        >
          <Image src="/images/robots/eilik-robot.png" alt="AI Robot" fill className="object-contain" />

          {/* Glow effect */}
          <motion.div
            className="absolute -inset-4 rounded-full blur-xl opacity-40"
            style={{
              backgroundColor:
                color === "teal"
                  ? "#2dd4bf"
                  : color === "purple"
                    ? "#a855f7"
                    : color === "blue"
                      ? "#3b82f6"
                      : "#ec4899",
            }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      ) : (
        // Custom robot design inspired by Eilik
        <motion.div
          className="relative w-full h-full"
          animate={{
            y: [0, -10, 0],
            rotate: isMoving ? [-5, 5] : 0,
          }}
          transition={{
            y: { duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
            rotate: { duration: 0.5, repeat: isMoving ? 4 : 0, repeatType: "reverse" },
          }}
        >
          {/* Robot body */}
          <div className="relative w-full h-full flex flex-col items-center">
            {/* Head */}
            <div className="w-[80%] h-[60%] bg-white rounded-full shadow-md relative overflow-hidden">
              {/* Face */}
              <div className="absolute w-[70%] h-[60%] bg-gray-900 rounded-full top-[20%] left-[15%]">
                {/* Eyes */}
                <motion.div
                  className={`absolute w-[30%] h-[30%] ${colorStyles.eyes} rounded-full top-[30%] left-[15%]`}
                  animate={{
                    opacity: isHovered ? [1, 0.7, 1] : 1,
                    scale: isHovered ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 1,
                    repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className={`absolute w-[30%] h-[30%] ${colorStyles.eyes} rounded-full top-[30%] right-[15%]`}
                  animate={{
                    opacity: isHovered ? [1, 0.7, 1] : 1,
                    scale: isHovered ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 1,
                    repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                    repeatType: "reverse",
                    delay: 0.2,
                  }}
                />
              </div>

              {/* Top accent */}
              <div className={`absolute w-[40%] h-[10%] ${colorStyles.accent} rounded-full top-[5%] left-[30%]`}></div>
            </div>

            {/* Body */}
            <div className={`w-[70%] h-[40%] ${colorStyles.body} rounded-b-full relative -mt-[5%]`}>
              {/* Arms */}
              <div
                className={`absolute w-[20%] h-[40%] ${colorStyles.accent} rounded-full -left-[10%] top-[20%]`}
              ></div>
              <div
                className={`absolute w-[20%] h-[40%] ${colorStyles.accent} rounded-full -right-[10%] top-[20%]`}
              ></div>
            </div>
          </div>

          {/* Glow effect */}
          <motion.div
            className={`absolute -inset-4 rounded-full blur-xl opacity-40 ${colorStyles.glow}`}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      )}

      {/* Message bubble */}
      {showMessage && (
        <motion.div
          className="absolute top-[-80px] left-[-50px] bg-gray-900/90 text-white p-3 rounded-lg text-sm w-[200px] z-50 border border-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          {message}
          <div className="absolute bottom-[-8px] left-[60px] w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-gray-900/90 border-r-[8px] border-r-transparent"></div>
        </motion.div>
      )}
    </motion.div>
  )
}

