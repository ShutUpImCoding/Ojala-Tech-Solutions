import { NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import BrandIcon from './BrandIcon'
import './Navbar.css'

export default function Navbar() {
  const { t } = useLanguage()

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand">
          <BrandIcon size={30} />
          Ojala Tech Solutions
        </NavLink>
        <nav className="navbar__links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end>
            {t.nav.home}
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            {t.nav.services}
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            {t.nav.contact}
          </NavLink>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  )
}
