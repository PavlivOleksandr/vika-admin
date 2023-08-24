import React from 'react';

// helpers
import { SofaConfigurationModel } from '../../../../../interfaces/products';
import { EditSofaConfigurationsValidationSchema } from '../../../../../validation/configurations';

// components
import Form, { RequiredPropsForFormModel } from '../../../Form/index';
import InnerForm from './InnerForm';

export interface FormValuesModel {
  configurations: SofaConfigurationModel[];
}

interface IProps extends RequiredPropsForFormModel<FormValuesModel> {
  configurations: SofaConfigurationModel[];
}

const EditConfigurationsForm = ({ initialValues, configurations, onSubmit }: IProps) => {
  return (
    <Form<FormValuesModel>
      submitText={'Зберегти зміни'}
      renderForm={<InnerForm configurations={configurations} />}
      initialValues={initialValues}
      validationSchema={EditSofaConfigurationsValidationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default EditConfigurationsForm;
