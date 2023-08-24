import React, { useState } from 'react';

// helpers
import { theme } from '../../../../../assets/styles/theme/theme';
import { styled } from 'styled-components';
import { useFormikContext } from 'formik';
import { FabricCategoriesEnum } from '../../../../../constants/sofa';
import { SofaConfigurationModel } from '../../../../../interfaces/products';

// components
import Box from '../../../../Additional/Box';
import Text from '../../../../Antd/Text';
import Title from '../../../../Antd/Title';
import Button from '../../../../Antd/Button';
import Select from '../../../../Antd/Select';
import Divider from '../../../../Antd/Divider';
import EditSofaConfiguration from '../../../../ModalDialogs/EditSofaConfiguration';

import { EditOutlined } from '@ant-design/icons';

interface IProps {
  readonly: boolean;
}

const Configuration = ({ readonly }: IProps) => {
  const { values }: any = useFormikContext();

  const sofaConfigurations = values.configurations.map((conf: any) => {
    return { collapse: conf.collapse, pricing: conf.pricing.filter((priceObj: any) => priceObj.price !== '-') };
  });

  const [isModalOpen, setIsModelOpen] = useState(false);

  const [currentConfiguration, setCurrentConfiguration] = useState({
    price: sofaConfigurations[0]?.pricing[0]?.price,
    fabric: sofaConfigurations[0]?.pricing[0]?.fabric,
    collapse: sofaConfigurations[0]?.collapse,
  });

  const fabricOptionsArray = Object.values(FabricCategoriesEnum);
  const collapseOptionsArray = values.configurations.map((item: SofaConfigurationModel) => item.collapse);

  const collapseSelectOptions = collapseOptionsArray.map((item: any) => {
    return {
      label: item,
      value: item,
      id: item,
    };
  });

  const fabricSelectOptions = () => {
    const filteredConfigurations = values.configurations.map((conf: SofaConfigurationModel) =>
      conf.pricing.filter(pricing => pricing.price !== 0),
    );

    return fabricOptionsArray.map(item => {
      return {
        label: item,
        value: item,
        id: item,
      };
    });
  };

  console.log(values.configurations);

  const handleChangeFabric = (fabric: string) => {
    const lastCollapse = currentConfiguration.collapse;

    const findedConfiguration = sofaConfigurations.find((element: any) => element.collapse === lastCollapse);

    const findedPricing = findedConfiguration.pricing.find((pricing: any) => pricing.fabric === fabric);

    setCurrentConfiguration({ collapse: lastCollapse, fabric, price: findedPricing.price });
  };

  const handleChangeCollapse = (collapse: string) => {
    const lastFabric = currentConfiguration.fabric;

    const findedConfiguration = sofaConfigurations.find((element: any) => element.collapse === collapse);

    const findedPricing = findedConfiguration.pricing.find((pricing: any) => pricing.fabric === lastFabric);

    setCurrentConfiguration({ collapse: findedConfiguration.collapse, fabric: lastFabric, price: findedPricing.price });
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
        <Text>Розкладка:</Text>
        <Select
          placeholder='Розкладка'
          options={collapseSelectOptions}
          value={currentConfiguration.collapse}
          onChange={(e: any) => handleChangeCollapse(e)}
        />
      </SelectWrapepr>
      <SelectWrapepr>
        <Text>Тканина:</Text>
        <Select
          placeholder='Тканина'
          options={fabricSelectOptions()}
          value={currentConfiguration.fabric}
          onChange={(e: any) => handleChangeFabric(e)}
        />
      </SelectWrapepr>
      <PriceText>Поточна ціна: {currentConfiguration.price} UAH</PriceText>
      <Divider margin={`${theme.marginM} 0`} />
      <EditSofaConfiguration isVisible={isModalOpen} closeCallback={() => setIsModelOpen(false)} />
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
width: 240px;
justify-content: space-between;
  .ant-select {
    width: 140px;
  
`;

const EditButton = styled(Button)`
  width: 28px;
  height: 24px;
  padding: 0;
`;

export default Configuration;
