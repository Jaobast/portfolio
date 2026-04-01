import './Essencial.css'
import Nav from '../../components/Nav/Nav'
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader'
import ProjectText from '../../components/ProjectText/ProjectText'

function Essencial() {

  return (
    <div className='Essencial project'>
        <Nav/>
        <ProjectHeader
        name='Essencial'
        logo='/portfolio/project/Essencial/logo.svg'
        video='/portfolio/project/Essencial/cover.mp4'
        description={<>
        Essencial ist ein Massage-Salon, der Ruhe und Wohlbefinden in den Mittelpunkt stellt. Die visuelle Identität und die Website wurden von mir entwickelt.
        <br /><br />
        Auf der Website werden die Professionalität und Philosophie der Therapeutin hervorgehoben sowie die verschiedenen Angebote übersichtlich präsentiert.
        </>}
        tools={[
            { key: 'icon-react', label: 'React'},
            { key: 'icon-node', label: 'Node.js'},
            { key: 'icon-tsx', label: 'TypeScript'},
            { key: 'icon-html', label: 'HTML'},
            { key: 'icon-css', label: 'CSS'},
            { key: 'icon-js', label: 'JavaScript'},
            { key: 'icon-figma', label: 'Figma'}
          ]}
        />

        <img className='img-project' src="/portfolio/project/Essencial/bilder/08.png" alt="bild" />

        <ProjectText
          textTitel='Verbindung und Vertrauen'
          textSubtitel='Logo'
          textParagraph={<>
          Das Logo wurde mit einer Bildsprache entwickelt, die Verbindung und Vertrauen spürbar macht. Die Kundin wünschte sich ein Zeichen, das die Essenz der Berührung einfängt, ohne dabei zu viel zu sagen.
          <br /><br />
          Durch die reduzierte Linienführung zweier Hände, eingebettet in einen stilisierten Halbkreis, entsteht ein ruhiges, fast meditatives Bild, das den Charakter des Salons auf den Punkt bringt.
          </>}
        />

        <img className='img-project img-01' src="/portfolio/project/Essencial/bilder/04.png" alt="bild" />

        <ProjectText
          textTitel='Ruhig. Stark. Harmonisch'
          textSubtitel='Farbwelt'
          textParagraph={<>
          Für das Design habe ich eine Farbwelt entwickelt, die Ruhe und Stärke ausstrahlt.
          <br /><br />
          Die Kundin wünschte sich einen minimalen Bezug zur brasilianischen Flagge und zur Herkunft der Massage. Durch die reduzierte und ausgewogene Farbpalette entsteht ein entspannter, chilliger Ton, der perfekt zum Salon passt.
          </>}
        />

        <img className='img-project padding' src="/portfolio/project/Essencial/bilder/05.png" alt="bild" />

        <img className='img-project img-02 no-mobile' src="/portfolio/project/Essencial/bilder/07.png" alt="bild" />
        <img className='img-project only-mobile' src="/portfolio/project/Essencial/bilder/07.png" alt="bild" />
    </div>
  )
}

export default Essencial