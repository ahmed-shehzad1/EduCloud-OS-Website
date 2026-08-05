export interface RainDropSpec {
  id: string;
  leftOffset: number; // Percentage horizontal position (0-100)
  speedDuration: number; // Fall speed in seconds
  delay: number; // Animation start delay in seconds
  length: number; // Height in pixels
  opacity: number;
}

export interface FragmentItem {
  id: string;
  title: string;
  subtitle: string;
  role: 'process' | 'scheduler' | 'memory';
  blurb: string;
  route: string;
  rainDensity: number;
  rainDrops: RainDropSpec[];
}

export const FRAGMENTS: FragmentItem[] = [
  {
    id: 'process-cloud',
    title: 'Process Lifecycle',
    subtitle: 'KERNEL_SPAWN // PID_TREE',
    role: 'process',
    blurb: 'Dynamic execution states collapsing into unified control blocks. Watch execution threads condense out of fragmented signal traps.',
    route: '/how-to',
    rainDensity: 8,
    rainDrops: Array.from({ length: 8 }).map((_, i) => ({
      id: `p-drop-${i}`,
      leftOffset: (i * 12 + 7) % 95,
      speedDuration: 1.4 + (i % 3) * 0.4,
      delay: (i * 0.25) % 1.5,
      length: 18 + (i % 4) * 8,
      opacity: 0.4 + (i % 3) * 0.25,
    })),
  },
  {
    id: 'scheduler-cloud',
    title: 'Scheduler Engine',
    subtitle: 'POLICY // SJF_FCFS_MATRIX',
    role: 'scheduler',
    blurb: 'Preemptive quantum slices converging into balanced runqueues. Real-time scheduling policies distilled into fluid telemetry streams.',
    route: '/how-to',
    rainDensity: 10,
    rainDrops: Array.from({ length: 10 }).map((_, i) => ({
      id: `s-drop-${i}`,
      leftOffset: (i * 9.5 + 4) % 95,
      speedDuration: 1.1 + (i % 4) * 0.35,
      delay: (i * 0.18) % 1.8,
      length: 22 + (i % 3) * 10,
      opacity: 0.5 + (i % 4) * 0.2,
    })),
  },
  {
    id: 'memory-cloud',
    title: 'Memory Virtualizer',
    subtitle: 'PAGING // TLB_ALLOC_MAP',
    route: '/how-to',
    role: 'memory',
    blurb: 'Fragmented physical frames reassembling into continuous virtual address space under active TLB page replacement.',
    rainDensity: 9,
    rainDrops: Array.from({ length: 9 }).map((_, i) => ({
      id: `m-drop-${i}`,
      leftOffset: (i * 11 + 6) % 95,
      speedDuration: 1.3 + (i % 3) * 0.5,
      delay: (i * 0.22) % 1.6,
      length: 16 + (i % 4) * 9,
      opacity: 0.45 + (i % 3) * 0.25,
    })),
  },
];