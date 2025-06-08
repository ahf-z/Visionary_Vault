"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    company: "Actual Reality Technologies",
    position: "Full-Stack Developer",
    period: "2022 - Present",
    description: [
      "Developed and maintained SAP Fiori applications using UI5 framework",
      "Implemented cloud-based solutions using AWS and Azure",
      "Led the development of AI-powered features for enterprise applications",
      "Collaborated with cross-functional teams to deliver high-quality solutions",
    ],
  },
  {
    company: "Capgemini",
    position: "SAP Fiori Developer",
    period: "2020 - 2022",
    description: [
      "Created custom Fiori applications for enterprise clients",
      "Optimized application performance and user experience",
      "Implemented responsive designs and accessibility features",
      "Mentored junior developers and conducted code reviews",
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-800"
      id="experience"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-blue-500"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">
                    {exp.company}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {exp.period}
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 