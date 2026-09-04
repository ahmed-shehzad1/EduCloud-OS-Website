import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import '../../styles/pages/downloads.css';

const API_URL = import.meta.env.VITE_API_URL;

export const Downloads: React.FC = () => {
  const { isAuthenticated, login } = useAuth();

  const handleDownload = () => {
    if (!isAuthenticated) {
      login();
      return;
    }

    window.location.href = `${API_URL}/api/download/windows`;
  };

  return (
    <div className="downloads-page">
      <section className="downloads-hero">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="downloads-eyebrow">
            EDUCLOUD OS // RELEASE CENTER
          </span>

          <h1>Downloads</h1>

          <p>
            Get the latest EduCloud OS release for Windows.
            Authentication is required to access the compiled release.
          </p>
        </motion.div>
      </section>

      <main className="downloads-content">
        <motion.section
          className="release-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="release-card-header">
            <span className="release-badge">LATEST RELEASE</span>
            <span className="release-version">v1.0.0</span>
          </div>

          <h2>EduCloud OS for Windows</h2>

          <p>
            A packaged Windows release of the EduCloud OS operating
            system simulation.
          </p>

          <div className="release-meta">
            <span>Windows 10 / 11</span>
            <span>64-bit</span>
            <span>Portable Release</span>
          </div>

          {isAuthenticated ? (
            <button
              type="button"
              className="download-release-button"
              onClick={handleDownload}
            >
              DOWNLOAD FOR WINDOWS
            </button>
          ) : (
            <button
              type="button"
              className="download-release-button locked"
              onClick={login}
            >
              🔒 CONNECT GITHUB TO DOWNLOAD
            </button>
          )}
        </motion.section>

        <section className="source-card">
          <span className="downloads-eyebrow">OPEN SOURCE</span>

          <h2>Want to modify EduCloud OS?</h2>

          <p>
            The EduCloud OS source code is publicly available on GitHub.
            You can inspect it, modify it, build your own version, or
            suggest improvements.
          </p>

          <a
            href="https://github.com/ahmed-shehzad1/EduCloud-OS"
            target="_blank"
            rel="noreferrer"
            className="source-button"
          >
            VIEW SOURCE ON GITHUB
          </a>
        </section>

        <div className="downloads-back">
          <Link to="/how-to">← Back to How-To</Link>
        </div>
      </main>
    </div>
  );
};