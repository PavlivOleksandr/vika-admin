import React from 'react';

// helpers
import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme/theme';

// components
import { Divider as AntdDivider } from 'antd';

type DividerType = 'horizontal' | 'vertical';

interface DividerProps {
  type?: DividerType;
  color?: string;
  height?: number;
  margin?: string;
  className?: string;
}

const Divider = ({ type = 'horizontal', color = theme.gray4, height = 1, margin = theme.marginL, className = '' }: DividerProps) => {
  return <StyledDivider type={type} color={color} height={height} margin={margin} className={className} />;
};

const StyledDivider = styled(AntdDivider)<{ margin: string; color: string; height: number }>`
  height: ${({ height }) => height}px;
  margin: ${({ margin }) => margin};
  background: ${({ color }) => color};
`;

export default Divider;
