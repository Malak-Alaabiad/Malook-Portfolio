"use client"

import { motion } from "framer-motion"

interface FloatingRobotProps {
  className?: string
  delay?: number
}

export default function FloatingRobot({ className = "", delay = 0 }: FloatingRobotProps) {
  return (
    <motion.div
      className={`${className}`}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        delay: delay,
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
      >
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="16" x2="8" y2="16" />
        <line x1="16" y1="16" x2="16" y2="16" />
        <rect x="10" y="13" width="4" height="6" />
      </svg>

      {/* Animated eyes */}
      <motion.div
        className="absolute top-[40%] left-[33%] w-[8%] h-[8%] bg-background dark:bg-primary rounded-full"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: delay + 1,
        }}
      />
      <motion.div
        className="absolute top-[40%] right-[33%] w-[8%] h-[8%] bg-background dark:bg-primary rounded-full"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: delay + 1.5,
        }}
      />
    </motion.div>
  )
}

