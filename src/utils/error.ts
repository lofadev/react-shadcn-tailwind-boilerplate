import { AxiosError } from 'axios';

import { SYSTEM_ERROR } from '@/constants';
import { TToast } from '@/store';

export const handleApiError = (error: unknown, setToast: (msg: TToast) => void) => {
  if (error instanceof AxiosError && !error.response) {
    setToast({
      status: 'ERROR',
      message: SYSTEM_ERROR.SERVER_ERROR.MESSAGE,
    });
    return;
  }

  setToast(error as TToast);
  throw error;
};
