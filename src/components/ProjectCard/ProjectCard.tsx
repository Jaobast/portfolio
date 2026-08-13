import * as motion from "motion/react-client"
import { useNavigate } from "react-router-dom";
import './ProjectCard.css'

type cardProps= {
    img: string,
    nameLink?: string,
    name: string,
    tag: string,
}

function ProjectCard({img, name, nameLink, tag}: cardProps) {

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
                whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: 1.2,
                        ease: "easeInOut",
                    }
                }}
                viewport={{
                amount: "some",
                }}
            />
            <button className="bttn">
                <img src="/portfolio/svg/arrow-open.svg" alt="arrow icon" />
            </button>
        </div>
        <div className="name-container">
            <p className="name">{name}</p>
            <p className="tag">{tag}</p>

        </div>
    </div>
  )
}

export default ProjectCard
