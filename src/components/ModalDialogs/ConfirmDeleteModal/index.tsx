import React from 'react';

// components
import ModalDialog from '../../Antd/ModalDialog';
import Button from '../../Antd/Button';
import Box from '../../Additional/Box';

interface IProps {
  isVisible: boolean;
  closeCallback: () => void;
}

const ConfirmDeleteModal = ({ isVisible, closeCallback }: IProps) => {
  return (
    <ModalDialog isVisible={isVisible} closeCallback={closeCallback}>
      <Box justify='center'>
        Ви впевнені, що хочете видалити?
        <Button>Відхилити</Button>
        <Button>Видалити</Button>
      </Box>
    </ModalDialog>
  );
};

export default ConfirmDeleteModal;
