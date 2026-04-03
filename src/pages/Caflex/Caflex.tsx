import './Caflex.css'
import Nav from '../../components/Nav/Nav'
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader'
import ProjectText from '../../components/ProjectText/ProjectText'
import ProjectCode from '../../components/ProjectCode/ProjectCode'

function Caflex() {

  return (
    <div className='Caflex project'>
        <Nav/>
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
        />

        <img className='img-project height no-mobile' src="/portfolio/project/Caflex/bilder/01.png" alt="bild" />
        <img className='img-project only-mobile' src="/portfolio/project/Caflex/bilder/02.png" alt="bild" />

        <ProjectText
          textTitel='Bunt. Vielfältig. Möglich'
          textSubtitel='Design'
          textParagraph={<>
          Für das Design habe ich eine bunte und vielfältige Bildsprache entwickelt, die die zahlreichen Mix-Möglichkeiten widerspiegelt.
          <br /><br />
          Die lebendige Farbwelt betont die Pluralität der Zutaten und vermittelt visuell dieselbe Vielfalt und Freiheit, die auch die Marke selbst verkörpert.
          </>}
        />

        <img className='img-project padding no-mobile' src="/portfolio/project/Caflex/bilder/06.png" alt="bild" />
        <img className='img-project padding only-mobile' src="/portfolio/project/Caflex/bilder/07.png" alt="bild" />

        <ProjectText
          textTitel='Components'
          textSubtitel='Funktionalität'
        />

        <div className="img-mobile">
          <img src="/portfolio/project/Caflex/bilder/03.png" alt="bild" />
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
          textTheme='Einkaufswagen „My Mixx"'
          textParagraph={<>
          Der My-Mixx-Bildschirm zeigt in Echtzeit alle vom Nutzer hinzugefügten Produkte, geordnet nach Kategorie: Basis, Früchte, Süßungsmittel und Nüsse... und der Gesamtpreis<br />
          Jedes Produkt wird mit Name und Einzelpreis angezeigt und kann direkt über den X-Button entfernt werden.
          <br /><br />
          Ein Klick auf den X-Button setzt den booleschen useState isAdded des entsprechenden Produkts auf false zurück. Dadurch verschwindet das Produkt aus der My-Mixx-Liste und der Button im Produktcard wechselt wieder von „Entfernen" zurück zu „Hinzufügen". Der Gesamtpreis wird dabei automatisch neu berechnet und sofort aktualisiert.
          </>}
        />

        <img className='img-project no-mobile img-01' src="/portfolio/project/Caflex/bilder/08.png" alt="bild" />
        <img className='img-project only-mobile' src="/portfolio/project/Caflex/bilder/09.png" alt="bild" />
    </div>
  )
}

export default Caflex