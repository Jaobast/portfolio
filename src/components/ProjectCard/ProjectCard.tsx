import * as motion from "motion/react-client"
import { useNavigate } from "react-router-dom";
import './ProjectCard.css'

type cardProps= {
    img: string,
    nameLink?: string,
    name: string,
    number: string,
}

function ProjectCard({img, name, nameLink, number}: cardProps) {

    const navigate = useNavigate();

    function openProject() {
        setTimeout(() => {
            if (nameLink) {
                navigate(`/${nameLink}`);
            } else{
                navigate(`/${name}`);
            }
        }, 500);
    }

  return (
    <div className='ProjectCard' onClick={openProject}
    
    >
        <div className="img-container">
            <motion.img src={img} alt="project cover"
                initial={{ opacity: 0, scale: 0.8 }}

                whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.5, bounce: 0.4 },
                }
                }}
                viewport={{
                amount: "some",
                }}
            />
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
