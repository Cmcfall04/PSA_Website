import {
  aboutSection,
  actionGroups,
  actionIntro,
  campaignDetails,
  partnerSection,
  sections,
  siteTitle,
  sources,
  sourcesIntro,
} from './content/siteContent'
import { Section } from './components/Section'
import { SiteHeader } from './components/SiteHeader'
import { SourceList } from './components/SourceList'
import { StatGrid } from './components/StatGrid'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main className="site-main" id="main">
        {sections.map((section, index) => (
          <div key={section.id}>
            <Section section={section} reversed={index % 2 === 1} />
            {section.stats && section.stats.length > 0 ? <StatGrid stats={section.stats} /> : null}
          </div>
        ))}

        <section className="action-section" id={actionIntro.id} aria-labelledby="actions-heading">
          <div className="action-section__intro">
            <div className="section-heading section-heading--left">
              <p className="eyebrow">{actionIntro.eyebrow}</p>
              <h2 id="actions-heading">{actionIntro.title}</h2>
              <p>{actionIntro.body}</p>
            </div>
            <figure className="action-photo">
              <img src="/utampa-students.jpg" alt="University of Tampa students walking on campus" />
              <figcaption>Student action starts with conversations people actually see.</figcaption>
            </figure>
          </div>
          <div className="action-grid">
            {actionGroups.map((group) => (
              <article className="action-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="partner-section" id={partnerSection.id} aria-labelledby="partners-heading">
          <div className="partner-section__copy">
            <p className="eyebrow">{partnerSection.eyebrow}</p>
            <h2 id="partners-heading">{partnerSection.title}</h2>
            {partnerSection.paragraphs.map((p) => (
              <p key={p} className="prose">
                {p}
              </p>
            ))}
          </div>
          <div className="partner-panel" aria-label="Partner credibility visual">
            <figure className="partner-card">
              <img src="/disney.jpg" alt="Walt Disney World castle" />
              <figcaption>
                <strong>80%</strong>
                <span>Disney irrigation needs met with reclaimed water</span>
              </figcaption>
            </figure>
            <figure className="partner-card">
              <img src="/tampa-terrance.jpg" alt="Tampa Terrance standing by the Tampa waterfront" />
              <figcaption>
                <strong>Local voice</strong>
                <span>Photo credit: Tampa Terrance</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="about-section" id={aboutSection.id} aria-labelledby="about-heading">
          <p className="eyebrow">{aboutSection.eyebrow}</p>
          <h2 id="about-heading">{aboutSection.title}</h2>
          {aboutSection.paragraphs.map((p) => (
            <p key={p} className="prose">
              {p}
            </p>
          ))}
        </section>

        <section className="sources-section" id="sources" aria-labelledby="sources-heading">
          <div className="section-heading section-heading--left">
            <p className="eyebrow">Research base</p>
            <h2 id="sources-heading">Sources</h2>
            <p className="prose">{sourcesIntro}</p>
          </div>
          <SourceList sources={sources} />
        </section>
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <p>{siteTitle} - a University of Tampa student water justice media project.</p>
          <ul aria-label="Campaign links">
            <li>
              <a
                className="site-footer__instagram"
                href={campaignDetails.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="site-footer__instagram-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill="currentColor"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                  />
                </svg>
                <span>{campaignDetails.instagramLabel}</span>
              </a>
            </li>
            <li>{campaignDetails.hashtag}</li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default App
