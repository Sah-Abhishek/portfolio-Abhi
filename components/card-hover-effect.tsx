"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

interface HoverEffectProps {
  items: Array<{
    title: string
    description: string
    link: string
  }>
}

export function HoverEffect({ }: HoverEffectProps) {
  const projects = [
    {
      title: "Rhino: Web3 wallet",
      description:
        "A hierarchical deterministic crypto wallet with multi-network support (Solana & Ethereum), Google OAuth login, and local key storage for enhanced security.",
      tech: ["React", "Node.js", "MongoDB", "Alchemy", "Solana", "Ethereum"],
      github: "https://github.com/Sah-Abhishek/Rhino-wallet",
      live: "https://rhino-tau.vercel.app",
    },
    {
      title: "Productivity Log",
      description:
        "A productivity tool that tracks study hours using React, Express, Zustand, Tailwind, Chart.js, and MongoDB.",
      tech: ["React", "Express", "Zustand", "Tailwind CSS", "Chart.js", "MongoDB"],
      github: "https://github.com/Sah-Abhishek/productivity-log",
      live: "https://productivity-log-backend.vercel.app",
    },
    {
      title: "Big-Win: Web3 dice game",
      description:
        "A provably fair dice betting game built on Solana blockchain with Phantom Wallet integration.",

      tech: ["React", "Solana", "Phantom Wallet", "Anchor"],

      github: "https://github.com/Sah-Abhishek/dice-game-provably-fair",
      live: "https://big-win-zeta.vercel.app",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="group"
        >
          <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 h-full">
            <CardHeader>
              <CardTitle className="text-white group-hover:text-blue-400 transition-colors">{project.title}</CardTitle>
              <CardDescription className="text-gray-400">{project.description}</CardDescription>

            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-gray-700 text-gray-300">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-black hover:bg-gray-700 flex items-center gap-1"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 flex items-center gap-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
