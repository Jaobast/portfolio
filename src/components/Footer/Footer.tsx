import './Footer.css'


function Footer() {


  return (
    <div className='Footer'>
        <div className="text-block">
            <p className='titel'>Thanks for visiting</p>

            <div className="infos-container">
                <div className="info-column">
                    <div className="info">
                        <p className='bold'>Aktuaisiert in</p>
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
                        <p className='bold'>Für weitere Frage:</p>
                        <p>joaobasto@outlook.de</p>
                    </div>

                    <a href="https://www.linkedin.com/in/joao-bastos-profil/" target="_blank" rel="noopener noreferrer">
                        <p className='bold'>Lass uns vernetzen</p>
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
