import { useState, type ReactNode } from 'react'

export interface PanelProps {
  title: string
  icon?: ReactNode
  accentColor?: 'cyan' | 'purple' | 'red'
  opacity?: number
  collapsible?: boolean
  defaultOpen?: boolean
  scrollable?: boolean
  maxBodyHeight?: number
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

export default function Panel({
  title,
  icon,
  accentColor = 'cyan',
  opacity = 1,
  collapsible = false,
  defaultOpen = true,
  scrollable = false,
  maxBodyHeight = 280,
  children,
}: PanelProps) {
  const [open, setOpen] = useState(defaultOpen)
  const c = accentMap[accentColor]
  const safeOpacity = Math.min(1, Math.max(0, opacity))

  return (
    <div className={`border ${c.border} rounded-sm panel-glow overflow-hidden`} style={{ background: `rgba(10, 10, 10, ${safeOpacity})` }}>
      {collapsible ? (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`w-full flex items-center justify-between px-3 py-2.5 cursor-pointer ${c.hover} transition-colors border-b ${c.border}`}
          aria-expanded={open}
        >
          <div className="flex items-center gap-2">
            {icon && <span className={`${c.text} text-[11px]`}>{icon}</span>}
            <span className={`text-[12px] ${c.text} font-mono tracking-widest font-bold ${c.glow}`}>{title}</span>
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
      ) : (
        <div className={`w-full flex items-center justify-between px-3 py-2.5 border-b ${c.border}`}>
          <div className="flex items-center gap-2">
            {icon && <span className={`${c.text} text-[11px]`}>{icon}</span>}
            <span className={`text-[12px] ${c.text} font-mono tracking-widest font-bold ${c.glow}`}>{title}</span>
          </div>
        </div>
      )}

      {open && (
        <div
          className={scrollable ? 'overflow-y-auto' : ''}
          style={scrollable ? { maxHeight: maxBodyHeight } : undefined}
        >
          <div className="px-3 py-2.5">{children}</div>
        </div>
      )}
    </div>
  )
}
