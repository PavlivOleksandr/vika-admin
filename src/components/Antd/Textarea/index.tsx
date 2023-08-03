import React, { FocusEvent, useState } from 'react';

// helpers
import { styled } from 'styled-components';

// components
import Box from '../../Additional/Box';
import Text from '../Text';
import { Input as AntdInput } from 'antd';

interface AutoSizeModel {
  minRows?: number;
  maxRows?: number;
}

interface InputTextareaProps {
  name?: string;
  value?: string;
  disabled?: boolean;
  autoSize?: AutoSizeModel;
  maxLength?: number;
  className?: string;
  placeholder: string;
  showCharCount?: boolean;

  onBlur?: (event: FocusEvent<HTMLTextAreaElement, Element>) => void;
  onFocus?: (event: FocusEvent<HTMLTextAreaElement, Element>) => void;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const Textarea = ({
  name,
  value,
  disabled,
  autoSize,
  maxLength,
  className = '',
  placeholder,
  showCharCount,
  onBlur,
  onFocus,
  onChange,
}: InputTextareaProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (event: FocusEvent<HTMLTextAreaElement, Element>) => {
    setIsFocused(true);
    onFocus && onFocus(event);
  };

  const handleBlur = (event: FocusEvent<HTMLTextAreaElement, Element>) => {
    setIsFocused(false);
    onBlur && onBlur(event);
  };

  return (
    <TextAreaContainer>
      <AntdInput.TextArea
        name={name}
        value={value}
        disabled={disabled}
        autoSize={autoSize}
        maxLength={maxLength}
        className={className}
        placeholder={placeholder}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={onChange}
      />

      {maxLength && value && showCharCount && isFocused && (
        <CharsCount maxChars={value.length >= maxLength}>{`${value.length} / ${maxLength}`}</CharsCount>
      )}
    </TextAreaContainer>
  );
};

const TextAreaContainer = styled(Box)`
  width: auto;
  position: relative;
  align-items: flex-end;
  flex-direction: column;
`;

const CharsCount = styled(Text)<{ maxChars: boolean }>`
  color: ${({ theme, maxChars }) => maxChars && theme.red} !important;
  bottom: -20px;
  position: absolute;
  font-size: ${({ theme }) => theme.fontSizeM};
`;

export default Textarea;
