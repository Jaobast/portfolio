import './Sprout.css'
import Nav from '../../components/Nav/Nav'
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader'
import Footer from '../../components/Footer/Footer'
import NextProject from '../../components/NextProject/NextProject'

function Sprout() {

  return (
    <div className='Sprout'>
        <Nav/>

        <main className='project'>
          <ProjectHeader
              name='Sprout Lounge'
              logo='/portfolio/project/Sprout/logo.svg'
              img='/portfolio/project/Sprout/cover.jpg'
              description={<>
              ...
              </>}
          />

          <img className='img-project no-mobile' src='/portfolio/project/Sprout/bilder/01.jpg' alt="layout" />
          <img className='img-project only-mobile' src='/portfolio/project/Sprout/bilder/02.jpg' alt="layout" />

          <NextProject thisProject='Sprout'/>

        </main>

        <Footer/>
    </div>
  )
}

export default Sprout