import { CircleAlert, CircleCheck, Info, TriangleAlert } from 'lucide-react';
import { useTheme } from 'next-themes';
import { ToasterProps } from 'sonner';

import { Toaster } from '../ui/sonner';

const ToastMessage = (props: ToasterProps) => {
  const { theme } = useTheme();

  return (
    <Toaster
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      icons={{
        success: <CircleCheck className="text-success mt-1" />,
        error: <CircleAlert className="text-error mt-1" />,
        warning: <TriangleAlert className="text-warning mt-1" />,
        info: <Info className="text-info mt-1" />,
      }}
      position="top-center"
      expand
      closeButton
      {...props}
    />
  );
};

export default ToastMessage;
