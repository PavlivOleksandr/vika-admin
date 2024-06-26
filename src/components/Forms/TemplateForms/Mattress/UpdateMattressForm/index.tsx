import React from 'react';

// helpers
import { UpdateMattressesValidationSchema } from '../../../../../validation/mattresses';

// components
import Form, { RequiredPropsForFormModel } from '../../../Form/index';
import InnerForm from './InnerForm';
import { MattressConfigurationModel } from '../../../../../interfaces/mattress';

export interface FormValuesModel {
  _id: string;
  name: string;
  type: any;
  rating: number;
  images: string[];
  article: string;
  filling: string;
  toRemove?: boolean;
  createdAt: string;
  updatedAt: string;
  thumbnail?: string;
  description: string;
  imagesToUpdate?: string[];
  configurations: MattressConfigurationModel[];
  isHiddenForClients: boolean;
}

interface IProps extends RequiredPropsForFormModel<FormValuesModel> {
  isEditable: boolean;
  setIsEditable: (value: boolean) => void;
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
