import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageWrapper } from '../components/layout/PageWrapper';
import { Home } from '../pages/Home/Home';
import { About } from '../pages/About/About';
import { HowTo } from '../pages/HowTo/HowTo';
import { AuthCallback } from '../pages/AuthCallback/AuthCallback';
import { Profile } from '../pages/Profile/Profile';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Main website pages — all use the EduCloud Navbar + Footer */}
      <Route element={<PageWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-to" element={<HowTo />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* OAuth callback stays outside the normal website shell */}
      <Route path="/auth/github/callback" element={<AuthCallback />} />
    </Routes>
  );
};