import { useLanguage } from '../context/LanguageContext'
import './LanguageSwitcher.css'

export default function LanguageSwitcher() {
  const { lang, toggleLanguage } = useLanguage()

  return (
    <button
      className="lang-switcher"
      onClick={toggleLanguage}
      aria-label={lang === 'en' ? 'Switch to Finnish' : 'Vaihda englanniksi'}
    >
      <span className={lang === 'en' ? 'lang-option active' : 'lang-option'}>EN</span>
      <span className="lang-divider">|</span>
      <span className={lang === 'fi' ? 'lang-option active' : 'lang-option'}>FI</span>
    </button>
  )
}
