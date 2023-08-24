import React from 'react';

// components
import Box from '../../../../../../Additional/Box';
import Input from '../../../../../../Antd/Input';
import FormField from '../../../../../FormField';
import PriceForm from './PriceForm';

interface IProps {
  index: number;
  fieldName: string;
}

const PricingForm = ({ index, fieldName }: IProps) => {
  return (
    <Box gap={20}>
      <FormField name={`${fieldName}.collapse`} component={Input} placeholder='Розкладка' />
      <PriceForm fieldName={fieldName} index={index} />
    </Box>
  );
};

export default PricingForm;
