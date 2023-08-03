import React, { ChangeEventHandler } from 'react';

// components
import { Input as AntdInput } from 'antd';

type SizeType = 'small' | 'middle' | 'large';
type InputType = 'text' | 'number' | 'numbers';

interface InputProps {
  type: InputType;
  name?: string;
  size?: SizeType;
  value?: string;
  disabled?: boolean;
  className?: string;
  placeholder: string;

  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ type, name, size, value, disabled, className = '', placeholder, onChange }: InputProps) => {
  return (
    <AntdInput
      type={type}
      name={name}
      size={size}
      value={value}
      disabled={disabled}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      onKeyPress={event => {
        if (type === 'numbers') {
          if (!/^[0-9]*\.?[0-9]*$/.test(event.key)) {
            event.preventDefault();
          }
        }
      }}
    />
  );
};

export default Input;
