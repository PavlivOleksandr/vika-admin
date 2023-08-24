import React, { useMemo, useState } from 'react';

// helpers
import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme/theme';
import { sofasAPI } from '../../../api/sofas/sofasAPI';
import { FormValuesModel } from '../../Forms/TemplateForms/Sofa/CreateSofaForm';
import { useFormikContext } from 'formik';
import { FabricCategoriesEnum } from '../../../constants/sofa';
import { SofaConfigurationModel } from '../../../interfaces/products';

// components
import Box from '../../Additional/Box';
import Text from '../../Antd/Text';
import Button from '../../Antd/Button';
import ModalDialog from '../../Antd/ModalDialog';
import Notification, { NotificationType } from '../../Antd/Notification';
import EditConfigurationsForm from '../../Forms/TemplateForms/Sofa/EditConfigurationsForm';

interface IProps {
  isVisible: boolean;
  closeCallback: () => void;
}

const EditSofaConfiguration = ({ isVisible, closeCallback }: IProps) => {
  const { values, setFieldValue } = useFormikContext<FormValuesModel>();

  const [configurations, setConfigurations] = useState<SofaConfigurationModel[] | null>(values?.configurations);
  const [notificationData, setNotificationData] = useState({ message: '', isOpen: false, type: 'info' });

  const initialValues = useMemo<{ configurations: SofaConfigurationModel[] | null }>(() => ({ configurations }), [configurations]);

  const getPricingByArticle = async () => {
    if (values.article.length) {
      try {
        const { response }: any = await sofasAPI.getPricingByArticle(values.article);
        if (response?.data?.type !== 'error') {
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

  const onSubmit = (values: { configurations: SofaConfigurationModel[] }) => {
    setFieldValue('configurations', values.configurations);
    closeCallback();
  };

  return (
    <ModalDialog width={1260} isVisible={isVisible} closeCallback={closeCallback}>
      <ModalBody>
        <Button onClick={getPricingByArticle}>Додати прайс за артикулом</Button>
        <Box gap={20} justify='space-between'>
          <Box width='32px' />
          <Box width='70px'>
            <Text size={12} weight={theme.boldFont}>
              Розкладка
            </Text>
          </Box>
          {Object.values(FabricCategoriesEnum).map(category => (
            <Box width='70px' key={category}>
              <Text size={12} weight={theme.boldFont}>
                {category}
              </Text>
            </Box>
          ))}
        </Box>

        <FormWrapper>
          <EditConfigurationsForm
            initialValues={initialValues as { configurations: SofaConfigurationModel[] }}
            configurations={configurations as SofaConfigurationModel[]}
            onSubmit={onSubmit}
          />
        </FormWrapper>
      </ModalBody>
      <Notification
        type={notificationData.type as NotificationType}
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

export default EditSofaConfiguration;
