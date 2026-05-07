import { useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import type { ContentSection, SectionVisual } from '../content/siteContent'

type SectionProps = {
  section: ContentSection
  reversed?: boolean
}

function VisualPanel({ visual }: { visual: SectionVisual }) {
  const showCaption = visual.kind !== 'tampa'
  const [mapModalOpen, setMapModalOpen] = useState(false)
  const mapModalTitleId = useId()

  useEffect(() => {
    if (!mapModalOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMapModalOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [mapModalOpen])

  return (
    <aside className={`visual-card visual-card--${visual.kind}`} aria-label={visual.caption}>
      <div className="visual-card__art" aria-hidden="true">
        <span className="visual-card__shape visual-card__shape--one" />
        <span className="visual-card__shape visual-card__shape--two" />
        <span className="visual-card__shape visual-card__shape--three" />
      </div>
      {showCaption ? (
        <div className="visual-card__content">
          <p>{visual.title}</p>
          <span>{visual.caption}</span>
          {visual.fullImageHref ? (
            <button
              type="button"
              className="visual-card__link"
              onClick={() => setMapModalOpen(true)}
            >
              View full drought map
            </button>
          ) : null}
        </div>
      ) : null}

      {mapModalOpen && visual.fullImageHref
        ? createPortal(
            <div
              className="image-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby={mapModalTitleId}
            >
              <button
                type="button"
                className="image-modal__backdrop"
                aria-label="Close full map"
                onClick={() => setMapModalOpen(false)}
              />
              <div className="image-modal__panel">
                <h2 id={mapModalTitleId} className="image-modal__title">
                  Full drought map
                </h2>
                <button
                  type="button"
                  className="image-modal__close"
                  aria-label="Close"
                  onClick={() => setMapModalOpen(false)}
                >
                  ×
                </button>
                <img
                  className="image-modal__img"
                  src={visual.fullImageHref}
                  alt="U.S. Drought Monitor map at full size"
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </aside>
  )
}

export function Section({ section, reversed = false }: SectionProps) {
  return (
    <section
      className={`content-section ${reversed ? 'content-section--reversed' : ''}`}
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
    >
      <div className="content-section__copy">
        <p className="eyebrow">{section.eyebrow}</p>
        <h2 className="content-section__title" id={`${section.id}-heading`}>
          {section.title}
        </h2>
        <p className="content-section__lead">{section.lead}</p>
        {section.paragraphs.map((p) => (
          <p key={p} className="prose">
            {p}
          </p>
        ))}
        {section.bullets ? (
          <ul className="feature-list">
            {section.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="content-section__media">
        <VisualPanel visual={section.visual} />
      </div>
    </section>
  )
}
