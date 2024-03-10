import React, { useMemo, useState } from 'react';

// helpers
import styled from 'styled-components';
import { useFetch } from '../../hooks/useFetch';
import { RoutesEnum } from '../../router/routes';
import { mattressesAPI } from '../../api/mattresses/mattressesAPI';
import { useNavigate, useParams } from 'react-router-dom';

// components
import Box from '../../components/Additional/Box';

import Notification from '../../components/Antd/Notification';
import LoaderWrapper from '../../components/Additional/LoaderWrapper';
import UpdateMattressForm, { FormValuesModel } from '../../components/Forms/TemplateForms/Mattress/UpdateMattressForm';

interface INotificationData {
  isOpen: boolean;
  message: string;
}

const MattressInfoPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [isEditable, setIsEditable] = useState(false);
  const [notificationData, setNotificationData] = useState<INotificationData>({ isOpen: false, message: '' });

  const { response, loading }: any = useFetch(() => (id ? mattressesAPI.getById(id) : null), []);

  const initialValues = useMemo<FormValuesModel>(() => {
    return {
      _id: response?._id,
      type: response?.type,
      name: response?.name,
      images: response?.images || [],
      rating: response?.rating,
      article: response?.article,
      filling: response?.filling,
      toRemove: false,
      createdAt: response?.createdAt,
      isForKids: response?.isForKids,
      updatedAt: response?.updatedAt,
      thumbnail: response?.thumbnail || '',
      description: response?.description,
      imagesToUpdate: [],
      configurations: response?.configurations,
      isHiddenForClients: response?.isHiddenForClients,
    };
  }, [response]);

  const onSubmit = async (values: FormValuesModel) => {
    if (values.toRemove) {
      await mattressesAPI.delete(response?._id);
      navigate(RoutesEnum.Mattresses, {
        state: {
          title: `Матрац ${values.name} успішно видалено!`,
          type: 'success',
        },
      });
    } else {
      await mattressesAPI.update(response._id, { thumbnail: values.thumbnail as string, ...values });
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
                <UpdateMattressForm
                  isEditable={isEditable}
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  setIsEditable={setIsEditable}
                />
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

export default MattressInfoPage;
