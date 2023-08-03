import React, { ReactNode } from 'react';

// components
import { Modal as AntdModal } from 'antd';

export interface RequiredPropsForModalDialog {
  isVisible: boolean;
  closeCallback: (value: any) => void;
}

interface ModalDialogProps extends RequiredPropsForModalDialog {
  title?: ReactNode;
  width?: number;
  footer?: ReactNode | null;
  children: ReactNode;
  centered?: boolean;
  className?: string;

  afterClose?: () => void;
}

const ModalDialog = ({
  width,
  title,
  footer = null,
  children,
  centered = true,
  isVisible: open,
  className = '',
  afterClose,
  closeCallback,
}: ModalDialogProps) => {
  return (
    <AntdModal
      open={open}
      width={width}
      title={title}
      footer={footer}
      centered={centered}
      className={className}
      onCancel={closeCallback}
      afterClose={afterClose}
    >
      {children}
    </AntdModal>
  );
};

export default ModalDialog;
