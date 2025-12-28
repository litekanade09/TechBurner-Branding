"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function Stats() {
  const stats = [
    { label: "Reach", value: 2, suffix: "B+" },
    { label: "Subscribers", value: 12, suffix: "M+" },
    { label: "Followers", value: 4, suffix: "M+" },
  ]

  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const statsRef = useRef(null)

  const isLeftInView = useInView(leftRef, { once: true, amount: 0.3 })
  const isRightInView = useInView(rightRef, { once: true, amount: 0.3 })
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20 md:py-32 bg-black scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-6 items-start mb-20 md:mb-32">

          {/* Left Column */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, y: 60 }}
            animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Profile */}
            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-zinc-800 overflow-hidden transition-transform duration-500 hover:scale-105">
                <img
                  src="/profile.jpg"
                  alt="Shlok Srivastava"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-1">
                  Shlok Srivastava
                </h3>
                <p className="text-zinc-400 font-medium">Tech Burner</p>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight"
            >
              CRAFTING THE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
                FUTURE
              </span>
              <br />
              OF <span className="text-orange-500">TECH</span>
            </motion.h2>
          </motion.div>

          {/* Right Column */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, y: 60 }}
            animate={isRightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:pt-12"
          >
            {[ 
              "Hey! I'm Shlok Srivastava, better known as Tech Burner, one of India's leading tech content creators and social media influencers. With over 12 million subscribers across platforms, I've spent years building an authentic and highly engaged online presence in the tech community.",
              "I create content that blends in-depth tech reviews, smartphone comparisons, gadget unboxings, and lifestyle vlogs—all designed to inspire and connect with my audience. My focus is on delivering high-quality, relatable content that resonates with tech enthusiasts across India and beyond."
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={isRightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
                className="p-6 md:p-8  backdrop-blur-sm"
              >
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                  {text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 60 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-12 md:pt-16 border-t border-zinc-800/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={isStatsInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                className="text-center p-8  backdrop-blur-sm"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600 mb-4">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm font-bold text-zinc-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Stats
