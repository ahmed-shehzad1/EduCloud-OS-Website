import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../../config/navigation';
import '../../styles/components/navbar.css';

const TELEMETRY_TEXT =
  'PROCESS MANAGEMENT ◆ CPU SCHEDULING ◆ THREAD SYNCHRONIZATION ◆ MUTEX ◆ IPC ◆ MEMORY MANAGEMENT ◆ FILE SYSTEM ◆ KERNEL SIMULATION ◆ EDUCLOUD OS ◆ SYSTEM ONLINE ◆ ';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  useEffect(() => setIsMobileMenuOpen(false), [location.pathname]);

  const headerVariants = {
    hidden: { opacity: 0, y: -8, filter: 'blur(6px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  };

  const mobileOverlayVariants = {
    hidden: { opacity: 0, y: -12 },
    visible: { opacity: 1, y: 0, transition: { when: 'beforeChildren', staggerChildren: 0.06 } },
    exit: { opacity: 0, y: -12 },
  };
  const mobileItem = { hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } };

  return (
    <>
      <motion.header
        className={`educloud-hud-wrapper ${isScrolled ? 'is-scrolled' : ''}`}
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        role="banner"
      >
        <div className="hud-edge-layer" />

        <div className="hud-surface">
          <div className="hud-node-logo">
            <Link to="/" className="os-logo" aria-label="EduCloud OS Home">
              <span className="logo-mark" aria-hidden="true" />
              <span className="logo-text">EDUCLOUD</span>
              <span className="logo-os">OS</span>
            </Link>
          </div>

          <nav className="hud-node-nav" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="nav-link"
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="nav-label">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="hud-active-indicator"
                      className="hud-active-indicator"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hud-node-uplink">
            <button className="auth-button" aria-label="GitHub Uplink" title="GitHub Uplink">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              <span className="uplink-text">UPLINK</span>
              <span className="uplink-status" aria-hidden="true" />
            </button>
          </div>

          <button
            className="mobile-trigger"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open System Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="line line-1" />
            <div className="line line-2" />
          </button>
        </div>

        {/* hud chassis bottom - marquee docks here */}
        <div className="hud-chassis-bottom" aria-hidden="true">
          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                className="system-marquee-container"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.36 }}
              >
                <div className="system-marquee-track" aria-hidden="true">
                  <div className="system-marquee-content" role="presentation">
                    {/* Render multiple copies to guarantee seamless coverage */}
                    <span>{TELEMETRY_TEXT}</span>
                    <span>{TELEMETRY_TEXT}</span>
                    <span>{TELEMETRY_TEXT}</span>
                    <span>{TELEMETRY_TEXT}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-overlay"
            variants={mobileOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => {
              if ((e.target as HTMLElement).classList?.contains('mobile-overlay')) setIsMobileMenuOpen(false);
            }}
          >
            <button className="auth-button overlay-close" onClick={() => setIsMobileMenuOpen(false)}>CLOSE SYSTEM</button>

            <div className="mobile-links-grid" role="menu" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link) => (
                <motion.div key={link.path} variants={mobileItem}>
                  <Link
                    to={link.path}
                    className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    role="menuitem"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};