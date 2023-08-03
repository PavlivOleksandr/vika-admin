import React, { useState } from 'react';

// components
import { Input as AtndInput } from 'antd';

interface SearchProps {
  disabled?: boolean;
  className?: string;
  allowClear?: boolean;
  placeholder: string;
  addonBefore?: string;
  enterButton?: string;

  onSearch?: (value: string) => void;
  onChange?: (event: string) => void;
  onPressEnter?: (value: string) => void;
}

const Search = ({
  disabled,
  className = '',
  allowClear,
  placeholder,
  addonBefore,
  enterButton,
  onSearch,
  onChange,
  onPressEnter,
}: SearchProps) => {
  const [value, setValue] = useState('');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement> | undefined) => {
    if (event && event.target) {
      setValue(event.target.value);
      onChange && onChange(event.target.value);
    }
  };

  return (
    <AtndInput.Search
      value={value}
      onFocus={() => false}
      disabled={disabled}
      className={className}
      allowClear={allowClear}
      placeholder={placeholder}
      addonBefore={addonBefore}
      enterButton={enterButton}
      onSearch={onSearch}
      onChange={handleOnChange}
      onPressEnter={() => value && onPressEnter && onPressEnter(value)}
    />
  );
};

export default Search;
