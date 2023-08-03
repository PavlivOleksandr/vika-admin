import React from 'react';

// helpers
import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme/theme';
import { useNavigate } from 'react-router-dom';

// components
import { Typography } from 'antd';

interface LinkProps {
  to: string;
  size?: number;
  color?: string;
  weight?: number;
  children: string;
  className?: string;
  onClick?: () => void;
}

const Link = ({ to, size = 16, weight = 400, color = theme.darkFont, children, className = '', onClick }: LinkProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick && onClick();
    navigate(to);
  };

  return (
    <StyledLink size={size} weight={weight} color={color} className={className} onClick={handleClick}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(Typography.Link)<{
  size: number;
  color: string;
  weight: number;
}>`
  color: ${({ color }) => color} !important;
  font-size: ${({ size }) => `${size}px`};
  word-break: initial;
  font-weight: ${({ weight }) => weight};
`;

export default Link;
