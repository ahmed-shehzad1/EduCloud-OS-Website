// src/pages/Home/Home.tsx
import React from 'react';
import { Hero } from '../../components/common/Hero';
import { FeatureSection } from '../../components/common/FeatureSection';
import { FeatureFragments } from '../../components/common/FeatureFragments';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <main className="page-container" id="explore" role="main">
        <FeatureSection />
         <FeatureFragments />
        {/* Future sections: OS showcase, screenshots, CTA... */}
        
      </main>
    </>
  );
};