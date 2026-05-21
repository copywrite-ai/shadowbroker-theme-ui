import { useState } from 'react'
import CodeBlock from '../components/CodeBlock'
import BadgeDemo from '../demos/BadgeDemo'
import ButtonDemo from '../demos/ButtonDemo'
import CollapsibleDemo from '../demos/CollapsibleDemo'
import DialogDemo from '../demos/DialogDemo'
import DropdownMenuDemo from '../demos/DropdownMenuDemo'
import AvatarDemo from '../demos/AvatarDemo'
import InputDemo from '../demos/InputDemo'
import SkeletonDemo from '../demos/SkeletonDemo'
import SelectDemo from '../demos/SelectDemo'
import TabsDemo from '../demos/TabsDemo'
import ToastDemo, { useToastDemo } from '../demos/ToastDemo'
import ToggleDemo from '../demos/ToggleDemo'
import TooltipDemo from '../demos/TooltipDemo'

/* ─── Design Tokens data ─── */

const themes = {
  cyan: { label: 'Cyan (Default)', vars: { '--accent-h': '187', '--accent-s': '100%', '--accent-l': '50%' }, color: 'rgb(34, 211, 238)' },
  matrix: { label: 'Matrix Green', vars: { '--accent-h': '142', '--accent-s': '71%', '--accent-l': '45%' }, color: 'rgb(34, 197, 94)' },
  threat: { label: 'Threat Red', vars: { '--accent-h': '0', '--accent-s': '84%', '--accent-l': '60%' }, color: 'rgb(248, 113, 113)' },
}

const swatches = [
  { name: 'bg-primary', value: '#0a0a0a' },
  { name: 'bg-secondary', value: '#080808' },
  { name: 'bg-tertiary', value: '#0f0f0f' },
  { name: 'bg-panel', value: 'rgba(10, 10, 10, 0.92)' },
  { name: 'border-primary', value: 'rgba(8, 145, 178, 0.30)' },
  { name: 'border-secondary', value: 'rgba(8, 145, 178, 0.45)' },
  { name: 'text-primary', value: 'rgb(209, 213, 219)' },
  { name: 'text-secondary', value: 'rgb(34, 211, 238)' },
  { name: 'text-muted', value: 'rgb(8, 145, 178)' },
  { name: 'text-heading', value: 'rgb(207, 250, 254)' },
]

/* ─── Tabs demo data ─── */

const demoTabs = [
  {
    key: 'tickers', label: 'Tickers',
    content: (
      <div className="space-y-1 text-[11px]">
        <div className="flex justify-between"><span className="text-cyan-400">AAPL</span><span className="text-emerald-400">+2.34%</span></div>
        <div className="flex justify-between"><span className="text-cyan-400">TSLA</span><span className="text-red-400">-1.12%</span></div>
        <div className="flex justify-between"><span className="text-cyan-400">NVDA</span><span className="text-emerald-400">+4.67%</span></div>
      </div>
    ),
  },
  {
    key: 'congress', label: 'Congress',
    content: <div className="text-[11px] text-gray-400 space-y-1"><p>Recent congressional trading activity detected in defense sector.</p><p>3 senators disclosed new positions in the last 48 hours.</p></div>,
  },
  {
    key: 'insider', label: 'Insider',
    content: <div className="text-[11px] text-gray-400 space-y-1"><p>Insider buying signals: CEO of Raytheon increased stake by 12%.</p><p>CFO of Lockheed Martin sold $2.4M in shares.</p></div>,
  },
]

/* ─── Main page ─── */

export default function ShowcasePage() {
  const [demoOpen, setDemoOpen] = useState(false)
  const [destructiveOpen, setDestructiveOpen] = useState(false)
  const [layers, setLayers] = useState({
    satellites: true,
    sigint: true,
    maritime: false,
  })
  const [query, setQuery] = useState('')
  const [endpoint, setEndpoint] = useState('wss://feed.shadowbroker.local')
  const [apiKey, setApiKey] = useState('')
  const [source, setSource] = useState('satellite')
  const [menuAction, setMenuAction] = useState('none')
  const toasts = useToastDemo()
  const [activeTheme, setActiveTheme] = useState<keyof typeof themes>('cyan')
  const theme = themes[activeTheme]

  return (
    <div className="space-y-16">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          01 CollapsiblePanel
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="collapsible-panel" className="fade-in">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] tracking-[0.2em] text-cyan-500 font-bold bg-cyan-500/10 px-2 py-0.5 border border-cyan-500/20">01</span>
          <h2 className="text-[12px] tracking-[0.2em] text-cyan-300 font-bold uppercase">CollapsiblePanel</h2>
        </div>
        <p className="text-[11px] text-gray-500 mb-6 leading-relaxed max-w-3xl">
          Each of the 8+ panels repeats the same <code className="text-cyan-400">useState + AnimatePresence + motion.div</code> boilerplate.
          A single <code className="text-cyan-400">CollapsiblePanel</code> component replaces it — pass <code className="text-cyan-400">icon</code>, <code className="text-cyan-400">title</code>, <code className="text-cyan-400">accentColor</code>.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Code */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] tracking-[0.2em] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/20 uppercase">Usage</span>
              <span className="text-[10px] text-gray-600">1 component, 0 boilerplate per usage</span>
            </div>
            <CodeBlock language="tsx">
{`// Usage — anywhere in the app
`}<span className="tag">{'<CollapsiblePanel'}</span>{`
  `}<span className="attr">icon</span>{`=`}<span className="str">{'{<Filter />}'}</span>{`
  `}<span className="attr">title</span>{`=`}<span className="str">{'"Data Filters"'}</span>{`
  `}<span className="attr">accentColor</span>{`=`}<span className="str">{'"cyan"'}</span>{`
  `}<span className="attr">defaultOpen</span>{`=`}<span className="str">{'{false}'}</span>{`
`}<span className="tag">{'>'}</span>{`
  {/* content — no animation boilerplate */}
`}<span className="tag">{'</CollapsiblePanel>'}</span>{`

`}<span className="cmt">{'// Also works for every other panel:'}</span>{`
`}<span className="tag">{'<CollapsiblePanel'}</span>{`
  `}<span className="attr">icon</span>{`=`}<span className="str">{'{<Radio />}'}</span>{`
  `}<span className="attr">title</span>{`=`}<span className="str">{'"Radio Intercept"'}</span>{`
  `}<span className="attr">accentColor</span>{`=`}<span className="str">{'"purple"'}</span>{`
`}<span className="tag">{'>'}</span>{` ... `}<span className="tag">{'</CollapsiblePanel>'}</span>{`

`}<span className="cmt">{'// Component definition (once)'}</span>{`
`}<span className="kw">{'function'}</span>{` `}<span className="fn">{'CollapsiblePanel'}</span>{`({ icon, title,
  accentColor, defaultOpen, children }) {
  `}<span className="kw">{'const'}</span>{` [`}<span className="fn">{'open'}</span>{`, `}<span className="fn">{'setOpen'}</span>{`] =
    `}<span className="fn">{'useState'}</span>{`(defaultOpen ?? `}<span className="kw">{'false'}</span>{`);
  `}<span className="kw">{'const'}</span>{` c = accentMap[accentColor];
  `}<span className="cmt">{'// ... 20 lines, reusable everywhere'}</span>{`
}`}
</CodeBlock>
          </div>

          {/* Live Demo */}
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Live Demo</div>
            <div className="border border-cyan-900/40 bg-[#0a0a0a]/90 rounded-sm panel-glow">
              <div className="bg-cyan-500/5 border-b border-cyan-900/20 px-3 py-1">
                <span className="text-[9px] tracking-[0.2em] text-cyan-400/60 uppercase">Interactive — click to expand</span>
              </div>
              <div className="p-3 space-y-2">
                <CollapsibleDemo icon={<span>◎</span>} title="Data Filters" accentColor="cyan" defaultOpen={false}>
                  <div className="space-y-1.5">
                    {['Commercial Satellites', 'Private Intelligence', 'Military SIGINT', 'Maritime Tracking'].map((item, i) => (
                      <label key={item} className="flex items-center gap-2 text-[11px] text-gray-400 cursor-pointer hover:text-cyan-300 transition-colors">
                        <span className={`w-3 h-3 border rounded-sm flex items-center justify-center ${i === 0 || i === 2 ? 'border-cyan-700/50 bg-cyan-500/10' : 'border-cyan-700/50 bg-transparent'}`}>
                          {(i === 0 || i === 2) && <span className="w-1.5 h-1.5 bg-cyan-400 rounded-[1px]" />}
                        </span>
                        {item}
                      </label>
                    ))}
                  </div>
                </CollapsibleDemo>
                <CollapsibleDemo icon={<span>◈</span>} title="Radio Intercept" accentColor="purple" defaultOpen={false}>
                  <div className="text-[11px] text-gray-400">Radio frequency monitoring panel content.</div>
                </CollapsibleDemo>
                <CollapsibleDemo icon={<span>◉</span>} title="Threat Analysis" accentColor="red" defaultOpen={true}>
                  <div className="text-[11px] text-gray-400">Threat level assessment and analysis data.</div>
                </CollapsibleDemo>
              </div>
            </div>
          </div>
        </div>

        {/* API Reference */}
        <div className="mt-6">
          <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">API Reference</div>
          <div className="overflow-x-auto">
            <table className="w-full text-[11px]">
              <thead><tr className="border-b border-cyan-900/30">
                <th className="text-left py-2 px-3 text-gray-500 tracking-wider uppercase font-bold">Prop</th>
                <th className="text-left py-2 px-3 text-gray-500 tracking-wider uppercase font-bold">Type</th>
                <th className="text-left py-2 px-3 text-gray-500 tracking-wider uppercase font-bold">Default</th>
                <th className="text-left py-2 px-3 text-gray-500 tracking-wider uppercase font-bold">Description</th>
              </tr></thead>
              <tbody className="text-gray-400">
                {([['icon', 'ReactNode', '—', 'Icon in header'], ['title', 'string', '—', 'Panel title'], ['accentColor', '"cyan" | "purple" | "red"', '"cyan"', 'Color accent'], ['defaultOpen', 'boolean', 'false', 'Initial state'], ['children', 'ReactNode', '—', 'Panel content']] as const).map(([prop, type, def, desc]) => (
                  <tr key={prop} className="border-b border-cyan-900/10">
                    <td className="py-2 px-3 text-cyan-400 font-bold">{prop}</td>
                    <td className="py-2 px-3 text-purple-400">{type}</td>
                    <td className="py-2 px-3 text-gray-600">{def}</td>
                    <td className="py-2 px-3">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          02 Dialog
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="dialog" className="fade-in">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] tracking-[0.2em] text-cyan-500 font-bold bg-cyan-500/10 px-2 py-0.5 border border-cyan-500/20">02</span>
          <h2 className="text-[12px] tracking-[0.2em] text-cyan-300 font-bold uppercase">Dialog</h2>
        </div>
        <p className="text-[11px] text-gray-500 mb-6 leading-relaxed max-w-3xl">
          A declarative modal primitive with built-in focus lock, ESC close, and <code className="text-cyan-400">aria</code> attributes.
          No manual <code className="text-cyan-400">keydown</code> handlers or overlay boilerplate needed.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Code */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] tracking-[0.2em] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/20 uppercase">Usage</span>
              <span className="text-[10px] text-gray-600">Declarative, accessible, zero manual keydown</span>
            </div>
            <CodeBlock language="tsx">
{`// Usage — clean, declarative
`}<span className="tag">{'<Dialog'}</span>{` `}<span className="attr">open</span>{`={`}<span className="fn">{'showDelete'}</span>{`} `}<span className="attr">onOpenChange</span>{`={`}<span className="fn">{'setShowDelete'}</span>{`>`}<span className="tag">{'>'}</span>{`
  `}<span className="tag">{'<DialogContent'}</span>{` `}<span className="attr">accentColor</span>{`=`}<span className="str">{'"red"'}</span>{`>`}<span className="tag">{'>'}</span>{`
    `}<span className="tag">{'<DialogHeader>'}</span>{`
      `}<span className="tag">{'<DialogTitle>'}</span>{`Delete Layer?`}<span className="tag">{'</DialogTitle>'}</span>{`
    `}<span className="tag">{'</DialogHeader>'}</span>{`
    `}<span className="tag">{'<DialogBody>'}</span>{`
      This will remove all markers...
    `}<span className="tag">{'</DialogBody>'}</span>{`
    `}<span className="tag">{'<DialogFooter>'}</span>{`
      `}<span className="tag">{'<DialogCancel>'}</span>{`Cancel`}<span className="tag">{'</DialogCancel>'}</span>{`
      `}<span className="tag">{'<DialogAction'}</span>{` `}<span className="attr">variant</span>{`=`}<span className="str">{'"destructive"'}</span>{`>`}<span className="tag">{'>'}</span>{`
        Delete
      `}<span className="tag">{'</DialogAction>'}</span>{`
    `}<span className="tag">{'</DialogFooter>'}</span>{`
  `}<span className="tag">{'</DialogContent>'}</span>{`
`}<span className="tag">{'</Dialog>'}</span>{`

`}<span className="cmt">{'// Built-in: focus trap, ESC, aria attrs,'}</span>{`
`}<span className="cmt">{'// scroll lock, close-on-outside-click'}</span>{`
`}
</CodeBlock>
          </div>

          {/* Live Demo */}
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Live Demo</div>
            <div className="border border-cyan-900/40 bg-[#0a0a0a]/90 rounded-sm panel-glow">
              <div className="bg-cyan-500/5 border-b border-cyan-900/20 px-3 py-1">
                <span className="text-[9px] tracking-[0.2em] text-cyan-400/60 uppercase">Interactive — focus trap, ESC close</span>
              </div>
              <div className="p-3 flex gap-3">
                <button onClick={() => setDemoOpen(true)} className="text-[11px] tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 hover:bg-cyan-500/20 transition-colors font-bold uppercase">
                  Open Dialog
                </button>
                <button onClick={() => setDestructiveOpen(true)} className="text-[11px] tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 px-4 py-2 hover:bg-red-500/20 transition-colors font-bold uppercase">
                  Destructive
                </button>
              </div>
            </div>
          </div>
        </div>

        <DialogDemo open={demoOpen} onOpenChange={setDemoOpen} title="Confirm Deletion" accentColor="cyan"
          footer={<>
            <button onClick={() => setDemoOpen(false)} className="text-[11px] tracking-widest text-gray-400 border border-gray-700 px-3 py-1.5 hover:bg-gray-800/50 transition-colors uppercase">Cancel</button>
            <button onClick={() => setDemoOpen(false)} className="text-[11px] tracking-widest text-red-400 border border-red-900/50 bg-red-500/10 px-3 py-1.5 hover:bg-red-500/20 transition-colors uppercase font-bold">Delete</button>
          </>}
        >
          Are you sure you want to delete the <span className="text-cyan-400">SIGINT Layer</span>? This action cannot be undone and will remove 847 markers from the map.
        </DialogDemo>

        <DialogDemo open={destructiveOpen} onOpenChange={setDestructiveOpen} title="Warning" accentColor="red"
          footer={<>
            <button onClick={() => setDestructiveOpen(false)} className="text-[11px] tracking-widest text-gray-400 border border-gray-700 px-3 py-1.5 hover:bg-gray-800/50 transition-colors uppercase">Abort</button>
            <button onClick={() => setDestructiveOpen(false)} className="text-[11px] tracking-widest text-red-400 border border-red-900/50 bg-red-500/10 px-3 py-1.5 hover:bg-red-500/20 transition-colors uppercase font-bold">Proceed</button>
          </>}
        >
          This will <span className="text-red-400 font-bold">permanently destroy</span> all intercepted data from the last 72 hours. This operation cannot be reversed.
        </DialogDemo>

        {/* API + Accessibility side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">API Reference</div>
            <div className="overflow-x-auto">
              <table className="w-full text-[11px]">
                <thead><tr className="border-b border-cyan-900/30">
                  <th className="text-left py-2 px-3 text-gray-500 tracking-wider uppercase font-bold">Prop</th>
                  <th className="text-left py-2 px-3 text-gray-500 tracking-wider uppercase font-bold">Type</th>
                </tr></thead>
                <tbody className="text-gray-400">
                  {([['open', 'boolean'], ['onOpenChange', '(boolean) => void'], ['accentColor', '"cyan" | "red" | "purple"'], ['children', 'ReactNode']] as const).map(([prop, type]) => (
                    <tr key={prop} className="border-b border-cyan-900/10">
                      <td className="py-2 px-3 text-cyan-400 font-bold">{prop}</td>
                      <td className="py-2 px-3 text-purple-400">{type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Accessibility</div>
            <div className="border border-cyan-900/20 rounded-sm p-3 space-y-2" style={{ background: 'var(--bg-tertiary)' }}>
              {['Focus Trap', 'ESC Close', 'aria-modal', 'aria-labelledby', 'Scroll Lock', 'Close on Outside Click'].map((f) => (
                <div key={f} className="flex items-center gap-2 text-[11px]">
                  <span className="text-emerald-400 text-[10px]">&#10003;</span>
                  <span className="text-gray-400">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          03 Tabs
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="tabs" className="fade-in">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] tracking-[0.2em] text-cyan-500 font-bold bg-cyan-500/10 px-2 py-0.5 border border-cyan-500/20">03</span>
          <h2 className="text-[12px] tracking-[0.2em] text-cyan-300 font-bold uppercase">Tabs</h2>
        </div>
        <p className="text-[11px] text-gray-500 mb-6 leading-relaxed max-w-3xl">
          A unified <code className="text-cyan-400">&lt;TabBar&gt;</code> primitive with keyboard navigation (Arrow keys),
          <code className="text-cyan-400"> aria-selected</code>, and a sliding underline indicator.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Code */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] tracking-[0.2em] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/20 uppercase">Usage</span>
              <span className="text-[10px] text-gray-600">Shared component, keyboard nav, animated indicator</span>
            </div>
            <CodeBlock language="tsx">
{`// Usage — same component everywhere
`}<span className="tag">{'<TabBar'}</span>{`
  `}<span className="attr">tabs</span>{`={[
    { `}<span className="attr">key</span>{`: `}<span className="str">{'\'tickers\''}</span>{`,  `}<span className="attr">label</span>{`: `}<span className="str">{'\'Tickers\''}</span>{`,
      `}<span className="attr">icon</span>{`: `}<span className="str">{'<TrendingUp />'}</span>{` },
    { `}<span className="attr">key</span>{`: `}<span className="str">{'\'congress\''}</span>{`, `}<span className="attr">label</span>{`: `}<span className="str">{'\'Congress\''}</span>{`,
      `}<span className="attr">icon</span>{`: `}<span className="str">{'<Landmark />'}</span>{` },
    { `}<span className="attr">key</span>{`: `}<span className="str">{'\'insider\''}</span>{`,  `}<span className="attr">label</span>{`: `}<span className="str">{'\'Insider\''}</span>{`,
      `}<span className="attr">icon</span>{`: `}<span className="str">{'<Eye />'}</span>{` },
  ]}
  `}<span className="attr">active</span>{`={`}<span className="fn">{'activeTab'}</span>{`}
  `}<span className="attr">onChange</span>{`={`}<span className="fn">{'setActiveTab'}</span>{`}
`}<span className="tag">{'/>'}</span>{`

`}<span className="cmt">{'// Features baked in:'}</span>{`
`}<span className="cmt">{'// - Arrow key navigation (roving tabindex)'}</span>{`
`}<span className="cmt">{'// - aria-selected, role="tablist"'}</span>{`
`}<span className="cmt">{'// - Animated underline indicator'}</span>{`
`}<span className="cmt">{'// - Focus-visible ring'}</span>{`
`}
</CodeBlock>
          </div>

          {/* Live Demo */}
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Live Demo</div>
            <div className="border border-cyan-900/40 bg-[#0a0a0a]/90 rounded-sm panel-glow">
              <div className="bg-cyan-500/5 border-b border-cyan-900/20 px-3 py-1">
                <span className="text-[9px] tracking-[0.2em] text-cyan-400/60 uppercase">Interactive — Arrow keys to navigate</span>
              </div>
              <div className="p-3">
                <TabsDemo tabs={demoTabs} accentColor="cyan" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-[9px] tracking-[0.2em] text-gray-600 mb-2 uppercase">Purple accent variant</div>
              <TabsDemo
                tabs={[
                  { key: 'overview', label: 'Overview', content: <p className="text-[11px] text-gray-400">Overview content here.</p> },
                  { key: 'signals', label: 'Signals', content: <p className="text-[11px] text-gray-400">Signal data here.</p> },
                  { key: 'intel', label: 'Intel', content: <p className="text-[11px] text-gray-400">Intelligence report here.</p> },
                ]}
                accentColor="purple"
              />
            </div>
          </div>
        </div>

        {/* API + Accessibility side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">API Reference</div>
            <div className="overflow-x-auto">
              <table className="w-full text-[11px]">
                <thead><tr className="border-b border-cyan-900/30">
                  <th className="text-left py-2 px-3 text-gray-500 tracking-wider uppercase font-bold">Prop</th>
                  <th className="text-left py-2 px-3 text-gray-500 tracking-wider uppercase font-bold">Type</th>
                </tr></thead>
                <tbody className="text-gray-400">
                  {([['tabs', 'Tab[]'], ['activeTab', 'string'], ['onChange', '(key: string) => void'], ['accentColor', '"cyan" | "purple" | "red"']] as const).map(([prop, type]) => (
                    <tr key={prop} className="border-b border-cyan-900/10">
                      <td className="py-2 px-3 text-cyan-400 font-bold">{prop}</td>
                      <td className="py-2 px-3 text-purple-400">{type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Accessibility</div>
            <div className="border border-cyan-900/20 rounded-sm p-3 space-y-2" style={{ background: 'var(--bg-tertiary)' }}>
              {['role="tablist"', 'role="tab"', 'aria-selected', 'Arrow Key Navigation', 'Home/End Keys', 'Focus Management', 'Sliding Indicator'].map((f) => (
                <div key={f} className="flex items-center gap-2 text-[11px]">
                  <span className="text-emerald-400 text-[10px]">&#10003;</span>
                  <span className="text-gray-400">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          04 Button
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="button" className="fade-in">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] tracking-[0.2em] text-cyan-500 font-bold bg-cyan-500/10 px-2 py-0.5 border border-cyan-500/20">04</span>
          <h2 className="text-[12px] tracking-[0.2em] text-cyan-300 font-bold uppercase">Button</h2>
        </div>
        <p className="text-[11px] text-gray-500 mb-6 leading-relaxed max-w-3xl">
          Unified button variants remove repeated class strings and keep interaction feedback consistent across actions.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Usage</div>
            <CodeBlock language="tsx">
{`<Button variant="primary" size="md">Deploy</Button>
<Button variant="destructive" size="md">Delete</Button>
<Button variant="ghost" size="sm" icon={<Search />}>Search</Button>
<Button variant="outline" size="lg" loading>Syncing</Button>`}
</CodeBlock>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Live Demo</div>
            <div className="border border-cyan-900/40 bg-[#0a0a0a]/90 rounded-sm panel-glow p-3 flex flex-wrap gap-2">
              <ButtonDemo variant="primary" icon={<span>◎</span>}>Deploy</ButtonDemo>
              <ButtonDemo variant="destructive">Terminate</ButtonDemo>
              <ButtonDemo variant="ghost" size="sm">Details</ButtonDemo>
              <ButtonDemo variant="outline" size="lg">Open Layer</ButtonDemo>
              <ButtonDemo variant="primary" loading>Sync</ButtonDemo>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          05 Badge
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="badge" className="fade-in">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] tracking-[0.2em] text-cyan-500 font-bold bg-cyan-500/10 px-2 py-0.5 border border-cyan-500/20">05</span>
          <h2 className="text-[12px] tracking-[0.2em] text-cyan-300 font-bold uppercase">Badge</h2>
        </div>
        <p className="text-[11px] text-gray-500 mb-6 leading-relaxed max-w-3xl">
          Status labels in one primitive for online/offline/severity signals, with optional pulse marker for live states.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Usage</div>
            <CodeBlock language="tsx">
{`<Badge variant="default">TRACKING</Badge>
<Badge variant="success" pulse>ONLINE</Badge>
<Badge variant="warning" pulse>DEGRADED</Badge>
<Badge variant="destructive" pulse>CRITICAL</Badge>`}
</CodeBlock>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Live Demo</div>
            <div className="border border-cyan-900/40 bg-[#0a0a0a]/90 rounded-sm panel-glow p-3 flex flex-wrap items-center gap-2">
              <BadgeDemo variant="default">Tracking</BadgeDemo>
              <BadgeDemo variant="success" pulse>Online</BadgeDemo>
              <BadgeDemo variant="warning" pulse>Degraded</BadgeDemo>
              <BadgeDemo variant="destructive" pulse>Critical</BadgeDemo>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          06 Toggle
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="toggle" className="fade-in">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] tracking-[0.2em] text-cyan-500 font-bold bg-cyan-500/10 px-2 py-0.5 border border-cyan-500/20">06</span>
          <h2 className="text-[12px] tracking-[0.2em] text-cyan-300 font-bold uppercase">Toggle</h2>
        </div>
        <p className="text-[11px] text-gray-500 mb-6 leading-relaxed max-w-3xl">
          Reusable switch for high-density layer controls with consistent keyboard and disabled states.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Usage</div>
            <CodeBlock language="tsx">
{`<Toggle checked={enabled} onChange={setEnabled} />
<Toggle checked={strictMode} onChange={setStrictMode} accentColor="red" />
<Toggle checked={locked} onChange={setLocked} disabled />`}
</CodeBlock>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Live Demo</div>
            <div className="border border-cyan-900/40 bg-[#0a0a0a]/90 rounded-sm panel-glow p-3 space-y-2">
              <div className="flex items-center justify-between text-[11px] text-gray-300">
                <span>Commercial Satellites</span>
                <ToggleDemo checked={layers.satellites} onChange={(checked) => setLayers((prev) => ({ ...prev, satellites: checked }))} />
              </div>
              <div className="flex items-center justify-between text-[11px] text-gray-300">
                <span>Military SIGINT</span>
                <ToggleDemo checked={layers.sigint} onChange={(checked) => setLayers((prev) => ({ ...prev, sigint: checked }))} accentColor="purple" />
              </div>
              <div className="flex items-center justify-between text-[11px] text-gray-300">
                <span>Maritime Tracking</span>
                <ToggleDemo checked={layers.maritime} onChange={(checked) => setLayers((prev) => ({ ...prev, maritime: checked }))} accentColor="red" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          07 Tooltip
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="tooltip" className="fade-in">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] tracking-[0.2em] text-cyan-500 font-bold bg-cyan-500/10 px-2 py-0.5 border border-cyan-500/20">07</span>
          <h2 className="text-[12px] tracking-[0.2em] text-cyan-300 font-bold uppercase">Tooltip</h2>
        </div>
        <p className="text-[11px] text-gray-500 mb-6 leading-relaxed max-w-3xl">
          Lightweight hover and focus hint layer for dense icon groups without external dependencies.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Usage</div>
            <CodeBlock language="tsx">
{`<Tooltip content="Filter Intel" side="top">
  <button>⌕</button>
</Tooltip>
<Tooltip content="Threat Overlay" side="right" delay={180}>
  <button>⚠</button>
</Tooltip>`}
</CodeBlock>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Live Demo</div>
            <div className="border border-cyan-900/40 bg-[#0a0a0a]/90 rounded-sm panel-glow p-3 flex items-center gap-3">
              <TooltipDemo content="Filter Intel" side="top">
                <button className="text-[11px] text-cyan-300 border border-cyan-800/50 px-3 py-1.5 uppercase tracking-widest hover:bg-cyan-500/10">⌕</button>
              </TooltipDemo>
              <TooltipDemo content="Threat Overlay" side="right" delay={180}>
                <button className="text-[11px] text-amber-300 border border-amber-800/50 px-3 py-1.5 uppercase tracking-widest hover:bg-amber-500/10">⚠</button>
              </TooltipDemo>
              <TooltipDemo content="Signal Controls" side="bottom">
                <button className="text-[11px] text-purple-300 border border-purple-800/50 px-3 py-1.5 uppercase tracking-widest hover:bg-purple-500/10">◎</button>
              </TooltipDemo>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          08 Toast
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="toast" className="fade-in">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] tracking-[0.2em] text-cyan-500 font-bold bg-cyan-500/10 px-2 py-0.5 border border-cyan-500/20">08</span>
          <h2 className="text-[12px] tracking-[0.2em] text-cyan-300 font-bold uppercase">Toast</h2>
        </div>
        <p className="text-[11px] text-gray-500 mb-6 leading-relaxed max-w-3xl">
          Compact notification stack with variant styling, auto-dismiss behavior, and manual close support.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Usage</div>
            <CodeBlock language="tsx">
{`toast.info("Feed Synced", "Signals are up to date")
toast.success("Layer Enabled", "SIGINT layer is now active")
toast.warning("Latency Spike", "Data source response > 2s")
toast.error("Connection Lost", "Retrying secure channel")`}
</CodeBlock>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Live Demo</div>
            <div className="border border-cyan-900/40 bg-[#0a0a0a]/90 rounded-sm panel-glow p-3 flex flex-wrap gap-2">
              <ButtonDemo variant="outline" size="sm" onClick={() => toasts.push('info', 'Feed Synced', 'Signals are up to date')}>Info</ButtonDemo>
              <ButtonDemo variant="primary" size="sm" onClick={() => toasts.push('success', 'Layer Enabled', 'SIGINT layer is now active')}>Success</ButtonDemo>
              <ButtonDemo variant="ghost" size="sm" onClick={() => toasts.push('warning', 'Latency Spike', 'Data source response exceeded threshold')}>Warning</ButtonDemo>
              <ButtonDemo variant="destructive" size="sm" onClick={() => toasts.push('error', 'Connection Lost', 'Retrying secure channel')}>Error</ButtonDemo>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          09 Input
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="input" className="fade-in">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] tracking-[0.2em] text-cyan-500 font-bold bg-cyan-500/10 px-2 py-0.5 border border-cyan-500/20">09</span>
          <h2 className="text-[12px] tracking-[0.2em] text-cyan-300 font-bold uppercase">Input</h2>
        </div>
        <p className="text-[11px] text-gray-500 mb-6 leading-relaxed max-w-3xl">
          Text field primitive for search and config entry with label, icon, size variants, and error state.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Usage</div>
            <CodeBlock language="tsx">
{`<Input label="Search Intel" placeholder="Type keyword..." icon={<Search />} />
<Input label="Endpoint" value={url} onChange={setUrl} />
<Input label="API Key" error="API key is required" />
<Input disabled value="Locked by policy" />`}
</CodeBlock>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Live Demo</div>
            <div className="border border-cyan-900/40 bg-[#0a0a0a]/90 rounded-sm panel-glow p-3 space-y-3">
              <InputDemo label="Search Intel" placeholder="Person, org, ticker..." icon={<span>⌕</span>} value={query} onChange={setQuery} />
              <InputDemo label="Feed Endpoint" size="sm" value={endpoint} onChange={setEndpoint} />
              <InputDemo label="API Key" size="lg" placeholder="sk_live_..." value={apiKey} onChange={setApiKey} error={apiKey.length > 0 ? undefined : 'API key is required'} />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          10 Select
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="select" className="fade-in">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] tracking-[0.2em] text-cyan-500 font-bold bg-cyan-500/10 px-2 py-0.5 border border-cyan-500/20">10</span>
          <h2 className="text-[12px] tracking-[0.2em] text-cyan-300 font-bold uppercase">Select</h2>
        </div>
        <p className="text-[11px] text-gray-500 mb-6 leading-relaxed max-w-3xl">
          Simple dropdown selector for feed source and filter controls with consistent menu visuals.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Usage</div>
            <CodeBlock language="tsx">
{`<Select
  options={sources}
  value={source}
  onChange={setSource}
  placeholder="Pick source"
/>`}
</CodeBlock>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Live Demo</div>
            <div className="border border-cyan-900/40 bg-[#0a0a0a]/90 rounded-sm panel-glow p-3 space-y-2">
              <SelectDemo
                options={[
                  { label: 'Satellite Feed', value: 'satellite' },
                  { label: 'SIGINT Network', value: 'sigint' },
                  { label: 'Maritime Relay', value: 'maritime' },
                ]}
                value={source}
                onChange={setSource}
                placeholder="Choose source"
              />
              <div className="text-[10px] text-gray-500 uppercase tracking-[0.16em]">Active: {source}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          11 DropdownMenu
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="dropdown-menu" className="fade-in">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] tracking-[0.2em] text-cyan-500 font-bold bg-cyan-500/10 px-2 py-0.5 border border-cyan-500/20">11</span>
          <h2 className="text-[12px] tracking-[0.2em] text-cyan-300 font-bold uppercase">DropdownMenu</h2>
        </div>
        <p className="text-[11px] text-gray-500 mb-6 leading-relaxed max-w-3xl">
          Compact action menu for contextual operations like duplicate/export/archive/delete.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Usage</div>
            <CodeBlock language="tsx">
{`<DropdownMenu
  align="end"
  items={menuItems}
  onSelect={handleAction}
/>`}
</CodeBlock>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Live Demo</div>
            <div className="border border-cyan-900/40 bg-[#0a0a0a]/90 rounded-sm panel-glow p-3 flex items-center justify-between">
              <DropdownMenuDemo
                align="end"
                triggerLabel="Layer Actions"
                items={[
                  { label: 'Duplicate Layer', value: 'duplicate' },
                  { label: 'Export Snapshot', value: 'export' },
                  { label: 'Archive Layer', value: 'archive' },
                  { label: 'Delete Layer', value: 'delete', tone: 'danger' },
                ]}
                onSelect={setMenuAction}
              />
              <span className="text-[10px] text-gray-500 uppercase tracking-[0.16em]">Last: {menuAction}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          12 Skeleton
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="skeleton" className="fade-in">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] tracking-[0.2em] text-cyan-500 font-bold bg-cyan-500/10 px-2 py-0.5 border border-cyan-500/20">12</span>
          <h2 className="text-[12px] tracking-[0.2em] text-cyan-300 font-bold uppercase">Skeleton</h2>
        </div>
        <p className="text-[11px] text-gray-500 mb-6 leading-relaxed max-w-3xl">
          Loading placeholders for text blocks, list tiles, and profile rows to improve perceived responsiveness.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Usage</div>
            <CodeBlock language="tsx">
{`<Skeleton variant="text" width="70%" />
<Skeleton variant="circular" width={32} height={32} />
<Skeleton variant="rectangular" height={56} />`}
</CodeBlock>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Live Demo</div>
            <div className="border border-cyan-900/40 bg-[#0a0a0a]/90 rounded-sm panel-glow p-3 space-y-3">
              <div className="space-y-1.5">
                <SkeletonDemo variant="text" width="75%" />
                <SkeletonDemo variant="text" width="58%" />
              </div>
              <div className="flex items-center gap-2">
                <SkeletonDemo variant="circular" width={28} height={28} />
                <SkeletonDemo variant="rectangular" width="100%" height={36} />
              </div>
              <SkeletonDemo variant="rectangular" width="100%" height={50} />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          13 Avatar
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="avatar" className="fade-in">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] tracking-[0.2em] text-cyan-500 font-bold bg-cyan-500/10 px-2 py-0.5 border border-cyan-500/20">13</span>
          <h2 className="text-[12px] tracking-[0.2em] text-cyan-300 font-bold uppercase">Avatar</h2>
        </div>
        <p className="text-[11px] text-gray-500 mb-6 leading-relaxed max-w-3xl">
          Avatar primitive with image fallback initials and status indicator for agents, sources, and operators.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Usage</div>
            <CodeBlock language="tsx">
{`<Avatar src={photo} fallback="SB" status="online" />
<Avatar fallback="AI" size="lg" status="busy" />
<Avatar fallback="ML" size="sm" status="offline" />`}
</CodeBlock>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Live Demo</div>
            <div className="border border-cyan-900/40 bg-[#0a0a0a]/90 rounded-sm panel-glow p-3 flex items-center gap-3">
              <AvatarDemo fallback="SB" size="sm" status="online" />
              <AvatarDemo fallback="AI" size="md" status="offline" />
              <AvatarDemo fallback="MK" size="lg" status="busy" />
              <AvatarDemo src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop" fallback="OP" size="md" status="online" />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          14 Design Tokens
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="design-tokens" className="fade-in">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] tracking-[0.2em] text-cyan-500 font-bold bg-cyan-500/10 px-2 py-0.5 border border-cyan-500/20">14</span>
          <h2 className="text-[12px] tracking-[0.2em] text-cyan-300 font-bold uppercase">Design Tokens</h2>
        </div>
        <p className="text-[11px] text-gray-500 mb-6 leading-relaxed max-w-3xl">
          CSS variables + <code className="text-cyan-400">@layer components</code> converge repeated Tailwind strings into semantic tokens.
          Changing the accent from cyan to green requires editing <strong className="text-gray-300">1 variable</strong>, not 200 class strings.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Color tokens */}
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Color Palette</div>
            <div className="space-y-2">
              {swatches.map((s) => (
                <div key={s.name} className="flex items-center gap-3 border border-cyan-900/30 bg-[#0a0a0a]/80 px-3 py-2 rounded-sm">
                  <div className="w-6 h-6 rounded-sm border border-cyan-900/40 shrink-0" style={{ background: s.value }} />
                  <div>
                    <div className="text-[11px] text-cyan-400 font-bold tracking-wider">{s.name}</div>
                    <div className="text-[10px] text-gray-600 font-mono">{s.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CSS Layer */}
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">@layer components</div>
            <CodeBlock language="css">
{`/* Before: repeated in every component */
`}<span className="tag">{'<div'}</span>{` `}<span className="attr">className</span>{`=`}<span className="str">{'"text-[12px] text-cyan-400'}</span>{`
`}<span className="str">{'  font-mono tracking-widest font-bold'}</span>{`
`}<span className="str">{'  uppercase"'}</span>{`>`}<span className="tag">{'>'}</span>{`

/* After: semantic class */
`}<span className="tag">{'<div'}</span>{` `}<span className="attr">className</span>{`=`}<span className="str">{'"hud-heading"'}</span>{`>`}<span className="tag">{'>'}</span>{`

/* ---- CSS ---- */
`}<span className="kw">{'@layer'}</span>{` components {
  .`}<span className="fn">{'hud-heading'}</span>{` {
    `}<span className="attr">font-size</span>{`: `}<span className="str">12px</span>{`;
    `}<span className="attr">color</span>{`: `}<span className="kw">var</span>{`(`}<span className="str">--text-secondary</span>{`);
    `}<span className="attr">font-weight</span>{`: `}<span className="str">700</span>{`;
    `}<span className="attr">letter-spacing</span>{`: `}<span className="str">0.2em</span>{`;
    `}<span className="attr">text-transform</span>{`: `}<span className="str">uppercase</span>{`;
  }
  .`}<span className="fn">{'hud-panel'}</span>{` {
    `}<span className="attr">background</span>{`: `}<span className="kw">var</span>{`(`}<span className="str">--bg-panel</span>{`);
    `}<span className="attr">border</span>{`: `}<span className="str">1px solid var(--border-primary)</span>{`;
    `}<span className="attr">box-shadow</span>{`: `}<span className="str">0 0 20px var(--border-glow)</span>{`;
  }
}`}
</CodeBlock>
          </div>
        </div>

        {/* Theme Switch Demo */}
        <div className="mt-6">
          <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Theme Switching</div>
          <div className="flex gap-2 mb-4">
            {(Object.keys(themes) as Array<keyof typeof themes>).map((key) => (
              <button key={key} onClick={() => setActiveTheme(key)}
                className={`text-[11px] tracking-widest px-3 py-1.5 border uppercase font-bold transition-colors ${activeTheme === key ? 'border-cyan-500/50 bg-cyan-500/10' : 'border-gray-800 text-gray-600 hover:text-gray-400 hover:border-gray-700'}`}
                style={activeTheme === key ? { color: themes[key].color } : undefined}
              >{themes[key].label}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border rounded-sm p-4 panel-glow" style={{ borderColor: `${theme.color}33`, background: 'var(--bg-tertiary)' }}>
              <div className="flex items-center justify-between px-3 py-2.5 border-b mb-3" style={{ borderColor: `${theme.color}33` }}>
                <span className="text-[12px] font-mono tracking-widest font-bold" style={{ color: theme.color, textShadow: `0 0 10px ${theme.color}73, 0 0 20px ${theme.color}26` }}>PANEL HEADER</span>
                <svg className="w-3 h-3" style={{ color: theme.color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
              </div>
              <div className="text-[11px] text-gray-400 mb-3">This panel uses <span style={{ color: theme.color }}>{theme.vars['--accent-h']}</span> as the accent hue.</div>
              <div className="flex gap-2">
                <span className="text-[10px] tracking-widest px-2.5 py-1 border uppercase font-bold" style={{ color: theme.color, borderColor: `${theme.color}33`, background: `${theme.color}1a` }}>Action</span>
                <span className="text-[10px] tracking-widest text-gray-500 border border-gray-700 px-2.5 py-1 uppercase">Cancel</span>
              </div>
            </div>
            <div>
              <CodeBlock language="css">
{`/* One variable to rule them all */
:root {
  `}<span className="attr">--accent-h</span>{`: `}<span className="str">187</span>{`;   `}<span className="cmt">/* cyan */</span>{`
  `}<span className="attr">--accent-s</span>{`: `}<span className="str">100%</span>{`;
  `}<span className="attr">--accent-l</span>{`: `}<span className="str">50%</span>{`;
}
/* Derived from accent */
`}<span className="attr">--text-secondary</span>{`: `}<span className="kw">hsl</span>{`(`}<span className="kw">var</span>{`(`}<span className="str">--accent-h</span>{`) ...);
`}<span className="attr">--border-primary</span>{`: `}<span className="kw">hsla</span>{`(`}<span className="kw">var</span>{`(`}<span className="str">--accent-h</span>{`) 80% 40% / 0.3);

/* Swap theme */
[`}<span className="attr">data-theme</span>{`=`}<span className="str">"matrix"</span>{`] {
  `}<span className="attr">--accent-h</span>{`: `}<span className="str">142</span>{`;  `}<span className="cmt">/* green */</span>{`
}
[`}<span className="attr">data-theme</span>{`=`}<span className="str">"threat"</span>{`] {
  `}<span className="attr">--accent-h</span>{`: `}<span className="str">0</span>{`;    `}<span className="cmt">/* red */</span>{`
}`}
</CodeBlock>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          15 Impact Summary
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="impact" className="fade-in">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] tracking-[0.2em] text-cyan-500 font-bold bg-cyan-500/10 px-2 py-0.5 border border-cyan-500/20">15</span>
          <h2 className="text-[12px] tracking-[0.2em] text-cyan-300 font-bold uppercase">Impact Summary</h2>
        </div>
        <p className="text-[11px] text-gray-500 mb-6 leading-relaxed max-w-3xl">
          The migration from copy-paste boilerplate to shared primitives delivers measurable improvements.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {([{ value: '~540', label: 'Lines Eliminated', color: 'text-red-400' }, { value: '3', label: 'Shared Primitives', color: 'text-cyan-400' }, { value: '1', label: 'Variable to Theme', color: 'text-emerald-400' }]).map((s) => (
            <div key={s.label} className="border border-cyan-900/20 rounded-sm p-4 text-center panel-glow" style={{ background: 'var(--bg-tertiary)' }}>
              <div className={`text-2xl font-bold ${s.color} text-glow`}>{s.value}</div>
              <div className="text-[10px] tracking-widest text-gray-600 uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Motivation + Quick Start side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Motivation</div>
            <div className="border border-cyan-900/20 rounded-sm p-4" style={{ background: 'var(--bg-tertiary)' }}>
              <ul className="space-y-2 text-[11px] text-gray-500">
                {([['~540 lines', 'of duplicated boilerplate across 8+ panels'], ['Inconsistent behavior', '— some had ESC-close, others didn\'t'], ['No keyboard navigation', 'in tab bars, no ARIA attributes'], ['Theme changes', 'required editing every panel file']] as const).map(([bold, rest]) => (
                  <li key={bold} className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    <span><strong className="text-gray-300">{bold}</strong> {rest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 mb-3 uppercase">Quick Start</div>
            <div className="space-y-3">
              <div>
                <p className="text-[10px] text-gray-500 mb-1.5 tracking-wider">1. Import the primitive</p>
                <CodeBlock language="tsx">
{`import { CollapsiblePanel } from `}<span className="str">'@/components/ui/collapsible-panel'</span>{`
import { Dialog } from `}<span className="str">'@/components/ui/dialog'</span>{`
import { TabBar } from `}<span className="str">'@/components/ui/tab-bar'</span>{`
`}
</CodeBlock>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 mb-1.5 tracking-wider">2. Replace boilerplate (4 lines vs 28)</p>
                <CodeBlock language="tsx">
{`// Before: 28 lines of useState + AnimatePresence
// After: 4 lines
`}<span className="tag">{'<CollapsiblePanel'}</span>{` `}<span className="attr">icon</span>{`={`}<span className="str">{'<Filter />'}</span>{`} `}<span className="attr">title</span>{`=`}<span className="str">{'"Filters"'}</span>{` `}<span className="attr">accentColor</span>{`=`}<span className="str">{'"cyan"'}</span>{`>`}<span className="tag">{'>'}</span>{`
  `}<span className="tag">{'<FilterContent />'}</span>{`
`}<span className="tag">{'</CollapsiblePanel>'}</span>{`
`}
</CodeBlock>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ToastDemo items={toasts.items} onClose={toasts.close} />

    </div>
  )
}
