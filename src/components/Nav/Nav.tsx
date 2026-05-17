import './Nav.css'
import { LangToggle } from '../../hooks/LangToogle'

function Nav() {

  return (
    <nav>
        <div className='only-mobile'></div>
        <a href="">
            <img src="/portfolio/svg/logo.svg" alt="logo-joao" className="logo"/>
        </a>

        <div className='lang-mail'>
          <LangToggle />

          <a className="no-mobile" href="mailto:joaobastos@outlook.de">
              <p>joaobastos@outlook.de</p>
          </a>
        </div>

    </nav>
  )
}

export default Nav