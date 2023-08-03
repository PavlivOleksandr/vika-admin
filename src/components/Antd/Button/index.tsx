import React, { ReactNode } from 'react';

// components
import { Button as AntdButton } from 'antd';

// styles

type SizeType = 'small' | 'middle' | 'large';
type HtmlType = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps {
  size?: SizeType;
  type?: HtmlType;
  loading?: boolean;
  children: ReactNode;
  disabled?: boolean;
  className?: string;

  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({ size = 'middle', type = 'button', loading, children, disabled, className = 'default-btn', onClick }: ButtonProps) => {
  return (
    <AntdButton type='primary' size={size} htmlType={type} loading={loading} disabled={disabled} className={className} onClick={onClick}>
      {children}
    </AntdButton>
  );
};

export default Button;
