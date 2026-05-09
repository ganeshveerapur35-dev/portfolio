"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handle = requestAnimationFrame(() => setMounted(true));
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => {
      cancelAnimationFrame(handle);
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] z-50 transition-all duration-300 ${scrolled ? "top-2" : "top-4"}`}>
      <div className="rounded-2xl border border-outline-variant bg-surface/70 backdrop-blur-md shadow-xl flex items-center justify-between px-6 md:px-8 py-3">
        <div className="text-xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
          MR.GANESH
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-surface-variant transition-colors text-on-surface"
            aria-label="Toggle Theme"
          >
            {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
            {!mounted && <div className="w-5 h-5" />}
          </button>

          <a
            href="#contact"
            className="hidden sm:block bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2 rounded-full font-semibold hover:from-red-600 hover:to-red-800 active:scale-95 transition-all text-sm shadow-md shadow-red-500/20"
          >
            Hire Me
          </a>

          <button
            className="md:hidden p-2 text-on-surface"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full md:hidden"
          >
            <div className="mx-2 bg-surface/95 backdrop-blur-xl border border-outline-variant rounded-2xl p-6 flex flex-col gap-4 shadow-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-on-surface hover:text-primary text-lg font-medium py-2 border-b border-outline-variant/30 last:border-0 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-xl font-semibold text-center shadow-md shadow-red-500/20"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
