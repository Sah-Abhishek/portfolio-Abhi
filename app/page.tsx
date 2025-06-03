"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Code, Database, Server, Smartphone, ArrowDown } from "lucide-react"
import { BackgroundBeams } from "@/components/background-beams"
import { TextGenerateEffect } from "@/components/text-generate-effect"
import { HoverEffect } from "@/components/card-hover-effect"
import { FloatingNav } from "@/components/floating-nav"
import Image from "next/image";

const skills = [
  { name: "React", category: "Frontend", icon: "⚛️" },
  { name: "Next.js", category: "Frontend", icon: "▲" },
  { name: "TypeScript", category: "Language", icon: "📘" },
  { name: "Node.js", category: "Backend", icon: "🟢" },
  { name: "Python", category: "Language", icon: "🐍" },
  { name: "MongoDB", category: "Database", icon: "🍃" },
  { name: "PostgreSQL", category: "Database", icon: "🐘" },
  { name: "AWS", category: "Cloud", icon: "☁️" },
]

const projects = [
  {
    title: "Rhino: Web 3 wallet",
    description:
      "A hierarchical deterministic crypto wallet with multi-network support (Solana & Ethereum), Google OAuth login, and local key storage for enhanced security.", tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    github: "#",
    live: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "Modern weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    tech: ["React", "Python", "FastAPI", "Chart.js"],
    github: "#",
    live: "#",
  },
]

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <FloatingNav navItems={navItems} />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <BackgroundBeams />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Abhishek Sah
            </h1>
          </motion.div>

          <TextGenerateEffect
            words="Full Stack Developer & BTech Student"
            className="text-xl md:text-2xl text-gray-300 mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Passionate about creating innovative web solutions and exploring cutting-edge technologies. Currently
            pursuing BTech while building amazing digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              View My Work
            </Button>
            <a href="/images/Abhishek_Sah.pdf" download>
              <Button
                size="lg"
                variant="outline"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                Download Resume
              </Button>
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1">
                  <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                    <div className="w-72 h-72 rounded-full overflow-hidden">
                      <Image
                        src="/images/Abhishek.jpeg" // ✅ Correct path (assuming it's in public/images)
                        alt="Abhishek"
                        width={288} // matches w-72
                        height={288}
                        className="object-cover w-full h-full rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate BTech student specializing in Computer Science with a focus on full-stack development.
                My journey in technology began with curiosity and has evolved into a deep commitment to creating
                innovative solutions that make a difference.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                With expertise spanning both frontend and backend technologies, I enjoy tackling complex problems and
                turning ideas into reality. I'm constantly learning new technologies and staying updated with industry
                trends to deliver cutting-edge solutions.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center space-x-3">
                  <Code className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300">Frontend Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Server className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">Backend Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Database className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300">Database Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-6 h-6 text-pink-400" />
                  <span className="text-gray-300">Mobile Development</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-white mb-2">{skill.name}</h3>
                    <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                      {skill.category}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <HoverEffect
            items={projects.map((project) => ({
              title: project.title,
              description: project.description,
              link: project.live,
            }))}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:abhisheksah3333@gmail.com"                >
                  Send Email
                </a>
              </Button>
              <a href="https://github.com/sah-abhishek" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </Button>
              </a>
              <a href="https://www.linkedin.com/in/abhishek-sah-958b5825b/" target="_blank">

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 flex items-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Abhishek Sah. Built with Next.js, Framer Motion, and shadcn/ui.</p>
        </div>
      </footer>
    </div>
  )
}
