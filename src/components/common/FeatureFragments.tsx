import React, { useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FRAGMENTS, type FragmentItem } from '../../data/fragments';
import '../../styles/components/feature-fragments.css';

export const FeatureFragments: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  // Parent scroll-trigger assembly container variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.28,
        delayChildren: 0.1,
      },
    },
  };

  // Shattered pieces reassembling into a single unified cloud card
  const getShatterVariants = (side: 'left' | 'right'): Variants => {
    const directionX = side === 'left' ? -1 : 1;
    return {
      hidden: {
        opacity: 0,
        y: 60,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
          staggerChildren: 0.12,
        },
      },
    };
  };

  // Individual fragment piece scatter variants
  const pieceLeftVariants: Variants = {
    hidden: { x: -80, y: -45, rotate: -18, opacity: 0, scale: 0.75 },
    visible: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const pieceRightVariants: Variants = {
    hidden: { x: 95, y: -30, rotate: 22, opacity: 0, scale: 0.7 },
    visible: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const pieceBottomVariants: Variants = {
    hidden: { x: 0, y: 70, rotate: -8, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="tech-cloud-section" aria-labelledby="cloud-fragments-heading">
      <div className="cloud-section-container">
        <header className="cloud-section-header">
          <div className="cloud-tech-tag">
            <span className="tag-pulse-emerald" />
            DYNAMIC REASSEMBLY PIPELINE
          </div>
          <h2 id="cloud-fragments-heading" className="cloud-section-title">
            Cloud Matrix Timeline
          </h2>
          <p className="cloud-section-lead">
            Shattered system fragments reassemble into unified cloud nodes upon entry, raining green digital telemetry across the timeline.
          </p>
        </header>

        <motion.div
          className="vertical-timeline-chassis"
          variants={reduceMotion ? undefined : containerVariants}
          initial={reduceMotion ? undefined : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Central Vertical Timeline Spine Line */}
          <div className="timeline-spine-axis">
            <div className="timeline-laser-pulse" />
          </div>

          {FRAGMENTS.map((item: FragmentItem, index: number) => {
            const isEven = index % 2 === 0;
            const sideClass = isEven ? 'timeline-item-right' : 'timeline-item-left';
            const isHovered = activeHoverId === item.id;

            return (
              <motion.article
                key={item.id}
                className={`timeline-cloud-row ${sideClass}`}
                variants={reduceMotion ? undefined : getShatterVariants(isEven ? 'right' : 'left')}
                onMouseEnter={() => setActiveHoverId(item.id)}
                onMouseLeave={() => setActiveHoverId(null)}
              >
                {/* Timeline node marker at center */}
                <div className="timeline-node-anchor">
                  <div className="timeline-node-core" />
                  <div className="timeline-node-ring" />
                </div>

                {/* Main Assembling Cloud Card Shell */}
                <div className={`cloud-card-assembly ${isHovered ? 'is-hovered' : ''}`}>
                  {/* Exploded / Reassembling Fragment Orbs & Shell Parts */}
                  <motion.div
                    className="cloud-fragment-piece piece-top-left"
                    variants={reduceMotion ? undefined : pieceLeftVariants}
                  />
                  <motion.div
                    className="cloud-fragment-piece piece-top-right"
                    variants={reduceMotion ? undefined : pieceRightVariants}
                  />
                  <motion.div
                    className="cloud-fragment-piece piece-bottom-base"
                    variants={reduceMotion ? undefined : pieceBottomVariants}
                  />

                  {/* Cloud Silhouette SVG Backdrop */}
                  <svg className="cloud-shape-svg" viewBox="0 0 420 220" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id={`cloud-grad-${item.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0B2016" stopOpacity="0.92" />
                        <stop offset="50%" stopColor="#05120B" stopOpacity="0.96" />
                        <stop offset="100%" stopColor="#020805" stopOpacity="0.98" />
                      </linearGradient>
                      <filter id={`cloud-glow-${item.id}`} x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="8" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>
                    {/* Organic Cloud Contour Path */}
                    <path
                      d="M 60,170 
                         C 20,170 0,140 10,105 
                         C 18,75 48,60 80,68 
                         C 100,28 150,10 205,22 
                         C 250,5 305,18 330,55 
                         C 370,48 405,75 410,110 
                         C 418,150 385,170 350,170 Z"
                      fill={`url(#cloud-grad-${item.id})`}
                      stroke="rgba(0, 255, 136, 0.35)"
                      strokeWidth="1.5"
                    />
                  </svg>

                  {/* Cloud Card Internal Content */}
                  <div className="cloud-card-body">
                    <div className="cloud-card-header">
                      <span className="cloud-sub-code">{item.subtitle}</span>
                      <span className="cloud-role-badge">{item.role.toUpperCase()}</span>
                    </div>

                    <h3 className="cloud-title">{item.title}</h3>
                    <p className="cloud-blurb">{item.blurb}</p>

                    <div className="cloud-card-footer">
                      <Link to={item.route} className="cloud-action-btn">
                        <span>EXPLORE NODE</span>
                        <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Green Technology Water Raindrops Canopy */}
                  <div className="tech-rain-canopy" aria-hidden="true">
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