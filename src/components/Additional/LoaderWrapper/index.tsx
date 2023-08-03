import React from 'react';

// helpers
import styled from 'styled-components';

// components
import Box from '../Box';
import Spin from '../../Antd/Spin';

interface LoaderWrapperProps {
  loading: boolean;
  children: any;
  className?: string;
}

const LoaderWrapper = ({ loading, children, className = '' }: LoaderWrapperProps) => {
  return loading ? (
    <LoaderContainer className={className}>
      <Spin size='large' />
    </LoaderContainer>
  ) : (
    children
  );
};

const LoaderContainer = styled(Box)`
  ${({ theme }) => [theme.centerColumnSnippet, theme.fullWidthHeight]}
`;

export default LoaderWrapper;
