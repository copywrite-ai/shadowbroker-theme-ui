import type { ReactNode } from 'react'
import Panel from '../components/ui/Panel'

interface CollapsiblePanelProps {
  icon?: ReactNode
  title: string
  accentColor?: 'cyan' | 'purple' | 'red'
  defaultOpen?: boolean
  children: ReactNode
}

export default function CollapsibleDemo({
  icon,
  title,
  accentColor = 'cyan',
  defaultOpen = false,
  children,
}: CollapsiblePanelProps) {
  return (
    <Panel
      title={title}
      icon={icon}
      accentColor={accentColor}
      collapsible
      defaultOpen={defaultOpen}
    >
      {children}
    </Panel>
  )
}
