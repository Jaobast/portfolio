import './MyMixx.css'
import Nav from '../../components/Nav/Nav'
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader'
import {ProjectText, ProjectTextEn} from '../../components/ProjectText/ProjectText'
import ProjectCode from '../../components/ProjectCode/ProjectCode'
import Footer from '../../components/Footer/Footer'
import NextProject from '../../components/NextProject/NextProject'
import MotionImage from '../../components/MotionImage/MotionImage'

function MyMixx() {

  return (
    <div className='MyMixx'>
        <Nav/>

        <main className='project'>
          <ProjectHeader
            name='MyMixx'
            logo='/portfolio/project/MyMixx/logo.svg'
            video='/portfolio/project/MyMixx/cover.mp4'
            description={<>
            Mymixx ist ein Müsli-Store, in dem sich jeder sein persönliches Müsli zusammenstellen kann. Von der Basis bis zu den Toppings.
            <br /><br />
            Zu meinen Aufgaben gehörte die Erweiterung der visuellen Identität, die digitale Umsetzung des Brandings sowie die Gestaltung und Programmierung des Bestellsystems.
            </>}
            descriptionEn={<>
            Mymixx is a muesli store where anyone can create their own personal muesli. From the base to the toppings.
            <br /><br />
            My responsibilities included expanding the visual identity, implementing the branding digitally, and designing and developing the ordering system.
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
            linkGithub='https://github.com/Jaobast/MyMixx'
            linkWebsite='https://jaobast.github.io/MyMixx/'
          />

          <MotionImage
            img='/portfolio/project/MyMixx/bilder/07.png'
            noMobile
            extraClass='img-05'
          />

          <MotionImage
            img='/portfolio/project/MyMixx/bilder/09.png'
            padding
            onlyMobile
          />


          <ProjectText
            textTitel='Bunt. Vielfältig. Möglich'
            textSubtitel='Design'
            textParagraph={<>
            Für das Design habe ich eine bunte und vielfältige Bildsprache entwickelt, die die zahlreichen Mix-Möglichkeiten widerspiegelt.
            <br /><br />
            Die lebendige Farbwelt betont die Pluralität der Zutaten und vermittelt visuell dieselbe Vielfalt und Freiheit, die auch die Marke selbst verkörpert.
            </>}
          />

          <ProjectTextEn
            textTitel='Colorful. Diverse. Possible.'
            textSubtitel='Design'
            textParagraph={<>
            For the design, I developed a vibrant and diverse visual language that reflects the countless mixing possibilities.
            <br /><br />
            The lively color palette emphasizes the variety of ingredients and visually conveys the same diversity and freedom that the brand itself embodies.
            </>}
          />

          <img className='img-project padding no-mobile' src="/portfolio/project/MyMixx/bilder/05.png" alt="bild" />
          <img className='img-project padding only-mobile' src="/portfolio/project/MyMixx/bilder/03.png" alt="bild" />

          <img className='img-project img-04 no-mobile' src="/portfolio/project/MyMixx/bilder/08.png" alt="bild" />
          <img className='img-project img-02 only-mobile' src="/portfolio/project/MyMixx/bilder/08.png" alt="bild" />


          <ProjectText
            textTitel='Components'
            textSubtitel='Funktionalität'
          />

          <ProjectTextEn
            textTitel='Components'
            textSubtitel='Functionality'
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

          <ProjectTextEn
            textTheme='"Add" / "Remove" Button'
            textParagraph={<>
            Each product card manages its state via useState, storing a boolean value isAdded. Depending on this, the card switches between two visual states: a white background with an "Add" button, or a colored background with a "Remove" button. The styling is not changed through direct DOM manipulation, but by dynamically applying CSS classes based on the state.
            <br /><br />
            Clicking the button triggers a function that toggles isAdded while simultaneously adding or removing the product from the global My Mixx state. This global state, managed via useContext or a state management solution like Redux, ensures that the product selection remains consistent across components.
            </>}
          />

          <ProjectCode
            lines={[
              {
                content: <><span className="code-red">const</span> [<span className="code-blue">isAdded</span>, <span className="code-blue">setIsAdded</span>] = <span className="code-red">useState</span>(<span className="code-purple">false</span>)</>
              },
              {
                content: <></>
              },
              {
                content: <><span className="code-red">const</span> <span className="code-blue">handleClick</span> = () =&gt; {'{'}</>
              },
              {
                gap: 1,
                content: <><span className="code-blue">setIsAdded</span>(<span className="code-blue">prev</span> =&gt; !<span className="code-blue">prev</span>)</>
              },
              {
                gap: 1,
                content: <><span className="code-purple">if</span> (!<span className="code-blue">isAdded</span>) {'{'}</>
              },
              {
                gap: 2,
                content: <><span className="code-blue">addToMyMixx</span>(<span className="code-blue">product</span>)</>
              },
              {
                gap: 1,
                content: <>{'}'} <span className="code-purple">else</span> {'{'}</>
              },
              {
                gap: 2,
                content: <><span className="code-blue">removeFromMyMixx</span>(<span className="code-blue">product</span>)</>
              },
              {
                gap: 1,
                content: <>{'}'}</>
              },
              {
                content: <>{'}'}</>
              },
              {
                content: <></>
              },
              {
                content: <><span className="code-rosa">&lt;div </span><span className="code-purple">className</span>=<span className="code-red">{'{'}isAdded ? <span className="code-blue">'card card--added'</span> : <span className="code-blue">'card'</span>{'}'}</span><span className="code-rosa">&gt;</span></>
              },
              {
                gap: 1,
                content: <><span className="code-rosa">&lt;button </span><span className="code-purple">onClick</span>=<span className="code-red">{'{'}</span><span className="code-blue">handleClick</span><span className="code-red">{'}'}</span><span className="code-rosa">&gt;</span></>
              },
              {
                gap: 2,
                content: <>{'{'}isAdded ? <span className="code-blue">'Entfernen'</span> : <span className="code-blue">'Hinzufügen'</span>{'}'}</>
              },
              {
                gap: 1,
                content: <><span className="code-rosa">&lt;/button&gt;</span></>
              },
              {
                content: <><span className="code-rosa">&lt;/div&gt;</span></>
              },
            ]}
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

          <ProjectTextEn
            textTheme='Shopping Cart "My Mixx"'
            textParagraph={<>
            The My Mixx screen displays in real time all products added by the user, organized by category: base, fruits, sweeteners, and nuts. Along with the total price.<br />
            Each product is shown with its name and individual price, and can be removed directly via the X button.
            <br /><br />
            Clicking the X button resets the boolean useState isAdded of the corresponding product to false. This removes the product from the My Mixx list and switches the button in the product card back from "Remove" to "Add". The total price is automatically recalculated and updated instantly.
            </>}
          />

          <ProjectCode
            lines={[
              {
                content: <><span className="code-red">const</span> <span className="code-blue">totalPreis</span> = <span className="code-blue">myMixx</span>.<span className="code-red">reduce</span>((<span className="code-blue">acc</span>, <span className="code-blue">product</span>) =&gt; {'{'}</>
              },
              {
                gap: 1,
                content: <><span className="code-purple">return</span> <span className="code-blue">acc</span> + <span className="code-blue">product</span>.<span className="code-blue">preis</span></>
              },
              {
                content: <>{'}'}, <span className="code-purple">0</span>)</>
              },
              {
                content: <></>
              },
              {
                content: <><span className="code-red">const</span> <span className="code-blue">handleRemove</span> = (<span className="code-blue">product</span>) =&gt; {'{'}</>
              },
              {
                gap: 1,
                content: <><span className="code-blue">setIsAdded</span>(<span className="code-purple">false</span>)</>
              },
              {
                gap: 1,
                content: <><span className="code-blue">removeFromMyMixx</span>(<span className="code-blue">product</span>)</>
              },
              {
                content: <>{'}'}</>
              },
              {
                content: <></>
              },
              {
                content: <><span className="code-rosa">&lt;div </span><span className="code-purple">className</span>=<span className="code-red">"my-mixx"</span><span className="code-rosa">&gt;</span></>
              },
              {
                gap: 1,
                content: <><span className="code-rosa">&lt;p&gt;</span>Total: {'{'}totalPreis.<span className="code-red">toFixed</span>(<span className="code-purple">2</span>){'}'}&euro;<span className="code-rosa">&lt;/p&gt;</span></>
              },
              {
                gap: 1,
                content: <><span className="code-rosa">&lt;ul&gt;</span></>
              },
              {
                gap: 2,
                content: <>{'{'}myMixx.<span className="code-red">map</span>(<span className="code-blue">product</span> =&gt; (</>
              },
              {
                gap: 3,
                content: <><span className="code-rosa">&lt;li </span><span className="code-purple">key</span>=<span className="code-red">{'{'}</span><span className="code-blue">product</span>.<span className="code-blue">name</span><span className="code-red">{'}'}</span><span className="code-rosa">&gt;</span></>
              },
              {
                gap: 4,
                content: <>{'{'}product.<span className="code-blue">name</span>{'}'} — {'{'}product.<span className="code-blue">preis</span>.<span className="code-red">toFixed</span>(<span className="code-purple">2</span>){'}'}&euro;</>
              },
              {
                gap: 4,
                content: <><span className="code-rosa">&lt;button </span><span className="code-purple">onClick</span>=<span className="code-red">{'{'}</span>() =&gt; <span className="code-blue">handleRemove</span>(<span className="code-blue">product</span>)<span className="code-red">{'}'}</span><span className="code-rosa">&gt;</span>X<span className="code-rosa">&lt;/button&gt;</span></>
              },
              {
                gap: 3,
                content: <><span className="code-rosa">&lt;/li&gt;</span></>
              },
              {
                gap: 2,
                content: <>)){'}'}</>
              },
              {
                gap: 1,
                content: <><span className="code-rosa">&lt;/ul&gt;</span></>
              },
              {
                content: <><span className="code-rosa">&lt;/div&gt;</span></>
              },
            ]}
          />

          <img className='img-project img-01' src="/portfolio/project/MyMixx/bilder/13.png" alt="bild" />

          <ProjectText
            textTheme='Verwendung von JSON zur Sortierung der Produkte'
            textParagraph={<>
            Der Schwerpunkt lag darauf, die Produktdaten klar zu strukturieren und die UI-Elemente dynamisch zu generieren.
            <br /><br />
            Um die Produkte zu organisieren, habe ich ein JavaScript Datei erstellt, wo ich die Array von Objekten mit allen relevanten Informationen enthalten(Name, Preis, Menge und Bild) enthält. Dadurch wird sowohl die Pflege als auch das Rendering im Frontend vereinfacht.
            </>}
          />

          <ProjectTextEn
            textTheme='Using JSON to Sort Products'
            textParagraph={<>
            The focus was on clearly structuring the product data and dynamically generating the UI elements.
            <br /><br />
            To organize the products, I created a JavaScript file containing an array of objects with all relevant information (name, price, quantity, and image). This simplifies both maintenance and rendering on the frontend.
            </>}
          />


          <ProjectText
            textParagraph={<>
            Die Struktur in dem Jason Datei wird in Objects kategorisiert.<br />
            Anbei ist ein Beispiel, wie die Früchtensorte sortiert wird:
            </>}
          />

          <ProjectTextEn
            textParagraph={<>
            The structure in the JSON file is organized into objects.<br />
            Below is an example of how the fruit category is sorted:
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

          <ProjectText
            textParagraph={<>
            Und die Nutzung ist ebenso einfach.
            </>}
          />

          <ProjectTextEn
            textParagraph={<>
            And the usage is just as simple.
            </>}
          />

          <ProjectCode
            lines={[
              {
                content: <><span className="code-blue">arrayFruechte</span><span className="code-red">.forEach</span>(<span className="code-blue">product</span> =&gt; {'{'}</>
              },
              {
                gap: 1,
                content: <><span className="code-blue">productListBasis</span>.innerHTML += {'`'}</>
              },
              {
                gap: 2,
                content: <><span className="code-rosa">&lt;div </span><span className="code-purple">class</span>=<span className="code-red">"product"</span><span className="code-rosa">&gt;</span></>
              },
              {
                gap: 3,
                content: <><span className="code-rosa">&lt;p </span><span className="code-purple">class</span>=<span className="code-red">"product-name"</span><span className="code-rosa">&gt;</span>${'{'}<span className="code-blue">product</span>.<span className="code-blue">name</span>{'}'}<span className="code-rosa">&lt;/p&gt;</span></>
              },
              {
                gap: 3,
                content: <><span className="code-rosa">&lt;img </span><span className="code-purple">src</span> = <span className="code-red">"${'{'}product.pic{'}'}"</span><span className="code-rosa">&gt;</span></>
              },
              {
                gap: 3,
                content: <><span className="code-rosa">&lt;p </span><span className="code-purple">class</span>=<span className="code-red">'menge'</span><span className="code-rosa">&gt;</span>${'{'}<span className="code-blue">product</span>.<span className="code-blue">amount</span>{'}'}g<span className="code-rosa">&lt;/p&gt;</span></>
              },
              {
                gap: 3,
                content: <><span className="code-rosa">&lt;p </span><span className="code-purple">class</span>=<span className="code-red">'preis'</span><span className="code-rosa">&gt;</span>${'{'}<span className="code-blue">product</span>.<span className="code-blue">preis</span>.<span className="code-red">toFixed</span>(2){'}'}&euro;<span className="code-rosa">&lt;/p&gt;</span></>
              },
              {
                gap: 2,
                content: <><span className="code-rosa">&lt;/div&gt;</span></>
              },
              {
                gap: 1,
                content: <>{'\`'}</>
              },
              {
                content: <>{'});'}</>
              },
            ]}
          />


          <MotionImage
            img='/portfolio/project/MyMixx/bilder/06.png'
            extraClass='img-06'
          />

          

          <NextProject thisProject='MyMixx'/>

        </main>

        <Footer/>
    </div>
  )
}

export default MyMixx