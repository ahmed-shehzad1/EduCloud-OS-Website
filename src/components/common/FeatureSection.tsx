// src/components/common/FeatureSection.tsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FEATURES } from '../../data/features';
import '../../styles/components/feature-section.css';
import { Link } from 'react-router-dom';

export const FeatureSection: React.FC = () => {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.995 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
    hover: { scale: 1.02, y: -4, transition: { duration: 0.28 } },
  };

  return (
    <section className="features-section" aria-labelledby="features-heading">
      <div className="features-inner container-centered">
        <header className="features-header">
          <h2 id="features-heading" className="features-title">
            Core Concepts
          </h2>
          <p className="features-lead">
            Large, interactive panels that teach OS fundamentals through hands‑on visualizations — not static documentation.
          </p>
        </header>

        <motion.div
          className="features-grid"
          variants={reduceMotion ? undefined : container}
          initial={reduceMotion ? undefined : 'hidden'}
          animate={reduceMotion ? undefined : 'show'}
        >
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.id}
              className={`feature-card feature-card-${i}`}
              variants={reduceMotion ? undefined : cardVariants}
              whileHover={reduceMotion ? undefined : 'hover'}
              aria-labelledby={`feature-${f.id}-title`}
              role="article"
            >
              <div className="card-visual">
                {/* Decorative clipped shape and simple inline visualization */}
                <svg className="visual-shape" viewBox="0 0 200 120" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0,24 C40,0 160,0 200,24 L200,96 C160,120 40,120 0,96 Z" fill="rgba(255,255,255,0.02)" />
                </svg>

                <div className="mini-visual" aria-hidden="true">
                  {/* subtle dynamic bars / meter; representational only */}
                  <div className="mini-bars">
                    <span style={{ height: `${40 + i * 8}%` }} />
                    <span style={{ height: `${60 - i * 6}%` }} />
                    <span style={{ height: `${30 + i * 10}%` }} />
                    <span style={{ height: `${50 + i * 4}%` }} />
                  </div>
                </div>
              </div>

              <div className="card-body">
                <h3 id={`feature-${f.id}-title`} className="card-title">
                  <span className="title-main">{f.title}</span>
                  <span className="title-sub">{f.subtitle}</span>
                </h3>

                <p className="card-blurb">{f.blurb}</p>

                <ul className="card-highlights" aria-hidden="true">
                  {f.highlights?.map((h) => (
                    <li key={h} className="highlight">{h}</li>
                  ))}
                </ul>

                <div className="card-actions">
                  <Link to={f.route ?? '/how-to'} className="btn-link" aria-label={`Explore ${f.title}`}>
                    Explore
                    <span className="btn-gold" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};