import React from 'react';

// helpers
import styled from 'styled-components';
import { theme } from '../../../../assets/styles/theme/theme';
import { RcFile } from 'antd/es/upload';

// components
import Box from '../../../Additional/Box';
import Text from '../../../Antd/Text';
import Image from '../../../Antd/Image';
import Button from '../../../Antd/Button';
import NoImage from '../../../../assets/images/noImage.png';
import ImageUploader from '../../../Antd/ImageUploader';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface IProps {
  images: string[];
  thumbnail: string;
  isEditable: boolean;
  handleUploadImage: (file: RcFile) => Promise<void>;
  handleUploadAvatar: (file: RcFile) => Promise<void>;
  handleUpdateImages: (file: RcFile, index: number) => Promise<void>;
}

const Images = ({ thumbnail, isEditable, images, handleUploadImage, handleUploadAvatar, handleUpdateImages }: IProps) => {
  return (
    <Box direction='column'>
      <ImageBox>
        {isEditable && !!thumbnail?.length && (
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
        {thumbnail?.length ? (
          <Image width='400px' height='300px' preview={!isEditable} src={thumbnail || NoImage} />
        ) : (
          <AvatarUploader btnText='Додати аватар' uploadAction={handleUploadAvatar} />
        )}
      </ImageBox>
      <Box gap={12} margin={`${theme.marginM} 0 0 0`}>
        {images?.map((image: string, index: number) => (
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
        <ImagesUploader btnText={<Text>Додати фото</Text>} uploadAction={handleUploadImage} />
      </Box>
    </Box>
  );
};

const AvatarUploader = styled(ImageUploader)`
  width: 300px !important;
  .ant-upload {
    height: 340px !important;
  }
`;

const ImagesUploader = styled(ImageUploader)`
  width: 120px !important;
  .ant-upload {
    height: 120px !important;
  }
`;

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
