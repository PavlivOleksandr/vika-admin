import React from 'react';

// helpers
import { EditMattressConfigurationsValidationSchema } from '../../../../../validation/configurations';
import { MattressConfigurationModel, MattressTypeEnum } from '../../../../../interfaces/products';

// components
import Form, { RequiredPropsForFormModel } from '../../../Form/index';
import InnerForm from './InnerForm';

export interface FormValuesModel {
  type: MattressTypeEnum;
  configurations: MattressConfigurationModel[];
}

interface IProps extends RequiredPropsForFormModel<FormValuesModel> {
  configurations: MattressConfigurationModel[];
}

const EditConfigurationsForm = ({ initialValues, configurations, onSubmit }: IProps) => {
  return (
    <Form<FormValuesModel>
      submitText={'Зберегти зміни'}
      renderForm={<InnerForm configurations={configurations} />}
      initialValues={initialValues}
      validationSchema={EditMattressConfigurationsValidationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default EditConfigurationsForm;
