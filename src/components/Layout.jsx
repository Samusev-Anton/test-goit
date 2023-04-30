import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { AppBar } from './AppBar/AppBar';
import { Loader } from './Loader';
import { Footer } from './Footer/Footer';
import background from '../images/space.avif';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <BackImg>
          <Outlet />
        </BackImg>
      </Suspense>
      <Footer />
    </>
  );
};

const BackImg = styled.div`
  background-image: url(${background});
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;
