'use client'

import { motion } from 'framer-motion'
import { Code, Book, Lightbulb } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const aboutSections = [
    {
      icon: <Code className="w-8 h-8 text-sky-400" />,
      title: "Technical Skills",
      content: "Proficient in Python, JavaScript, and C++. Experienced with React, Node.js, and TensorFlow. Passionate about AI, machine learning, and blockchain technologies.",
      skills: ['Python', 'JavaScript', 'C++', 'React.js', 'Node.js', 'TensorFlow', 'Git','Tailwind CSS', 'Next.js','C','HTML','CSS','Bootstrap','MongoDB','Express.js','MySQL','OpenCV','Data Structures','Algorithms'],
    },
    {
      icon: <Book className="w-8 h-8 text-sky-400" />,
      title: "Education",
      content: "Pursuing a Bachelor's degree in Computer Science & Engineering at National Institute of Technology Delhi. Relevant coursework:Object Oriented Programming, Data Structures, Algorithms, Machine Learning, Operating Systems, Computer Networks, Database Management Systems,Data Mining, Artificial Intelligence, Web Technologies",
      highlight: "GPA: 7.9/10.0"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-sky-400" />,
      title: "Interests & Goals",
      content: "Always fascinated to solve real-world problems. Keen on developing sustainable tech solutions. Aspiring to contribute to open-source projects.",
      extra: "In my free time, I enjoy participating in hackathons, playing Football and Ice Hockey, and exploring new skills and try to learn and share my experience."
    }
  ]

  return (
    <section id="about" className="py-28">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-effect hover-glow h-full backdrop-blur-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {section.icon}
                    <h3 className="text-2xl font-semibold text-white ml-4">{section.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{section.content}</p>
                  {section.skills && (
                    <div className="flex flex-wrap gap-2">
                      {section.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-sky-500 bg-opacity-20 rounded-full text-sky-300 text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  {section.highlight && (
                    <p className="text-sky-300 font-semibold mt-4">{section.highlight}</p>
                  )}
                  {section.extra && (
                    <p className="text-gray-400 mt-4">{section.extra}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button asChild className="rounded-full bg-sky-900 hover:bg-sky-600 text-white p-5 animate-bounce duration-1000">
            <a href="https://drive.google.com/drive/folders/1GoVoq1wtbCnMX-NGoQlx3MkXqnwBbOWc?usp=sharing" download>Download Resume</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

