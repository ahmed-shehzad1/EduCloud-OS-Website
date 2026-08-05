export interface NodeHighlight {
  label: string;
  detail: string;
}

export interface TimelineNode {
  id: string;
  step: string;
  title: string;
  category: 'origin' | 'module' | 'tech' | 'roadmap';
  summary: string;
  deepDive: string;
  accentColor: '#E0003F' | '#D4AF37' | '#00F0FF' | '#00FF9D';
  coords: { x: number; y: number };
  highlights: NodeHighlight[];
  linkTo?: string;
}

export const TIMELINE_NODES: TimelineNode[] = [
  {
    id: 't-problem',
    step: '01',
    title: 'The Learning Gap',
    category: 'origin',
    summary: 'Operating system mechanics are locked behind abstract code and textbook diagrams.',
    deepDive: 'Concepts like process synchronization, TLB caching, and preemptive scheduling are notoriously difficult to grasp through static lectures alone, creating a high barrier for computer science students.',
    accentColor: '#E0003F',
    coords: { x: 20, y: 25 },
    highlights: [
      { label: 'Challenge', detail: 'Opaque internal state transitions' },
      { label: 'Impact', detail: 'High cognitive load for learners' },
    ],
  },
  {
    id: 't-vision',
    step: '02',
    title: 'The EduCloud Vision',
    category: 'origin',
    summary: 'An interactive lab turning complex system internals into explorable visual models.',
    deepDive: 'EduCloud bridges theoretical computer science and practical understanding by providing a hands-on sandbox where users can manipulate real-time simulations of OS kernels.',
    accentColor: '#D4AF37',
    coords: { x: 50, y: 15 },
    highlights: [
      { label: 'Goal', detail: 'Tangible, real-time feedback loops' },
      { label: 'Approach', detail: 'Interactive micro-experiments' },
    ],
  },
  {
    id: 't-process',
    step: '03',
    title: 'Process Fragment',
    category: 'module',
    summary: 'Trace lifecycle state changes, thread forks, and PCB signal distributions.',
    deepDive: 'Observe how processes transition between Ready, Running, and Blocked states while tracing state vectors and child process hierarchies in real time.',
    accentColor: '#E0003F',
    coords: { x: 18, y: 70 },
    highlights: [
      { label: 'Core Concepts', detail: 'PCB, State Machine, Signals' },
      { label: 'Lab Focus', detail: 'Process Lifecycle & Traces' },
    ],
  },
  {
    id: 't-scheduler',
    step: '04',
    title: 'Scheduler Fragment',
    category: 'module',
    summary: 'Benchmark CPU scheduling policies in real-time execution races.',
    deepDive: 'Compare First-Come First-Served (FCFS), Shortest Job First (SJF), and Round-Robin. Experiment with time quanta, observe context switches, and analyze turnaround latency.',
    accentColor: '#00F0FF',
    coords: { x: 50, y: 75 },
    highlights: [
      { label: 'Policies', detail: 'FCFS, SJF, Round-Robin' },
      { label: 'Lab Focus', detail: 'Preemption & Gantt Metrics' },
    ],
    linkTo: '/how-to',
  },
  {
    id: 't-memory',
    step: '05',
    title: 'Memory Fragment',
    category: 'module',
    summary: 'Visualize virtual memory mapping, page faults, and fragmentation.',
    deepDive: 'Inspect how physical frames are assigned, dynamic memory allocation strategies (First-Fit, Best-Fit), and watch how defragmentation reclaims scattered space.',
    accentColor: '#00FF9D',
    coords: { x: 82, y: 70 },
    highlights: [
      { label: 'Core Concepts', detail: 'Paging, TLB Hits, Allocation' },
      { label: 'Lab Focus', detail: 'Virtual-to-Physical Maps' },
    ],
  },
  {
    id: 't-architecture',
    step: '06',
    title: 'Hybrid Engine',
    category: 'tech',
    summary: 'C++ core simulation engine paired with a reactive web interface.',
    deepDive: 'EduCloud uses modular C++ simulation logic compiled to WebAssembly for deterministic execution, connected to an animated React/TypeScript visualization layer.',
    accentColor: '#D4AF37',
    coords: { x: 80, y: 25 },
    highlights: [
      { label: 'Kernel Engine', detail: 'C++ compiled to WebAssembly' },
      { label: 'UI Layer', detail: 'React + Framer Motion' },
    ],
  },
  {
    id: 't-future',
    step: '07',
    title: 'The Horizon',
    category: 'roadmap',
    summary: 'Expanding into Inter-Process Communication (IPC) and file system drivers.',
    deepDive: 'Upcoming modules include live deadlock detection visuals (Banker Algorithm), shared memory IPC queues, and virtual file system directory tree traversals.',
    accentColor: '#00F0FF',
    coords: { x: 50, y: 45 },
    highlights: [
      { label: 'Next Modules', detail: 'IPC, Deadlocks, File Systems' },
      { label: 'Target', detail: 'Full OS Curriculum Suite' },
    ],
  },
];