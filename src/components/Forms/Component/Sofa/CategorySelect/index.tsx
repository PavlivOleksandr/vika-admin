import React from 'react';

// helpers
import { SofaCategoryEnum } from '../../../../../interfaces/products';

// components
import Select from '../../../../Antd/Select';
import FormField from '../../../FormField';

interface IProps {
  disabled?: boolean;
}

const CategorySelect = ({ disabled }: IProps) => {
  const selectOptions = Object.values(SofaCategoryEnum).map(item => {
    return {
      id: item,
      label: item,
      value: item,
    };
  });

  return (
    <FormField
      name='category'
      label='Категорія'
      disabled={disabled}
      component={Select}
      placeholder={'Категорія'}
      additionalProps={{ options: selectOptions }}
    />
  );
};

export default CategorySelect;
