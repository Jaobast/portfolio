import './Startseite.css'
import Nav from '../../components/Nav/Nav'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import {ProjectText, ProjectTextEn} from '../../components/ProjectText/ProjectText'
import { useLang } from '../../hooks/LangContext'
import Footer from '../../components/Footer/Footer'

function Startseite() {
    const { lang } = useLang()

  return (
    <div className='Startseite'>
        <Nav />
        <header className='screen'>
            <video autoPlay loop muted playsInline>
                <source src="/portfolio/video/header.mp4" type="video/mp4"/>
            </video>
            <article>
                <h1 className='deutsch'>
                    {lang === "de" ? "Hallo, ich bin" : "Hello, I'm"}
                    <br />
                    <span>João Bastos</span>
                </h1>


                <ProjectText
                    textParagraph={<>
                    In Brasilien geboren und seit 2017 in Deutschland. Ich schreibe Code, der wie Design aussieht, und mache Design, das sich wie Code anfühlt.
                    <br /><br />
                    Ich bin ein eher ruhiger, aber kommunikativer Typ, der mit Leidenschaft programmiert, gerne Schach spielt und sich über Popkultur austauscht.
                    </>}
                />

                <ProjectTextEn
                    textParagraph={<>
                    Born in Brazil, living in Germany since 2017. I write code that looks like design, and make design that feels like code.
                    <br /><br />
                    I'm a rather quiet but communicative person who codes with passion, enjoys playing chess, and loves talking about pop culture.
                    </>}
                />
            </article>
        </header>

        <main>
            <section className='about'>
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

                        <ProjectText
                            textParagraph={<>
                            Mit der Zeit habe ich gemerkt, dass Programmieren nicht nur mein Job ist, es ist auch das, was mir richtig Spaß macht.
                            <br /><br />
                            Programmiersprachen ist für mich eine Art Challenge. Jedes neue Framework, jede Sprache und jedes Konzept ist für mich eine Gelegenheit, etwas Neues zu entdecken und besser zu werden.
                            <br /><br />
                            Ich bin einfach neugierig, wenn es um Programmierung geht und das hält mich immer am Lernen. Genau das liebe ich an diesem Beruf.
                            </>}
                        />

                        <ProjectTextEn
                            textParagraph={<>
                            Over time, I realized that programming isn't just my job, it's also what I genuinely enjoy.
                            <br /><br />
                            Programming languages are a kind of challenge for me. Every new framework, every language, and every concept is an opportunity to discover something new and grow.
                            <br /><br />
                            I'm simply curious when it comes to programming, and that keeps me constantly learning. That's exactly what I love about this field.
                            </>}
                        />

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
                        <a className="lebenslauf" href="/portfolio/#/cv" target="_blank" rel="noreferrer">
                        {lang === "de" ? "Lebenslauf" : "Resume"}
                        </a>
                    </div>
                </article>

                <img className="pic-me" src="/portfolio/img/me-about.png" alt="" />
            </section>

            <section className='projects'>

                <ProjectCard
                    name= 'Conquest'
                    img='/portfolio/project/Conquest/card.jpg'
                    tag= 'Game Design'
                />

                <ProjectCard
                    name= 'Sprout Run'
                    nameLink='Sprout'
                    img='/portfolio/project/Sprout/card.jpg'
                    tag= 'Game Design'
                />

                <ProjectCard
                    name='MyMixx'
                    img='/portfolio/project/MyMixx/card.jpg'
                    tag= 'UI-UX Design | Frontend Entwickler'
                />

                <ProjectCard
                    name='Caflex'
                    img='/portfolio/project/Caflex/card.jpg'
                    tag= 'UI-UX Design | Frontend Entwickler'
                />

                <ProjectCard
                    name='Essencial'
                    img='/portfolio/project/Essencial/card.jpg'
                    tag= 'UI-UX Design | Frontend Entwickler'
                />

                <ProjectCard
                    name='Targobank'
                    img='/portfolio/project/Targobank/card.jpg'
                    tag= 'UI-UX Design'
                />

                <ProjectCard
                    name='Praxis Lounge'
                    nameLink='Praxis'
                    img='/portfolio/project/Praxis/card.jpg'
                    tag= 'Design | Frontend Entwickler'
                />

            </section>
        </main>

        <Footer/>
    </div>
    )

}

export default Startseite
