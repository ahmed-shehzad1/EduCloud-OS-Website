import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../styles/components/logo.css';

interface LogoProps {
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const EduCloudLogo: React.FC<LogoProps> = ({ showText = true, size = 'md' }) => {
  return (
    <Link to="/" className={`educloud-logo-link size-${size}`} aria-label="EduCloud OS Home">
      {/* Animated Cyber Core Icon */}
      <div className="logo-icon-frame">
        {/* Outer Rotating Pulse Ring */}
        <motion.div
          className="logo-ring-outer"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />

        {/* Counter-Rotating Inner Orbit Dot */}
        <motion.div
          className="logo-ring-inner"
          animate={{ rotate: -360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          <span className="orbit-node gold" />
          <span className="orbit-node cyan" />
        </motion.div>

        {/* Central Core Reactor Pulse */}
        <div className="logo-core">
          <span className="core-ruby-dot" />
        </div>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="logo-brand-text">
          <span className="brand-primary">
            EDUCLOUD<span className="brand-accent">.OS</span>
          </span>
          <span className="brand-sub">KERNEL SANDBOX</span>
        </div>
      )}
    </Link>
  );
};

export default EduCloudLogo;