import './Cv.css'
import { useBodyClass } from "../../hooks/useBodyClass"


function Cv() {

    useBodyClass("cv-background");

    const download = () => {
        const link = document.createElement("a");
        link.href = "/portfolio/img/Bastos-Lebenslauf.pdf";
        link.download = "Bastos-Lebenslauf.pdf";
        link.click();
    };

  return (
    <div className='Cv'>
        <div className="container">
            <img src="/portfolio/img/Bastos-Lebenslauf.png" alt="Lebenslauf" className='lebenslauf'/>
            <button onClick={download}>
                herunterladen
                <img src="/portfolio/svg/download.svg" alt="download icon" />
            </button>
        </div>
    </div>
  )
}

export default Cv
