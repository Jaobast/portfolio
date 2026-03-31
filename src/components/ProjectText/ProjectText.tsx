import './ProjectText.css'

type ProjectTextProps = {
    textTitel?: string,
    textSubtitel?: string,
    textTheme?: string,
    textParagraph?: React.ReactNode,
}

function ProjectText({textTitel, textSubtitel, textTheme, textParagraph}: ProjectTextProps) {

  return (
    <div className='ProjectText'>
        <div className='text-block'>
            {textTitel? (
                <div className='titel'>
                    <h3>{textTitel}</h3>
                    <h4>{textSubtitel}</h4>
                </div>
            ): ""}
            {textParagraph?(
                <div className="text">
                    <p className='text-bold' >{textTheme}</p>
                    <p>{textParagraph}</p>
                </div>
            ) : ""}
        </div>
    </div>
  )
}

export default ProjectText
