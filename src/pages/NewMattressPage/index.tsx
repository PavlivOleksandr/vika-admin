import React, { useMemo } from 'react';

// helpres
import { mattressesAPI } from '../../api/mattresses/mattressesAPI';
import { MattressTypeEnum } from '../../interfaces/products';

// components
import CreateMattressForm, { FormValuesModel } from '../../components/Forms/TemplateForms/CreateMattressForm';

const NewMattressPage = () => {
  const initialValues = useMemo<FormValuesModel>(
    () => ({
      name: '',
      article: '',
      rating: 0,
      type: MattressTypeEnum.ForAdults,
      images: null,
      thumbnail: null,
      filling: '',
      description: '',
      configurations: null,
      isHiddenForClients: false,
    }),
    [],
  );

  const onSubmit = async (values: FormValuesModel) => {
    await mattressesAPI.create(values);
  };

  return <CreateMattressForm initialValues={initialValues} onSubmit={onSubmit} />;
};

export default NewMattressPage;
