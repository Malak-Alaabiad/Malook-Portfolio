"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, MapPin, Phone, Linkedin, Github, Facebook, CheckCircle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { motion, AnimatePresence } from "framer-motion"
import { Robot } from "@/components/robot-animation"

export default function Contact() {
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email using a server action
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to: "malakkalaabiadd@gmail.com",
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
          variant: "default",
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })

        // Reset success state after 5 seconds
        setTimeout(() => {
          setIsSuccess(false)
        }, 5000)
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 pb-2">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-slate-800 bg-slate-900/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                  Get In Touch
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Have a project in mind or want to discuss a collaboration? Feel free to reach out to me through the
                  form or my contact details.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AnimatePresence>
                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-4"
                    >
                      <div className="flex flex-col items-center text-center">
                        <CheckCircle className="h-12 w-12 text-green-500 mb-2" />
                        <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
                        <p className="text-slate-300">Thank you for reaching out. I'll get back to you soon.</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-slate-300">
                            Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-slate-300">
                            Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-500"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-slate-300">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="What is this regarding?"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-slate-300">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Your message here..."
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-500"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="h-full border-slate-800 bg-slate-900/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                  Contact Information
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Feel free to reach out through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="rounded-full p-2 bg-purple-900/30 text-purple-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-300">Email</h3>
                    <a
                      href="mailto:malakkalaabiadd@gmail.com"
                      className="text-sm text-slate-400 hover:text-purple-400 transition-colors"
                    >
                      malakkalaabiadd@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="rounded-full p-2 bg-purple-900/30 text-purple-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-300">Phone</h3>
                    <a
                      href="tel:+201285195363"
                      className="text-sm text-slate-400 hover:text-purple-400 transition-colors"
                    >
                      (+20) 128 519 5363
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="rounded-full p-2 bg-purple-900/30 text-purple-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-300">Location</h3>
                    <p className="text-sm text-slate-400">Giza, Egypt</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-sm font-medium text-slate-300 mb-3">Connect with me</h3>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      className="rounded-full border-slate-700 bg-slate-800/20 text-slate-400 hover:bg-slate-800/30 hover:text-slate-300"
                    >
                      <a
                        href="https://www.linkedin.com/in/malakal-aabiad"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      className="rounded-full border-slate-700 bg-slate-800/20 text-slate-400 hover:bg-slate-800/30 hover:text-slate-300"
                    >
                      <a
                        href="https://github.com/Malak-Alaabiad"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      className="rounded-full border-slate-700 bg-slate-800/20 text-slate-400 hover:bg-slate-800/30 hover:text-slate-300"
                    >
                      <a
                        href="https://facebook.com/malak.alaabiad"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Robot decoration */}
                <div className="mt-8 flex justify-center">
                  <Robot size="md" color="primary" waving />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

