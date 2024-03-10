import { useEffect, useMemo, ReactNode } from 'react';

// helpers
import { notification } from 'antd';
import { NotificationPlacement } from 'antd/es/notification/interface';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export type NotificationConfig = {
  type: NotificationType;
  isOpen: boolean;
  description: string;
};

interface NotificationProps {
  type?: NotificationType;
  title?: string;
  isOpen: boolean;
  duration?: number;
  placement?: NotificationPlacement;
  description?: ReactNode;

  closeCallback?: () => void;
}

const Notification = ({
  type = 'info',
  title = '',
  isOpen,
  duration = 3,
  placement = 'bottomRight',
  description,
  closeCallback,
}: NotificationProps) => {
  const [api, contextHolder] = notification.useNotification();

  const notificationConfig = useMemo(
    () => ({
      message: title,
      description,
      placement,
      duration,
      className: `notification`,
    }),
    [title, description, placement, duration],
  );

  useEffect(() => {
    if (isOpen) {
      switch (type) {
        case 'success':
          api.success(notificationConfig);
          break;
        case 'error':
          api.error(notificationConfig);
          break;
        case 'warning':
          api.warning(notificationConfig);
          break;
        default:
          api.info(notificationConfig);
          break;
      }
      closeCallback && closeCallback();
    }
  }, [isOpen, closeCallback, api, notificationConfig, type]);

  return contextHolder;
};

export default Notification as any;
