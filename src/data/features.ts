// src/data/features.ts
export interface FeatureItem {
  id: string;
  title: string;
  subtitle?: string;
  blurb: string;
  highlights?: string[];
  route?: string;
}

export const FEATURES: FeatureItem[] = [
  {
    id: 'process-management',
    title: 'Process',
    subtitle: 'Management',
    blurb: 'Visualize process lifecycles, states, and transitions — spawn, schedule, block, and terminate with live diagrams and sample workloads.',
    highlights: ['State diagrams', 'Lifecycle traces', 'Interactive analyzers'],
    route: '/how-to',
  },
  {
    id: 'cpu-scheduling',
    title: 'CPU',
    subtitle: 'Scheduling',
    blurb: 'Explore scheduling policies — FCFS, SJF, Round Robin — and see how chosen policies impact throughput and fairness in real time.',
    highlights: ['Policy comparisons', 'Turnaround metrics', 'Quantum tuning'],
    route: '/how-to',
  },
  {
    id: 'memory',
    title: 'Memory',
    subtitle: 'Management',
    blurb: 'Inspect allocation strategies, fragmentation, paging, and caches with an intuitive visual memory map and allocation traces.',
    highlights: ['Heap/Stack maps', 'Paging visualization', 'Allocation traces'],
    route: '/how-to',
  },
];