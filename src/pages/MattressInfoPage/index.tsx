import React, { useMemo, useState } from 'react';

// helpers
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { mattressesAPI } from '../../api/mattresses/mattressesAPI';

// components
import Box from '../../components/Additional/Box';

import Notification from '../../components/Antd/Notification';
import LoaderWrapper from '../../components/Additional/LoaderWrapper';
import UpdateMattressForm, { FormValuesModel } from '../../components/Forms/TemplateForms/UpdateMattressForm';
import { Modal } from 'antd';

const MattressInfoPage = () => {
  const { id } = useParams();

  const [isEditable, setIsEditable] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const { response, loading }: any = useFetch(() => (id ? mattressesAPI.getById(id) : null), []);

  console.log(response);

  const initialValues = useMemo<FormValuesModel>(() => {
    return {
      type: response?.type,
      name: response?.name,
      images: response?.images,
      rating: response?.rating,
      article: response?.article,
      filling: response?.filling,
      toRemove: false,
      thumbnail: response?.thumbnail,
      description: response?.description,
      configurations: response?.configurations,
      isHiddenForClients: response?.isHiddenForClients,
    };
  }, [response]);

  console.log(response);

  const handleRemoveMattress = () => {
    Modal.confirm({
      title: 'Підтвердження видалення',
      okText: 'Підтвердити',
      content: 'Ви впевнені що хочете видалити цей матрац?',
      cancelText: 'Відхилити',
      // onOk: console.log('t'),
    });
  };

  const onSubmit = async (value: FormValuesModel) => {
    setIsEditable(false);
    setIsNotificationOpen(true);
    if (value.toRemove) {
      await mattressesAPI.delete(response?.id);
    }
  };

  return (
    <Box direction='column' align='flex-end'>
      <LoaderWrapper loading={loading}>
        {response && (
          <>
            <Box gap={16}>
              <Box direction='column'>
                <UpdateMattressForm
                  isEditable={isEditable}
                  setIsEditable={setIsEditable}
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                />
              </Box>
            </Box>
          </>
        )}
      </LoaderWrapper>
      <Notification
        type='success'
        isOpen={isNotificationOpen}
        description='Зміни успішно внесено!'
        closeCallback={() => setIsNotificationOpen(false)}
      />
    </Box>
  );
};

export default MattressInfoPage;
