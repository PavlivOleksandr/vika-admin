import React from 'react';

// helpers
import { styled } from 'styled-components';
import { RadioChangeEvent } from 'antd';

// components
import RadioGroup from '../../../../Antd/RadioGroup';

interface GenderRadioGroupProps {
  value: string;
  disabled?: boolean;
  onChange: (value: RadioChangeEvent) => void;
}

const SofaVariantRadiogroup = ({ value, disabled, onChange }: GenderRadioGroupProps) => {
  const options = [
    { value: '7', title: '7' },
    { value: 'Г', title: 'Г' },
    { value: 'Універсальний', title: 'Універсальний' },
  ];

  return <StyledRadioGroup value={value} disabled={disabled} options={options} onChange={onChange} />;
};

const StyledRadioGroup = styled(RadioGroup)`
  &.ant-radio-group {
    display: flex;
  }
`;

export default SofaVariantRadiogroup;
