import { useLanguage } from '../context/LanguageContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__brand">{t.footer.brand}<br></br>{t.footer.brandNum}</span>
        <span className="footer__copy">&copy; {year} {t.footer.rights}</span>
      </div>
    </footer>
  )
}
