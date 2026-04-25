import { hero, navItems, siteTitle } from '../content/siteContent'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <p className="site-header__eyebrow">{siteTitle}</p>
        <h1 className="site-header__title">{hero.title}</h1>
        <p className="site-header__tagline">{hero.tagline}</p>
        <p className="site-header__cta">
          <a className="button button--primary" href={hero.ctaHref}>
            {hero.ctaLabel}
          </a>
        </p>
        <nav className="site-nav" aria-label="Page sections">
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
      </div>
    </header>
  )
}
