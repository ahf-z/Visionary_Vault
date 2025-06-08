"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  },
  {
    category: "Frameworks",
    skills: ["React", "Next.js", "SAP Fiori", "UI5", "Node.js"],
  },
  {
    category: "Cloud",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
  },
  {
    category: "Tools",
    skills: ["Git", "VS Code", "Jira", "Postman", "Figma"],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-800"
      id="skills"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 