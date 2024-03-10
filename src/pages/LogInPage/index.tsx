import React, { useEffect, useMemo, useState } from 'react';

// helpers
import styled from 'styled-components';
import { userAPI } from '../../api/user/userAPI';
import { RoutesEnum } from '../../router/routes';
import { StateModel } from '../../redux/reducers';
import { useNavigate } from 'react-router-dom';
import { user as userActions } from '../../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';

// components
import Box from '../../components/Additional/Box';
import Logo from '../../assets/images/logo-1.webp';
import Image from '../../components/Antd/Image';
import Title from '../../components/Antd/Title';
import Notification from '../../components/Antd/Notification';
import LogInForm, { FormValuesModel } from '../../components/Forms/TemplateForms/LogIn/LogInForm';

const LogInPage = () => {
  const user = useSelector<StateModel, { email: string; role: string } | null>(state => state.userReducer.user);

  const [notificationData, setNotificationData] = useState({ isOpen: false, message: '' });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = useMemo<FormValuesModel>(
    () => ({
      email: '',
      password: '',
    }),
    [],
  );

  useEffect(() => {
    if (user) {
      return navigate(RoutesEnum.Main);
    }
  }, [user]);

  const onSubmit = async ({ email, password }: FormValuesModel) => {
    if (email !== process.env.REACT_APP_EMAIL) {
      setNotificationData({ isOpen: true, message: 'Невірний логін!' });
    } else if (password !== process.env.REACT_APP_PASS) {
      setNotificationData({ isOpen: true, message: 'Невірний пароль!' });
    } else {
      const token = await userAPI.login(email);

      if (token) {
        localStorage.setItem('token', token);
        dispatch(userActions.setUser({ email, role: 'Адміністратор' }));
        window.location.reload();
      }
    }
  };

  return (
    <LoginBox>
      <FormBox>
        <Title level={2}>Увійдіть в акаунт</Title>
        <Image src={Logo} width='100px' height='80px' />
        <LogInForm initialValues={initialValues} onSubmit={onSubmit} />
        <Notification
          type='error'
          isOpen={notificationData.isOpen}
          title={notificationData.message}
          closeCallback={() => setNotificationData(prevState => ({ ...prevState, isOpen: false }))}
        />
      </FormBox>
    </LoginBox>
  );
};

const LoginBox = styled(Box)`
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const FormBox = styled(Box)`
  border-radius: 5%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: inset -1px 2px 14px -4px rgba(97, 97, 97, 1);
  -moz-box-shadow: inset -1px 2px 14px -4px rgba(97, 97, 97, 1);
  box-shadow: inset -1px 2px 14px -4px rgba(97, 97, 97, 1);
  width: 300px;
  padding: 14px 24px 38px 24px;
  form {
    margin-top: 14px;
    display: flex;
    width: 200px;
    align-items: center;
  }
  h2 {
    color: #2b2b2b;
  }
`;

export default LogInPage;
