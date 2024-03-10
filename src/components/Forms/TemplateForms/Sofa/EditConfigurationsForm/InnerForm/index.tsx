import React, { useEffect } from 'react';

// helpers
import { styled } from 'styled-components';
import { FormValuesModel } from '..';
import { FabricCategoriesEnum } from '../../../../../../constants/sofa';
import { SofaConfigurationModel } from '../../../../../../interfaces/sofa';
import { FieldArrayRenderProps, useFormikContext, FieldArray } from 'formik';

// components
import Box from '../../../../../Additional/Box';
import Button from '../../../../../Antd/Button';
import PricingForm from './PricingForm';
import { DeleteOutlined } from '@ant-design/icons';

interface IProps {
  configurations: SofaConfigurationModel[];
}

const InnerForm = ({ configurations }: IProps) => {
  const { values, setFieldValue } = useFormikContext<FormValuesModel>();

  const renderPricingForm = (arrayHelpers: FieldArrayRenderProps) => {
    const newConfiguration = {
      collapse: null,
      pricing: Object.values(FabricCategoriesEnum).map(fabric => ({
        fabric,
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

  useEffect(() => {
    setFieldValue('configurations', configurations);
    console.log('1');
  }, [configurations]);

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
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin: ${({ theme }) => theme.marginL} 0;
`;

export default InnerForm;
