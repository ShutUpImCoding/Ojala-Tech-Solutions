import { useLanguage } from '../context/LanguageContext'
import SEO from '../components/SEO'
import './ContactPage.css'

const IconEmail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m2 7 10 7 10-7"/>
  </svg>
)

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)

export default function ContactPage() {
  const { t } = useLanguage()
  const c = t.contact

  return (
    <main className="page contact-page">
      <SEO title={t.seo.contactTitle} description={t.seo.contactDesc} />

      <section className="cp-hero">
        <div className="container">
          <p className="hero__eyebrow">{c.eyebrow}</p>
          <h1>{c.heroTitle}</h1>
          <p className="cp-hero__sub">{c.heroSubtitle}</p>
        </div>
      </section>

      <section className="cp-body">
        <div className="container cp-grid">

          {/* Left — primary contact methods */}
          <div className="cp-main">
            <h2 className="cp-main__heading">{c.reachTitle}</h2>
            <p className="cp-main__intro">{c.reachIntro}</p>

            <div className="cp-methods">
              <a href="mailto:ojalatechsolutions@outlook.com" className="cp-method cp-method--link">
                <div className="cp-method__icon"><IconEmail /></div>
                <div className="cp-method__text">
                  <span className="cp-method__label">{c.emailLabel}</span>
                  <span className="cp-method__value">ojalatechsolutions@outlook.com</span>
                </div>
              </a>

              <div className="cp-method cp-method--disabled">
                <div className="cp-method__icon"><IconPhone /></div>
                <div className="cp-method__text">
                  <span className="cp-method__label">{c.phoneLabel}</span>
                  <span className="cp-method__value cp-method__value--placeholder">{c.phoneComingSoon}</span>
                </div>
              </div>

              <div className="cp-method">
                <div className="cp-method__icon"><IconPin /></div>
                <div className="cp-method__text">
                  <span className="cp-method__label">{c.addressLabel}</span>
                  <span className="cp-method__value">{c.addressLine2}</span>
                  <span className="cp-method__value">{c.addressLine3}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — response info */}
          <div className="cp-side">
            <div className="cp-info-card">
              <div className="cp-info-card__icon"><IconClock /></div>
              <h3>{c.responseTitle}</h3>
              <p>{c.responseBody}</p>
            </div>

            <div className="cp-info-card">
              <div className="cp-info-card__dot" aria-hidden="true" />
              <h3>{c.availTitle}</h3>
              <p>{c.availBody}</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
