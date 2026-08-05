import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../styles/components/footer.css';

export const Footer: React.FC = () => {
  const reduceMotion = useReducedMotion();

  // Mouse coordinate state for dynamic cursor-following spotlight
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  // Real-time System Uptime Ticker
  const [uptimeSeconds, setUptimeSeconds] = useState(14820);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptimeSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const orbPulseVariants: Variants = {
    animate: {
      scale: [1, 1.08, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  const ringRotateVariants: Variants = {
    animate: {
      rotate: [360, 0],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  return (
    <footer
      className="sculptural-footer"
      onMouseMove={handleMouseMove}
      role="contentinfo"
      aria-label="EduCloud OS site footer"
    >
      {/* Dynamic Mouse Tracking Spotlight */}
      <div
        className="mouse-spotlight"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(224, 0, 63, 0.18), transparent 80%)`,
        }}
        aria-hidden="true"
      />

      {/* Cyber Grid & Ambient Scanlines */}
      <div className="footer-grid-overlay" aria-hidden="true" />
      <div className="footer-scanline" aria-hidden="true" />

      <div className="footer-container">
        {/* Animated Kernel Energy Core (Interactive Visual Hero Object) */}
        <div className="kernel-core-stage" aria-hidden="true">
          <motion.div
            className="core-outer-ring"
            variants={reduceMotion ? undefined : ringRotateVariants}
            animate={reduceMotion ? undefined : 'animate'}
          >
            <svg viewBox="0 0 200 200" className="ring-svg">
              <circle
                cx="100"
                cy="100"
                r="88"
                fill="none"
                stroke="rgba(224, 0, 63, 0.35)"
                strokeWidth="1.5"
                strokeDasharray="12 8 4 8"
              />
              <circle
                cx="100"
                cy="100"
                r="74"
                fill="none"
                stroke="rgba(212, 174, 55, 0.4)"
                strokeWidth="1"
                strokeDasharray="20 15"
              />
            </svg>
          </motion.div>

          <motion.div
            className="core-orb-sphere"
            variants={reduceMotion ? undefined : orbPulseVariants}
            animate={reduceMotion ? undefined : 'animate'}
          >
            <div className="orb-inner-ruby" />
            <div className="orb-inner-gold" />
          </motion.div>

          {/* Orbiting Telemetry Particles */}
          <div className="orbiting-particle p1" />
          <div className="orbiting-particle p2" />
          <div className="orbiting-particle p3" />
        </div>

        {/* Sculptural Brand Typography */}
        <div className="brand-centerpiece">
          <h2 className="brand-giant-title">
            EDUCLOUD<span className="gold-dot">.</span>OS
          </h2>
          <p className="brand-tagline">
            A Living Operating System Laboratory & Interactive State Space
          </p>
        </div>

        {/* Live System Telemetry HUD Badge */}
        <div className="live-hud-pill">
          <div className="hud-status-dot" />
          <span className="hud-status-text">KERNEL_NOMINAL</span>
          <span className="hud-sep">|</span>
          <span className="hud-uptime-label">UPTIME:</span>
          <span className="hud-uptime-val">{formatUptime(uptimeSeconds)}</span>
        </div>

        {/* Minimalist 4-Link Clean Navigation */}
        <nav className="minimal-nav" aria-label="Footer Navigation">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <span className="nav-bullet">◆</span>
          <Link to="/how-to" className="nav-item">
            How To
          </Link>
          <span className="nav-bullet">◆</span>
          <Link to="/about" className="nav-item">
            About
          </Link>
          <span className="nav-bullet">◆</span>
          <Link to="/download" className="nav-item">
            Download
          </Link>
        </nav>

        {/* Minimal Copyright Line */}
        <div className="footer-bottom-line">
          <span>© {new Date().getFullYear()} EduCloud OS Labs — All Execution States Preserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;