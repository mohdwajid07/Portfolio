'use client'

import { Trophy, Award, Star, ArrowRight, Calendar, Medal, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AchievementsLayout from './layout'

export default function Achievements() {
  const achievements = [
    {
      icon: <Trophy className="w-12 h-12 text-yellow-400" />,
      title: "DTU Coding Challenge",
      description: "Won first place in DTU Coding Challenge 2024",
      highlight: "1st Place",
      year: "2024",
      category: "Competition",
      impact: "Competed against 100+ participants",
      details: [
        "Solved 13 hard and complex Data Structure and Algorithm problem",
        "Team of 3 members",
        "There were 2 rounds",
        "Final round consist of 13 problems in time duration of 3 hours"
      ]
    },
    {
      icon: <Award className="w-12 h-12 text-purple-400" />,
      title: "Solve 1000+ problem on LeetCode",
      description: "Solved 1000 problems on LeetCode platform with Max rating of 1700+",
      highlight: "Top 10% on LeetCode",
      year: "2022-Present",
      category: "Problem Solving",
      impact: "Improved problem-solving skills",
      details: [
        "Solving problems using C++ progarmming language",
        "Improving Data Structure and Algorithm skills",
        "learning new concepts and applications of DSA"
      ]
    },
    {
      icon: <Star className="w-12 h-12 text-sky-400" />,
      title: "Semi-Finalist in Flipkart GRiD 2024 & Meesho Dice 2024",
      description: "Qualified for the semi-finals in Flipkart GRiD 2024 and Meesho Dice 2024",
      highlight: "Top 5% in Flipkart GRiD 2024 & Meesho Dice 2024",
      year: "2024",
      category: "Competition & Hackathon",
      impact: "Competed against 1000+ teams",
      details: [
        "Qualified round 1 and round 2 of Flipkart GRiD & Meesho Dice 2024",
        "Submitted a project on the given problem statement",
        "learned new technologies and tools"
      ]
    },
    {
      icon: <Award className="w-12 h-12 text-purple-400" />,
      title: "Pupil on CodeForces",
      description: "Achieved pupil rating on CodeForces with Max rating of 1200+",
      highlight: "Competitive Programmming",
      year: "2022-Present",
      category: "Problem Solving",
      impact: "Improved problem-solving skills",
      details: [
        "Solving problems using C++ progarmming language",
        "Improving Data Structure and Algorithm skills",
        "learning new concepts and applications of DSA"
      ]
    },
    {
      icon: <Trophy className="w-12 h-12 text-yellow-400" />,
      title: "3rd Rank",
      description: "Secured 3rd rank in 10th Board Examination in 2020",
      highlight: "3rd Place",
      year: "2020",
      category: "Competition",
      impact: "Competed against 2500+ students",
      details: [
        "Hard work and dedication",
        "Secured 94% in Board Examination",
        "Secured 100% in Mathematics and Science",
        "Awarded by Chairman of Ladakh Science Foundation"
      ]
    },
    {
      icon: <Award className="w-12 h-12 text-purple-400" />,
      title: "Solve 700+ problem on Coding Ninjas",
      description: "Solved 700+ problems on Coding Ninjas platform",
      highlight: "Top 10% on Coding Ninjas",
      year: "2022-Present",
      category: "Problem Solving",
      impact: "Improved problem-solving skills",
      details: [
        "Solving problems using C++ progarmming language",
        "Improving Data Structure and Algorithm skills",
        "learning new concepts and applications of DSA"
      ]
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <AchievementsLayout>
    <div className="container mx-auto px-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-16"
      >
        <motion.div variants={item} className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-white inline-block relative">
            Key Achievements
            <motion.div
              className="absolute"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Recognition and milestones in my professional journey
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="glass-effect overflow-hidden bg-gradient-to-br from-sky-500/10 to-pink-500/10 border-sky-500/20 
              h-full group hover-glow duration-300 ease-in-out">
                <CardContent className="p-8">
                  <motion.div 
                    className="flex flex-col items-center text-center space-y-6"
                    initial="hidden"
                    animate="show"
                  >
                    <div className="relative">
                      <motion.div 
                        className="absolute -inset-4 rounded-full bg-gradient-to-r from-sky-500/20 to-sky-900/20 blur-xl 
                        group-hover:from-sky-500/30 group-hover:to-sky-500/30 transition-colors duration-500"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <div className="relative p-4 rounded-full bg-gradient-to-br from-sky-500/10 to-sky-900/10 
                      group-hover:from-sky-500/20 group-hover:to-sky-900/20 transition-colors duration-500">
                        {achievement.icon}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <Badge variant="secondary" className="bg-sky-400/10 text-sky-300">
                          <Calendar className="w-3 h-3 mr-1" />
                          {achievement.year}
                        </Badge>
                        <Badge variant="secondary" className="bg-sky-400/10 text-sky-300">
                          <Medal className="w-3 h-3 mr-1" />
                          {achievement.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>

                    <Badge className="bg-sky-500/20 text-sky-300 px-4 py-1 rounded-full">
                      <Target className="w-3 h-3 mr-1" />
                      {achievement.impact}
                    </Badge>

                    <motion.div 
                      className="w-full space-y-2 pt-4 border-t border-sky-500/20"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                    >
                      {achievement.details.map((detail, i) => (
                        <div 
                          key={i}
                          className="flex items-center text-sm text-gray-300 group/item"
                        >
                          <ArrowRight className="w-4 h-4 mr-2 text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <span className="text-left">{detail}</span>
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
    </AchievementsLayout>
  )
}

