import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../styles/pages/howto.css';

type Step = {
  id: string;
  title: string;
  short: string;
  detail: string;
};

const STEPS: Step[] = [
  {
    id: 'download',
    title: 'DOWNLOAD',
    short: 'Get the installer from Releases.',
    detail:
      'Visit the GitHub Releases page to download the latest stable EduCloud OS installer (Windows x64). For source or other platforms, see the repository assets or use the source build instructions.',
  },
  {
    id: 'install',
    title: 'INSTALL',
    short: 'Run the installer and follow prompts.',
    detail:
      'Run the downloaded installer (EduCloudOS-Setup.exe). Accept the license, choose install path, and optionally add the EduCloud CLI tools to PATH. Administrative privileges may be required on Windows.',
  },
  {
    id: 'launch',
    title: 'LAUNCH',
    short: 'Start the EduCloud runtime.',
    detail:
      'After install, run "EduCloud OS" from the Start menu (or the app launcher). The first launch initializes sample workloads and the interactive lab environment.',
  },
  {
    id: 'explore',
    title: 'EXPLORE',
    short: 'Open modules and experiments.',
    detail:
      'Open the Scheduler, Process Explorer, and Memory Map modules from the UI. Try the example workloads to see scheduling behavior and memory allocation in action.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export const HowToSteps: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState<string | null>(STEPS[0].id);

  return (
    <motion.div
      className="howto-steps-container"
      variants={reduceMotion ? undefined : containerVariants}
      initial={reduceMotion ? undefined : 'hidden'}
      animate={reduceMotion ? undefined : 'show'}
    >
      {STEPS.map((s, i) => {
        const isOpen = open === s.id;
        return (
          <motion.article
            key={s.id}
            className={`howto-step-card ${isOpen ? 'is-open' : ''}`}
            variants={reduceMotion ? undefined : itemVariants}
          >
            <button
              className="howto-step-trigger"
              onClick={() => setOpen(isOpen ? null : s.id)}
              aria-expanded={isOpen}
              aria-controls={`howto-detail-${s.id}`}
            >
              <div className="step-number-badge">
                <span className="number-text">{String(i + 1).padStart(2, '0')}</span>
                <span className="badge-glow-ring" aria-hidden="true" />
              </div>

              <div className="step-meta">
                <div className="step-title-row">
                  <h3 className="step-title">{s.title}</h3>
                  <span className="step-phase-tag">PHASE 0{i + 1}</span>
                </div>
                <div className="step-short-desc">{s.short}</div>
              </div>

              <motion.div
                className="step-chevron"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                aria-hidden="true"
              >
                ↓
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`howto-detail-${s.id}`}
                  className="howto-step-detail-wrapper"
                  initial={reduceMotion ? { opacity: 1, height: 'auto' } : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduceMotion ? { opacity: 0, height: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] as const }}
                >
                  <div className="detail-content-box">
                    <p className="detail-text">{s.detail}</p>

                    {s.id === 'download' && (
                      <div className="download-action-panel">
                        <Link to="/download" className="step-download-btn">
                          Go to download →
                        </Link>
                        <span className="download-spec-note">
                          Latest release • Signed • Windows x64 (installer)
                        </span>
                      </div>
                    )}

                    {s.id === 'install' && (
                      <div className="terminal-code-window">
                        <div className="terminal-header">
                          <div className="terminal-dots">
                            <span className="dot red" />
                            <span className="dot yellow" />
                            <span className="dot green" />
                          </div>
                          <span className="terminal-title">bash — install verification</span>
                        </div>
                        <pre className="terminal-body">
{`# Example: verify installer:
EduCloudOS-Setup.exe --verify

# For source builds (Linux/macOS):
cmake -S . -B build
cmake --build build -- -j 6`}
                        </pre>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>
        );
      })}
    </motion.div>
  );
};