"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const projects = [
  {
    title: "Carry Connect",
    description:
      "A comprehensive logistics management system built with SAP Fiori and cloud technologies.",
    stack: ["SAP Fiori", "UI5", "AWS", "Node.js"],
    link: "#",
  },
  {
    title: "CNN-based Bone Fracture Classification",
    description:
      "An AI-powered medical imaging system for automated bone fracture detection and classification.",
    stack: ["Python", "TensorFlow", "OpenCV", "Docker"],
    link: "#",
  },
  {
    title: "Prognosis of Heart Malady",
    description:
      "Machine learning model for early detection and prediction of heart diseases.",
    stack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    link: "https://ieeexplore.ieee.org/document/your-paper-id",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="py-20 px-4 md:px-8 bg-white dark:bg-gray-900"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 