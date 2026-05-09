"use client"

import React, { memo } from 'react'

export const Background = memo(function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0 bg-animated-gradient animate-gradient opacity-100" 
        style={{ transform: 'translateZ(0)', willChange: 'transform' }}
      />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute inset-0 bg-white/20 dark:bg-background/40 backdrop-blur-[1px]" />
    </div>
  )
})

