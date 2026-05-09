"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./icons"
import Image from "next/image"

const TwitterIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

export function About() {
  const socialLinks = [
    { icon: <GithubIcon size={20} />, href: "https://github.com/ganeshveerapur35-dev", label: "GitHub" },
    { icon: <LinkedinIcon size={20} />, href: "https://linkedin.com/in/Ganesh-Veerapur", label: "LinkedIn" },
    { icon: <TwitterIcon size={20} />, href: "#", label: "Twitter" },
    { icon: <Mail size={20} />, href: "mailto:ganeshveerapur35@gmail.com", label: "Email" },
  ]

  return (
    <section id="about" className="py-24 max-w-[1200px] mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden glass-card p-4 max-w-sm mx-auto md:mx-0"
        >
          <Image 
            src="/About_image.jpeg" 
            alt="Ganesh Veerapur" 
            width={500}
            height={500}
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

          <div className="flex gap-4 pt-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all shadow-sm border border-outline-variant/30"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
