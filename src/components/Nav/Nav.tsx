import './Nav.css'

function Nav() {

  return (
    <nav>
        <a href="">
            <img src="/portfolio/svg/logo.svg" alt="logo-joao" className="logo"/>
        </a>

        <a className="no-mobile" href="mailto:joaobastos@outlook.de">
            <img src="/portfolio/svg/mail.svg" alt="icon-mail" className='mail'/>
            <p>joaobastos@outlook.de</p>
        </a>
    </nav>
  )
}

export default Nav
