import './Startseite.css'
import Nav from '../../components/Nav/Nav'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

function Startseite() {

  return (
    <div className='Startseite'>
        <Nav />
        <header className='screen'>
            <video autoPlay loop muted playsInline>
                <source src="/portfolio/video/header-video.mp4" type="video/mp4"/>
            </video>
            <article>
                <h1>
                    Hello, ich bin
                    <br />
                    <span>João Bastos</span>
                </h1>

                <p>
                Ich bin ein brasilianischer Frontend-Entwickler und lebe seit 2017 in Düsseldorf, wo ich auch meine Ausbildung gemacht habe.
                <br /><br />
                Ich bin ein eher ruhiger, aber kommunikativer Typ, der mit Leidenschaft programmiert, gerne Schach spielt und sich über Popkultur austauscht.
                </p>
            </article>
        </header>

        <main>
            <section className='about screen'>
                <article>
                    <div className="tecnologie">
                        <h2> Frontend <br /> Entwickler </h2>

                        <ul>
                            <li>Python</li>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                        </ul>
                    </div>

                    <div className="text">
                        <p>
                            Mit der Zeit habe ich gemerkt, dass Programmieren nicht nur mein Job ist, es ist auch das, was mir richtig Spaß macht.
                            <br /><br />
                            Programmiersprachen ist für mich eine Art Challenge. Jedes neue Framework, jede Sprache und jedes Konzept ist für mich eine Gelegenheit, etwas Neues zu entdecken und besser zu werden.
                            <br /><br />
                            Ich bin einfach neugierig, wenn es um Programmierung geht und das hält mich immer am Lernen. Genau das liebe ich an diesem Beruf.
                        </p>

                        <div className="socialmedia">
                            <a href="https://github.com/Jaobast" target="_blank" rel="noreferrer">
                                <img src="/portfolio/svg/socialmedia-github.svg" alt="github link" />
                            </a>
                            <a href="https://www.instagram.com/joaobastos.web" target="_blank" rel="noreferrer">
                                <img src="/portfolio/svg/socialmedia-insta.svg" alt="insta link" />
                            </a>
                            <a href="https://www.linkedin.com/in/joao-bastos-profil/" target="_blank" rel="noreferrer">
                                <img src="/portfolio/svg/socialmedia-linkedin.svg" alt="linkedin link" />
                            </a>
                        </div>
                    </div>

                    <div className="buttons">
                        <a className="lebenslauf" href="/pages/lebenslauf.html" target="_blank" rel="noreferrer">
                        Lebenslauf
                        </a>
                        <button className="portfolio-download">
                            Portfolio PDF
                            <img src="/portfolio/svg/download.svg" alt="" />
                        </button>
                    </div>
                </article>

                <img className="pic-me" src="/portfolio/img/me-about.png" alt="" />
            </section>

            <section className='projects'>
                <ProjectCard
                    name='Dabei'
                    img='/portfolio/project/Dabei/card.jpg'
                />

                <ProjectCard
                    name='Caflex'
                    img='/portfolio/project/Caflex/card.jpg'
                />

                <ProjectCard
                    name='Praxis'
                    img='/portfolio/project/Praxis/card.jpg'
                />

                <ProjectCard
                    name='MyMixx'
                    img='/portfolio/project/MyMixx/card.jpg'
                />

                <ProjectCard
                    name='Essencial'
                    img='/portfolio/project/Essencial/card.jpg'
                />

            </section>
        </main>
    </div>
    )

}

export default Startseite
