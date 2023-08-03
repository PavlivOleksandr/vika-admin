import React, { useState } from 'react';

// helpers
import { theme } from '../../../../../../assets/styles/theme/theme';
import { styled } from 'styled-components';
import { useFormikContext } from 'formik';
import { KidsSizeEnum, SizeEnum } from '../../../../../../constants/mattresses';

// components
import Box from '../../../../../Additional/Box';
import Text from '../../../../../Antd/Text';
import Title from '../../../../../Antd/Title';
import Button from '../../../../../Antd/Button';
import Select from '../../../../../Antd/Select';
import Divider from '../../../../../Antd/Divider';
import EditMattressConfiguration from '../../../../../ModalDialogs/EditMattressConfiguration';

import { EditOutlined } from '@ant-design/icons';

interface IProps {
  readonly: boolean;
}

const Configuration = ({ readonly }: IProps) => {
  const { values }: any = useFormikContext();

  const [isModalOpen, setIsModelOpen] = useState(false);

  const [currentConfiguration, setCurrentConfiguration] = useState({
    height: values?.configurations[0].height,
    size: values?.configurations[0].pricing[0].sizes,
    price: values?.configurations[0].pricing[0].price,
  });

  const sizeOptionsArray = values.isForKids ? Object.values(KidsSizeEnum) : Object.values(SizeEnum);
  const heightOptionsArray = values.configurations.map((item: any) => item.height);

  const handleChangeSize = (size: string) => {
    const lastHeight = currentConfiguration.height;
    const findedConfiguration = values.configurations.find((element: any) => element.height === lastHeight);

    const findedPricing = findedConfiguration.pricing.find((pricing: any) => pricing.sizes === size);

    setCurrentConfiguration({ height: lastHeight, size, price: findedPricing.price });
  };

  const handleChangeHeight = (height: number) => {
    const lastSize = currentConfiguration.size;
    const findedConfiguration = values.configurations.find((element: any) => element.height === height);

    const findedPricing = findedConfiguration.pricing.find((pricing: any) => pricing.sizes === lastSize);

    setCurrentConfiguration({ height: findedConfiguration.height, size: lastSize, price: findedPricing.price });
  };

  const heightSelectOptions = heightOptionsArray.map((item: any) => {
    return {
      label: item,
      value: item,
      id: item,
    };
  });

  const sizeSelectOptions = sizeOptionsArray.map(item => {
    return {
      label: item,
      value: item,
      id: item,
    };
  });

  return (
    <ConfigurationBox>
      <Divider margin={`${theme.marginM} 0`} />

      <Title level={4}>
        Конфігурація:{' '}
        {!readonly && (
          <EditButton onClick={() => setIsModelOpen(true)}>
            <EditOutlined rev='' />
          </EditButton>
        )}
      </Title>

      <Box>
        <Text>Висота:</Text>
        <Select
          placeholder='Висота'
          options={heightSelectOptions}
          value={currentConfiguration.height}
          onChange={(e: any) => handleChangeHeight(e)}
        />
      </Box>
      <Box>
        <Text>Розміри:</Text>
        <Select
          placeholder='Розміри'
          options={sizeSelectOptions}
          value={currentConfiguration.size}
          onChange={(e: any) => handleChangeSize(e)}
        />
      </Box>
      <Text weight={theme.semiBoldFont}>Поточна ціна: {currentConfiguration.price} UAH</Text>
      <Divider margin={`${theme.marginM} 0`} />
      <EditMattressConfiguration
        isVisible={isModalOpen}
        configurations={values.configurations}
        closeCallback={() => setIsModelOpen(false)}
      />
    </ConfigurationBox>
  );
};

const ConfigurationBox = styled(Box)`
  width: auto;
  position: relative;
  flex-direction: column;
  h4 {
    margin: 0;
  }
`;

const EditButton = styled(Button)`
  width: 28px;
  height: 24px;
  padding: 0;
`;

export default Configuration;
