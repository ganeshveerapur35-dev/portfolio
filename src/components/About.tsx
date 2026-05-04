"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-24 max-w-[1200px] mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden glass-card p-4 max-w-md mx-auto md:mx-0"
        >
          <img 
            src="/About_image.jpeg" 
            alt="Ganesh Veerapur" 
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-h2 text-on-background">The Journey of a Coder</h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            I am a passionate BCA student dedicated to mastering the art of frontend development. My journey is fueled by a relentless curiosity for how things work under the hood and a vision to integrate AI into everyday user interfaces.
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Currently, I am deep-diving into the world of AI Learning, exploring how LLMs and generative models can enhance the web development lifecycle and provide more intuitive user experiences.
          </p>
          
          <div className="flex gap-4 pt-4">
            <div className="text-center p-4 glass-card rounded-xl flex-1">
              <span className="block text-3xl font-bold text-primary">2+</span>
              <span className="text-sm opacity-70">Years Learning</span>
            </div>
            <div className="text-center p-4 glass-card rounded-xl flex-1">
              <span className="block text-3xl font-bold text-primary">15+</span>
              <span className="text-sm opacity-70">Projects Done</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
