import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TIMELINE_NODES, type TimelineNode } from '../../data/timeline';

export const FragmentCloud: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const [selectedId, setSelectedId] = useState<string>('t-vision');

  const activeNode = TIMELINE_NODES.find((n) => n.id === selectedId) || TIMELINE_NODES[1];

  return (
    <div className="about-interactive-stage">
      {/* Visual Connection Network */}
      <div className="stage-constellation">
        <svg className="constellation-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {TIMELINE_NODES.map((node, i) => {
            const nextNode = TIMELINE_NODES[(i + 1) % TIMELINE_NODES.length];
            const isRelated = node.id === selectedId || nextNode.id === selectedId;
            return (
              <line
                key={`line-${node.id}-${nextNode.id}`}
                x1={node.coords.x}
                y1={node.coords.y}
                x2={nextNode.coords.x}
                y2={nextNode.coords.y}
                stroke={isRelated ? node.accentColor : 'rgba(255, 255, 255, 0.12)'}
                strokeWidth={isRelated ? '0.6' : '0.2'}
                strokeDasharray={isRelated ? 'none' : '1 1'}
              />
            );
          })}
        </svg>

        {/* Interactive Story Nodes */}
        {TIMELINE_NODES.map((node) => {
          const isSelected = node.id === selectedId;

          return (
            <motion.button
              key={node.id}
              onClick={() => setSelectedId(node.id)}
              className={`constellation-node ${isSelected ? 'is-selected' : ''}`}
              style={{
                left: `${node.coords.x}%`,
                top: `${node.coords.y}%`,
              }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Inspect ${node.title}`}
            >
              <div
                className="node-ring"
                style={{
                  borderColor: node.accentColor,
                  boxShadow: isSelected ? `0 0 18px ${node.accentColor}` : 'none',
                }}
              >
                <div
                  className="node-dot"
                  style={{ backgroundColor: node.accentColor }}
                />
              </div>

              <span className="node-step-tag">{node.step}</span>
              <span className="node-title-preview">{node.title}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Inspector HUD Card */}
      <div className="stage-inspector">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            className="inspector-card"
            style={{ borderTopColor: activeNode.accentColor }}
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inspector-header">
              <div className="header-meta">
                <span className="step-badge" style={{ backgroundColor: activeNode.accentColor }}>
                  STEP {activeNode.step}
                </span>
                <span className="category-tag">{activeNode.category.toUpperCase()}</span>
              </div>
              <span className="node-id-code">{activeNode.id}</span>
            </div>

            <div className="inspector-body">
              <h3 className="inspector-title">{activeNode.title}</h3>
              <p className="inspector-summary">{activeNode.summary}</p>
              <p className="inspector-deepdive">{activeNode.deepDive}</p>
            </div>

            <div className="inspector-highlights">
              {activeNode.highlights.map((h, idx) => (
                <div key={idx} className="highlight-item">
                  <span className="highlight-label">{h.label}</span>
                  <span className="highlight-detail">{h.detail}</span>
                </div>
              ))}
            </div>

            {activeNode.linkTo && (
              <div className="inspector-action">
                <Link to={activeNode.linkTo} className="action-button" style={{ borderColor: activeNode.accentColor }}>
                  Open {activeNode.title} Dynamic Experiment →
                </Link>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};