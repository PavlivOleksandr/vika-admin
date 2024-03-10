import React, { ReactNode } from 'react';

// helpers
import { RcFile } from 'antd/es/upload';

// components
import { Upload } from 'antd';
import { styled } from 'styled-components';
import { useFormikContext } from 'formik';

interface ImageUploaderProps {
  name?: string;
  value?: any;
  btnText?: string | ReactNode;
  multiple?: boolean;
  disabled?: boolean;
  className?: string;
  customButton?: ReactNode;
  shouldUseFormikContext?: boolean;

  uploadAction?: (file: RcFile) => void;
}

const ImageUploader = ({
  name,
  btnText,
  multiple = false,
  disabled,
  className = '',
  customButton,
  shouldUseFormikContext,
  uploadAction,
}: ImageUploaderProps) => {
  const formikContext: any = shouldUseFormikContext && useFormikContext<any>();

  const beforeUpload = (file: RcFile) => {
    if (formikContext) {
      formikContext.setFieldValue(name, file);
    }
    uploadAction && uploadAction(file);
  };
  // TODO add cropper

  return (
    // <ImgCrop rotationSlider>
    <StyledUplod
      accept='image/jpeg,image/png,image/svg'
      listType='picture-card'
      multiple={multiple}
      disabled={disabled}
      className={className}
      isCustom={!!customButton}
      beforeUpload={beforeUpload}
    >
      {customButton || btnText}
    </StyledUplod>
    // </ImgCrop>
  );
};

const StyledUplod = styled(Upload)<{ isCustom: boolean }>`
  &.ant-upload-wrapper {
    width: ${({ isCustom }) => (isCustom ? 'auto' : '100%')};
    margin: 0;
    .ant-upload-list {
      .ant-upload {
        width: ${({ isCustom }) => (isCustom ? 'auto' : '100%')};
        height: ${({ isCustom }) => (isCustom ? 'auto' : '100%')};
        border: ${({ isCustom }) => (isCustom ? '0' : '1px dashed #d9d9d9')};
        padding: ${({ isCustom, theme }) => (isCustom ? '0' : theme.paddingM)};
        background-color: ${({ isCustom }) => (isCustom ? 'transparent' : '#00000005')};
        margin-inline-end: 0;
        span {
          border: none;
          background: transparent;
        }
      }
    }
    .ant-upload-list-item-container {
      display: none !important;
    }
  }
`;

export default ImageUploader;
