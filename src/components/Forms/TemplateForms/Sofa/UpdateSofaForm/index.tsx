import React from 'react';

// helpers
import { UpdateSofaValidationSchema } from '../../../../../validation/sofa';

// components
import InnerForm from './InnerForm';
import Form, { RequiredPropsForFormModel } from '../../../Form/index';
import { SofaCategoryEnum, SofaConfigurationModel, SofaVariantType } from '../../../../../interfaces/products';

export interface FormValuesModel {
  name: string;
  rating: number | null;
  images?: any;
  article: string;
  toRemove?: boolean;
  variant: SofaVariantType;
  category: SofaCategoryEnum;
  thumbnail?: any;
  description: string;
  createdAt: string;
  updatedAt: string;
  isLaundryStore: boolean;
  configurations: SofaConfigurationModel[];
  isHiddenForClients: boolean;
}

interface IProps extends RequiredPropsForFormModel<FormValuesModel> {
  isEditable: boolean;
  setIsEditable: (value: boolean) => void;
}

const UpdateSofaForm = ({ isEditable, initialValues, setIsEditable, onSubmit }: IProps) => {
  return (
    <Form<FormValuesModel>
      readonly={!isEditable}
      submitText={'Зберегти зміни'}
      renderForm={<InnerForm isEditable={isEditable} setIsEditable={setIsEditable} />}
      initialValues={initialValues}
      validationSchema={UpdateSofaValidationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default UpdateSofaForm;
