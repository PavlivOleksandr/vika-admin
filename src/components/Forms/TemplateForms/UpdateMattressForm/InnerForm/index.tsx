import React from 'react';

// helpers
import { theme } from '../../../../../assets/styles/theme/theme';
import { styled } from 'styled-components';
import { useFormikContext } from 'formik';

// components
import Box from '../../../../Additional/Box';
import Text from '../../../../Antd/Text';
import Image from '../../../../Antd/Image';
import Input from '../../../../Antd/Input';
import Button from '../../../../Antd/Button';
import Textarea from '../../../../Antd/Textarea';
import Settings from '../../../../../pages/MattressInfoPage/Settings';
import FormField from '../../../FormField';
import Configuration from './Configuration';
import ImageUploader from '../../../../Antd/ImageUploader';

import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

interface IProps {
  isEditable: boolean;
  setIsEditable: any;
}

const InnerForm = ({ isEditable, setIsEditable }: IProps) => {
  const { values, setFieldValue }: any = useFormikContext();

  const handeChangeImage = (newImage: any, indexOfImage: number) => {
    console.log(newImage);

    const newImages = values.images.map((image: string, index: number) => {
      if (index === indexOfImage) {
        return (image = newImage);
      }
    });

    setFieldValue('images', newImages);
  };

  return (
    <InnerFormBox readonly={!isEditable}>
      <Settings isEditable={isEditable} isHiddenForClients={values.isHiddenForClients} setIsEditable={setIsEditable} />
      <Box>
        <Box direction='column'>
          <ImageBox>
            {values.thumbnail.length ? (
              <ImageBox>
                {isEditable && (
                  <StyledBox>
                    <RemoveBtn>
                      <DeleteOutlined rev='' />
                    </RemoveBtn>
                    <ImageUploader
                      customButton={
                        <Button>
                          <EditOutlined rev='' />
                        </Button>
                      }
                      uploadAction={file => setFieldValue('thumbnail', file)}
                    />
                  </StyledBox>
                )}
                <Image width='400px' height='300px' preview={!isEditable} src={values.thumbnail} />
              </ImageBox>
            ) : (
              <ImageUploader btnText='Додати аватар' uploadAction={file => setFieldValue('thumbnail', file)} />
            )}
          </ImageBox>
          <Box gap={12} margin={`${theme.marginM} 0 0 0`}>
            {values.images.map((image: string, index: number) => (
              <ImageBox key={index}>
                {isEditable && (
                  <StyledBox>
                    <RemoveBtn>
                      <DeleteOutlined rev='' />
                    </RemoveBtn>
                    <ImageUploader
                      customButton={
                        <Button>
                          <EditOutlined rev='' />
                        </Button>
                      }
                      uploadAction={file => handeChangeImage(file, index)}
                    />
                  </StyledBox>
                )}
                <Image width='100px' height='100px' preview={!isEditable} src={image} />
              </ImageBox>
            ))}
            <ImageUploader
              btnText={
                <Text>
                  <PlusOutlined rev='' />
                  Додати фото
                </Text>
              }
              // uploadAction={image => setFieldValue('images', [...values.images, image])}
            />
          </Box>
        </Box>
        <Box direction='column'>
          <FormField label='Артикул' disabled name='article' placeholder={'Артикул'} component={Input} />
          <FormField label='Назва' disabled={!isEditable} name='name' placeholder={'Назва'} component={Input} />
          <FormField
            label='Рейтинг'
            disabled={!isEditable}
            name='rating'
            placeholder={'Рейтинг'}
            component={Input}
            additionalProps={{ type: 'numbers' }}
          />
          <Configuration readonly={!isEditable} />
          <FormField
            label='Наповнення'
            name='filling'
            disabled={!isEditable}
            placeholder={'Наповнення'}
            component={Textarea}
            additionalProps={{ autoSize: { minRows: 2 }, maxLength: 500, showCharCount: true }}
          />
          <FormField
            label='Опис'
            name='description'
            disabled={!isEditable}
            placeholder={'Опис'}
            component={Textarea}
            additionalProps={{ autoSize: { minRows: 2 }, maxLength: 500, showCharCount: true }}
          />
        </Box>
      </Box>
    </InnerFormBox>
  );
};

const InnerFormBox = styled(Box)<{ readonly: boolean }>`
  flex-direction: column;
  .ant-form-item {
    .ant-input {
      width: 100% !important;
      border-color: ${({ readonly }) => readonly && 'transparent'} !important;
    }
  }
`;

const RemoveBtn = styled(Button)`
  background: ${({ theme }) => theme.red};
  &:hover {
    background: ${({ theme }) => theme.red} !important;
  }
`;

const ImageBox = styled(Box)`
  width: auto;
  position: relative;
`;

const StyledBox = styled(Box)`
  z-index: 2;
  width: auto;
  position: absolute;
  right: 2px;
  top: 2px;
  button {
    height: 24px;
    padding: ${({ theme }) => `0 ${theme.paddingS}`};
  }
`;

export default InnerForm;
