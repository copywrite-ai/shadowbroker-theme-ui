import { useEffect, useMemo, useState } from 'react'

export type ToastVariant = 'info' | 'success' | 'warning' | 'error'

export interface ToastItem {
  id: number
  title: string
  message: string
  variant: ToastVariant
}

export interface ToastProps {
  items: ToastItem[]
  onClose: (id: number) => void
}

const variantMap: Record<ToastVariant, string> = {
  info: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300',
  success: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
  warning: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
  error: 'border-red-500/40 bg-red-500/10 text-red-300',
}

export function useToast() {
  const [items, setItems] = useState<ToastItem[]>([])
  const nextId = useMemo(() => ({ value: 1 }), [])

  const push = (variant: ToastVariant, title: string, message: string) => {
    const id = nextId.value++
    setItems((prev) => [...prev, { id, variant, title, message }])
    window.setTimeout(() => {
      setItems((prev) => prev.filter((item) => item.id !== id))
    }, 3200)
  }

  const close = (id: number) => setItems((prev) => prev.filter((item) => item.id !== id))

  return { items, push, close }
}

export default function Toast({ items, onClose }: ToastProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && items.length > 0) {
        onClose(items[items.length - 1].id)
      }
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [items, onClose])

  return (
    <div className="fixed top-16 right-4 z-50 space-y-2 w-[320px] max-w-[calc(100vw-2rem)]">
      {items.map((item) => (
        <div
          key={item.id}
          role="status"
          className={`
            border rounded-sm px-3 py-2 panel-glow animate-[fadeIn_0.2s_ease]
            ${variantMap[item.variant]}
          `}
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="text-[10px] tracking-[0.18em] uppercase font-bold">{item.title}</div>
              <div className="text-[10px] text-gray-300 mt-1 leading-relaxed">{item.message}</div>
            </div>
            <button
              type="button"
              onClick={() => onClose(item.id)}
              className="text-[10px] text-gray-500 hover:text-gray-200"
              aria-label="Close toast"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
