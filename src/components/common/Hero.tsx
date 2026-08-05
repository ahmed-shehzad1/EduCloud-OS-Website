import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const cardVariants: Variants = {
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
    <section className="hero-section">
      <motion.div
        className="hero-container"
        initial="hidden"
        animate="show"
        variants={fadeInVariants}
      >
        <motion.h1 className="hero-title" variants={fadeInVariants}>
          Interactive Kernel & Operating System Sandbox
        </motion.h1>

        <motion.p className="hero-description" variants={fadeInVariants}>
          Explore CPU scheduling, virtual memory management, process concurrency, and file systems directly from your browser.
        </motion.p>

        <motion.div className="hero-cta-group" variants={fadeInVariants}>
          <Link to="/download" className="cta-button primary">
            Launch Sandbox
          </Link>
          <Link to="/howto" className="cta-button secondary">
            View Quick Start Guide
          </Link>
        </motion.div>

        <div className="hero-cards-grid">
          {[
            { title: 'Scheduler Visualizer', desc: 'Observe Round Robin, FCFS, and Priority Scheduling in real time.' },
            { title: 'Memory Manager', desc: 'Simulate Paging, Segmentation, and Cache hit/miss rates.' },
            { title: 'Process Control Block', desc: 'Inspect context switching, thread pools, and process states.' },
          ].map((card, idx) => (
            <motion.div
              key={card.title}
              className="feature-card"
              custom={idx}
              initial="hidden"
              animate="show"
              variants={cardVariants}
            >
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;