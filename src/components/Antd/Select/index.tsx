import React, { ReactNode, useState } from 'react';

// components
import { Select as AntdSelect } from 'antd';

export interface SelectOption<Option = unknown> {
  id: string | string;
  label: ReactNode;
  model?: Option;
  hidden?: boolean;
  disabled?: boolean;
}

export interface FormSelectProps {
  value?: string;
  disabled?: boolean;
  placeholder: string;

  onChange?: (option: OnChangeOptionsType) => void;
}

type OnChangeOptionsType = string | string[];

type SizeType = 'large' | 'middle' | 'small';

interface SelectProps<Option = unknown> extends FormSelectProps {
  mode?: 'multiple';
  size?: SizeType;
  options: SelectOption<Option>[];
  className?: string;
  popupClassName?: string;
}

function Select<Option = unknown>({
  mode,
  size,
  value,
  options,
  disabled,
  className = '',
  placeholder,
  popupClassName = '',
  onChange,
}: SelectProps<Option>) {
  const [open, setOpen] = useState(false);

  const renderOptions = (items: SelectOption<Option>[]) => {
    return items.reduce<ReactNode[]>((acc, item) => {
      if (!item.hidden) {
        acc.push(
          <AntdSelect.Option key={item.id} value={item.label} model={item.model} disabled={item.disabled}>
            {item.label}
          </AntdSelect.Option>,
        );
      }

      return acc;
    }, []);
  };

  return (
    <AntdSelect
      open={open}
      mode={mode}
      size={size}
      value={value}
      disabled={disabled}
      className={className}
      placeholder={placeholder}
      popupClassName={popupClassName}
      onBlur={() => setOpen(false)}
      onClick={() => setOpen(!open)}
      onChange={onChange}
    >
      {renderOptions(options || [])}
    </AntdSelect>
  );
}

export default Select;
