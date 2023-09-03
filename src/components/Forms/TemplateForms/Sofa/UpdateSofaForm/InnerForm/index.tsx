import React from 'react';

// helpers
import { RcFile } from 'antd/es/upload';
import { styled } from 'styled-components';
import { FormValuesModel } from '..';
import { useFormikContext } from 'formik';

// components
import Box from '../../../../../Additional/Box';
import Input from '../../../../../Antd/Input';
import Images from '../../../../Component/Images';
import Checkbox from '../../../../../Antd/Checkbox';
import Textarea from '../../../../../Antd/Textarea';
import Settings from '../../../../Component/Settings';
import FormField from '../../../../FormField';
import Configuration from '../../Configuration';
import CategorySelect from '../../../../Component/Sofa/CategorySelect';
import ProductMainInfo from '../../../../../Additional/ProductMainInfo';
import SofaVariantRadiogroup from '../../../../Component/Sofa/SofaVariantRadiogroup';

interface IProps {
  isEditable: boolean;
  setIsEditable: any;
}

const InnerForm = ({ isEditable, setIsEditable }: IProps) => {
  const { values, setFieldValue } = useFormikContext<FormValuesModel>();

  const handeChangeImage = async (newImage: any, indexOfImage: number) => {
    const newImages = values.images.map((image: string, index: number) => {
      if (index === indexOfImage) {
        return (image = newImage);
      }
    });

    setFieldValue('images', newImages);
  };

  const handleUploadAvatar = async (avatar: RcFile) => {
    console.log(avatar);
  };

  return (
    <InnerFormBox readonly={!isEditable}>
      <Settings isEditable={isEditable} setIsEditable={setIsEditable} />
      <Box gap={40}>
        <Images
          isEditable={isEditable}
          thumbnail={values?.thumbnail as string}
          images={values?.images as string[]}
          handleUpdateImages={(newImage, index) => handeChangeImage(newImage, index)}
          handleUploadAvatar={handleUploadAvatar}
          handleUploadImage={handleUploadAvatar}
        />
        <RightFormSection>
          <ProductMainInfo article={values.article} createdAt={values.createdAt} updatedAt={values.updatedAt} />
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
            label='Ніша для білизни'
            name='isLaundryStore'
            disabled={!isEditable}
            placeholder={'Ніша для білизни'}
            component={Checkbox}
          />
          <FormField label='Варіант' name='variant' component={SofaVariantRadiogroup} />
          <CategorySelect disabled={!isEditable} />
          <FormField
            label='Опис'
            name='description'
            disabled={!isEditable}
            placeholder={'Опис'}
            component={Textarea}
            additionalProps={{ autoSize: { minRows: 2 }, maxLength: 500, showCharCount: true }}
          />
        </RightFormSection>
      </Box>
    </InnerFormBox>
  );
};

const InnerFormBox = styled(Box)<{ readonly: boolean }>`
  flex-direction: column;
  .ant-form-item {
    .ant-input {
      width: 200px !important;
      border-color: ${({ readonly }) => readonly && 'transparent'} !important;
    }
    .ant-radio-wrapper {
      .ant-radio-disabled {
        .ant-radio-input {
          cursor: default;
        }
      }
    }
    .ant-radio-wrapper-disabled {
      cursor: default;
      color: ${({ theme }) => theme.black} !important;
    }
    .ant-select-disabled {
      .ant-select-selector {
        cursor: default;
        border: none;
        background: transparent;
        color: black;
      }
      .ant-select-arrow {
        display: none;
      }
    }
  }
`;

const RightFormSection = styled(Box)`
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.marginM};
`;

export default InnerForm;
