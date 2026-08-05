// src/components/common/FragmentCloud.tsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { TIMELINE_NODES } from '../../data/timeline';
import '../../styles/pages/about.css';
import { Link } from 'react-router-dom';

/*
  FragmentCloud
  - Sculptural fragment elements animate from scattered positions into assembled center.
  - Uses Framer Motion viewport triggers (no external scroll library).
  - The fragment positions and scales are tuned in CSS (absolute layout).
  - Fragments are keyboard focusable and have aria labels for accessibility.
*/

export const FragmentCloud: React.FC = () => {
  const reduceMotion = useReducedMotion();

  const fragVariants = {
    off: (custom: number) => ({
      opacity: 0,
      y: 24 + custom * 8,
      rotate: (custom % 2 === 0 ? -6 : 6),
      scale: 0.96,
    }),
    on: (custom: number) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        delay: 0.12 * custom,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  // Map nodes into three fragments plus meta steps
  // For layout we will render fragment shapes at certain indexes
  const fragments = TIMELINE_NODES.filter((n) => n.role === 'fragment');
  const metas = TIMELINE_NODES.filter((n) => n.role === 'meta');

  return (
    <section className="about-cloud-stage" aria-label="Fragment cloud timeline">
      <div className="about-cloud-inner container-centered">
        <div className="cloud-stage-visual" aria-hidden="true">
          {/* background fog & radial lights are CSS-driven */}
        </div>

        <div className="cloud-stage-fragments" role="list" aria-hidden="false">
          {/* Left fragment (Process) */}
          <motion.div
            className="cloud-fragment cloud-frag-left"
            variants={reduceMotion ? undefined : fragVariants}
            initial={reduceMotion ? undefined : 'off'}
            whileInView={reduceMotion ? undefined : 'on'}
            viewport={{ once: true, amount: 0.28 }}
            custom={0}
            tabIndex={0}
            role="listitem"
            aria-label="Process fragment: animates into place"
          >
            <div className="frag-surface">
              <svg className="frag-shape" viewBox="0 0 300 220" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <path d="M0,40 C40,0 260,0 300,40 L260,180 C220,210 80,210 40,180 Z" fill="rgba(255,255,255,0.02)"/>
              </svg>

              <div className="frag-inside">
                <div className="frag-label">PROCESS</div>
                <div className="frag-mini">Lifecycle • traces</div>
              </div>
            </div>
          </motion.div>

          {/* Center fragment (Scheduler) */}
          <motion.div
            className="cloud-fragment cloud-frag-center"
            variants={reduceMotion ? undefined : fragVariants}
            initial={reduceMotion ? undefined : 'off'}
            whileInView={reduceMotion ? undefined : 'on'}
            viewport={{ once: true, amount: 0.28 }}
            custom={1}
            tabIndex={0}
            role="listitem"
            aria-label="Scheduler fragment: interactive demonstration"
          >
            <div className="frag-surface frag-surface-hero">
              <svg className="frag-shape" viewBox="0 0 360 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <path d="M0,56 C72,0 288,0 360,56 L320,220 C240,260 120,260 40,220 Z" fill="rgba(255,255,255,0.02)"/>
              </svg>

              <div className="frag-inside center">
                <div className="frag-label big">SCHEDULER</div>
                <div className="frag-mini">Hover to preview policies</div>

                <div className="sched-cta-row">
                  <Link to="/how-to" className="sched-cta">Open Scheduler</Link>
                  <div className="sched-hint">FCFS ↔ SJF</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right fragment (Memory) */}
          <motion.div
            className="cloud-fragment cloud-frag-right"
            variants={reduceMotion ? undefined : fragVariants}
            initial={reduceMotion ? undefined : 'off'}
            whileInView={reduceMotion ? undefined : 'on'}
            viewport={{ once: true, amount: 0.28 }}
            custom={2}
            tabIndex={0}
            role="listitem"
            aria-label="Memory fragment: allocation map"
          >
            <div className="frag-surface">
              <svg className="frag-shape" viewBox="0 0 260 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <path d="M0,40 C40,10 220,10 260,40 L240,170 C200,190 60,190 20,170 Z" fill="rgba(255,255,255,0.02)"/>
              </svg>

              <div className="frag-inside">
                <div className="frag-label">MEMORY</div>
                <div className="frag-mini">Maps • fragmentation</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="cloud-timeline" aria-hidden="false">
          <ol className="timeline-list">
            {TIMELINE_NODES.map((node, i) => (
              <li key={node.id} className={`timeline-node ${node.role === 'fragment' ? 'node-frag' : 'node-meta'}`}>
                <motion.div
                  className="timeline-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.16 }}
                  transition={{ duration: 0.7, delay: i * 0.06 }}
                >
                  <div className="timeline-step">{node.step}</div>
                  <div className="timeline-body">
                    <div className="timeline-title">{node.title}</div>
                    <div className="timeline-summary">{node.summary}</div>
                  </div>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};