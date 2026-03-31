import { useState } from 'react'
import { ToolIcons } from './ToolIcons'

function ToolItem({ svgKey, label }: { svgKey: string, label: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="tool-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {ToolIcons[svgKey]}
      {hovered && <p className="tool-name">{label}</p>}
    </div>
  )
}

export default ToolItem