import React, { useCallback, useState } from 'react';

// helpers
import styled from 'styled-components';
import { Schema } from 'yup';

// components
import Button from '../../Antd/Button';
import { Form as FormikForm, Formik, FormikHelpers, FormikProps } from 'formik';
import Notification from '../../Antd/Notification';

export interface RequiredPropsForFormModel<Values> {
  initialValues: Values | null;
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<unknown>;
}
interface FormProps<Values> extends RequiredPropsForFormModel<Values> {
  readonly?: boolean;
  submitText?: string | null;
  renderForm: ((form: FormikProps<Values>) => React.ReactNode) | React.ReactNode;
  isDisabledFields?: boolean;
  validationSchema?: Schema<Values>;
}

function Form<Values = unknown>({ readonly, submitText, renderForm, initialValues, validationSchema, onSubmit }: FormProps<Values>) {
  const [notificationData, setNotificationData] = useState({ message: '', isOpen: false });

  const handleSubmit = useCallback(
    async (values: any, formikHelpers: FormikHelpers<any>) => {
      try {
        return await onSubmit(values, formikHelpers);
      } catch (error) {
        setNotificationData({ message: 'Server error: something went wrong.', isOpen: true });
      }
    },
    [onSubmit],
  );

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={initialValues || ({} as any)}
        validationSchema={validationSchema}
      >
        {(form: FormikProps<any>) => (
          <StyledForm noValidate>
            {typeof renderForm === 'function' ? renderForm(form) : renderForm}
            {submitText && !readonly && <Button type='submit'>{submitText}</Button>}
          </StyledForm>
        )}
      </Formik>
      <Notification
        type='error'
        isOpen={notificationData.isOpen}
        title={notificationData.message}
        closeCallback={() => setNotificationData(prevState => ({ ...prevState, isOpen: false }))}
      />
    </>
  );
}

const StyledForm = styled(FormikForm)`
  flex-direction: column;
  align-items: flex-start;
  .ant-form-item {
    width: 100%;
    margin-bottom: ${({ theme }) => theme.marginL};
  }
`;

export default Form;
