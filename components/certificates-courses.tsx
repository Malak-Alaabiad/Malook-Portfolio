"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink, BookOpen } from "lucide-react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnimatedRobot from "@/components/animated-robot"
import { certificates, courses } from "@/data/portfolio-data"

export default function CertificatesCourses() {
  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedRobot positionType="top-right" size="medium" delay={0.5} />
        <AnimatedRobot positionType="bottom-left" size="small" delay={1} />
      </div>

      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 pb-2">
            Certificates & Courses
          </h2>
          <p className="text-purple-300 dark:text-purple-300 light:text-purple-700 max-w-2xl mx-auto mt-4">
            A showcase of my continuous learning journey and professional development in AI, data science, and
            programming.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-2 rounded-full"></div>
        </div>

        <Tabs defaultValue="certificates" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="certificates" className="text-sm md:text-base">
              Certificates
            </TabsTrigger>
            <TabsTrigger value="courses" className="text-sm md:text-base">
              Courses
            </TabsTrigger>
          </TabsList>

          <TabsContent value="certificates" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="h-full border-purple-900/50 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:border-purple-700/50 transition-all duration-500">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="bg-purple-900/80 backdrop-blur-sm text-purple-200 border-purple-700/50"
                        >
                          <a href={cert.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Certificate
                          </a>
                        </Button>
                      </div>
                      <Image
                        src={cert.image.startsWith("http") ? cert.image : cert.image || "/placeholder.svg"}
                        alt={cert.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover"
                        unoptimized={cert.image.startsWith("http")}
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base text-purple-300 dark:text-purple-300 light:text-purple-700">
                        {cert.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="flex items-center text-sm text-purple-400 dark:text-purple-400 light:text-purple-700">
                        <Award className="h-4 w-4 mr-1 text-cyan-500" />
                        <span>{cert.organization}</span>
                      </div>
                      <div className="text-xs text-purple-500 dark:text-purple-500 light:text-purple-700 mt-1">
                        {cert.date}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-purple-900/50 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="rounded-full p-2 bg-purple-900/30 text-cyan-400">
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-lg text-purple-300">{course.title}</CardTitle>
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-purple-400">{course.organization}</p>
                        <div className="text-sm text-purple-500 flex items-center">
                          <span>{course.date}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-purple-300/80">{course.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

