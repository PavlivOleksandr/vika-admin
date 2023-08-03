import React from 'react';

// helpers
import { styled } from 'styled-components';
import { useFormikContext } from 'formik';

// components
import Box from '../../../components/Additional/Box';
import Button from '../../../components/Antd/Button';
import { EditOutlined, EyeOutlined, DeleteOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

interface IProps {
  isEditable: boolean;
  isHiddenForClients: boolean;
  setIsEditable: (value: boolean) => void;
}

const Settings = ({ isEditable, isHiddenForClients, setIsEditable }: IProps) => {
  const { setFieldValue }: any = useFormikContext();

  return (
    <Box justify='flex-end'>
      {isEditable && (
        <>
          <RemoveBtn onClick={() => setFieldValue('toRemove', true)}>
            Видалити <DeleteOutlined rev='' />
          </RemoveBtn>
          <HideBtn onClick={() => setFieldValue('isHiddenForClients', !isHiddenForClients ? true : false)}>
            {isHiddenForClients ? (
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

const RemoveBtn = styled(Button)`
  background: ${({ theme }) => theme.red};
  &:hover {
    background: ${({ theme }) => theme.red} !important;
  }
`;

const HideBtn = styled(Button)`
  background: ${({ theme }) => theme.orange};
  &:hover {
    background: ${({ theme }) => theme.orange} !important;
  }
`;

export default Settings;
