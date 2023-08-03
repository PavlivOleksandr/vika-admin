import React, { ReactNode } from 'react';

// components
import { Row as AntdRow } from 'antd';

type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type AlignType = 'top' | 'middle' | 'bottom' | 'stretch';
type JustifyType = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';

type GutterType = number | Partial<Record<BreakpointType, number>>;

interface RowProps {
  wrap?: boolean;
  align?: AlignType;
  gutter?: GutterType | [GutterType, GutterType];
  justify?: JustifyType;
  children?: ReactNode;
  className?: string;
}

const Row = ({ wrap, align, gutter, justify, children, className = '' }: RowProps) => {
  return (
    <AntdRow wrap={wrap} align={align} gutter={gutter} justify={justify} className={className}>
      {children}
    </AntdRow>
  );
};

export default Row;
