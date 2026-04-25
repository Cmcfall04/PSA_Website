import type { Stat } from '../content/siteContent'

type StatGridProps = {
  stats: Stat[]
}

export function StatGrid({ stats }: StatGridProps) {
  if (stats.length === 0) return null

  return (
    <ul className="stat-grid" aria-label="Key figures">
      {stats.map((s) => (
        <li key={s.label} className="stat-card">
          <p className="stat-card__label">{s.label}</p>
          <p className="stat-card__value">{s.value}</p>
          {s.note ? <p className="stat-card__note">{s.note}</p> : null}
        </li>
      ))}
    </ul>
  )
}
