export interface SubsystemMetric {
  label: string;
  value: string;
  status: 'OPTIMAL' | 'NOMINAL' | 'HIGH_LOAD';
}

export interface FeatureItem {
  id: string;
  sysCode: string;
  title: string;
  subtitle: string;
  blurb: string;
  highlights: string[];
  route: string;
  metrics: SubsystemMetric[];
  telemetryStream: string[];
}

export const FEATURES: FeatureItem[] = [
  {
    id: 'process-management',
    sysCode: 'SUB_SYS // 01',
    title: 'Process Lifecycle',
    subtitle: 'State Machines & Context Switch Engine',
    blurb: 'Step inside the kernel context switcher. Visualize thread state transitions, PCB control blocks, signal traps, and fork execution graphs in real time.',
    highlights: ['PCB State Inspection', 'Context Switch Latency', 'Signal Traps & Interrupts'],
    route: '/how-to',
    metrics: [
      { label: 'ACTIVE THREADS', value: '32 EXEC', status: 'OPTIMAL' },
      { label: 'SWITCH LATENCY', value: '1.2 μs', status: 'NOMINAL' }
    ],
    telemetryStream: ['TASK_SPAWN [PID 2048]', 'PCB_ALLOC -> OK', 'CONTEXT_SAVE [CPU_0]', 'STATE -> RUNNING']
  },
  {
    id: 'cpu-scheduling',
    sysCode: 'SUB_SYS // 02',
    title: 'CPU Scheduling',
    subtitle: 'Preemptive & Quantum Policy Analyzer',
    blurb: 'Tune time quanta and evaluate dynamic priority queues. Benchmark FCFS, Shortest Job First, and Multi-Level Feedback Queues under synthetic workloads.',
    highlights: ['Interactive Gantt Analyzer', 'Turnaround Metric Graphs', 'Starvation & Priority Boost'],
    route: '/how-to',
    metrics: [
      { label: 'QUANTUM TIME', value: '10 ms', status: 'OPTIMAL' },
      { label: 'CPU UTILIZATION', value: '98.4%', status: 'HIGH_LOAD' }
    ],
    telemetryStream: ['SCHED_TICK [QUANTUM_EXPIRED]', 'PRIORITY_EVAL [PID 1092]', 'QUEUE_REBALANCE', 'CPU_ATTACH [CORE_2]']
  },
  {
    id: 'memory',
    sysCode: 'SUB_SYS // 03',
    title: 'Memory Virtualization',
    subtitle: 'Paged Allocation & TLB Visualizer',
    blurb: 'Trace physical page frame mapping, page faults, and virtual memory translation tables with an interactive live allocation grid.',
    highlights: ['Virtual-to-Physical Map', 'TLB Hit/Miss Ratio', 'Page Replacement Sim'],
    route: '/how-to',
    metrics: [
      { label: 'TLB HIT RATIO', value: '94.2%', status: 'OPTIMAL' },
      { label: 'PAGE FAULTS', value: '0.02 / sec', status: 'NOMINAL' }
    ],
    telemetryStream: ['VIRT_ADDR [0x7FFF0042]', 'TLB_HIT -> FRAME 0x1A', 'PAGE_WRITE [DIRTY]', 'CACHE_FLUSH -> SYNC']
  }
];