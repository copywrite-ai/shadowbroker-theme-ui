interface SliderProps {
  min?: number
  max?: number
  step?: number
  value: number
  onChange: (value: number) => void
  disabled?: boolean
  label?: string
}

export default function Slider({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  disabled = false,
  label,
}: SliderProps) {
  const percent = ((value - min) / (max - min)) * 100

  return (
    <label className="block space-y-1.5">
      {label && (
        <span className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-gray-500">
          <span>{label}</span>
          <span className="text-cyan-300">{value}</span>
        </span>
      )}
      <div className="relative">
        <div className="h-1.5 rounded-full bg-cyan-950/40 border border-cyan-900/30 overflow-hidden">
          <div className="h-full bg-cyan-400/70" style={{ width: `${percent}%` }} />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
        />
      </div>
    </label>
  )
}
