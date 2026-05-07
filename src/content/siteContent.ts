export type Stat = {
  label: string
  value: string
  note?: string
}

export type VisualKind = 'split' | 'map' | 'golf' | 'social' | 'tampa' | 'action' | 'partners'

export type SectionVisual = {
  kind: VisualKind
  title: string
  caption: string
  fullImageHref?: string
}

export type ContentSection = {
  id: string
  eyebrow: string
  title: string
  lead: string
  paragraphs: string[]
  bullets?: string[]
  stats?: Stat[]
  visual: SectionVisual
}

export type ActionGroup = {
  title: string
  items: string[]
}

export type Source = {
  title: string
  url: string
  note?: string
}

export const siteTitle = 'Water Justice Visibility Campaign'

export const hero = {
  eyebrow: 'University of Tampa student PSA',
  title: "While You're Scrolling, We're Running Out.",
  tagline: 'Fresh water is disappearing - but your feed would never tell you that.',
  ctaHref: '#hidden-cost',
  ctaLabel: "See What They're Not Showing You",
  secondaryHref: '#actions',
  secondaryLabel: 'Take action locally',
}

export const campaignDetails = {
  hashtag: 'Campaign hashtag coming soon',
  instagramHref: 'https://www.instagram.com/rethink.reduce/',
  instagramLabel: '@rethink.reduce',
}

export const navItems: { id: string; label: string }[] = [
  { id: 'problem', label: 'The crisis' },
  { id: 'hidden-cost', label: 'Hidden cost' },
  { id: 'tampa', label: 'Tampa' },
  { id: 'actions', label: 'Take action' },
  { id: 'partners', label: 'Partners' },
  { id: 'sources', label: 'Sources' },
]

export const sections: ContentSection[] = [
  {
    id: 'problem',
    eyebrow: 'The problem',
    title: "The Water Crisis Is Already Here - And It's Closer Than You Think",
    lead:
      "Most people think of water scarcity as someone else's problem. A drought in Arizona. A Day Zero warning in Cape Town. But the reality is much closer to home.",
    paragraphs: [
      'Fresh water makes up only 2.5% of all water on Earth. We are using it faster than it can be replenished.',
    ],
    stats: [
      {
        label: 'Americans affected',
        value: '30M',
        note: 'Nearly 30 million Americans live in areas with limited water supplies.',
      },
      {
        label: 'Aquifers drying',
        value: '53%',
        note: "Roughly 53% of the nation's aquifers are drying up as water systems warm.",
      },
      {
        label: 'Freshwater basins at risk',
        value: 'Nearly half',
        note: 'Many U.S. basins may not meet monthly water demand by 2071.',
      },
      {
        label: 'Florida drought deficit',
        value: '11 in.',
        note: 'Florida is experiencing a Level 2 drought and an 11-inch rainfall deficit.',
      },
    ],
    visual: {
      kind: 'map',
      title: 'Scarcity is local',
      caption: 'A map-inspired drought panel grounds the numbers in places people recognize.',
      fullImageHref: '/drought-map.png',
    },
  },
  {
    id: 'hidden-cost',
    eyebrow: 'The hidden cost of luxury water use',
    title: "What Your Feed Isn't Showing You",
    lead:
      'Social media is full of water. Pool content. Golf course aesthetics. WaterTok. But none of it shows you where that water comes from - or what it costs.',
    paragraphs: [
      'Water is not just being used. It is being used for aesthetics, entertainment, and trends while millions of Americans face shrinking supplies.',
    ],
    bullets: [
      'A typical American golf course uses around 312,000 gallons of water per day to maintain its greens.',
      'In arid regions like Palm Springs, that number exceeds 1 million gallons per day.',
      'Golf course irrigation across the U.S. totals approximately 2.08 billion gallons per day.',
      'Platforms reward aspirational, consequence-free content while the reality of scarcity rarely goes viral.',
    ],
    visual: {
      kind: 'golf',
      title: 'Green on one side, dry on the other',
      caption: 'A luxury landscape treatment contrasts bright turf with cracked, thirsty ground.',
    },
  },
  {
    id: 'tampa',
    eyebrow: 'Why it matters here',
    title: 'This Is a Tampa Problem Too',
    lead:
      'Florida may feel like a wet state, but it is not immune. The same water being used to keep golf courses green and water parks running is drawn from the same stressed systems that supply our drinking water.',
    paragraphs: [
      'Florida is one of the top four states for total water withdrawals in the U.S., alongside California, Texas, and Idaho.',
      'Tampa sits in a region where demand for water is growing while local supplies are under increasing pressure. If we cannot address the problem locally, we cannot begin to address it globally.',
    ],
    stats: [
      {
        label: 'Local frame',
        value: 'Tampa Bay',
        note: 'A familiar place makes the crisis harder to scroll past.',
      },
      {
        label: 'State context',
        value: 'Top 4',
        note: 'Florida ranks among the top states for total water withdrawals.',
      },
    ],
    visual: {
      kind: 'tampa',
      title: 'From campus lawns to community supply',
      caption: 'A local visual panel connects the campaign to Tampa and the University of Tampa.',
    },
  },
]

export const actionIntro = {
  id: 'actions',
  eyebrow: 'What you can do',
  title: 'You Have More Power Than You Think',
  body:
    'This is not about guilt. It is about awareness and action. Here is how you can start.',
}

export const actionGroups: ActionGroup[] = [
  {
    title: 'On social media',
    items: [
      'When you see luxury water content, ask: where does this water come from?',
      `Share campaign posts and use: ${campaignDetails.hashtag}.`,
      'Reframe the narrative by posting about conservation in a way that actually reaches people.',
    ],
  },
  {
    title: 'On campus',
    items: [
      'Push for transparent water usage reporting from University of Tampa administration.',
      'Engage student athletic organizations about the water footprint of maintaining fields and courses.',
      'Advocate for campus-wide water conservation initiatives.',
    ],
  },
  {
    title: 'In daily life',
    items: [
      'Reduce lawn and landscaping water waste.',
      'Support businesses and organizations that practice water recycling.',
      'Follow local drought conditions and water policy updates.',
    ],
  },
]

export const partnerSection = {
  id: 'partners',
  eyebrow: 'Our partners',
  title: "Who's Already Doing It Right",
  paragraphs: [
    'Change is possible. Walt Disney World Resort uses reclaimed water for 80% of its irrigation needs and 30% of its overall water needs. If a resort the size of a small city can do it, so can we.',
    'The campaign is also working with Tampa Terrance, a local Tampa Bay influencer, to bring this message to the community in a way that is honest, relatable, and worth watching.',
  ],
}

export const aboutSection = {
  id: 'about',
  eyebrow: 'About the campaign',
  title: 'About This Campaign',
  paragraphs: [
    'This campaign was created by students at the University of Tampa as part of a Water Justice media project.',
    'Our goal is simple: make visible what luxury water culture keeps hidden, and inspire real action starting right here in our own community.',
    'We are not asking you to stop having fun. We are asking you to think about what fun actually costs - and whether we can afford to keep paying that price.',
  ],
}

export const sourcesIntro =
  'The campaign guide cites these sources for water availability, aquifer stress, golf irrigation, Disney sustainability, and water demand context.'

export const sources: Source[] = [
  {
    title: 'USGS National Water Availability Assessment',
    url: 'https://www.usgs.gov/',
    note: 'January 2025 water availability context and limited-supply figures.',
  },
  {
    title: "Grist - Roughly 53 percent of the nation's aquifers are drying up",
    url: 'https://grist.org/',
    note: 'Aquifer depletion reporting cited in the campaign guide.',
  },
  {
    title: 'U.S. Forest Service / Colorado State University freshwater basin study',
    url: 'https://www.fs.usda.gov/',
    note: 'Future monthly demand risk across U.S. freshwater basins.',
  },
  {
    title: 'NPR / Audubon International golf course water estimates',
    url: 'https://www.npr.org/',
    note: 'Daily golf course water use estimates and regional comparisons.',
  },
  {
    title: 'USGA - How Much Water Does Golf Use',
    url: 'https://www.usga.org/',
    note: 'National golf irrigation usage context.',
  },
  {
    title: 'Disney Environmental Impact Report',
    url: 'https://disneyexperiences.com/',
    note: 'Reclaimed water use and sustainability reporting.',
  },
  {
    title: 'National Environmental Education Foundation water demand data',
    url: 'https://www.neefusa.org/',
    note: 'Background context on water demand and supply.',
  },
]
