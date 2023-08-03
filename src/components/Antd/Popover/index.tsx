import React, { ReactNode } from 'react';

// helpers
import { TooltipPlacement } from 'antd/es/tooltip';

// components
import Box from '../../Additional/Box';
import { Popover as AntdPopover } from 'antd';

type TriggerType = 'hover' | 'click';

interface PopoverProps {
  content: ReactNode;
  trigger?: TriggerType;
  children: ReactNode;
  className?: string;
  withArrow?: boolean;
  placement?: TooltipPlacement;
  overlayClassName?: string;
}

const Popover = ({
  content,
  trigger = 'hover',
  children,
  className = '',
  withArrow,
  placement = 'bottomLeft',
  overlayClassName = '',
}: PopoverProps) => {
  return (
    <AntdPopover
      arrow={withArrow}
      content={content}
      trigger={trigger}
      placement={placement}
      className={className}
      overlayClassName={overlayClassName}
    >
      <Box width='auto'>{children}</Box>
    </AntdPopover>
  );
};

export default Popover;
