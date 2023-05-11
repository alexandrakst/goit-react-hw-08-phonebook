import React, { Suspense } from 'react';
import Navigation from './Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}
