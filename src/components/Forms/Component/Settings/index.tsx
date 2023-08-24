import React from 'react';

// helpers
import { styled } from 'styled-components';
import { useFormikContext } from 'formik';

// components
import Box from '../../../Additional/Box';
import Button from '../../../Antd/Button';
import { EditOutlined, EyeOutlined, DeleteOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

interface IProps {
  isEditable: boolean;
  setIsEditable: (value: boolean) => void;
}

const Settings = ({ isEditable, setIsEditable }: IProps) => {
  const { values, setFieldValue }: any = useFormikContext();

  return (
    <Box justify='flex-end'>
      {isEditable && (
        <>
          <RemoveBtn isRemoved={values.toRemove} onClick={() => setFieldValue('toRemove', !values.toRemove)}>
            {values.toRemove ? (
              <>Видалено</>
            ) : (
              <>
                Видалити <DeleteOutlined rev='' />
              </>
            )}
          </RemoveBtn>
          <HideBtn onClick={() => setFieldValue('isHiddenForClients', !values.isHiddenForClients ? true : false)}>
            {values.isHiddenForClients ? (
              <>
                Дозволити перегляд клієнтам <EyeOutlined rev='' />
              </>
            ) : (
              <>
                Приховати для клієнтів <EyeInvisibleOutlined rev='' />
              </>
            )}
          </HideBtn>
        </>
      )}
      <Button onClick={() => setIsEditable(!isEditable)}>
        {!isEditable ? (
          <Box align='center' gap={8}>
            Редагувати <EditOutlined rev='' />
          </Box>
        ) : (
          <Box align='center' gap={8}>
            Перегляд <EyeOutlined rev='' />
          </Box>
        )}
      </Button>
    </Box>
  );
};

const RemoveBtn = styled(Button)<{ isRemoved: boolean }>`
  background: ${({ theme, isRemoved }) => (isRemoved ? theme.gray2 : theme.red)};
  &:hover {
    background: ${({ theme, isRemoved }) => (isRemoved ? theme.gray2 : theme.red)} !important;
  }
`;

const HideBtn = styled(Button)`
  background: ${({ theme }) => theme.orange};
  &:hover {
    background: ${({ theme }) => theme.orange} !important;
  }
`;

export default Settings;
