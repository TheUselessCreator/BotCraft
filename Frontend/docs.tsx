'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Bot, Book, Code, Terminal, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion } from 'framer-motion'

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('getting-started')

  const sections = [
    { id: 'getting-started', title: 'Getting Started', icon: Book },
    { id: 'api-reference', title: 'API Reference', icon: Code },
    { id: 'cli-commands', title: 'CLI Commands', icon: Terminal },
  ]

  const content = {
    'getting-started': (
      <div>
        <h2 className="text-2xl font-bold mb-4">Getting Started with BotCraft</h2>
        <p className="mb-4">Welcome to BotCraft! Follow these steps to create your first bot:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Sign up for a BotCraft account</li>
          <li>Create a new bot project</li>
          <li>Choose your bot's platform (Discord, Telegram, etc.)</li>
          <li>Set up your development environment</li>
          <li>Write your bot's code</li>
          <li>Deploy your bot to BotCraft</li>
        </ol>
      </div>
    ),
    'api-reference': (
      <div>
        <h2 className="text-2xl font-bold mb-4">API Reference</h2>
        <p className="mb-4">Explore our comprehensive API to build powerful bots:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Authentication</li>
          <li>Bot Management</li>
          <li>Message Handling</li>
          <li>User Interactions</li>
          <li>Analytics and Reporting</li>
        </ul>
      </div>
    ),
    'cli-commands': (
      <div>
        <h2 className="text-2xl font-bold mb-4">CLI Commands</h2>
        <p className="mb-4">Use our CLI for efficient bot management:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><code>botcraft init</code> - Initialize a new bot project</li>
          <li><code>botcraft deploy</code> - Deploy your bot to BotCraft</li>
          <li><code>botcraft logs</code> - View your bot's logs</li>
          <li><code>botcraft update</code> - Update your bot's code</li>
          <li><code>botcraft status</code> - Check your bot's status</li>
        </ul>
      </div>
    ),
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10"
      >
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Bot className="h-6 w-6 text-blue-500" />
            <span className="font-bold text-xl">BotCraft</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/pricing" className="text-sm hover:text-blue-400 transition-colors">
              Pricing
            </Link>
            <Link href="/status" className="text-sm hover:text-blue-400 transition-colors">
              Status
            </Link>
            <Link href="/docs" className="text-sm hover:text-blue-400 transition-colors">
              Docs
            </Link>
            <Link href="#" className="text-sm hover:text-blue-400 transition-colors">
              Discord
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="hidden md:inline-flex hover:text-blue-400"
              onClick={() => {
                // Implement Google Sign-In for login
                console.log("Implement Google Sign-In for login")
              }}
            >
              Login
            </Button>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => {
                // Implement Google Sign-In for sign up
                console.log("Implement Google Sign-In for sign up")
              }}
            >
              Sign Up
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Docs Content */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Documentation</h1>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full md:w-64 space-y-4"
            >
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveSection(section.id)}
                >
                  <section.icon className="mr-2 h-4 w-4" />
                  {section.title}
                </Button>
              ))}
            </motion.div>
            {/* Content */}
            <motion.div 
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex-1 p-6 rounded-lg bg-gradient-to-br from-blue-900/50 to-transparent border border-blue-500/20"
            >
              {content[activeSection]}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Bot className="h-6 w-6 text-blue-500" />
              <span className="font-bold">BotCraft</span>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm text-gray-400 hover:text-blue-400">
                Terms
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-blue-400">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-blue-400">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
