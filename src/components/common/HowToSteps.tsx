import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
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
    short: 'Get the latest authenticated Windows release.',
    detail:
      'Open the Downloads page and sign in with GitHub. Once authenticated, you can download the latest EduCloud OS Windows release. The compiled release is protected and is only available to authenticated users.',
  },
  {
    id: 'extract',
    title: 'EXTRACT',
    short: 'Extract the downloaded release package.',
    detail:
      'After downloading the ZIP package, extract the complete folder to a location of your choice. Keep all files together because the application depends on the Qt runtime libraries and plugins included in the release package.',
  },
  {
    id: 'launch',
    title: 'LAUNCH',
    short: 'Start EduCloud OS from the extracted folder.',
    detail:
      'Open the extracted release folder and run EduCloudOSCore.exe. No separate installer is required for the current portable Windows release. Windows may display a security confirmation the first time you launch the application.',
  },
  {
    id: 'explore',
    title: 'EXPLORE',
    short: 'Experiment with the simulated operating system.',
    detail:
      'Once EduCloud OS is running, explore the available modules including Task Manager, Process Simulation, Scheduler, Memory Manager, Kernel Simulator, File System, System Monitor, Bankers Algorithm, Browser, Calculator, and Snake Game.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
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
      {STEPS.map((step, index) => {
        const isOpen = open === step.id;

        return (
          <motion.article
            key={step.id}
            className={`howto-step-card ${isOpen ? 'is-open' : ''}`}
            variants={reduceMotion ? undefined : itemVariants}
          >
            <button
              type="button"
              className="howto-step-trigger"
              onClick={() => setOpen(isOpen ? null : step.id)}
              aria-expanded={isOpen}
              aria-controls={`howto-detail-${step.id}`}
            >
              <div className="step-number-badge">
                <span className="number-text">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span
                  className="badge-glow-ring"
                  aria-hidden="true"
                />
              </div>

              <div className="step-meta">
                <div className="step-title-row">
                  <h3 className="step-title">{step.title}</h3>

                  <span className="step-phase-tag">
                    PHASE 0{index + 1}
                  </span>
                </div>

                <div className="step-short-desc">
                  {step.short}
                </div>
              </div>

              <motion.div
                className="step-chevron"
                animate={{
                  rotate: isOpen ? 180 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
                aria-hidden="true"
              >
                ↓
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`howto-detail-${step.id}`}
                  className="howto-step-detail-wrapper"
                  initial={
                    reduceMotion
                      ? { opacity: 1, height: 'auto' }
                      : { height: 0, opacity: 0 }
                  }
                  animate={{
                    height: 'auto',
                    opacity: 1,
                  }}
                  exit={
                    reduceMotion
                      ? { opacity: 0, height: 0 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{
                    duration: 0.38,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                >
                  <div className="detail-content-box">
                    <p className="detail-text">
                      {step.detail}
                    </p>

                    {step.id === 'download' && (
                      <div className="download-action-panel">
                        <Link
                          to="/downloads"
                          className="step-download-btn"
                        >
                          Go to Downloads →
                        </Link>

                        <span className="download-spec-note">
                          GitHub authentication required • Windows x64 • Portable release
                        </span>
                      </div>
                    )}

                    {step.id === 'extract' && (
                      <div className="terminal-code-window">
                        <div className="terminal-header">
                          <div className="terminal-dots">
                            <span className="dot red" />
                            <span className="dot yellow" />
                            <span className="dot green" />
                          </div>

                          <span className="terminal-title">
                            Windows — release extraction
                          </span>
                        </div>

                        <pre className="terminal-body">
{`# Example release package

EduCloudOS-Windows-v1.0.0.zip

# Extract the complete folder
# Keep the .exe, DLL files and plugins together`}
                        </pre>
                      </div>
                    )}

                    {step.id === 'launch' && (
                      <div className="terminal-code-window">
                        <div className="terminal-header">
                          <div className="terminal-dots">
                            <span className="dot red" />
                            <span className="dot yellow" />
                            <span className="dot green" />
                          </div>

                          <span className="terminal-title">
                            Windows — launch
                          </span>
                        </div>

                        <pre className="terminal-body">
{`# Open the extracted release folder

EduCloudOSCore.exe

# Double-click the executable
# to launch EduCloud OS`}
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