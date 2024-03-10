import React from 'react';

// helpers
import { routes } from './routes';
import { IRoute } from '../interfaces/common';
import { Routes, Route } from 'react-router-dom';

// components
import PrivateRoute from './PrivateRoute';

// pages
import NotFoundPage from '../pages/NotFoundPage/index.';

// layouts
import MainLayout from '../layouts/MainLayout';

const Router = () => {
  const token = localStorage.getItem('token');

  return (
    <Routes>
      <Route element={<MainLayout />}>
        {routes.map((route: IRoute) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <PrivateRoute isAuthenticated={!!token}>
                <route.component />
              </PrivateRoute>
            }
          />
        ))}
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
