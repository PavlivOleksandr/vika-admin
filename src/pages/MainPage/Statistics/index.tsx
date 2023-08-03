import React, { useState } from 'react';

// helpers
import { styled } from 'styled-components';

// components
import Box from '../../../components/Additional/Box';
import Text from '../../../components/Antd/Text';
import { DownOutlined } from '@ant-design/icons';

const Statistics = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StatisticsBox>
      <TitleBox isOpen={isOpen}>
        <DownOutlined rev='' onClick={() => setIsOpen(!isOpen)} />
        <Text weight={500}>Всього товару на складі: 204</Text>
      </TitleBox>
      {isOpen && (
        <>
          <Text>Дивани: 90</Text>
          <Text>Матраци: 35</Text>
          <Text>Тахти: 17</Text>
          <Text>Дитячі: 9</Text>
          <Text>Ліжка: 56</Text>
          <Text>Крісла: 32</Text>
        </>
      )}
    </StatisticsBox>
  );
};

const StatisticsBox = styled(Box)`
  width: auto;
  flex-direction: column;
  background: ${({ theme }) => theme.gray3};
  padding: ${({ theme }) => theme.paddingM};
  margin: ${({ theme }) => theme.marginM} 0;
  border-radius: 6px;
`;

const TitleBox = styled(Box)<{ isOpen: boolean }>`
  align-items: center;

  span {
    cursor: pointer;
    transition: all 0.5s ease;
    transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0')});
  }
`;

export default Statistics;
