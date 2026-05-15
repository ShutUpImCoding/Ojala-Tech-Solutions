import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import SEO from '../components/SEO'
import './ServicesPage.css'

const TECH_STACK = [
  'Android', 'CSS / SCSS', 'FHIR', 'Git',
  'HTML5', 'JavaScript', 'Kotlin', 'Node.js',
  'React', 'React Native', 'REST APIs', 'TypeScript',
  'Vite', 'Wear OS',
]

const PERSONAL_PROJECTS = [
  {
    title: 'Mobile App for Horse Training Management',
    type: 'Mobile App Development · Thesis',
    desc: 'React Native app with Firestore for managing horse training. Users can save their horses and track training sessions. Focused on usability and data consistency.',
    tech: ['React Native', 'Firestore'],
    links: [
      { label: 'Theseus', url: 'https://www.theseus.fi/handle/10024/902166' },
      { label: 'GitHub', url: 'https://github.com/ShutUpImCoding/stable-diary' },
    ],
  },
  {
    title: 'Wear OS Patient Care Application',
    type: 'Wear OS · Health Tech',
    desc: 'Designed and developed independently in Kotlin to support patient care use cases. Health-focused features with real-time data handling and interactions.',
    tech: ['Kotlin', 'Wear OS', 'Android'],
    links: [],
  },
  {
    title: 'Wearable Heart Rate Data Visualization',
    type: 'Mobile App · Data Visualization',
    desc: 'React Native app for displaying heart rate data from smartwatches. Python backend authenticates and retrieves data from the wearable service and transfers it to the mobile app.',
    tech: ['React Native', 'Python', 'REST APIs'],
    links: [],
  },
]

// TODO: Replace when real projects arrive
const COMPANY_PROJECTS = [
  {
    title: 'Client Project',
    desc: 'What was built, for whom, and the key outcome delivered.',
    tech: ['React', 'Vite'],
    links: [],
  },
  {
    title: 'Client Project',
    desc: 'What was built, for whom, and the key outcome delivered.',
    tech: ['JavaScript', 'CSS'],
    links: [],
  },
]

export default function ServicesPage() {
  const { t } = useLanguage()
  const s = t.services

  return (
    <main className="page">
      <SEO title={t.seo.servicesTitle} description={t.seo.servicesDesc} />

      {/* Page hero */}
      <section className="sp-hero">
        <div className="container">
          <p className="hero__eyebrow">{s.eyebrow}</p>
          <h1>{s.heroTitle}</h1>
          <p className="sp-hero__sub">{s.heroSubtitle}</p>
        </div>
      </section>

      {/* Developer card + projects carousel */}
      <section className="sp-dev">
        <div className="container">
          <h2 className="section-title">{s.devSectionTitle}</h2>
          <div className="sp-dev__card">
            <div className="sp-dev__avatar" aria-hidden="true">NO</div>
            <div className="sp-dev__info">
              <h3 className="sp-dev__name">{s.devName}</h3>
              <p className="sp-dev__role">{s.devRole}</p>
              <p className="sp-dev__bio">{s.devBio}</p>
              <div className="sp-dev__tech">
                <span className="sp-dev__tech-label">{s.techLabel}</span>
                <div className="sp-tags">
                  {TECH_STACK.map(tag => (
                    <span key={tag} className="sp-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="sp-dev__social">
                <a
                  href="https://www.linkedin.com/in/netta-ojala"
                  className="sp-social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ShutUpImCoding"
                  className="sp-social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <svg viewBox="0 0 19 19" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clipRule="evenodd"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="sp-carousel-section">
            <h3 className="sp-carousel-section__title">{s.personalTitle}</h3>
            <p className="sp-carousel-section__sub">{s.personalSubtitle}</p>
            <ProjectCarousel projects={PERSONAL_PROJECTS} viewLabel={s.viewProject} />
          </div>
        </div>
      </section>

      {/* Company projects */}
      <section className="sp-company">
        <div className="container">
          <h2 className="section-title">{s.companyTitle}</h2>
          <p className="section-subtitle">{s.companySubtitle}</p>
          <div className="sp-coming-soon">
            <div className="sp-coming-soon__icon" aria-hidden="true">◎</div>
            <p className="sp-coming-soon__label">{s.comingSoon}</p>
            <p className="sp-coming-soon__sub">{s.comingSoonSub}</p>
          </div>
        </div>
      </section>

    </main>
  )
}

function ProjectCarousel({ projects, viewLabel }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = projects.length

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActive(i => (i + 1) % count), 4000)
    return () => clearInterval(id)
  }, [paused, count])

  const prev = () => setActive(i => (i - 1 + count) % count)
  const next = () => setActive(i => (i + 1) % count)

  return (
    <div
      className="sp-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="sp-carousel__window">
        <div
          className="sp-carousel__track"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {projects.map((project, i) => (
            <div key={i} className="sp-carousel__slide">
              <ProjectCard project={project} viewLabel={viewLabel} />
            </div>
          ))}
        </div>
      </div>

      <button className="sp-carousel__btn sp-carousel__btn--prev" onClick={prev} aria-label="Previous project">&#8249;</button>
      <button className="sp-carousel__btn sp-carousel__btn--next" onClick={next} aria-label="Next project">&#8250;</button>

      <div className="sp-carousel__dots">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`sp-carousel__dot${i === active ? ' active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Project ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project, viewLabel }) {
  return (
    <div className="sp-project-card">
      <div className="sp-project-card__body">
        {project.type && <p className="sp-project-card__type">{project.type}</p>}
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
      </div>
      <div className="sp-project-card__footer">
        <div className="sp-tags">
          {project.tech.map(tag => (
            <span key={tag} className="sp-tag sp-tag--sm">{tag}</span>
          ))}
        </div>
        {project.links?.length > 0 && (
          <div className="sp-project-card__links">
            {project.links.map(link => (
              <a
                key={link.url}
                href={link.url}
                className="sp-project-card__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label} →
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
