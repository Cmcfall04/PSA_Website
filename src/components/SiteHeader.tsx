import { hero, navItems, siteTitle } from '../content/siteContent'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <nav className="site-nav" aria-label="Page sections">
          <a className="site-nav__brand" href="#main" aria-label={`${siteTitle} home`}>
            <span className="site-nav__mark" aria-hidden="true" />
            <span>{siteTitle}</span>
          </a>
          <ul className="site-nav__list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="site-nav__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p className="hero-copy__tagline">{hero.tagline}</p>
            <div className="hero-copy__actions" aria-label="Primary calls to action">
              <a className="button button--primary" href={hero.ctaHref}>
                {hero.ctaLabel}
              </a>
              <a className="button button--secondary" href={hero.secondaryHref}>
                {hero.secondaryLabel}
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Golf-course green water culture contrasted with drought">
            <div className="hero-visual__panel hero-visual__panel--lush">
              <img src="/hero-golf-course.webp" alt="" aria-hidden="true" />
              <span>Luxury water</span>
            </div>
            <div className="hero-visual__panel hero-visual__panel--dry">
              <img src="/hero-dry-ground.jpg" alt="" aria-hidden="true" />
              <span>Shared scarcity</span>
            </div>
            <div className="hero-visual__badge">
              <strong>2.5%</strong>
              <span>of Earth&apos;s water is fresh</span>
            </div>
          </div>
        </div>
        <a className="scroll-indicator" href="#featured-video" aria-label="Scroll down to featured video">
          <span>Scroll to video</span>
          <span className="scroll-indicator__arrow" aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}
