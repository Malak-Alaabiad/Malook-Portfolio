"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "AI Instructor",
      company: "MSP Tech Club - Helwan University",
      period: "September 2024 - Present",
      description: [
        "Delivered interactive and engaging sessions on Machine Learning fundamentals and advanced algorithms.",
        "Conducted over 8 sessions per month, tailoring content to suit diverse learning needs.",
        "Tracked and monitored student progress to ensure academic growth.",
        "Maintained clear communication regarding expectations, assignments, and grading criteria.",
        "Offered guidance and support to students, fostering a positive learning environment.",
        "Adapted teaching strategies to accommodate varied learning styles and needs.",
      ],
    },
    {
      title: "AI Summer Training",
      company: "Huawei ICT Academy Cairo University (HCIP-AI V2.0)",
      period: "July 2024",
      description: [
        "Deep Learning (Artificial Neural Network).",
        "Computer Vision (Feature Extraction, Convolution Neural Network, Object Detection, Object Segmentation).",
        "Speech processing (Speech Signal Analysis, Speech Feature Extraction, Speech Recognition, Text to Speech synthesis).",
        "NLP (Text Classification, Text Generation, Machine Translation Using RNN).",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="rounded-full p-2 bg-primary/10 text-primary">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle>{exp.title}</CardTitle>
                    <p className="font-medium text-muted-foreground">{exp.company}</p>
                    <div className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

