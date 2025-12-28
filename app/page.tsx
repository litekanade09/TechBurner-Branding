import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import Services from "@/components/services"
import Collaboration from "@/components/collaboration"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      
      <Hero />
      <Stats />
      <Services />
      <Collaboration />
      <ContactForm />

      {/* Footer */}
      <footer className="py-16 md:py-20 bg-gradient-to-t from-zinc-900/50 to-transparent border-t border-zinc-800/30">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-black text-white font-heading">
                TECH <span className="text-orange-500">BURNER</span>
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-sans max-w-xs">
                India's leading tech content creator, inspiring millions through authentic reviews and engaging content.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 font-sans">Quick Links</h4>
              <div className="flex flex-col gap-3">
                <a 
                  href="#about" 
                  className="text-zinc-300 hover:text-orange-500 transition-colors duration-300 font-sans text-sm hover:translate-x-1 inline-block"
                >
                  About
                </a>
                <a 
                  href="#content" 
                  className="text-zinc-300 hover:text-orange-500 transition-colors duration-300 font-sans text-sm hover:translate-x-1 inline-block"
                >
                  Content
                </a>
                <a 
                  href="#collaboration" 
                  className="text-zinc-300 hover:text-orange-500 transition-colors duration-300 font-sans text-sm hover:translate-x-1 inline-block"
                >
                  Collaboration
                </a>
                <a 
                  href="#contact" 
                  className="text-zinc-300 hover:text-orange-500 transition-colors duration-300 font-sans text-sm hover:translate-x-1 inline-block"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 font-sans">Connect</h4>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://www.instagram.com/techburner/?hl=en" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-orange-500 transition-all duration-300 font-sans text-sm hover:translate-x-1 inline-block group"
                >
                  <span className="inline-flex items-center gap-2">
                    Instagram
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </span>
                </a>
                <a 
                  href="https://www.youtube.com/@TechBurner/videos" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-orange-500 transition-all duration-300 font-sans text-sm hover:translate-x-1 inline-block group"
                >
                  <span className="inline-flex items-center gap-2">
                    YouTube
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </span>
                </a>
                <a 
                  href="https://x.com/tech_burner" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-orange-500 transition-all duration-300 font-sans text-sm hover:translate-x-1 inline-block group"
                >
                  <span className="inline-flex items-center gap-2">
                    X (Twitter)
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-zinc-800/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-500 text-sm font-sans">
              © {new Date().getFullYear()} Tech Burner. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs font-sans text-zinc-500">
              <a href="#" className="hover:text-orange-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>

        </div>
      </footer>
    </main>
  )
}