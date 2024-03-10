import React, { useMemo } from 'react';

// helpres
import { RoutesEnum } from '../../router/routes';
import { useNavigate } from 'react-router-dom';
import { mattressesAPI } from '../../api/mattresses/mattressesAPI';
import { MattressTypeEnum } from '../../constants/mattresses';

// components
import CreateMattressForm, { FormValuesModel } from '../../components/Forms/TemplateForms/Mattress/CreateMattressForm';

const NewMattressPage = () => {
  const navigate = useNavigate();

  const initialValues = useMemo<FormValuesModel>(
    () => ({
      name: '',
      article: '',
      rating: null,
      type: MattressTypeEnum.ForAdults,
      images: [],
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
    navigate(RoutesEnum.Mattresses, {
      state: {
        title: 'Новий матрац успішно додано',
        type: 'success',
      },
    });
  };

  return <CreateMattressForm initialValues={initialValues} onSubmit={onSubmit} />;
};

export default NewMattressPage;
