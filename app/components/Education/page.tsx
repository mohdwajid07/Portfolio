'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

export default function Education() {
  const educationData = [
    {
      degree: "B.Tech. in Computer Science",
      institution: "National Institute of Technology Delhi",
      duration: "2022 - Present",
      location: "New Delhi, India",
      details: [
        "GPA: 7.9/10.0",
        "Relevant coursework:Object Oriented Programming, Data Structures, Algorithms, Machine Learning, Operating Systems, Computer Networks, Database Management Systems,Data Mining, Artificial Intelligence, Web Technologies",
        "Head of Consulting & Finance at Training & Placement Cell NIT Delhi",
        "Executive Member of Cultural Club NIT Delhi",
      ]
    },
    {
      degree: "Higher Secondary Education",
      institution: "Sri Guru Harkrishan Sr. Secondary School",
      duration: "2020 - 2022",
      location: "Secor 40C Chandigarh, India",
      details: [
        "Percentage: 86% in CBSE 12th Board Examinations",
        "Technical Head of the Robotics Club",
        "Captain of the School Football Team",
        "Co-Head of School Sports Club",
      ]
    },
    {
      degree: "High School Education",
      institution: "S.T. Peter High School",
      duration: "2010 - 2020",
      location: "Leh Ladakh, India",
      details: [
        "Percentage: 94% in State 10th Board Examinations",
        "3th Rank in State 10th Board Examinations",
        "Captain of the School Football Team in School Olympics",
        "Head Boy of School",
      ]
    }
  ]

  return (
    <section id="education" className="py-28">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {educationData.map((edu, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div
              key={index}
              className="glass-effect p-8 rounded-xl hover-glow transform transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-sky-400 mr-6" />
                <div>
                  <h3 className="text-2xl font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-sky-400">{edu.institution}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-300 mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="mr-6">{edu.duration}</span>
                <MapPin className="w-4 h-4 mr-2" />
                <span>{edu.location}</span>
              </div>
              <ul className="list-disc list-inside text-gray-100 space-y-3">
                {edu.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
