import { useState } from 'react'

export interface AvatarProps {
  src?: string
  fallback: string
  size?: 'sm' | 'md' | 'lg'
  status?: 'online' | 'offline' | 'busy'
}

const sizeMap = {
  sm: 'w-7 h-7 text-[10px]',
  md: 'w-9 h-9 text-[11px]',
  lg: 'w-12 h-12 text-[12px]',
}

const statusMap = {
  online: 'bg-emerald-400',
  offline: 'bg-gray-500',
  busy: 'bg-red-400',
}

export default function Avatar({
  src,
  fallback,
  size = 'md',
  status = 'offline',
}: AvatarProps) {
  const [broken, setBroken] = useState(false)
  const showImage = Boolean(src) && !broken

  return (
    <span className="relative inline-flex">
      <span
        className={`
          inline-flex items-center justify-center rounded-full overflow-hidden
          border border-cyan-900/40 bg-[#0a0f14] text-cyan-300 font-bold tracking-wider
          ${sizeMap[size]}
        `}
      >
        {showImage ? (
          <img src={src} alt={fallback} className="w-full h-full object-cover" onError={() => setBroken(true)} />
        ) : (
          fallback.slice(0, 2).toUpperCase()
        )}
      </span>
      <span className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border border-[#0a0a0a] ${statusMap[status]}`} />
    </span>
  )
}
