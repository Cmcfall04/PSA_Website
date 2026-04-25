export type Stat = {
  label: string
  value: string
  note?: string
}

export type ContentSection = {
  id: string
  title: string
  paragraphs: string[]
  stats?: Stat[]
}

export type Source = {
  title: string
  url: string
  note?: string
}

export const siteTitle = 'Every Drop Counts'

export const hero = {
  title: 'Water we see—and water we lose',
  tagline:
    'A PSA on discretionary water use: when fountains, resorts, and big attractions stay full, lakes and rivers can run low. Learn what is at stake and what you can do.',
  ctaHref: '#actions',
  ctaLabel: 'What you can do',
}

export const navItems: { id: string; label: string }[] = [
  { id: 'tension', label: 'The tension' },
  { id: 'luxury', label: 'Visible luxury' },
  { id: 'recreation', label: 'Big recreation' },
  { id: 'surface-water', label: 'Lakes & rivers' },
  { id: 'actions', label: 'Take action' },
  { id: 'sources', label: 'Sources' },
]

export const sections: ContentSection[] = [
  {
    id: 'tension',
    title: 'The tension',
    paragraphs: [
      'Fresh water is limited. Communities, farms, and ecosystems all draw from the same rivers, reservoirs, and aquifers. Hotter, drier weather and longer dry spells mean less snowpack and runoff to refill the system.',
      'Some of the most debated uses are also the most visible: sparkling fountains, resort landscapes, and large pools. They are not the whole story of water stress—but in stressed basins, they can symbolize how casually we treat a shared resource.',
    ],
    stats: [
      {
        label: 'Regional water stress index',
        value: '[TBD]',
        note: 'Replace with a metric or map you are assigned to cite (e.g., local watershed report).',
      },
      {
        label: 'Population served by your example basin',
        value: '[TBD]',
        note: 'Optional class project placeholder.',
      },
    ],
  },
  {
    id: 'luxury',
    title: 'Visible luxury',
    paragraphs: [
      'Decorative fountains and water features often recirculate the same water, but water still leaves the system through evaporation, wind drift, and splash—especially in arid, windy places. Lighting and pumping add energy use on top of the water footprint.',
      'Resort pools, golf turf, and lush non-native landscaping can demand large, steady irrigation. During drought, some cities restrict ornamental water first because it is nonessential—even when other sectors use more water overall.',
    ],
    stats: [
      {
        label: 'Example fountain or resort policy',
        value: '[TBD: location]',
        note: 'Add a city ordinance, drought stage, or facility you researched.',
      },
    ],
  },
  {
    id: 'recreation',
    title: 'Big recreation',
    paragraphs: [
      'Water parks move a lot of water, but most of it stays in closed loops: filtration, treatment, and reuse. What they “consume” is mainly the makeup water needed to replace evaporation, splash-out, backwashing, and cleaning—still meaningful in dry regions, but different from “pouring away” the same volume every day.',
      'The public debate is often about fairness and priorities: should a stressed basin host attractions that look like endless summer while nearby ecosystems or farms face cutbacks? Good messaging distinguishes total pool volume from daily losses and cites local numbers.',
    ],
    stats: [
      {
        label: 'Estimated daily makeup water (example venue)',
        value: '[TBD]',
        note: 'Use operator reports, news investigations, or technical PDFs for your region.',
      },
      {
        label: 'Compare to: golf course or alfalfa per day',
        value: '[TBD]',
        note: 'Context helps; verify before publishing.',
      },
    ],
  },
  {
    id: 'surface-water',
    title: 'Lakes, rivers, and drying',
    paragraphs: [
      'Reservoirs and natural lakes fall when inflows drop and withdrawals continue. Warm air speeds evaporation from open water. What looks like a “bathtub ring” at the marina is a signal that the whole basin is out of balance.',
      'Rivers tell the same story in motion: lower snowpack, earlier melt, upstream diversions, and dams can all reduce flow. Fish habitat, water quality, and downstream communities depend on those flows. When discretionary use rises in the same watershed, tensions rise too—especially if the waste is obvious.',
      'Tie your PSA to real geography: pick one lake or river reach, name the stressor (drought, allocation, climate trend), and cite a trustworthy source. Below are placeholders until you plug in your case study.',
    ],
    stats: [
      {
        label: 'Lake or reservoir level change',
        value: '[TBD: lake, % or ft]',
        note: 'e.g., agency gage or satellite lake level product.',
      },
      {
        label: 'River flow vs. historical average',
        value: '[TBD: river reach]',
        note: 'USGS or equivalent streamgage snapshot for a date you cite.',
      },
    ],
  },
  {
    id: 'actions',
    title: 'What you can do',
    paragraphs: [
      'Fix leaks at home; they are silent thieves. Shorten showers and turn off taps while brushing. Choose native or drought-tolerant plants instead of thirsty turf.',
      'Support utilities and policies that reward efficiency (metering, pricing, reuse). Ask schools and towns to publish water data for big ornamental users so decisions are transparent.',
      'When you speak up, be accurate: distinguish water use from consumption, cite local numbers, and avoid blaming one group for a whole watershed’s math unless your sources support it.',
    ],
  },
]

export const sourcesIntro =
  'Start here for reputable background. Replace or extend this list with the exact studies your instructor requires.'

export const sources: Source[] = [
  {
    title: 'EPA WaterSense — statistics and facts',
    url: 'https://www.epa.gov/watersense/statistics-and-facts',
    note: 'Indoor and outdoor efficiency context.',
  },
  {
    title: 'University of Arizona WRRC — Fountains: water wasters or works of art?',
    url: 'https://wrrc.arizona.edu/publication/fountains-water-wasters-or-works-art',
    note: 'Public perception vs. engineering of decorative water.',
  },
  {
    title: 'WhiteWater West — Water and energy sustainability (PDF)',
    url: 'https://www.whitewaterwest.com/wp-content/uploads/2022/06/108-Water-and-Energy-Sustainability.pdf',
    note: 'Industry framing: reuse vs. makeup water in water parks.',
  },
  {
    title: 'Water conservation at waterparks (industry PDF)',
    url: 'http://ishc.com/wp-content/uploads/Water_Conservation_Waterparks.pdf',
    note: 'Operations and conservation talking points; verify link before citing in a paper.',
  },
]

export const tbdChecklist: string[] = [
  '[TBD] Name one lake or river reach you will feature with a map link.',
  '[TBD] Add two numbers you can defend (e.g., annual makeup water, irrigated acres, or storage change).',
  '[TBD] Credit your instructor, school, or club on the page footer if required.',
  '[TBD] Run spell-check and fact-check before publishing.',
]
