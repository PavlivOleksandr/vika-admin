import React from 'react';

// helpers
import { theme } from '../../../assets/styles/theme/theme';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

// components
import Box from '../Box';
import Text from '../../Antd/Text';
import Image from '../../Antd/Image';
import { SimpleProductModel } from '../../../interfaces/products';

interface ProductProps {
  path: string;
  product: SimpleProductModel;
}

const Product = ({ path, product }: ProductProps) => {
  const navigate = useNavigate();

  return (
    <ProductBox>
      <Image width='100%' height='105px' src={product.thumbnail} />
      <Box padding={theme.paddingM} justify='space-between'>
        <Text weight={600}>{product.name}</Text> <Text weight={500}>{product.article}</Text>
      </Box>
      <HoverBox onClick={() => navigate(path)}>
        <MoreDetailsText>Детальніше</MoreDetailsText>
      </HoverBox>
    </ProductBox>
  );
};

const ProductBox = styled(Box)`
  gap: 0;
  width: 200px;
  height: 150px;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.gray3};
  cursor: pointer;
  &:hover {
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgb(169 169 169 / 70%);
    }
  }
`;

const HoverBox = styled(Box)`
  gap: 0;
  width: 100%;
  height: 100%;
  display: none;
  position: absolute;
`;

const MoreDetailsText = styled(Text)`
  padding: ${({ theme }) => theme.paddingS} ${({ theme }) => theme.paddingM};
  border-radius: 16px;
  background: ${({ theme }) => theme.gray2};
  color: white;
`;

export default Product;
