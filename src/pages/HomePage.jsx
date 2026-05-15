import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import SEO from '../components/SEO'
import './HomePage.css'

export default function HomePage() {
  const { t } = useLanguage()
  const h = t.home

  return (
    <main className="page">
      <SEO title={t.seo.homeTitle} description={t.seo.homeDesc} />

      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="hero__eyebrow">{h.eyebrow}</p>
            <h1 className="hero__title">{h.title}</h1>
            <p className="hero__tagline">{h.tagline}</p>
            <div className="hero__actions">
              <Link to="/contact" className="btn-primary">{h.ctaPrimary}</Link>
              <a href="#services" className="btn-outline">{h.ctaSecondary}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">{h.servicesTitle}</h2>
          <p className="section-subtitle">{h.servicesSubtitle}</p>
          <div className="services__grid">
            <div className="service-card">
              <div className="service-card__icon"></div>
              <h3>{h.service1Title}</h3>
              <p>{h.service1Desc}</p>
            </div>
            <div className="service-card">
              <div className="service-card__icon"></div>
              <h3>{h.service2Title}</h3>
              <p>{h.service2Desc}</p>
            </div>
            <div className="service-card">
              <div className="service-card__icon"></div>
              <h3>{h.service3Title}</h3>
              <p>{h.service3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About / CTA */}
      <section className="about">
        <div className="container about__inner">
          <div className="about__text">
            <h2>{h.aboutTitle}</h2>
            <p>{h.aboutP1}</p>
            <p>{h.aboutP2}</p>
          </div>
          <div className="about__cta">
            <p>{h.aboutCta}</p>
            <Link to="/contact" className="btn-primary">{h.contactUs}</Link>
          </div>
        </div>
      </section>

    </main>
  )
}
