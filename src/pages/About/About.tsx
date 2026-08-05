import React from 'react';
import { motion } from 'framer-motion';
import { FragmentCloud } from '../../components/common/FragmentCloud';
import '../../styles/pages/about.css';

export const About: React.FC = () => {
  return (
    <div className="about-cyber-stage">
      {/* Spatial Cyber Environment Visual Background */}
      <div className="about-bg-grid" aria-hidden="true" />
      <div className="about-scanlines" aria-hidden="true" />

      {/* Kinetic Atmospheric Light Flares */}
      <div className="bg-flare flare-ruby" aria-hidden="true" />
      <div className="bg-flare flare-cyan" aria-hidden="true" />

      <main className="about-main-container container-centered">
        {/* Kinetic Telemetry Header */}
        <header className="about-hero-minimal">
          <motion.div
            className="hero-badge-tag"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-pulse" />
            SYSTEM_MANIFESTO // LABORATORY_STATE_SPACE
          </motion.div>

          <motion.h1
            className="about-glitch-title"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            EDUCLOUD<span className="text-gold">.OS</span> LABS
          </motion.h1>

          <motion.p
            className="about-hero-sub"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Click state nodes to inspect execution vector topologies and system architecture state spaces in real time.
          </motion.p>
        </header>

        {/* Primary Interactive Holographic Node Canvas */}
        <section className="matrix-stage-section">
          <FragmentCloud />
        </section>

        {/* Minimal Terminal State Footer Bar */}
        <footer className="about-interactive-bar">
          <div className="bar-status">
            <span className="status-label">SYS_EXEC_STATE:</span>
            <span className="status-val text-green">STABLE_3D_VECTOR</span>
          </div>

          <div className="bar-interactive-controls">
            <span className="control-hint">SELECT NODE TO SWITCH TELEMETRY</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default About;