import { useNavigate } from "react-router-dom";
import './ProjectCard.css'

type cardProps= {
    img: string,
    name: string,
}

function ProjectCard({img, name}: cardProps) {

    const navigate = useNavigate();

    function openProject() {
        setTimeout(() => {
        navigate(`/${name}`);
        }, 500);
    }

  return (
    <div className='ProjectCard' onClick={openProject}>
        <img src={img} alt="" />
        <p>{name}</p>
    </div>
  )
}

export default ProjectCard
