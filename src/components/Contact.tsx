"use client"

import { motion } from "framer-motion"
import { Send, Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Message sent! (Simulation)")
  }

  return (
    <section id="contact" className="py-24 max-w-[1200px] mx-auto px-4 md:px-6">
      <div className="max-w-4xl mx-auto glass-card p-6 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">

        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10" />
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h2 mb-4 text-on-background"
          >
            Get in Touch
          </motion.h2>
          <p className="text-on-surface-variant max-w-lg mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Mail size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-60">Email</p>
                <p className="text-on-background font-medium break-all">ganeshveerapur35@gmail.com</p>
              </div>
            </div>

            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-60">Phone</p>
                <p className="text-on-background font-medium">+91-8073528825</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-60">Location</p>
                <p className="text-on-background font-medium">Karnataka, India</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Full Name</label>
                <input 
                  required
                  className="w-full bg-surface-variant/50 border border-outline-variant rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-on-surface-variant/30 text-on-surface"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Email Address</label>
                <input 
                  required
                  className="w-full bg-surface-variant/50 border border-outline-variant rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-on-surface-variant/30 text-on-surface"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Message</label>
              <textarea 
                required
                className="w-full bg-surface-variant/50 border border-outline-variant rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none placeholder:text-on-surface-variant/30 text-on-surface"
                placeholder="How can I help you?"
                rows={4}
              />
            </div>
            
            <button 
              type="submit"
              className="w-full primary-gradient text-white py-4 rounded-xl font-bold hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
