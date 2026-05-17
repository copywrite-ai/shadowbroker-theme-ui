import { useState, useRef, useEffect, useCallback } from 'react'

interface Tab {
  key: string
  label: string
  content: React.ReactNode
}

interface TabsDemoProps {
  tabs: Tab[]
  accentColor?: 'cyan' | 'purple' | 'red'
}

const accentMap = {
  cyan: {
    active: 'text-cyan-400',
    indicator: 'bg-cyan-400',
    shadow: '0 0 8px rgba(34, 211, 238, 0.4)',
  },
  purple: {
    active: 'text-purple-400',
    indicator: 'bg-purple-400',
    shadow: '0 0 8px rgba(192, 132, 252, 0.4)',
  },
  red: {
    active: 'text-red-400',
    indicator: 'bg-red-400',
    shadow: '0 0 8px rgba(248, 113, 113, 0.4)',
  },
}

export default function TabsDemo({ tabs, accentColor = 'cyan' }: TabsDemoProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })

  const c = accentMap[accentColor]

  const updateIndicator = useCallback(() => {
    const el = tabRefs.current[activeIndex]
    if (el) {
      setIndicatorStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      })
    }
  }, [activeIndex])

  useEffect(() => {
    updateIndicator()
  }, [updateIndicator])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    let newIndex = activeIndex
    if (e.key === 'ArrowRight') newIndex = (activeIndex + 1) % tabs.length
    if (e.key === 'ArrowLeft') newIndex = (activeIndex - 1 + tabs.length) % tabs.length
    if (e.key === 'Home') newIndex = 0
    if (e.key === 'End') newIndex = tabs.length - 1

    if (newIndex !== activeIndex) {
      e.preventDefault()
      setActiveIndex(newIndex)
      tabRefs.current[newIndex]?.focus()
    }
  }

  return (
    <div className="border border-cyan-900/30 rounded-sm panel-glow overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      {/* Tab list — px-2 py-0.5 per tab like Shadowbroker */}
      <div
        className="relative flex border-b border-cyan-900/40"
        role="tablist"
        onKeyDown={handleKeyDown}
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.key}
            ref={(el) => { tabRefs.current[i] = el }}
            role="tab"
            aria-selected={i === activeIndex}
            tabIndex={i === activeIndex ? 0 : -1}
            onClick={() => setActiveIndex(i)}
            className={`
              px-3 py-2 text-[11px] tracking-widest font-bold uppercase
              transition-colors relative z-10
              ${i === activeIndex ? c.active : 'text-gray-600 hover:text-gray-400'}
            `}
          >
            {tab.label}
          </button>
        ))}
        {/* Sliding indicator */}
        <div
          className={`tab-underline ${c.indicator}`}
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
            boxShadow: c.shadow,
          }}
        />
      </div>

      {/* Tab panels */}
      <div className="p-3">
        {tabs.map((tab, i) => (
          <div
            key={tab.key}
            role="tabpanel"
            hidden={i !== activeIndex}
            className="text-[12px] text-gray-300"
          >
            {i === activeIndex && tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
