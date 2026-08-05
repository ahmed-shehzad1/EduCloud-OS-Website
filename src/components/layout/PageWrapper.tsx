import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export const PageWrapper: React.FC = () => {
  return (
    <>
      <Navbar />
      {/* 
        Padding prevents the fixed HUD Navbar from overlapping the page content.
        minHeight ensures the dark background spans the full viewport.
      */}
      <main className="page-content">
        <Outlet />
      </main>
    </>
  );
};