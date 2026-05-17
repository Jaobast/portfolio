import './ProjectHeader.css'
import { useLang } from '../../hooks/LangContext'
import Tools from '../Tools/Tools'

type ProjectHeaderProps = {
    video?: string,
    img?: string,
    logo: string,
    name: string,
    linkWebsite?: string,
    linkGithub?: string,
    description?: React.ReactNode,
    descriptionEn?: React.ReactNode,
    tools?: {
        key: string
        label: string
    }[]
}

function ProjectHeader({video, img, logo, name, description, descriptionEn, tools, linkWebsite, linkGithub}: ProjectHeaderProps) {
    const { lang } = useLang()

    return (
        <header className='ProjectHeader'>
            <section className="screen">
                <img src={logo} alt={'logo' + name} className="logo" />

                {img ? (
                    <img src={img} alt="cover" className="cover" />
                ) : (
                    <video autoPlay loop muted playsInline>
                        <source src={video} type="video/mp4" />
                    </video>
                )}

                <div className="projectname-container text-block">
                    <div className="projectname">
                        <h1>{name}</h1>
                        <h2>Briefing </h2>
                    </div> 
                </div>
            </section>

            <section className='description text-block'>
                <p className="text">
                    {lang === "de" ? description : descriptionEn}
                    </p>

                <Tools tools={tools} />

                <div className="buttons-container">
                    {
                        linkWebsite?
                        <button className='bttn website'>
                            <a href={linkWebsite} target="_blank" rel="noopener noreferrer">
                                {lang === "de" ? "Projekt live sehen" : "view project live"}
                            </a>
                        </button>
                        : ""
                    }
                    {
                        linkGithub?
                        <button className='bttn github'>
                            <a href={linkGithub} target="_blank" rel="noopener noreferrer">
                                Github Code
                            </a>
                        </button>
                        : ""
                    }

                    
                </div>
            </section>
        </header>
    )
}

export default ProjectHeader