import React from 'react';

// helpers
import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme/theme';
import { RcFile } from 'antd/es/upload';
import { MattressModel } from '../../../interfaces/products';

// components
import Box from '../../../components/Additional/Box';
import Text from '../../../components/Antd/Text';
import Image from '../../../components/Antd/Image';
import Button from '../../../components/Antd/Button';
import ImageUploader from '../../../components/Antd/ImageUploader';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

interface IProps {
  mattress: MattressModel;
  isEditable: boolean;
  handleUploadImage: (file: RcFile) => Promise<void>;
  handleUploadAvatar: (file: RcFile) => Promise<void>;
  handleUpdateImages: (file: RcFile, index: number) => Promise<void>;
}

const Images = ({ mattress, isEditable, handleUploadImage, handleUploadAvatar, handleUpdateImages }: IProps) => {
  return (
    <Box direction='column'>
      <ImageBox>
        {isEditable && (
          <StyledBox>
            <RemoveBtn>
              <DeleteOutlined rev='' />
            </RemoveBtn>
            <ImageUploader
              customButton={
                <Button>
                  <EditOutlined rev='' />
                </Button>
              }
              uploadAction={handleUploadAvatar}
            />
          </StyledBox>
        )}
        {mattress.thumbnail.length ? (
          <Image width='400px' height='300px' preview={!isEditable} src={mattress.thumbnail} />
        ) : (
          <ImageUploader btnText='Додати аватар' uploadAction={handleUploadAvatar} />
        )}
      </ImageBox>
      <Box gap={12} margin={`${theme.marginM} 0 0 0`}>
        {mattress.images.map((image: string, index: number) => (
          <ImageBox key={index}>
            {isEditable && (
              <StyledBox>
                <RemoveBtn>
                  <DeleteOutlined rev='' />
                </RemoveBtn>
                <ImageUploader
                  customButton={
                    <Button>
                      <EditOutlined rev='' />
                    </Button>
                  }
                  uploadAction={file => handleUpdateImages(file, index)}
                />
              </StyledBox>
            )}
            <Image width='100px' height='100px' preview={!isEditable} src={image} />
          </ImageBox>
        ))}
        <ImageUploader
          btnText={
            <Text>
              <PlusOutlined rev='' />
              Додати фото
            </Text>
          }
          uploadAction={handleUploadImage}
        />
      </Box>
    </Box>
  );
};

const RemoveBtn = styled(Button)`
  background: ${({ theme }) => theme.red};
  &:hover {
    background: ${({ theme }) => theme.red} !important;
  }
`;

const ImageBox = styled(Box)`
  width: auto;
  position: relative;
`;

const StyledBox = styled(Box)`
  z-index: 2;
  width: auto;
  position: absolute;
  right: 2px;
  top: 2px;
  button {
    height: 24px;
    padding: ${({ theme }) => `0 ${theme.paddingS}`};
  }
`;

export default Images;
