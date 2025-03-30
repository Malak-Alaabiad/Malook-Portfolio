"use client"

import { useState } from "react"
import { motion } from "framer-motion"

type RobotPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "middle-left" | "middle-right"
type RobotType = "robot1" | "robot2" | "robot3"

interface InteractiveRobotProps {
  position: RobotPosition
  type?: RobotType
}

export default function InteractiveRobot({ position, type = "robot1" }: InteractiveRobotProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [message, setMessage] = useState("")

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

  // Robot messages
  const messages = [
    "Hello! I'm an AI assistant!",
    "Welcome to Malak's portfolio!",
    "Check out Malak's AI projects!",
    "Malak specializes in Machine Learning!",
    "Need help navigating the site?",
    "Malak is an AI Engineer from Cairo!",
    "Interested in AI and Data Science?",
  ]

  // Show random message when clicked
  const handleClick = () => {
    setIsClicked(true)
    setMessage(messages[Math.floor(Math.random() * messages.length)])

    // Hide message after 3 seconds
    setTimeout(() => {
      setIsClicked(false)
      setMessage("")
    }, 3000)
  }

  // Robot SVG based on type
  const getRobotSvg = () => {
    switch (type) {
      case "robot2":
        return (
          <>
            <rect x="4" y="8" width="16" height="12" rx="2" ry="2" />
            <circle cx="12" cy="4" r="2" />
            <path d="M10 8V6" />
            <path d="M14 8V6" />
            <circle cx="8" cy="14" r="1" />
            <circle cx="16" cy="14" r="1" />
            <path d="M9 18l3 3 3-3" />
          </>
        )
      case "robot3":
        return (
          <>
            <rect x="3" y="11" width="18" height="10" rx="2" />
            <circle cx="12" cy="5" r="2" />
            <path d="M12 7v4" />
            <path d="M8 15h.01" />
            <path d="M16 15h.01" />
            <path d="M12 15v3" />
            <path d="M10 18h4" />
          </>
        )
      default: // robot1
        return (
          <>
            <rect x="3" y="11" width="18" height="10" rx="2" />
            <circle cx="12" cy="5" r="2" />
            <path d="M12 7v4" />
            <line x1="8" y1="16" x2="8" y2="16" />
            <line x1="16" y1="16" x2="16" y2="16" />
            <rect x="10" y="13" width="4" height="6" />
          </>
        )
    }
  }

  return (
    <div className={`fixed ${getPositionStyles()} z-40`}>
      <motion.div
        className="relative cursor-pointer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleClick}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 text-purple-600"
        >
          {getRobotSvg()}
        </svg>

        {/* Eyes animation */}
        <motion.div
          className="absolute top-[40%] left-[33%] w-[8%] h-[8%] bg-blue-500 rounded-full"
          animate={{
            scale: isHovered || isClicked ? 1.5 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute top-[40%] right-[33%] w-[8%] h-[8%] bg-blue-500 rounded-full"
          animate={{
            scale: isHovered || isClicked ? 1.5 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Energy beam */}
        {isHovered && (
          <motion.div
            className="absolute bottom-[-20%] left-[45%] w-[10%] h-[20%] bg-purple-500/50 rounded-full blur-sm"
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

        {/* Message bubble */}
        {isClicked && (
          <motion.div
            className="absolute top-[-60px] left-[-20px] bg-blue-900 text-white p-3 rounded-lg text-sm w-[200px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {message}
            <div className="absolute bottom-[-8px] left-[30px] w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-blue-900 border-r-[8px] border-r-transparent"></div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

