// Copy this folder to `content/` and make it yours:
//
//     cp -r content.example content
//
// `content/` is gitignored, so your details never enter the repo. Everything the
// site shows — homepage, retro page, résumé PDF, llms.txt — is generated from
// this one file. Replace portrait.jpg, headshot.jpg and og.png alongside it.

export const site = {
  name: 'Robin Vahl',
  handle: 'robin vahl',
  role: 'Senior Backend Engineer',
  kicker: 'nine years · go, postgres, distributed systems',
  email: 'you@example.com',
  github: 'https://github.com/your-handle',
  githubLabel: 'github.com/your-handle',
  linkedin: 'https://www.linkedin.com/in/your-handle',
  linkedinLabel: 'linkedin.com/in/your-handle',
  // /retro footer only.
  brand: 'YOURBRAND',
  since: '2016',
  location: 'Lisbon, Portugal — remote, Europe',
  // Also set as `site` in astro.config.mjs.
  url: 'https://example.com',
  resumePdf: '/Robin-Vahl-Resume.pdf',
  description:
    'Senior backend engineer, nine years on payment infrastructure and distributed systems in Go and PostgreSQL. Most recently Staff Engineer at Kestrel Payments, running the ledger behind 40k transactions a day.',
};

// Headline rendered with the final clause in the accent color.
export const hero = {
  lines: ['senior software', 'engineer,'],
  accentLine: 'backend mostly.',
};

// One list per row. The web joins items with ` · `, the résumé with `, ` — keep them
// as items so the two renderings can never drift apart again.
export const skills = [
  {
    label: 'Languages',
    items: ['Go', 'TypeScript / Node.js', 'Python', 'SQL'],
  },
  {
    label: 'Backend',
    items: [
      'Distributed systems',
      'REST & gRPC APIs',
      'event-driven processing (NATS, Postgres queues)',
      'PostgreSQL',
      'Redis',
    ],
  },
  {
    label: 'Infra & Ops',
    items: ['GCP', 'Terraform', 'Kubernetes', 'CI/CD', 'monitoring & alerting', 'on-call ownership'],
  },
];

// `bullets` may contain <em> markup to emphasise metrics in the accent ink color.
// The résumé strips it.
export const experience = [
  {
    period: 'Mar 2021 — Present',
    org: 'Kestrel Payments',
    meta: 'Series B',
    role: 'Staff Engineer, Ledger',
    bullets: [
      'Led a 4-engineer team on the double-entry ledger behind every payout, <em>40k transactions a day</em>. Set technical direction and mentored two engineers into senior roles.',
      'Rebuilt settlement reconciliation as an idempotent event consumer, which took the monthly manual-correction count from 90 to under 5.',
      'Ran a zero-downtime Postgres 12 to 16 migration (logical replication, dual-read, gradual cutover) across four services.',
    ],
  },
  {
    period: '2019 — 2021',
    org: 'Vellum Studio',
    role: 'Backend Engineer',
    bullets: [
      'Built inventory and fulfilment APIs in Go for three retail clients, including a same-day delivery slot allocator.',
      'Introduced contract tests between services, ending a recurring class of deploy-order incidents.',
    ],
  },
];

export const projects = [
  {
    name: 'pgqueue',
    tag: 'open source',
    description:
      'A job queue that is just PostgreSQL — SKIP LOCKED, no broker, no separate deployment. Go library plus a small CLI.',
    stack: 'Go · PostgreSQL',
    href: 'https://github.com/your-handle/pgqueue',
    linkLabel: 'GitHub',
  },
  {
    name: 'Tideline',
    tag: 'live',
    description: 'Tide and swell forecasts for the Portuguese coast, scraped nightly and served as a static site.',
    stack: 'Go · SQLite · Astro',
    href: 'https://example.com/tideline',
    linkLabel: 'Visit',
  },
];

// `role` and `years` stay separate so the web can render `role · years` and the
// résumé `role (years)` without either one being re-typed.
export const earlier = [
  {
    name: 'Northgate Logistics',
    role: 'Software Engineer',
    years: '2016 – 2019',
    body: 'Built route-planning and driver-facing services in Python and Go.',
  },
  {
    name: 'Freelance',
    role: 'Full-stack Developer',
    years: '2015 – 2016',
    body: 'Small business websites and internal tools; mostly Django and Postgres.',
  },
];

export const education = [
  { title: 'BSc Computer Science', org: 'University of Coimbra', year: '2015' },
];

// The résumé PDF. Its own summary and title — the print register is deliberately
// terser than the homepage — but every fact below it comes from the data above.
export const resume = {
  title: 'Senior Backend Engineer — Payments & Distributed Systems',
  headshot: 'headshot.jpg',
  summary:
    'Backend engineer, nine years in Go and PostgreSQL. Most recently Staff Engineer on the ledger at a Series B payments company, where a double-counted event is somebody being paid twice. Owns the whole thing: schema design, the zero-downtime migrations, the alerting, the on-call pager.',
};

// public/llms.txt — what crawling agents read. `highlights` is an editorial
// greatest-hits selection, so it is written by hand; everything else is derived.
export const llms = {
  summary:
    'Senior Backend Engineer with nine years building payment infrastructure and distributed systems in Go and PostgreSQL. Most recently Staff Engineer on the ledger team at Kestrel Payments, owning the double-entry ledger behind 40k transactions a day. Open to senior backend roles, remote across Europe.',
  years: 'nine years',
  // Curated, not the full skills list — this is the 'if you read one line' answer.
  coreStack: 'Go, PostgreSQL, TypeScript / Node.js, NATS, Redis, GCP, Terraform, Kubernetes',
  differentiators:
    'double-entry ledger design; zero-downtime Postgres migrations at transaction volume; idempotent event processing',
  highlights: [
    'Staff Engineer on the ledger at Kestrel Payments, Mar 2021 – present — 40k transactions a day.',
    'Rebuilt settlement reconciliation as an idempotent event consumer; monthly manual corrections went from 90 to under 5.',
    'Ran a zero-downtime Postgres 12 to 16 migration across four services.',
  ],
  contact: 'Open to senior backend roles, remote across Europe.',
};
