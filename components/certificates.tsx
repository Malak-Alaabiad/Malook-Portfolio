"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Certificates() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Changed to true so it doesn't disappear
    threshold: 0.1,
  })

  const certificates = [
    {
      title: "AI Engineer for Data Scientists Associate",
      issuer: "DataCamp",
      date: "Feb 2025",
      image: "/images/certificates/ai-engineer.png",
      link: "https://www.datacamp.com/certificate/AEDS0014371671056",
    },
    {
      title: "Linear Classifiers in Python",
      issuer: "DataCamp",
      date: "Feb 2025",
      image: "/images/certificates/linear-classifiers.png",
      link: "https://www.datacamp.com/statement-of-accomplishment/course/a8085890e8633629ccc746d185e0c59dcf35965d",
    },
    {
      title: "Machine Learning with Tree-Based Models in Python",
      issuer: "DataCamp",
      date: "Mar 2025",
      image: "/images/certificates/tree-based-models.png",
      link: "https://www.datacamp.com/statement-of-accomplishment/course/fab36cdc3fe7a91fbdb03931cb3a2a9f03746157",
    },
    {
      title: "Supervised Learning with scikit-learn",
      issuer: "DataCamp",
      date: "Jan 2025",
      image: "/images/certificates/supervised-learning.png",
      link: "https://www.datacamp.com/statement-of-accomplishment/course/b9e539208c633629ccc746d185e0c59dcf35965d",
    },
    {
      title: "Unsupervised Learning in Python",
      issuer: "DataCamp",
      date: "Feb 2025",
      image: "/images/certificates/unsupervised-learning.png",
      link: "https://www.datacamp.com/statement-of-accomplishment/course/38698057c633629ccc746d185e0c59dcf35965d",
    },
    {
      title: "Introduction to Natural Language Processing in Python",
      issuer: "DataCamp",
      date: "Jan 2025",
      image: "/images/certificates/nlp-python.png",
      link: "https://www.datacamp.com/statement-of-accomplishment/course/092228a66ee6f8c659cc0f1ddd9bf9321575c24d",
    },
    {
      title: "Extreme Gradient Boosting with XGBoost",
      issuer: "DataCamp",
      date: "Mar 2025",
      image: "/images/certificates/xgboost.png",
      link: "https://www.datacamp.com/statement-of-accomplishment/course/a4e36848fffbb4512540e364122870c792f73c1a",
    },
    {
      title: "Dimensionality Reduction in Python",
      issuer: "DataCamp",
      date: "Mar 2025",
      image: "/images/certificates/dimensionality-reduction.png",
      link: "https://www.datacamp.com/statement-of-accomplishment/course/a8950271a20edaa7eec053476abfb7ad5dbf7d73",
    },
    {
      title: "Cluster Analysis in Python",
      issuer: "DataCamp",
      date: "Mar 2025",
      image: "/images/certificates/cluster-analysis.png",
      link: "https://www.datacamp.com/statement-of-accomplishment/course/73c25177818a9d68f2016b93510f40b93e87b504",
    },
    {
      title: "SQL (Basic)",
      issuer: "HackerRank",
      date: "Mar 2025",
      image: "/images/certificates/sql-basic.png",
      link: "https://www.hackerrank.com/certificates/a8f60ce38c8c",
    },
    {
      title: "AI Agents Fundamentals",
      issuer: "Hugging Face",
      date: "Feb 2025",
      image: "/images/certificates/hugging-face.png",
      link: "https://huggingface.co/datasets/agents-course/certificates/resolve/main/certificates/MalakAlaabiad/2025-02-27.png",
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "LinkedIn Learning",
      date: "Mar 2025",
      image: "/images/certificates/linkedin-ai.png",
      link: "https://www.linkedin.com/learning/certificates/992a7ad93a4d6b5b5d4f929141aa4a39b3bd5f6d30ee4877ee712150e1437f19",
    },
    {
      title: "Master Microsoft Power BI",
      issuer: "Alison",
      date: "Mar 2025",
      image: "/images/certificates/alison-power-bi.png",
      link: "#",
    },
    {
      title: "Database Fundamentals",
      issuer: "Information Technology Institute (ITI)",
      date: "Mar 2025",
      image: "/images/certificates/database-fundamentals.png",
      link: "https://maharatech.gov.eg/mod/customcert/view.php?id=7655&downloadown=1",
    },
    {
      title: "AI and Machine Learning Instructor",
      issuer: "MSP Tech Club - Helwan University",
      date: "Dec 2024",
      image: "/images/certificates/msp-ai.png",
      link: "https://drive.google.com/file/d/1xauwpPNHUmUuO-rLe_qcU8yS4UoxZUmU/view",
    },
    {
      title: "Problem Solving (Basic)",
      issuer: "HackerRank",
      date: "Mar 2025",
      image: "/images/certificates/problem-solving.png",
      link: "https://www.hackerrank.com/certificates/c3c9b2b9e90c",
    },
    {
      title: "Python (Basic)",
      issuer: "HackerRank",
      date: "Mar 2025",
      image: "/images/certificates/python.png",
      link: "https://www.hackerrank.com/certificates/a6bd2347dd56",
    },
  ]image.png

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500 pb-2">
            Certificates
          </h2>
          <p className="text-teal-300 dark:text-teal-300 light:text-teal-700 max-w-2xl mx-auto mt-4">
            A showcase of my continuous learning journey and professional development in AI, data science, and
            programming.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full border-teal-900/50 bg-gradient-to-br from-teal-900/20 to-purple-900/20 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:border-teal-700/50 transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="bg-teal-900/80 backdrop-blur-sm text-teal-200 border-teal-700/50"
                    >
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Certificate
                      </a>
                    </Button>
                  </div>
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-teal-300 dark:text-teal-300 light:text-teal-700">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="flex items-center text-sm text-teal-400 dark:text-teal-400 light:text-teal-700">
                    <Award className="h-4 w-4 mr-1 text-purple-500" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="text-xs text-teal-500 dark:text-teal-500 light:text-teal-700 mt-1">{cert.date}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

