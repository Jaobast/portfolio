import './Dabei.css'
import Nav from '../../components/Nav/Nav'
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader'
import Footer from '../../components/Footer/Footer'
import NextProject from '../../components/NextProject/NextProject'

function Dabei() {

  return (
    <div className='Dabei'>
        <Nav/>

        <main className='project'>
          <ProjectHeader
            name='Dabei'
            logo='/portfolio/project/Dabei/logo.svg'
            img='/portfolio/project/Dabei/cover.jpg'
            description={<>
            Dabei ist ein Social-Media-Netzwerk, das dich über alle Events in deiner Nähe auf dem Laufenden hält. Entdecke, was gerade um dich herum passiert, folge deinen Freunden oder den Hosts deiner Lieblingsveranstaltungen.  Verpasse nie wieder ein spannendes Event.
            <br /><br />
            Der MVP wird derzeit entwickelt. Vom Design bis zum Frontend und Backend.
            </>}
            tools={[
              { key: 'icon-figma', label: 'Figma'},
              { key: 'icon-ae', label: 'AfterEffects'},
              { key: 'icon-ai', label: 'Illustrator'},
            ]}
          />

          <NextProject thisProject='Dabei'/>

        </main>

        <Footer/>
    </div>
  )
}

export default Dabei