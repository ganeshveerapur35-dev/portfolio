"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, Calendar } from "lucide-react"

const certifications = [
  {
    title: "Full Stack Web Development",
    issuer: "Coursera / Meta",
    date: "Dec 2024",
    link: "#",
    icon: <Award className="text-primary" size={24} />
  },
  {
    title: "AI & Machine Learning Fundamentals",
    issuer: "Google Cloud",
    date: "Jan 2025",
    link: "#",
    icon: <Award className="text-secondary" size={24} />
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Aug 2024",
    link: "#",
    icon: <Award className="text-primary" size={24} />
  }
]

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-8 max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-4 mb-16">
        <h2 className="text-h2 text-on-background">Certifications</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-transparent rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6 rounded-2xl border border-outline-variant/30 hover:border-primary/50 transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-surface-variant rounded-xl group-hover:scale-110 transition-transform">
                {cert.icon}
              </div>
              <a href={cert.link} className="p-2 opacity-0 group-hover:opacity-100 transition-opacity text-on-surface-variant hover:text-primary">
                <ExternalLink size={18} />
              </a>
            </div>
            
            <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
            <p className="text-primary font-medium text-sm mb-4">{cert.issuer}</p>
            
            <div className="flex items-center gap-2 text-xs text-on-surface-variant opacity-60">
              <Calendar size={14} />
              <span>{cert.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
