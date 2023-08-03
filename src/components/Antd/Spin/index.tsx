import React from 'react';

// components
import { Spin as AntdSpin } from 'antd';
import { LoadingOutlined as LoadingIcon } from '@ant-design/icons';

type SizeType = 'large' | 'small' | 'default';

interface SpinProps {
  icon?: any;
  size?: SizeType;
  className?: string;
}

const Spin = ({ icon = <LoadingIcon rev='' />, size = 'default', className = '' }: SpinProps) => {
  return <AntdSpin size={size} indicator={icon} className={className} />;
};

export default Spin;
