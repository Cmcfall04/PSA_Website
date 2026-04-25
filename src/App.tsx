import {
  sections,
  siteTitle,
  sources,
  sourcesIntro,
  tbdChecklist,
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
        {sections.map((s) => (
          <Section key={s.id} id={s.id} title={s.title}>
            {s.paragraphs.map((p, i) => (
              <p key={i} className="prose">
                {p}
              </p>
            ))}
            {s.stats && s.stats.length > 0 ? <StatGrid stats={s.stats} /> : null}
          </Section>
        ))}

        <section className="content-section" id="sources" aria-labelledby="sources-heading">
          <h2 className="content-section__title" id="sources-heading">
            Sources and TBD
          </h2>
          <div className="content-section__body">
            <p className="prose">{sourcesIntro}</p>
            <SourceList sources={sources} />
            <h3 className="content-section__subhead">Your checklist</h3>
            <ul className="tbd-list">
              {tbdChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <p>
          {siteTitle} — public service message. Replace placeholders with verified local data.
        </p>
      </footer>
    </>
  )
}

export default App
