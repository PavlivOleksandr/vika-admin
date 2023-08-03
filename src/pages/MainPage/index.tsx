import React from 'react';

// helpers
import { styled } from 'styled-components';
import { RoutesEnum } from '../../router/routes';
import { useNavigate } from 'react-router-dom';

// components
import Box from '../../components/Additional/Box';
import Text from '../../components/Antd/Text';
import Image from '../../components/Antd/Image';
import SofaIcon from '../../assets/icons/sofa.png';
import ShopIcon from '../../assets/icons/shop.png';
import MattressIcon from '../../assets/icons/mattress.png';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <SelectBox>
      <CategoryBox onClick={() => navigate(RoutesEnum.Sofas)}>
        <Image src={SofaIcon} width='50px' height='50px' />
        <Text>Дивани</Text>
      </CategoryBox>
      <CategoryBox onClick={() => navigate(RoutesEnum.Mattresses)}>
        <Image src={MattressIcon} width='50px' height='50px' />
        <Text>Матраци</Text>
      </CategoryBox>
      <CategoryBox onClick={() => navigate(RoutesEnum.Shops)}>
        <Image src={ShopIcon} width='50px' height='50px' />
        <Text>Магазини</Text>
      </CategoryBox>
    </SelectBox>
  );
};

const SelectBox = styled(Box)`
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;

const CategoryBox = styled(Box)`
  width: 200px;
  height: 200px;
  cursor: pointer;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primary};
  p {
    font-size: ${({ theme }) => theme.fontSizeL};
    font-weight: ${({ theme }) => theme.semiBoldFont};
  }
  &:hover {
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;

export default MainPage;
