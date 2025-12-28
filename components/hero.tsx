"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Hero() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    const offset = 80
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset

    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            {["about", "content", "collaboration"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white text-sm md:text-base hover:text-orange-500 transition font-sans"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="text-white text-sm md:text-base px-5 py-2 rounded-full border border-white/10 hover:border-orange-500/50 hover:text-orange-500 transition font-sans"
          >
            Work
          </button>
        </div>
      </motion.nav>

      {/* HERO IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0"
      >
        <img
          src="/burnerhero.png"
          alt="Tech Burner"
          className="
            w-full h-full object-cover
            object-center
            md:object-[70%_center]
          "
        />

        {/* GRADIENT OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </motion.div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 flex items-end min-h-screen px-6 md:px-12 pb-14 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-none">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="block text-white"
            >
              TECH
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="block text-orange-500"
            >
              BURNER
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-4 max-w-md text-zinc-400 text-base md:text-lg font-sans"
          >
            India’s Leading Tech Content Creator
          </motion.p>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/60 uppercase tracking-wider">
          Scroll
        </span>
        <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-orange-500 rounded-full"
          />
        </div>
      </motion.div>

    </section>
  )
}
