import './Essencial.css'
import Nav from '../../components/Nav/Nav'
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader'

function Essencial() {

  return (
    <div className='Essencial'>
        <Nav/>
        <ProjectHeader
        name='Essencial'
        logo='/project/Essencial/logo.svg'
        video='/project/Essencial/video.mp4'
        description={<>
        Essencial ist ein Massage-Salon, der Ruhe und Wohlbefinden in den Mittelpunkt stellt. Die visuelle Identität und die Website wurden von mir entwickelt.
        <br /><br />
        Auf der Website werden die Professionalität und Philosophie der Therapeutin hervorgehoben sowie die verschiedenen Angebote übersichtlich präsentiert.
        </>}
        />
    </div>
  )
}

export default Essencial