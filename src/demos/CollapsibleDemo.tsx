import { useState, useRef, useEffect, type ReactNode } from 'react'

interface CollapsiblePanelProps {
  icon?: ReactNode
  title: string
  accentColor?: 'cyan' | 'purple' | 'red'
  defaultOpen?: boolean
  children: ReactNode
}

const accentMap = {
  cyan: {
    text: 'text-cyan-400',
    border: 'border-cyan-900/40',
    hover: 'hover:bg-cyan-950/30',
    glow: 'text-glow',
  },
  purple: {
    text: 'text-purple-400',
    border: 'border-purple-900/40',
    hover: 'hover:bg-purple-950/30',
    glow: 'text-glow-purple',
  },
  red: {
    text: 'text-red-400',
    border: 'border-red-900/40',
    hover: 'hover:bg-red-950/30',
    glow: 'text-glow-red',
  },
}

export default function CollapsibleDemo({
  icon,
  title,
  accentColor = 'cyan',
  defaultOpen = false,
  children,
}: CollapsiblePanelProps) {
  const [open, setOpen] = useState(defaultOpen)
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  const c = accentMap[accentColor]

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [open, children])

  return (
    <div className={`border ${c.border} rounded-sm panel-glow overflow-hidden`} style={{ background: 'var(--bg-primary)' }}>
      {/* Header — matches Shadowbroker panel header: px-3 py-2.5 */}
      <button
        onClick={() => setOpen(!open)}
        className={`
          w-full flex items-center justify-between px-3 py-2.5
          cursor-pointer ${c.hover} transition-colors
          border-b ${c.border}
        `}
        aria-expanded={open}
      >
        <div className="flex items-center gap-2">
          {icon && <span className={`${c.text} text-[11px]`}>{icon}</span>}
          <span className={`text-[12px] ${c.text} font-mono tracking-widest font-bold ${c.glow}`}>
            {title}
          </span>
        </div>
        <svg
          className={`w-3 h-3 ${c.text} transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          maxHeight: open ? height : 0,
          opacity: open ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
        }}
        role="region"
      >
        <div className="px-3 py-2.5">
          {children}
        </div>
      </div>
    </div>
  )
}
