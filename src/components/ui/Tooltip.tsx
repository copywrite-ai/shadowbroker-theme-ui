import { useEffect, useRef, useState, type ReactNode } from 'react'

export interface TooltipProps {
  content: string
  side?: 'top' | 'right' | 'bottom' | 'left'
  delay?: number
  children: ReactNode
}

const sideMap = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
}

export default function Tooltip({
  content,
  side = 'top',
  delay = 120,
  children,
}: TooltipProps) {
  const [open, setOpen] = useState(false)
  const timerRef = useRef<number | null>(null)

  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  const handleEnter = () => {
    clearTimer()
    timerRef.current = window.setTimeout(() => setOpen(true), delay)
  }

  const handleLeave = () => {
    clearTimer()
    setOpen(false)
  }

  useEffect(() => () => clearTimer(), [])

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
    >
      {children}
      <span
        role="tooltip"
        className={`
          absolute z-20 whitespace-nowrap border border-cyan-900/50 bg-[#090d12] px-2 py-1
          text-[10px] tracking-wider uppercase text-cyan-300 panel-glow
          transition-opacity duration-150 pointer-events-none
          ${sideMap[side]}
          ${open ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {content}
      </span>
    </span>
  )
}
