import './Praxis.css'
import Nav from '../../components/Nav/Nav'
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader'
import {ProjectText, ProjectTextEn} from '../../components/ProjectText/ProjectText'
import ProjectCode from '../../components/ProjectCode/ProjectCode'
import Footer from '../../components/Footer/Footer'
import NextProject from '../../components/NextProject/NextProject'
import MotionImage from '../../components/MotionImage/MotionImage'

function Praxis() {

  return (
    <div className='Praxis'>
        <Nav/>

        <main className='project'>
          <ProjectHeader
              name='Praxis Lounge'
              logo='/portfolio/project/Praxis/logo.svg'
              video='/portfolio/project/Praxis/cover.mp4'
              description={<>
              Praxis Lounge ist eine mobile-first Chat-App für den Krankenhausalltag. Sie ermöglicht eine schnelle und klare Kommunikation zwischen Pflegekräften, selbst wenn sie auf verschiedene Stationen verteilt sind.
              <br /><br />
              Die größte Herausforderung liegt im Backend, das eine sichere, stabile und performante Echtzeit-Kommunikation ermöglichen muss.
              </>}
              descriptionEn={<>
              Praxis Lounge is a mobile-first chat app for everyday hospital life. It enables fast and clear communication between nursing staff, even when spread across different wards.
              <br /><br />
              The greatest challenge lies in the backend, which must support secure, stable, and high-performance real-time communication.
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

          <MotionImage
            img='/portfolio/project/Praxis/bilder/06.png'
            noMobile
            extraClass='img-03'
          />

          <MotionImage
            img='/portfolio/project/Praxis/bilder/07.png'
            onlyMobile
          />

          <ProjectText
            textTitel='Fürsorge und Kommunikation'
            textSubtitel='Logo'
            textParagraph={<>
            Das Logo wurde mit dem Fokus auf zwei Symbole entwickelt, die im Alltag der Pflege nicht voneinander zu trennen sind: Gesundheit und Kommunikation.
            <br /><br />
            Das Kreuz wächst direkt aus der Sprechblase heraus, als wären beide schon immer zusammengehört. Das Plus bedeutet in diesem Kontext mehr als es zeigt: Es steht für das Mehr, das diese App ins Team bringen soll: mehr Austausch, mehr Flexibilität, und mehr Verbindung.
            <br /><br />
            Für Menschen, die im Alltag keine Zeit verlieren dürfen, aber trotzdem nicht allein arbeiten wollen.
            </>}
          />

          <ProjectTextEn
            textTitel='Care and Communication'
            textSubtitel='Logo'
            textParagraph={<>
            The logo was developed with a focus on two symbols that are inseparable in everyday nursing: health and communication.
            <br /><br />
            The cross grows directly out of the speech bubble, as if the two always belonged together. In this context, the plus sign means more than it shows: it stands for the more that this app should bring to the team. More exchange, more flexibility, and more connection.
            <br /><br />
            For people who can't afford to lose time in their daily work, but still don't want to work alone.
            </>}
          />

          <img className='img-project img-02 no-mobile' src="/portfolio/project/Praxis/bilder/01.png" alt="Visual Design" />
          <img className='img-project img-03 only-mobile' src="/portfolio/project/Praxis/bilder/02.png" alt="Visual Design" />

          <ProjectText
            textTitel='Verlässich und modern'
            textSubtitel='Farbwelt'
            textParagraph={<>
            Für die Farbwahl habe ich mich für Blautöne entschieden, da sie Seriosität und Verlässlichkeit vermitteln, und immerhin modern wirkt.
            <br /><br />
            Es schafft eine ruhige Atmosphäre, die das Wohlbefinden in den Vordergrund stellt und genau das spiegelt wider, wofür diese App steht: ein Team, das füreinander da ist.
            </>}
          />

          <ProjectTextEn
            textTitel='Reliable and Modern'
            textSubtitel='Farbwelt'
            textParagraph={<>
            For the color choices, I opted for shades of blue, as they convey professionalism and reliability while still feeling modern.
            <br /><br />
            It creates a calm atmosphere that puts well-being first, and that is exactly what this app stands for: a team that is there for each other.
            </>}
          />

          <img className='img-project padding no-mobile' src="/portfolio/project/Praxis/bilder/04.png" alt="Visual Design" />
          <img className='img-project padding only-mobile' src="/portfolio/project/Praxis/bilder/03.png" alt="Visual Design" />

          <ProjectText
            textTitel='Components'
            textSubtitel='Funktionalität'
          />

          <ProjectTextEn
            textTitel='Components'
            textSubtitel='Functionality'
          />

          <div className="img-mobile">
            <img src="/portfolio/project/Praxis/bilder/08.png" alt="mockup" />
          </div>

          <ProjectText
            textTheme='Registrieren und Anmelden'
            textParagraph={<>
            Die Login-Komponente vereint beide Authentifizierungsflüsse (Registrierung und Anmeldung) in einer einzigen Ansicht.
            <br /><br />
            Der Wechsel zwischen den Modi erfolgt über useState, dass steuert, welches Formular angezeigt wird, welcher Button erscheint und welche Felder sichtbar sind.
            <br /><br />
            Das Username-Feld wird ausschließlich bei der Registrierung eingeblendet.
            Beim Absenden prüft der Handler den aktiven Modus und ruft die entsprechende Firebase-Funktion auf, signup oder login, und übergibt die eingegebenen Zugangsdaten. Der Wechsel zwischen den Modi geschieht über anklickbare Links am unteren Ende des Formulars, ohne Seitenneuladen oder Weiterleitung.
            </>}
          />

          <ProjectTextEn
            textTheme='Register and Sign In'
            textParagraph={<>
            The login component combines both authentication flows (registration and sign-in) in a single view.
            <br /><br />
            The switch between modes is handled via useState, which controls which form is displayed, which button appears, and which fields are visible.
            <br /><br />
            The username field is only shown during registration. When submitting, the handler checks the active mode and calls the corresponding Firebase function, signup or login, passing the entered credentials. Switching between modes happens via clickable links at the bottom of the form, without page reloads or redirects.
            </>}
          />

          <ProjectCode
            lines={[
              {
                content: <><span className="code-red">const</span> <span className="code-rosa">onSubmitHandler</span> = (event) =&gt; {'{'}</>
              },
              {
                gap: 1,
                indent: 1,
                content: <>event.<span className="code-rosa">preventDefault</span>();</>
              },
              {
                gap: 1,
                indent: 1,
                content: <><span className="code-red">if</span> (currState === <span className="code-blue">"Registrieren"</span>) {'{'}</>
              },
              {
                gap: 2,
                indent: 2,
                content: <><span className="code-rosa">signup</span>(<span className="code-purple">username</span>, <span className="code-purple">email</span>, <span className="code-purple">password</span>)</>
              },
              {
                gap: 1,
                indent: 1,
                content: <>{'}'} <span className="code-red">else</span> {'{'}</>
              },
              {
                gap: 2,
                indent: 2,
                content: <><span className="code-rosa">login</span>(<span className="code-purple">email</span>, <span className="code-purple">password</span>)</>
              },
              {
                gap: 1,
                indent: 1,
                content: <>{'}'}</>
              },
              {
                content: <>{'}'}</>
              },
              {
                content: <>{''}</>
              },
              {
                content: <>&lt;<span className="code-rosa">span</span> <span className="code-purple">onClick</span>=() =&gt; <span className="code-rosa">setCurrState</span>(<span className="code-blue">"Anmelden"</span>)&gt;</>
              },
              {
                gap: 1,
                indent: 1,
                content: <>Hier anmelden</>
              },
              {
                content: <>&lt;/<span className="code-rosa">span</span>&gt;</>
              },
            ]}
          />

          <div className="img-mobile">
            <img src="/portfolio/project/Praxis/bilder/09.png" alt="bild" />
            <img src="/portfolio/project/Praxis/bilder/10.png" alt="bild" />
          </div>

          <ProjectText
            textTheme='Profil bearbeiten'
            textParagraph={<>
            Die ProfileUpdate-Komponente lädt über onAuthStateChanged die aktuellen Nutzerdaten aus Firestore und befüllt damit die Felder für Name, Bio und Profilbild. So sieht der Nutzer immer seinen aktuellen Stand.
            <br /><br />
            Beim Speichern prüft der Handler, ob ein neues Bild ausgewählt wurde. Falls ja, wird es zuerst hochgeladen und die zurückgegebene URL zusammen mit Name und Bio in Firestore geschrieben. Falls kein neues Bild vorhanden ist, werden nur die Textfelder aktualisiert. Anschließend wird der globale userData-State über den AppContext synchronisiert, damit Änderungen sofort in der gesamten App sichtbar sind.
            </>}
          />

          <ProjectTextEn
            textTheme='Edit Profile'
            textParagraph={<>
            The ProfileUpdate component loads the current user data from Firestore via onAuthStateChanged and populates the fields for name, bio, and profile picture. So the user always sees their current information.
            <br /><br />
            When saving, the handler checks whether a new image has been selected. If so, it is uploaded first and the returned URL is written to Firestore along with the name and bio. If no new image is present, only the text fields are updated. Afterwards, the global userData state is synced via AppContext, so changes are immediately reflected throughout the entire app.
            </>}
          />

          <ProjectCode
            lines={[
              {
                content: <><span className="code-gray">const</span> <span className="code-rosa">updateProfile</span> = <span className="code-gray">async</span> (event) =&gt; {'{'}</>
              },
              {
                gap: 1,
                indent: 1,
                content: <>event.<span className="code-rosa">preventDefault</span>();</>
              },
              {
                gap: 1,
                indent: 1,
                content: <><span className="code-red">if</span> (<span className="code-blue">image</span>) {'{'}</>
              },
              {
                gap: 2,
                indent: 2,
                content: <><span className="code-blue">const</span> <span className="code-purple">imgUrl</span> = <span className="code-red">await</span> <span className="code-rosa">upload</span>(<span className="code-blue">image</span>);</>
              },
              {
                gap: 2,
                indent: 2,
                content: <><span className="code-rosa">setPrevImage</span>(<span className="code-purple">imgUrl</span>);</>
              },
              {
                gap: 2,
                indent: 2,
                content: <><span className="code-red">await</span> <span className="code-rosa">updateDoc</span>(docRef, {'{'}</>
              },
              {
                gap: 3,
                indent: 3,
                content: <><span className="code-purple">avatar</span>: <span className="code-blue">imgUrl</span>,</>
              },
              {
                gap: 3,
                indent: 3,
                content: <><span className="code-purple">bio</span>: <span className="code-blue">bio</span>,</>
              },
              {
                gap: 3,
                indent: 3,
                content: <><span className="code-purple">name</span>: <span className="code-blue">name</span></>
              },
              {
                gap: 2,
                indent: 2,
                content: <>{'}'})</>
              },
              {
                gap: 1,
                indent: 1,
                content: <>{'}'} <span className="code-red">else</span> {'{'}</>
              },
              {
                gap: 2,
                indent: 2,
                content: <><span className="code-red">await</span> <span className="code-rosa">updateDoc</span>(docRef, {'{'}</>
              },
              {
                gap: 3,
                indent: 3,
                content: <><span className="code-purple">bio</span>: <span className="code-blue">bio</span>,</>
              },
              {
                gap: 3,
                indent: 3,
                content: <><span className="code-purple">name</span>: <span className="code-blue">name</span></>
              },
              {
                gap: 2,
                indent: 2,
                content: <>{'}'})</>
              },
              {
                gap: 1,
                indent: 1,
                content: <>{'}'}</>
              },
              {
                content: <>{'}'}</>
              },
            ]}
          />

          <div className="img-mobile">
            <img src="/portfolio/project/Praxis/bilder/12.png" alt="bild" />
          </div>

          <ProjectText
            textTheme='Kontakte und Chats'
            textParagraph={<>
            Die LeftSidebar-Komponente zeigt entweder die Suchergebnisse oder die bestehenden Chats. Je nachdem, ob der Nutzer gerade etwas im Suchfeld eingibt.
            <br /><br />
            Die Suche läuft direkt gegen Firestore auf dem name-Feld. Bereits vorhandene Kontakte und der eigene Account werden dabei automatisch herausgefiltert. Ein neuer Chat wird mit addChat angelegt, wobei für beide Seiten ein Eintrag in der chats-Collection erstellt wird.
            <br /><br />
            Beim Öffnen eines bestehenden Chats markiert setChat die Nachrichten als gelesen und navigiert auf Mobilgeräten automatisch zur ChatBox-Ansicht.
            </>}
          />

          <ProjectTextEn
            textTheme='Contacts and Chats'
            textParagraph={<>
            The LeftSidebar component displays either search results or existing chats, depending on whether the user is currently typing in the search field.
            <br /><br />
            The search runs directly against Firestore on the name field. Existing contacts and the user's own account are automatically filtered out. A new chat is created with addChat, generating an entry in the chats collection for both sides.
            <br /><br />
            When opening an existing chat, setChat marks the messages as read and automatically navigates to the ChatBox view on mobile devices.
            </>}
          />

          <ProjectCode
            lines={[
              {
                content: <><span className="code-red">const</span> <span className="code-rosa">addChat</span> = () =&gt; {'{'}</>
              },
              {
                gap:1,
                indent: 1,
                content: <><span className="code-red">const</span> <span className="code-purple">messagesRef</span> = <span className="code-rosa">collection</span>(db, <span className="code-blue">"messages"</span>);</>
              },
              {
                gap:1,
                indent: 1,
                content: <><span className="code-red">const</span> <span className="code-purple">chatsRef</span> = <span className="code-rosa">collection</span>(db, <span className="code-blue">"chats"</span>);</>
              },
              {
                gap: 1,
                indent: 1,
                content: <><span className="code-red">const</span> <span className="code-purple">newMessageRef</span> = <span className="code-rosa">doc</span>(<span className="code-purple">messagesRef</span>);</>
              },
              {
                gap: 1,
                indent: 1,
                content: <><span className="code-rosa">setDoc</span>(<span className="code-purple">newMessageRef</span>, {'{'}</>
              },
              {
                gap:2,
                indent: 2,
                content: <><span className="code-purple">createAt</span>: <span className="code-rosa">serverTimestamp</span>(),</>
              },
              {
                gap:2,
                indent: 2,
                content: <><span className="code-purple">messagesRef</span>: []</>
              },
              {
                gap:1,
                indent: 1,
                content: <>{'}'})</>
              },
              {
                content: <>{'}'}</>
              },
            ]}
          />

          <div className="img-mobile">
            <img src="/portfolio/project/Praxis/bilder/13.png" alt="bild" />
          </div>

          <ProjectText
            textTheme='Chatbox'
            textParagraph={<>
            Die ChatBox-Komponente ist das Herzstück der App. Über onSnapshot hört sie in Echtzeit auf neue Nachrichten in Firestore. Sobald eine neue Nachricht eintrifft, wird die Anzeige automatisch aktualisiert, ohne Seitenneuladen.
            <br /><br />
            Beim Senden einer Textnachricht wird der Inhalt direkt in das messages-Dokument geschrieben. Gleichzeitig wird für beide Gesprächspartner die lastMessage in der chats-Collection aktualisiert und die Nachricht beim Empfänger als ungelesen markiert.
            <br /><br />
            Bilder durchlaufen denselben Ablauf. Sie werden zuerst hochgeladen und die zurückgegebene URL dann als Nachricht gespeichert. 
            </>}
          />

          <ProjectTextEn
            textTheme='Chatbox'
            textParagraph={<>
            The ChatBox component is the heart of the app. Via onSnapshot, it listens in real time for new messages in Firestore. As soon as a new message arrives, the display is automatically updated. No page reload required.
            <br /><br />
            When sending a text message, the content is written directly into the messages document. At the same time, the lastMessage in the chats collection is updated for both participants, and the message is marked as unread for the recipient.
            <br /><br />
            Images follow the same flow. They are uploaded first, and the returned URL is then saved as a message.
            </>}
          />

          <ProjectCode
            lines={[
              {
                content: <><span className="code-red">const</span> <span className="code-rosa">sendMessage</span> = <span className="code-red">async</span> () =&gt; {'{'}</>
              },
              {
                gap: 1,
                indent: 1,
                content: <><span className="code-red">if</span> (<span className="code-blue">input && messagesId</span>) {'{'}</>
              },
              {
                gap: 2,
                indent: 2,
                content: <><span className="code-red">await</span> <span className="code-rosa">updateDoc</span>(<span className="code-rosa">doc</span>(db, <span className="code-purple">"messages"</span>, <span className="code-blue">messagesId</span>), {'{'}</>
              },
              {
                gap: 3,
                indent: 3,
                content: <><span className="code-purple">messages</span>: <span className="code-rosa">arrayUnion</span>({'{'}</>
              },
              {
                gap: 4,
                indent: 4,
                content: <><span className="code-purple">sId</span>: <span className="code-red">userData</span>.<span className="code-blue">id</span>,</>
              },
              {
                gap: 4,
                indent: 4,
                content: <><span className="code-purple">text</span>: <span className="code-purple">input</span>,</>
              },
              {
                gap: 4,
                indent: 4,
                content: <><span className="code-purple">createdAt</span>: <span className="code-red">new</span> <span className="code-rosa">Date</span><span className="code-blue">()</span></>
              },
              {
                gap: 3,
                indent: 3,
                content: <>{'}'})</>
              },
              {
                gap: 2,
                indent: 2,
                content: <>{'}'})</>
              },
              {
                gap: 2,
                indent: 2,
                content: <><span className="code-red">const</span> <span className="code-purple">userIDs</span> = [<span className="code-red">chatUser</span>.<span className="code-blue">rId</span>, <span className="code-red">userData</span>.<span className="code-blue">id</span>];</>
              },
              {
                gap: 2,
                indent: 2,
                content: <><span className="code-purple">userIDs</span>.<span className="code-rosa">forEach</span>(<span className="code-red">async</span> (<span className="code-blue">id</span>) =&gt; {'{'}</>
              },
              {
                gap: 3,
                indent: 3,
                content: <><span className="code-gray">...</span></>
              },
              {
                gap: 2,
                indent: 2,
                content: <>{'}'});</>
              },
              {gap: 1,
                indent: 1,
                content: <>{'}'}</>
              },
              {
                gap: 1,
                indent: 1,
                content: <><span className="code-rosa">setInput</span>(<span className="code-blue">""</span>);</>
              },
              {
                content: <>{'}'}</>
              },
            ]}
          />

          <img className='img-project padding img-04' src="/portfolio/project/Praxis/bilder/11.png" alt="bild" />

          <NextProject thisProject='Praxis'/>

        </main>

        <Footer/>
    </div>
  )
}

export default Praxis