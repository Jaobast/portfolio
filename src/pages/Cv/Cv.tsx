import './Cv.css'
import { useBodyClass } from "../../hooks/useBodyClass"
import { useLang } from '../../hooks/LangContext'


function Cv() {

    useBodyClass("cv-background");
    const { lang } = useLang()

    const download = () => {
        const link = document.createElement("a");
        link.href = "/portfolio/img/Bastos-Lebenslauf.pdf";
        link.href = lang === "de" ? "/portfolio/img/Bastos-Lebenslauf.pdf" : "/portfolio/img/Bastos-Resume.pdf";
        link.download = lang === "de" ? "Bastos-Lebenslauf.pdf" : "Bastos-Resume.pdf";
        link.click();
    };

  return (
    <div className='Cv'>
        <div className="container">
            {lang === "de" ?
                <img src="/portfolio/img/Bastos-Lebenslauf.png" alt="Lebenslauf" className='lebenslauf'/> : 
                <img src="/portfolio/img/Bastos-Resume.png" alt="Resume" className='lebenslauf'/>
             }
            
            <button onClick={download}>
                {lang === "de" ? "herunterladen" : "Download"}
                <img src="/portfolio/svg/download.svg" alt="download icon" />
            </button>
        </div>
    </div>
  )
}

export default Cv
