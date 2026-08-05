import React, { useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/components/footer.css';

export const Footer: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const navigate = useNavigate();

  // Interactive Mini Terminal State
  const [inputCmd, setInputCmd] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'SYSTEM READY. Type "help" for available protocols.',
  ]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = inputCmd.trim().toLowerCase();
    if (!cleanCmd) return;

    let response = '';
    switch (cleanCmd) {
      case 'help':
        response = 'AVAILABLE COMMANDS: home | howto | about | download | docs | clear';
        break;
      case 'home':
        navigate('/');
        response = 'NAVIGATING TO // HOME...';
        break;
      case 'howto':
      case 'how-to':
        navigate('/how-to');
        response = 'NAVIGATING TO // HOW-TO...';
        break;
      case 'about':
        navigate('/about');
        response = 'NAVIGATING TO // ABOUT...';
        break;
      case 'download':
        navigate('/download');
        response = 'INITIALIZING DOWNLOAD SEQUENCE...';
        break;
      case 'docs':
        response = 'REDIRECTING TO SYSTEM DOCUMENTATION MATRIX...';
        window.open('/docs', '_self');
        break;
      case 'clear':
        setTerminalLogs([]);
        setInputCmd('');
        return;
      case 'matrix':
      case 'sudo':
        response = 'ACCESS GRANTED: KERNEL_LEVEL_OVERRIDE_ACTIVE [0x9F82]';
        break;
      default:
        response = `COMMAND NOT RECOGNIZED: "${cleanCmd}". Type "help" for protocols.`;
        break;
    }

    setTerminalLogs((prev) => [...prev.slice(-4), `> ${inputCmd}`, response]);
    setInputCmd('');
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.footer
      className="cyber-footer"
      initial={reduceMotion ? undefined : 'hidden'}
      whileInView={reduceMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.1 }}
      variants={reduceMotion ? undefined : containerVariants}
      role="contentinfo"
      aria-label="EduCloud OS telemetry site footer"
    >
      {/* Background Atmosphere & Grid Systems */}
      <div className="cyber-footer-scanlines" aria-hidden="true" />
      <div className="cyber-footer-grid" aria-hidden="true" />
      <div className="cyber-footer-glow-core" aria-hidden="true" />
      
      {/* Oversized Kinetic Background Typography */}
      <div className="brand-giant-hologram" aria-hidden="true">
        EDUCLOUD<span>OS</span>
      </div>

      <div className="footer-inner container-centered">
        {/* Top Telemetry & Live System Status HUD */}
        <motion.div className="cyber-hud-bar" variants={reduceMotion ? undefined : itemVariants}>
          <div className="hud-metric">
            <span className="hud-led pulse-green" />
            <span className="hud-label">KERNEL_STATUS:</span>
            <span className="hud-value text-gold">ONLINE_v0.9.4</span>
          </div>

          <div className="hud-divider" />

          <div className="hud-metric">
            <span className="hud-label">LATENCY:</span>
            <span className="hud-value">12ms</span>
          </div>

          <div className="hud-divider desktop-only" />

          <div className="hud-metric desktop-only">
            <span className="hud-label">TELEMETRY:</span>
            <span className="hud-value text-cyan">ACTIVE_STREAM</span>
          </div>

          <div className="hud-corner-brackets" aria-hidden="true">
            <span className="corner top-left">+</span>
            <span className="corner top-right">+</span>
          </div>
        </motion.div>

        {/* Hero Section: Brand Identity & Interactive CLI Terminal */}
        <div className="footer-hero-grid">
          {/* Brand Block with Cyberpunk Badge */}
          <motion.div className="cyber-brand-card" variants={reduceMotion ? undefined : itemVariants}>
            <div className="brand-header">
              <div className="cyber-logo-icon">
                <div className="logo-inner-ruby" />
                <div className="logo-pulse-ring" />
              </div>
              <div className="brand-title-group">
                <h2 className="brand-main-title">
                  EDUCLOUD<span className="gold-accent">.OS</span>
                </h2>
                <span className="cyber-sub-badge">NEXT-GEN OS LABORATORY</span>
              </div>
            </div>

            <p className="brand-descriptor">
              An immersive, real-time operating system laboratory. Explore kernel scheduling, virtual memory management, and process lifecycles in interactive 3D state space.
            </p>

            <div className="footer-cta-group">
              <Link to="/download" className="cyber-btn cyber-btn-primary">
                <span className="btn-glow" />
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 3v12M8 11l4 4 4-4M20 21H4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>DEPLOY OS LAB</span>
                <span className="btn-corner-bl" />
                <span className="btn-corner-tr" />
              </Link>

              <Link to="/about" className="cyber-btn cyber-btn-ghost">
                <span>PROJECT MANIFESTO</span>
              </Link>
            </div>
          </motion.div>

          {/* Embedded Interactive CLI Terminal Card */}
          <motion.div className="cyber-terminal-card" variants={reduceMotion ? undefined : itemVariants}>
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="terminal-title">SHELL_PROMPT // EDUCLOUD_CLI</div>
              <div className="terminal-live-badge">INTERACTIVE</div>
            </div>

            <div className="terminal-body">
              {terminalLogs.map((log, index) => (
                <div key={`log-${index}`} className={`terminal-line ${log.startsWith('>') ? 'cmd-input' : 'cmd-output'}`}>
                  {log}
                </div>
              ))}
            </div>

            <form onSubmit={handleCommandSubmit} className="terminal-input-row">
              <span className="prompt-symbol">guest@educloud:~$</span>
              <input
                type="text"
                value={inputCmd}
                onChange={(e) => setInputCmd(e.target.value)}
                placeholder="Type 'help', 'howto', 'download'..."
                className="terminal-input"
                aria-label="Interactive Terminal Command Line"
              />
              <button type="submit" className="terminal-send-btn">
                EXEC
              </button>
            </form>
          </motion.div>
        </div>

        {/* Subsystem Navigation Columns */}
        <motion.div className="cyber-nav-matrix" variants={reduceMotion ? undefined : itemVariants}>
          <div className="nav-col">
            <div className="col-header">
              <span className="col-node-tag">// 01</span>
              <h3 className="col-title">NAVIGATION</h3>
            </div>
            <ul className="nav-links">
              <li>
                <Link to="/" className="nav-link-item">
                  <span className="link-chevron">›</span> Home Platform
                </Link>
              </li>
              <li>
                <Link to="/how-to" className="nav-link-item">
                  <span className="link-chevron">›</span> Subsystem Guides
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link-item">
                  <span className="link-chevron">›</span> Architecture & Team
                </Link>
              </li>
              <li>
                <Link to="/download" className="nav-link-item">
                  <span className="link-chevron">›</span> Downloads & ISOs
                </Link>
              </li>
            </ul>
          </div>

          <div className="nav-col">
            <div className="col-header">
              <span className="col-node-tag">// 02</span>
              <h3 className="col-title">SUBSYSTEMS</h3>
            </div>
            <ul className="nav-links">
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="nav-link-item">
                  <span className="link-chevron">›</span> Process Control Block
                </a>
              </li>
              <li>
                <a href="/docs" rel="noreferrer" className="nav-link-item">
                  <span className="link-chevron">›</span> Memory Virtualizer
                </a>
              </li>
              <li>
                <a href="/changelog" rel="noreferrer" className="nav-link-item">
                  <span className="link-chevron">›</span> SJF Scheduler Matrix
                </a>
              </li>
              <li>
                <a href="/docs" rel="noreferrer" className="nav-link-item">
                  <span className="link-chevron">›</span> Interrupt Vectors
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-col">
            <div className="col-header">
              <span className="col-node-tag">// 03</span>
              <h3 className="col-title">RESOURCES</h3>
            </div>
            <ul className="nav-links">
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="nav-link-item">
                  <span className="link-chevron">›</span> GitHub Repository
                </a>
              </li>
              <li>
                <a href="/docs" rel="noreferrer" className="nav-link-item">
                  <span className="link-chevron">›</span> System Documentation
                </a>
              </li>
              <li>
                <a href="/changelog" rel="noreferrer" className="nav-link-item">
                  <span className="link-chevron">›</span> Release Changelog
                </a>
              </li>
              <li>
                <a href="mailto:hello@example.com" className="nav-link-item">
                  <span className="link-chevron">›</span> Kernel Mailing List
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-col">
            <div className="col-header">
              <span className="col-node-tag">// 04</span>
              <h3 className="col-title">CONNECT</h3>
            </div>
            <ul className="nav-links">
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="nav-link-item">
                  <span className="link-chevron">›</span> GitHub Core
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="nav-link-item">
                  <span className="link-chevron">›</span> LinkedIn Network
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="nav-link-item">
                  <span className="link-chevron">›</span> X / Twitter Feed
                </a>
              </li>
              <li>
                <a href="mailto:hello@example.com" className="nav-link-item">
                  <span className="link-chevron">›</span> Direct Support
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar: Copyright, System Hash & Legal Protocol */}
        <motion.div className="cyber-footer-bottom" variants={reduceMotion ? undefined : itemVariants}>
          <div className="legal-block">
            <span className="legal-copy">
              © {new Date().getFullYear()} <strong className="text-white">EDUCLOUD OS LABS</strong>. ALL RIGHTS RESERVED.
            </span>
            <span className="hash-stamp">BUILD_HASH: 0x8F9A2B4C</span>
          </div>

          <div className="bottom-protocol-links">
            <a href="/privacy" className="protocol-link">PRIVACY_POLICY</a>
            <span className="sep-diamond">◆</span>
            <a href="/terms" className="protocol-link">TERMS_OF_SERVICE</a>
            <span className="sep-diamond">◆</span>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="protocol-link">SOURCE_CODE</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;