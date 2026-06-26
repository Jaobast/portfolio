import './Nav.css'
import { LangToggle } from '../../hooks/LangToogle'

function Nav() {
  return (
    <>
      <nav>
          <a href="">
              <img src="/portfolio/svg/logo.svg" alt="logo-joao" className="logo"/>
          </a>
          <div className='lang-mail'>
            <a className="no-mobile" href="mailto:joaobastos@outlook.de">
                <p>joaobastos@outlook.de</p>
            </a>
          </div>
      </nav>

      <LangToggle />
    </>
  )
}

export default Nav