import './Caflex.css'
import Nav from '../../components/Nav/Nav'
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader'
import {ProjectText, ProjectTextEn} from '../../components/ProjectText/ProjectText'
import ProjectCode from '../../components/ProjectCode/ProjectCode'
import Footer from '../../components/Footer/Footer'
import NextProject from '../../components/NextProject/NextProject'
import MotionImage from '../../components/MotionImage/MotionImage'

function Caflex() {

  return (
    <div className='Caflex'>
        <Nav/>

        <main className='project'>
          <ProjectHeader
          name='Caflex'
          logo='/portfolio/project/Caflex/logo.svg'
          img='/portfolio/project/Caflex/cover.jpg'
          description={<>
            Wo gibt's den besten Kaffee in der Stadt?
            <br /><br />
            Caflex ist eine App, die dir hilft, die besten Cafés in deiner Stadt zu entdecken. Von gemütlichen Eckcafés bis hin zu modernen Specialty-Coffee-Shops.
            <br /><br />
            Zu meinen Aufgaben gehörten die Gestaltung der visuellen Identität sowie die Konzeption und Entwicklung der App.
          </>}
          descriptionEn={<>
            Where's the best coffee in town?
            <br /><br />
            Caflex is an app that helps you discover the best cafés in your city. From cozy neighborhood spots to modern specialty coffee shops.
            <br /><br />
            My responsibilities included designing the visual identity as well as conceptualizing and developing the app.
          </>}
          tools={[
              { key: 'icon-react', label: 'React'},
              { key: 'icon-node', label: 'Node.js'},
              { key: 'icon-tsx', label: 'TypeScript'},
              { key: 'icon-html', label: 'HTML'},
              { key: 'icon-css', label: 'CSS'},
              { key: 'icon-js', label: 'JavaScript'},
              { key: 'icon-figma', label: 'Figma'},
              { key: 'icon-git', label: 'Github'},
          ]}
          linkGithub='https://github.com/Jaobast/caflex'
          linkWebsite='https://jaobast.github.io/caflex/'

          />

          <MotionImage
            img='/portfolio/project/Caflex/bilder/01.png'
            noMobile
            extraClass='img-03'
          />

          <MotionImage
            img='/portfolio/project/Caflex/bilder/01.png'
            onlyMobile
            extraClass='img-01'
          />

          <ProjectText
            textTitel='Ruhig. Fokussiert. Einladend.'
            textSubtitel='Design'
            textParagraph={<>
            Für das Design habe ich eine zurückhaltende und bewusste Bildsprache entwickelt, die das Wesen der App widerspiegelt. Die besten Cafés der Stadt zu entdecken.
            <br /><br />
            Die Farbpalette greift warme Kaffeetöne auf, vertraut und geerdet, kontrastiert durch Akzente in Blau, die Frische und Klarheit bringen. Diese Kombination schafft eine visuelle Balance zwischen Gemütlichkeit und Orientierung.
            </>}
          />

          <ProjectTextEn
            textTitel='Sober. Focused. Inviting.'
            textSubtitel='Design'
            textParagraph={<>
            For the design, I developed a restrained and intentional visual language that reflects the essence of the app. Discovering great coffee in the city.
            <br /><br />
            The color palette draws from warm coffee tones, grounded and familiar, contrasted by touches of blue that bring freshness and clarity. This combination creates a visual balance between coziness and orientation.
            </>}
          />

          <img className='img-project padding no-mobile' src="/portfolio/project/Caflex/bilder/06.png" alt="bild" />
          <img className='img-project padding only-mobile' src="/portfolio/project/Caflex/bilder/07.png" alt="bild" />


          <ProjectText
            textTitel='Components'
            textSubtitel='Funktionalität'
          />

          <ProjectTextEn
            textTitel='Components'
            textSubtitel='Funktionality'
          />


          <div className="img-mobile">
            <img src="/portfolio/project/Caflex/videos/03.gif" alt=""/>
          </div>

          <ProjectText
            textTheme='Stadt auswählen'
            textParagraph={<>
            Die Stadtauswahl wird über useState verwaltet, wobei die gewählte Stadt im localStorage persistiert wird. So bleibt sie auch nach einem Seitenreload erhalten.Ein zweiter Boolean-State steuert das Auswahlmenü, dessen Sichtbarkeit per dynamischer CSS-Klasse geregelt wird.
            <br /><br />
            Da das Projekt noch früh in der Entwicklung ist, sind aktuell nur Düsseldorf und Köln verfügbar. Die Café-Daten werden je nach aktiver Stadt aus einem typisierten Objekt geladen, die andere Stadt wird automatisch berechnet und separat angezeigt.
            <br /><br />
            Die zufälligen Empfehlungen werden mit useMemo nur neu berechnet, wenn sich die Stadt ändert.
            </>}
          />

          <ProjectTextEn
            textTheme='City Selection'
            textParagraph={<>
            The city selection is managed via useState, with the chosen city persisted in localStorage so it remains intact after a page reload. A second boolean state controls the selection menu, whose visibility is handled through a dynamic CSS class.
            <br /><br />
            Since the project is still in early development, only Düsseldorf and Cologne are currently available. The café data is loaded from a typed object based on the active city, while the other city is automatically derived and displayed separately.
            <br /><br />
            The random recommendations are recalculated with useMemo only when the city changes.
            </>}
          />

          <img src="/portfolio/project/Caflex/videos/02.gif" className='video-02' alt=""/>

          <ProjectCode
            lines={[
              {
                content: <><span className="code-blue">const</span> [<span className="code-blue">city</span>, <span className="code-blue">setCity</span>] = <span className="code-red">useState</span>(<span className="code-blue">() =&gt;</span> {'{'}</>
              },
              {
                gap: 1,
                content: <><span className="code-blue">return</span> <span className="code-blue">localStorage</span>.<span className="code-red">getItem</span>(<span className="code-red">"city"</span>) ?? <span className="code-red">"Düsseldorf"</span>;</>
              },
              {
                content: <>{'});'}</>
              },
              {
                content: <><span className="code-blue">const</span> <span className="code-blue">cafes</span> = <span className="code-blue">cafesTyped</span>[<span className="code-blue">city</span>];</>
              },
            ]}
          />

          <ProjectText
            textTheme='Cafés sortieren'
            textParagraph={<>
            Die Café-Cards sind wiederverwendbare React-Komponenten wie “CafeCard”, “CafeCardLarge” und “CafeCardSmall”, die ihre Daten über Props empfangen. Per .map() wird das Array iteriert und die Eigenschaften jedes Cafés direkt an die Komponente übergeben.
            <br /><br />
            Diese Struktur macht das Projekt leicht skalierbar: Die Daten liegen aktuell in einem typisierten JSON-Objekt, könnten aber problemlos durch einen API-Call ersetzt werden, ohne die Komponentenstruktur anzupassen.
            </>}
          />

          <ProjectTextEn
            textTheme='Sorting Cafés'
            textParagraph={<>
            The café cards are reusable React components such as "CafeCard", "CafeCardLarge", and "CafeCardSmall", which receive their data via props. The array is iterated using .map(), passing each café's properties directly to the component.
            <br /><br />
            This structure makes the project easily scalable: the data currently lives in a typed JSON object, but could seamlessly be replaced by an API call without modifying the component structure.
            </>}
          />

          <img src="/portfolio/project/Caflex/videos/01.gif" className='video-01' alt=""/>

          <ProjectCode
            lines={[
              {
                content: <><span className="code-rosa">&lt;div </span><span className="code-purple">className</span>=<span className="code-red">"scroll CafesList"</span><span className="code-rosa">&gt;</span></>
              },
              {
                gap: 1,
                content: <>{'{'}cafes.<span className="code-red">map</span>((<span className="code-blue">cafe</span>) =&gt; (</>
              },
              {
                gap: 2,
                content: <><span className="code-rosa">&lt;CafeCard</span></>
              },
              {
                gap: 3,
                content: <><span className="code-purple">id</span>={'{'}cafe.<span className="code-blue">id</span>{'}'}</>
              },
              {
                gap: 3,
                content: <><span className="code-purple">img</span>={'{'}cafe.<span className="code-blue">foto</span>{'}'}</>
              },
              {
                gap: 3,
                content: <><span className="code-purple">name</span>={'{'}cafe.<span className="code-blue">name</span>{'}'}</>
              },
              {
                gap: 3,
                content: <><span className="code-purple">stadtteil</span>={'{'}cafe.<span className="code-blue">stadtteil</span>{'}'}</>
              },
              {
                gap: 2,
                content: <><span className="code-rosa">/&gt;</span></>
              },
              {
                gap: 1,
                content: <>))</>
              },
              {
                content: <><span className="code-rosa">&lt;/div&gt;</span></>
              },
            ]}
          />

          <div className="img-mobile">
            <img src="/portfolio/project/Caflex/bilder/04.png" alt="bild" />
            <img src="/portfolio/project/Caflex/bilder/05.png" alt="bild" />
          </div>

          <ProjectText
            textTheme='Einkaufswagen '
            textParagraph={<>
            Der My-Mixx-Bildschirm zeigt in Echtzeit alle vom Nutzer hinzugefügten Produkte, geordnet nach Kategorie: Basis, Früchte, Süßungsmittel und Nüsse... und der Gesamtpreis<br />
            Jedes Produkt  wird mit Name und Einzelpreis angezeigt und kann direkt über den X-Button entfernt werden.
            <br /><br />
            Ein Klick auf den X-Button setzt den booleschen useState isAdded des entsprechenden Produkts auf false zurück. Dadurch verschwindet das Produkt aus der My-Mixx-Liste und der Button im Produktcard wechselt wieder von „Entfernen" zurück zu „Hinzufügen".  Der Gesamtpreis wird dabei automatisch neu berechnet und sofort aktualisiert.
            </>}
          />

          <ProjectTextEn
            textTheme='Shopping Cart'
            textParagraph={<>
            The My Mixx screen displays in real time all products added by the user, organized by category: base, fruits, sweeteners, and nuts. Along with the total price. <br />
            Each product is shown with its name and individual price, and can be removed directly via the X button.
            <br /><br />
            Clicking the X button resets the boolean useState isAdded of the corresponding product to false. This removes the product from the My Mixx list and switches the button in the product card back from "Remove" to "Add". The total price is automatically recalculated and updated instantly.
            </>}
          />

          <MotionImage
            img='/portfolio/project/Caflex/bilder/08.png'
            extraClass='img-02'
          />

          <NextProject thisProject='Caflex'/>

        </main>

        <Footer/>
    </div>
  )
}

export default Caflex