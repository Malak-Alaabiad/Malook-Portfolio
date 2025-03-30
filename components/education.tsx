"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap } from "lucide-react"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-4xl font-bold text-purple-500 mb-12 ml-4">Education</h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="relative pl-8 border-l-2 border-purple-600"
        >
          <div className="absolute -left-5 top-0">
            <div className="bg-purple-900 p-3 rounded-full">
              <GraduationCap className="h-6 w-6 text-purple-400" />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white">Faculty of Computers and Artificial Intelligence</h3>
            <p className="text-gray-400">Cairo University</p>
            <p className="text-gray-500 mb-4">Sep 2023 - Present</p>

            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
              <h4 className="text-lg font-medium text-purple-400 mb-2">Relevant Coursework:</h4>
              <p className="text-gray-300">
                Programming-1, Object-Oriented Programming, Mathematics-1, Mathematics-2, Statistics-1, Statistics-2,
                Discrete Mathematics, Digital Logic Design.
              </p>
            </div>
          </div>

          {/* Add a small robot decoration */}
          <div className="absolute -left-12 top-32">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="w-16 h-16 text-purple-400"
            >
              <svg
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
                <path d="M8 15h.01" />
                <path d="M16 15h.01" />
                <path d="M12 15v3" />
                <path d="M10 18h4" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

