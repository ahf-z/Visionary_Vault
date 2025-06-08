"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { useForm, ValidationError } from "@formspree/react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [state, handleSubmit] = useForm("your-form-id") // Replace with your Formspree form ID

  return (
    <section
      ref={ref}
      className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-800"
      id="contact"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-2">📧</span>
                  <a
                    href="mailto:your.email@example.com"
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    your.email@example.com
                  </a>
                </p>
                <p className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-2">🔗</span>
                  <a
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    LinkedIn Profile
                  </a>
                </p>
                <p className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-2">💻</span>
                  <a
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    GitHub Profile
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 