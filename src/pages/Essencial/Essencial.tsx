import './Essencial.css'
import Nav from '../../components/Nav/Nav'
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader'
import ProjectText from '../../components/ProjectText/ProjectText'
import ProjectCode from '../../components/ProjectCode/ProjectCode'
import Footer from '../../components/Footer/Footer'
import NextProject from '../../components/NextProject/NextProject'

function Essencial() {

  return (
    <div className='Essencial'>
        <Nav/>

        <main className='project'>
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

          <img className='img-project padding no-mobile' src="/portfolio/project/Essencial/bilder/05.png" alt="bild" />
          <img className='img-project padding only-mobile' src="/portfolio/project/Essencial/bilder/06.png" alt="bild" />

          <img className='img-project img-02 no-mobile' src="/portfolio/project/Essencial/bilder/07.png" alt="bild" />
          <img className='img-project img-03 only-mobile' src="/portfolio/project/Essencial/bilder/07.png" alt="bild" />

          <ProjectText
            textTitel='React und Components'
            textSubtitel='Front-end'
            textParagraph={<>
            Mit React und einer komponentenbasierten Architektur wird die Website modular und skalierbar aufgebaut.
            <br /><br />
            Die MassageType-Komponente nimmt Daten über Props entgegen (Name, Beschreibung, Bild und Preisstufen) und rendert diese dynamisch. Neue Angebote oder Massagearten lassen sich dadurch einfach durch das Hinzufügen eines neuen Datensatzes einpflegen, ohne den bestehenden Code zu verändern.
            <br /><br />
            Änderungen an der Komponente selbst wirken sich automatisch auf alle Instanzen aus konsistent und wartungsfreundlich.
            </>}
          />

          <div className="img-mobile">
            <img src="/portfolio/project/Essencial/bilder/11.png" alt="bild" />
          </div>

          <ProjectCode
            lines={[
              {
                content: <><span className="code-blue">function</span> <span className="code-rosa">MassageType</span>({'{'}</>
              },
              {
                indent: 1,
                content: <><span className="code-purple">name</span>,</>
              },
              {
                indent: 1,
                content: <><span className="code-purple">description</span>,</>
              },
              {
                indent: 1,
                content: <><span className="code-purple">priceTiers</span>,</>
              },
              {
                indent: 1,
                content: <><span className="code-purple">imageUrl</span></>
              },
              {
                content: <>{'}'}: <span className="code-blue">MassageTypeProps</span>) {'{'}</>
              },
              {
                content: <><span className="code-blue">return</span> (</>
              },
              {
                gap: 1,
                indent: 1,
                content: <>&lt;<span className="code-red">article</span>&gt;</>
              },
              {
                gap: 2,
                indent: 2,
                content: <>{'{'}imageUrl &amp;&amp; &lt;<span className="code-red">img</span> <span className="code-purple">src</span>={'{'}imageUrl{'}'} <span className="code-purple">alt</span>={'{'}name{'}'} /&gt;{'}'}</>
              },
              {
                gap: 2,
                indent: 2,
                content: <>&lt;<span className="code-red">h2</span>&gt;{'{'}name{'}'}&lt;/<span className="code-red">h2</span>&gt;</>
              },
              {
                gap: 2,
                indent: 2,
                content: <>&lt;<span className="code-red">p</span>&gt;{'{'}description{'}'}&lt;/<span className="code-red">p</span>&gt;</>
              },
              {
                gap: 2,
                indent: 2,
                content: <>&lt;<span className="code-red">div</span>&gt;</>
              },
              {
                gap: 3,
                indent: 3,
                content: <>{'{'}priceTiers.<span className="code-blue">map</span>((<span className="code-rosa">tier</span>) =&gt; (</>
              },
              {
                gap: 4,
                indent: 4,
                content: <>&lt;<span className="code-red">div</span> <span className="code-purple">key</span>={'{'}tier.minutes{'}'}&gt;</>
              },
              {
                gap: 5,
                indent: 5,
                content: <>&lt;<span className="code-red">span</span>&gt;{'{'}tier.minutes{'}'} Minuten&lt;/<span className="code-red">span</span>&gt;</>
              },
              {
                gap: 5,
                indent: 5,
                content: <>&lt;<span className="code-red">span</span>&gt;{'{'}tier.price{'}'} €&lt;/<span className="code-red">span</span>&gt;</>
              },
              {
                gap: 4,
                indent: 4,
                content: <>&lt;/<span className="code-red">div</span>&gt;</>
              },
              {
                gap: 3,
                indent: 3,
                content: <>)){'}'}</>
              },
              {
                gap: 2,
                indent: 2,
                content: <>&lt;/<span className="code-red">div</span>&gt;</>
              },
              {
                gap: 1,
                indent: 1,
                content: <>&lt;/<span className="code-red">article</span>&gt;</>
              },
              {
                content: <>);{'}'}</>
              },
            ]}
          />

          <div className="img-mobile">
            <img src="/portfolio/project/Essencial/bilder/10.png" alt="bild" />
          </div>

          <ProjectText
            textParagraph={<>
            Änderungen an der Komponente selbst wirken sich automatisch auf alle Instanzen aus konsistent und wartungsfreundlich.
            </>}
          />

          <ProjectCode
            lines={[
              {
                content: <>&lt;<span className="code-rosa">MassageType</span></>
              },
              {
                gap: 1,
                indent: 1,
                content: <><span className="code-purple">name</span>=<span className="code-blue">"Brasilianischer Lymphdrainage"</span></>
              },
              {
                gap: 1,
                indent: 1,
                content: <><span className="code-purple">description</span>=<span className="code-blue">"Diese Massage..."</span></>
              },
              {
                gap: 1,
                indent: 1,
                content: <><span className="code-purple">imageUrl</span>=<span className="code-blue">"/images/lymphdrainage.jpg"</span></>
              },
              {
                gap: 1,
                indent: 1,
                content: <><span className="code-purple">priceTiers</span>={'{'}[</>
              },
              {
                gap: 2,
                indent: 2,
                content: <>{'{ '}<span className="code-purple">minutes</span>: 60, <span className="code-purple">price</span>: 75 {'}'},{}</>
              },
              {
                gap: 2,
                indent: 2,
                content: <>{'{ '}<span className="code-purple">minutes</span>: 90, <span className="code-purple">price</span>: 95 {'}'},{}</>
              },
              {
                gap: 2,
                indent: 2,
                content: <>{'{ '}<span className="code-purple">minutes</span>: 120, <span className="code-purple">price</span>: 125 {'}'},{}</>
              },
              {
                gap: 1,
                indent: 1,
                content: <>]{'}'}</>
              },
              {
                content: <>/&gt;</>
              },
            ]}
          />

          <img className='img-project padding' src="/portfolio/project/Essencial/bilder/09.png" alt="bild" />
          <img className='img-project padding' src="/portfolio/project/Essencial/bilder/03.png" alt="bild" />

          <NextProject thisProject='Essencial'/>

        </main>

        <Footer/>
    </div>
  )
}

export default Essencial