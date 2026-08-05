// src/pages/Home/Home.tsx
import React from 'react';
import { Hero } from '../../components/common/Hero';
import { FeatureSection } from '../../components/common/FeatureSection';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <main className="page-container" id="explore" role="main">
        <FeatureSection />
        {/* Future sections: OS showcase, screenshots, CTA... */}
      </main>
    </>
  );
};