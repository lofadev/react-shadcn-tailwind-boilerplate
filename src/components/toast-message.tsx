import { useEffect } from 'react';

import { CircleAlert, CircleCheck } from 'lucide-react';
import { toast as toastSonner } from 'sonner';

import { useToastStore } from '@/store';

import { Toaster } from './ui/sonner';

export const ToastMessage = () => {
  const { toast, setToast } = useToastStore();

  useEffect(() => {
    if (toast) {
      const toastType = toast.status === 'ERROR' ? 'error' : 'success';
      toastSonner[toastType](toast.message, {
        className: '!text-primary !bg-popover',
      });

      const timer = setTimeout(() => {
        setToast(null);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <Toaster
      icons={{
        success: <CircleCheck className="text-green-500" />,
        error: <CircleAlert className="text-red-500" />,
      }}
      position="top-center"
      duration={3000}
      expand
    />
  );
};
