import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import '../../styles/global.css';

export const PageWrapper: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};