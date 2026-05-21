import type { ReactNode } from 'react'
import List, { type ListItem } from './List'
import Panel from './Panel'

export interface ListPanelProps {
  title: string
  items: ListItem[]
  icon?: ReactNode
  accentColor?: 'cyan' | 'purple' | 'red'
  opacity?: number
  maxBodyHeight?: number
  collapsible?: boolean
  defaultOpen?: boolean
}

export default function ListPanel({
  title,
  items,
  icon,
  accentColor = 'cyan',
  opacity = 1,
  maxBodyHeight = 260,
  collapsible = true,
  defaultOpen = true,
}: ListPanelProps) {
  return (
    <Panel
      title={title}
      icon={icon}
      accentColor={accentColor}
      opacity={opacity}
      collapsible={collapsible}
      defaultOpen={defaultOpen}
      scrollable
      maxBodyHeight={maxBodyHeight}
    >
      <List items={items} bordered={false} divided />
    </Panel>
  )
}
