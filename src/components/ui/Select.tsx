import { useEffect, useRef, useState } from 'react'

export interface SelectOption {
  label: string
  value: string
}

export interface SelectProps {
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  disabled?: boolean
}

export default function Select({
  options,
  value,
  onChange,
  placeholder = 'Select option',
  disabled = false,
}: SelectProps) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const active = options.find((opt) => opt.value === value)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen((v) => !v)}
        className={`
          w-full h-9 px-2.5 text-[11px] uppercase tracking-wider
          border rounded-sm flex items-center justify-between
          ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
          border-cyan-900/40 bg-[#0a0a0a]/90 text-gray-300 hover:border-cyan-500/40
        `}
      >
        <span className={active ? 'text-gray-300' : 'text-gray-600'}>{active?.label ?? placeholder}</span>
        <span className={`text-cyan-400 transition-transform ${open ? 'rotate-180' : ''}`}>⌄</span>
      </button>
      {open && (
        <div className="absolute z-30 mt-1 w-full border border-cyan-900/50 bg-[#070b10] rounded-sm overflow-hidden panel-glow">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value)
                setOpen(false)
              }}
              className={`
                w-full text-left px-2.5 py-2 text-[11px] uppercase tracking-wider
                ${opt.value === value ? 'text-cyan-300 bg-cyan-500/10' : 'text-gray-400 hover:bg-cyan-500/8'}
              `}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
