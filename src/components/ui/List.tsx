import type { ReactNode } from 'react'

export interface ListItem {
  id: string
  title: string
  description?: string
  status?: 'default' | 'success' | 'warning' | 'error'
  rightSlot?: ReactNode
}

export interface ListProps {
  items: ListItem[]
  size?: 'sm' | 'md'
  bordered?: boolean
  divided?: boolean
}

const sizeMap = {
  sm: {
    item: 'px-2.5 py-2',
    title: 'text-[10px]',
    desc: 'text-[9px]',
  },
  md: {
    item: 'px-3 py-2.5',
    title: 'text-[11px]',
    desc: 'text-[10px]',
  },
}

const statusMap = {
  default: 'bg-cyan-400',
  success: 'bg-emerald-400',
  warning: 'bg-amber-400',
  error: 'bg-red-400',
}

export default function List({
  items,
  size = 'md',
  bordered = true,
  divided = true,
}: ListProps) {
  const s = sizeMap[size]

  return (
    <ul className={`${bordered ? 'border border-cyan-900/40 rounded-sm overflow-hidden panel-glow bg-[#0a0a0a]/90' : ''}`}>
      {items.map((item, index) => (
        <li
          key={item.id}
          className={`
            flex items-center justify-between gap-3
            ${s.item}
            ${divided && index < items.length - 1 ? 'border-b border-cyan-900/20' : ''}
          `}
        >
          <div className="min-w-0 flex items-start gap-2">
            <span className={`mt-1 inline-block w-1.5 h-1.5 rounded-full ${statusMap[item.status ?? 'default']}`} />
            <div className="min-w-0">
              <div className={`${s.title} uppercase tracking-wider text-gray-300 truncate`}>{item.title}</div>
              {item.description && <div className={`${s.desc} mt-0.5 text-gray-500 truncate`}>{item.description}</div>}
            </div>
          </div>
          {item.rightSlot && <div className="shrink-0">{item.rightSlot}</div>}
        </li>
      ))}
    </ul>
  )
}
