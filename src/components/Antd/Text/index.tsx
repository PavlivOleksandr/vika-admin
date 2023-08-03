import React, { ReactNode, MouseEvent } from 'react';

// helpers
import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme/theme';

interface TextProps {
  size?: number;
  color?: string;
  weight?: number;
  children: ReactNode;
  className?: string;

  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

const Text = ({ size = 16, weight = 400, color = theme.black, children, className = '', onClick }: TextProps) => {
  return (
    <StyledText size={size} weight={weight} color={color} className={className} onClick={onClick}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.p<{ weight: number; color: string; size: number }>`
  color: ${({ color }) => color};
  margin: 0;
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight};
`;
export default Text;
