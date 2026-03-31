import './Praxis.css'
import Nav from '../../components/Nav/Nav'
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader'

function Praxis() {

  return (
    <div className='Praxis'>
        <Nav/>
        <ProjectHeader
        name='Praxis'
        logo='/project/Praxis/logo.svg'
        img='/project/Praxis/cover.jpg'
        description={<>
        Placeholder
        <br /><br />
        Placeholder
        </>}
        />
    </div>
  )
}

export default Praxis