import './Praxis.css'
import Nav from '../../components/Nav/Nav'
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader'
import ProjectText from '../../components/ProjectText/ProjectText'
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
              img='/portfolio/project/Praxis/cover.jpg'
              description={<>
              Praxis Lounge ist eine mobile-first Chat-App für den Krankenhausalltag. Sie ermöglicht eine schnelle und klare Kommunikation zwischen Pflegekräften, selbst wenn sie auf verschiedene Stationen verteilt sind.
              <br /><br />
              Die größte Herausforderung liegt im Backend, das eine sichere, stabile und performante Echtzeit-Kommunikation ermöglichen muss.
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
            height
            noMobile
          />

          <MotionImage
            img='/portfolio/project/Praxis/bilder/07.png'
            onlyMobile
          />

{/*           <img className='img-project heigh no-mobile' src="/portfolio/project/Praxis/bilder/06.png" alt="mockup" />
          <img className='img-project only-mobile' src="/portfolio/project/Praxis/bilder/07.png" alt="mockup" /> */}

          <ProjectText
            textTitel='Lorem ipsum dolor'
            textSubtitel='Logo'
            textParagraph={<>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum hic veritatis fuga saepe doloremque dolores tempora, quo nulla provident nemo aperiam excepturi temporibus perferendis aliquid numquam. Impedit, necessitatibus similique.
            <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vel ut unde iste harum enim cumque est, voluptatibus, aliquid, nostrum voluptates! Eveniet sunt sapiente, necessitatibus omnis libero optio recusandae odio!
            </>}
          />

          <img className='img-project img-02 no-mobile' src="/portfolio/project/Praxis/bilder/01.png" alt="Visual Design" />
          <img className='img-project img-03 only-mobile' src="/portfolio/project/Praxis/bilder/02.png" alt="Visual Design" />

          <ProjectText
            textTitel='Lorem ipsum dolor'
            textSubtitel='Farbwelt'
            textParagraph={<>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit eveniet dolore nemo deleniti tempora nulla expedita sunt magni deserunt eius! Similique adipisci quisquam quam, dolore ullam voluptatibus dolor. Omnis, eos?
            <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis similique neque voluptate consequuntur maxime, veniam praesentium minus qui. Id quisquam rem, expedita asperiores quaerat voluptates architecto nihil officia nemo natus!
            </>}
          />

          <img className='img-project padding no-mobile' src="/portfolio/project/Praxis/bilder/04.png" alt="Visual Design" />
          <img className='img-project padding only-mobile' src="/portfolio/project/Praxis/bilder/03.png" alt="Visual Design" />

          <ProjectText
            textTitel='Components'
            textSubtitel='Funktionalität'
          />

          <div className="img-mobile">
            <img src="/portfolio/project/Praxis/bilder/08.png" alt="mockup" />
          </div>

          <ProjectText
            textTheme='Lorem ipsum dolor'
            textParagraph={<>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In eligendi nisi eos similique obcaecati qui ratione placeat hic fuga ipsa totam, at natus explicabo ipsam impedit aliquid veritatis perferendis neque.
            <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem non ullam dolorum sequi aut facilis! Nam, fugiat! Officiis voluptatum nesciunt aliquam magni sed asperiores, pariatur tempora veniam facilis ducimus repellat.
            </>}
          />

          <div className="img-mobile">
            <img src="/portfolio/project/Praxis/bilder/09.png" alt="bild" />
            <img src="/portfolio/project/Praxis/bilder/10.png" alt="bild" />
          </div>

          <img className='img-project padding' src="/portfolio/project/Praxis/bilder/11.png" alt="bild" />

          <NextProject thisProject='Praxis'/>

        </main>

        <Footer/>
    </div>
  )
}

export default Praxis