"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Robot } from "@/components/robot-animation"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hi there! I'm Malak's AI assistant. How can I help you today?",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI thinking
    setTimeout(() => {
      const response = generateResponse(input.trim())
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  // Enhanced response generation that can handle more general questions
  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase()

    // Check if the query is about Malak
    const isMalakQuery =
      lowerQuery.includes("malak") ||
      lowerQuery.includes("your") ||
      lowerQuery.includes("you") ||
      lowerQuery.includes("al-aabiad") ||
      lowerQuery.includes("portfolio owner")

    // General introduction if asked about Malak
    if (
      isMalakQuery &&
      (lowerQuery.includes("who") ||
        lowerQuery.includes("what") ||
        lowerQuery.includes("tell me about") ||
        lowerQuery.includes("introduce"))
    ) {
      return "Malak Al-Aabiad is an AI Engineer and Data Scientist from Cairo, Egypt. She's currently studying at the Faculty of Computers and Artificial Intelligence at Cairo University, with expertise in Machine Learning, Deep Learning, and Computer Vision. She's passionate about creating intelligent solutions and pushing the boundaries of what's possible with AI."
    }

    // Basic response logic based on keywords
    if (lowerQuery.includes("education") || lowerQuery.includes("study") || lowerQuery.includes("university")) {
      return "Malak is currently studying at the Faculty of Computers and Artificial Intelligence, Cairo University. Her coursework includes Programming, Object-Oriented Programming, Mathematics, Statistics, Discrete Mathematics, and Digital Logic Design."
    }

    if (lowerQuery.includes("experience") || lowerQuery.includes("work")) {
      return "Malak works as an AI Instructor at MSP Tech Club - Helwan University, where she delivers interactive sessions on Machine Learning fundamentals and advanced algorithms. She also completed AI Summer Training at Huawei ICT Academy."
    }

    if (lowerQuery.includes("project") || lowerQuery.includes("portfolio")) {
      return "Malak has worked on several AI and software projects including: Road Damage Detection (1st place winner at AI Catalist'24), Product Matching Using NLP, Face Emotion Classification, Skin Tone Classification, House Price Prediction, and My Own Chatbot. You can check out her GitHub for more details!"
    }

    if (lowerQuery.includes("skill") || lowerQuery.includes("technology") || lowerQuery.includes("tech stack")) {
      return "Malak's skills include Python, C++, Data Cleaning, Pandas, NumPy, Sklearn, Matplotlib, Seaborn, Machine Learning, Deep Learning, TensorFlow, Computer Vision, NLP, Transfer Learning, Problem Solving, GitHub, and Microsoft Office."
    }

    if (lowerQuery.includes("certificate") || lowerQuery.includes("certification")) {
      return "Malak holds several certifications including AI Engineer for Data Scientists Associate (DataCamp), Data Science and AI 75-Hours Diploma (DotPy Academy), Huawei Summer Training of Artificial Intelligence (HCIP-AI V2.0), and AI and Machine Learning Instructor Certificate (MSP Tech Club)."
    }

    if (lowerQuery.includes("contact") || lowerQuery.includes("email") || lowerQuery.includes("phone")) {
      return "You can contact Malak via email at malakkalaabiadd@gmail.com or by phone at (+20) 128 519 5363. You can also connect with her on LinkedIn, GitHub, or Facebook."
    }

    if (lowerQuery.includes("achievement") || lowerQuery.includes("award")) {
      return "Malak won 1st Place in the AI Challenge at AI Catalist'24 event at Nile University. She's also an Expert on Kaggle, ranking in the top 2,000 worldwide out of 50,000+ users."
    }

    // General questions
    if (lowerQuery.includes("hello") || lowerQuery.includes("hi") || lowerQuery.includes("hey")) {
      return "Hello! I'm Malak's AI assistant. How can I help you today?"
    }

    if (lowerQuery.includes("thank")) {
      return "You're welcome! If you have any more questions, feel free to ask."
    }

    if (lowerQuery.includes("how are you") || lowerQuery.includes("how're you")) {
      return "I'm doing well, thank you for asking! I'm here to help you learn more about Malak and her work. How can I assist you today?"
    }

    if (lowerQuery.includes("what can you do") || lowerQuery.includes("help me")) {
      return "I can tell you about Malak's education, skills, projects, experience, certifications, and achievements. I can also help you get in touch with her. What would you like to know?"
    }

    // AI and ML related questions
    if (lowerQuery.includes("what is ai") || lowerQuery.includes("artificial intelligence")) {
      return "Artificial Intelligence (AI) is the field of computer science focused on creating systems that can perform tasks that typically require human intelligence. These include learning, reasoning, problem-solving, perception, and language understanding. Malak specializes in AI, particularly in Machine Learning and Deep Learning applications."
    }

    if (lowerQuery.includes("machine learning") || lowerQuery.includes("ml")) {
      return "Machine Learning is a subset of AI that focuses on building systems that can learn from and make decisions based on data. Malak has expertise in various ML techniques including supervised learning, unsupervised learning, and reinforcement learning, which she applies in projects like her Road Damage Detection system."
    }

    if (lowerQuery.includes("deep learning") || lowerQuery.includes("neural network")) {
      return "Deep Learning is a specialized subset of Machine Learning that uses neural networks with many layers (hence 'deep') to analyze various factors of data. Malak has worked with deep learning in several projects, including her Face Emotion Classification system that uses Convolutional Neural Networks."
    }

    if (lowerQuery.includes("computer vision") || lowerQuery.includes("image recognition")) {
      return "Computer Vision is an AI field that enables computers to derive meaningful information from digital images and videos. Malak has applied computer vision techniques in projects like Road Damage Detection and Skin Tone Classification, using frameworks like TensorFlow and techniques like Convolutional Neural Networks."
    }

    if (lowerQuery.includes("nlp") || lowerQuery.includes("natural language processing")) {
      return "Natural Language Processing (NLP) is a field of AI focused on the interaction between computers and human language. Malak has experience with NLP techniques, which she applied in her Product Matching project to extract and compare key attributes from text descriptions."
    }

    // Default response for general questions
    return "I don't have specific information about that, but I'd be happy to tell you about Malak's education, skills, projects, or experience. What would you like to know?"
  }

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-cyan-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-96 bg-white dark:bg-slate-900 rounded-lg shadow-xl overflow-hidden flex flex-col border border-slate-200 dark:border-slate-700"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {/* Chat header */}
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-purple-600 to-cyan-500 text-white">
              <div className="flex items-center gap-2">
                <Robot size="sm" color="primary" className="text-white" />
                <div>
                  <h3 className="font-semibold">Malak's AI Assistant</h3>
                  <p className="text-xs opacity-80">Ask me anything!</p>
                </div>
              </div>
            </div>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn("flex gap-2 items-start", message.role === "user" ? "justify-end" : "justify-start")}
                >
                  {message.role === "assistant" && (
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                      <Bot size={16} className="text-purple-600 dark:text-purple-400" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg p-3",
                      message.role === "user"
                        ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white"
                        : "bg-slate-100 dark:bg-slate-800",
                    )}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                  {message.role === "user" && (
                    <div className="bg-slate-200 dark:bg-slate-700 p-2 rounded-full">
                      <User size={16} />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2 items-start">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                    <Bot size={16} className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3">
                    <div className="flex gap-1">
                      <span
                        className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></span>
                      <span
                        className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></span>
                      <span
                        className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Chat input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-slate-200 dark:border-slate-700 flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1"
              />
              <Button type="submit" size="icon" className="bg-gradient-to-r from-purple-600 to-cyan-500">
                <Send size={16} />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

