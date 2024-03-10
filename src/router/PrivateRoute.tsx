import React, { ReactNode } from 'react';

// helpers
import LogInPage from '../pages/LogInPage';

interface PrivateRouteProps {
  children: ReactNode;
  isAuthenticated: boolean;
}

const PrivateRoute = ({ isAuthenticated, children }: PrivateRouteProps) => {
  if (!isAuthenticated) {
    return <LogInPage />;
  }

  return children;
};

export default PrivateRoute as any;
