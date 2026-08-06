import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FEATURES, type FeatureItem } from '../../data/features';
import '../../styles/components/feature-section.css';

export const FeatureSection: React.FC = () => {
  const [activeSubsystem, setActiveSubsystem] = useState<FeatureItem>(FEATURES[0]);
  const [telemetryIndex, setTelemetryIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const streamLength = activeSubsystem.telemetryStream.length;
    if (streamLength === 0) return;

    const interval = setInterval(() => {
      setTelemetryIndex((prev) => (prev + 1) % streamLength);
    }, 2200);

    return () => clearInterval(interval);
  }, [activeSubsystem]);

  const handleSubsystemChange = (sys: FeatureItem) => {
    setActiveSubsystem(sys);
    setTelemetryIndex(0);
  };

  return (
    <section className="features-hud-section" aria-labelledby="features-hud-heading">
      <div className="hud-grid-background" aria-hidden="true" />

      <div className="features-container">
       <header className="hud-section-header">
  <div className="hud-status-badge">
    <span className="badge-pulse" />
    <span className="badge-text">OPERATING SYSTEM SUBSYSTEMS</span>
  </div>

  <h2 id="features-hud-heading" className="hud-section-title">
    EXPLORE EDUCloud OS
  </h2>

  <p className="hud-section-lead">
    Discover the core operating-system concepts implemented inside EduCloud OS,
    including process management, CPU scheduling, thread synchronization,
    inter-process communication, memory management, file systems, and kernel simulation.
  </p>
</header>

        <div className="hud-console-chassis">
          <nav className="hud-selector-rail" aria-label="Subsystems Navigation">
            {FEATURES.map((sys) => {
              const isActive = activeSubsystem.id === sys.id;
              return (
                <button
                  key={sys.id}
                  className={`subsystem-node-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => handleSubsystemChange(sys)}
                  type="button"
                >
                  <div className="node-indicator-bar" />
                  <div className="node-info">
                    <span className="node-sys-code">{sys.sysCode}</span>
                    <span className="node-title">{sys.title}</span>
                  </div>
                  <span className="node-status-led" />
                </button>
              );
            })}
          </nav>

          <div className="hud-stage-chamber">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSubsystem.id}
                className="chamber-content-wrapper"
                initial={reduceMotion ? false : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="chamber-top-bar">
                  <div className="chamber-sys-label">
                    <span className="label-bracket">[</span>
                    <span className="label-code">{activeSubsystem.sysCode}</span>
                    <span className="label-bracket">]</span>
                    <span className="label-sub">{activeSubsystem.subtitle}</span>
                  </div>
                  <div className="chamber-live-signal">
                    <span className="signal-dot" />
                    LIVE DIAGNOSTICS
                  </div>
                </div>

                <div className="chamber-visualizer-deck">
                  <div className="deck-glass-overlay" />
                  
                  {activeSubsystem.id === 'process-management' && (
                    <div className="visualizer-stage state-machine-stage">
                      <div className="state-node node-new">NEW</div>
                      <div className="state-connector connector-1"><span className="pulse-line" /></div>
                      <div className="state-node node-ready is-active">READY</div>
                      <div className="state-connector connector-2"><span className="pulse-line" /></div>
                      <div className="state-node node-running">RUNNING</div>
                    </div>
                  )}

                  {activeSubsystem.id === 'cpu-scheduling' && (
                    <div className="visualizer-stage gantt-stage">
                      <div className="gantt-track">
                        <span className="gantt-label">CPU0</span>
                        <div className="gantt-bars">
                          <div className="gantt-block b1" style={{ width: '35%' }}>P1</div>
                          <div className="gantt-block b2" style={{ width: '25%' }}>P2</div>
                          <div className="gantt-block b3" style={{ width: '40%' }}>P3</div>
                        </div>
                      </div>
                      <div className="quantum-sweep-line" />
                    </div>
                  )}

                  {activeSubsystem.id === 'memory' && (
                    <div className="visualizer-stage memory-grid-stage">
                      {Array.from({ length: 16 }).map((_, idx) => (
                        <div key={idx} className={`page-frame ${idx % 3 === 0 ? 'allocated' : ''} ${idx === 5 ? 'fault' : ''}`}>
                          <span>0x{idx.toString(16).toUpperCase().padStart(2, '0')}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="chamber-body-grid">
                  <div className="body-description">
                    <h3 className="chamber-title">{activeSubsystem.title}</h3>
                    <p className="chamber-blurb">{activeSubsystem.blurb}</p>

                    <div className="chamber-highlights">
                      {activeSubsystem.highlights.map((item) => (
                        <div key={item} className="highlight-pill">
                          <span className="pill-dot">◆</span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="body-telemetry">
                    <div className="telemetry-metrics-grid">
                      {activeSubsystem.metrics.map((m) => (
                        <div key={m.label} className="metric-box">
                          <span className="metric-box-label">{m.label}</span>
                          <span className="metric-box-value">{m.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="telemetry-terminal-stream">
                      <div className="stream-header">SYSTEM_LOG // STREAM</div>
                      <div className="stream-output">
                        <span className="prompt">&gt;</span> {activeSubsystem.telemetryStream[telemetryIndex] ?? ''}
                        <span className="terminal-cursor">_</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="chamber-footer">
                  <Link to={activeSubsystem.route} className="chamber-uplink-btn">
                    <span>INITIALIZE SUBSYSTEM LABORATORY</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};