import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from './AppBar/AppBar';
import { Loader } from './Loader';
import { Footer } from './Footer/Footer';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
