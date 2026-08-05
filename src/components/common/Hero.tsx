// src/components/common/Hero.tsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import '../../styles/components/hero.css';

export const Hero: React.FC = () => {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
        when: 'beforeChildren',
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] } },
  };

  const panels = {
    hidden: { opacity: 0, y: 10, scale: 0.995 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: 0.14 + i * 0.06, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section className="hero-viewport" aria-labelledby="hero-heading">
      <div className="hero-background" aria-hidden="true" />

      <motion.div
        className="hero-content"
        variants={reduceMotion ? undefined : container}
        initial={reduceMotion ? undefined : 'hidden'}
        animate={reduceMotion ? undefined : 'show'}
      >
        <motion.div className="hero-strap" variants={reduceMotion ? undefined : item}>
          <span className="mono">SYSTEM INITIALIZING</span>
          <span className="strap-dot" />
        </motion.div>

        <motion.h1 id="hero-heading" className="hero-heading" variants={reduceMotion ? undefined : item}>
          <span className="hero-line">E D U C L O U D</span>
          <span className="hero-os">OS</span>
        </motion.h1>

        <motion.p className="hero-sub" variants={reduceMotion ? undefined : item}>
          An interactive operating-system laboratory — explore process scheduling, memory, IPC, and system internals.
        </motion.p>

        <motion.div className="hero-ctas" variants={reduceMotion ? undefined : item}>
          <a className="cta primary" href="#explore">Explore EduCloud OS</a>
          <a className="cta ghost" href="#system">View the system ↓</a>
        </motion.div>

        <div className="hero-visuals" aria-hidden="true">
          <motion.div className="panel left" custom={0} variants={reduceMotion ? undefined : panels} animate={reduceMotion ? undefined : 'show'}>
            <div className="panel-title">PROCESS</div>
            <div className="panel-body"><div className="dot">● 12</div><div className="dot">● 08</div></div>
          </motion.div>

          <motion.div className="panel center" custom={1} variants={reduceMotion ? undefined : panels} animate={reduceMotion ? undefined : 'show'}>
            <div className="panel-title">SCHEDULER</div>
            <div className="panel-body"><div className="chip">FCFS → SJF</div></div>
          </motion.div>

          <motion.div className="panel right" custom={2} variants={reduceMotion ? undefined : panels} animate={reduceMotion ? undefined : 'show'}>
            <div className="panel-title">MEMORY</div>
            <div className="panel-body"><div className="meter"><span style={{ width: '74%' }} /></div></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};