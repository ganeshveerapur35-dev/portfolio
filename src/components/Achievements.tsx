"use client"

import { motion } from "framer-motion"

export function Achievements() {
  return (
    <section id="achievements" className="py-24 max-w-[1200px] mx-auto px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-h2 mb-12 text-on-background"
      >
        Highlights
      </motion.h2>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 border-l-4 border-tertiary"
      >
        <div className="w-16 h-16 rounded-full primary-gradient flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-white text-3xl">emoji_events</span>
        </div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
            <h3 className="text-xl font-bold text-on-background">CODEFIESTA Hackathon</h3>
            <span className="text-sm bg-tertiary/10 text-tertiary px-3 py-1 rounded-full font-medium">Dec 2023</span>
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            Participated as a Lead Frontend Developer in the annual inter-collegiate hackathon. Led a team of 4 to build an AI-powered study companion, managing UI architecture and component logic.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
