import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  children: ReactNode
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section className="content-section" id={id} aria-labelledby={`${id}-heading`}>
      <h2 className="content-section__title" id={`${id}-heading`}>
        {title}
      </h2>
      <div className="content-section__body">{children}</div>
    </section>
  )
}
