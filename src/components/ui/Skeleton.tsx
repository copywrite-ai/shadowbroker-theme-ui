export interface SkeletonProps {
  width?: string | number
  height?: string | number
  variant?: 'text' | 'circular' | 'rectangular'
}

export default function Skeleton({
  width = '100%',
  height,
  variant = 'rectangular',
}: SkeletonProps) {
  const resolvedHeight = height ?? (variant === 'text' ? 10 : variant === 'circular' ? 32 : 56)
  const radiusClass = variant === 'circular' ? 'rounded-full' : variant === 'text' ? 'rounded-[2px]' : 'rounded-sm'

  return (
    <span
      className={`block bg-cyan-500/10 border border-cyan-900/30 ${radiusClass} animate-pulse`}
      style={{ width, height: resolvedHeight }}
      aria-hidden="true"
    />
  )
}
