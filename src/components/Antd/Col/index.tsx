import React, { ReactNode, forwardRef, Ref } from 'react';

// components
import { Col as AntdCol } from 'antd';

interface ColProps {
  pull?: number;
  span?: number;
  push?: number;
  flex?: string;
  order?: number;
  offset?: number;
  children?: ReactNode;
  className?: string;
}
const Col = forwardRef(({ pull, span, push, flex, order, offset, children, className = '' }: ColProps, ref: Ref<HTMLDivElement>) => {
  return (
    <AntdCol ref={ref} pull={pull} span={span} push={push} flex={flex} order={order} offset={offset} className={className}>
      {children}
    </AntdCol>
  );
});

export default Col;
