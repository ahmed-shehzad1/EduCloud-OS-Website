import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/components/hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="ec-hero" aria-labelledby="hero-title">
      <div className="hero-atmosphere" aria-hidden="true" />

      <motion.div
        className="hero-inner"
        initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        role="region"
        aria-label="Hero: EduCloud OS introduction"
      >
        <div className="hero-strap">
          <span className="hero-strap-mono">SYSTEM INITIALIZING</span>
          <div className="hero-strap-dot" aria-hidden="true" />
        </div>

        <h1 id="hero-title" className="hero-title">
          <span className="hero-title-line spaced">E D U C L O U D</span>
          <span className="hero-title-os">OS</span>
        </h1>

        <p className="hero-sub">
          An interactive operating system laboratory — explore process scheduling, memory, IPC, and system internals.
        </p>

        <div className="hero-ctas">
          <a className="cta-primary" href="#explore" role="button">Explore EduCloud OS</a>
          <a className="cta-ghost" href="#system" aria-label="View the system">View the system ↓</a>
        </div>

        <div className="hero-panels" aria-hidden="true">
          <div className="panel panel-left">
            <div className="panel-title">PROCESS</div>
            <div className="panel-body">
              <div className="dot">● 12</div>
              <div className="dot">● 08</div>
            </div>
          </div>

          <div className="panel panel-center">
            <div className="panel-title">SCHEDULER</div>
            <div className="panel-body small">
              <div className="chip">FCFS → SJF</div>
            </div>
          </div>

          <div className="panel panel-right">
            <div className="panel-title">MEMORY</div>
            <div className="panel-body">
              <div className="meter"><span style={{ width: '74%' }} /></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};