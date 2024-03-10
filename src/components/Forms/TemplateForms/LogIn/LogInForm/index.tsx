import React from 'react';

// helpers
import { LogInValidationSchema } from '../../../../../validation/login';

// components
import InnerForm from './InnerForm';
import Form, { RequiredPropsForFormModel } from '../../../Form/index';

export interface FormValuesModel {
  email: string;
  password: string;
}

type IProps = RequiredPropsForFormModel<FormValuesModel>;

const LogInForm = ({ initialValues, onSubmit }: IProps) => {
  return (
    <Form<FormValuesModel>
      submitText={'Увійти'}
      renderForm={<InnerForm />}
      initialValues={initialValues}
      validationSchema={LogInValidationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default LogInForm;
