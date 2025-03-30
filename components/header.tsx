"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)

      // Update active section based on scroll position
      const sections = ["home", "about", "education", "projects", "certificates", "community", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-md py-2" : "bg-slate-900/80 backdrop-blur-sm py-4",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            className="relative w-10 h-10 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* AI-themed "M" logo with improved design */}
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <rect x="4" y="4" width="32" height="32" rx="6" fill="url(#logoGradient)" fillOpacity="0.2" />
              <path
                d="M8 8 L8 32 L14 32 L14 20 L26 20 L26 32 L32 32 L32 8 L26 8 L26 14 L14 14 L14 8 Z"
                fill="url(#logoGradient)"
              />
              {/* Circuit-like details */}
              <circle cx="8" cy="8" r="1.5" fill="url(#logoGradient)" />
              <circle cx="32" cy="8" r="1.5" fill="url(#logoGradient)" />
              <circle cx="8" cy="32" r="1.5" fill="url(#logoGradient)" />
              <circle cx="32" cy="32" r="1.5" fill="url(#logoGradient)" />
              <line x1="8" y1="8" x2="14" y2="8" stroke="url(#logoGradient)" strokeWidth="1" />
              <line x1="32" y1="8" x2="26" y2="8" stroke="url(#logoGradient)" strokeWidth="1" />
              <line x1="8" y1="32" x2="14" y2="32" stroke="url(#logoGradient)" strokeWidth="1" />
              <line x1="32" y1="32" x2="26" y2="32" stroke="url(#logoGradient)" strokeWidth="1" />
            </svg>
          </motion.div>
          <motion.h1
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Malak Al-Aabiad
          </motion.h1>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {["Home", "About", "Education", "Projects", "Certificates", "Community", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeSection === item.toLowerCase() ? "text-primary" : "text-muted-foreground",
              )}
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="default"
            size="sm"
            className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600"
            asChild
          >
            <a
              href="https://drive.google.com/file/d/1fg4HKUD3Qt1WjRzZDt4ra7ipcPhDdIpy/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </motion.header>
  )
}

