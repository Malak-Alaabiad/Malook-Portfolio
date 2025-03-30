"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="space-y-6 text-muted-foreground dark:text-muted-foreground light:text-gray-800">
            <p className="text-lg leading-relaxed">
              Hello! I'm <span className="font-semibold text-primary">Malak Al-Aabiad</span>, a passionate AI Engineer
              and Data Scientist from Cairo, Egypt. Currently pursuing my studies at the Faculty of Computers and
              Artificial Intelligence at Cairo University (FCAI-CU), I'm on a mission to push the boundaries of what's
              possible with AI.
            </p>

            <p className="text-lg leading-relaxed">
              My journey in AI is driven by curiosity and a desire to create meaningful impact. I've developed a strong
              foundation in{" "}
              <span className="font-semibold text-blue-400 dark:text-blue-400 light:text-blue-700">
                Machine Learning
              </span>
              ,{" "}
              <span className="font-semibold text-purple-400 dark:text-purple-400 light:text-purple-700">
                Deep Learning
              </span>
              , and{" "}
              <span className="font-semibold text-indigo-400 dark:text-indigo-400 light:text-indigo-700">
                Computer Vision
              </span>
              , with practical experience in developing models that solve real-world problems.
            </p>

            <p className="text-lg leading-relaxed">
              As an <span className="font-semibold text-primary">AI Instructor at MSP Tech Club</span>, I share my
              knowledge and passion with others, helping to nurture the next generation of AI enthusiasts. My expertise
              extends to natural language processing (NLP), where I've worked on projects that bridge the gap between
              human language and machine understanding.
            </p>

            <p className="text-lg leading-relaxed">
              Beyond the classroom, I'm an active participant in the AI community, contributing to platforms like{" "}
              <span className="font-semibold text-blue-400 dark:text-blue-400 light:text-blue-700">Kaggle</span> where
              I've achieved Expert status, and solving algorithmic challenges on{" "}
              <span className="font-semibold text-red-400 dark:text-red-400 light:text-red-700">CodeForces</span>. I
              believe in the power of AI to transform industries and improve lives, and I'm excited to be part of this
              rapidly evolving field.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

