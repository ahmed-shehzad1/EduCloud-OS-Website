// src/components/common/HowToSteps.tsx
import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import '../../styles/pages/howto.css';
import { Link } from 'react-router-dom';

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

export const HowToSteps: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState<string | null>(STEPS[0].id);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  };

  const item = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <motion.div
      className="howto-steps"
      variants={reduceMotion ? undefined : container}
      initial={reduceMotion ? undefined : 'hidden'}
      animate={reduceMotion ? undefined : 'show'}
    >
      {STEPS.map((s, i) => {
        const isOpen = open === s.id;
        return (
          <motion.article key={s.id} className={`howto-step ${isOpen ? 'open' : ''}`} variants={reduceMotion ? undefined : item}>
            <button
              className="howto-step-head"
              onClick={() => setOpen(isOpen ? null : s.id)}
              aria-expanded={isOpen}
              aria-controls={`howto-detail-${s.id}`}
            >
              <div className="step-number">
                <span>{String(i + 1).padStart(2, '0')}</span>
                <div className="number-gold" aria-hidden="true" />
              </div>

              <div className="step-meta">
                <div className="step-title">{s.title}</div>
                <div className="step-short">{s.short}</div>
              </div>

              <div className="step-cta" aria-hidden="true">›</div>
            </button>

            <motion.div
              id={`howto-detail-${s.id}`}
              className="howto-step-detail"
              initial={{ height: 0, opacity: 0 }}
              animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="detail-inner">
                <p>{s.detail}</p>

                {s.id === 'download' && (
                  <div className="download-block">
                    <Link to="/download" className="download-btn">Go to download</Link>
                    <div className="download-note">Latest release • Signed • Windows x64 (installer)</div>
                  </div>
                )}

                {s.id === 'install' && (
                  <div className="install-commands">
                    <pre>
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
          </motion.article>
        );
      })}
    </motion.div>
  );
};