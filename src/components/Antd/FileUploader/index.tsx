import React from 'react';

// helpers
import { RcFile } from 'antd/es/upload';

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
    <Upload accept='.xls, .xlsx' beforeUpload={beforeUpload} className={className}>
      <Button>
        <UploadOutlined rev='' /> {btnText}
      </Button>
    </Upload>
  );
};

export default FileUploader;
