import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../styles/components/hero.css';

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export const Hero: React.FC = () => {
  return (
    <section className="hero-viewport">
      {/* Background Lighting & Grid */}
      <div className="hero-background" aria-hidden="true">
        <div className="hero-grid-overlay" />
        <div className="hero-radial-bloom" />
      </div>

      {/* Main Content Layout */}
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        {/* Status Strap Badge */}
        <motion.div className="hero-strap" variants={itemVariants}>
          <div className="strap-indicator">
            <span className="strap-dot" />
            <span className="strap-ping" />
          </div>
          <span className="strap-text">v1.0.0-alpha // Kernel Sandbox</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 className="hero-heading" variants={itemVariants}>
          <span className="hero-brand-name">EDUCLOUD</span>
          <span className="hero-os-badge">OS</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p className="hero-sub" variants={itemVariants}>
          Explore CPU scheduling, virtual memory management, process concurrency, and file systems directly from your browser.
        </motion.p>

        {/* Action CTAs */}
        <motion.div className="hero-ctas" variants={itemVariants}>
          <Link to="/download" className="cta cta-primary">
            <span className="cta-icon">▶</span> Launch Sandbox
          </Link>
          <Link to="/howto" className="cta cta-ghost">
            Quick Start Guide <span className="arrow-down">↓</span>
          </Link>
        </motion.div>

        {/* HUD Telemetry Panels */}
        <div className="hero-visuals">
          {/* Panel 1: Scheduler & Threads */}
          <motion.div className="panel" custom={0} variants={panelVariants}>
            <div className="panel-header">
              <span className="panel-title">CPU_SCHEDULER</span>
              <span className="panel-status">ONLINE</span>
            </div>
            <div className="panel-body">
              <div className="telemetry-metric">
                <span className="metric-label">ACTIVE THREADS</span>
                <span className="metric-value">24 WORKERS</span>
              </div>
              <div className="telemetry-tags">
                <span className="telemetry-tag highlight">RR</span>
                <span className="telemetry-tag">FCFS</span>
                <span className="telemetry-tag">PRIO</span>
              </div>
            </div>
          </motion.div>

          {/* Panel 2: Center Dispatcher Pipeline */}
          <motion.div className="panel panel-center" custom={1} variants={panelVariants}>
            <div className="panel-header">
              <span className="panel-title">DISPATCHER_PIPELINE</span>
              <span className="panel-status">RUNNING</span>
            </div>
            <div className="scheduler-chip">
              <span className="chip-mode">PREEMPTIVE</span>
              <span className="chip-arrow">➔</span>
              <span className="chip-mode active">QUANTUM 10ms</span>
            </div>
          </motion.div>

          {/* Panel 3: Virtual Memory Meter */}
          <motion.div className="panel" custom={2} variants={panelVariants}>
            <div className="panel-header">
              <span className="panel-title">VIRTUAL_MEMORY</span>
              <span className="panel-status">84% ALLOC</span>
            </div>
            <div className="panel-body">
              <div className="meter-wrapper">
                <div className="meter">
                  <span className="meter-fill" style={{ width: '84%' }} />
                </div>
              </div>
              <div className="telemetry-metric right">
                <span className="metric-label">PAGE FAULTS</span>
                <span className="metric-value">0.02 / sec</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;