"use client"

import { motion } from "framer-motion"

export function BackgroundBeams() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />

      {/* Animated beams */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
          style={{
            width: "2px",
            height: "100vh",
            left: `${20 + i * 15}%`,
            top: 0,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -100, -20],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}
