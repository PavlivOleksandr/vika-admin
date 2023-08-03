import React from 'react';

// helpers
import { UpdateMattressesValidationSchema } from '../../../../validation/mattresses';

// components
import Form, { RequiredPropsForFormModel } from '../../Form/index';
import InnerForm from './InnerForm';
import { MattressConfigurationModel } from '../../../../interfaces/products';

export interface FormValuesModel {
  name: string;
  type: string;
  rating: number;
  images?: any[] | null;
  article: string;
  filling: string;
  toRemove: boolean;
  thumbnail?: any;
  description: string;
  configurations?: MattressConfigurationModel;
  isHiddenForClients: boolean;
}

interface IProps extends RequiredPropsForFormModel<FormValuesModel> {
  isEditable: boolean;
  setIsEditable: any;
}

const UpdateMattressForm = ({ isEditable, initialValues, setIsEditable, onSubmit }: IProps) => {
  return (
    <Form<FormValuesModel>
      readonly={!isEditable}
      submitText={'Зберегти зміни'}
      renderForm={<InnerForm isEditable={isEditable} setIsEditable={setIsEditable} />}
      initialValues={initialValues}
      validationSchema={UpdateMattressesValidationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default UpdateMattressForm;
