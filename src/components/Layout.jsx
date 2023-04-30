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
      <BackImg>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Footer />
      </BackImg>
    </>
  );
};

const BackImg = styled.div`
  /* margin-left: auto;
  margin-right: auto; */
  background-image: url(${background});
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-attachment: fixed; */
  min-height: 100vh;

  /* scrollbar-gutter: stable both-edges;
  overflow: overlay;
 */
  /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; */
`;
