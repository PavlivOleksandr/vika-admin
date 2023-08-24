import React from 'react';

// helpers
import { FormValuesModel } from '../../..';
import { FieldArray, useFormikContext } from 'formik';

// components
import Input from '../../../../../../../Antd/Input';
import FormField from '../../../../../../FormField';

interface IProps {
  index: number;
  fieldName: string;
}

const PriceForm = ({ index, fieldName }: IProps) => {
  const { values } = useFormikContext<FormValuesModel>();

  const render = () => {
    return values.configurations[index].pricing.map((price, priceIndex) => (
      <FormField key={price.fabric} name={`${fieldName}.pricing.${priceIndex}.price`} component={Input} />
    ));
  };

  return <FieldArray name={`${fieldName}.pricing`} render={render} />;
};

export default PriceForm;
