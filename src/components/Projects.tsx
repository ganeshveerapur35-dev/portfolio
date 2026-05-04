"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

// Custom SVG Icon for Github to avoid lucide-react version issues
const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const projects = [
  {
    title: "Eco-Tracker App",
    description: "A mobile-first dashboard to monitor and reduce carbon footprint using real-time data visualizations.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "D3.js", "Firebase"],
    github: "https://github.com/ganeshveerapur35-dev",
    demo: "#"
  },
  {
    title: "HealthConnect Portal",
    description: "A secure patient-doctor communication platform featuring instant messaging and appointment scheduling.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/ganeshveerapur35-dev",
    demo: "#"
  },
  {
    title: "Pulse-Analytics Engine",
    description: "A high-performance data processing engine designed for real-time stock market analysis.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Node.js", "Redis"],
    github: "https://github.com/ganeshveerapur35-dev",
    demo: "#"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-8 max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-4 mb-16">
        <h2 className="text-h2 text-primary">Featured Projects</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-3xl overflow-hidden group border border-outline-variant/30 hover:border-primary/50 transition-all duration-500"
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" className="p-3 bg-surface rounded-full hover:bg-primary hover:text-on-primary transition-all text-on-surface">
                    <GithubIcon size={20} />
                  </a>
                  <button 
                    onClick={() => project.demo === "#" ? alert("Live demo coming soon!") : window.open(project.demo, "_blank")}
                    className="p-3 bg-surface rounded-full hover:bg-primary hover:text-on-primary transition-all text-on-surface"
                  >
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed opacity-80">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
