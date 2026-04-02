import './Caflex.css'
import Nav from '../../components/Nav/Nav'
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader'

function Caflex() {

  return (
    <div className='Caflex project'>
        <Nav/>
        <ProjectHeader
        name='Caflex'
        logo='/portfolio/project/Caflex/logo.svg'
        img='/portfolio/project/Caflex/cover.jpg'
        description={<>
        Placeholder
        <br /><br />
        Placeholder
        </>}
        tools={[
            { key: 'icon-react', label: 'React'},
            { key: 'icon-node', label: 'Node.js'},
            { key: 'icon-tsx', label: 'TypeScript'},
            { key: 'icon-html', label: 'HTML'},
            { key: 'icon-css', label: 'CSS'},
            { key: 'icon-js', label: 'JavaScript'},
            { key: 'icon-figma', label: 'Figma'},
            { key: 'icon-git', label: 'Github'},
          ]}
        />

        <img className='img-project height no-mobile' src="/portfolio/project/Caflex/bilder/01.png" alt="bild" />
        <img className='img-project only-mobile' src="/portfolio/project/Caflex/bilder/02.png" alt="bild" />
    </div>
  )
}

export default Caflex