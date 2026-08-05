import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../../config/navigation';
import '../../styles/components/navbar.css';

const TELEMETRY_TEXT = "EDUCLOUD OS // SYSTEM ONLINE ◆ PROCESS MANAGEMENT ◆ CPU SCHEDULING ◆ THREAD SYNCHRONIZATION ◆ MUTEX ◆ IPC ◆ MEMORY MANAGEMENT ◆ FILE SYSTEM ◆ KERNEL SIMULATION ◆ ";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* FIXED OS COMMAND HUD */}
      <header className={`educloud-hud-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
        
        {/* Layer 1: Glowing Boundary Edge */}
        <div className="hud-edge-layer" />

        {/* Layer 2: Machined Glass Surface */}
        <div className="hud-surface">
          
          {/* LOGO NODE */}
          <div className="hud-node-logo">
            <Link to="/" className="os-logo" aria-label="EduCloud OS Home">
              EDUCLOUD <span>OS</span>
            </Link>
          </div>

          {/* NAVIGATION NODE */}
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
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="hud-active-indicator"
                      className="hud-active-indicator"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* UPLINK / GITHUB NODE */}
          <div className="hud-node-uplink">
            <button className="auth-button" aria-label="GitHub Uplink">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              UPLINK
            </button>
          </div>

          {/* MOBILE TRIGGER */}
          <button 
            className="mobile-trigger" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle command menu"
          >
            <div className="line line-1" />
            <div className="line line-2" />
          </button>

        </div>
      </header>

      {/* SYSTEM TELEMETRY MARQUEE (Normal Document Flow) */}
      <div className="system-marquee-container" aria-hidden="true">
        <div className="system-marquee-content">
          {/* Rendered twice for a seamless infinite CSS loop */}
          <span>{TELEMETRY_TEXT}</span>
          <span>{TELEMETRY_TEXT}</span>
        </div>
      </div>

      {/* MOBILE FULLSCREEN COMMAND OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <Link 
                  to={link.path} 
                  className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: NAV_LINKS.length * 0.05, duration: 0.3 }}
              style={{ marginTop: '2rem' }}
            >
              <button className="auth-button" style={{ fontSize: '1.2rem', color: '#fff' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                INITIATE UPLINK
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};