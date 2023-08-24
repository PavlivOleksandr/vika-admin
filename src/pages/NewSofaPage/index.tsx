import React, { useMemo } from 'react';

// helpers
import { sofasAPI } from '../../api/sofas/sofasAPI';
import { RoutesEnum } from '../../router/routes';
import { useNavigate } from 'react-router-dom';
import { SofaCategoryEnum } from '../../interfaces/products';

// components
import CreateSofaForm, { FormValuesModel } from '../../components/Forms/TemplateForms/Sofa/CreateSofaForm';

const NewSofaPage = () => {
  const navigate = useNavigate();

  const initialValues = useMemo<FormValuesModel>(
    () => ({
      name: '',
      rating: null,
      images: [],
      article: '',
      variant: '7',
      category: SofaCategoryEnum.Straight,
      thumbnail: '',
      description: '',
      configurations: null,
      isLaundryStore: false,
      isHiddenForClients: false,
    }),
    [],
  );

  const onSubmit = async (values: FormValuesModel) => {
    await sofasAPI.create(values);
    navigate(RoutesEnum.Sofas, {
      state: {
        title: 'Новий диван успішно додано',
        type: 'success',
      },
    });
  };

  return <CreateSofaForm initialValues={initialValues} onSubmit={onSubmit} />;
};

export default NewSofaPage;
