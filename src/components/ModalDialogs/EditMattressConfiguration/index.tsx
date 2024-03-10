import React, { useMemo, useState } from 'react';

// helpers
import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme/theme';
import { mattressesAPI } from '../../../api/mattresses/mattressesAPI';
import { FormValuesModel } from '../../Forms/TemplateForms/Mattress/UpdateMattressForm';
import { useFormikContext } from 'formik';
import { MattressConfigurationModel } from '../../../interfaces/mattress';
import { KidsSizeEnum, MattressTypeEnum, SizeEnum } from '../../../constants/mattresses';

// components
import Box from '../../Additional/Box';
import Text from '../../Antd/Text';
import Button from '../../Antd/Button';
import ModalDialog from '../../Antd/ModalDialog';
import Notification from '../../Antd/Notification';
import EditConfigurationsForm, {
  FormValuesModel as EditConfigurationsValuesModel,
} from '../../Forms/TemplateForms/Mattress/EditConfigurationsForm';

interface IProps {
  isVisible: boolean;
  closeCallback: () => void;
}

const EditMattressConfiguration = ({ isVisible, closeCallback }: IProps) => {
  const { values, setFieldValue } = useFormikContext<FormValuesModel>();

  const [configurations, setConfigurations] = useState<MattressConfigurationModel[]>(values.configurations);
  const [notificationData, setNotificationData] = useState({ message: '', isOpen: false, type: '' });

  const initialValues = useMemo<EditConfigurationsValuesModel>(() => ({ type: values.type, configurations }), [configurations]);

  const sizeOptionsArray = values.type === MattressTypeEnum.ForKids ? Object.values(KidsSizeEnum) : Object.values(SizeEnum);

  const getPricingByArticle = async () => {
    if (values.article.length) {
      try {
        const { response }: any = await mattressesAPI.getPricingByArticle(values.article);
        if (response?.data?.type !== 'error') {
          console.log(response);

          setFieldValue('configurations', response);
          setConfigurations(response);
        } else {
          setNotificationData({ message: response.data.message, isOpen: true, type: 'success' });
        }
      } catch (error: any) {
        setNotificationData({ message: error.response.data.message, isOpen: true, type: 'error' });
        console.log(error);
      }
    } else {
      setNotificationData({ message: 'Введіть артикул', isOpen: true, type: 'info' });
    }
  };

  const onSubmit = (values: EditConfigurationsValuesModel) => {
    setFieldValue('configurations', values.configurations);
    closeCallback();
  };

  return (
    <ModalDialog width={1000} isVisible={isVisible} closeCallback={closeCallback}>
      <ModalBody>
        <Box gap={20}>
          <Button onClick={getPricingByArticle}>Додати прайс за артикулом</Button>
          <Box gap={40}>
            <Box width='70px'>
              <Text weight={theme.boldFont}>Висота</Text>
            </Box>
            {sizeOptionsArray.map((size: SizeEnum | KidsSizeEnum) => (
              <Box width='70px' key={size}>
                <Text weight={theme.boldFont}>{size}</Text>
              </Box>
            ))}
          </Box>
        </Box>

        <FormWrapper>
          <EditConfigurationsForm initialValues={initialValues} configurations={configurations} onSubmit={onSubmit} />
        </FormWrapper>
      </ModalBody>
      <Notification
        type='info'
        isOpen={notificationData.isOpen}
        title={notificationData.message}
        closeCallback={() => setNotificationData(prevState => ({ ...prevState, isOpen: false }))}
      />
    </ModalDialog>
  );
};

const FormWrapper = styled(Box)`
  form {
    width: 100%;
    display: flex;
    align-items: flex-end;
    input {
      width: 70px;
    }
    .ant-form-item {
      margin: 0;
    }
  }
`;

const ModalBody = styled(Box)`
  flex-direction: column;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.marginL};
`;

export default EditMattressConfiguration;
