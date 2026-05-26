export const INBOUND_SIGNALS = [
  {
    name: 'KeeperHub',
    handle: '#protocol-guardian · partners channel',
    blurb:
      'Opened a dedicated #protocol-guardian channel in their #partners Discord and invited an integration PR. Reference integration in progress.',
    tag: 'Integration',
  },
  {
    name: 'Locus Team',
    handle: 'security collaboration request',
    blurb:
      'Requested collaboration on the security layer after seeing our work — unsolicited from their core team.',
    tag: 'Collaboration',
  },
  {
    name: 'The Blockrunner Podcast',
    handle: 'BillyXBT · @theblockrunner',
    blurb:
      'BillyXBT invited Argus to the show after seeing Protocol Guardian. Recording slot pending.',
    tag: 'Distribution',
  },
];

export const TRACTION_STATS = [
  { value: '4', label: 'Products shipped' },
  { value: '4', label: 'Hackathons submitted' },
  { value: '90', label: 'Days, zero to four' },
  { value: '2', label: 'Person team' },
];

export const PROBLEM_STATS = [
  {
    value: '$1.8B+',
    label: 'Lost to exploits',
    sub: 'in 2026 Q1 alone',
    tone: 'red',
  },
  {
    value: '< 60s',
    label: 'Attack to drained',
    sub: 'from start of attack to protocol drained',
    tone: 'yellow',
  },
  {
    value: '0',
    label: 'Autonomous agents',
    sub: 'at the protocol infrastructure layer today',
    tone: 'accent',
  },
];

export const COMPARISON = {
  current: {
    label: 'Current tools',
    items: [
      'Audit-only',
      'Alert-only',
      'Post-incident',
      'Static analysis',
      'No runtime awareness',
    ],
  },
  argus: {
    label: 'Argus',
    items: [
      'Pre-execution simulation',
      'Autonomous response',
      'Real-time mempool monitoring',
      'Behavioral intelligence',
      'Runtime enforcement',
    ],
  },
};

export const LOOP_STEPS = [
  {
    n: '01',
    title: 'Monitor',
    detail: 'Alchemy mempool WebSocket streams every pending transaction in real time.',
  },
  {
    n: '02',
    title: 'Classify',
    detail: 'Attack-pattern classifier + RAG knowledge base of 21 historical DeFi exploits ($3.7B total).',
  },
  {
    n: '03',
    title: 'Simulate',
    detail: 'EVM trace simulation (eth_call / debug_traceCall) before the tx lands on-chain.',
  },
  {
    n: '04',
    title: 'Act',
    detail: 'Autonomous on-chain response via Sepolia contracts — alert, pause, or block.',
  },
];

export const WHY_NOW = [
  {
    title: 'AI agents hit maturity',
    detail:
      'Agent frameworks reached production readiness in 2025–26. For the first time, autonomous on-chain response is technically viable.',
  },
  {
    title: 'Attack surface expanding',
    detail:
      '10,000+ new smart contracts deployed weekly. Protocols scale faster than human security teams can monitor.',
  },
  {
    title: 'The category doesn\'t exist yet',
    detail:
      'No autonomous security agent operates at the protocol infrastructure level today. We are the first mover.',
  },
];

export const TRUST_BADGES = [
  'ETHGlobal Open Agents 2026',
  'Colosseum Frontier',
  'KeeperHub Partner',
  'Live on Sepolia',
];
