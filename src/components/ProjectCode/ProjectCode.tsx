// ProjectCode.tsx
import React from 'react'
import './ProjectCode.css'

interface CodeLine {
  content: React.ReactNode
  indent?: number
  gap?: number
}

interface ProjectCodeProps {
  lines: CodeLine[]
}

export default function ProjectCode({ lines }: ProjectCodeProps) {
  return (
    <div className="ProjectCode">
      <div className="text-block">
        {lines.map((line, index) => (
          <div key={index} className={`line ${line.gap ? 'line' + line.gap : ''}`}>
            <p className="code-num">{index + 1}</p>
            <p className="code-text">{line.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}