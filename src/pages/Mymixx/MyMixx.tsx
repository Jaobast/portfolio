import './MyMixx.css'
import Nav from '../../components/Nav/Nav'
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader'
import ProjectText from '../../components/ProjectText/ProjectText'

function MyMixx() {

  return (
    <div className='MyMixx project'>
        <Nav/>
        <ProjectHeader
          name='MyMixx'
          logo='/portfolio/project/MyMixx/logo.svg'
          video='/portfolio/project/MyMixx/cover.mp4'
          description={<>
          Mymixx ist ein Müsli-Store, in dem sich jeder sein persönliches Müsli zusammenstellen kann. Von der Basis bis zu den Toppings.
          <br /><br />
          Zu meinen Aufgaben gehörte die Erweiterung der visuellen Identität, die digitale Umsetzung des Brandings sowie die Gestaltung und Programmierung des Bestellsystems.
          </>}
          tools={[
            { key: 'icon-figma', label: 'Figma'},
            { key: 'icon-ae', label: 'AfterEffects'},
            { key: 'icon-ps', label: 'Photoshop'},
            { key: 'icon-css', label: 'CSS'},
            { key: 'icon-html', label: 'HTML'},
            { key: 'icon-js', label: 'JavaScript'},
            { key: 'icon-git', label: 'Github'},
          ]}
        />

        <img className='img-project height no-mobile' src="/portfolio/project/MyMixx/bilder/07.png" alt="bild" />
        <img className='img-project only-mobile' src="/portfolio/project/MyMixx/bilder/07.png" alt="bild" />


        <ProjectText
          textTitel='Bunt. Vielfältig. Möglich'
          textSubtitel='Design'
          textParagraph={<>
          Für das Design habe ich eine bunte und vielfältige Bildsprache entwickelt, die die zahlreichen Mix-Möglichkeiten widerspiegelt.
          <br /><br />
          Die lebendige Farbwelt betont die Pluralität der Zutaten und vermittelt visuell dieselbe Vielfalt und Freiheit, die auch die Marke selbst verkörpert.
          </>}
        />

        <img className='img-project padding no-mobile' src="/portfolio/project/MyMixx/bilder/05.png" alt="bild" />
        <img className='img-project padding only-mobile' src="/portfolio/project/MyMixx/bilder/03.png" alt="bild" />

        <ProjectText
          textTitel='Components'
          textSubtitel='Funktionalität'
        />

        <div className="img-duo">
          <img src="/portfolio/project/MyMixx/bilder/10.png" alt="bild" />
          <img src="/portfolio/project/MyMixx/bilder/11.png" alt="bild" />
        </div>

        <ProjectText
          textTheme='Button “Hinzufügen”, “Entfernen”'
          textParagraph={<>
          Für das Design habe ich eine bunte und vielfältige Bildsprache entwickelt, die die zahlreichen Mix-Möglichkeiten widerspiegelt.
          <br /><br />
          Die lebendige Farbwelt betont die Pluralität der Zutaten und vermittelt visuell dieselbe Vielfalt und Freiheit, die auch die Marke selbst verkörpert.
          </>}
        />
    </div>
  )
}

export default MyMixx