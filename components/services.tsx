"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const videos = [
  { id: "O1nvNIEO8-o", description: "Exploring the latest flagship smartphones." },
  { id: "iFECvPOTTgM", description: "Unboxing and reviewing cutting-edge gadgets." },
  { id: "BDeylKDBUzg", description: "Budget smartphone showdown and comparisons." },
  { id: "rioHa585KnQ", description: "Behind-the-scenes tech events and launches." },
  { id: "XD_yzDX-x2s", description: "Gaming phone performance stress tests." },
  { id: "O1nvNIEO8-o", description: "Tech lifestyle content and real-world usage." },
]

export default function ContentSection() {
  const headingRef = useRef(null)
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 })

  return (
    <section id="content" className="py-20 md:py-32 bg-black overflow-hidden scroll-mt-20">
      
      {/* Heading */}
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <motion.h2
  ref={headingRef}
  initial={{ opacity: 0, y: 40 }}
  animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white uppercase tracking-tight font-heading"
>
  Content
</motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 text-lg md:text-xl mt-4 font-sans"
        >
          Engaging tech reviews and unboxings that millions love
        </motion.p>
      </div>

      {/* Marquee */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isHeadingInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative overflow-hidden"
      >
        <div className="flex gap-6 md:gap-8 animate-marquee will-change-transform">

          {/* Duplicate ONCE for perfect loop */}
          {[...videos, ...videos].map((video, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] md:w-[400px] lg:w-[460px] group"
            >
              <div className="rounded-2xl overflow-hidden bg-zinc-900 shadow-lifted hover:shadow-lifted-xl transition-all duration-500 border border-zinc-800/50 hover:border-orange-500/30 hover:scale-[1.02]">
                <div className="aspect-video relative">

                  {/* Thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-110"
                  />

                  {/* Video */}
                  <iframe
                    className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={video.description}
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              <p className="text-zinc-400 text-sm md:text-base lg:text-lg mt-4 md:mt-5 leading-relaxed px-1 max-w-[95%] font-sans">
                {video.description}
              </p>
            </div>
          ))}

        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
      </motion.div>

      {/* Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 30s;
          }
        }
      `}</style>

    </section>
  )
}