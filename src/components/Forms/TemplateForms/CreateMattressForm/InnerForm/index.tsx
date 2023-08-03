import React from 'react';

// helpers
import styled from 'styled-components';
import { mattressesAPI } from '../../../../../api/mattresses/mattressesAPI';
import { useFormikContext } from 'formik';

// components
import Box from '../../../../Additional/Box';
import Input from '../../../../Antd/Input';
import Button from '../../../../Antd/Button';
import Textarea from '../../../../Antd/Textarea';
import FormField from '../../../FormField';
import ImageUploader from '../../../../Antd/ImageUploader';
import Configuration from '../../UpdateMattressForm/InnerForm/Configuration';
import MattressTypeRadioGroup from '../../../Component/MattressTypeRadioGroup';

import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const InnerForm = () => {
  const { values, setFieldValue }: any = useFormikContext();

  const getPricingByArticle = async () => {
    if (values.article.length) {
      const response = await mattressesAPI.getPricingByArticle(values.article);

      if (response) {
        setFieldValue('configurations', response);
      }
    }
  };

  return (
    <Box width='auto' direction='column'>
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
      <FormField
        name='thumbnail'
        component={ImageUploader}
        additionalProps={{ name: 'thumbnail', shouldUseFormikContext: true, btnText: 'Додати аватар' }}
      />
      <FormField
        name='images'
        component={ImageUploader}
        additionalProps={{ name: 'images', shouldUseFormikContext: true, btnText: 'Додати фото' }}
      />
      <FormField label='Назва' name='name' placeholder={'Назва'} component={Input} />
      <FormField label='Артикул' name='article' placeholder={'Артикул'} component={Input} />
      <Button onClick={getPricingByArticle}>Додати прайс за артикулом</Button>
      <Button>Додати конфігурації</Button>
      <FormField label='Рейтинг' name='rating' placeholder={'Рейтинг'} component={Input} />
      <FormField name='type' component={MattressTypeRadioGroup} />
      {/* <Configuration readonly={false} /> */}
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
  );
};

const HideBtn = styled(Button)`
  background: ${({ theme }) => theme.orange};
  &:hover {
    background: ${({ theme }) => theme.orange} !important;
  }
`;

export default InnerForm;
