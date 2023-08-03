import React from 'react';

// helpers
import { SizeEnum } from '../../../constants/mattresses';

// components
import Box from '../../Additional/Box';
import ModalDialog from '../../Antd/ModalDialog';
import Text from '../../Antd/Text';
import { theme } from '../../../assets/styles/theme/theme';

interface IProps {
  isVisible: boolean;
  configurations: any;
  closeCallback: () => void;
}

const EditMattressConfiguration = ({ isVisible, configurations, closeCallback }: IProps) => {
  console.log(configurations);

  // const sizeOptionsArray = values.isForKids ? Object.values(KidsSizeEnum) : Object.values(SizeEnum);
  const sizeOptionsArray = Object.values(SizeEnum);

  return (
    <ModalDialog width={1000} isVisible={isVisible} closeCallback={closeCallback}>
      <Box justify='space-between' padding={theme.paddingM}>
        <Box width='auto' direction='column'>
          <Text>Висота</Text>
          {configurations.map((conf: any) => (
            <Box key={conf.height}>{conf.height}</Box>
          ))}
        </Box>
        <Box width='auto' direction='column'>
          <Box gap={40}>
            {sizeOptionsArray.map((size: string) => (
              <Box key={size}>{size}</Box>
            ))}
          </Box>
          <Box gap={40}>
            {sizeOptionsArray.map((size: string) => (
              <Box key={size}>{size}</Box>
            ))}
          </Box>
        </Box>
      </Box>
    </ModalDialog>
  );
};

export default EditMattressConfiguration;
