import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageWrapper } from '../components/layout/PageWrapper';
import { Home } from '../pages/Home/Home';
import { About } from '../pages/About/About';
import { HowTo } from '../pages/HowTo/HowTo';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Parent route wrapping all pages with the Navbar */}
      <Route element={<PageWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-to" element={<HowTo />} />
      </Route>
    </Routes>
  );
};