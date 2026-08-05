// src/pages/HowTo/HowTo.tsx
import React from 'react';
import { HowToSteps } from '../../components/common/HowToSteps';
import '../../styles/pages/howto.css';
import { Link } from 'react-router-dom';

export const HowTo: React.FC = () => {
  return (
    <div className="howto-page">
      <header className="howto-hero container-centered">
        <div className="howto-hero-left">
          <h1 className="howto-title">How to use EduCloud OS</h1>
          <p className="howto-sub">
            A short guided flow from download to exploration. Follow these steps to install and begin experimenting with OS concepts.
          </p>

          <div className="howto-hero-ctas">
            <Link to="/download" className="cta primary">Download</Link>
            <a href="#steps" className="cta ghost">Installation steps</a>
          </div>
        </div>

        <div className="howto-hero-right" aria-hidden="true">
          {/* Video poster / demo placeholder */}
          <div className="video-poster">
            <div className="video-play">▶</div>
            <div className="video-meta">Quick start • 1:32</div>
          </div>
        </div>
      </header>

      <main className="howto-main container-centered" id="steps" role="main">
        <section className="howto-section">
          <h2 className="section-title">Installation Guide</h2>
          <p className="section-lead">Follow the steps below — each step expands with details and commands where appropriate.</p>

          <HowToSteps />
        </section>

        <section className="howto-section download-section">
          <h2 className="section-title">Get EduCloud OS</h2>
          <div className="download-grid">
            <div className="download-card">
              <div className="download-title">Latest Release</div>
              <div className="download-meta">August 2026 • Signed</div>
              <Link to="/download" className="download-cta">Download Installer</Link>
            </div>

            <div className="download-card">
              <div className="download-title">Source</div>
              <div className="download-meta">Build from source on Linux/macOS</div>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="download-cta ghost">View on GitHub</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};