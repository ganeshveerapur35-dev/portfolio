"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Moon, Sun, Laptop, Shield, Bell, FileText, CheckCircle2 } from "lucide-react"
import { useTheme } from "next-themes"

interface Settings {
  notifications: boolean
  security: string
  resumeLink: string
}

export function SettingsPanel({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [settings, setSettings] = useState<Settings>({
    notifications: true,
    security: "high",
    resumeLink: ""
  })
  const [loading, setLoading] = useState(true)
  const [, setSaving] = useState(false)
  const [savedStatus, setSavedStatus] = useState(false)

  // Avoid hydration mismatch for theme
  useEffect(() => {
    setMounted(true)
    if (isOpen) {
      fetchSettings()
    }
  }, [isOpen])

  const fetchSettings = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/settings')
      if (res.ok) {
        const data = await res.json()
        setSettings(data)
      }
    } catch {
      console.error("Failed to load settings")
    } finally {
      setLoading(false)
    }
  }

  const saveSettings = async (newSettings: Partial<Settings>) => {
    const updated = { ...settings, ...newSettings }
    setSettings(updated)
    setSaving(true)
    
    try {
      await fetch('/api/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updated),
      })
      setSavedStatus(true)
      setTimeout(() => setSavedStatus(false), 2000)
    } catch {
      console.error("Failed to save settings")
    } finally {
      setSaving(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-50 h-full w-full max-w-sm glass bg-background/95 shadow-2xl border-l p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Preferences</h2>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-surface-variant transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {loading ? (
               <div className="flex justify-center p-8"><span className="animate-pulse">Loading settings...</span></div>
            ) : (
              <div className="space-y-8">
                {/* Theme Toggle */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
                    <Sun size={16} /> Appearance
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setTheme("light")}
                      className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${mounted && theme === "light" ? "bg-primary/10 border-primary text-primary" : "border-outline-variant hover:bg-surface-variant"}`}
                    >
                      <Sun size={20} />
                      <span className="text-xs font-medium">Light</span>
                    </button>
                    <button
                      onClick={() => setTheme("dark")}
                      className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${mounted && theme === "dark" ? "bg-primary/10 border-primary text-primary" : "border-outline-variant hover:bg-surface-variant"}`}
                    >
                      <Moon size={20} />
                      <span className="text-xs font-medium">Dark</span>
                    </button>
                    <button
                      onClick={() => setTheme("system")}
                      className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${mounted && theme === "system" ? "bg-primary/10 border-primary text-primary" : "border-outline-variant hover:bg-surface-variant"}`}
                    >
                      <Laptop size={20} />
                      <span className="text-xs font-medium">System</span>
                    </button>
                  </div>
                </div>

                {/* Notifications */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <Bell size={16} /> Notifications
                  </h3>
                  <div className="flex items-center justify-between p-4 rounded-xl border border-border">
                    <div>
                      <p className="font-medium inline-block">Push Notifications</p>
                      <p className="text-xs text-muted-foreground">Receive alerts for new messages</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={settings.notifications}
                        onChange={(e) => saveSettings({ notifications: e.target.checked })}
                      />
                      <div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </label>
                  </div>
                </div>

                {/* Security Data */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))] flex items-center gap-2">
                    <Shield size={16} /> Privacy
                  </h3>
                  <select 
                    value={settings.security}
                    onChange={(e) => saveSettings({ security: e.target.value })}
                    className="w-full p-3 rounded-xl border border-outline-variant bg-background outline-none focus:border-primary"
                  >
                    <option value="low">Basic Telemetry Allowed</option>
                    <option value="medium">Standard Analytics</option>
                    <option value="high">Strict Privacy Mode</option>
                  </select>
                </div>

                {/* Resume URL */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))] flex items-center gap-2">
                    <FileText size={16} /> Edit Resume Link
                  </h3>
                  <input 
                    type="url"
                    value={settings.resumeLink}
                    onChange={(e) => setSettings({...settings, resumeLink: e.target.value})}
                    onBlur={(e) => saveSettings({ resumeLink: e.target.value })}
                    placeholder="https://drive.google.com/..."
                    className="w-full p-3 rounded-xl border border-outline-variant bg-background outline-none focus:border-primary"
                  />
                  <p className="text-xs text-[hsl(var(--muted-foreground))]">Updates the resume link across the site instantly.</p>
                </div>

                {savedStatus && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 p-3 text-sm font-medium text-emerald-600 bg-emerald-500/10 rounded-xl"
                  >
                    <CheckCircle2 size={16} /> Settings saved to backend
                  </motion.div>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
