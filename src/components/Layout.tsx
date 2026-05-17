import { useState, type ReactNode } from 'react'
import Sidebar from './Sidebar'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen relative scanlines font-mono">
      {/* Header */}
      <header className="border-b border-cyan-900/40 px-8 py-6 sticky top-0 z-50" style={{ background: 'var(--bg-panel)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <button
              className="lg:hidden text-cyan-400 p-1"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {sidebarOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
            <a href="#" className="text-[13px] tracking-[0.3em] text-cyan-400 font-bold text-glow uppercase">
              SHADOWBROKER PATTERNS
            </a>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-widest text-gray-500 hover:text-cyan-400 transition-colors uppercase"
          >
            GitHub
          </a>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto flex">
        {/* Sidebar */}
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main content */}
        <main className="flex-1 min-w-0 px-8 lg:px-12 py-10">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-cyan-900/20 px-6 py-6 mt-16">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-[10px] tracking-widest text-gray-600 uppercase">
            Shadowbroker Pattern Documentation — Built with Vite + React + Tailwind
          </p>
        </div>
      </footer>
    </div>
  )
}
