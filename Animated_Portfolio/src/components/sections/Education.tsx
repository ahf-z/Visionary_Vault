"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const education = [
  {
    degree: "Master of Computer Science",
    school: "University of Technology",
    period: "2018 - 2020",
    description: "Specialized in Artificial Intelligence and Cloud Computing",
  },
  {
    degree: "Bachelor of Computer Science",
    school: "National University",
    period: "2014 - 2018",
    description: "Focus on Software Engineering and Web Development",
  },
]

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2022",
  },
  {
    name: "SAP Fiori Development",
    issuer: "SAP",
    date: "2021",
  },
  {
    name: "Google Cloud Professional",
    issuer: "Google",
    date: "2020",
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="py-20 px-4 md:px-8 bg-white dark:bg-gray-900"
      id="education"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Education & Certifications
          </h2>

          {/* Education Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-8 border-l-2 border-blue-500"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 mb-2">
                      {edu.school}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {edu.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">{cert.date}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 