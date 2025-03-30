"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calendar } from "lucide-react"
import { courses } from "@/data/portfolio-data"

export default function Courses() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="courses" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-primary">Courses</span>
        </h2>

        <div className="space-y-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="rounded-full p-2 bg-primary/10 text-primary">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle>{course.title}</CardTitle>
                    <p className="font-medium text-muted-foreground">{course.organization}</p>
                    <div className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{course.date}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{course.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

