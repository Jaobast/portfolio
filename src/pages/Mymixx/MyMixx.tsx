import './MyMixx.css'
import Nav from '../../components/Nav/Nav'
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader'
import ProjectText from '../../components/ProjectText/ProjectText'
import ProjectCode from '../../components/ProjectCode/ProjectCode'

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

        <div className="img-mobile">
          <img src="/portfolio/project/MyMixx/bilder/10.png" alt="bild" />
          <img src="/portfolio/project/MyMixx/bilder/11.png" alt="bild" />
        </div>

        <ProjectText
          textTheme='Button “Hinzufügen”, “Entfernen”'
          textParagraph={<>
          Jedes Produktcard verwaltet seinen Zustand über useState, das einen booleschen Wert isAdded speichert. Abhängig davon wechselt das Card zwischen zwei visuellen Zuständen: weißer Hintergrund mit „Hinzufügen"-Button oder farbiger Hintergrund mit „Entfernen"-Button. Das Styling wird dabei nicht per direktem DOM-Zugriff geändert, sondern durch dynamisches Setzen von CSS-Klassen basierend auf dem State.
          <br /><br />
          Ein Klick auf den Button triggert eine Funktion, die isAdded togglet und gleichzeitig das Produkt im globalen My Mixx-State hinzufügt oder entfernt. Dieser globale State verwaltet über useContext oder ein State-Management wie Redux stellt sicher, dass die Produktauswahl komponentenübergreifend konsistent bleibt.
          </>}
        />

        <div className="img-mobile">
          <img src="/portfolio/project/MyMixx/bilder/12.png" alt="bild" />
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

        <ProjectText
          textTitel='Architektur von Datenbank'
          textSubtitel='Code'
          textParagraph={<>
          Der Schwerpunkt lag darauf, die Produktdaten klar zu strukturieren und die UI-Elemente dynamisch zu generieren.
          <br /><br />
          Um die Produkte zu organisieren, habe ich ein JavaScript Datei erstellt, wo ich die Array von Objekten mit allen relevanten Informationen enthalten(Name, Preis, Menge und Bild) enthält. Dadurch wird sowohl die Pflege als auch das Rendering im Frontend vereinfacht.
          </>}
        />

        <img className='img-project height no-mobile' src="/portfolio/project/MyMixx/bilder/08.png" alt="bild" />
        <img className='img-project padding only-mobile' src="/portfolio/project/MyMixx/bilder/08.png" alt="bild" />

        <ProjectText
          textParagraph={<>
          Die Struktur in dem Jason Datei wird in Objects kategorisiert.<br />
          Anbei ist ein Beispiel, wie die Früchtensorte sortiert wird:
          </>}
        />

        <ProjectCode
          lines={[
            {
              content: <><span className="code-red">const</span> <span className="code-blue">arrayFruechte</span> = [</>
            },
            {
              gap: 1,
              indent: 1,
              content: <>{'{ '}<span className="code-purple">name</span>: 'Cranberries', <span className="code-purple">preis</span>: 0.40, <span className="code-purple">amount</span>: 65, <span className="code-purple">pic</span>: ''{'}'},{}</>
            },
            {
              gap: 1,
              indent: 1,
              content: <>{'{ '}<span className="code-purple">name</span>: 'Ananasstücke', <span className="code-purple">preis</span>: 0.60, <span className="code-purple">amount</span>: 50, <span className="code-purple">pic</span>: ''{'}'},{}</>
            },
            {
              gap: 1,
              indent: 1,
              content: <>{'{ '}<span className="code-purple">name</span>: 'Apfelringe', <span className="code-purple">preis</span>: 0.70, <span className="code-purple">amount</span>: 35, <span className="code-purple">pic</span>: ''{'}'},{}</>
            },
            {
              gap: 1,
              indent: 1,
              content: <>{'{ '}<span className="code-purple">name</span>: 'Datteln', <span className="code-purple">preis</span>: 0.42, <span className="code-purple">amount</span>: 65, <span className="code-purple">pic</span>: ''{'}'},{}</>
            },
            {
              content: <>]</>
            }
          ]}
        />
    </div>
  )
}

export default MyMixx