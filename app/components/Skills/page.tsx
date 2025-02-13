'use client'

import { motion } from 'framer-motion'
import { Code, Database, Layout, Users, Brain, Target, Presentation, MessageSquare, Clock } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function Skills() {
  const skillCategories = [
    {
      icon: <Users className="w-8 h-8 text-sky-400" />,
      title: "Leadership",
      skills: [
        "Event Management Head",
        "Team Leadership",
        "Project Coordination",
        "Budget Management",
        "Stakeholder Communication"
      ]
    },
    {
      icon: <Brain className="w-8 h-8 text-sky-400" />,
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Critical Thinking",
        "Adaptability",
        "Emotional Intelligence",
        "Decision Making"
      ]
    },
    {
      icon: <Presentation className="w-8 h-8 text-sky-400" />,
      title: "Event Management",
      skills: [
        "Event Planning",
        "Vendor Management",
        "Resource Allocation",
        "Risk Management",
        "Event Marketing"
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-sky-400" />,
      title: "Communication",
      skills: [
        "Public Speaking",
        "Team Collaboration",
        "Conflict Resolution",
        "Negotiation",
        "Written Communication"
      ]
    },
    {
      icon: <Target className="w-8 h-8 text-sky-400" />,
      title: "Management",
      skills: [
        "Strategic Planning",
        "Team Building",
        "Time Management",
        "Goal Setting",
        "Performance Evaluation"
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-sky-400" />,
      title: "Organization",
      skills: [
        "Multi-tasking",
        "Priority Management",
        "Schedule Coordination",
        "Documentation",
        "Process Improvement"
      ]
    },
    {
      icon: <Code className="w-8 h-8 text-sky-400" />,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C", "C++"]
    },
    {
      icon: <Layout className="w-8 h-8 text-sky-400" />,
      title: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap","Embedded C","Arduino Programming"]
    },
    {
      icon: <Database className="w-8 h-8 text-sky-400" />,
      title: "Backend",
      skills: ["Node.js", "Express.js", "MySQL", "MongoDB"]
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="space-y-12"
        >
          <motion.div variants={item} className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-white">Skills & Expertise</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Combining strong leadership and event management experience with technical proficiency
            </p>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Leadership & Soft Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.slice(0, 6).map((category, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="glass-effect hover-glow h-full bg-gradient-to-br from-sky-500/10 to-blue-500/10 
                  border-sky-500/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-sky-400 bg-opacity-10">
                          {category.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 rounded-full text-sm text-sky-300 bg-sky-400 bg-opacity-10 border 
                            border-sky-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skillCategories.slice(6).map((category, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="glass-effect hover-glow h-full bg-gradient-to-br from-sky-500/10 to-blue-500/10 border-sky-500/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-sky-400 bg-opacity-10">
                          {category.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 rounded-full text-sm text-sky-300 bg-sky-400 bg-opacity-10 border 
                            border-sky-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

