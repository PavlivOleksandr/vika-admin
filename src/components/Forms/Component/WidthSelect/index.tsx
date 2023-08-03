import React from 'react';

// components
import Select from '../../../Antd/Select';
import FormField from '../../FormField';

interface IProps {
  value: any;
  optionsArray: any[];
  onChange: any;
}

const WidthSelect = ({ value, optionsArray, onChange }: IProps) => {
  const selectOptions = optionsArray.map(item => {
    return {
      label: item,
      value: item,
      id: item,
    };
  });

  return (
    // <FormField
    //   label='Ширина'
    //   name='width'
    //   placeholder={'Ширина'}
    //   component={Select}
    //   additionalProps={{ value, options: selectOptions, onChange: (e: any) => onChange(e) }}
    // />
    <Select placeholder='Розміри' options={selectOptions} value={value} onChange={onChange} />
  );
};

export default WidthSelect;
