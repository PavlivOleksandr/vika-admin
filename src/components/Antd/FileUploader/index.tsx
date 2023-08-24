import React from 'react';

// helpers
import { RcFile } from 'antd/es/upload';
import { styled } from 'styled-components';

// components
import Button from '../Button';
import { Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface FileUploaderProps {
  btnText: string;
  className?: string;
  action: (file: RcFile) => Promise<void>;
}

const FileUploader = ({ action, btnText, className = '' }: FileUploaderProps) => {
  const beforeUpload = (file: RcFile) => {
    action(file);
  };
  return (
    <StyledUpload accept='.xls, .xlsx' beforeUpload={beforeUpload} className={className}>
      <Button>
        <UploadOutlined rev='' /> {btnText}
      </Button>
    </StyledUpload>
  );
};

const StyledUpload = styled(Upload)`
  .ant-upload-list-item,
  .ant-upload-list-item-error {
    display: none !important;
  }
`;

export default FileUploader;
