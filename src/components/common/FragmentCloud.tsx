import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion';
import { TIMELINE_NODES, type TimelineNode } from '../../data/timeline';

export const FragmentCloud: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const [activeNodeId, setActiveNodeId] = useState<string>('node-scheduler');

  const activeNode = TIMELINE_NODES.find((n) => n.id === activeNodeId) || TIMELINE_NODES[0];

  const nodePulseVariants: Variants = {
    idle: { scale: 1, rotate: 0 },
    active: {
      scale: [1, 1.15, 1],
      rotate: [0, 90, 180, 270, 360],
      transition: { duration: 16, repeat: Infinity, ease: 'linear' },
    },
  };

  return (
    <div className="about-spatial-matrix" role="region" aria-label="Kernel Interactive State Machine">
      {/* Laser Spatial Mesh Connections */}
      <svg className="matrix-laser-canvas" viewBox="-100 -100 200 200" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(224, 0, 63, 0.4)" />
            <stop offset="50%" stopColor="rgba(0, 240, 255, 0.4)" />
            <stop offset="100%" stopColor="rgba(212, 174, 55, 0.4)" />
          </linearGradient>
        </defs>

        {/* Dynamic Connector Constellations */}
        {TIMELINE_NODES.map((node, i) => {
          const nextNode = TIMELINE_NODES[(i + 1) % TIMELINE_NODES.length];
          const isActive = node.id === activeNodeId || nextNode.id === activeNodeId;
          return (
            <motion.line
              key={`laser-${node.id}-${nextNode.id}`}
              x1={node.spatialCoords.x}
              y1={node.spatialCoords.y}
              x2={nextNode.spatialCoords.x}
              y2={nextNode.spatialCoords.y}
              stroke="url(#laserGrad)"
              strokeWidth={isActive ? '1.2' : '0.4'}
              strokeDasharray={isActive ? '3 1' : '1 2'}
              opacity={isActive ? 0.9 : 0.25}
              animate={{
                strokeDashoffset: [0, -20],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          );
        })}
      </svg>

      {/* Interactive Floating Spatial Nodes */}
      <div className="nodes-spatial-container">
        {TIMELINE_NODES.map((node) => {
          const isSelected = node.id === activeNodeId;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNodeId(node.id)}
              className={`spatial-node-anchor ${isSelected ? 'is-active' : ''}`}
              style={{
                left: `${50 + node.spatialCoords.x * 0.9}%`,
                top: `${50 + node.spatialCoords.y * 0.9}%`,
              }}
              aria-label={`Select node ${node.title}`}
            >
              <motion.div
                className="node-ring-core"
                style={{ borderColor: node.accentColor }}
                variants={reduceMotion ? undefined : nodePulseVariants}
                animate={reduceMotion ? 'idle' : isSelected ? 'active' : 'idle'}
              >
                <div
                  className="node-center-dot"
                  style={{
                    backgroundColor: node.accentColor,
                    boxShadow: `0 0 15px ${node.accentColor}`,
                  }}
                />
              </motion.div>

              <span className="node-hex-tag" style={{ color: node.accentColor }}>
                {node.stepHex}
              </span>

              {isSelected && <div className="node-beacon-ping" style={{ borderColor: node.accentColor }} />}
            </button>
          );
        })}
      </div>

      {/* Holographic Kernel Core HUD Inspect Panel */}
      <div className="hologram-hud-viewport">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            className="hud-card-glass"
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top HUD Frame Header */}
            <div className="hud-frame-header">
              <div className="hud-code-group">
                <span className="hud-step-badge" style={{ backgroundColor: activeNode.accentColor }}>
                  {activeNode.stepHex}
                </span>
                <span className="hud-code-name">{activeNode.codeName}</span>
              </div>
              <span className="hud-role-pill">{activeNode.phaseRole.toUpperCase()}</span>
            </div>

            {/* Core Info Display */}
            <div className="hud-body-content">
              <h2 className="hud-node-title">{activeNode.title}</h2>
              <p className="hud-node-tagline">{activeNode.tagline}</p>
            </div>

            {/* Real-time Telemetry Metrics Grid */}
            <div className="hud-metrics-grid">
              {activeNode.telemetry.map((metric, idx) => (
                <div key={`metric-${idx}`} className="hud-metric-box">
                  <span className="metric-lbl">{metric.label}</span>
                  <div className="metric-val-row">
                    <span className="metric-val" style={{ color: activeNode.accentColor }}>
                      {metric.value}
                    </span>
                    {metric.unit && <span className="metric-unit">{metric.unit}</span>}
                  </div>
                  <div className={`metric-status-bar ${metric.status}`} />
                </div>
              ))}
            </div>

            {/* Subsystem Hexagon Audio-Visualizer Reacting Element */}
            <div className="hud-visual-spectrum" aria-hidden="true">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`bar-${i}`}
                  className="spectrum-bar"
                  style={{ backgroundColor: activeNode.accentColor }}
                  animate={{
                    height: [8, Math.max(12, (i * 7) % 36), 8],
                  }}
                  transition={{
                    duration: 0.8 + (i % 4) * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FragmentCloud;