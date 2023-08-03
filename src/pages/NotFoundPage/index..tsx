import React from 'react';

// helpers
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// components
import Box from '../../components/Additional/Box';
import Title from '../../components/Antd/Title';
import Button from '../../components/Antd/Button';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <NotFoundBox>
      <Title>Error: 404</Title>
      <Title level={2}>Сторінки не знайдено</Title>
      <Button onClick={() => navigate(-1)}>Вернутися назад</Button>
    </NotFoundBox>
  );
};

const NotFoundBox = styled(Box)`
  height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  h1 {
    color: ${({ theme }) => theme.red};
  }
`;

export default NotFoundPage;
