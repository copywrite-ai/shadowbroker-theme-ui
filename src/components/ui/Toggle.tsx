export interface ToggleProps {
  checked: boolean
  onChange: (checked: boolean) => void
  size?: 'sm' | 'md'
  disabled?: boolean
  accentColor?: 'cyan' | 'purple' | 'red'
}

const sizeMap = {
  sm: {
    track: 'w-8 h-4',
    thumb: 'w-3 h-3',
    on: 'translate-x-4',
    off: 'translate-x-0.5',
  },
  md: {
    track: 'w-10 h-5',
    thumb: 'w-4 h-4',
    on: 'translate-x-5',
    off: 'translate-x-0.5',
  },
}

const accentMap = {
  cyan: 'bg-cyan-500/30 border-cyan-500/40',
  purple: 'bg-purple-500/30 border-purple-500/40',
  red: 'bg-red-500/30 border-red-500/40',
}

export default function Toggle({
  checked,
  onChange,
  size = 'md',
  disabled = false,
  accentColor = 'cyan',
}: ToggleProps) {
  const s = sizeMap[size]

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`
        relative inline-flex items-center rounded-full border transition-colors duration-200
        ${s.track}
        ${checked ? accentMap[accentColor] : 'bg-gray-900 border-gray-700'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      <span
        className={`
          inline-block rounded-full bg-gray-200 transition-transform duration-200
          ${s.thumb}
          ${checked ? s.on : s.off}
        `}
      />
    </button>
  )
}
