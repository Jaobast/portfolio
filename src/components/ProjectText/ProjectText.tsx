import './ProjectText.css'
import { useLang } from '../../hooks/LangContext'

type ProjectTextProps = {
    textTitel?: string,
    textSubtitel?: string,
    textTheme?: string,
    textParagraph?: React.ReactNode,
}

function ProjectText({textTitel, textSubtitel, textTheme, textParagraph}: ProjectTextProps) {
    const { lang } = useLang()

  return (
    <div className={`ProjectText deutsch ${lang !== "de" ? "hidden" : ""}`}>
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

function ProjectTextEn({textTitel, textSubtitel, textTheme, textParagraph}: ProjectTextProps) {
    const { lang } = useLang()
  return (
    <div className={`ProjectText english ${lang !== "en" ? "hidden" : ""}`}>
      <div className='text-block'>
        {textTitel? (
          <div className='titel'>
            <h3>{textTitel}</h3>
            <h4>{textSubtitel}</h4>
          </div>
        ): ""}
        {textParagraph?(
          <div className="text">
            <p className='text-bold'>{textTheme}</p>
            <p>{textParagraph}</p>
          </div>
        ) : ""}
      </div>
    </div>
  )
}

export {ProjectText, ProjectTextEn}
