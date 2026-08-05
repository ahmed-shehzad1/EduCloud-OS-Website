import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TIMELINE_NODES } from '../../data/timeline';

export const FragmentCloud: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<string>('t-vision');

  const activeNode = TIMELINE_NODES.find((n) => n.id === activeId) || TIMELINE_NODES[1];

  return (
    <div className="cyber-timeline-wrapper">
      {/* Horizontal Circuit Navigation Bar */}
      <div className="circuit-nav-container" role="tablist" aria-label="Project Timeline Navigation">
        {/* Animated Connecting Track Beam */}
        <div className="circuit-track-line">
          <motion.div
            className="circuit-track-progress"
            style={{
              backgroundColor: activeNode.accentColor,
              boxShadow: `0 0 12px ${activeNode.accentColor}`,
            }}
            layoutId="trackProgress"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </div>

        {/* Node Stepper Pills */}
        <div className="circuit-nodes-row">
          {TIMELINE_NODES.map((node) => {
            const isActive = node.id === activeId;
            return (
              <button
                key={node.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(node.id)}
                className={`circuit-node-pill ${isActive ? 'is-active' : ''}`}
                style={{
                  ['--node-color' as any]: node.accentColor,
                }}
              >
                <span className="pill-step-num">{node.stepNumber}</span>
                <span className="pill-title">{node.title}</span>
                {isActive && (
                  <motion.div
                    className="active-indicator-glow"
                    layoutId="activeGlow"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Synchronized Display Card */}
      <div className="cyber-display-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            className="stage-card"
            style={{ borderColor: `rgba(${activeNode.accentColor === '#E0003F' ? '224, 0, 63' : activeNode.accentColor === '#D4AF37' ? '212, 174, 55' : activeNode.accentColor === '#00F0FF' ? '0, 240, 255' : '0, 255, 157'}, 0.3)` }}
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.99 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Ambient Background Wave Shader Pulse */}
            <div
              className="card-ambient-pulse"
              style={{
                background: `radial-gradient(400px circle at 80% 20%, ${activeNode.accentColor}15, transparent 70%)`,
              }}
              aria-hidden="true"
            />

            {/* Header Telemetry */}
            <div className="card-top-bar">
              <div className="bar-tag-group">
                <span className="step-badge" style={{ backgroundColor: activeNode.accentColor }}>
                  PHASE {activeNode.stepNumber}
                </span>
                <span className="category-label">{activeNode.category}</span>
              </div>
              <span className="system-code">{activeNode.id.toUpperCase()}</span>
            </div>

            {/* Main Content Area */}
            <div className="card-main-grid">
              <div className="grid-left-info">
                <h3 className="node-main-title">{activeNode.title}</h3>
                <p className="node-short-tagline">{activeNode.shortDesc}</p>
                <p className="node-full-body">{activeNode.fullDesc}</p>

                {activeNode.demoRoute && (
                  <div className="node-action-area">
                    <Link
                      to={activeNode.demoRoute}
                      className="demo-launch-btn"
                      style={{
                        borderColor: activeNode.accentColor,
                        color: activeNode.accentColor,
                      }}
                    >
                      <span>Launch Interactive {activeNode.title}</span>
                      <span className="btn-arrow">→</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Data Metrics & Status Signal Box */}
              <div className="grid-right-metrics">
                <div className="metrics-box-frame">
                  <div className="box-title-row">
                    <span className="box-dot" style={{ backgroundColor: activeNode.accentColor }} />
                    <span className="box-label">LAB TELEMETRY</span>
                  </div>

                  <div className="metrics-list">
                    {activeNode.metrics.map((m, idx) => (
                      <div key={idx} className="metric-row">
                        <span className="m-label">{m.label}</span>
                        <span className="m-val" style={{ color: activeNode.accentColor }}>
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Equalizer Wave Accent */}
                  <div className="equalizer-bars" aria-hidden="true">
                    {[40, 75, 30, 90, 60, 100, 45, 80].map((h, i) => (
                      <div
                        key={i}
                        className="eq-bar"
                        style={{
                          height: `${h}%`,
                          backgroundColor: activeNode.accentColor,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FragmentCloud;