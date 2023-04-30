import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from 'pages/Home';
import { NotFoundPage } from 'pages/NotFoundPage';

const Users = lazy(() =>
  import('../pages/Users').then(module => ({
    ...module,
    default: module.Users,
  }))
);
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/follows" element={<Users />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
