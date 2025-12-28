"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, ArrowRight } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  const isLeftInView = useInView(leftRef, { once: true, amount: 0.3 })
  const isRightInView = useInView(rightRef, { once: true, amount: 0.3 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" className="py-24 md:py-32 bg-black scroll-mt-20">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-12 md:p-16 text-center backdrop-blur-sm border border-zinc-800/50 rounded-3xl bg-zinc-900/40"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <CheckCircle2 className="w-20 h-20 text-orange-500 mx-auto mb-6" />
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-black mb-4 font-heading">
              Message Sent!
            </h3>

            <p className="text-zinc-400 text-lg mb-8 font-sans">
              Thanks for reaching out. Tech Burner's team will get back to you within 24 hours.
            </p>

            <Button
              onClick={() => setSubmitted(false)}
              variant="outline"
              className="rounded-full px-8 h-12 font-bold transition-transform hover:scale-105"
            >
              Send Another
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-black scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, y: 60 }}
            animate={isLeftInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 tracking-tight leading-[1.1] font-heading"
              initial={{ opacity: 0, x: -20 }}
              animate={isLeftInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              LET&apos;S BUILD <br />
              SOMETHING <br />
              <span className="text-orange-500 italic">ICONIC</span>.
            </motion.h2>

            
          </motion.div>

          {/* RIGHT – FORM */}
          <motion.form
            ref={rightRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 60 }}
            animate={isRightInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5 p-8 md:p-10 backdrop-blur-sm"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Name
                </label>
                <Input
                  required
                  placeholder="Your name"
                  className="h-12 rounded-xl bg-black/40 border-zinc-700/50 focus:border-orange-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Email
                </label>
                <Input
                  required
                  type="email"
                  placeholder="your@email.com"
                  className="h-12 rounded-xl bg-black/40 border-zinc-700/50 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Collaboration Type
              </label>
              <Select>
                <SelectTrigger className="h-12 rounded-xl bg-black/40 border-zinc-700/50">
                  <SelectValue placeholder="Select service..." />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-zinc-700">
                  <SelectItem value="promotion">Brand Promotion</SelectItem>
                  <SelectItem value="ugc">UGC Content</SelectItem>
                  <SelectItem value="event">Event Coverage</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Project Details
              </label>
              <Textarea
                required
                placeholder="Tell me about your campaign goals..."
                className="min-h-[150px] rounded-xl bg-black/40 border-zinc-700/50 focus:border-orange-500 resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full h-14 rounded-full font-bold text-lg bg-orange-500 hover:bg-orange-600 transition-transform hover:scale-[1.02]"
            >
              Send Proposal
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.form>

        </div>
      </div>
    </section>
  )
}
