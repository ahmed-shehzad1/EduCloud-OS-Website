export interface ModuleHighlight {
  label: string;
  value: string;
}

export interface TimelineNode {
  id: string;
  stepNumber: string;
  title: string;
  category: 'FOUNDATION' | 'CORE MODULE' | 'ARCHITECTURE' | 'ROADMAP';
  shortDesc: string;
  fullDesc: string;
  accentColor: '#E0003F' | '#D4AF37' | '#00F0FF' | '#00FF9D';
  metrics: ModuleHighlight[];
  demoRoute?: string;
}

export const TIMELINE_NODES: TimelineNode[] = [
  {
    id: 't-problem',
    stepNumber: '01',
    title: 'The Learning Gap',
    category: 'FOUNDATION',
    shortDesc: 'Abstract kernel concepts are difficult to master through static diagrams.',
    fullDesc: 'Operating system internals like process scheduling, memory allocation, and IPC are inherently dynamic. Traditional textbooks fail to render the real-time execution states and race conditions students need to understand.',
    accentColor: '#E0003F',
    metrics: [
      { label: 'Primary Obstacle', value: 'Static Visuals' },
      { label: 'Target Audience', value: 'CS Students & Educators' },
    ],
  },
  {
    id: 't-vision',
    stepNumber: '02',
    title: 'The EduCloud Laboratory',
    category: 'FOUNDATION',
    shortDesc: 'Turning complex operating system internals into live interactive state spaces.',
    fullDesc: 'EduCloud OS provides a hands-on sandbox where theoretical kernel concepts become visual micro-experiments. Learners can manipulate processes, adjust quantum slices, and inspect live memory maps.',
    accentColor: '#D4AF37',
    metrics: [
      { label: 'Core Paradigm', value: 'Explorable State Spaces' },
      { label: 'Simulation Level', value: 'Real-Time Telemetry' },
    ],
  },
  {
    id: 't-process',
    stepNumber: '03',
    title: 'Process Lifecycle Module',
    category: 'CORE MODULE',
    shortDesc: 'Observe thread creation, PCB transitions, and state machine signals.',
    fullDesc: 'Inspect how processes transition between Ready, Running, and Blocked states. Trace process control blocks (PCBs), signal propagation, and tree hierarchies step by step.',
    accentColor: '#E0003F',
    metrics: [
      { label: 'State Vectors', value: 'Ready / Run / Block' },
      { label: 'Tracked Entities', value: 'PCBs & Threads' },
    ],
  },
  {
    id: 't-scheduler',
    stepNumber: '04',
    title: 'Preemptive Scheduler',
    category: 'CORE MODULE',
    shortDesc: 'Run live races between FCFS, Shortest Job First, and Round-Robin.',
    fullDesc: 'Test scheduling algorithms in real-time execution scenarios. Tweak time quanta, observe context-switch overhead, and calculate average turnaround and waiting times.',
    accentColor: '#00F0FF',
    metrics: [
      { label: 'Algorithms', value: 'FCFS, SJF, Round-Robin' },
      { label: 'Interactive Controls', value: 'Quantum & Burst Times' },
    ],
    demoRoute: '/how-to',
  },
  {
    id: 't-memory',
    stepNumber: '05',
    title: 'Memory Virtualization',
    category: 'CORE MODULE',
    shortDesc: 'Visualize paging, frame allocation, TLB hits, and defragmentation.',
    fullDesc: 'Directly observe dynamic memory allocation algorithms (First-Fit, Best-Fit, Worst-Fit) and monitor physical address translation alongside real-time page fault frequency.',
    accentColor: '#00FF9D',
    metrics: [
      { label: 'Memory Policies', value: 'First-Fit / Best-Fit' },
      { label: 'Visualized Metrics', value: 'TLB Hits & Page Faults' },
    ],
  },
  {
    id: 't-architecture',
    stepNumber: '06',
    title: 'C++ & WASM Engine',
    category: 'ARCHITECTURE',
    shortDesc: 'Native simulation speed delivered straight to the browser.',
    fullDesc: 'EduCloud combines deterministic C++ simulation logic compiled to WebAssembly with a high-fps, hardware-accelerated React visualization interface for butter-smooth rendering.',
    accentColor: '#D4AF37',
    metrics: [
      { label: 'Simulation Core', value: 'C++ WebAssembly' },
      { label: 'Rendering Layer', value: 'React + CSS Matrix' },
    ],
  },
  {
    id: 't-future',
    stepNumber: '07',
    title: 'The Lab Horizon',
    category: 'ROADMAP',
    shortDesc: 'Expanding into Inter-Process Communication (IPC) and file systems.',
    fullDesc: 'Upcoming modules will introduce live deadlock detection (Banker Algorithm), shared memory queues, semaphores, and interactive virtual file system traversals.',
    accentColor: '#00F0FF',
    metrics: [
      { label: 'Upcoming Modules', value: 'Deadlocks & IPC' },
      { label: 'Goal', value: 'Full OS Curriculum Suite' },
    ],
  },
];