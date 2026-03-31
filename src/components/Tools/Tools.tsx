import ToolItem from './ToolItem'
import './Tools.css'

type ToolsProps = {
  tools?: {
    key: string
    label: string
  }[]
}

function Tools({ tools = [] }: ToolsProps) {
  return (
    <div className="Tools">
      {tools.map(tool => (
        <ToolItem
          key={tool.key}
          svgKey={tool.key}
          label={tool.label}
        />
      ))}
    </div>
  )
}

export default Tools


/* tools={[
  { key: 'icon-figma', label: 'Figma'},
  { key: 'icon-ae', label: 'AfterEffects'},
  { key: 'icon-ai', label: 'Illustrator'},
  { key: 'icon-id', label: 'InDesign'},
  { key: 'icon-ps', label: 'Photoshop'},
  { key: 'icon-css', label: 'CSS'},
  { key: 'icon-html', label: 'HTML'},
  { key: 'icon-js', label: 'JavaScript'},
  { key: 'icon-py', label: 'Python'},
  { key: 'icon-react', label: 'React'},
  { key: 'icon-sql', label: 'SQL'},
  { key: 'icon-django', label: 'Django'},
  { key: 'icon-firebase', label: 'Firebase'},
  { key: 'icon-git', label: 'Github'},
  { key: 'icon-node', label: 'Node.js'},
  { key: 'icon-tsx', label: 'TypeScript'},
]} */