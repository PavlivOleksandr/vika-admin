import React from 'react';

// components
import Text from '../Text';
import { Collapse as AntdCollapse } from 'antd';

interface CollapseProps {
  text: string;
  title: string;
  className?: string;
}

const Collapse = ({ text, title, className = '' }: CollapseProps) => {
  return (
    <AntdCollapse className={className}>
      <AntdCollapse.Panel header={title} key={title}>
        <Text>{text}</Text>
      </AntdCollapse.Panel>
    </AntdCollapse>
  );
};

export default Collapse;
