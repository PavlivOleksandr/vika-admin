import React from 'react';

// components
import Input from '../../../../../Antd/Input';
import FormField from '../../../../FormField';
import InputPassword from '../../../../../Antd/InputPassword';

const InnerForm = () => {
  return (
    <>
      <FormField name='email' placeholder={'Логін'} component={Input} />
      <FormField name='password' placeholder={'Пароль'} component={InputPassword} />
    </>
  );
};

export default InnerForm;
