"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Core",
    icon: "code",
    color: "border-l-primary",
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Java", "Python"]
  },
  {
    title: "Frameworks",
    icon: "layers",
    color: "border-l-tertiary",
    iconColor: "text-tertiary",
    bgColor: "bg-tertiary/10",
    skills: ["React.js", "Angular", "Tailwind CSS", "Next.js"]
  },
  {
    title: "Tools",
    icon: "construction",
    color: "border-l-secondary",
    iconColor: "text-secondary",
    bgColor: "bg-secondary/10",
    skills: ["Git", "GitHub", "VS Code", " GoogleAntigravity",]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-24 max-w-[1200px] mx-auto px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-h2 text-center mb-12 text-on-background"
      >
        Technical Proficiency
      </motion.h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`glass-card p-8 rounded-2xl border-l-4 ${category.color} hover:translate-y-[-4px] transition-all`}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className={`material-symbols-outlined ${category.iconColor} text-3xl`}>
                {category.icon}
              </span>
              <h3 className="text-xl font-bold text-on-background">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill}
                  className={`px-3 py-1 ${category.bgColor} ${category.iconColor} rounded-full text-sm font-medium`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
