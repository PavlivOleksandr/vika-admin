import React, { memo } from 'react';

// components
import { Input as AntDInput } from 'antd';

export interface InputPasswordProps {
  name?: string;
  value?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;

  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputPassword = memo(({ name, value, disabled, className = '', placeholder, onBlur, onFocus, onChange }: InputPasswordProps) => {
  return (
    <AntDInput.Password
      name={name}
      value={value}
      disabled={disabled}
      className={className}
      placeholder={placeholder}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
    />
  );
});

export default InputPassword;
