import React from 'react';

// components
import { Layout } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../Button';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { RoutesEnum } from '../../../router/routes';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Layout.Header>
      Logo
      {pathname !== RoutesEnum.Main && (
        <Button onClick={() => navigate(RoutesEnum.Main)}>
          <ArrowLeftOutlined rev='' />
          Повернутися на головну
        </Button>
      )}
    </Layout.Header>
  );
};

export default Header;
