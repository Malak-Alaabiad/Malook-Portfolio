"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Brain, BarChart3, Cpu } from "lucide-react"
import { skills } from "@/data/portfolio-data"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Group skills into categories
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      skills: skills.filter((skill) => ["Python", "C++", "SQL"].includes(skill)),
    },
    {
      title: "Data Science",
      icon: <Database className="h-5 w-5" />,
      skills: skills.filter((skill) =>
        ["Data Cleaning", "Pandas", "NumPy", "Sklearn", "Matplotlib", "Seaborn", "Power BI"].includes(skill),
      ),
    },
    {
      title: "Artificial Intelligence",
      icon: <Brain className="h-5 w-5" />,
      skills: skills.filter((skill) =>
        ["Machine Learning", "Deep Learning", "TensorFlow", "Computer Vision", "NLP", "Transfer Learning"].includes(
          skill,
        ),
      ),
    },
    {
      title: "Problem Solving",
      icon: <BarChart3 className="h-5 w-5" />,
      skills: skills.filter((skill) => ["Problem Solving", "Algorithms"].includes(skill)),
    },
    {
      title: "Tools",
      icon: <Cpu className="h-5 w-5" />,
      skills: skills.filter((skill) => ["GitHub", "Microsoft Office"].includes(skill)),
    },
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full p-1.5 bg-primary/10 text-primary">{category.icon}</div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>{skill}</span>
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

