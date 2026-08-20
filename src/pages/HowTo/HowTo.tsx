import React from 'react';
import { motion } from 'framer-motion';
import { HowToSteps } from '../../components/common/HowToSteps';
import '../../styles/pages/howto.css';
import { useAuth } from '../../hooks/useAuth';

export const HowTo: React.FC = () => {
  const { isAuthenticated, login } = useAuth();
  return (
    <div className="howto-page-container">
      {/* Background Ambient Cyber Glows */}
      <div className="howto-bg-ambient" aria-hidden="true">
        <div className="ambient-orb orb-top" />
        <div className="ambient-orb orb-bottom" />
        <div className="grid-overlay" />
      </div>

      <header className="howto-hero-centered container-centered">
        {/* Kicker Tag */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="pulse-indicator" />
          <span>GUIDED SETUP & QUICK START</span>
        </motion.div>

        {/* Hero Headline & Subtitle */}
        <motion.h1
          className="howto-main-title"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          How to use EduCloud OS
        </motion.h1>

        <motion.p
          className="howto-hero-sub"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A short guided flow from download to exploration. Follow these steps to install and begin experimenting with OS concepts.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="howto-hero-ctas"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {isAuthenticated ? (
  <a
    href="#download"
    className="cta-btn primary-glow"
  >
    Download Now
  </a>
) : (
  <button
    type="button"
    className="cta-btn primary-glow"
    onClick={login}
  >
    Connect GitHub to Download
  </button>
)}
          <a href="#steps" className="cta-btn ghost-cyber">
            Installation steps ↓
          </a>
        </motion.div>

        {/* Large Centered Video Demo Player */}
        <motion.div
          className="featured-video-showcase"
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="video-player-frame">
            <div className="video-hud-bar">
              <div className="hud-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="hud-title">EduCloud Runtime Demo — Quick Start</span>
              <span className="hud-status">LIVE PREVIEW</span>
            </div>

            <div className="video-viewport">
              <div className="video-grid-pattern" aria-hidden="true" />
              
              <div className="play-button-wrapper">
                <motion.button
                  className="play-pulse-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Play Quick Start Overview Video"
                >
                  <span className="play-icon">▶</span>
                </motion.button>
              </div>

              <div className="video-overlay-info">
                <span className="badge-pill">Quick start</span>
                <span className="duration-tag">1:32</span>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Main Content Section */}
      <main className="howto-main-content container-centered" id="steps" role="main">
        <section className="howto-section">
          <div className="section-header-block">
            <h2 className="section-title">Installation Guide</h2>
            <p className="section-lead">
              Follow the steps below — each step expands with details and commands where appropriate.
            </p>
          </div>

          <HowToSteps />
        </section>

        {/* Download Options Grid */}
        <section
  className="howto-section download-section"
  id="download"
>
          <div className="section-header-block">
            <h2 className="section-title">Get EduCloud OS</h2>
            <p className="section-lead">Choose your installation method below.</p>
          </div>

          <div className="download-grid">
            <div className="download-card accent-ruby">
              <div className="card-badge">RECOMMENDED</div>
              <h3 className="download-card-title">Latest Release</h3>
              <p className="download-card-meta">August 2026 • Signed Installer</p>
             {isAuthenticated ? (
  <a
  href="#download"
  className="cta-btn primary-glow"
>
  Download Now
</a>
) : (
  <button
    type="button"
    className="download-card-cta"
    onClick={login}
  >
    🔒 Connect GitHub to Download
  </button>
)}
            </div>

            <div className="download-card accent-cyan">
              <div className="card-badge ghost">DEVELOPER</div>
              <h3 className="download-card-title">Source</h3>
              <p className="download-card-meta">Build from source on Linux/macOS</p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="download-card-cta ghost"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};