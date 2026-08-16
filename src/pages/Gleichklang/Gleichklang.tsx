import './Gleichklang.css'
import Nav from '../../components/Nav/Nav'
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader'
import Footer from '../../components/Footer/Footer'
import NextProject from '../../components/NextProject/NextProject'

function Gleichklang() {

  return (
    <div className='Gleichklang'>
        <Nav/>

        <main className='project'>
          <ProjectHeader
            name='Gleichklang'
            logo='/portfolio/project/Gleichklang/logo.svg'
            img='/portfolio/project/Gleichklang/cover.jpg'
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

          <NextProject thisProject='Gleichklang'/>

        </main>

        <Footer/>
    </div>
  )
}

export default Gleichklang