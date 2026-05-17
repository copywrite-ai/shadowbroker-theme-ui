import { useEffect, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  children: ReactNode
  accentColor?: 'cyan' | 'red' | 'purple'
  footer?: ReactNode
}

const accentMap = {
  cyan: 'border-cyan-900/50',
  red: 'border-red-900/50',
  purple: 'border-purple-900/50',
}

export default function DialogDemo({
  open,
  onOpenChange,
  title,
  children,
  accentColor = 'cyan',
  footer,
}: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onOpenChange(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onOpenChange])

  // Focus trap
  useEffect(() => {
    if (open && dialogRef.current) {
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (focusable.length > 0) focusable[0].focus()
    }
  }, [open])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onOpenChange(false)
  }

  return createPortal(
    <div
      className="dialog-backdrop"
      data-open={open}
      onClick={handleBackdropClick}
    >
      <div
        ref={dialogRef}
        className={`bg-[#0d0d1a] border-2 ${accentMap[accentColor]} font-mono w-[400px] max-w-[90vw] rounded-sm shadow-[0_0_40px_rgba(6,182,212,0.08)]`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        {/* Header — px-3 py-2.5 like Shadowbroker panels */}
        <div className="bg-cyan-900/20 border-b border-cyan-900/40 px-3 py-2.5 flex justify-between items-center">
          <span id="dialog-title" className="text-[12px] tracking-widest text-cyan-400 font-bold uppercase">
            {title}
          </span>
          <button
            onClick={() => onOpenChange(false)}
            className="text-gray-500 hover:text-cyan-400 transition-colors text-[11px]"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-4 text-[12px] text-gray-300 leading-relaxed">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="flex gap-2 p-4 pt-0 justify-end">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}
