import './Caflex.css'
import Nav from '../../components/Nav/Nav'
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader'

function Caflex() {

  return (
    <div className='Caflex'>
        <Nav/>
        <ProjectHeader
        name='Caflex'
        logo='/project/Caflex/logo.svg'
        img='/project/Caflex/cover.jpg'
        description={<>
        Placeholder
        <br /><br />
        Placeholder
        </>}
        />
    </div>
  )
}

export default Caflex