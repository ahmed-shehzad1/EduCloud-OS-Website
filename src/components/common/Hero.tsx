import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import '../../styles/components/hero.css';

export const Hero: React.FC = () => {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        when: 'beforeChildren',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const panelVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        delay: 0.2 + i * 0.08, 
        duration: 0.75, 
        ease: [0.16, 1, 0.3, 1] 
      },
    }),
  };

  return (
    <section className="hero-viewport" aria-labelledby="hero-heading">
      <div className="hero-background" aria-hidden="true">
        <div className="hero-grid-overlay" />
        <div className="hero-radial-bloom" />
      </div>

      <motion.div
        className="hero-content"
        variants={reduceMotion ? undefined : containerVariants}
        initial={reduceMotion ? undefined : 'hidden'}
        animate={reduceMotion ? undefined : 'show'}
      >
        {/* System Telemetry Status Tag */}
        <motion.div className="hero-strap" variants={reduceMotion ? undefined : itemVariants}>
          <span className="strap-indicator">
            <span className="strap-ping" />
            <span className="strap-dot" />
          </span>
          <span className="strap-text">SYS_INIT // KERNEL ONLINE</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1 id="hero-heading" className="hero-heading" variants={reduceMotion ? undefined : itemVariants}>
          <span className="hero-brand-name">EDUCLOUD</span>
          <span className="hero-os-badge">OS</span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p className="hero-sub" variants={reduceMotion ? undefined : itemVariants}>
          An interactive operating-system laboratory — explore process scheduling, virtual memory, 
          IPC synchronization, and low-level kernel internals.
        </motion.p>

        {/* CTAs */}
        <motion.div className="hero-ctas" variants={reduceMotion ? undefined : itemVariants}>
          <motion.a 
            className="cta cta-primary" 
            href="#explore"
            whileHover={reduceMotion ? undefined : { scale: 1.02, y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            <span className="cta-icon">◆</span>
            EXPLORE EDUCLOUD OS
          </motion.a>

          <motion.a 
            className="cta cta-ghost" 
            href="#system"
            whileHover={reduceMotion ? undefined : { scale: 1.02, y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            SYSTEM ARCHITECTURE <span className="arrow-down">↓</span>
          </motion.a>
        </motion.div>

        {/* Machined OS Telemetry Panels */}
        <div className="hero-visuals" aria-hidden="true">
          {/* Panel 1: Process Scheduling */}
          <motion.div 
            className="panel panel-left" 
            custom={0} 
            variants={reduceMotion ? undefined : panelVariants} 
            animate={reduceMotion ? undefined : 'show'}
          >
            <div className="panel-header">
              <span className="panel-title">PROCESS MANAGEMENT</span>
              <span className="panel-status">ACTIVE</span>
            </div>
            <div className="panel-body">
              <div className="telemetry-metric">
                <span className="metric-label">THREADS</span>
                <span className="metric-value">12 RUNNING</span>
              </div>
              <div className="telemetry-tags">
                <span className="telemetry-tag">PID 1024</span>
                <span className="telemetry-tag highlight">READY</span>
              </div>
            </div>
          </motion.div>

          {/* Panel 2: Scheduler */}
          <motion.div 
            className="panel panel-center" 
            custom={1} 
            variants={reduceMotion ? undefined : panelVariants} 
            animate={reduceMotion ? undefined : 'show'}
          >
            <div className="panel-header">
              <span className="panel-title">CPU SCHEDULER</span>
              <span className="panel-status">SYNC</span>
            </div>
            <div className="panel-body">
              <div className="scheduler-chip">
                <span className="chip-mode">FCFS</span>
                <span className="chip-arrow">➔</span>
                <span className="chip-mode active">ROUND_ROBIN</span>
              </div>
            </div>
          </motion.div>

          {/* Panel 3: Virtual Memory */}
          <motion.div 
            className="panel panel-right" 
            custom={2} 
            variants={reduceMotion ? undefined : panelVariants} 
            animate={reduceMotion ? undefined : 'show'}
          >
            <div className="panel-header">
              <span className="panel-title">PAGED MEMORY</span>
              <span className="panel-status">74%</span>
            </div>
            <div className="panel-body">
              <div className="meter-wrapper">
                <div className="meter">
                  <span className="meter-fill" style={{ width: '74%' }} />
                </div>
              </div>
              <div className="telemetry-metric right">
                <span className="metric-label">SWAP</span>
                <span className="metric-value">0.4 GB / 4.0 GB</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};