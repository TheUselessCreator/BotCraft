import { Button } from "@/components/ui/button"
import { Bot, Server, Star, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from 'framer-motion'

export default function Component() {
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

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-900/50 via-black to-black"
      >
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Quick, Reliable & Simple.
            </h1>
            <p className="text-lg text-gray-400">
              Join BotCraft and experience the redefined cloud hosting for your bots.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => {
                  // Implement Google Sign-In for get started
                  console.log("Implement Google Sign-In for get started")
                }}
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-blue-500" fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm text-gray-400">Rated 4.7/5</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-500" />
                <span className="text-sm text-gray-400">1000+ Active Users</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-transparent blur-3xl -z-10" />
            <Image
              src="/placeholder.svg?height=600&width=800"
              width={800}
              height={600}
              alt="Dashboard Preview"
              className="rounded-lg border border-blue-500/20 shadow-2xl"
            />
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="py-20 px-4"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400">Everything we do simple and easy to use</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-900/50 to-transparent border border-blue-500/20">
              <Bot className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Discord Bot Hosting</h3>
              <p className="text-gray-400 mb-4">
                We offer free and premium Discord Bot hosting with 99.9% uptime! Import your code from GitHub or upload it
                directly, we've got you covered!
              </p>
              <Button variant="link" className="text-blue-400 p-0 hover:text-blue-300">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-900/50 to-transparent border border-blue-500/20">
              <Server className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Telegram Bot Hosting</h3>
              <p className="text-gray-400 mb-4">
                Host your Telegram Bots for free or just $1.25/month. You can also use GitHub for your projects, as well as
                File Upload.
              </p>
              <Button variant="link" className="text-blue-400 p-0 hover:text-blue-300">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Grid */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="py-20 px-4 bg-black/50"
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "99.9% Uptime",
                description: "We guarantee high availability for all your bots",
              },
              {
                title: "Instant Setup",
                description: "Get your bot up and running in minutes",
              },
              {
                title: "24/7 Support",
                description: "Our team is always here to help you succeed",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-lg bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20"
              >
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="py-20 px-4"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-400 mb-8">Join thousands of developers using BotCraft today</p>
          <Button
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => {
              // Implement Google Sign-In for sign up
              console.log("Implement Google Sign-In for sign up")
            }}
          >
            Sign Up Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.section>

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
