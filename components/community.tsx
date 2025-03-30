"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Linkedin, Code2, Award, Trophy } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Community() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Changed to true so it loads once and stays visible
    threshold: 0.1,
    rootMargin: "100px 0px", // Preload when getting closer
  })

  const profiles = [
    {
      title: "LinkedIn",
      description: "Connect with me professionally and stay updated with my career journey.",
      icon: <Linkedin className="h-10 w-10" />,
      link: "https://www.linkedin.com/in/malakal-aabiad",
      color: "bg-[#0077B5]/10 text-[#0077B5]",
      image: "/images/profiles/linkedin-profile.png",
    },
    {
      title: "GitHub",
      description: "Explore my code repositories and technical projects.",
      icon: <Github className="h-10 w-10" />,
      link: "https://github.com/Malak-Alaabiad",
      color: "bg-[#333]/10 text-[#333] dark:bg-[#fff]/20 dark:text-[#fff]",
      image: "/images/profiles/github-profile.png",
    },
    {
      title: "CodeForces",
      description: "Check out my problem-solving skills and competitive programming profile.",
      icon: <Code2 className="h-10 w-10" />,
      link: "https://codeforces.com/profile/MalakM.Al-Aabiad",
      color: "bg-[#1F8ACB]/10 text-[#1F8ACB]",
      image: "/images/profiles/codeforces-profile.png",
    },
  ]

  const achievements = [
    {
      title: "1st Place in AI Challenge",
      description:
        "Won 1st place in the AI Challenge at AI Catalist'24 event at Nile University for developing a Road Damage Detection model.",
      icon: <Trophy className="h-10 w-10" />,
      date: "August 2024",
      color: "bg-[#FFD700]/10 text-[#FFD700]",
    },
    {
      title: "Kaggle Expert",
      description:
        "Reached Expert status on Kaggle, ranking in the top 2,000 worldwide out of 50,000+ data scientists.",
      icon: <Award className="h-10 w-10" />,
      date: "2025",
      color: "bg-[#20BEFF]/10 text-[#20BEFF]",
    },
  ]

  const publications = [
    {
      title: "Neural Insights Blog",
      description:
        "My blog where I dive deep into the fundamental concepts of Data Science, Artificial Intelligence, and Machine Learning.",
      link: "https://lnkd.in/dP8iA-wJ",
      date: "February 2025",
    },
    {
      title: "DotPy Programming Hub",
      description:
        "A community I moderate on Facebook for AI enthusiasts, data science geeks, and tech lovers to come together, learn, and grow.",
      link: "https://lnkd.in/dstZuRCE",
      date: "January 2025",
    },
    {
      title: "30-Day Machine Learning Series",
      description:
        "Educational series on LinkedIn sharing insights on various machine learning algorithms and techniques.",
      link: "https://www.linkedin.com/in/malakal-aabiad/",
      date: "March 2025",
    },
  ]

  // Optimized animations with lower delay between items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced from default
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }, // Faster animation
    },
  }

  return (
    <section id="community" className="py-20 bg-blue-950/50 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 pb-2">
            Community & Achievements
          </h2>
          <p className="text-blue-300 dark:text-blue-300 light:text-blue-800 max-w-2xl mx-auto mt-4">
            Connecting with the tech community and sharing knowledge is an essential part of my journey in AI and data
            science.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-2 rounded-full"></div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {profiles.map((profile, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-blue-900/50 bg-blue-950/50 backdrop-blur-sm hover:shadow-lg hover:border-purple-700/50 transition-all duration-500">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className={`rounded-full p-3 ${profile.color}`}>{profile.icon}</div>
                  <div>
                    <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                      {profile.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <CardDescription className="mb-4 text-blue-300 dark:text-blue-300 light:text-blue-800">
                    {profile.description}
                  </CardDescription>
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <div className="relative w-full h-48">
                      <Image
                        src={profile.image || "/placeholder.svg"}
                        alt={profile.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-gradient-to-r from-blue-900/20 to-purple-900/20 hover:from-blue-900/30 hover:to-purple-900/30 border-blue-700/30 text-blue-300 dark:text-blue-300 light:text-blue-800"
                    asChild
                  >
                    <a href={profile.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Profile
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <h3 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Achievements
        </h3>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-blue-900/50 bg-blue-950/50 backdrop-blur-sm hover:shadow-lg hover:border-purple-700/50 transition-all duration-500">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className={`rounded-full p-3 ${achievement.color}`}>{achievement.icon}</div>
                  <div>
                    <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                      {achievement.title}
                    </CardTitle>
                    <div className="text-xs text-blue-400 dark:text-blue-400 light:text-blue-700 mt-1">
                      {achievement.date}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <CardDescription className="text-blue-300 dark:text-blue-300 light:text-blue-800">
                    {achievement.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <h3 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Publications
        </h3>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {publications.map((pub, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-blue-900/50 bg-blue-950/50 backdrop-blur-sm hover:shadow-lg hover:border-purple-700/50 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                    {pub.title}
                  </CardTitle>
                  <div className="text-xs text-blue-400 dark:text-blue-400 light:text-blue-700">{pub.date}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-blue-300 dark:text-blue-300 light:text-blue-800">
                    {pub.description}
                  </CardDescription>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 hover:from-blue-900/30 hover:to-purple-900/30 border-blue-700/30 text-blue-300 dark:text-blue-300 light:text-blue-800"
                    asChild
                  >
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

