"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface FullRobotProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right"
  color: "blue" | "purple" | "indigo" | "pink"
  size?: "small" | "medium" | "large"
  delay?: number
}

export default function FullRobot({ position, color, size = "medium", delay = 0 }: FullRobotProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [message, setMessage] = useState("")
  const [showMessage, setShowMessage] = useState(false)

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

  // Position styles
  const getPositionStyles = () => {
    switch (position) {
      case "top-left":
        return "top-20 left-4"
      case "top-right":
        return "top-20 right-4"
      case "bottom-left":
        return "bottom-20 left-4"
      case "bottom-right":
        return "bottom-20 right-4"
      case "center-left":
        return "top-1/2 -translate-y-1/2 left-4"
      case "center-right":
        return "top-1/2 -translate-y-1/2 right-4"
      default:
        return "top-20 left-4"
    }
  }

  // Size styles
  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return "w-16 h-16"
      case "large":
        return "w-24 h-24"
      default: // medium
        return "w-20 h-20"
    }
  }

  // Color styles
  const getColorStyles = () => {
    switch (color) {
      case "blue":
        return "text-blue-500"
      case "purple":
        return "text-purple-500"
      case "indigo":
        return "text-indigo-500"
      case "pink":
        return "text-pink-500"
      default:
        return "text-blue-500"
    }
  }

  // Get eye color
  const getEyeColor = () => {
    switch (color) {
      case "blue":
        return "bg-blue-300"
      case "purple":
        return "bg-purple-300"
      case "indigo":
        return "bg-indigo-300"
      case "pink":
        return "bg-pink-300"
      default:
        return "bg-blue-300"
    }
  }

  return (
    <motion.div
      className={`fixed ${getPositionStyles()} z-40 ${getSizeStyles()} cursor-pointer`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Robot body */}
      <motion.div
        className={`relative ${getColorStyles()}`}
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: delay,
        }}
      >
        {/* Robot head */}
        <div className="relative w-full h-2/5 rounded-t-lg border-2 border-current">
          {/* Eyes */}
          <div className="absolute top-1/4 left-1/4 w-1/5 h-1/5 rounded-full bg-current"></div>
          <div className="absolute top-1/4 right-1/4 w-1/5 h-1/5 rounded-full bg-current"></div>

          {/* Animated eyes */}
          <motion.div
            className={`absolute top-1/4 left-1/4 w-1/10 h-1/10 ${getEyeColor()} rounded-full`}
            animate={{
              scale: isHovered ? 1.5 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className={`absolute top-1/4 right-1/4 w-1/10 h-1/10 ${getEyeColor()} rounded-full`}
            animate={{
              scale: isHovered ? 1.5 : 1,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Mouth */}
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-1/3 h-1/10 rounded-full bg-current"
            animate={{
              width: isHovered ? "40%" : "33%",
            }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Robot body */}
        <div className="w-full h-2/5 border-2 border-current">
          {/* Body details */}
          <div className="absolute top-1/2 left-1/4 w-1/2 h-1/10 rounded-full bg-current opacity-50"></div>
          <div className="absolute top-[55%] left-1/4 w-1/2 h-1/10 rounded-full bg-current opacity-50"></div>
        </div>

        {/* Robot legs */}
        <div className="flex justify-between w-full h-1/5">
          <div className="w-1/3 h-full border-2 border-current"></div>
          <div className="w-1/3 h-full border-2 border-current"></div>
        </div>

        {/* Robot arms */}
        <div className="absolute top-2/5 left-[-20%] w-1/5 h-1/3 border-2 border-current"></div>
        <div className="absolute top-2/5 right-[-20%] w-1/5 h-1/3 border-2 border-current"></div>

        {/* Energy beam */}
        {isHovered && (
          <motion.div
            className={`absolute bottom-[-20%] left-[40%] w-1/5 h-1/5 ${getEyeColor()} rounded-full blur-sm`}
            animate={{
              height: ["20%", "30%", "20%"],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        )}
      </motion.div>

      {/* Message bubble */}
      {showMessage && (
        <motion.div
          className="absolute top-[-80px] left-[-50px] bg-blue-900 text-white p-3 rounded-lg text-sm w-[200px] z-50"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          {message}
          <div className="absolute bottom-[-8px] left-[60px] w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-blue-900 border-r-[8px] border-r-transparent"></div>
        </motion.div>
      )}
    </motion.div>
  )
}

