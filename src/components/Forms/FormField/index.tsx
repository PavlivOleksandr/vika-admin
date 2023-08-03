import React, { useState, useEffect, useMemo } from 'react';

// helpers
import { useField, useFormikContext } from 'formik';

// components
import { Form } from 'antd';
import Text from '../../Antd/Text';
import Box from '../../Additional/Box';

const FormItem = Form.Item;

enum VALIDATE_STATUS_ENUM {
  ERROR = 'error',
  SUCCESS = 'success',
}

export interface FormFieldPropsModel {
  name: string;
  label?: string;
  component: any;
  disabled?: boolean;
  placeholder?: string | null;
  shouldShowErrorMessage?: boolean;
  additionalProps?: {
    [key: string]: any;
  };
  onChange?: (e: any) => void;
}

export interface InnerComponentModel {
  name: string;
  value: any;
  disabled?: boolean;
  placeholder?: string;
  onChange: (e: any) => void;
}

interface InnerFormItemProps {
  help?: string;
  label?: string;
  component: any;
  validateStatus: VALIDATE_STATUS_ENUM;
  innerComponentProps: InnerComponentModel;
}

// Custom Form Field component (using Formik)
const FormField = ({
  name,
  label,
  disabled,
  placeholder,
  additionalProps,
  component: Component,
  shouldShowErrorMessage = true,
  onChange,
}: FormFieldPropsModel) => {
  const [field, meta, helpers] = useField(name);
  const { isSubmitting, status } = useFormikContext();
  const [privateValue, setPrivateValue] = useState<any>(field.value || undefined);

  useEffect(() => {
    if (field.value !== privateValue) {
      setPrivateValue(field.value);
    }
  }, [field.value]);

  const handleChange = (e: any) => {
    let newValue: any = '';

    if (e) {
      newValue = e.target ? (e.target.type === 'checkbox' ? e.target.checked : e.target.value) : e;
    } else {
      newValue = typeof e === 'boolean' ? e : '';
    }

    setPrivateValue(newValue);
    helpers.setValue(newValue);
    onChange && onChange(e);
  };

  const errorMessage = useMemo(() => {
    if (!shouldShowErrorMessage) {
      return;
    }

    let message;
    if (meta.error) {
      if (typeof meta.error === 'string') {
        message = meta.error || 'Field not valid!';
      } else if (typeof meta.error === 'object') {
        const error = meta.error as any;
        const values: { [key: string]: string } = {};

        if (error.values) {
          Object.keys(error.values).forEach(key => {
            values[key] = 'error';
          });
        }

        message = 'error';
      }
    }

    return message;
  }, [shouldShowErrorMessage, meta.error]);

  const innerComponentProps = useMemo(() => {
    const result: any = {
      ...additionalProps,
      name,
      value: privateValue,
      onChange: handleChange,
      placeholder: placeholder || 'enter',
      disabled: isSubmitting || disabled || status === 'disabled',
    };

    return result;
  }, [isSubmitting, disabled, privateValue, additionalProps, status]);

  return (
    <InnerFormItem
      help={errorMessage}
      label={label}
      component={Component}
      innerComponentProps={innerComponentProps}
      validateStatus={meta.error ? VALIDATE_STATUS_ENUM.ERROR : VALIDATE_STATUS_ENUM.SUCCESS}
    />
  );
};

const InnerFormItem = ({ label, innerComponentProps, component: Component, ...rest }: InnerFormItemProps) => {
  return (
    <FormItem {...rest}>
      <Box>
        {label && (
          <Box width='auto' align='center'>
            <Text>{label}</Text>:
          </Box>
        )}
        <Component {...innerComponentProps} />
      </Box>
    </FormItem>
  );
};

export default FormField;
