import React, { useEffect } from 'react';

// helpers
import { styled } from 'styled-components';
import { FormValuesModel } from '..';
import { KidsSizeEnum, SizeEnum } from '../../../../../../constants/mattresses';
import { MattressConfigurationModel, MattressTypeEnum } from '../../../../../../interfaces/products';
import { FieldArrayRenderProps, useFormikContext, FieldArray } from 'formik';

// components
import Box from '../../../../../Additional/Box';
import Button from '../../../../../Antd/Button';
import PricingForm from './PricingForm';
import { DeleteOutlined } from '@ant-design/icons';

interface IProps {
  configurations: MattressConfigurationModel[];
}

const InnerForm = ({ configurations }: IProps) => {
  const { values, setFieldValue } = useFormikContext<FormValuesModel>();

  useEffect(() => {
    setFieldValue('configurations', configurations);
  }, [configurations]);

  const renderPricingForm = (arrayHelpers: FieldArrayRenderProps) => {
    const newConfiguration = {
      height: null,
      pricing: Object.values(values.type === MattressTypeEnum.ForKids ? KidsSizeEnum : SizeEnum).map(size => ({
        size,
        price: 0,
      })),
    };

    return (
      <>
        <PricingWrapper>
          {values?.configurations?.map((_: any, index: number) => (
            <PricingBox key={index}>
              <RemoveBtn onClick={() => arrayHelpers.remove(index)}>
                <DeleteOutlined rev='' />
              </RemoveBtn>
              <PricingForm fieldName={`configurations.${index}`} index={index} />
            </PricingBox>
          ))}
        </PricingWrapper>
        <StyledButton onClick={() => arrayHelpers.push(newConfiguration)}>Додати конфігурацію</StyledButton>
      </>
    );
  };

  return <FieldArray name='configurations' render={renderPricingForm} />;
};

const RemoveBtn = styled(Button)`
  width: 32px;
  height: 30px;
  padding: 0;
  background: ${({ theme }) => theme.red};
  &:hover {
    background: ${({ theme }) => theme.red} !important;
  }
`;

const PricingWrapper = styled(Box)`
  flex-direction: column;
  align-items: flex-end;
  margin-top: ${({ theme }) => theme.marginM};
`;

const PricingBox = styled(Box)`
  gap: 20px;
  width: auto;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin: ${({ theme }) => theme.marginL} 0;
`;

export default InnerForm;
