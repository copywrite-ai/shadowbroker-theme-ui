import type { ReactNode } from 'react'

export interface ButtonProps {
  variant?: 'primary' | 'destructive' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
  icon?: ReactNode
  children: ReactNode
  onClick?: () => void
}

const variantMap = {
  primary: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/30 hover:bg-cyan-500/20',
  destructive: 'text-red-300 bg-red-500/10 border-red-500/30 hover:bg-red-500/20',
  ghost: 'text-gray-300 bg-transparent border-transparent hover:bg-cyan-500/10 hover:text-cyan-300',
  outline: 'text-cyan-300 bg-transparent border-cyan-800/50 hover:bg-cyan-500/10',
}

const sizeMap = {
  sm: 'text-[10px] px-2.5 py-1.5 gap-1.5',
  md: 'text-[11px] px-3.5 py-2 gap-2',
  lg: 'text-[12px] px-4 py-2.5 gap-2',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon,
  children,
  onClick,
}: ButtonProps) {
  const isDisabled = disabled || loading

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center rounded-sm border font-bold uppercase tracking-widest
        transition-colors duration-150 panel-glow
        ${variantMap[variant]}
        ${sizeMap[size]}
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
      aria-busy={loading}
    >
      {loading ? (
        <span className="inline-block w-3 h-3 rounded-full border border-current border-t-transparent animate-spin" />
      ) : icon ? (
        <span aria-hidden="true" className="text-[10px]">{icon}</span>
      ) : null}
      <span>{children}</span>
    </button>
  )
}
