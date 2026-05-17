import { useState, useRef, type ReactNode } from 'react'

interface CodeBlockProps {
  children: ReactNode
  language?: string
}

export default function CodeBlock({ children, language = 'tsx' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const preRef = useRef<HTMLPreElement>(null)

  const handleCopy = async () => {
    const text = preRef.current?.textContent ?? ''
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      {/* Language badge + copy button */}
      <div className="absolute top-0 right-0 flex items-center gap-2">
        <span className="text-[9px] tracking-widest text-gray-600 uppercase px-2 py-1">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="text-[10px] tracking-wider text-gray-600 hover:text-cyan-400 transition-colors px-2 py-1 uppercase opacity-0 group-hover:opacity-100"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre ref={preRef} className="code-block">
        <code>{children}</code>
      </pre>
    </div>
  )
}
