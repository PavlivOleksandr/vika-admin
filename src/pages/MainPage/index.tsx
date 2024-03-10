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
import ShopsIcon from '../../assets/icons/shop.png';
import MattressIcon from '../../assets/icons/mattress.png';

const MainPage = () => {
  const navigate = useNavigate();

  const menuArray = [
    { text: 'Дивани', icon: SofaIcon, route: RoutesEnum.Sofas, isDisabled: false },
    { text: 'Матраци', icon: MattressIcon, route: RoutesEnum.Mattresses, isDisabled: false },
    { text: 'Магазини', icon: ShopsIcon, route: RoutesEnum.Shops, isDisabled: true },
  ];

  return (
    <SelectBox>
      {menuArray.map(menuItem => (
        <CategoryBox
          key={menuItem.route}
          isDisabled={menuItem.isDisabled}
          onClick={() => (menuItem.isDisabled ? null : navigate(menuItem.route))}
        >
          <Image src={menuItem.icon} width='50px' height='50px' />
          <Text>{menuItem.text}</Text>
        </CategoryBox>
      ))}
    </SelectBox>
  );
};

const SelectBox = styled(Box)`
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;

const CategoryBox = styled(Box)<{ isDisabled: boolean }>`
  width: 200px;
  height: 200px;
  cursor: ${({ isDisabled }) => (!isDisabled ? 'pointer' : 'default')};
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme, isDisabled }) => (!isDisabled ? theme.primary : 'gray')};
  p {
    font-size: ${({ theme }) => theme.fontSizeL};
    font-weight: ${({ theme }) => theme.semiBoldFont};
  }
  &:hover {
    box-shadow: ${({ isDisabled }) => (!isDisabled ? '1px 1px 5px 0px rgba(0, 0, 0, 0.75);' : 'none')};
  }
`;

export default MainPage;
