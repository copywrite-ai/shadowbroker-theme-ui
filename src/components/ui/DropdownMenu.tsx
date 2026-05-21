import { useEffect, useRef, useState } from 'react'

export interface DropdownItem {
  label: string
  value: string
  tone?: 'default' | 'danger'
}

export interface DropdownMenuProps {
  items: DropdownItem[]
  align?: 'start' | 'end'
  onSelect: (value: string) => void
  triggerLabel?: string
}

export default function DropdownMenu({
  items,
  align = 'end',
  onSelect,
  triggerLabel = 'Actions',
}: DropdownMenuProps) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={wrapRef} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="h-9 px-3 text-[11px] uppercase tracking-widest border border-cyan-800/50 text-cyan-300 hover:bg-cyan-500/10 rounded-sm"
      >
        {triggerLabel}
      </button>
      {open && (
        <div className={`absolute z-30 mt-1 min-w-[170px] border border-cyan-900/50 bg-[#070b10] rounded-sm overflow-hidden panel-glow ${align === 'end' ? 'right-0' : 'left-0'}`}>
          {items.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => {
                onSelect(item.value)
                setOpen(false)
              }}
              className={`
                w-full text-left px-3 py-2 text-[11px] uppercase tracking-wider
                ${item.tone === 'danger' ? 'text-red-300 hover:bg-red-500/10' : 'text-gray-300 hover:bg-cyan-500/8'}
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
