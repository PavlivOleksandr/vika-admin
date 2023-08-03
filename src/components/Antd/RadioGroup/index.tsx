import React, { memo, ReactNode } from 'react';

// helpers
import { RadioChangeEvent } from 'antd';

// components
import Radio from '../Radio';
import { Radio as AntdRadio } from 'antd';

type OptionType = { title: string; value: string | undefined; disabled?: boolean };

interface RadioGroupProps {
  value?: unknown;
  options?: OptionType[];
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  defaultValue?: unknown;

  onChange?: (values: RadioChangeEvent) => void;
}

const RadioGroup = ({ value, options, children, disabled, className = '', defaultValue, onChange }: RadioGroupProps) => {
  return (
    <AntdRadio.Group value={value} disabled={disabled} className={className} defaultValue={defaultValue} onChange={onChange}>
      {children}

      {options?.map((option: OptionType) => {
        return <Radio key={option.value} title={option.title} value={option.value} disabled={option.disabled} />;
      })}
    </AntdRadio.Group>
  );
};

export default RadioGroup;
