import React from 'react';
import { Hero } from '../../components/common/Hero';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <main className="page-container" id="explore">
        {/* Existing homepage sections: features, CTA, screenshots, etc. */}
        <section>
          {/* ... */}
        </section>
      </main>
    </>
  );
};