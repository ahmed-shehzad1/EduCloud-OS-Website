import React from 'react';
import { motion } from 'framer-motion';
import { FragmentCloud } from '../../components/common/FragmentCloud';
import '../../styles/pages/about.css';

export const About: React.FC = () => {
  return (
    <div className="about-cyber-page">
      {/* Cyber Grid & Ambient Background Lighting */}
      <div className="cyber-bg-grid" aria-hidden="true" />
      <div className="cyber-scanlines" aria-hidden="true" />

      <main className="about-main-wrapper container-centered">
        {/* Project Core Hero Section */}
        <header className="about-hero">
          <motion.div
            className="hero-status-pill"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="pulse-dot" />
            <span>EDUCLOUD.OS // SYSTEM MANIFESTO</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Demystifying Operating Systems Through Visual Sandboxes
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            EduCloud OS turns abstract, low-level system mechanics into interactive, explorable state spaces. Built for students and educators, our laboratory replaces static textbook diagrams with real-time execution models.
          </motion.p>
        </header>

        {/* Interactive Architecture & Milestone Stream */}
        <section className="about-interactive-section">
          <div className="section-head">
            <h2>Explore the Lab's Architecture & Modules</h2>
            <p>Select a step below to inspect project origins, core interactive modules, and technical design details.</p>
          </div>

          <FragmentCloud />
        </section>

        {/* 3 Core Educational Pillars */}
        <section className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-num">01</div>
            <h3>Real-Time Telemetry</h3>
            <p>
              Observe state changes as they happen. Inspect process lifecycles, runqueues, and memory pages with zero abstraction delay.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-num">02</div>
            <h3>Comparative Experiments</h3>
            <p>
              Run side-by-side policy tests — like SJF versus Round-Robin scheduling or First-Fit versus Best-Fit allocation.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-num">03</div>
            <h3>Native Engine Performance</h3>
            <p>
              C++ core simulation logic compiled straight to WebAssembly guarantees accurate, deterministic operating system behavior.
            </p>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="about-cta-card">
          <h2>Ready to test the kernel?</h2>
          <p>Experiment with real-time CPU scheduling algorithms, view process state traces, and explore virtual memory maps.</p>
        </section>
      </main>
    </div>
  );
};

export default About;