import './Mova.css'
import Nav from '../../components/Nav/Nav'
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader'
import {ProjectText, ProjectTextEn} from '../../components/ProjectText/ProjectText'
import Footer from '../../components/Footer/Footer'
import NextProject from '../../components/NextProject/NextProject'

function Mova() {

  return (
    <div className='Mova'>
        <Nav/>

        <main className='project'>
          <ProjectHeader
            name='Mova'
            logo='/portfolio/project/Mova/logo.svg'
            img='/portfolio/project/Mova/cover.jpg'
            description={<>
            Mova ist ein Online-Shop-Konzept für handgefertigte Keramikvasen, das ein digitales Zuhause schafft, das genauso ruhig und zeitlos wirkt wie die Produkte selbst.
            <br /><br />
            Bei Mova werden Wert und Qualität ernst genommen. Ein Geschäft, das nicht nur den Einkauf erleichtert, sondern auch die Ästhetik der Marke durch visuelle Sprache kommuniziert.
            <br /><br />
            Mein Ziel war es, Ehrlichkeit in den digitalen Raum zu bringen. Klares Layout, intuitive Navigation, nur das Notwendige.
            </>}
            descriptionEn={<>
            Mova is an e-commerce concept for handcrafted ceramic vases, creating a digital home that feels just as calm and timeless as the products themselves.
            <br /><br />
            At Mova, value and quality are taken seriously. A store that not only makes shopping easier, but also communicates the brand's aesthetic through visual language.
            <br /><br />
            My goal was to bring honesty into the digital space. Clean layout, intuitive navigation, only what's necessary.
            </>}
          />

          <img className='img-project no-mobile' src="/portfolio/project/Mova/bilder/01.png" alt="bild" />
          <img className='img-project only-mobile' src="/portfolio/project/Mova/bilder/02.png" alt="bild" />

          <ProjectText
            textTitel='Ästhetik. Erdig. Zeitlos'
            textSubtitel='Design'
            textParagraph={<>
            Für das Design habe ich eine warme und erdige Bildsprache entwickelt, die die natürliche Ruhe der handgefertigten Vasen widerspiegelt.
            <br /><br />
            Die zwei Blautöne in der Palette wurden bewusst für einen Hauch von Eleganz und Sanftheit gewählt, während die erdigen Farben die organischen Formen der Kollektionen betonen und dieselbe Klarheit und Beständigkeit vermitteln, die auch die Marke selbst verkörpert.
            </>}
          />

          <ProjectTextEn
            textTitel='Aesthetic. Earthy. Timeless'
            textSubtitel='Design'
            textParagraph={<>
            For the design, I developed a warm and earthy visual language that reflects the natural calm of the handcrafted vases.
            <br /><br />
            The two shades of blue in the palette were deliberately chosen for a touch of elegance and softness, while the earthy tones highlight the organic shapes of the collections and convey the same clarity and consistency that the brand itself embodies.
            </>}
          />


          <img className='img-project only-mobile' src="/portfolio/project/Mova/bilder/06.png" alt="bild" />

          <img className='img-project padding no-mobile' src="/portfolio/project/Mova/bilder/03.png" alt="bild" />
          <img className='img-project padding only-mobile' src="/portfolio/project/Mova/bilder/04.png" alt="bild" />

          
          <img className='img-project no-mobile' src="/portfolio/project/Mova/bilder/05.png" alt="bild" />


          <img className='img-project padding no-mobile' src="/portfolio/project/Mova/bilder/07.png" alt="bild" />
          <img className='img-project padding only-mobile' src="/portfolio/project/Mova/bilder/08.png" alt="bild" />


          <ProjectText
            textTitel='Components'
            textSubtitel='Tracking'
            textTheme='Store-Übersicht'
            textParagraph={<>
            Die Store-Seite zeigt alle Vasen aus den verschiedenen Kollektionen in einem übersichtlichen Grid.
            <br /><br />
            Jedes Produkt wird mit Kollektionsname, Vasenname und Preis angezeigt, sodass Nutzer schnell einen Überblick über das gesamte Sortiment erhalten und gezielt nach ihrem Favoriten stöbern können.
            </>}
          />

          <ProjectTextEn
            textTitel='Components'
            textSubtitel='Tracking'
            textTheme='Store Overview'
            textParagraph={<>
            The store page displays all vases from the different collections in a clean grid layout.
            <br /><br />
            Each product shows the collection name, vase name, and price, giving users a quick overview of the full range and making it easy to browse for their favorite piece.
            </>}
          />

          <img src="/portfolio/project/Mova/bilder/09.gif" alt="" className='img-project padding video01' />

          <ProjectText
            textTheme='PDP (Product Detail Page)'
            textParagraph={<>
            Auf der Produktseite werden alle relevanten Informationen zur ausgewählten Vase übersichtlich dargestellt: Name, Preis, verfügbare Farboptionen sowie Maße, Beschreibung und Material in separaten Tabs.
            <br /><br />
            Am unteren Rand der Seite werden zusätzlich weitere Produkte aus derselben Kollektion gezeigt, um Nutzer zum Weiterstöbern einzuladen.
            </>}
          />

          <ProjectTextEn
            textTheme='PDP (Product Detail Page)'
            textParagraph={<>
            The product page displays all relevant information about the selected vase in a clear layout: name, price, available color options, as well as dimensions, description, and material shown in separate tabs.
            <br /><br />
            At the bottom of the page, additional products from the same collection are featured, inviting users to keep browsing.
            </>}
          />

          <img className='img-project padding' src="/portfolio/project/Mova/bilder/10.png" alt="bild" />

          <ProjectText
            textTheme='Einkaufstasche & Bestellung'
            textParagraph={<>
            In der Einkaufstasche werden alle ausgewählten Produkte übersichtlich mit Bild, Name, Kollektion, Farboption, Menge und Preis dargestellt. Nutzer:innen können die Menge direkt anpassen und behalten den Gesamtpreis jederzeit im Blick.
            <br /><br />
            Im nächsten Schritt führt der Bestellprozess durch Versandinformationen, Lieferadresse und Zahlungsmethode. Wählbare Versandoptionen mit unterschiedlichen Lieferzeiten sowie ein Feld für Rabattcodes sorgen für einen klaren, geführten Checkout-Flow bis zum Abschluss der Bestellung.
            </>}
          />

          <ProjectTextEn
            textTheme='Shopping Bag & Checkout'
            textParagraph={<>
            The shopping bag clearly displays all selected products with image, name, collection, color option, quantity and price. Users can adjust the quantity directly and always keep track of the total price.
            <br /><br />
            The next step guides users through shipping information, delivery address and payment method. Selectable shipping options with different delivery times, along with a promo code field, ensure a clear, guided checkout flow through to order completion.
            </>}
          />

          <img src="/portfolio/project/Mova/bilder/11.gif" alt="" className='img-project padding video01' />

          <img className='logo-pattern' src="/portfolio/project/Mova/logo.svg" alt="logo" />

          <img className='img-project padding no-mobile' src="/portfolio/project/Mova/bilder/12.png" alt="bild" />
          <img className='img-project padding only-mobile' src="/portfolio/project/Mova/bilder/13.png" alt="bild" />


          <NextProject thisProject='Mova'/>

        </main>

        <Footer/>
    </div>
  )
}

export default Mova