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
            Conquest ist ein mittelalterliches Strategiespiel, in dem der Spieler Provinzen erobert, Ressourcen verwaltet und Armeen durch taktische Schlachten führt.
            <br/> <br/>
            Zu meinen Aufgaben gehörten das Game Design, die Entwicklung des visuellen Konzepts sowie die Gestaltung sämtlicher UI-Elemente und Illustrationen.
            </>}
            descriptionEn={<>
            Conquest is a medieval strategy game where the player expands across a province map, manages resources and armies, and resolves conflicts through tactical lane-based battles.
            <br/> <br/>
            My responsibilities included the game design, the development of the visual concept, as well as the creation of all UI elements and illustrations.
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