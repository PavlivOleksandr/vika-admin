import React from 'react';

// helpers
import styled from 'styled-components';
import { RoutesEnum } from '../../../router/routes';
import { useDispatch } from 'react-redux';
import { user as userActions } from '../../../redux/actions/user';
import { useLocation, useNavigate } from 'react-router-dom';

// components
import Box from '../../Additional/Box';
import Text from '../Text';
import Logo from '../../../assets/images/logo.png';
import Image from '../Image';
import Button from '../Button';
import { Layout } from 'antd';
import { RollbackOutlined, ArrowLeftOutlined, CommentOutlined } from '@ant-design/icons';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const token = localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(userActions.setUser(null));
    window.location.reload();
  };

  return (
    <StyledHeader>
      <Box align='center'>
        <LogoBlock src={Logo} />
        {pathname !== RoutesEnum.Main && (
          <Button onClick={() => navigate(RoutesEnum.Main)}>
            <ArrowLeftOutlined rev='' />
            Повернутися на головну
          </Button>
        )}
      </Box>

      {token && (
        <Box width='auto' align='center'>
          <Box onClick={() => navigate(RoutesEnum.Messages)} margin='0 24px 0 0'>
            <CommentOutlined rev='' />
          </Box>
          <LogOutBlock onClick={logout}>
            <Text> Вийти</Text>
            <RollbackOutlined rev='' />
          </LogOutBlock>
        </Box>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled(Layout.Header)`
  justify-content: space-between;
`;

const LogoBlock = styled(Image)`
  width: 200px;
  height: 50px;
  img {
    margin-bottom: 23px;
  }
`;

const LogOutBlock = styled(Box)`
  width: auto;
  align-items: center;
  cursor: pointer;
`;

export default Header;
