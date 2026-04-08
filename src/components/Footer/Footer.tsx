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
                    <div className="info">
                        <p className='bold'>GitHub Repository</p>
                        <p>Portfolio</p>
                    </div>
                </div>

                <div className="info-column">
                    <div className="info">
                        <p className='bold'>Für weitere Frage:</p>
                        <p>joaobasto@outlook.de</p>
                    </div>
                    <div className="info">
                        <p className='bold'>GitHub Repository</p>
                        <p>Portfolio</p>
                    </div>
                </div>
            </div>
        </div>
     <img src="/portfolio/svg/logo.svg" alt="João Bastos logo" />
    </div>
  )
}

export default Footer
