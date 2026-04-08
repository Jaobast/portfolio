import './ProjectHeader.css'
import Tools from '../Tools/Tools'

type ProjectHeaderProps = {
    video?: string,
    img?: string,
    logo: string,
    name: string,
    linkWebsite?: string,
    linkGithub?: string,
    description?: React.ReactNode,
    tools?: {
        key: string
        label: string
    }[]
}

function ProjectHeader({video, img, logo, name, description, tools, linkWebsite, linkGithub}: ProjectHeaderProps) {

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
                        <h2>Briefing</h2>
                    </div> 
                </div>
            </section>

            <section className='description text-block'>
                <p className="text">{description}</p>

                <Tools tools={tools} />

                <div className="buttons-container">
                    {
                        linkWebsite?
                        <button className='bttn website'>
                            <a href={linkWebsite} target="_blank" rel="noopener noreferrer">
                                Projekt live sehen
                            </a>
                        </button>
                        : ""
                    }
                    {
                        linkGithub?
                        <button className='bttn github'>
                            <a href={linkGithub} target="_blank" rel="noopener noreferrer">
                                Code auf Github
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