import { useNavigate } from "react-router-dom";
import './ProjectCard.css'

type cardProps= {
    img: string,
    name: string,
    number: string,
}

function ProjectCard({img, name, number}: cardProps) {

    const navigate = useNavigate();

    function openProject() {
        setTimeout(() => {
        navigate(`/${name}`);
        }, 500);
    }

  return (
    <div className='ProjectCard' onClick={openProject}>
        <div className="img-container">
            <img src={img} alt="project cover" />
            <button className="bttn">Projekt anschauen</button>
        </div>
        <div className="name-container text-block">
            <p className="name">{name}</p>
            <p className="number">{number}</p>

        </div>
    </div>
  )
}

export default ProjectCard
