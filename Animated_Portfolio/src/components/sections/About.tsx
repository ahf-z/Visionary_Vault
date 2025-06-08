"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="py-20 px-4 md:px-8 bg-white dark:bg-gray-900"
      id="about"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I am a passionate Full-Stack Developer with expertise in SAP Fiori development
              and a strong background in cloud technologies and artificial intelligence.
              With a focus on creating efficient, scalable, and user-friendly applications,
              I bring innovative solutions to complex technical challenges.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Core Competencies
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Full-Stack Development</li>
                  <li>SAP Fiori & UI5</li>
                  <li>Cloud Architecture</li>
                  <li>AI & Machine Learning</li>
                  <li>Problem Solving</li>
                  <li>Team Collaboration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Soft Skills
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Effective Communication</li>
                  <li>Project Management</li>
                  <li>Adaptability</li>
                  <li>Continuous Learning</li>
                  <li>Attention to Detail</li>
                  <li>Time Management</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 