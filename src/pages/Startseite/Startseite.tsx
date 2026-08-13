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
                    In Brasilien geboren und seit 2017 in Deutschland. Ich schreibe Code, der wie Design aussieht, und mache Designs, die sich wie Code anfühlen.
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
                        <h2> Design Engineer</h2>

                        <ul>
                            <li>Frontend Dev</li>
                            <li>UX/UI</li>
                            <li>Product Designer</li>
                        </ul>
                    </div>

                    <div className="text">

                        <ProjectText
                            textParagraph={<>
                            Mit der Zeit habe ich gemerkt, dass Design nicht nur mein Job ist, es ist auch das, was mir richtig Spaß macht.
                            <br /><br />
                            User Interfaces sind für mich eine Art Challenge. Jedes neue Layout, jedes Interaktionsmuster und jedes visuelle Detail ist für mich eine Gelegenheit, etwas Neues zu entdecken und besser zu werden.
                            <br /><br />
                            Ich bin einfach neugierig, wenn es um die Gestaltung von Interfaces geht, und das hält mich immer am Lernen. Genau das liebe ich an diesem Beruf.
                            </>}
                        />

                        <ProjectTextEn
                            textParagraph={<>
                            Over time, I've realized that design isn't just my job, it's also what genuinely makes me happy.
                            <br /><br />
                            User interfaces are a kind of challenge for me. Every new layout, every interaction pattern, and every visual detail is an opportunity to discover something new and get better.
                            <br /><br />
                            I'm simply curious when it comes to crafting interfaces, and that's what keeps me learning. That's exactly what I love about this profession.
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

                <div className="polaroids">
                    <img className="pic_01" src="/portfolio/img/polaroid_01.png" alt="picture of me 01"/>
                    <img className="pic_02" src="/portfolio/img/polaroid_02.png" alt="picture of me 02"/>
                    <img className="pic_03" src="/portfolio/img/polaroid_03.png" alt="picture of me 03"/>

                </div>
            </section>

            <section className='projects'>

                <ProjectCard
                    name='Mova'
                    img='/portfolio/project/Mova/card.jpg'
                    tag= 'ein Online-Shop-Konzept für handgefertigte Keramikvasen'
                />

                <ProjectCard
                    name='MyMixx'
                    img='/portfolio/project/MyMixx/card.jpg'
                    tag= 'UI-UX Design | Frontend Entwickler | E-Commerce | Design System'
                />

                <ProjectCard
                    name='Caflex'
                    img='/portfolio/project/Caflex/card.jpg'
                    tag= 'UI-UX Design | Frontend Entwickler | Webapp | Design System'
                />

                <ProjectCard
                    name='Essencial'
                    img='/portfolio/project/Essencial/card.jpg'
                    tag= 'UI Design | Frontend Entwickler | Landing Page | Design System'
                />

                <ProjectCard
                    name='Targobank'
                    img='/portfolio/project/Targobank/card.jpg'
                    tag= 'UI Design | Design System'
                />

                <ProjectCard
                    name='Praxis Lounge'
                    nameLink='Praxis'
                    img='/portfolio/project/Praxis/card.jpg'
                    tag= 'UI Design | Frontend Entwickler | Webapp | Design System'
                />

            </section>
        </main>

        <Footer/>
    </div>
    )

}

export default Startseite
