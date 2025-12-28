"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex items-center justify-between px-8 py-5 md:px-16">

        {/* Left links */}
        <div className="flex items-center gap-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#content">Content</NavLink>
          <NavLink href="#collaboration">Collaboration</NavLink>
        </div>

        {/* Right link */}
        <NavLink href="#work">Work</NavLink>

      </div>
    </motion.nav>
  )
}

/* ---------- Reusable NavLink ---------- */

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      scroll
      className="text-white font-medium transition-colors hover:text-orange-500"
    >
      {children}
    </Link>
  )
}
