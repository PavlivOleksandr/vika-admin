import React from 'react';

// components
import Select from '../../../Antd/Select';
import FormField from '../../FormField';

interface IProps {
  value: any;
  optionsArray: any[];
  onChange: any;
}

const HeightSelect = ({ value, optionsArray, onChange }: IProps) => {
  const selectOptions = optionsArray.map(item => {
    return {
      id: item,
      label: item,
      value: item,
    };
  });

  console.log(onChange);

  return (
    <FormField
      name='height'
      label='Висота'
      component={Select}
      placeholder={'Висота'}
      additionalProps={{ value: value, options: selectOptions, onChange: (e: any) => onChange(e) }}
    />
  );
};

export default HeightSelect;
