import React from 'react';

// helpers
import { SofaCategoryEnum } from '../../../../../constants/sofa';
import { UpdateSofaValidationSchema } from '../../../../../validation/sofa';
import { SofaConfigurationModel, SofaVariantType } from '../../../../../interfaces/sofa';

// components
import InnerForm from './InnerForm';
import Form, { RequiredPropsForFormModel } from '../../../Form/index';

export interface FormValuesModel {
  _id: string;
  name: string;
  rating: number | null;
  images?: any;
  article: string;
  variant: SofaVariantType;
  category: SofaCategoryEnum;
  toRemove?: boolean;
  thumbnail?: any;
  createdAt: string;
  updatedAt: string;
  description: string;
  isLaundryStore: boolean;
  imagesToUpdate?: string[];
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
