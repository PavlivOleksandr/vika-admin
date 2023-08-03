import React from 'react';

// helpers
import styled from 'styled-components';

// components
import Box from '../../Additional/Box';
import NoImage from '../../../assets/images/noImage.png';
import { Image as AntdImage } from 'antd';

type FitType = 'cover' | 'contain' | 'contain' | 'fill' | 'initial';

interface ImageProps {
  src: string;
  alt?: string;
  fit?: FitType;
  width?: string;
  height?: string;
  circle?: boolean;
  preview?: boolean;
  className?: string;

  onClick?: () => void;
}

const Image = ({
  src,
  alt = '',
  fit = 'cover',
  width = '100%',
  height = '100%',
  circle = false,
  preview = false,
  className = '',
  onClick,
}: ImageProps) => {
  return (
    <ImageLayout fit={fit} width={width} height={height} circle={circle} className={className} onClick={onClick}>
      <AntdImage src={src || NoImage} alt={alt} preview={preview} />
    </ImageLayout>
  );
};

const ImageLayout = styled(Box)<{ circle: boolean; fit: FitType }>`
  border-radius: ${({ theme, circle }) => (circle ? theme.circleBorderRadius : 0)};
  .ant-image {
    width: 100%;
    height: 100%;
    border-radius: ${({ theme, circle }) => (circle ? theme.circleBorderRadius : 0)};
    .ant-image-img {
      width: 100%;
      height: 100%;
      object-fit: ${({ fit }) => fit};
      border-radius: ${({ theme, circle }) => (circle ? theme.circleBorderRadius : 0)};
    }
  }
`;

export default Image;
