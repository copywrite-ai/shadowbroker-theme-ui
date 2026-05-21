import { useState, useEffect } from 'react'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

const navItems = [
  {
    label: 'Components',
    children: [
      { label: 'CollapsiblePanel', id: 'collapsible-panel' },
      { label: 'Dialog', id: 'dialog' },
      { label: 'Tabs', id: 'tabs' },
      { label: 'Button', id: 'button' },
      { label: 'Badge', id: 'badge' },
      { label: 'Toggle', id: 'toggle' },
      { label: 'Tooltip', id: 'tooltip' },
      { label: 'Toast', id: 'toast' },
      { label: 'Input', id: 'input' },
      { label: 'Select', id: 'select' },
      { label: 'DropdownMenu', id: 'dropdown-menu' },
      { label: 'Skeleton', id: 'skeleton' },
      { label: 'Avatar', id: 'avatar' },
    ],
  },
  {
    label: 'Tokens',
    children: [
      { label: 'Design Tokens', id: 'design-tokens' },
      { label: 'Impact Summary', id: 'impact' },
    ],
  },
]

export default function Sidebar({ open, onClose }: SidebarProps) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const sectionIds = navItems.flatMap((g) => g.children.map((c) => c.id))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleClick = (id: string) => {
    onClose()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-[45px] left-0 z-40
          w-56 h-[calc(100vh-45px)]
          border-r border-cyan-900/20
          overflow-y-auto
          transition-transform duration-200
          lg:translate-x-0
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{ background: 'var(--bg-secondary)' }}
      >
        <nav className="py-6 px-3 space-y-1">
          {navItems.map((group) => (
            <div key={group.label} className="mt-6 first:mt-0">
              <div className="text-[10px] tracking-[0.2em] text-gray-600 uppercase px-3 mb-3 font-bold">
                {group.label}
              </div>
              {group.children.map((child) => (
                <a
                  key={child.id}
                  href={`#${child.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleClick(child.id)
                  }}
                  className={`
                    sidebar-link block px-3 py-2 text-[11px] tracking-wider rounded-sm
                    border-l-2 border-transparent
                    ${activeId === child.id
                      ? 'active'
                      : 'text-gray-500 hover:text-cyan-400'
                    }
                  `}
                >
                  {child.label}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}
