import React, { ReactNode } from 'react';

// helpers
import styled from 'styled-components';

// components
import { Typography } from 'antd';

type LevelType = 1 | 2 | 3 | 4 | 5;

interface TitleProps {
  level?: LevelType;
  weight?: number;
  children: ReactNode;
  className?: string;

  onClick?: () => void;
}

const Title = ({ level = 1, weight = 400, children, className = '', onClick }: TitleProps) => {
  return (
    <StyledTitle level={level} className={className} weight={weight} onClick={onClick}>
      {children}
    </StyledTitle>
  );
};

const StyledTitle = styled(Typography.Title)<{
  weight: number;
}>`
  font-weight: ${({ weight }) => weight};
`;

export default Title;
