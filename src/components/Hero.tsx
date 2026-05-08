"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="py-24 md:py-32 flex flex-col items-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary mb-8 border border-primary/20"
      >
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-display mb-6 tracking-tight text-on-background"
      >
        Ganesh <span className="text-primary">Veerapur</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-h2 text-on-surface-variant max-w-3xl mb-12"
      >
        BCA Student & Frontend Developer crafting seamless digital experiences with a focus on AI integration.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <a
          href="#projects"
          className="primary-gradient text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
        >
          View Projects 
        </a>
        <a
          href="/GANESH-RESUME.pdf"
          target="_blank"
          className="primary-gradient text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
        >
          <Download size={18} /> Download Resume
        </a>
      </motion.div>
    </section>
  )
}

