import React, { useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FRAGMENTS, type FragmentItem } from '../../data/fragments';
import '../../styles/components/feature-fragments.css';

export const FeatureFragments: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  // Container scroll trigger parent
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  // Card assembly container logic (Triggered as user scrolls down)
  const cardAssemblyVariants: Variants = {
    hidden: {
      opacity: 0.2,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.95,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
      },
    },
  };

  // Individual broken piece scattering variants (Convergence on Scroll)
  const topLeftPieceVariants: Variants = {
    hidden: { x: -110, y: -70, rotate: -24, opacity: 0, scale: 0.65 },
    visible: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const topRightPieceVariants: Variants = {
    hidden: { x: 120, y: -50, rotate: 28, opacity: 0, scale: 0.6 },
    visible: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const bottomLeftPieceVariants: Variants = {
    hidden: { x: -90, y: 80, rotate: -18, opacity: 0, scale: 0.7 },
    visible: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const bottomRightPieceVariants: Variants = {
    hidden: { x: 100, y: 90, rotate: 22, opacity: 0, scale: 0.65 },
    visible: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Core central body assembly
  const centerBodyVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="ruby-cloud-section" aria-labelledby="cloud-fragments-heading">
      <div className="ruby-cloud-container">
        <header className="ruby-cloud-header">
  <div className="ruby-tech-badge">
    <span className="badge-pulse-ruby" />
    EDUCloud OS // SYSTEM ARCHITECTURE
  </div>

  <h2 id="cloud-fragments-heading" className="ruby-cloud-title">
    Inside EduCloud OS
  </h2>

  <p className="ruby-cloud-lead">
    Explore the core operating-system concepts implemented throughout EduCloud OS,
    from process management and CPU scheduling to threads, synchronization,
    inter-process communication, memory management, and kernel simulation.
  </p>
</header>

        <motion.div
          className="timeline-assembly-chassis"
          variants={reduceMotion ? undefined : containerVariants}
          initial={reduceMotion ? undefined : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Central Timeline Ruby Axis Line */}
          <div className="timeline-spine-laser">
            <div className="timeline-pulse-beam" />
          </div>

          {FRAGMENTS.map((item: FragmentItem, index: number) => {
            const isEven = index % 2 === 0;
            const sideClass = isEven ? 'timeline-row-right' : 'timeline-row-left';
            const isHovered = activeHoverId === item.id;

            return (
              <motion.article
                key={item.id}
                className={`timeline-cloud-row ${sideClass}`}
                variants={reduceMotion ? undefined : cardAssemblyVariants}
                onMouseEnter={() => setActiveHoverId(item.id)}
                onMouseLeave={() => setActiveHoverId(null)}
              >
                {/* Central Timeline Anchor Node */}
                <div className="timeline-ruby-node">
                  <div className="ruby-node-core" />
                  <div className="ruby-node-ring" />
                </div>

                {/* Cloud Card Shell (Shattered pieces pull into one card) */}
                <div className={`ruby-cloud-card ${isHovered ? 'is-hovered' : ''}`}>
                  {/* Shattered Outer Cloud Pieces (Concealed on scroll completion) */}
                  <motion.div
                    className="shattered-piece piece-top-left"
                    variants={reduceMotion ? undefined : topLeftPieceVariants}
                  />
                  <motion.div
                    className="shattered-piece piece-top-right"
                    variants={reduceMotion ? undefined : topRightPieceVariants}
                  />
                  <motion.div
                    className="shattered-piece piece-bottom-left"
                    variants={reduceMotion ? undefined : bottomLeftPieceVariants}
                  />
                  <motion.div
                    className="shattered-piece piece-bottom-right"
                    variants={reduceMotion ? undefined : bottomRightPieceVariants}
                  />

                  {/* Ruby Cloud SVG Outline Overlay */}
                  <svg className="cloud-outline-svg" viewBox="0 0 440 240" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id={`ruby-cloud-grad-${item.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#26050D" stopOpacity="0.94" />
                        <stop offset="50%" stopColor="#140207" stopOpacity="0.97" />
                        <stop offset="100%" stopColor="#080103" stopOpacity="0.99" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 60,185 
                         C 15,185 -5,150 8,112 
                         C 18,80 50,65 85,72 
                         C 105,30 158,10 215,22 
                         C 260,5 320,18 345,58 
                         C 388,50 425,80 430,120 
                         C 438,162 400,185 365,185 Z"
                      fill={`url(#ruby-cloud-grad-${item.id})`}
                      stroke="rgba(230, 43, 82, 0.45)"
                      strokeWidth="1.5"
                    />
                  </svg>

                  {/* Main Cloud Card Content */}
                  <motion.div
                    className="cloud-card-inner"
                    variants={reduceMotion ? undefined : centerBodyVariants}
                  >
                    <div className="cloud-card-header">
                      <span className="cloud-sys-code">{item.subtitle}</span>
                      <span className="cloud-role-tag">{item.role.toUpperCase()}</span>
                    </div>

                    <h3 className="cloud-title">{item.title}</h3>
                    <p className="cloud-blurb">{item.blurb}</p>

                    <div className="cloud-card-footer">
                      <Link to={item.route} className="ruby-action-btn">
                        <span>OPEN SUBSYSTEM</span>
                        <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>

                  {/* Glowing Green Rain Water Drops falling from Cloud */}
                  <div className="green-rain-container" aria-hidden="true">
                    {item.rainDrops.map((drop) => (
                      <div
                        key={drop.id}
                        className="green-rain-drop"
                        style={{
                          left: `${drop.leftOffset}%`,
                          height: `${drop.length}px`,
                          animationDuration: `${drop.speedDuration}s`,
                          animationDelay: `${drop.delay}s`,
                          opacity: drop.opacity,
                        }}
                      >
                        <span className="rain-head-spark" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};