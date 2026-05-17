import './Conquest.css'
import Nav from '../../components/Nav/Nav'
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader'
import Footer from '../../components/Footer/Footer'
import NextProject from '../../components/NextProject/NextProject'

function Conquest() {

  return (
    <div className='Conquest'>
        <Nav/>

        <main className='project'>
          <ProjectHeader
            name='Conquest'
            logo='/portfolio/project/Conquest/logo.svg'
            img='/portfolio/project/Conquest/cover.jpg'
            description={<>
            Projekt in Bearbeitung...
            </>}
          />

          <img className='img-project only-mobile' src='/portfolio/project/Conquest/bilder/02.jpg' alt="layout" />
          <img className='img-project no-mobile' src='/portfolio/project/Conquest/bilder/01.jpg' alt="layout" />

          <NextProject thisProject='Conquest'/>

        </main>

        <Footer/>
    </div>
  )
}

export default Conquest