import React from 'react';

// helpers
import { SofaCategoryEnum } from '../../../../../constants/sofa';
import { CreateSofaValidationSchema } from '../../../../../validation/sofa';
import { SofaConfigurationModel, SofaVariantType } from '../../../../../interfaces/sofa';

// components
import InnerForm from './InnerForm';
import Form, { RequiredPropsForFormModel } from '../../../Form/index';

export interface FormValuesModel {
  name: string;
  rating: number | null;
  images?: any;
  article: string;
  variant: SofaVariantType;
  category: SofaCategoryEnum;
  thumbnail?: any;
  description: string;
  isLaundryStore: boolean;
  imagesToUpdate?: string[];
  configurations: SofaConfigurationModel[] | null;
  isHiddenForClients: boolean;
}

type IProps = RequiredPropsForFormModel<FormValuesModel>;

const CreateSofaForm = ({ initialValues, onSubmit }: IProps) => {
  return (
    <Form<FormValuesModel>
      submitText={'Додати новий товар'}
      renderForm={<InnerForm />}
      initialValues={initialValues}
      validationSchema={CreateSofaValidationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default CreateSofaForm;
