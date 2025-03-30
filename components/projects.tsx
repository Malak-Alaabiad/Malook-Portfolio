"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code2, Layers, Bot, Brain, BarChart3, RouteIcon as Road, ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedRobot from "@/components/animated-robot"
import { projects } from "@/data/portfolio-data"

export default function Projects() {
  // Map project icons based on tags
  const getProjectIcon = (tags: string[]) => {
    if (tags.includes("Computer Vision")) return <Road className="h-5 w-5" />
    if (tags.includes("NLP")) return <Brain className="h-5 w-5" />
    if (tags.includes("Deep Learning")) return <Layers className="h-5 w-5" />
    if (tags.includes("Chatbot")) return <Bot className="h-5 w-5" />
    if (tags.includes("C++")) return <Code2 className="h-5 w-5" />
    return <BarChart3 className="h-5 w-5" />
  }

  // Get gradient colors for project headers
  const getGradientColors = (index: number) => {
    const gradients = [
      "from-purple-600 to-blue-500", // Purple to Blue
      "from-blue-600 to-cyan-500", // Blue to Cyan
      "from-cyan-600 to-teal-500", // Cyan to Teal
      "from-teal-600 to-green-500", // Teal to Green
      "from-purple-600 to-pink-500", // Purple to Pink
      "from-pink-600 to-red-500", // Pink to Red
    ]
    return gradients[index % gradients.length]
  }

  return (
    <section id="projects" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* AI-themed background elements */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)]"></div>
      </div>

      {/* Animated robots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedRobot positionType="top-left" size="small" delay={0.5} />
        <AnimatedRobot positionType="top-right" size="medium" delay={1} />
      </div>

      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 pb-2">
            Projects
          </h2>
          <p className="text-purple-300 dark:text-purple-300 light:text-purple-700 max-w-2xl mx-auto mt-4">
            Explore my portfolio of AI and software development projects, showcasing my skills in machine learning,
            computer vision, and more.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-slate-800 bg-slate-900 overflow-hidden hover:shadow-lg hover:border-purple-700/50 transition-all duration-500">
                {/* Gradient Header */}
                <div className={`bg-gradient-to-r ${getGradientColors(index)} p-4 flex items-center`}>
                  <div className="text-white font-bold flex items-center">
                    <span className="mr-2">&lt;&gt;</span>
                    {project.title}
                  </div>
                </div>

                <CardContent className="pt-4">
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 5).map((tag, i) => (
                      <Badge key={i} variant="outline" className="bg-slate-800 text-xs border-slate-700 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 5 && (
                      <Badge variant="outline" className="bg-slate-800 text-xs border-slate-700 text-gray-300">
                        +{project.tags.length - 5}
                      </Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2 border-t border-slate-800 pt-4">
                  {project.demoLink && project.demoLink !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-slate-800 hover:bg-slate-700 border-slate-700 text-gray-300"
                      asChild
                    >
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}

                  {project.githubLink && project.githubLink !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-slate-800 hover:bg-slate-700 border-slate-700 text-gray-300"
                      asChild
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

