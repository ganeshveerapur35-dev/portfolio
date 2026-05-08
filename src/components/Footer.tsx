"use client"

import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  

  return (
    <footer className="w-full border-t border-outline-variant/30 mt-24 bg-surface-container-lowest">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Ganesh Veerapur
            </div>
            <p className="text-sm text-on-surface-variant opacity-70">
              Crafting seamless digital experiences with precision.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary transition-all shadow-sm"
            >
              <span className="text-sm font-medium">Back to top</span>
              <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>
            <p className="text-xs text-on-surface-variant opacity-50">
              © {currentYear} Ganesh Veerapur. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
