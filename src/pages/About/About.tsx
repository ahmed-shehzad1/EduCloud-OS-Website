// src/pages/About/About.tsx
import React from 'react';
import { FragmentCloud } from '../../components/common/FragmentCloud';
import '../../styles/pages/about.css';

export const About: React.FC = () => {
  return (
    <div className="about-page">
      <header className="about-hero container-centered">
        <h1 className="about-title">About EduCloud</h1>
        <p className="about-lead">
          EduCloud is an interactive operating system laboratory that turns abstract OS concepts into explorable, visual learning modules.
        </p>
      </header>

      <main className="about-main">
        <FragmentCloud />

        <section className="about-cta container-centered">
          <h2>Join the lab</h2>
          <p>Explore modules, try experiments, and build intuition about how operating systems behave in the real world.</p>
        </section>
      </main>
    </div>
  );
};