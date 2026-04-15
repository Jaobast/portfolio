import './Cv.css'
import { useBodyClass } from "../../hooks/useBodyClass"


function Cv() {

    useBodyClass("cv-background");

  return (
    <div className='Cv'>
        <div className="container">
            <img src="/portfolio/img/Bastos-Lebenslauf.png" alt="Lebenslauf" className='lebenslauf'/>
            <button>
                herunterladen
                <img src="/portfolio/svg/download.svg" alt="download icon" />
            </button>
        </div>
    </div>
  )
}

export default Cv
