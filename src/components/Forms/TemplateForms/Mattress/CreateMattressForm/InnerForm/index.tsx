import React, { useState } from 'react';

// helpers
import styled from 'styled-components';
import { RcFile } from 'antd/es/upload';
import { FormValuesModel } from '..';
import { useFormikContext } from 'formik';

// components
import Box from '../../../../../Additional/Box';
import Text from '../../../../../Antd/Text';
import Input from '../../../../../Antd/Input';
import Button from '../../../../../Antd/Button';
import Images from '../../../../Component/Images';
import Textarea from '../../../../../Antd/Textarea';
import FormField from '../../../../FormField';
import Configuration from '../../Configuration';
import MattressTypeRadioGroup from '../../../../Component/Mattress/MattressTypeRadioGroup';
import EditMattressConfiguration from '../../../../../ModalDialogs/EditMattressConfiguration';

import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { mattressesAPI } from '../../../../../../api/mattresses/mattressesAPI';

const InnerForm = () => {
  const { values, setFieldValue, errors } = useFormikContext<FormValuesModel>();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUploadImage = async (image: RcFile) => {
    const formData = new FormData();
    formData.append('photo', image);
    formData.append('fileName', image.name);

    const imageUrl = await mattressesAPI.uploadImage(formData);
    if (imageUrl) {
      setFieldValue('images', [...values.images, imageUrl]);
    }
  };

  const handeUpdateImages = async (newImage: RcFile, imageUrl: string) => {
    const formData = new FormData();
    formData.append('photo', newImage);
    formData.append('fileName', newImage.name);

    //TODO remove image url, remove imagesToUpdate
    const updatedImage = await mattressesAPI.updateImages(formData, imageUrl);

    const imageToUpdateIndex = values.images.findIndex((image: string) => image === imageUrl);

    const newImages = values.images.map((image: string, index: number) => {
      return index === imageToUpdateIndex ? updatedImage : image;
    });

    setFieldValue('images', newImages);
    if (values?.imagesToUpdate) {
      setFieldValue('imagesToUpdate', [...values.imagesToUpdate, imageUrl]);
    }
  };

  const handleUploadAvatar = async (avatar: RcFile) => {
    const formData = new FormData();
    formData.append('photo', avatar);
    formData.append('fileName', avatar.name);

    const avatarUrl = await mattressesAPI.uploadAvatar(formData);
    if (avatarUrl) {
      setFieldValue('thumbnail', avatarUrl);
    }
  };

  const handleRemoveAvatar = async () => {
    setFieldValue('thumbnail', '');
  };

  const handleRemoveImage = async (imageUrl: string) => {
    setFieldValue(
      'images',
      values.images.filter((image: string) => image !== imageUrl),
    );
  };

  return (
    <Box gap={40}>
      <Images
        isEditable={true}
        thumbnail={values?.thumbnail as string}
        images={values?.images as string[]}
        handleUploadImage={handleUploadImage}
        handleRemoveAvatar={handleRemoveAvatar}
        handleUploadAvatar={handleUploadAvatar}
        handleRemoveImage={imageUrl => handleRemoveImage(imageUrl)}
        handleUpdateImages={(newImage, imageUrl) => handeUpdateImages(newImage, imageUrl)}
      />
      <Box width='50%' direction='column'>
        <HideBtn onClick={() => setFieldValue('isHiddenForClients', !values.isHiddenForClients ? true : false)}>
          {values.isHiddenForClients ? (
            <>
              Дозволити перегляд клієнтам <EyeOutlined rev='' />
            </>
          ) : (
            <>
              Приховати для клієнтів <EyeInvisibleOutlined rev='' />
            </>
          )}
        </HideBtn>
        <FormField label='Назва' name='name' placeholder={'Назва'} component={Input} />
        <FormField label='Артикул' name='article' placeholder={'Артикул'} component={Input} />

        <FormField label='Рейтинг' name='rating' placeholder={'Рейтинг'} component={Input} additionalProps={{ type: 'numbers' }} />
        <FormField name='type' component={MattressTypeRadioGroup} />
        {values?.configurations?.length ? (
          <Configuration readonly={false} />
        ) : (
          <>
            <StyledBtn onClick={() => setIsModalOpen(true)}>Додати конфігурації</StyledBtn>
            {errors.configurations && <ErrorText>{errors.configurations}</ErrorText>}
          </>
        )}
        <FormField
          label='Наповнення'
          name='filling'
          placeholder={'Наповнення'}
          component={Textarea}
          additionalProps={{ autoSize: { minRows: 2 }, maxLength: 500, showCharCount: true }}
        />
        <FormField
          label='Опис'
          name='description'
          placeholder={'Опис'}
          component={Textarea}
          additionalProps={{ autoSize: { minRows: 2 }, maxLength: 500, showCharCount: true }}
        />
      </Box>

      <EditMattressConfiguration isVisible={isModalOpen} closeCallback={() => setIsModalOpen(false)} />
    </Box>
  );
};

const HideBtn = styled(Button)`
  background: ${({ theme }) => theme.orange};
  margin-bottom: ${({ theme }) => theme.marginM};
  &:hover {
    background: ${({ theme }) => theme.orange} !important;
  }
`;

const StyledBtn = styled(Button)`
  margin-bottom: ${({ theme }) => theme.marginM};
`;

const ErrorText = styled(Text)`
  color: ${({ theme }) => theme.red};
`;

export default InnerForm;
