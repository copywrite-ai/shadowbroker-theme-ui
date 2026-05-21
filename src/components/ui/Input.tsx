import type { ReactNode } from 'react'

export interface InputProps {
  label?: string
  placeholder?: string
  icon?: ReactNode
  error?: string
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  value: string
  onChange: (value: string) => void
}

const sizeMap = {
  sm: 'text-[10px] h-8',
  md: 'text-[11px] h-9',
  lg: 'text-[12px] h-10',
}

export default function Input({
  label,
  placeholder,
  icon,
  error,
  disabled = false,
  size = 'md',
  value,
  onChange,
}: InputProps) {
  return (
    <label className="block space-y-1.5">
      {label && <span className="text-[10px] tracking-[0.18em] uppercase text-gray-500">{label}</span>}
      <span
        className={`
          flex items-center gap-2 border rounded-sm px-2.5 transition-colors
          ${sizeMap[size]}
          ${error ? 'border-red-500/50 bg-red-500/5' : 'border-cyan-900/40 bg-[#0a0a0a]/90'}
          ${disabled ? 'opacity-60' : 'focus-within:border-cyan-500/50'}
        `}
      >
        {icon && <span className="text-gray-500 text-[10px]">{icon}</span>}
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full bg-transparent outline-none text-gray-300 placeholder:text-gray-600"
          aria-invalid={Boolean(error)}
        />
      </span>
      {error && <span className="text-[10px] text-red-300 tracking-[0.08em]">{error}</span>}
    </label>
  )
}
