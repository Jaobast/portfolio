import { useNavigate } from "react-router-dom";
import './NextProject.css'

const projects = ['MyMixx', 'Caflex', 'Essencial', 'Praxis', 'Dabei']

type NextProjectProps = {
    thisProject: string,
}

function NextProject({thisProject}: NextProjectProps) {
    const navigate = useNavigate();

    const filteredProjects = projects.filter(p => p !== thisProject);

    function openProject(project: string) {
        setTimeout(() => {
            navigate(`/${project}`);
        }, 500);
    }

    return (
        <div className='NextProject'>
            <h2 className='text-block'>Vielleicht gefällt es dir noch</h2>
            <div>
                {filteredProjects.map((project, index) => (
                    <button
                        key={project}
                        className={index === filteredProjects.length - 1 ? 'no-mobile' : ''}
                        onClick={() => openProject(project)}
                    >
                        <img src={`/portfolio/project/${project}/card.jpg`} alt={project} />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default NextProject