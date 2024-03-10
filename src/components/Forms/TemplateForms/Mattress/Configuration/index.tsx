import React, { useState } from 'react';

// helpers
import { theme } from '../../../../../assets/styles/theme/theme';
import { styled } from 'styled-components';
import { useFormikContext } from 'formik';
import { MattressConfigurationModel } from '../../../../../interfaces/mattress';
import { KidsSizeEnum, MattressTypeEnum, SizeEnum } from '../../../../../constants/mattresses';

// components
import Box from '../../../../Additional/Box';
import Text from '../../../../Antd/Text';
import Title from '../../../../Antd/Title';
import Button from '../../../../Antd/Button';
import Select from '../../../../Antd/Select';
import Divider from '../../../../Antd/Divider';
import EditMattressConfiguration from '../../../../ModalDialogs/EditMattressConfiguration';

import { EditOutlined } from '@ant-design/icons';

interface IProps {
  readonly: boolean;
}

const Configuration = ({ readonly }: IProps) => {
  const { values }: any = useFormikContext();

  const [isModalOpen, setIsModelOpen] = useState(false);

  const [currentConfiguration, setCurrentConfiguration] = useState({
    size: values?.configurations[0]?.pricing[0]?.size,
    price: values?.configurations[0]?.pricing[0]?.price,
    height: values?.configurations[0]?.height,
  });

  const sizeOptionsArray = values.type === MattressTypeEnum.ForKids ? Object.values(KidsSizeEnum) : Object.values(SizeEnum);
  const heightOptionsArray = values.configurations.map((item: MattressConfigurationModel) => item.height);

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

  const handleChangeSize = (size: string) => {
    const lastHeight = currentConfiguration.height;

    const findedConfiguration = values.configurations.find((element: any) => element.height === lastHeight);

    const findedPricing = findedConfiguration.pricing.find((pricing: any) => pricing.size === size);

    setCurrentConfiguration({ height: lastHeight, size, price: findedPricing.price });
  };

  const handleChangeHeight = (height: number) => {
    const lastSize = currentConfiguration.size;
    const findedConfiguration = values.configurations.find((element: any) => element.height === height);

    const findedPricing = findedConfiguration.pricing.find((pricing: any) => pricing.size === lastSize);

    setCurrentConfiguration({ height: findedConfiguration.height, size: lastSize, price: findedPricing.price });
  };

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

      <SelectWrapepr>
        <Text>Висота:</Text>
        <Select
          placeholder='Висота'
          options={heightSelectOptions}
          value={currentConfiguration.height}
          onChange={(e: any) => handleChangeHeight(e)}
        />
      </SelectWrapepr>
      <SelectWrapepr>
        <Text>Розміри:</Text>
        <Select
          placeholder='Розміри'
          options={sizeSelectOptions}
          value={currentConfiguration.size}
          onChange={(e: any) => handleChangeSize(e)}
        />
      </SelectWrapepr>
      <PriceText>Поточна ціна: {currentConfiguration.price} UAH</PriceText>
      <Divider margin={`${theme.marginM} 0`} />
      <EditMattressConfiguration isVisible={isModalOpen} closeCallback={() => setIsModelOpen(false)} />
    </ConfigurationBox>
  );
};

const ConfigurationBox = styled(Box)`
  width: auto;
  position: relative;
  flex-direction: column;
  h4 {
    margin-top: 0;
  }
`;

const PriceText = styled(Text)`
  margin-top: ${({ theme }) => theme.marginM};
  font-weight: ${({ theme }) => theme.semiBoldFont};
`;

const SelectWrapepr = styled(Box)`
width: 200px;
justify-content: space-between;
  .ant-select {
    width: 100px;
  
`;

const EditButton = styled(Button)`
  width: 28px;
  height: 24px;
  padding: 0;
`;

export default Configuration;
