import './Footer.css'
import { useLang } from '../../hooks/LangContext'



function Footer() {
    const { lang } = useLang()


  return (
    <div className='Footer'>
        <div className="text-block">
            <p className='titel'>Thanks for visiting</p>

            <div className="infos-container">
                <div className="info-column">
                    <div className="info">
                        <p className='bold'>
                            {lang === "de" ? "Aktualisiert in" : "Updated on:"}
                        </p>
                        <p>2026</p>
                    </div>
                    <a href="https://github.com/Jaobast/portfolio" target="_blank" rel="noopener noreferrer">
                        <p className='bold'>GitHub Repository</p>
                        <div>
                            <p>Portfolio</p>
                            <img src="/portfolio/svg/arrow.svg" alt="pfeil icon" />
                        </div>
                    </a>
                </div>

                <div className="info-column">
                    <div className="info">
                        <p className='bold'>
                            {lang === "de" ? "Für weitere Fragen:" : "Any questions?"}
                        </p>
                        <p>joaobastos@outlook.de</p>
                    </div>

                    <a href="https://www.linkedin.com/in/joao-bastos-profil/" target="_blank" rel="noopener noreferrer">
                        <p className='bold'>
                            {lang === "de" ? "Lass uns vernetzen:" : "Let's connect"}
                        </p>
                        <div>
                            <p>LinkedIn</p>
                            <img src="/portfolio/svg/arrow.svg" alt="pfeil icon" />
                        </div>
                    </a>

                </div>
            </div>
        </div>
     <img src="/portfolio/svg/logo.svg" alt="João Bastos logo"  className='logo'/>
    </div>
  )
}

export default Footer
