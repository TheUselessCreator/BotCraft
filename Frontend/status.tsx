'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Bot, Check, XCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { motion } from 'framer-motion'

export default function StatusPage() {
  const [services, setServices] = useState([
    { name: "Discord Bot Hosting", status: "operational" },
    { name: "Telegram Bot Hosting", status: "operational" },
    { name: "API", status: "operational" },
    { name: "Dashboard", status: "operational" },
    { name: "Database", status: "operational" },
    { name: "File Storage", status: "operational" },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setServices(prevServices => 
        prevServices.map(service => ({
          ...service,
          status: Math.random() > 0.9 ? 
            (Math.random() > 0.5 ? "degraded" : "down") : 
            "operational"
        }))
      )
    }, 5000) // Change status every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const getStatusIcon = (status) => {
    switch (status) {
      case "operational":
        return <Check className="h-5 w-5 text-green-500" />
      case "degraded":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case "down":
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return null
    }
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

      {/* Status Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            System Status
          </motion.h1>
          <div className="grid gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg bg-gradient-to-br from-blue-900/50 to-transparent border border-blue-500/20 flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  {getStatusIcon(service.status)}
                  <h2 className="text-xl font-semibold">{service.name}</h2>
                </div>
                <motion.span 
                  key={service.status}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="capitalize text-sm px-3 py-1 rounded-full bg-opacity-20"
                  style={{
                    backgroundColor: service.status === 'operational' ? 'rgba(0, 255, 0, 0.2)' : 
                                     service.status === 'degraded' ? 'rgba(255, 255, 0, 0.2)' : 
                                     'rgba(255, 0, 0, 0.2)',
                    color: service.status === 'operational' ? 'rgb(0, 255, 0)' : 
                           service.status === 'degraded' ? 'rgb(255, 255, 0)' : 
                           'rgb(255, 0, 0)'
                  }}
                >
                  {service.status}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident History */}
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Recent Incidents
          </motion.h2>
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-lg bg-gradient-to-br from-blue-900/50 to-transparent border border-blue-500/20"
            >
              <h3 className="text-xl font-semibold mb-2">API Performance Degradation</h3>
              <p className="text-gray-400 mb-4">We are currently experiencing slower than normal API response times. Our team is investigating the issue.</p>
              <p className="text-sm text-gray-500">Posted 2 hours ago</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y:  0 }}
              transition={{ delay: 0.8 }}
              className="p-6 rounded-lg bg-gradient-to-br from-blue-900/50 to-transparent border border-blue-500/20"
            >
              <h3 className="text-xl font-semibold mb-2">File Storage Outage</h3>
              <p className="text-gray-400 mb-4">Our file storage service is currently unavailable. We are working on restoring the service as quickly as possible.</p>
              <p className="text-sm text-gray-500">Posted 4 hours ago</p>
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
