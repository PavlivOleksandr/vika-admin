import React from 'react';

// components
import Box from '../../Additional/Box';
import { Radio as AntdRadio, RadioChangeEvent } from 'antd';

interface RadioProps {
  title: string;
  value?: string | number;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  autoFocus?: boolean;
  defaultChecked?: boolean;

  onChange?: (event: RadioChangeEvent) => void;
}

const Radio = ({ title, value, checked, disabled, className = '', autoFocus, defaultChecked, onChange }: RadioProps) => {
  return (
    <Box className={className}>
      <AntdRadio
        value={value}
        checked={checked}
        disabled={disabled}
        autoFocus={autoFocus}
        defaultChecked={defaultChecked}
        onChange={onChange}
      >
        {title}
      </AntdRadio>
    </Box>
  );
};

export default Radio;
