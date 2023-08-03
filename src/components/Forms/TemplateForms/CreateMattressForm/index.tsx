import React from 'react';

// helpers
import { CreateMattressesValidationSchema } from '../../../../validation/mattresses';

// components
import InnerForm from './InnerForm';
import Form, { RequiredPropsForFormModel } from '../../Form/index';

export interface FormValuesModel {
  name: string;
  type: string;
  rating: number;
  images?: any;
  article: string;
  filling: string;
  thumbnail?: any;
  description: string;
  configurations?: any;
}

type IProps = RequiredPropsForFormModel<FormValuesModel>;

const CreateMattressForm = ({ initialValues, onSubmit }: IProps) => {
  return (
    <Form<FormValuesModel>
      submitText={'Додати новий матрац'}
      renderForm={<InnerForm />}
      initialValues={initialValues}
      validationSchema={CreateMattressesValidationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default CreateMattressForm;
