import React, { useMemo, useState } from 'react';

// helpers
import styled from 'styled-components';
import { useFetch } from '../../hooks/useFetch';
import { RoutesEnum } from '../../router/routes';
import { useNavigate, useParams } from 'react-router-dom';

// components
import Box from '../../components/Additional/Box';

import Notification from '../../components/Antd/Notification';
import LoaderWrapper from '../../components/Additional/LoaderWrapper';
import { sofasAPI } from '../../api/sofas/sofasAPI';
import UpdateSofaForm, { FormValuesModel } from '../../components/Forms/TemplateForms/Sofa/UpdateSofaForm';

interface INotificationData {
  isOpen: boolean;
  message: string;
}

const SofaInfoPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [isEditable, setIsEditable] = useState(false);
  const [notificationData, setNotificationData] = useState<INotificationData>({ isOpen: false, message: '' });

  const { response, loading }: any = useFetch(() => (id ? sofasAPI.getById(id) : null), []);

  const initialValues = useMemo<FormValuesModel>(() => {
    return {
      _id: response?._id,
      name: response?.name,
      images: response?.images || [],
      rating: response?.rating,
      article: response?.article,
      variant: response?.variant,
      toRemove: false,
      category: response?.category,
      createdAt: response?.createdAt,
      updatedAt: response?.updatedAt,
      thumbnail: response?.thumbnail || '',
      description: response?.description,
      imagesToUpdate: [],
      configurations: response?.configurations,
      transformation: response?.transformation,
      isLaundryStore: response?.isLaundryStore,
      isHiddenForClients: response?.isHiddenForClients,
    };
  }, [response]);

  const onSubmit = async (values: FormValuesModel) => {
    if (values.toRemove) {
      await sofasAPI.delete(response?._id);
      navigate(RoutesEnum.Sofas, {
        state: {
          title: `Диван ${values.name} успішно видалено!`,
          type: 'success',
        },
      });
    } else {
      await sofasAPI.update(response._id, { thumbnail: values.thumbnail as string, ...values });
      setNotificationData({ isOpen: true, message: `Інформацію успішно оновлено!` });
    }
    setIsEditable(false);
  };

  return (
    <Box direction='column' align='flex-end'>
      <LoaderWrapper loading={loading}>
        {response && (
          <>
            <Box gap={16}>
              <FormWrapper>
                <UpdateSofaForm isEditable={isEditable} initialValues={initialValues} onSubmit={onSubmit} setIsEditable={setIsEditable} />
              </FormWrapper>
            </Box>
          </>
        )}
      </LoaderWrapper>
      <Notification
        type='success'
        isOpen={notificationData.isOpen}
        description={notificationData.message}
        closeCallback={() => setNotificationData(prevState => ({ ...prevState, isOpen: false }))}
      />
    </Box>
  );
};

const FormWrapper = styled(Box)`
  flex-direction: column;
  form {
    width: 100%;
    display: flex;
    align-items: flex-end;
  }
`;

export default SofaInfoPage;
