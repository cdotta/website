// All the personal content in one place. Edit here to update the site.

export const site = {
  name: 'Cristian Dotta',
  handle: 'cristian dotta',
  role: 'Senior Backend Engineer',
  kicker: 'senior backend engineer · high-scale apis & distributed systems',
  email: 'cdotta90@gmail.com',
  github: 'https://github.com/cdotta',
  githubLabel: 'github.com/cdotta',
  // TODO: replace with your real LinkedIn URL (or remove if you don't use it).
  linkedin: 'https://www.linkedin.com/in/cdotta',
  linkedinLabel: 'linkedin.com/in/cdotta',
  location: 'Montevideo, Uruguay — remote, Americas',
  // Real domain (also set as `site` in astro.config.mjs).
  url: 'https://crisislabs.dev',
  resumePdf: '/Cristian-Dotta-Resume.pdf',
  description:
    'Senior backend engineer with 13+ years building high-scale APIs and distributed systems in TypeScript and Node.js. Most recently Tech Lead at Exodus (NYSE: EXOD), owning a public API at 1.5M monthly active users and ~12M requests a day.',
};

// Headline rendered with the final clause in the accent color.
export const hero = {
  lines: ['systems that stay', 'out of the way,'],
  accentLine: 'so people stay in control.',
  blurb:
    'Backend engineer with 13+ years building high-performance systems in TypeScript and Node.js. Most recently led exchange engineering at a publicly traded crypto company: a public API executing real-money trades across external providers, where reliability, idempotency, and data integrity are non-negotiable. Hands-on Solidity, and a daily practitioner of AI-augmented engineering.',
};

export const skills = [
  {
    label: 'languages',
    body: 'TypeScript / Node.js · JavaScript · Python · Ruby · SQL · React · Solidity',
  },
  {
    label: 'backend',
    body: 'Distributed systems · high-throughput REST & GraphQL APIs · event-driven & async processing (Kafka, BullMQ — queues, retries, idempotency) · PostgreSQL · Redis · MongoDB',
  },
  {
    label: 'infra & ops',
    body: 'AWS (incl. Lambda serverless) · Kubernetes · Docker · CI/CD · monitoring & alerting · incident response & on-call ownership',
  },
  {
    label: 'ai engineering',
    body: 'Agentic workflows (Claude Code, custom skills, MCP integrations) · prompt engineering · LLM APIs (Anthropic) · LLM-integrated automation for monitoring & incident analysis',
  },
  {
    label: 'blockchain',
    body: 'Production Solidity — upgradeable smart contracts · EVM · Hyperlane cross-chain bridges · Arbitrum (L2) · Chainlink (VRF, Price Feeds) · Ethereum signature verification',
  },
];

// `bullets` may contain <em> markup to emphasise metrics in the accent ink color.
export const experience = [
  {
    period: 'Nov 2021 — Present',
    org: 'Exodus',
    meta: 'NYSE American: EXOD',
    role: 'Tech Lead, Exchange Team',
    bullets: [
      "Led a 6-engineer team building the exchange behind Exodus' self-custodial wallet: swap aggregation, provider integrations, order routing, and pricing. The product line drives <em>~97% of company revenue</em>. Mentored the team and set technical direction.",
      'Developed and operated the public XO Swap API (<em>~12M requests/day</em>), the trade execution service used by the wallet and 10+ external B2B partners. Event-driven processing over Kafka and BullMQ, where idempotency, retries, and data integrity are non-negotiable.',
      'Designed and executed zero-downtime, multi-phase data migrations (dual-write, backfill, then gradual cutover) across orders and provider assets, improving data integrity and eliminating fragile legacy mappings.',
      'Owned monitoring, alerting, reporting, and incident response end to end. Built AI-assisted observability tooling integrating monitoring platforms with LLM agents for faster incident analysis.',
      'Removed <em>~28k net lines of code</em> while consolidating fragmented services (e.g. PricingService), cutting maintenance cost and simplifying core architecture.',
      'Hardened geolocation enforcement (IP validation, forwarded-header edge cases) into a shared networking package, strengthening compliance posture across services.',
    ],
  },
  {
    period: '2024 — Present',
    org: 'Personal AI Agent Infrastructure',
    role: 'Side Project',
    bullets: [
      'Designed and operate a persistent agent runtime: Claude Code on a self-hosted Hetzner VPS (Docker, Traefik, Dokploy), driven through a Telegram bot, with custom agent skills scoped to distinct domains (work, journaling, nutrition tracking).',
      'Built a Hono/TypeScript/SQLite backend with external API integrations and Git-backed storage pipelines. Transactional email (magic-link auth) runs on Resend. Full ownership from requirements and architecture to deployment, monitoring, and iteration.',
    ],
  },
  {
    period: '2021 — 2023',
    org: 'Web3 Engineering',
    role: 'Treasure DAO (Tech Lead) · Anonymice (Freelance)',
    bullets: [
      'Built a cross-chain NFT bridge with Hyperlane on Arbitrum. Led on-chain migrations and shipped Smolverse smart contracts on the Treasure framework.',
      'Built a fully on-chain game on upgradeable Solidity contracts, owning architecture from design and testing through deployment and upgrades. Integrated Chainlink VRF and Price Feeds into production contracts.',
      'Designed a quest and campaign platform for ecosystem partners, securing admin operations with Ethereum signature verification. Technically led and leveled up the team.',
      'For Anonymice, primary developer: delivered “Evolutions” soul-bound tokens plus multiple smart contracts and dapps in Solidity, Node.js, and React.',
    ],
  },
];

export const projects = [
  {
    name: 'remote-mcp-starter',
    tag: 'open source',
    description:
      'A production-grade template for remote MCP servers — Hono, Better Auth (personal access tokens), stateless Streamable HTTP, tenant isolation, and full integration tests.',
    stack: 'TypeScript · Hono · MCP',
    href: 'https://github.com/cdotta/remote-mcp-starter',
    linkLabel: 'GitHub',
  },
  {
    name: 'Journal',
    tag: 'live',
    description:
      'A digital Bullet Journal: fast daily and monthly logging, habit tracking, and LLM-assisted paste-and-parse capture. Web and mobile, self-hosted.',
    stack: 'React Router · Prisma · Capacitor',
    href: 'https://journal.crisislabs.dev/welcome',
    linkLabel: 'Visit',
  },
];

export const earlier = [
  {
    name: 'Analytics Fire',
    meta: 'Senior JavaScript Engineer · 2018–2021',
    body: 'Designed REST and GraphQL APIs in Node/TypeScript for clients including SunPower, Enphase, and Arthrex.',
  },
  {
    name: 'Moove It',
    meta: 'Technical Architect · 2015–2020',
    body: 'Set company-wide technical guidelines and quality standards; senior engineering for Disney, Hulu, and Catapult Health.',
  },
  {
    name: 'Geoforce',
    meta: 'Senior Software Engineer (Freelance) · 2020',
    body: 'Improved GraphQL response times by 40% in a dealer-facing application by introducing data-loaders (Ruby on Rails, React, Kafka).',
  },
  {
    name: 'MIDES',
    meta: 'Software Engineer · 2012–2015',
    body: 'Built a business management system in Java; major SQL performance optimization work.',
  },
];

export const education = [
  { title: 'Degree in Computer Science', meta: 'Universidad Católica del Uruguay · 2014' },
  { title: 'Cambridge FCE', meta: 'International House London · 2016' },
];
