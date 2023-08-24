import React from 'react';

// helpers
import moment from 'moment';
import { theme } from '../../../assets/styles/theme/theme';
import { styled } from 'styled-components';

import 'moment/locale/uk';

// components
import Box from '../Box';
import Text from '../../Antd/Text';

interface ProductMainInfoProps {
  article: string;
  createdAt: string;
  updatedAt: string;
}

const ProductMainInfo = ({ article, createdAt, updatedAt }: ProductMainInfoProps) => {
  return (
    <Box justify='space-between'>
      <ArticleText weight={theme.boldFont}>Артикул: {article}</ArticleText>
      <Box gap={12} width='auto'>
        <Text>
          <Text weight={theme.semiBoldFont}>Створено:</Text> {moment(createdAt).format('MM/DD/YY, h:mm')}
        </Text>
        {createdAt !== updatedAt && (
          <Text>
            <Text weight={theme.semiBoldFont}>Оновлено:</Text> {moment(updatedAt).format('MM/DD/YY, h:mm')}
          </Text>
        )}
      </Box>
    </Box>
  );
};

const ArticleText = styled(Text)`
  margin-bottom: ${({ theme }) => theme.marginM};
  font-weight: ${({ theme }) => theme.boldFont};
`;

export default ProductMainInfo;
