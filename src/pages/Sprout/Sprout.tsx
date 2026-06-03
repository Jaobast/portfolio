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
              Sprout Run ist ein Mobile Endless-Runner Game, bei dem Gemüsefiguren vor hungrigen Monstern fliehen müssen.
              <br/><br/>
              Zu meinen Aufgaben gehörten das Game Design, die Entwicklung des visuellen Konzepts sowie die Gestaltung sämtlicher Illustrationen und UI-Elemente.
              </>}
              descriptionEn={<>
              Sprout Run is a mobile endless runner game where vegetable characters must flee from hungry monsters. 
              <br/><br/>
              My responsibilities included the game design, the development of the visual concept, as well as the creation of all illustrations and UI elements.
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