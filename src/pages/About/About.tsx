import React from 'react';
import { motion } from 'framer-motion';
import { FragmentCloud } from '../../components/common/FragmentCloud';
import '../../styles/pages/about.css';

export const About: React.FC = () => {
  return (
    <div className="about-page-container">
      <div className="about-bg-ambient" aria-hidden="true">
        <div className="ambient-glow glow-ruby" />
        <div className="ambient-glow glow-gold" />
      </div>

      <main className="about-content container-centered">
        {/* Project Mission Hero Header */}
        <header className="about-hero-section">
          <motion.div
            className="hero-kicker"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            PROJECT MANIFESTO & ARCHITECTURE
          </motion.div>

          <motion.h1
            className="about-title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Demystifying Operating Systems Through Visual Experiments
          </motion.h1>

          <motion.p
            className="about-lead"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            EduCloud is an interactive educational laboratory created to make abstract computer science concepts tangible. By combining real-time C++ kernel simulations with interactive web graphics, learners can inspect process state transitions, benchmark scheduling policies, and analyze memory allocation map behavior firsthand.
          </motion.p>
        </header>

        {/* Interactive Timeline & Fragment Map */}
        <section className="about-interactive-section" aria-label="Project Journey and Architecture Timeline">
          <div className="section-label-bar">
            <h2>Explore the Lab's Evolution & Core Modules</h2>
            <p>Click any node in the constellation below to inspect project milestones, system modules, and technical design details.</p>
          </div>

          <FragmentCloud />
        </section>

        {/* Real Core Pillars Section */}
        <section className="about-pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon">01</div>
            <h3>Interactive Visualization</h3>
            <p>
              Replaces static textbook diagrams with real-time state machines, execution traces, and controllable simulation speeds.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">02</div>
            <h3>Native Engine Performance</h3>
            <p>
              Under the hood, C++ simulation logic powers precise OS behavior, compiled directly for web execution via WebAssembly.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">03</div>
            <h3>Experimentation First</h3>
            <p>
              Designed for CS students and educators to run side-by-side policy comparisons, such as SJF vs FCFS scheduling or First-Fit vs Best-Fit allocation.
            </p>
          </div>
        </section>

        {/* Join CTA */}
        <section className="about-cta-banner">
          <h2>Ready to explore the kernel?</h2>
          <p>Dive into interactive scheduling experiments, memory maps, and process traces in the EduCloud lab space.</p>
        </section>
      </main>
    </div>
  );
};

export default About;