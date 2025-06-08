"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null)

  // Predefined positions for particles to avoid hydration mismatch
  const particlePositions = [
    { left: "10%", top: "20%" },
    { left: "20%", top: "40%" },
    { left: "30%", top: "60%" },
    { left: "40%", top: "80%" },
    { left: "50%", top: "10%" },
    { left: "60%", top: "30%" },
    { left: "70%", top: "50%" },
    { left: "80%", top: "70%" },
    { left: "90%", top: "90%" },
    { left: "15%", top: "85%" },
    { left: "25%", top: "65%" },
    { left: "35%", top: "45%" },
    { left: "45%", top: "25%" },
    { left: "55%", top: "5%" },
    { left: "65%", top: "15%" },
    { left: "75%", top: "35%" },
    { left: "85%", top: "55%" },
    { left: "95%", top: "75%" },
    { left: "5%", top: "95%" },
    { left: "15%", top: "15%" },
  ]

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div ref={particlesRef} className="absolute inset-0">
        {particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"
            style={{
              left: pos.left,
              top: pos.top,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, Math.random() * 1 + 1, 1],
              opacity: [0.5, Math.random() * 0.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Ahfaz Abdul
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
        >
          Full-Stack Developer | SAP Fiori Specialist | Cloud & AI Enthusiast
        </motion.p>
      </div>
    </section>
  )
} 