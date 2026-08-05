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
      <main style={{ paddingTop: '100px', minHeight: '100vh', paddingInline: '2rem' }}>
        <Outlet />
      </main>
    </>
  );
};