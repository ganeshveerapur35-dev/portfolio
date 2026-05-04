"use client"

import React from 'react'

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated Gradient Layer */}
      <div className="absolute inset-0 bg-animated-gradient animate-gradient opacity-100" />

      {/* Static Overlays for Depth and Readability */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Theme-aware Subtle Overlay */}
      <div className="absolute inset-0 bg-white/20 dark:bg-background/40 backdrop-blur-[1px]" />
    </div>
  )
}
