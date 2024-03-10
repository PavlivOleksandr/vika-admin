import React from 'react';

// helpers
import { MattressTypeEnum } from '../../../../../constants/mattresses';
import { MattressConfigurationModel } from '../../../../../interfaces/mattress';
import { EditMattressConfigurationsValidationSchema } from '../../../../../validation/configurations';

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
