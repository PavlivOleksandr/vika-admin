import React from 'react';

// helpers
import { RadioChangeEvent } from 'antd';

// components
import RadioGroup from '../../../../Antd/RadioGroup';

interface GenderRadioGroupProps {
  value: string;
  disabled?: boolean;
  onChange: (value: RadioChangeEvent) => void;
}

const MattressTypeRadioGroup = ({ value, disabled, onChange }: GenderRadioGroupProps) => {
  const options = [
    { value: 'for adults', title: 'Для дорослих' },
    { value: 'for children', title: 'Для дітей' },
  ];

  return <RadioGroup value={value} disabled={disabled} options={options} onChange={onChange} />;
};

export default MattressTypeRadioGroup;
