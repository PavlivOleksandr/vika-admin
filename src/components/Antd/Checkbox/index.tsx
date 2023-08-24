import React from 'react';

// helpers
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

// components
import { Checkbox as AntdCheckbox } from 'antd';

interface CheckboxProps {
  title: string;
  value: boolean;
  checked?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  className?: string;
  defaultChecked?: boolean;

  onChange?: (event: CheckboxChangeEvent) => void;
}

const Checkbox = ({ title, value, checked, disabled, autoFocus, className = '', defaultChecked, onChange }: CheckboxProps) => {
  return (
    <AntdCheckbox
      value={value}
      checked={value}
      disabled={disabled}
      autoFocus={autoFocus}
      className={className}
      defaultChecked={defaultChecked}
      onChange={onChange}
    >
      {title}
    </AntdCheckbox>
  );
};

export default Checkbox;
