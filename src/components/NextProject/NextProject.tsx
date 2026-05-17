import { useNavigate } from "react-router-dom";
import './NextProject.css'
import { useLang } from '../../hooks/LangContext'

const projects = ['Conquest', 'Sprout', 'MyMixx', 'Caflex', 'Essencial', 'Praxis', 'Targobank']

type NextProjectProps = {
    thisProject: string,
}

function NextProject({thisProject}: NextProjectProps) {
    const { lang } = useLang()
    const navigate = useNavigate();

    const currentIndex = projects.indexOf(thisProject);

    const filteredProjects = [
        ...projects.slice(currentIndex + 1),
        ...projects.slice(0, currentIndex)
    ];

    function openProject(project: string) {
        setTimeout(() => {
            navigate(`/${project}`);
        }, 500);
    }

    return (
        
        <div className='NextProject'>
            <h2 className='text-block'>
                {lang === "de" ? "Vielleicht gefällt es dir noch" : "You might also like:"}
            </h2>
            <div>
                {filteredProjects.map((project, index) => (
                    <button
                        key={project}
                        className={
                            index === filteredProjects.length - 1 ? 'no-mobile no-tablet no-desktop'
                            : index === filteredProjects.length - 2 ? 'no-mobile no-tablet no-desktop'
                            : index === filteredProjects.length - 3 ? 'no-mobile'
                            : ''
                        }
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