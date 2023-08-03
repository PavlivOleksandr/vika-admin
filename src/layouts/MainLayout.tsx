import React from 'react';

// components
import Header from '../components/Antd/Header';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

export default MainLayout;
