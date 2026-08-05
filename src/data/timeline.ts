export interface KernelMetric {
  label: string;
  value: string;
  unit?: string;
  status: 'nominal' | 'warning' | 'optimal';
}

export interface TimelineNode {
  id: string;
  stepHex: string;
  codeName: string;
  title: string;
  tagline: string;
  phaseRole: 'genesis' | 'architecture' | 'core-module' | 'future';
  accentColor: '#E0003F' | '#D4AF37' | '#00F0FF' | '#00FF9D';
  spatialCoords: { x: number; y: number; z: number };
  telemetry: KernelMetric[];
}

export const TIMELINE_NODES: TimelineNode[] = [
  {
    id: 'node-genesis',
    stepHex: '0x01',
    codeName: 'ABSTRACT_VOID',
    title: 'Visual Friction',
    tagline: 'Opaque kernel boundaries obfuscate OS fundamentals.',
    phaseRole: 'genesis',
    accentColor: '#E0003F',
    spatialCoords: { x: -35, y: -20, z: 0 },
    telemetry: [
      { label: 'VISUAL_LATENCY', value: 'INF', status: 'warning' },
      { label: 'INTUITION_GAP', value: '98.4', unit: '%', status: 'warning' },
    ],
  },
  {
    id: 'node-blueprint',
    stepHex: '0x02',
    codeName: 'CORE_LAB_ARCH',
    title: 'Tangible State Space',
    tagline: 'Mapping raw thread behavior directly onto interactive visual nodes.',
    phaseRole: 'architecture',
    accentColor: '#D4AF37',
    spatialCoords: { x: 0, y: -40, z: 20 },
    telemetry: [
      { label: 'CANVAS_FPS', value: '120', unit: 'fps', status: 'optimal' },
      { label: 'SIM_ACCURACY', value: '99.9', unit: '%', status: 'optimal' },
    ],
  },
  {
    id: 'node-process',
    stepHex: '0x03',
    codeName: 'THREAD_SPAWN',
    title: 'Process Lifecycle Engine',
    tagline: 'Real-time PCB tracking, signal propagation, and thread tree collapse.',
    phaseRole: 'core-module',
    accentColor: '#E0003F',
    spatialCoords: { x: -45, y: 15, z: -10 },
    telemetry: [
      { label: 'ACTIVE_PCBS', value: '1,024', status: 'nominal' },
      { label: 'THREAD_SYNC', value: '0.2', unit: 'ms', status: 'optimal' },
    ],
  },
  {
    id: 'node-scheduler',
    stepHex: '0x04',
    codeName: 'QUANTUM_MATRIX',
    title: 'Preemptive Scheduler',
    tagline: 'Visual SJF, Round-Robin, and FCFS runqueue race experiments.',
    phaseRole: 'core-module',
    accentColor: '#00F0FF',
    spatialCoords: { x: 0, y: 35, z: 40 },
    telemetry: [
      { label: 'QUANTUM_SLICE', value: '10', unit: 'ms', status: 'nominal' },
      { label: 'THROUGHPUT', value: '+420', unit: '%', status: 'optimal' },
    ],
  },
  {
    id: 'node-memory',
    stepHex: '0x05',
    codeName: 'PAGING_VIRTUALIZER',
    title: 'Memory Virtualization',
    tagline: 'Interactive TLB page hits, frame allocations, and defragmentation.',
    phaseRole: 'core-module',
    accentColor: '#00FF9D',
    spatialCoords: { x: 45, y: 15, z: -10 },
    telemetry: [
      { label: 'TLB_HIT_RATE', value: '96.2', unit: '%', status: 'optimal' },
      { label: 'PAGING_ERR', value: '0.00', unit: '%', status: 'nominal' },
    ],
  },
  {
    id: 'node-future',
    stepHex: '0x06',
    codeName: 'SINGULARITY_V2',
    title: 'Autonomous Lab Matrix',
    tagline: 'Self-assembling kernel scenarios and live web-assembly drivers.',
    phaseRole: 'future',
    accentColor: '#D4AF37',
    spatialCoords: { x: 35, y: -20, z: 0 },
    telemetry: [
      { label: 'WASM_SPEED', value: '1.0x', unit: 'native', status: 'optimal' },
      { label: 'MODULES', value: 'EXPANDING', status: 'nominal' },
    ],
  },
];