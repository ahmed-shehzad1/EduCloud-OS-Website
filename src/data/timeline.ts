// src/data/timeline.ts
export interface TimelineNode {
  id: string;
  step: string; // "01", "02", ...
  title: string;
  summary: string;
  role?: 'fragment' | 'meta';
  colorHint?: 'ruby' | 'gold' | 'white';
}

export const TIMELINE_NODES: TimelineNode[] = [
  {
    id: 't-01',
    step: '01',
    title: 'The Problem',
    summary: 'Operating system concepts are abstract and hard to visualize, making them difficult to teach and learn.',
    role: 'meta',
    colorHint: 'white',
  },
  {
    id: 't-02',
    step: '02',
    title: 'The Idea',
    summary: 'Create an interactive laboratory where learners can observe processes, scheduling, memory, and IPC through tangible visuals.',
    role: 'meta',
    colorHint: 'gold',
  },
  {
    id: 'frag-process',
    step: '—',
    title: 'Process Fragment',
    summary: 'The process fragment visualizes lifecycle states and traces.',
    role: 'fragment',
    colorHint: 'ruby',
  },
  {
    id: 't-03',
    step: '03',
    title: 'Architecture',
    summary: 'Modular design powered by C++ core simulations and a web visualization layer.',
    role: 'meta',
    colorHint: 'white',
  },
  {
    id: 'frag-scheduler',
    step: '—',
    title: 'Scheduler Fragment',
    summary: 'The scheduler fragment lets you compare policies — FCFS, SJF — through small experiments.',
    role: 'fragment',
    colorHint: 'gold',
  },
  {
    id: 't-04',
    step: '04',
    title: 'Experience',
    summary: 'Interactive modules transform abstract OS concepts into hands-on, explorable experiences.',
    role: 'meta',
    colorHint: 'ruby',
  },
  {
    id: 'frag-memory',
    step: '—',
    title: 'Memory Fragment',
    summary: 'Memory maps, fragmentation visuals, and allocation traces on demand.',
    role: 'fragment',
    colorHint: 'white',
  },
  {
    id: 't-05',
    step: '05',
    title: 'The Future',
    summary: 'Expand the lab with new modules, deeper simulations, and educational tooling.',
    role: 'meta',
    colorHint: 'gold',
  },
];