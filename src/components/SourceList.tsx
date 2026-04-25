import type { Source } from '../content/siteContent'

type SourceListProps = {
  sources: Source[]
}

export function SourceList({ sources }: SourceListProps) {
  return (
    <ul className="source-list">
      {sources.map((s) => (
        <li key={s.url} className="source-list__item">
          <a href={s.url} className="source-list__link" target="_blank" rel="noreferrer noopener">
            {s.title}
          </a>
          {s.note ? <p className="source-list__note">{s.note}</p> : null}
        </li>
      ))}
    </ul>
  )
}
