import { Button } from "@/components/ui/button"
import { Bot, Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from 'framer-motion'

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: ["1 Bot", "Basic Support", "100 API Calls/day", "Community Forums"],
    },
    {
      name: "Pro",
      price: "$9.99",
      features: ["5 Bots", "Priority Support", "1000 API Calls/day", "Advanced Analytics", "Custom Domains"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Unlimited Bots", "24/7 Dedicated Support", "Unlimited API Calls", "Custom Integration", "SLA"],
    },
  ]

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

      {/* Pricing Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-32 pb-20 px-4"
      >
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Choose Your Plan</h1>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg bg-gradient-to-br from-blue-900/50 to-transparent border border-blue-500/20 flex flex-col"
              >
                <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
                <p className="text-4xl font-bold mb-6">{plan.price}</p>
                <ul className="mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <Check className="h-5 w-5 text-blue-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => {
                    // Implement Google Sign-In for plan selection
                    console.log(`Implement Google Sign-In for ${plan.name} plan`)
                  }}
                >
                  Choose Plan
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="py-20 px-4 bg-black/50"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "Can I upgrade or downgrade my plan?",
                answer: "Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle.",
              },
              {
                question: "Is there a long-term contract?",
                answer: "No, all our plans are billed monthly and you can cancel at any time.",
              },
              {
                question: "Do you offer a free trial?",
                answer: "Yes, you can try our Pro plan for 14 days without any commitment.",
              },
              {
                question: "What  payment methods do you accept?",
                answer: "We accept all major credit cards and PayPal.",
              },
            ].map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
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
