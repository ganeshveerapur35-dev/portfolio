"use client"

import { motion } from "framer-motion"

const education = [
  {
    period: "2023 - 2026",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "KLE Society's College of BCA Khanapur (RCUB)",
    description: "Focusing on Computer Science fundamentals, Web Technologies, and Programming Languages."
  },
  {
    period: "2020 - 2023",
    degree: "Pre-University Course (PUC)",
    institution: "St.Theresa PU College Alnavar",
    description: "Major in Accountancy, Business studies, and Economics"
  }
]

export function Education() {
  return (
    <section id="education" className="py-24 max-w-[1200px] mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-h2 mb-12 text-on-background"
      >
        Academic Journey
      </motion.h2>

      <div className="relative max-w-3xl border-l-2 border-outline-variant ml-4 md:ml-8 pl-8 space-y-12">
        {education.map((item, index) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full primary-gradient border-4 border-background"></div>
            <div>
              <span className="text-sm font-semibold text-primary mb-2 block uppercase tracking-wider">
                {item.period}
              </span>
              <h3 className="text-xl font-bold text-on-background">{item.degree}</h3>
              <p className="text-on-surface-variant mt-2 font-medium">{item.institution}</p>
              <p className="text-on-surface-variant opacity-70 mt-1 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
